// Shaders for the home page examination: one painting seen under visible light, as the model's
// words, and under infrared, X-ray, raking light and ultraviolet. Ported from the adopted prototype
// in docs/design/homepage-examination.

export const vertexShader = "attribute vec2 p; varying vec2 v; void main(){ v = p * .5 + .5; gl_Position = vec4(p, 0., 1.); }";

const common = `precision highp float;
varying vec2 v;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++){ s += a * n(p); p *= 2.03; a *= .5; } return s; }
float lum(vec3 c){ return dot(c, vec3(.299, .587, .114)); }
`;

export const fragmentShader = common + `
uniform sampler2D uImg, uGhost, uMaskA, uMaskB, uSoft;
uniform vec2 uSSize;
uniform vec2 uRes, uSize, uGSize, uFocus, uGOff;
uniform vec3 uLens;
uniform float uA, uB, uSweep, uTime, uLensMode, uDpr, uWriting, uReveal, uSwap, uTop, uLh, uBlur, uMag, uGam, uGain, uUnder;
uniform vec4 uSpot0, uSpot1, uSpot2, uSpot3, uClear0;
vec2 cover(vec2 uv){
  float ar = uRes.x / uRes.y, ir = uSize.x / uSize.y;
  vec2 s = ar > ir ? vec2(1., ir / ar) : vec2(ar / ir, 1.);
  return uv * s + clamp(uFocus - s * .5, vec2(0.), 1. - s);
}
vec3 T(vec2 p){ return texture2D(uImg, p).rgb; }
vec3 infrared(vec2 p){
  vec2 e = 1.4 / uSize;
  float tl = lum(T(p + vec2(-e.x, -e.y))), tc = lum(T(p + vec2(0., -e.y))), tr = lum(T(p + vec2(e.x, -e.y)));
  float ml = lum(T(p + vec2(-e.x, 0.))), mr = lum(T(p + vec2(e.x, 0.)));
  float bl = lum(T(p + vec2(-e.x, e.y))), bc = lum(T(p + vec2(0., e.y))), br = lum(T(p + vec2(e.x, e.y)));
  float gx = -tl - 2. * ml - bl + tr + 2. * mr + br, gy = -tl - 2. * tc - tr + bl + 2. * bc + br;
  float edge = smoothstep(.12, .55, length(vec2(gx, gy)));
  float l = lum(T(p));
  float d = (p.x * uSize.x + p.y * uSize.y) / 5.;
  float hatch = pow(.5 + .5 * sin(d * 6.2832), 10.) * smoothstep(.42, .12, l);
  float g = mix(.7, l, .3) - edge * .5 - hatch * .16 + (n(p * uSize * .6) - .5) * .05;
  return vec3(g) * vec3(1., .985, .955);
}
vec3 xray(vec2 p){
  float l = lum(T(p));
  float ar = uSize.x / uSize.y, gr = uGSize.x / uGSize.y;
  vec2 g = ar > gr ? vec2(p.x, (p.y - .5) * gr / ar + .5) : vec2((p.x - .5) * ar / gr + .5, p.y);
  float gl = lum(texture2D(uGhost, clamp(g + uGOff, 0., 1.)).rgb);
  float dens = pow(smoothstep(.04, .92, l), 1.35) * .66 + pow(smoothstep(.08, .9, gl), 1.5) * .42;
  vec2 w = p * uSize * .95;
  dens += ((.5 + .5 * sin(w.x * 3.14)) * (.5 + .5 * sin(w.y * 3.14)) - .25) * .07;
  float edgeX = min(p.x, 1. - p.x) * ar, edgeY = min(p.y, 1. - p.y);
  float bar = smoothstep(.07, .055, edgeX) * smoothstep(.0, .012, edgeX) + smoothstep(.07, .055, edgeY) * smoothstep(.0, .012, edgeY);
  dens += bar * .1;
  dens = dens * .88 + .05 + (h(p * uSize) - .5) * .05;
  return vec3(dens) * vec3(.93, .97, 1.03);
}
vec3 raking(vec2 p){
  vec2 e = 1.5 / uSize;
  float hl = lum(T(p - vec2(e.x, 0.))), hr = lum(T(p + vec2(e.x, 0.))), hu = lum(T(p - vec2(0., e.y))), hd = lum(T(p + vec2(0., e.y)));
  vec2 q = p * uSize * .18;
  float m0 = fbm(q), mx = fbm(q + vec2(.35, 0.)), my = fbm(q + vec2(0., .35));
  vec3 nr = normalize(vec3((hl - hr) * 5. + (m0 - mx) * .55, (hu - hd) * 5. + (m0 - my) * .55, 1.));
  vec3 L = normalize(vec3(-1., -.18, .2));
  float sh = clamp(dot(nr, L) * 1.6, 0., 1.4);
  vec3 c = T(p);
  float fall = mix(1.3, .38, smoothstep(0., 1., p.x));
  return mix(vec3(lum(c)), c, .55) * (.18 + sh) * fall;
}
float spot(vec2 p, vec4 s, float k){ vec2 d = (p - s.xy) / s.zw; return smoothstep(1., .55, length(d) + (fbm(p * 60. + k) - .5) * .7); }
vec3 ultraviolet(vec2 p){
  vec3 c = T(p); float l = lum(c);
  vec3 col = mix(vec3(.035, .025, .075), vec3(.34, .42, .27), smoothstep(.04, .9, l));
  col += vec3(.05, .0, .1) * (1. - l) + vec3(.02, .05, .02) * fbm(p * 14.);
  float r = max(max(spot(p, uSpot0, 1.), spot(p, uSpot1, 2.)), max(spot(p, uSpot2, 3.), spot(p, uSpot3, 4.)));
  return mix(col, vec3(.03, .02, .05), r * .86);
}
/* The general model only has the gist: the painting seen out of focus, from a tiny copy of itself */
vec3 soft(vec2 p){
  vec2 e = .75 / uSSize;
  return (texture2D(uSoft, p).rgb * 4. + texture2D(uSoft, p + vec2(e.x, 0.)).rgb + texture2D(uSoft, p - vec2(e.x, 0.)).rgb + texture2D(uSoft, p + vec2(0., e.y)).rgb + texture2D(uSoft, p - vec2(0., e.y)).rgb) / 8.;
}
vec3 paintB(vec2 p){
  if (uBlur < .001) return T(p);
  vec3 g = soft(p);
  g = mix(vec3(lum(g)), g, .55);
  return mix(T(p), g, uBlur);
}
vec3 layer(vec2 p, float m){
  if (m < .5) return T(p);
  if (m < 1.5) return infrared(p);
  if (m < 2.5) return xray(p);
  if (m < 3.5) return raking(p);
  if (m < 4.5) return ultraviolet(p);
  return paintB(p);
}
float soft(vec2 p, vec4 r){ vec2 d = max(r.xy - p, p - r.zw); float e = max(d.x, d.y); return 1. - smoothstep(-40. * uDpr, 70. * uDpr, e + (n(p / (26. * uDpr)) - .5) * 60. * uDpr); }
vec3 msk(vec2 sp){ float line = floor((sp.y - uTop) / uLh); float pos = line + sp.x / uRes.x; return pos < uSwap ? texture2D(uMaskB, sp / uRes).rgb : texture2D(uMaskA, sp / uRes).rgb; }
vec3 inkOf(vec3 c){ return clamp(pow(mix(vec3(lum(c)), c, 1.2), vec3(uGam)) * uGain + .02, 0., 1.); }
vec3 words(vec2 fp){
  vec3 m = msk(fp); vec3 c = paintB(cover(fp / uRes));
  vec3 col = mix(c * uUnder * (1. - soft(fp, uClear0)), inkOf(c), m.r);
  return mix(col, vec3(.14, .22, 1.), m.b);
}
vec3 base(vec2 fp, vec2 p, float m){ return m > 4.5 ? words(fp) : layer(p, m); }
void main(){
  vec2 fp = vec2(v.x, 1. - v.y) * uRes;
  vec2 p = cover(fp / uRes);
  vec3 col = base(fp, p, uA);
  if (uWriting > .5) {
    float line = floor((fp.y - uTop) / uLh), pos = line + fp.x / uRes.x;
    if (pos < uReveal) col = words(fp);
    float fl = floor(uReveal), fx = fract(uReveal) * uRes.x, top = uTop + fl * uLh;
    float cur = step(abs(line - fl), .5) * step(top + uLh * .14, fp.y) * step(fp.y, top + uLh * .86) * step(fx, fp.x) * step(fp.x, fx + uLh * .5);
    col = mix(col, vec3(.14, .22, 1.), cur);
  } else if (uSweep > 0. && uSweep < 1.) {
    float sx = uSweep * uRes.x;
    if (fp.x < sx) col = base(fp, p, uB);
    float dh = abs(fp.x - sx) / uDpr;
    col += vec3(.55, .62, 1.) * exp(-dh * .8) * .9 + vec3(.14, .22, 1.) * exp(-dh * .04) * .06;
  }
  if (uLens.z > 0.) {
    float ld = distance(fp, uLens.xy);
    if (ld < uLens.z) {
      vec2 sp = uLens.xy + (fp - uLens.xy) / uMag;
      vec3 m = msk(sp); vec3 c = layer(cover(sp / uRes), uLensMode);
      col = mix(mix(c * .16, clamp(c * 1.2 + .3, 0., 1.), m.r), vec3(.35, .45, 1.), m.b);
    }
    col = mix(col, vec3(.14, .22, 1.), (1. - smoothstep(0., 1.4 * uDpr, abs(ld - uLens.z))) * .95);
    float out9 = step(uLens.z, ld) * step(ld, uLens.z + 9. * uDpr);
    col = mix(col, vec3(.14, .22, 1.), clamp(out9 * (step(abs(fp.y - uLens.y), .7 * uDpr) + step(abs(fp.x - uLens.x), .7 * uDpr)), 0., 1.));
  }
  vec2 q = (v - .5) * vec2(uRes.x / uRes.y, 1.);
  col *= mix(1., smoothstep(1.3, .3, length(q)), .35);
  col += (h(fp + fract(uTime * 11.) * 97.) - .5) * .035;
  gl_FragColor = vec4(col, 1.);
}`;

export const uniformNames = ["uSoft", "uSSize", "uImg", "uGhost", "uMaskA", "uMaskB", "uRes", "uSize", "uGSize", "uFocus", "uGOff", "uLens", "uA", "uB", "uSweep", "uTime", "uLensMode", "uDpr", "uWriting", "uReveal", "uSwap", "uTop", "uLh", "uBlur", "uMag", "uGam", "uGain", "uUnder", "uSpot0", "uSpot1", "uSpot2", "uSpot3", "uClear0"] as const;

export type UniformName = (typeof uniformNames)[number];

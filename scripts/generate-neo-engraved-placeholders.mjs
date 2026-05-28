import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { deflateSync } from "node:zlib";

const width = 1536;
const height = 960;

const assets = [
  ["home-hero-local-ai-boundary", "boundary"],
  ["home-delivery-chain", "chain"],
  ["home-melix-product-panel", "runtime"],
  ["services-hero-private-data", "vault"],
  ["services-dataset-package", "folios"],
  ["services-lora-adapter", "adapter"],
  ["services-fused-model", "engine"],
  ["services-evaluation-report", "report"],
  ["services-deployment-runbook", "runbook"],
  ["services-support", "support"],
  ["melix-main-ui", "runtime"],
  ["melix-scene-composite", "composite"],
  ["security-boundary-model", "security"],
  ["security-evidence-dashboard", "dashboard"],
  ["work-case-wall", "archive"],
  ["contact-scoping-flow", "scoping"]
];

const palette = {
  paper: [253, 252, 252],
  paperShade: [239, 236, 231],
  ink: [36, 35, 33],
  graphite: [80, 77, 72],
  pale: [185, 181, 172],
  brass: [159, 116, 66],
  blue: [66, 104, 195]
};

function hash(value) {
  let state = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    state ^= value.charCodeAt(index);
    state = Math.imul(state, 16777619);
  }
  return state >>> 0;
}

function rng(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let next = state;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas() {
  const data = new Uint8Array(width * height * 4);
  for (let i = 0; i < width * height; i += 1) {
    data[i * 4] = palette.paper[0];
    data[i * 4 + 1] = palette.paper[1];
    data[i * 4 + 2] = palette.paper[2];
    data[i * 4 + 3] = 255;
  }
  return data;
}

function blend(data, x, y, color, alpha = 1) {
  const px = Math.round(x);
  const py = Math.round(y);
  if (px < 0 || py < 0 || px >= width || py >= height) return;
  const index = (py * width + px) * 4;
  const a = Math.max(0, Math.min(1, alpha));
  data[index] = Math.round(data[index] * (1 - a) + color[0] * a);
  data[index + 1] = Math.round(data[index + 1] * (1 - a) + color[1] * a);
  data[index + 2] = Math.round(data[index + 2] * (1 - a) + color[2] * a);
}

function line(data, x1, y1, x2, y2, color = palette.ink, alpha = 0.7, thickness = 1) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy), 1);
  for (let i = 0; i <= steps; i += 1) {
    const x = x1 + (dx * i) / steps;
    const y = y1 + (dy * i) / steps;
    for (let ox = -thickness + 1; ox < thickness; ox += 1) {
      for (let oy = -thickness + 1; oy < thickness; oy += 1) {
        if (ox * ox + oy * oy <= thickness * thickness) blend(data, x + ox, y + oy, color, alpha);
      }
    }
  }
}

function rect(data, x, y, w, h, color = palette.ink, alpha = 0.5, thickness = 1) {
  line(data, x, y, x + w, y, color, alpha, thickness);
  line(data, x + w, y, x + w, y + h, color, alpha, thickness);
  line(data, x + w, y + h, x, y + h, color, alpha, thickness);
  line(data, x, y + h, x, y, color, alpha, thickness);
}

function fillRect(data, x, y, w, h, color = palette.paperShade, alpha = 0.35) {
  for (let py = Math.max(0, Math.floor(y)); py < Math.min(height, Math.ceil(y + h)); py += 1) {
    for (let px = Math.max(0, Math.floor(x)); px < Math.min(width, Math.ceil(x + w)); px += 1) {
      blend(data, px, py, color, alpha);
    }
  }
}

function ellipse(data, cx, cy, rx, ry, color = palette.ink, alpha = 0.55, thickness = 1) {
  const steps = Math.max(80, Math.floor((rx + ry) * 1.5));
  let lastX = cx + rx;
  let lastY = cy;
  for (let i = 1; i <= steps; i += 1) {
    const angle = (Math.PI * 2 * i) / steps;
    const x = cx + Math.cos(angle) * rx;
    const y = cy + Math.sin(angle) * ry;
    line(data, lastX, lastY, x, y, color, alpha, thickness);
    lastX = x;
    lastY = y;
  }
}

function fillEllipse(data, cx, cy, rx, ry, color = palette.paperShade, alpha = 0.18) {
  for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y += 1) {
    for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x += 1) {
      const nx = (x - cx) / rx;
      const ny = (y - cy) / ry;
      if (nx * nx + ny * ny <= 1) blend(data, x, y, color, alpha);
    }
  }
}

function polyline(data, points, color = palette.ink, alpha = 0.55, thickness = 1, close = false) {
  for (let i = 0; i < points.length - 1; i += 1) line(data, points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], color, alpha, thickness);
  if (close && points.length > 2) line(data, points.at(-1)[0], points.at(-1)[1], points[0][0], points[0][1], color, alpha, thickness);
}

function hatchRect(data, x, y, w, h, spacing = 12, color = palette.ink, alpha = 0.12, angle = -1) {
  const span = w + h;
  for (let offset = -h; offset < span; offset += spacing) {
    if (angle < 0) line(data, x + offset, y + h, x + offset + h, y, color, alpha, 1);
    else line(data, x + offset, y, x + offset + h, y + h, color, alpha, 1);
  }
}

function plate(data, x, y, w, h, depth = 38) {
  const top = [[x, y], [x + w, y - depth], [x + w + depth, y], [x + depth, y + depth]];
  const bottom = top.map(([px, py]) => [px, py + h]);
  polyline(data, top, palette.ink, 0.38, 2, true);
  polyline(data, bottom, palette.ink, 0.28, 1, true);
  for (let i = 0; i < top.length; i += 1) line(data, top[i][0], top[i][1], bottom[i][0], bottom[i][1], palette.ink, 0.22, 1);
  hatchRect(data, x + 18, y - depth + 18, w, h + depth, 16, palette.ink, 0.06, -1);
}

function cable(data, x1, y1, x2, y2, color = palette.blue) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 80;
  let last = [x1, y1];
  for (let i = 1; i <= 40; i += 1) {
    const t = i / 40;
    const x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * mx + t * t * x2;
    const y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * my + t * t * y2;
    line(data, last[0], last[1], x, y, color, 0.22, 1);
    last = [x, y];
  }
}

function drawBackground(data, random) {
  for (let i = 0; i < 9000; i += 1) {
    const x = Math.floor(random() * width);
    const y = Math.floor(random() * height);
    blend(data, x, y, random() > 0.5 ? palette.ink : palette.brass, 0.025);
  }
  for (let y = 72; y < height - 72; y += 34) line(data, 80, y, width - 80, y, palette.ink, 0.025, 1);
  rect(data, 70, 66, width - 140, height - 132, palette.ink, 0.08, 1);
}

function drawDossier(data, x, y, w, h, random) {
  fillRect(data, x, y, w, h, palette.paperShade, 0.32);
  rect(data, x, y, w, h, palette.ink, 0.22, 1);
  hatchRect(data, x + 6, y + 6, w - 12, h - 12, 10, palette.ink, 0.08, random() > 0.5 ? 1 : -1);
  for (let i = 0; i < 5; i += 1) line(data, x + 24, y + 28 + i * 18, x + w - 34, y + 28 + i * 18, palette.ink, 0.13, 1);
  for (let i = 0; i < 4; i += 1) fillEllipse(data, x + 32 + i * 36, y + h - 28, 5, 5, i % 2 ? palette.blue : palette.brass, 0.45);
}

function drawNode(data, x, y, r, color = palette.ink) {
  fillEllipse(data, x, y, r, r, palette.paperShade, 0.4);
  ellipse(data, x, y, r, r, color, 0.45, 2);
  ellipse(data, x, y, r * 0.46, r * 0.46, color, 0.18, 1);
}

function drawRack(data, x, y, w, h) {
  fillRect(data, x, y, w, h, palette.ink, 0.08);
  rect(data, x, y, w, h, palette.ink, 0.34, 2);
  for (let i = 1; i < 7; i += 1) line(data, x + 10, y + (h * i) / 7, x + w - 10, y + (h * i) / 7, palette.ink, 0.18, 1);
  for (let i = 0; i < 12; i += 1) fillEllipse(data, x + 20 + (i % 4) * 22, y + 20 + Math.floor(i / 4) * 26, 3, 3, i % 3 ? palette.blue : palette.brass, 0.42);
}

function drawScene(data, kind, seed) {
  const random = rng(seed);
  drawBackground(data, random);
  plate(data, 250, 630, 900, 96, 54);

  if (["boundary", "security"].includes(kind)) {
    for (let i = 0; i < 4; i += 1) rect(data, 310 + i * 56, 218 + i * 34, 900 - i * 112, 430 - i * 68, i % 2 ? palette.blue : palette.ink, i % 2 ? 0.2 : 0.16, 2);
    drawRack(data, 390, 440, 150, 190);
    drawNode(data, 760, 430, 74, palette.brass);
    drawDossier(data, 965, 394, 180, 210, random);
    cable(data, 540, 506, 690, 430);
    cable(data, 834, 430, 965, 470);
  }

  if (["chain", "scoping"].includes(kind)) {
    const xs = [260, 430, 600, 770, 940, 1110];
    xs.forEach((x, i) => {
      drawDossier(data, x, 360 + (i % 2) * 34, 120, 150, random);
      if (i < xs.length - 1) cable(data, x + 120, 420 + (i % 2) * 34, xs[i + 1], 420 + ((i + 1) % 2) * 34, i % 2 ? palette.brass : palette.blue);
    });
    drawNode(data, 755, 590, 42, palette.brass);
  }

  if (["runtime", "dashboard", "composite"].includes(kind)) {
    fillRect(data, 330, 260, 860, 420, palette.ink, 0.05);
    rect(data, 330, 260, 860, 420, palette.ink, 0.28, 2);
    for (let i = 0; i < 3; i += 1) rect(data, 380 + i * 260, 310, 210, 135, i === 1 ? palette.blue : palette.ink, 0.17, 1);
    for (let i = 0; i < 4; i += 1) rect(data, 390 + i * 180, 500, 142, 95, i % 2 ? palette.brass : palette.ink, 0.16, 1);
    for (let i = 0; i < 28; i += 1) drawNode(data, 470 + (i % 7) * 78, 650 - Math.floor(i / 7) * 56, 10, i % 4 ? palette.ink : palette.blue);
    drawRack(data, 1050, 360, 120, 210);
  }

  if (["vault", "engine", "adapter"].includes(kind)) {
    drawRack(data, 360, 380, 145, 230);
    plate(data, 620, 430, 350, 70, 34);
    drawNode(data, 810, 380, 70, palette.brass);
    for (let i = 0; i < 7; i += 1) rect(data, 665 + i * 38, 464 - i * 5, 52, 80, i % 2 ? palette.blue : palette.ink, 0.12, 1);
    drawDossier(data, 1030, 360, 190, 230, random);
    cable(data, 500, 470, 720, 430);
    cable(data, 884, 430, 1030, 450);
  }

  if (["folios", "report", "runbook", "archive"].includes(kind)) {
    for (let i = 0; i < 8; i += 1) {
      const x = 260 + (i % 4) * 240;
      const y = 260 + Math.floor(i / 4) * 210 + (i % 2) * 18;
      drawDossier(data, x, y, 185, 150, random);
    }
    drawNode(data, 745, 590, 48, palette.brass);
    for (let i = 0; i < 6; i += 1) cable(data, 745, 590, 340 + i * 180, 400 + (i % 2) * 160, i % 2 ? palette.blue : palette.brass);
  }

  if (kind === "support") {
    drawDossier(data, 340, 350, 230, 210, random);
    drawRack(data, 920, 350, 140, 230);
    drawNode(data, 720, 435, 64, palette.brass);
    rect(data, 650, 580, 260, 86, palette.ink, 0.2, 2);
    hatchRect(data, 650, 580, 260, 86, 9, palette.ink, 0.08, 1);
    cable(data, 570, 450, 670, 435);
    cable(data, 785, 435, 920, 465);
  }

  for (let i = 0; i < 50; i += 1) {
    const x = 180 + random() * 1150;
    const y = 180 + random() * 600;
    line(data, x, y, x + 18 + random() * 44, y - 6 + random() * 12, random() > 0.8 ? palette.brass : palette.ink, 0.08, 1);
  }
}

function crc32(buffer) {
  let crc = -1;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let j = 0; j < 8; j += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function encodePng(data) {
  const scanlines = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (width * 4 + 1);
    scanlines[rowStart] = 0;
    Buffer.from(data.buffer, y * width * 4, width * 4).copy(scanlines, rowStart + 1);
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(scanlines, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

const outDir = join(process.cwd(), "public", "placeholders");
mkdirSync(outDir, { recursive: true });

for (const [id, kind] of assets) {
  const data = makeCanvas();
  drawScene(data, kind, hash(id));
  const filePath = join(outDir, `${id}.png`);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, encodePng(data));
}

process.stdout.write(`Generated ${assets.length} neo-engraved placeholder images in ${outDir}\n`);

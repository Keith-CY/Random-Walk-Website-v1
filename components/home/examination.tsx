"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/site/site-nav";
import { domains, painting, steps } from "@/lib/examination/data";
import { createExamination, type Examination as Engine, type Model } from "@/lib/examination/engine";
import { localizePath, type Locale } from "@/lib/i18n";
import { company, getSiteCopy, paintings } from "@/lib/site-copy";

const pct = (n: number) => `${n * 100}%`;

export function Examination({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const examRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const xyRef = useRef<HTMLElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const [step, setStep] = useState(0);
  const [marksOn, setMarksOn] = useState(-1);
  const [domainKey, setDomainKey] = useState(domains[0].key);
  const [model, setModel] = useState<Model>("base");

  useEffect(() => {
    const exam = examRef.current, stage = stageRef.current, canvas = canvasRef.current, map = mapRef.current, tip = tipRef.current, xy = xyRef.current;
    if (!exam || !stage || !canvas || !map || !tip || !xy) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue("--font-text").trim() || "Archivo, sans-serif";
    let marksTimer = 0;
    const engine = createExamination(
      {
        exam,
        stage,
        canvas,
        map,
        tip,
        xy,
        obstacles: (k) => [
          ...stage.querySelectorAll(".x-nav .s-nav-logo, .x-nav .s-nav-links, .x-nav .s-nav-actions, .x-meta, .x-index"),
          ...stage.querySelectorAll(`[data-step="${k}"]`)
        ]
      },
      {
        onStep: (k) => {
          setStep(k);
          setMarksOn(-1);
          window.clearTimeout(marksTimer);
          marksTimer = window.setTimeout(() => setMarksOn(k), reduce ? 0 : 900);
        },
        onAutoTrained: () => setModel("trained")
      },
      { reduce, fontFamily }
    );
    engineRef.current = engine;
    if (!engine) stage.dataset.still = "true";
    return () => {
      window.clearTimeout(marksTimer);
      engine?.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setDemo(domainKey, model);
  }, [domainKey, model]);

  const goTo = (k: number) => {
    const exam = examRef.current;
    if (!exam) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = exam.offsetTop + (exam.offsetHeight - window.innerHeight) * ((k + 0.5) / steps.length);
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  };

  const current = steps[step];
  const markMode = marksOn >= 0 ? steps[marksOn].mode : -1;
  const domain = domains.find((d) => d.key === domainKey) ?? domains[0];
  const col = model === "trained" ? 2 : 1;
  const topWord = [...domain.candidates].sort((a, b) => b[col] - a[col])[0][0];

  return (
    <section className="x-exam" ref={examRef} aria-labelledby="exam-title">
      <div className="x-stage" ref={stageRef} data-tone={current.tone}>
        <div className="x-still-frame">
          <Image className="x-still" src={paintings.home.src} alt={paintings.home.alt} fill priority sizes="100vw" />
        </div>
        <canvas className="x-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="x-map" ref={mapRef} aria-hidden="true">
          <div className="x-layer" data-on={markMode === 1}>
            {painting.boxes.map(([x, y, w, h, label]) => (
              <div className="x-box" key={label} style={{ left: pct(x), top: pct(y), width: pct(w), height: pct(h) }}>
                <span>{label}</span>
              </div>
            ))}
          </div>
          {([[2, painting.xray], [3, painting.raking]] as const).map(([mode, marks]) => (
            <div className="x-layer" data-on={markMode === mode} key={mode}>
              {marks.map(([x, y, label, left]) => (
                <div className="x-mark" data-left={left} key={label} style={{ left: pct(x), top: pct(y) }}>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          ))}
          <div className="x-layer" data-on={markMode === 4}>
            {painting.spots.map(([x, y, , , label, left]) => (
              <div className="x-mark" data-left={left} key={label} style={{ left: pct(x), top: pct(y) }}>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="x-veil" />
        <div className="x-nav">
          <SiteNav locale={locale} tone={current.tone === "day" ? "paper" : "night"} />
        </div>

        <div className="x-copy">
          {steps.map((s, k) => (
            <article className="x-article" data-step={k} data-on={k === step} inert={k !== step} key={s.title} data-lens-off>
              {s.kicker ? <p className="s-kicker">{s.kicker}</p> : null}
              {k === 0 ? (
                <h1 className="x-title" id="exam-title">{s.title}</h1>
              ) : (
                <h2 className="x-title x-title-sub">{s.title}</h2>
              )}
              {s.body ? <p className="x-body">{s.body}</p> : null}
              {k === 0 ? <p className="x-hint">{copy.home.lensHint}</p> : null}
              {s.receive ? <p className="x-receive">{s.receive}</p> : null}
              {k === 0 ? (
                <div className="s-actions">
                  <Link className="s-btn" href={localizePath(locale, "/contact")}>{copy.nav.cta}</Link>
                  <span className="s-mail">{company.email}</span>
                </div>
              ) : null}
              {s.mode === 5 ? (
                <div className="x-demo">
                  <div className="x-seg" role="group" aria-label="Example subject">
                    {domains.map((d) => (
                      <button type="button" key={d.key} aria-pressed={d.key === domainKey} onClick={() => setDomainKey(d.key)}>
                        {d.label}
                      </button>
                    ))}
                  </div>
                  <p className="x-prompt">
                    {domain.prompt} <b data-trained={model === "trained"}>{topWord}</b>
                  </p>
                  <div className="x-seg x-model" role="group" aria-label="Which model writes">
                    <button type="button" aria-pressed={model === "base"} onClick={() => setModel("base")}>Base model</button>
                    <button type="button" aria-pressed={model === "trained"} data-trained onClick={() => setModel("trained")}>Trained on your data</button>
                  </div>
                  <div className="x-bars" data-trained={model === "trained"}>
                    {domain.candidates.map((c) => (
                      <div className="x-bar" key={c[0]}>
                        <span className="x-bar-word">{c[0]}</span>
                        <span className="x-bar-track"><i style={{ width: pct(c[col]) }} /></span>
                        <span className="x-bar-value">{Math.round(c[col] * 100)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <dl className="x-meta" data-lens-off>
          <div><dt className="x-sr">Light</dt><dd className="x-meta-strong">{current.instrument}</dd></div>
          <div><dt className="x-sr">Setting</dt><dd>{current.setting}</dd></div>
          <div><dt className="x-sr">Lens</dt><dd>Lens: {current.lens}</dd></div>
          <div><dt className="x-sr">Position</dt><dd ref={xyRef} className="s-num">x 0.000 · y 0.000</dd></div>
        </dl>
        <ol className="x-index" aria-label="Layers of the painting" data-lens-off>
          {steps.map((s, k) => (
            <li key={s.index}>
              <button type="button" aria-current={k === step ? "step" : undefined} onClick={() => goTo(k)}>
                {s.index}
              </button>
            </li>
          ))}
        </ol>
        <div className="x-tip" ref={tipRef} aria-hidden="true" />
      </div>
    </section>
  );
}

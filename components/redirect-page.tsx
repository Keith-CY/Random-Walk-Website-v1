import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";

const redirectCopy: Record<Locale, {
  title: string;
  body: string;
  labels: Record<string, string>;
  fallback: string;
}> = {
  en: {
    title: "This page has moved.",
    body: "The new Random Walk website is statically generated and uses a new Local AI Infrastructure structure.",
    labels: { services: "Go to services", work: "Go to work", notes: "Go to notes", melix: "Go to Melix" },
    fallback: "Go to Random Walk"
  },
  zh: {
    title: "此页面已迁移。",
    body: "新版 Random Walk 网站已改为静态生成，并采用新的本地 AI 基础设施结构。",
    labels: { services: "前往服务", work: "前往案例", notes: "前往笔记", melix: "前往 Melix" },
    fallback: "前往 Random Walk"
  },
  ja: {
    title: "このページは移動しました。",
    body: "新しい Random Walk サイトは静的生成に切り替わり、ローカル AI 基盤向けの新しい構成になりました。",
    labels: { services: "サービスへ移動", work: "実績へ移動", notes: "ノートへ移動", melix: "Melix へ移動" },
    fallback: "Random Walk へ移動"
  },
  ko: {
    title: "이 페이지는 이동되었습니다.",
    body: "새 Random Walk 사이트는 정적으로 생성되며 새로운 로컬 AI 인프라 구조를 사용합니다.",
    labels: { services: "서비스로 이동", work: "사례로 이동", notes: "노트로 이동", melix: "Melix로 이동" },
    fallback: "Random Walk로 이동"
  }
};

function inferRedirectLocale(to: string): Locale {
  const firstSegment = to.split("/").filter(Boolean)[0] ?? "";
  return isLocale(firstSegment) ? firstSegment : "en";
}

function inferTargetKey(to: string): string {
  const segments = to.split("/").filter(Boolean);
  return isLocale(segments[0] ?? "") ? segments[1] ?? "" : segments[0] ?? "";
}

export function RedirectPage({ to, label }: { to: string; label?: string }) {
  const locale = inferRedirectLocale(to);
  const copy = redirectCopy[locale];
  const targetKey = inferTargetKey(to);
  const resolvedLabel = locale === "en" && label ? label : copy.labels[targetKey] ?? copy.fallback;

  return (
    <main className="rw-container rw-section">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p className="rw-eyebrow">Random Walk</p>
      <h1 className="rw-page-title" style={{ marginTop: 16 }}>{copy.title}</h1>
      <p className="rw-body-large">{copy.body}</p>
      <Link className="rw-button rw-button-primary" href={to}>
        {resolvedLabel}
      </Link>
    </main>
  );
}

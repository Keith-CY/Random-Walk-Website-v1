export const locales = ["en", "zh", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function localizedPathForCurrentRoute(locale: Locale, pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/");

  if (isLocale(segments[1] ?? "")) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  const nextPath = segments.join("/") || `/${locale}`;
  return nextPath === `/${locale}/` ? `/${locale}` : nextPath;
}

export function languageName(locale: Locale): string {
  const names: Record<Locale, string> = {
    en: "English",
    zh: "中文",
    ja: "日本語",
    ko: "한국어"
  };
  return names[locale];
}

export type Dictionary = {
  nav: {
    services: string;
    melix: string;
    security: string;
    work: string;
    notes: string;
    contact: string;
  };
  cta: {
    primary: string;
    secondaryMelix: string;
    securityCall: string;
    github: string;
  };
  common: {
    brandDescriptor: string;
    proofLine: string;
    placeholder: string;
    readMore: string;
    backToWork: string;
    backToNotes: string;
    legalNotice: string;
  };
  footer: {
    description: string;
    site: string;
    company: string;
    legal: string;
  };
  legal: {
    privacy: string;
    terms: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      melix: "Melix",
      security: "Security",
      work: "Work",
      notes: "Notes",
      contact: "Contact"
    },
    cta: {
      primary: "Scope a private AI workflow",
      secondaryMelix: "Explore Melix",
      securityCall: "Request a security review call",
      github: "Explore Melix on GitHub"
    },
    common: {
      brandDescriptor: "Local AI Infrastructure",
      proofLine: "Apple Silicon · On-prem GPU · Private cloud · Customer VPC · Air-gapped · Edge devices",
      placeholder: "Placeholder asset",
      readMore: "Read more",
      backToWork: "Back to work",
      backToNotes: "Back to notes",
      legalNotice: "Compliance-aware engineering support. Formal legal, regulatory, and certification determinations remain with the customer and qualified advisors."
    },
    footer: {
      description: "Random Walk builds private and local AI infrastructure for organizations that need model workflows inside customer-controlled environments.",
      site: "Site",
      company: "Company",
      legal: "Legal"
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      services: "服务",
      melix: "Melix",
      security: "安全",
      work: "案例",
      notes: "笔记",
      contact: "联系"
    },
    cta: {
      primary: "与我们训练本地模型",
      secondaryMelix: "了解 Melix",
      securityCall: "预约安全评审沟通",
      github: "在 GitHub 查看 Melix"
    },
    common: {
      brandDescriptor: "本地 AI 基础设施",
      proofLine: "Apple Silicon · 本地 GPU · 私有云 · 客户 VPC · 隔离环境 · 边缘设备",
      placeholder: "占位视觉资产",
      readMore: "继续阅读",
      backToWork: "返回案例",
      backToNotes: "返回笔记",
      legalNotice: "Random Walk 提供面向合规准备的工程支持。正式法律、监管和认证判断仍由客户及其合格顾问负责。"
    },
    footer: {
      description: "Random Walk 为需要在客户控制环境中运行模型工作流的组织构建私有和本地 AI 基础设施。",
      site: "站点",
      company: "公司",
      legal: "法律"
    },
    legal: {
      privacy: "隐私政策",
      terms: "服务条款"
    }
  },
  ja: {
    nav: {
      services: "サービス",
      melix: "Melix",
      security: "セキュリティ",
      work: "実績",
      notes: "ノート",
      contact: "お問い合わせ"
    },
    cta: {
      primary: "ローカルモデルを相談する",
      secondaryMelix: "Melix を見る",
      securityCall: "セキュリティレビューを相談",
      github: "GitHub で Melix を見る"
    },
    common: {
      brandDescriptor: "ローカル AI 基盤",
      proofLine: "Apple Silicon · オンプレ GPU · プライベートクラウド · 顧客 VPC · エアギャップ · エッジデバイス",
      placeholder: "プレースホルダー画像",
      readMore: "続きを読む",
      backToWork: "実績へ戻る",
      backToNotes: "ノートへ戻る",
      legalNotice: "Random Walk はコンプライアンスを意識したエンジニアリング支援を提供します。正式な法的判断、規制判断、認証判断はお客様および専門アドバイザーの責任範囲です。"
    },
    footer: {
      description: "Random Walk は、顧客管理環境の中でモデルワークフローを運用する必要がある組織向けに、プライベートかつローカルな AI 基盤を構築します。",
      site: "サイト",
      company: "会社",
      legal: "法務"
    },
    legal: {
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    }
  },
  ko: {
    nav: {
      services: "서비스",
      melix: "Melix",
      security: "보안",
      work: "사례",
      notes: "노트",
      contact: "문의"
    },
    cta: {
      primary: "로컬 모델 상담하기",
      secondaryMelix: "Melix 보기",
      securityCall: "보안 리뷰 상담 요청",
      github: "GitHub에서 Melix 보기"
    },
    common: {
      brandDescriptor: "로컬 AI 인프라",
      proofLine: "Apple Silicon · 온프레미스 GPU · 프라이빗 클라우드 · 고객 VPC · 에어갭 · 엣지 디바이스",
      placeholder: "플레이스홀더 자산",
      readMore: "더 보기",
      backToWork: "사례로 돌아가기",
      backToNotes: "노트로 돌아가기",
      legalNotice: "Random Walk는 컴플라이언스 인식 엔지니어링 지원을 제공합니다. 공식 법률, 규제, 인증 판단은 고객과 자격 있는 자문가의 책임입니다."
    },
    footer: {
      description: "Random Walk는 고객 통제 환경 안에서 모델 워크플로를 운영해야 하는 조직을 위해 프라이빗 및 로컬 AI 인프라를 구축합니다.",
      site: "사이트",
      company: "회사",
      legal: "법무"
    },
    legal: {
      privacy: "개인정보 처리방침",
      terms: "서비스 약관"
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

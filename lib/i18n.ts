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

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export type Dictionary = {
  nav: {
    company: string;
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
    groups: FooterGroup[];
    manifesto: string;
    copyright: string;
  };
  legal: {
    privacy: string;
    terms: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      company: "Company",
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
      legal: "Legal",
      groups: [
        {
          title: "Offerings",
          links: [
            { label: "Services", href: "/services" },
            { label: "AI / ML Adaptation", href: "/services/ai-ml" },
            { label: "Data Platform", href: "/services/data-platform" },
            { label: "IT Architecture", href: "/services/it-architecture" },
            { label: "Privacy Data", href: "/services/privacy-data" },
            { label: "Sovereign Infrastructure", href: "/services/sovereign-infrastructure" }
          ]
        },
        {
          title: "Creations",
          links: [
            { label: "Melix", href: "/melix" },
            { label: "1-TOK", href: "/creations/1-tok" },
            { label: "Fiber Link", href: "/creations/fiber-link" },
            { label: "Neuron", href: "/creations/neuron" },
            { label: "UTXO Data", href: "/creations/utxo-data" },
            { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "Company", href: "/company" },
            { label: "Philosophy", href: "/philosophy" },
            { label: "Work", href: "/work" },
            { label: "Articles", href: "/articles" },
            { label: "Notes", href: "/notes" },
            { label: "Contact", href: "/contact" }
          ]
        },
        {
          title: "Resources",
          links: [
            { label: "Security Model", href: "/security" },
            { label: "Private Deployment Notes", href: "/notes/private-deployment-boundaries" },
            { label: "Evaluation Notes", href: "/notes/evaluate-local-lora" },
            { label: "Repository Metadata", href: "/melix#repository" },
            { label: "Engagement Patterns", href: "/work" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Responsible Use", href: "/security#responsibility" },
            { label: "Security Review", href: "/security" }
          ]
        }
      ],
      manifesto: "Random Walk is a local AI infrastructure studio. The material on this website describes engineering services, research directions, open-source work, and example engagement patterns for private model systems. It is not legal, regulatory, investment, procurement, or security certification advice. Any customer deployment, model license, data handling process, benchmark result, security review, or operational responsibility model must be evaluated against the customer environment and the terms of a separate written agreement. Product names, open-source references, and generated visual assets are included for orientation and may change as projects mature.",
      copyright: "© 2026 Random Walk 株式会社. All rights reserved."
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      company: "公司",
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
      legal: "法律",
      groups: [
        {
          title: "服务",
          links: [
            { label: "服务总览", href: "/services" },
            { label: "AI / ML 适配", href: "/services/ai-ml" },
            { label: "数据平台", href: "/services/data-platform" },
            { label: "IT 架构", href: "/services/it-architecture" },
            { label: "隐私数据", href: "/services/privacy-data" },
            { label: "主权基础设施", href: "/services/sovereign-infrastructure" }
          ]
        },
        {
          title: "创造物",
          links: [
            { label: "Melix", href: "/melix" },
            { label: "1-TOK", href: "/creations/1-tok" },
            { label: "Fiber Link", href: "/creations/fiber-link" },
            { label: "Neuron", href: "/creations/neuron" },
            { label: "UTXO Data", href: "/creations/utxo-data" },
            { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
          ]
        },
        {
          title: "公司",
          links: [
            { label: "公司介绍", href: "/company" },
            { label: "理念", href: "/philosophy" },
            { label: "案例", href: "/work" },
            { label: "文章", href: "/articles" },
            { label: "笔记", href: "/notes" },
            { label: "联系", href: "/contact" }
          ]
        },
        {
          title: "资源",
          links: [
            { label: "安全模型", href: "/security" },
            { label: "私有部署笔记", href: "/notes/private-deployment-boundaries" },
            { label: "评估笔记", href: "/notes/evaluate-local-lora" },
            { label: "仓库元数据", href: "/melix#repository" },
            { label: "合作模式", href: "/work" }
          ]
        },
        {
          title: "法律",
          links: [
            { label: "隐私政策", href: "/privacy" },
            { label: "服务条款", href: "/terms" },
            { label: "负责任使用", href: "/security#responsibility" },
            { label: "安全评审", href: "/security" }
          ]
        }
      ],
      manifesto: "Random Walk 是一家本地 AI 基础设施工作室。本网站内容用于说明工程服务、研究方向、开源工作以及私有模型系统的示例合作模式，不构成法律、监管、投资、采购或安全认证建议。任何客户部署、模型授权、数据处理流程、基准结果、安全评审或运营责任模型，都需要结合客户环境并以单独书面协议为准。产品名称、开源引用和生成视觉资产仅用于说明方向，可能随项目推进而调整。",
      copyright: "© 2026 Random Walk 株式会社. 保留所有权利。"
    },
    legal: {
      privacy: "隐私政策",
      terms: "服务条款"
    }
  },
  ja: {
    nav: {
      company: "会社",
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
      legal: "法務",
      groups: [
        {
          title: "提供領域",
          links: [
            { label: "サービス", href: "/services" },
            { label: "AI / ML 適応", href: "/services/ai-ml" },
            { label: "データプラットフォーム", href: "/services/data-platform" },
            { label: "IT アーキテクチャ", href: "/services/it-architecture" },
            { label: "プライバシーデータ", href: "/services/privacy-data" },
            { label: "ソブリン基盤", href: "/services/sovereign-infrastructure" }
          ]
        },
        {
          title: "制作物",
          links: [
            { label: "Melix", href: "/melix" },
            { label: "1-TOK", href: "/creations/1-tok" },
            { label: "Fiber Link", href: "/creations/fiber-link" },
            { label: "Neuron", href: "/creations/neuron" },
            { label: "UTXO Data", href: "/creations/utxo-data" },
            { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
          ]
        },
        {
          title: "会社",
          links: [
            { label: "会社紹介", href: "/company" },
            { label: "フィロソフィー", href: "/philosophy" },
            { label: "実績", href: "/work" },
            { label: "記事", href: "/articles" },
            { label: "ノート", href: "/notes" },
            { label: "お問い合わせ", href: "/contact" }
          ]
        },
        {
          title: "リソース",
          links: [
            { label: "セキュリティモデル", href: "/security" },
            { label: "プライベート配備ノート", href: "/notes/private-deployment-boundaries" },
            { label: "評価ノート", href: "/notes/evaluate-local-lora" },
            { label: "リポジトリ情報", href: "/melix#repository" },
            { label: "エンゲージメント例", href: "/work" }
          ]
        },
        {
          title: "法務",
          links: [
            { label: "プライバシーポリシー", href: "/privacy" },
            { label: "利用規約", href: "/terms" },
            { label: "責任ある利用", href: "/security#responsibility" },
            { label: "セキュリティレビュー", href: "/security" }
          ]
        }
      ],
      manifesto: "Random Walk はローカル AI 基盤のスタジオです。本サイトの内容は、プライベートモデルシステムに関するエンジニアリングサービス、研究方針、オープンソース活動、エンゲージメント例を説明するものであり、法務、規制、投資、調達、セキュリティ認証に関する助言ではありません。顧客環境への配備、モデルライセンス、データ取扱い、ベンチマーク結果、セキュリティレビュー、運用責任モデルは、顧客環境と別途の書面契約に基づいて評価されます。製品名、オープンソース参照、生成された視覚素材は方向性を示すためのもので、プロジェクトの進行に応じて変更される場合があります。",
      copyright: "© 2026 Random Walk 株式会社. All rights reserved."
    },
    legal: {
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    }
  },
  ko: {
    nav: {
      company: "회사",
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
      legal: "법무",
      groups: [
        {
          title: "제공 영역",
          links: [
            { label: "서비스", href: "/services" },
            { label: "AI / ML 적응", href: "/services/ai-ml" },
            { label: "데이터 플랫폼", href: "/services/data-platform" },
            { label: "IT 아키텍처", href: "/services/it-architecture" },
            { label: "프라이버시 데이터", href: "/services/privacy-data" },
            { label: "소버린 인프라", href: "/services/sovereign-infrastructure" }
          ]
        },
        {
          title: "제작물",
          links: [
            { label: "Melix", href: "/melix" },
            { label: "1-TOK", href: "/creations/1-tok" },
            { label: "Fiber Link", href: "/creations/fiber-link" },
            { label: "Neuron", href: "/creations/neuron" },
            { label: "UTXO Data", href: "/creations/utxo-data" },
            { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
          ]
        },
        {
          title: "회사",
          links: [
            { label: "회사 소개", href: "/company" },
            { label: "철학", href: "/philosophy" },
            { label: "사례", href: "/work" },
            { label: "아티클", href: "/articles" },
            { label: "노트", href: "/notes" },
            { label: "문의", href: "/contact" }
          ]
        },
        {
          title: "리소스",
          links: [
            { label: "보안 모델", href: "/security" },
            { label: "프라이빗 배포 노트", href: "/notes/private-deployment-boundaries" },
            { label: "평가 노트", href: "/notes/evaluate-local-lora" },
            { label: "저장소 메타데이터", href: "/melix#repository" },
            { label: "참여 패턴", href: "/work" }
          ]
        },
        {
          title: "법무",
          links: [
            { label: "개인정보 처리방침", href: "/privacy" },
            { label: "서비스 약관", href: "/terms" },
            { label: "책임 있는 사용", href: "/security#responsibility" },
            { label: "보안 리뷰", href: "/security" }
          ]
        }
      ],
      manifesto: "Random Walk는 로컬 AI 인프라 스튜디오입니다. 이 웹사이트의 내용은 프라이빗 모델 시스템을 위한 엔지니어링 서비스, 연구 방향, 오픈소스 작업, 참여 패턴 예시를 설명하기 위한 것이며 법률, 규제, 투자, 조달 또는 보안 인증 조언이 아닙니다. 고객 배포, 모델 라이선스, 데이터 처리 절차, 벤치마크 결과, 보안 리뷰, 운영 책임 모델은 고객 환경과 별도의 서면 계약에 따라 평가되어야 합니다. 제품명, 오픈소스 참조, 생성된 시각 자산은 방향을 설명하기 위한 것이며 프로젝트 진행에 따라 바뀔 수 있습니다.",
      copyright: "© 2026 Random Walk 株式会社. All rights reserved."
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

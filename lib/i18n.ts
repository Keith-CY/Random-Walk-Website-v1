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
    creations: string;
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
      creations: "Creations",
      melix: "Melix",
      security: "Security",
      work: "Work",
      notes: "Notes",
      contact: "Contact"
    },
    cta: {
      primary: "Scope a private AI project",
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
      description: "Private AI technology studio. We build private AI infrastructure, model workflows, private deployment, evaluation evidence, and FDE support.",
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
            { label: "Melix", href: "/creations/melix" },
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
            { label: "Repository Metadata", href: "/resources/repository-metadata" },
            { label: "Engagement Patterns", href: "/resources/engagement-patterns" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Responsible Use", href: "/legal/responsible-use" },
            { label: "Security Review", href: "/legal/security-review" }
          ]
        }
      ],
      manifesto: "Capability must enter a system, and the system must keep its boundaries. This website describes engineering services, research directions, open-source work, and example engagement patterns. It is not legal, regulatory, procurement, security certification, or investment advice. Customer deployments, model licenses, data handling, security reviews, benchmark results, and operational responsibilities are governed by the customer environment and separate written agreements.",
      copyright: "© 2026 Random Walk 株式会社. All rights reserved."
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
           "company": "公司",
           "services": "服务",
           "creations": "作品",
           "melix": "Melix",
           "security": "安全",
           "work": "作品",
           "notes": "札记",
           "contact": "联系"
         },
    cta: {
           "primary": "规划一项私有 AI 项目",
           "secondaryMelix": "探索 Melix",
           "securityCall": "预约安全审查通话",
           "github": "在 GitHub 上探索 Melix"
         },
    common: {
              "brandDescriptor": "本地 AI 基础设施",
              "proofLine": "Apple Silicon · 本地部署 GPU · 私有云 · 客户 VPC · Air-gapped · 边缘设备",
              "placeholder": "占位素材",
              "readMore": "继续阅读",
              "backToWork": "返回项目",
              "backToNotes": "返回笔记",
              "legalNotice": "具备合规意识的工程支持。正式的法律、监管与认证判定，仍由客户及合格顾问负责。"
            },
    footer: {
              "description": "私人 AI 技术工作室。我们构建私有 AI 基础设施、模型工作流、私有化部署、评估证据，以及 FDE 支持。",
              "site": "站点",
              "company": "公司",
              "legal": "法律",
              "groups": [
                {
                  "title": "服务内容",
                  "links": [
                    {
                      "label": "服务",
                      "href": "/services"
                    },
                    {
                      "label": "AI / ML 适配",
                      "href": "/services/ai-ml"
                    },
                    {
                      "label": "数据平台",
                      "href": "/services/data-platform"
                    },
                    {
                      "label": "IT 架构",
                      "href": "/services/it-architecture"
                    },
                    {
                      "label": "隐私数据",
                      "href": "/services/privacy-data"
                    },
                    {
                      "label": "主权基础设施",
                      "href": "/services/sovereign-infrastructure"
                    }
                  ]
                },
                {
                  "title": "作品",
                  "links": [
                    {
                      "label": "Melix",
                      "href": "/creations/melix"
                    },
                    {
                      "label": "1-TOK",
                      "href": "/creations/1-tok"
                    },
                    {
                      "label": "Fiber Link",
                      "href": "/creations/fiber-link"
                    },
                    {
                      "label": "Neuron",
                      "href": "/creations/neuron"
                    },
                    {
                      "label": "UTXO Data",
                      "href": "/creations/utxo-data"
                    },
                    {
                      "label": "Distributed Paradigm",
                      "href": "/creations/distributed-paradigm"
                    }
                  ]
                },
                {
                  "title": "公司",
                  "links": [
                    {
                      "label": "公司",
                      "href": "/company"
                    },
                    {
                      "label": "理念",
                      "href": "/philosophy"
                    },
                    {
                      "label": "工作",
                      "href": "/work"
                    },
                    {
                      "label": "文章",
                      "href": "/articles"
                    },
                    {
                      "label": "札记",
                      "href": "/notes"
                    },
                    {
                      "label": "联系",
                      "href": "/contact"
                    }
                  ]
                },
                {
                  "title": "资源",
                  "links": [
                    {
                      "label": "安全模型",
                      "href": "/security"
                    },
                    {
                      "label": "私有化部署札记",
                      "href": "/notes/private-deployment-boundaries"
                    },
                    {
                      "label": "评估札记",
                      "href": "/notes/evaluate-local-lora"
                    },
                    {
                      "label": "代码库元数据",
                      "href": "/resources/repository-metadata"
                    },
                    {
                      "label": "合作模式",
                      "href": "/resources/engagement-patterns"
                    }
                  ]
                },
                {
                  "title": "法律",
                  "links": [
                    {
                      "label": "隐私政策",
                      "href": "/privacy"
                    },
                    {
                      "label": "服务条款",
                      "href": "/terms"
                    },
                    {
                      "label": "负责任使用",
                      "href": "/legal/responsible-use"
                    },
                    {
                      "label": "安全审查",
                      "href": "/legal/security-review"
                    }
                  ]
                }
              ],
              "manifesto": "能力可以进入一个系统，而系统必须守住自身边界。本网站说明工程服务、研究方向、开源工作，以及示例合作模式。其内容不构成法律、监管、采购、安全认证或投资建议。客户部署、模型许可、数据处理、安全审查、基准测试结果与运营责任，均由客户环境及另行签署的书面协议约束。",
              "copyright": "© 2026 Random Walk 株式会社. 保留所有权利。"
            },
    legal: {
             "privacy": "隐私政策",
             "terms": "服务条款"
           }
  },
  ja: {
    nav: {
           "company": "会社",
           "services": "サービス",
           "creations": "制作物",
           "melix": "Melix",
           "security": "セキュリティ",
           "work": "実績",
           "notes": "ノート",
           "contact": "お問い合わせ"
         },
    cta: {
           "primary": "プライベート AI プロジェクトを設計する",
           "secondaryMelix": "Melix を探る",
           "securityCall": "セキュリティレビューの通話を依頼する",
           "github": "GitHub で Melix を探る"
         },
    common: {
              "brandDescriptor": "ローカル AI 基盤",
              "proofLine": "Apple Silicon · オンプレミス GPU · プライベートクラウド · 顧客 VPC · Air-gapped · エッジデバイス",
              "placeholder": "プレースホルダー素材",
              "readMore": "続きを読む",
              "backToWork": "実績へ戻る",
              "backToNotes": "ノートへ戻る",
              "legalNotice": "コンプライアンスを見据えたエンジニアリング支援。正式な法務・規制・認証上の判断は、お客様および有資格のアドバイザーに委ねられます。"
            },
    footer: {
              "description": "プライベート AI テクノロジー・スタジオ。私たちは、Private AI infrastructure、model workflows、private deployment、evaluation evidence、そして FDE support を構築します。",
              "site": "サイト",
              "company": "会社",
              "legal": "リーガル",
              "groups": [
                {
                  "title": "提供領域",
                  "links": [
                    {
                      "label": "サービス",
                      "href": "/services"
                    },
                    {
                      "label": "AI / ML Adaptation",
                      "href": "/services/ai-ml"
                    },
                    {
                      "label": "Data Platform",
                      "href": "/services/data-platform"
                    },
                    {
                      "label": "IT Architecture",
                      "href": "/services/it-architecture"
                    },
                    {
                      "label": "Privacy Data",
                      "href": "/services/privacy-data"
                    },
                    {
                      "label": "Sovereign Infrastructure",
                      "href": "/services/sovereign-infrastructure"
                    }
                  ]
                },
                {
                  "title": "制作物",
                  "links": [
                    {
                      "label": "Melix",
                      "href": "/creations/melix"
                    },
                    {
                      "label": "1-TOK",
                      "href": "/creations/1-tok"
                    },
                    {
                      "label": "Fiber Link",
                      "href": "/creations/fiber-link"
                    },
                    {
                      "label": "Neuron",
                      "href": "/creations/neuron"
                    },
                    {
                      "label": "UTXO Data",
                      "href": "/creations/utxo-data"
                    },
                    {
                      "label": "Distributed Paradigm",
                      "href": "/creations/distributed-paradigm"
                    }
                  ]
                },
                {
                  "title": "会社",
                  "links": [
                    {
                      "label": "会社",
                      "href": "/company"
                    },
                    {
                      "label": "思想",
                      "href": "/philosophy"
                    },
                    {
                      "label": "実績",
                      "href": "/work"
                    },
                    {
                      "label": "記事",
                      "href": "/articles"
                    },
                    {
                      "label": "ノート",
                      "href": "/notes"
                    },
                    {
                      "label": "お問い合わせ",
                      "href": "/contact"
                    }
                  ]
                },
                {
                  "title": "リソース",
                  "links": [
                    {
                      "label": "Security Model",
                      "href": "/security"
                    },
                    {
                      "label": "Private Deployment Notes",
                      "href": "/notes/private-deployment-boundaries"
                    },
                    {
                      "label": "Evaluation Notes",
                      "href": "/notes/evaluate-local-lora"
                    },
                    {
                      "label": "Repository Metadata",
                      "href": "/resources/repository-metadata"
                    },
                    {
                      "label": "Engagement Patterns",
                      "href": "/resources/engagement-patterns"
                    }
                  ]
                },
                {
                  "title": "リーガル",
                  "links": [
                    {
                      "label": "プライバシーポリシー",
                      "href": "/privacy"
                    },
                    {
                      "label": "利用規約",
                      "href": "/terms"
                    },
                    {
                      "label": "Responsible Use",
                      "href": "/legal/responsible-use"
                    },
                    {
                      "label": "Security Review",
                      "href": "/legal/security-review"
                    }
                  ]
                }
              ],
              "manifesto": "能力はシステムへ入るべきものであり、同時にシステムはその境界を保たなければなりません。本ウェブサイトは、エンジニアリングサービス、研究の方向性、オープンソース活動、そして関与形態の例を記述するものです。法務、規制、調達、セキュリティ認証、または投資に関する助言ではありません。顧客環境におけるデプロイ、モデルライセンス、データ取扱い、セキュリティレビュー、ベンチマーク結果、運用上の責任は、顧客環境および別途締結される書面契約に従います。",
              "copyright": "© 2026 Random Walk 株式会社. All rights reserved."
            },
    legal: {
             "privacy": "プライバシーポリシー",
             "terms": "利用規約"
           }
  },
  ko: {
    nav: {
           "company": "회사",
           "services": "서비스",
           "creations": "창작물",
           "melix": "Melix",
           "security": "보안",
           "work": "작업",
           "notes": "노트",
           "contact": "문의"
         },
    cta: {
           "primary": "프라이빗 AI 프로젝트를 설계하기",
           "secondaryMelix": "Melix 살펴보기",
           "securityCall": "보안 검토 콜 요청하기",
           "github": "GitHub에서 Melix 살펴보기"
         },
    common: {
              "brandDescriptor": "로컬 AI 인프라",
              "proofLine": "Apple Silicon · 온프레미스 GPU · 프라이빗 클라우드 · 고객 VPC · Air-gapped · 엣지 디바이스",
              "placeholder": "플레이스홀더 에셋",
              "readMore": "더 읽기",
              "backToWork": "작업으로 돌아가기",
              "backToNotes": "노트로 돌아가기",
              "legalNotice": "컴플라이언스를 고려한 엔지니어링 지원. 공식적인 법률, 규제 및 인증 판단은 고객과 적격 자문가에게 있습니다."
            },
    footer: {
              "description": "프라이빗 AI 기술 스튜디오. 우리는 private AI infrastructure, model workflows, private deployment, evaluation evidence, 그리고 FDE support를 구축합니다.",
              "site": "사이트",
              "company": "회사",
              "legal": "법적 고지",
              "groups": [
                {
                  "title": "제공 영역",
                  "links": [
                    {
                      "label": "서비스",
                      "href": "/services"
                    },
                    {
                      "label": "AI / ML Adaptation",
                      "href": "/services/ai-ml"
                    },
                    {
                      "label": "Data Platform",
                      "href": "/services/data-platform"
                    },
                    {
                      "label": "IT Architecture",
                      "href": "/services/it-architecture"
                    },
                    {
                      "label": "Privacy Data",
                      "href": "/services/privacy-data"
                    },
                    {
                      "label": "Sovereign Infrastructure",
                      "href": "/services/sovereign-infrastructure"
                    }
                  ]
                },
                {
                  "title": "창작물",
                  "links": [
                    {
                      "label": "Melix",
                      "href": "/creations/melix"
                    },
                    {
                      "label": "1-TOK",
                      "href": "/creations/1-tok"
                    },
                    {
                      "label": "Fiber Link",
                      "href": "/creations/fiber-link"
                    },
                    {
                      "label": "Neuron",
                      "href": "/creations/neuron"
                    },
                    {
                      "label": "UTXO Data",
                      "href": "/creations/utxo-data"
                    },
                    {
                      "label": "Distributed Paradigm",
                      "href": "/creations/distributed-paradigm"
                    }
                  ]
                },
                {
                  "title": "회사",
                  "links": [
                    {
                      "label": "회사",
                      "href": "/company"
                    },
                    {
                      "label": "철학",
                      "href": "/philosophy"
                    },
                    {
                      "label": "작업",
                      "href": "/work"
                    },
                    {
                      "label": "아티클",
                      "href": "/articles"
                    },
                    {
                      "label": "노트",
                      "href": "/notes"
                    },
                    {
                      "label": "문의",
                      "href": "/contact"
                    }
                  ]
                },
                {
                  "title": "리소스",
                  "links": [
                    {
                      "label": "Security Model",
                      "href": "/security"
                    },
                    {
                      "label": "Private Deployment Notes",
                      "href": "/notes/private-deployment-boundaries"
                    },
                    {
                      "label": "Evaluation Notes",
                      "href": "/notes/evaluate-local-lora"
                    },
                    {
                      "label": "Repository Metadata",
                      "href": "/resources/repository-metadata"
                    },
                    {
                      "label": "Engagement Patterns",
                      "href": "/resources/engagement-patterns"
                    }
                  ]
                },
                {
                  "title": "법적 고지",
                  "links": [
                    {
                      "label": "개인정보 처리방침",
                      "href": "/privacy"
                    },
                    {
                      "label": "서비스 약관",
                      "href": "/terms"
                    },
                    {
                      "label": "Responsible Use",
                      "href": "/legal/responsible-use"
                    },
                    {
                      "label": "Security Review",
                      "href": "/legal/security-review"
                    }
                  ]
                }
              ],
              "manifesto": "역량은 시스템 안으로 들어와야 하며, 시스템은 자신의 경계를 지켜야 합니다. 이 웹사이트는 엔지니어링 서비스, 연구 방향, 오픈소스 작업, 그리고 예시적 참여 방식을 설명합니다. 이는 법률, 규제, 조달, 보안 인증 또는 투자에 관한 조언이 아닙니다. 고객 배포, 모델 라이선스, 데이터 처리, 보안 검토, 벤치마크 결과 및 운영 책임은 고객 환경과 별도의 서면 계약에 의해 규율됩니다.",
              "copyright": "© 2026 Random Walk 株式会社. All rights reserved."
            },
    legal: {
             "privacy": "개인정보 처리방침",
             "terms": "서비스 약관"
           }
  }
};

const footerGroupOverrides: Record<Locale, FooterGroup[]> = {
  en: [
    {
      title: "Studio",
      links: [
        { label: "Company", href: "/company" },
        { label: "Philosophy", href: "/philosophy" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Services", href: "/services" },
        { label: "Private AI systems", href: "/services/ai-ml" },
        { label: "Local data infrastructure", href: "/services/data-platform" },
        { label: "Deployment architecture", href: "/services/it-architecture" },
        { label: "Privacy boundaries", href: "/services/privacy-data" },
        { label: "Sovereign infrastructure", href: "/services/sovereign-infrastructure" }
      ]
    },
    {
      title: "Creations",
      links: [
        { label: "Melix", href: "/creations/melix" },
        { label: "1-TOK", href: "/creations/1-tok" },
        { label: "Fiber Link", href: "/creations/fiber-link" },
        { label: "Neuron", href: "/creations/neuron" },
        { label: "UTXO Data", href: "/creations/utxo-data" },
        { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
      ]
    },
    {
      title: "Work",
      links: [
        { label: "Work", href: "/work" },
        { label: "Finance records", href: "/work/finance-regulated-records" },
        { label: "Legal/IP model", href: "/work/legal-ip-private-model" },
        { label: "Manufacturing edge AI", href: "/work/manufacturing-edge-ai" },
        { label: "SayIt", href: "/work/sayit" }
      ]
    },
    {
      title: "Writing",
      links: [
        { label: "Notes", href: "/notes" },
        { label: "Private deployment notes", href: "/notes/private-deployment-boundaries" },
        { label: "Evaluation notes", href: "/notes/evaluate-local-lora" },
        { label: "Repository metadata", href: "/resources/repository-metadata" },
        { label: "Engagement patterns", href: "/resources/engagement-patterns" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Security", href: "/security" },
        { label: "Security review", href: "/legal/security-review" },
        { label: "Responsible use", href: "/legal/responsible-use" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
      ]
    }
  ],
  zh: [
    {
      title: "工作室",
      links: [
        { label: "公司", href: "/company" },
        { label: "理念", href: "/philosophy" },
        { label: "联系", href: "/contact" }
      ]
    },
    {
      title: "服务",
      links: [
        { label: "服务", href: "/services" },
        { label: "私有 AI 系统", href: "/services/ai-ml" },
        { label: "本地数据基础设施", href: "/services/data-platform" },
        { label: "部署架构", href: "/services/it-architecture" },
        { label: "隐私边界", href: "/services/privacy-data" },
        { label: "主权基础设施", href: "/services/sovereign-infrastructure" }
      ]
    },
    {
      title: "作品",
      links: [
        { label: "Melix", href: "/creations/melix" },
        { label: "1-TOK", href: "/creations/1-tok" },
        { label: "Fiber Link", href: "/creations/fiber-link" },
        { label: "Neuron", href: "/creations/neuron" },
        { label: "UTXO Data", href: "/creations/utxo-data" },
        { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
      ]
    },
    {
      title: "案例",
      links: [
        { label: "案例", href: "/work" },
        { label: "金融记录", href: "/work/finance-regulated-records" },
        { label: "法律 / IP 模型", href: "/work/legal-ip-private-model" },
        { label: "制造业边缘 AI", href: "/work/manufacturing-edge-ai" },
        { label: "SayIt", href: "/work/sayit" }
      ]
    },
    {
      title: "札记",
      links: [
        { label: "札记", href: "/notes" },
        { label: "私有部署札记", href: "/notes/private-deployment-boundaries" },
        { label: "评估札记", href: "/notes/evaluate-local-lora" },
        { label: "代码库元数据", href: "/resources/repository-metadata" },
        { label: "合作模式", href: "/resources/engagement-patterns" }
      ]
    },
    {
      title: "法律",
      links: [
        { label: "安全", href: "/security" },
        { label: "安全审查", href: "/legal/security-review" },
        { label: "负责任使用", href: "/legal/responsible-use" },
        { label: "隐私政策", href: "/privacy" },
        { label: "服务条款", href: "/terms" }
      ]
    }
  ],
  ja: [
    {
      title: "スタジオ",
      links: [
        { label: "会社", href: "/company" },
        { label: "理念", href: "/philosophy" },
        { label: "お問い合わせ", href: "/contact" }
      ]
    },
    {
      title: "サービス",
      links: [
        { label: "サービス", href: "/services" },
        { label: "プライベート AI システム", href: "/services/ai-ml" },
        { label: "ローカルデータ基盤", href: "/services/data-platform" },
        { label: "デプロイ設計", href: "/services/it-architecture" },
        { label: "プライバシー境界", href: "/services/privacy-data" },
        { label: "主権インフラ", href: "/services/sovereign-infrastructure" }
      ]
    },
    {
      title: "制作物",
      links: [
        { label: "Melix", href: "/creations/melix" },
        { label: "1-TOK", href: "/creations/1-tok" },
        { label: "Fiber Link", href: "/creations/fiber-link" },
        { label: "Neuron", href: "/creations/neuron" },
        { label: "UTXO Data", href: "/creations/utxo-data" },
        { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
      ]
    },
    {
      title: "実績",
      links: [
        { label: "実績", href: "/work" },
        { label: "金融レコード", href: "/work/finance-regulated-records" },
        { label: "法務 / IP モデル", href: "/work/legal-ip-private-model" },
        { label: "製造業エッジ AI", href: "/work/manufacturing-edge-ai" },
        { label: "SayIt", href: "/work/sayit" }
      ]
    },
    {
      title: "ノート",
      links: [
        { label: "ノート", href: "/notes" },
        { label: "プライベートデプロイ", href: "/notes/private-deployment-boundaries" },
        { label: "評価ノート", href: "/notes/evaluate-local-lora" },
        { label: "Repository Metadata", href: "/resources/repository-metadata" },
        { label: "Engagement Patterns", href: "/resources/engagement-patterns" }
      ]
    },
    {
      title: "リーガル",
      links: [
        { label: "セキュリティ", href: "/security" },
        { label: "Security Review", href: "/legal/security-review" },
        { label: "Responsible Use", href: "/legal/responsible-use" },
        { label: "プライバシーポリシー", href: "/privacy" },
        { label: "利用規約", href: "/terms" }
      ]
    }
  ],
  ko: [
    {
      title: "스튜디오",
      links: [
        { label: "회사", href: "/company" },
        { label: "철학", href: "/philosophy" },
        { label: "문의", href: "/contact" }
      ]
    },
    {
      title: "서비스",
      links: [
        { label: "서비스", href: "/services" },
        { label: "프라이빗 AI 시스템", href: "/services/ai-ml" },
        { label: "로컬 데이터 인프라", href: "/services/data-platform" },
        { label: "배포 아키텍처", href: "/services/it-architecture" },
        { label: "프라이버시 경계", href: "/services/privacy-data" },
        { label: "소버린 인프라", href: "/services/sovereign-infrastructure" }
      ]
    },
    {
      title: "창작물",
      links: [
        { label: "Melix", href: "/creations/melix" },
        { label: "1-TOK", href: "/creations/1-tok" },
        { label: "Fiber Link", href: "/creations/fiber-link" },
        { label: "Neuron", href: "/creations/neuron" },
        { label: "UTXO Data", href: "/creations/utxo-data" },
        { label: "Distributed Paradigm", href: "/creations/distributed-paradigm" }
      ]
    },
    {
      title: "작업",
      links: [
        { label: "작업", href: "/work" },
        { label: "금융 기록", href: "/work/finance-regulated-records" },
        { label: "법률 / IP 모델", href: "/work/legal-ip-private-model" },
        { label: "제조 엣지 AI", href: "/work/manufacturing-edge-ai" },
        { label: "SayIt", href: "/work/sayit" }
      ]
    },
    {
      title: "노트",
      links: [
        { label: "노트", href: "/notes" },
        { label: "프라이빗 배포 노트", href: "/notes/private-deployment-boundaries" },
        { label: "평가 노트", href: "/notes/evaluate-local-lora" },
        { label: "Repository Metadata", href: "/resources/repository-metadata" },
        { label: "Engagement Patterns", href: "/resources/engagement-patterns" }
      ]
    },
    {
      title: "법적 고지",
      links: [
        { label: "보안", href: "/security" },
        { label: "Security Review", href: "/legal/security-review" },
        { label: "Responsible Use", href: "/legal/responsible-use" },
        { label: "개인정보 처리방침", href: "/privacy" },
        { label: "서비스 약관", href: "/terms" }
      ]
    }
  ]
};

for (const locale of locales) {
  dictionaries[locale].footer.groups = footerGroupOverrides[locale];
}

dictionaries.en.cta.primary = "Discuss a project";
dictionaries.zh.cta.primary = "讨论项目";
dictionaries.ja.cta.primary = "プロジェクトを相談";
dictionaries.ko.cta.primary = "프로젝트 논의";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

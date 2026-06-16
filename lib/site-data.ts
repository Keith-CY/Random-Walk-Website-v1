import { locales, type Locale } from "./i18n";
import type { VisualAssetId } from "./visual-assets";

export type Localized<T> = Record<Locale, T>;

export type PageCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ServiceModule = {
  title: string;
  description: string;
  deliverables: string[];
};

export type Industry = {
  title: string;
  description: string;
  needs: string[];
};

export type DeploymentMode = {
  label: string;
  where: string;
  evidence: string;
};

export type VisualItem = {
  label: string;
  eyebrow?: string;
  title: string;
  description: string;
  assetId: VisualAssetId;
};

export type EventPresence = {
  slug: string;
  title: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  pullLine: string;
  tags: string[];
  assetId: VisualAssetId;
  href: string;
  linkLabel: string;
};

export const homeCopy: Localized<{
  hero: PageCopy;
  constraint: PageCopy;
  workflow: PageCopy;
  services: PageCopy;
  melix: PageCopy;
  security: PageCopy;
  heritage: PageCopy;
  final: PageCopy;
}> = {
  en: {
    hero: {
      eyebrow: "Local AI Infrastructure",
      title: "Controlled infrastructure for private AI systems.",
      description: "We build private AI workflows that keep data, models, evaluation, and deployment inside customer-controlled boundaries."
    },
    constraint: {
      eyebrow: "The boundary",
      title: "Define the boundary before expanding capability.",
      description: "Data sources, model calls, training material, evaluation evidence, deployment environments, and ownership need to be explicit before model work begins."
    },
    workflow: {
      eyebrow: "FDE method",
      title: "Work close to the real environment.",
      description: "FDE keeps engineering close to actual data constraints, runtime paths, and user feedback. We collaborate on-site when needed, and remotely when that is the better way to move fast."
    },
    services: {
      eyebrow: "Services",
      title: "Ship runnable model workflows, not vague concepts.",
      description: "Dataset packages, LoRA adapters, fused models, evaluation reports, deployment runbooks, and FDE support for controlled environments."
    },
    melix: {
      eyebrow: "Melix",
      title: "A local AI runtime and model workbench for Apple Silicon.",
      description: "Melix supports local model experiments and operations: model loading, LoRA, evaluation, CLI workflows, local server runs, and evidence records."
    },
    security: {
      eyebrow: "Security",
      title: "Boundaries, evidence, responsibility.",
      description: "Private deployment, least privilege, audit logs, evaluation evidence, and ownership are part of the delivery, not afterthoughts."
    },
    heritage: {
      eyebrow: "Heritage",
      title: "A technical studio, not a software shelf.",
      description: "Random Walk works like an engineering studio: understand constraints, design the structure, verify the result, then hand the system into real operation."
    },
    final: {
      eyebrow: "Next step",
      title: "Start with one clear model workflow.",
      description: "Share the data category, target model, deployment boundary, evaluation needs, and expected deliverables. We will decide whether the project is a fit."
    }
  },
  zh: {
        "hero": {
          "eyebrow": "本地 AI 基础设施",
          "title": "为私有 AI 系统而设的可控基础设施。",
          "description": "我们构建私有 AI 工作流，让数据、模型、评估与部署始终留在客户可控边界之内。"
        },
        "constraint": {
          "eyebrow": "边界",
          "title": "先定义边界，再扩展能力。",
          "description": "在模型工作开始之前，数据来源、模型调用、训练材料、评估证据、部署环境与所有权都需要被清晰明确。"
        },
        "workflow": {
          "eyebrow": "FDE 方法",
          "title": "贴近真实环境开展工作。",
          "description": "FDE 让工程工作始终贴近实际的数据约束、运行路径与用户反馈。必要时我们现场协作；当远程更利于快速推进时，也以远程方式工作。"
        },
        "services": {
          "eyebrow": "服务",
          "title": "交付可运行的模型工作流，而非模糊概念。",
          "description": "面向受控环境的数据集包、LoRA 适配器、融合模型、评估报告、部署运行手册，以及 FDE 支持。"
        },
        "melix": {
          "eyebrow": "Melix",
          "title": "面向 Apple Silicon 的本地 AI runtime 与模型工作台。",
          "description": "Melix 支持本地模型实验与运行：模型加载、LoRA、评估、CLI 工作流、本地服务器运行，以及证据记录。"
        },
        "security": {
          "eyebrow": "安全",
          "title": "边界、证据、责任。",
          "description": "私有部署、最小权限、审计日志、评估证据与所有权，都是交付的一部分，而非事后补充。"
        },
        "heritage": {
          "eyebrow": "传承",
          "title": "一个技术工作室，而非软件货架。",
          "description": "Random Walk 以工程工作室的方式运作：理解约束，设计结构，验证结果，然后将系统交付到真实运行之中。"
        },
        "final": {
          "eyebrow": "下一步",
          "title": "从一个清晰的模型工作流开始。",
          "description": "分享数据类别、目标模型、部署边界、评估需求与预期交付物。我们将判断该项目是否适合推进。"
        }
      },
  ja: {
        "hero": {
          "eyebrow": "ローカル AI インフラストラクチャ",
          "title": "プライベート AI システムのための、制御されたインフラストラクチャ。",
          "description": "データ、モデル、評価、デプロイを顧客管理の境界内に保つ、プライベート AI ワークフローを構築します。"
        },
        "constraint": {
          "eyebrow": "境界",
          "title": "能力を広げる前に、境界を定義する。",
          "description": "モデル作業を始める前に、データソース、モデル呼び出し、トレーニング素材、評価エビデンス、デプロイ環境、そして所有権を明確にしておく必要があります。"
        },
        "workflow": {
          "eyebrow": "FDE メソッド",
          "title": "実環境に近い場所で作業する。",
          "description": "FDE は、エンジニアリングを実際のデータ制約、runtime パス、ユーザーフィードバックに近い位置に保ちます。必要に応じてオンサイトで協働し、より速く進めるうえで適切な場合はリモートで進めます。"
        },
        "services": {
          "eyebrow": "サービス",
          "title": "曖昧なコンセプトではなく、実行可能なモデルワークフローを出荷する。",
          "description": "制御された環境のためのデータセットパッケージ、LoRA アダプター、融合モデル、評価レポート、デプロイ runbook、そして FDE サポート。"
        },
        "melix": {
          "eyebrow": "Melix",
          "title": "Apple Silicon 向けのローカル AI runtime とモデルワークベンチ。",
          "description": "Melix は、ローカルでのモデル実験と運用を支援します：モデルロード、LoRA、評価、CLI ワークフロー、ローカルサーバー実行、そしてエビデンス記録。"
        },
        "security": {
          "eyebrow": "セキュリティ",
          "title": "境界、エビデンス、責任。",
          "description": "プライベートデプロイ、最小権限、監査ログ、評価エビデンス、所有権は、後付けではなく、デリバリーの一部です。"
        },
        "heritage": {
          "eyebrow": "ヘリテージ",
          "title": "ソフトウェアの棚ではなく、技術スタジオ。",
          "description": "Random Walk は、エンジニアリングスタジオのように動きます。制約を理解し、構造を設計し、結果を検証し、そのうえでシステムを実運用へ引き渡します。"
        },
        "final": {
          "eyebrow": "次のステップ",
          "title": "ひとつの明確なモデルワークフローから始める。",
          "description": "データカテゴリ、対象モデル、デプロイ境界、評価要件、想定する成果物を共有してください。そのプロジェクトが適合するかどうかを判断します。"
        }
      },
  ko: {
        "hero": {
          "eyebrow": "로컬 AI 인프라스트럭처",
          "title": "프라이빗 AI 시스템을 위한 통제된 인프라스트럭처.",
          "description": "데이터, 모델, 평가, 배포를 고객이 통제하는 경계 안에 두는 프라이빗 AI 워크플로를 구축합니다."
        },
        "constraint": {
          "eyebrow": "경계",
          "title": "역량을 확장하기 전에 경계를 정의합니다.",
          "description": "모델 작업이 시작되기 전에 데이터 소스, 모델 호출, 학습 자료, 평가 증거, 배포 환경, 소유권이 명확해야 합니다."
        },
        "workflow": {
          "eyebrow": "FDE 방식",
          "title": "실제 환경에 가까이 머물며 작업합니다.",
          "description": "FDE는 엔지니어링이 실제 데이터 제약, runtime 경로, 사용자 피드백에 가깝게 머물도록 합니다. 필요할 때는 현장에서 협업하고, 더 빠른 진행에 적합할 때는 원격으로 협업합니다."
        },
        "services": {
          "eyebrow": "서비스",
          "title": "모호한 개념이 아니라 실행 가능한 모델 워크플로를 제공합니다.",
          "description": "통제된 환경을 위한 데이터셋 패키지, LoRA 어댑터, 융합 모델, 평가 리포트, 배포 runbook, 그리고 FDE 지원."
        },
        "melix": {
          "eyebrow": "Melix",
          "title": "Apple Silicon을 위한 로컬 AI runtime 및 모델 워크벤치.",
          "description": "Melix는 로컬 모델 실험과 운영을 지원합니다: 모델 로딩, LoRA, 평가, CLI 워크플로, 로컬 서버 실행, 증거 기록."
        },
        "security": {
          "eyebrow": "보안",
          "title": "경계, 증거, 책임.",
          "description": "프라이빗 배포, 최소 권한, 감사 로그, 평가 증거, 소유권은 나중에 덧붙이는 것이 아니라 제공 범위의 일부입니다."
        },
        "heritage": {
          "eyebrow": "헤리티지",
          "title": "소프트웨어 진열대가 아니라 기술 스튜디오.",
          "description": "Random Walk는 엔지니어링 스튜디오처럼 일합니다. 제약을 이해하고, 구조를 설계하며, 결과를 검증한 뒤 시스템을 실제 운영으로 인계합니다."
        },
        "final": {
          "eyebrow": "다음 단계",
          "title": "하나의 명확한 모델 워크플로에서 시작합니다.",
          "description": "데이터 카테고리, 대상 모델, 배포 경계, 평가 요구사항, 기대 산출물을 공유해 주세요. 프로젝트가 적합한지 판단하겠습니다."
        }
  }
};

export const eventsPageCopy: Localized<{
  home: PageCopy;
  hero: PageCopy;
  featuredLabel: string;
  proofLabel: string;
  archive: PageCopy;
  viewAllLabel: string;
  inviteLabel: string;
  eventLinkLabel: string;
}> = {
  en: {
    home: {
      eyebrow: "Public presence",
      title: "Where Random Walk meets people.",
      description: "Talks, panels, meetups, and community rooms where Random Walk brings its work into conversation with builders, customers, and technical communities."
    },
    hero: {
      eyebrow: "Events",
      title: "Where Random Walk meets people.",
      description: "Talks, panels, meetups, and community rooms where we test ideas in public, learn from real operators, and stay close to the people building with AI."
    },
    featuredLabel: "Featured presence",
    proofLabel: "Recent rooms",
    archive: {
      eyebrow: "Archive",
      title: "Public appearances, recordings, and community rooms.",
      description: "A record of places where Random Walk has joined the conversation: conferences, panels, meetups, and recorded sessions."
    },
    viewAllLabel: "View all events",
    inviteLabel: "Invite us to speak",
    eventLinkLabel: "Event link"
  },
  zh: {
    home: {
      eyebrow: "公开交流",
      title: "Random Walk 与人相遇的地方。",
      description: "演讲、圆桌、meetup 与社区现场：Random Walk 在这些地方把正在做的工作带入真实对话。"
    },
    hero: {
      eyebrow: "活动",
      title: "Random Walk 与人相遇的地方。",
      description: "演讲、圆桌、meetup 与社区现场，让我们在公开场合验证想法，向真实使用者学习，并靠近正在用 AI 构建产品的人。"
    },
    featuredLabel: "重点活动",
    proofLabel: "近期现场",
    archive: {
      eyebrow: "记录",
      title: "公开亮相、录制内容与社区现场。",
      description: "这里记录 Random Walk 参与过的会议、圆桌、meetup 与公开录制。"
    },
    viewAllLabel: "查看全部活动",
    inviteLabel: "邀请我们分享",
    eventLinkLabel: "活动链接"
  },
  ja: {
    home: {
      eyebrow: "Public presence",
      title: "Random Walk が人と出会う場所。",
      description: "トーク、パネル、meetup、コミュニティの場。Random Walk はそこで、取り組みを実際の会話へ持ち込みます。"
    },
    hero: {
      eyebrow: "Events",
      title: "Random Walk が人と出会う場所。",
      description: "トーク、パネル、meetup、コミュニティの場を通じて、アイデアを公開の場で確かめ、実際の運用者から学び、AI でつくる人たちに近づきます。"
    },
    featuredLabel: "Featured presence",
    proofLabel: "Recent rooms",
    archive: {
      eyebrow: "Archive",
      title: "登壇、録画、コミュニティ参加の記録。",
      description: "Random Walk が会話に参加してきたカンファレンス、パネル、meetup、録画セッションの記録です。"
    },
    viewAllLabel: "すべてのイベントを見る",
    inviteLabel: "登壇を相談する",
    eventLinkLabel: "イベントリンク"
  },
  ko: {
    home: {
      eyebrow: "Public presence",
      title: "Random Walk가 사람들과 만나는 곳.",
      description: "토크, 패널, meetup, 커뮤니티 현장에서 Random Walk는 진행 중인 작업을 실제 대화로 가져갑니다."
    },
    hero: {
      eyebrow: "Events",
      title: "Random Walk가 사람들과 만나는 곳.",
      description: "토크, 패널, meetup, 커뮤니티 현장에서 아이디어를 공개적으로 검증하고 실제 운영자에게 배우며 AI로 만드는 사람들과 가까이 있습니다."
    },
    featuredLabel: "Featured presence",
    proofLabel: "Recent rooms",
    archive: {
      eyebrow: "Archive",
      title: "공개 참여, 녹화, 커뮤니티 현장의 기록.",
      description: "Random Walk가 대화에 참여한 컨퍼런스, 패널, meetup, 녹화 세션의 기록입니다."
    },
    viewAllLabel: "모든 이벤트 보기",
    inviteLabel: "발표 초대하기",
    eventLinkLabel: "이벤트 링크"
  }
};

export const eventPresenceItems: Localized<EventPresence[]> = {
  en: [
    {
      slug: "clawcon-tokyo-2026",
      title: "ClawCon Tokyo",
      role: "Community event",
      date: "March 30, 2026",
      location: "Tokyo, Japan",
      summary: "A Tokyo gathering for people building AI they can shape, run, and make their own.",
      pullLine: "Personal AI should feel close enough to touch, tune, and trust.",
      tags: ["Personal AI", "Local models", "Community"],
      assetId: "event-clawcon-tokyo-2026",
      href: "https://luma.com/clawcontokyo",
      linkLabel: "Event Website"
    },
    {
      slug: "ai-web3-online-panel-2026",
      title: "AI x Web3 Online Panel",
      role: "Speaker / online panel",
      date: "January 26, 2026",
      location: "Online",
      summary: "A recorded conversation about making AI products easier for people to understand, direct, and use with confidence.",
      pullLine: "Useful AI becomes stronger when people can see how it fits their world.",
      tags: ["AI products", "User ownership", "Recorded panel"],
      assetId: "event-online-panel-youtube-2025",
      href: "https://www.youtube.com/watch?v=2X5ZcL1zfmo",
      linkLabel: "Watch Recording"
    },
    {
      slug: "devcon-sea-2025",
      title: "DevCon SEA 2025",
      role: "Conference attendee",
      date: "November 12, 2025",
      location: "Bangkok, Thailand",
      summary: "Meeting builders across Asia who care about durable tools, new networks, and user-owned systems.",
      pullLine: "Good infrastructure earns trust in rooms where people compare notes.",
      tags: ["Builders", "Infrastructure", "Asia"],
      assetId: "event-devcon-sea-2025",
      href: "https://devcon.org/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2025",
      title: "WebX Tokyo 2025",
      role: "Conference attendee",
      date: "August 28, 2025",
      location: "Tokyo, Japan",
      summary: "A Tokyo forum where product, finance, and creator communities meet new infrastructure ideas.",
      pullLine: "The best product signals often come from conversations outside the product page.",
      tags: ["Tokyo", "Products", "Community"],
      assetId: "event-webx-tokyo-2025",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2024",
      title: "WebX Tokyo 2024",
      role: "Conference attendee",
      date: "August 25, 2024",
      location: "Tokyo, Japan",
      summary: "Early conversations with founders and communities experimenting with new internet products.",
      pullLine: "A young product direction becomes clearer when it meets real communities.",
      tags: ["Tokyo", "Founders", "New products"],
      assetId: "event-webx-tokyo-2024",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "eth-tokyo-2024",
      title: "ETH Tokyo 2024",
      role: "Conference attendee",
      date: "April 15, 2024",
      location: "Tokyo, Japan",
      summary: "A local builder gathering that helped shape Random Walk's view of community-owned software.",
      pullLine: "Community software starts with people who are willing to build in the open.",
      tags: ["Tokyo", "Builders", "Open systems"],
      assetId: "event-eth-tokyo-2024",
      href: "https://ethtokyo.com/",
      linkLabel: "Event Website"
    }
  ],
  zh: [
    {
      slug: "clawcon-tokyo-2026",
      title: "ClawCon Tokyo",
      role: "社区活动",
      date: "2026 年 3 月 30 日",
      location: "日本东京",
      summary: "一场东京聚会，面向那些希望亲手塑造、运行并拥有自己 AI 的人。",
      pullLine: "个人 AI 应该近到可以触摸、调整，并值得信任。",
      tags: ["个人 AI", "本地模型", "社区"],
      assetId: "event-clawcon-tokyo-2026",
      href: "https://luma.com/clawcontokyo",
      linkLabel: "活动网站"
    },
    {
      slug: "ai-web3-online-panel-2026",
      title: "AI x Web3 Online Panel",
      role: "线上圆桌嘉宾",
      date: "2026 年 1 月 26 日",
      location: "线上",
      summary: "一场关于如何让 AI 产品更容易被普通用户理解、指挥和放心使用的录制对话。",
      pullLine: "当人们看得懂 AI 如何进入自己的生活，它才真正变得有用。",
      tags: ["AI 产品", "用户拥有", "录制圆桌"],
      assetId: "event-online-panel-youtube-2025",
      href: "https://www.youtube.com/watch?v=2X5ZcL1zfmo",
      linkLabel: "观看录制"
    },
    {
      slug: "devcon-sea-2025",
      title: "DevCon SEA 2025",
      role: "会议参与",
      date: "2025 年 11 月 12 日",
      location: "泰国曼谷",
      summary: "与亚洲各地关注长期工具、新网络和用户自主系统的建设者交流。",
      pullLine: "好的基础设施，必须在真实交流中赢得信任。",
      tags: ["建设者", "基础设施", "亚洲"],
      assetId: "event-devcon-sea-2025",
      href: "https://devcon.org/",
      linkLabel: "活动网站"
    },
    {
      slug: "webx-tokyo-2025",
      title: "WebX Tokyo 2025",
      role: "会议参与",
      date: "2025 年 8 月 28 日",
      location: "日本东京",
      summary: "一个让产品、金融与创作者社区接触新基础设施想法的东京现场。",
      pullLine: "很多最有价值的产品信号，来自产品页面之外的对话。",
      tags: ["东京", "产品", "社区"],
      assetId: "event-webx-tokyo-2025",
      href: "https://webx-asia.com/",
      linkLabel: "活动网站"
    },
    {
      slug: "webx-tokyo-2024",
      title: "WebX Tokyo 2024",
      role: "会议参与",
      date: "2024 年 8 月 25 日",
      location: "日本东京",
      summary: "与正在试验新互联网产品的创始人与社区进行早期交流。",
      pullLine: "一个年轻的产品方向，只有遇到真实社区才会更清晰。",
      tags: ["东京", "创始人", "新产品"],
      assetId: "event-webx-tokyo-2024",
      href: "https://webx-asia.com/",
      linkLabel: "活动网站"
    },
    {
      slug: "eth-tokyo-2024",
      title: "ETH Tokyo 2024",
      role: "会议参与",
      date: "2024 年 4 月 15 日",
      location: "日本东京",
      summary: "一个本地建设者聚会，帮助 Random Walk 形成对社区拥有型软件的判断。",
      pullLine: "社区软件始于愿意公开构建的人。",
      tags: ["东京", "建设者", "开放系统"],
      assetId: "event-eth-tokyo-2024",
      href: "https://ethtokyo.com/",
      linkLabel: "活动网站"
    }
  ],
  ja: [
    {
      slug: "clawcon-tokyo-2026",
      title: "ClawCon Tokyo",
      role: "コミュニティイベント",
      date: "2026年3月30日",
      location: "東京、日本",
      summary: "自分で形づくり、動かし、所有できる AI をつくる人たちのための東京の集まり。",
      pullLine: "Personal AI は、触れられ、調整でき、信頼できる距離にあるべきです。",
      tags: ["Personal AI", "ローカルモデル", "コミュニティ"],
      assetId: "event-clawcon-tokyo-2026",
      href: "https://luma.com/clawcontokyo",
      linkLabel: "Event Website"
    },
    {
      slug: "ai-web3-online-panel-2026",
      title: "AI x Web3 Online Panel",
      role: "登壇 / オンラインパネル",
      date: "2026年1月26日",
      location: "オンライン",
      summary: "AI プロダクトを、人が理解し、指示し、安心して使えるものにするための録画対話。",
      pullLine: "人が自分の世界とのつながりを理解できるほど、AI は役に立ちます。",
      tags: ["AI products", "User ownership", "録画パネル"],
      assetId: "event-online-panel-youtube-2025",
      href: "https://www.youtube.com/watch?v=2X5ZcL1zfmo",
      linkLabel: "Watch Recording"
    },
    {
      slug: "devcon-sea-2025",
      title: "DevCon SEA 2025",
      role: "カンファレンス参加",
      date: "2025年11月12日",
      location: "バンコク、タイ",
      summary: "長く使えるツール、新しいネットワーク、ユーザー主導のシステムに関心を持つアジアのビルダーとの交流。",
      pullLine: "良いインフラは、人々が意見を交わす場で信頼を得ていきます。",
      tags: ["Builders", "Infrastructure", "Asia"],
      assetId: "event-devcon-sea-2025",
      href: "https://devcon.org/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2025",
      title: "WebX Tokyo 2025",
      role: "カンファレンス参加",
      date: "2025年8月28日",
      location: "東京、日本",
      summary: "プロダクト、金融、クリエイターのコミュニティが新しいインフラの考え方と出会う東京の場。",
      pullLine: "重要なプロダクトの兆しは、プロダクトページの外にある会話から生まれます。",
      tags: ["Tokyo", "Products", "Community"],
      assetId: "event-webx-tokyo-2025",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2024",
      title: "WebX Tokyo 2024",
      role: "カンファレンス参加",
      date: "2024年8月25日",
      location: "東京、日本",
      summary: "新しいインターネットプロダクトを試す創業者やコミュニティとの初期の対話。",
      pullLine: "若いプロダクトの方向性は、実際のコミュニティと出会うことで明確になります。",
      tags: ["Tokyo", "Founders", "New products"],
      assetId: "event-webx-tokyo-2024",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "eth-tokyo-2024",
      title: "ETH Tokyo 2024",
      role: "カンファレンス参加",
      date: "2024年4月15日",
      location: "東京、日本",
      summary: "Random Walk のコミュニティ所有型ソフトウェアへの見方を形づくった、ローカルなビルダーの集まり。",
      pullLine: "コミュニティソフトウェアは、オープンにつくる意思のある人から始まります。",
      tags: ["Tokyo", "Builders", "Open systems"],
      assetId: "event-eth-tokyo-2024",
      href: "https://ethtokyo.com/",
      linkLabel: "Event Website"
    }
  ],
  ko: [
    {
      slug: "clawcon-tokyo-2026",
      title: "ClawCon Tokyo",
      role: "커뮤니티 이벤트",
      date: "2026년 3월 30일",
      location: "도쿄, 일본",
      summary: "직접 만들고, 실행하고, 소유할 수 있는 AI를 구축하려는 사람들을 위한 도쿄 모임.",
      pullLine: "Personal AI는 만지고, 조정하고, 신뢰할 수 있을 만큼 가까워야 합니다.",
      tags: ["Personal AI", "Local models", "Community"],
      assetId: "event-clawcon-tokyo-2026",
      href: "https://luma.com/clawcontokyo",
      linkLabel: "Event Website"
    },
    {
      slug: "ai-web3-online-panel-2026",
      title: "AI x Web3 Online Panel",
      role: "발표 / 온라인 패널",
      date: "2026년 1월 26일",
      location: "온라인",
      summary: "사람들이 AI 제품을 더 쉽게 이해하고 지시하며 안심하고 사용할 수 있게 만드는 방법에 대한 녹화 대화.",
      pullLine: "사람들이 자신의 세계와 연결되는 방식을 볼 수 있을 때 AI는 더 유용해집니다.",
      tags: ["AI products", "User ownership", "Recorded panel"],
      assetId: "event-online-panel-youtube-2025",
      href: "https://www.youtube.com/watch?v=2X5ZcL1zfmo",
      linkLabel: "Watch Recording"
    },
    {
      slug: "devcon-sea-2025",
      title: "DevCon SEA 2025",
      role: "컨퍼런스 참석",
      date: "2025년 11월 12일",
      location: "방콕, 태국",
      summary: "오래 쓰이는 도구, 새로운 네트워크, 사용자가 소유하는 시스템에 관심 있는 아시아의 빌더들과 만난 자리.",
      pullLine: "좋은 인프라는 사람들이 서로 비교하고 이야기하는 자리에서 신뢰를 얻습니다.",
      tags: ["Builders", "Infrastructure", "Asia"],
      assetId: "event-devcon-sea-2025",
      href: "https://devcon.org/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2025",
      title: "WebX Tokyo 2025",
      role: "컨퍼런스 참석",
      date: "2025년 8월 28일",
      location: "도쿄, 일본",
      summary: "제품, 금융, 크리에이터 커뮤니티가 새로운 인프라 아이디어를 만나는 도쿄의 장.",
      pullLine: "가장 중요한 제품 신호는 종종 제품 페이지 밖의 대화에서 나옵니다.",
      tags: ["Tokyo", "Products", "Community"],
      assetId: "event-webx-tokyo-2025",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "webx-tokyo-2024",
      title: "WebX Tokyo 2024",
      role: "컨퍼런스 참석",
      date: "2024년 8월 25일",
      location: "도쿄, 일본",
      summary: "새로운 인터넷 제품을 실험하는 창업자와 커뮤니티와의 초기 대화.",
      pullLine: "초기 제품 방향은 실제 커뮤니티를 만날 때 더 선명해집니다.",
      tags: ["Tokyo", "Founders", "New products"],
      assetId: "event-webx-tokyo-2024",
      href: "https://webx-asia.com/",
      linkLabel: "Event Website"
    },
    {
      slug: "eth-tokyo-2024",
      title: "ETH Tokyo 2024",
      role: "컨퍼런스 참석",
      date: "2024년 4월 15일",
      location: "도쿄, 일본",
      summary: "커뮤니티가 소유하는 소프트웨어에 대한 Random Walk의 관점을 형성하는 데 도움을 준 로컬 빌더 모임.",
      pullLine: "커뮤니티 소프트웨어는 공개적으로 만들 의지가 있는 사람들로부터 시작됩니다.",
      tags: ["Tokyo", "Builders", "Open systems"],
      assetId: "event-eth-tokyo-2024",
      href: "https://ethtokyo.com/",
      linkLabel: "Event Website"
    }
  ]
};

export const speakingContactCopy: Localized<{
  hero: PageCopy;
  panelTitle: string;
  panelBody: string;
  topicLabel: string;
  messagePlaceholder: string;
  emailSubject: string;
}> = {
  en: {
    hero: {
      eyebrow: "Speaking",
      title: "Invite Random Walk to speak, lead a workshop, or join a panel.",
      description: "Share the event format, audience, location or recording plan, preferred topic, and timeline. We will reply if the invitation is a fit."
    },
    panelTitle: "Speaking / workshop / panel",
    panelBody: "Useful context: event format, expected audience, city or recording plan, preferred topic, timing, and what you want the audience to remember.",
    topicLabel: "Speaking / workshop / panel",
    messagePlaceholder: "Tell us about the event format, audience, location or recording plan, preferred topic, timeline, and what kind of conversation you want Random Walk to bring.",
    emailSubject: "Speaking / workshop / panel invitation"
  },
  zh: {
    hero: {
      eyebrow: "分享邀请",
      title: "邀请 Random Walk 演讲、主持 workshop 或参与圆桌。",
      description: "请说明活动形式、受众、地点或录制方式、希望讨论的主题与时间计划。适合的话我们会回复。"
    },
    panelTitle: "演讲 / workshop / 圆桌",
    panelBody: "有用信息包括：活动形式、预计受众、城市或录制方式、希望讨论的主题、时间，以及你希望听众记住什么。",
    topicLabel: "演讲 / workshop / 圆桌",
    messagePlaceholder: "请说明活动形式、受众、地点或录制方式、希望讨论的主题、时间计划，以及你希望 Random Walk 带来怎样的对话。",
    emailSubject: "演讲 / workshop / 圆桌邀请"
  },
  ja: {
    hero: {
      eyebrow: "Speaking",
      title: "Random Walk への登壇、ワークショップ、パネル参加の依頼。",
      description: "イベント形式、参加者、場所または録画計画、希望テーマ、時期を共有してください。適している場合に返信します。"
    },
    panelTitle: "登壇 / ワークショップ / パネル",
    panelBody: "イベント形式、想定参加者、都市または録画計画、希望テーマ、時期、参加者に残したいことを共有してください。",
    topicLabel: "登壇 / ワークショップ / パネル",
    messagePlaceholder: "イベント形式、参加者、場所または録画計画、希望テーマ、時期、Random Walk に期待する対話を記載してください。",
    emailSubject: "登壇 / ワークショップ / パネル依頼"
  },
  ko: {
    hero: {
      eyebrow: "Speaking",
      title: "Random Walk를 발표, 워크숍, 패널에 초대하세요.",
      description: "이벤트 형식, 청중, 장소 또는 녹화 계획, 선호 주제와 일정을 공유해 주세요. 적합하면 답변드리겠습니다."
    },
    panelTitle: "발표 / 워크숍 / 패널",
    panelBody: "이벤트 형식, 예상 청중, 도시 또는 녹화 계획, 선호 주제, 일정, 청중이 기억하길 바라는 내용을 알려 주세요.",
    topicLabel: "발표 / 워크숍 / 패널",
    messagePlaceholder: "이벤트 형식, 청중, 장소 또는 녹화 계획, 선호 주제, 일정, Random Walk가 어떤 대화를 가져오길 원하는지 알려 주세요.",
    emailSubject: "발표 / 워크숍 / 패널 초대"
  }
};

export const deliveryChain = [
  "Private Data",
  "Dataset Package",
  "LoRA Adapter + Evidence",
  "Fused Model",
  "Evaluation Report",
  "Deployment Runbook",
  "FDE Support"
];

export const serviceModules: ServiceModule[] = [
  {
    title: "Dataset Preparation for Model Training",
    description: "Convert domain material into structured Train / Validation / Test datasets that can be reviewed, versioned, and used for local model adaptation.",
    deliverables: ["Dataset package", "Dataset manifest", "Split rationale", "Preprocessing notes", "Redaction / exclusion notes", "Data movement register"]
  },
  {
    title: "LoRA Adapter Development",
    description: "Train adapters for customer-specific tasks and deliver them with training records, model references, evaluation summaries, and activation notes.",
    deliverables: ["LoRA adapter", "Training configuration", "Training run record", "Evaluation report", "Activation notes"]
  },
  {
    title: "Fused Model Delivery",
    description: "When contracted, package tuned behavior into privately licensed fused models for customer-controlled environments.",
    deliverables: ["Fused model artifact", "Private license terms", "Deployment notes", "Known limitation notes"]
  },
  {
    title: "Evaluation & Evidence",
    description: "Produce reviewable evaluation artifacts so security, compliance, and engineering teams can reason about model behavior before deployment.",
    deliverables: ["Task evaluation", "Regression checks", "Test set summaries", "Limitation register", "Next-iteration recommendations"]
  },
  {
    title: "Private Deployment",
    description: "Deploy model systems across Apple Silicon, on-prem GPU servers, private cloud, customer VPC, air-gapped systems, and edge devices.",
    deliverables: ["Deployment runbook", "Runtime configuration", "Access path", "Rollback plan", "Operator checklist"]
  },
  {
    title: "FDE Support",
    description: "Support remote and on-site implementation, especially while a private model workflow is being introduced into real use.",
    deliverables: ["FDE introduction support", "Remote engineering support", "Support handoff", "Optional continuous tuning by contract"]
  }
];

export const industries: Industry[] = [
  {
    title: "Research / IP-heavy studios",
    description: "For teams working with proprietary research, invention notes, expert knowledge, contracts, and confidential domain material.",
    needs: ["Private document reasoning", "Patent / prior-art support workflows", "Confidential drafting assistance", "IP-sensitive data boundary control"]
  },
  {
    title: "Content / design / production teams",
    description: "For studios that need AI support around internal style, reusable knowledge, production assets, and local review workflows.",
    needs: ["Studio knowledge workflows", "Private drafting support", "Reusable evaluation sets", "Local model adaptation"]
  },
  {
    title: "Operations / internal tools teams",
    description: "For companies that need model workflows around internal procedures, customer-sensitive records, automation, and controlled deployment paths.",
    needs: ["Private knowledge assistants", "Secure document workflows", "Workflow automation", "Model evaluation evidence"]
  }
];

export const deploymentModes: DeploymentMode[] = [
  {
    label: "Apple Silicon / on-device",
    where: "Local model iteration for teams and individual developers.",
    evidence: "Device/runtime setup notes."
  },
  {
    label: "On-prem GPU server",
    where: "Training and inference inside company-owned compute.",
    evidence: "Environment record and operator runbook."
  },
  {
    label: "Private cloud",
    where: "Dedicated private infrastructure with controlled access paths.",
    evidence: "Architecture diagram and access notes."
  },
  {
    label: "Customer VPC",
    where: "Deployment inside the customer's own approved cloud boundary.",
    evidence: "Data movement register and runtime record."
  },
  {
    label: "Air-gapped environment",
    where: "Systems designed for restricted or disconnected environments.",
    evidence: "Transfer procedure, update path, and evidence handling notes."
  },
  {
    label: "Edge devices",
    where: "Inference near devices, operators, sensors, or industrial workflows.",
    evidence: "Fleet update model and lightweight runtime notes."
  }
];

export const evidenceArtifacts = [
  ["Constraint register", "Captures privacy, compliance, and deployment constraints."],
  ["Dataset manifest", "Documents sources, transformations, exclusions, and retention."],
  ["Training run record", "Captures model, dataset, adapter, runtime, and parameters."],
  ["Evaluation report", "Preserves behavior tests, benchmark results, failures, and limits."],
  ["Deployment runbook", "Explains installation, access, monitoring, rollback, and ownership."],
  ["Change log", "Tracks model, data, adapter, and runtime changes over time."]
] as const;

export const technicalHeritage = [
  "Privacy engineering",
  "Data platforms",
  "Distributed infrastructure",
  "Cryptographic systems",
  "Local-first product design",
  "AI/ML systems"
];

export const localizedDeliveryChain: Localized<string[]> = {
  en: deliveryChain,
  zh: [
        "私有数据",
        "数据集包",
        "LoRA 适配器 + 证据",
        "融合模型",
        "评估报告",
        "部署运行手册",
        "FDE 支持"
      ],
  ja: [
        "プライベートデータ",
        "データセットパッケージ",
        "LoRA アダプター + エビデンス",
        "融合モデル",
        "評価レポート",
        "デプロイメントランブック",
        "FDE サポート"
      ],
  ko: [
        "프라이빗 데이터",
        "데이터셋 패키지",
        "LoRA 어댑터 + 근거",
        "융합 모델",
        "평가 리포트",
        "배포 런북",
        "FDE 지원"
      ]
};

export const localizedServiceModules: Localized<ServiceModule[]> = {
  en: serviceModules,
  zh: [
        {
          "title": "模型训练数据集准备",
          "description": "将领域材料转化为结构化的 Train / Validation / Test 数据集，使其可被审阅、版本化，并用于本地模型适配。",
          "deliverables": [
            "数据集包",
            "数据集清单",
            "数据拆分依据",
            "预处理说明",
            "删减 / 排除说明",
            "数据流转登记"
          ]
        },
        {
          "title": "LoRA 适配器开发",
          "description": "为客户专属任务训练适配器，并连同训练记录、模型引用、评估摘要与启用说明一并交付。",
          "deliverables": [
            "LoRA 适配器",
            "训练配置",
            "训练运行记录",
            "评估报告",
            "启用说明"
          ]
        },
        {
          "title": "融合模型交付",
          "description": "在合约约定下，将调优后的行为封装为私有授权的融合模型，用于客户可控环境。",
          "deliverables": [
            "融合模型 artifact",
            "私有许可条款",
            "部署说明",
            "已知限制说明"
          ]
        },
        {
          "title": "评估与证据",
          "description": "产出可审阅的评估 artifact，使安全、合规与工程团队能够在部署前判断模型行为。",
          "deliverables": [
            "任务评估",
            "回归检查",
            "测试集摘要",
            "限制登记",
            "下一轮迭代建议"
          ]
        },
        {
          "title": "私有部署",
          "description": "在 Apple Silicon、本地 GPU 服务器、私有云、客户 VPC、离线隔离系统与边缘设备中部署模型系统。",
          "deliverables": [
            "部署 runbook",
            "Runtime 配置",
            "访问路径",
            "回滚计划",
            "操作员检查清单"
          ]
        },
        {
          "title": "FDE 支持",
          "description": "支持远程与现场实施，尤其是在私有模型工作流被引入真实使用场景的阶段。",
          "deliverables": [
            "FDE 引入支持",
            "远程工程支持",
            "支持交接",
            "按合约可选的持续调优"
          ]
        }
      ],
  ja: [
        {
          "title": "モデル学習のためのデータセット準備",
          "description": "ドメイン素材を、レビュー、バージョン管理、ローカルモデル適応に利用できる構造化された Train / Validation / Test データセットへ変換します。",
          "deliverables": [
            "データセットパッケージ",
            "データセットマニフェスト",
            "分割根拠",
            "前処理ノート",
            "墨消し / 除外ノート",
            "データ移動台帳"
          ]
        },
        {
          "title": "LoRA アダプター開発",
          "description": "顧客固有のタスクに向けてアダプターを学習し、学習記録、モデル参照、評価サマリー、アクティベーションノートとともに納品します。",
          "deliverables": [
            "LoRA アダプター",
            "学習設定",
            "学習実行記録",
            "評価レポート",
            "アクティベーションノート"
          ]
        },
        {
          "title": "融合モデル納品",
          "description": "契約に基づき、チューニングされた挙動を、顧客が制御する環境向けのプライベートライセンス付き融合モデルとしてパッケージします。",
          "deliverables": [
            "融合モデル artifact",
            "プライベートライセンス条項",
            "デプロイノート",
            "既知の制限ノート"
          ]
        },
        {
          "title": "評価とエビデンス",
          "description": "セキュリティ、コンプライアンス、エンジニアリングの各チームが、デプロイ前にモデル挙動を判断できるよう、レビュー可能な評価 artifact を作成します。",
          "deliverables": [
            "タスク評価",
            "回帰チェック",
            "テストセットサマリー",
            "制限台帳",
            "次回イテレーションへの推奨事項"
          ]
        },
        {
          "title": "プライベートデプロイ",
          "description": "Apple Silicon、オンプレミス GPU サーバー、プライベートクラウド、顧客 VPC、エアギャップシステム、エッジデバイスにわたり、モデルシステムをデプロイします。",
          "deliverables": [
            "デプロイ runbook",
            "Runtime 設定",
            "アクセス経路",
            "ロールバック計画",
            "オペレーターチェックリスト"
          ]
        },
        {
          "title": "FDE サポート",
          "description": "プライベートモデルワークフローが実運用へ導入される段階を中心に、リモートおよびオンサイトでの実装を支援します。",
          "deliverables": [
            "FDE 導入支援",
            "リモートエンジニアリング支援",
            "サポート引き継ぎ",
            "契約に基づく任意の継続チューニング"
          ]
        }
      ],
  ko: [
        {
          "title": "모델 학습을 위한 데이터셋 준비",
          "description": "도메인 자료를 검토, 버전 관리, 로컬 모델 적응에 사용할 수 있는 구조화된 Train / Validation / Test 데이터셋으로 변환합니다.",
          "deliverables": [
            "데이터셋 패키지",
            "데이터셋 매니페스트",
            "분할 근거",
            "전처리 노트",
            "비식별 / 제외 노트",
            "데이터 이동 등록부"
          ]
        },
        {
          "title": "LoRA 어댑터 개발",
          "description": "고객별 작업을 위한 어댑터를 학습하고, 학습 기록, 모델 참조, 평가 요약, 활성화 노트와 함께 제공합니다.",
          "deliverables": [
            "LoRA 어댑터",
            "학습 구성",
            "학습 실행 기록",
            "평가 리포트",
            "활성화 노트"
          ]
        },
        {
          "title": "융합 모델 제공",
          "description": "계약에 따라, 튜닝된 동작을 고객이 통제하는 환경을 위한 프라이빗 라이선스 융합 모델로 패키징합니다.",
          "deliverables": [
            "융합 모델 artifact",
            "프라이빗 라이선스 조건",
            "배포 노트",
            "알려진 제한사항 노트"
          ]
        },
        {
          "title": "평가 및 증거",
          "description": "보안, 컴플라이언스, 엔지니어링 팀이 배포 전에 모델 동작을 판단할 수 있도록 검토 가능한 평가 artifact를 생성합니다.",
          "deliverables": [
            "작업 평가",
            "회귀 검사",
            "테스트 세트 요약",
            "제한사항 등록부",
            "다음 반복을 위한 권고사항"
          ]
        },
        {
          "title": "프라이빗 배포",
          "description": "Apple Silicon, 온프레미스 GPU 서버, 프라이빗 클라우드, 고객 VPC, 에어갭 시스템, 엣지 디바이스 전반에 모델 시스템을 배포합니다.",
          "deliverables": [
            "배포 runbook",
            "Runtime 구성",
            "접근 경로",
            "롤백 계획",
            "운영자 체크리스트"
          ]
        },
        {
          "title": "FDE 지원",
          "description": "프라이빗 모델 워크플로가 실제 사용 환경에 도입되는 단계에서 특히, 원격 및 현장 구현을 지원합니다.",
          "deliverables": [
            "FDE 도입 지원",
            "원격 엔지니어링 지원",
            "지원 인계",
            "계약에 따른 선택적 지속 튜닝"
          ]
        }
      ]
};

export const localizedIndustries: Localized<Industry[]> = {
  en: industries,
  zh: [
        {
          "title": "研究 / IP 密集型工作室",
          "description": "面向处理专有研究、发明笔记、专家知识、合同与机密领域材料的团队。",
          "needs": [
            "私有文档推理",
            "专利 / 现有技术支持工作流",
            "机密写作辅助",
            "IP 敏感数据边界控制"
          ]
        },
        {
          "title": "内容 / 设计 / 制作团队",
          "description": "面向需要围绕内部风格、可复用知识、制作资产与本地审阅工作流获得 AI 支持的工作室。",
          "needs": [
            "工作室知识工作流",
            "私有写作支持",
            "可复用评估集",
            "本地模型适配"
          ]
        },
        {
          "title": "运营 / 内部工具团队",
          "description": "面向需要围绕内部流程、客户敏感记录、自动化与受控部署路径构建模型工作流的公司。",
          "needs": [
            "私有知识助手",
            "安全文档工作流",
            "工作流自动化",
            "模型评估证据"
          ]
        }
      ],
  ja: [
        {
          "title": "研究 / IP 集約型スタジオ",
          "description": "独自研究、発明ノート、専門知、契約書、機密性の高いドメイン素材を扱うチーム向け。",
          "needs": [
            "プライベート文書推論",
            "特許 / 先行技術サポートワークフロー",
            "機密ドラフト支援",
            "IP センシティブなデータ境界制御"
          ]
        },
        {
          "title": "コンテンツ / デザイン / 制作チーム",
          "description": "社内スタイル、再利用可能な知識、制作アセット、ローカルレビューワークフローをめぐる AI 支援を必要とするスタジオ向け。",
          "needs": [
            "スタジオ知識ワークフロー",
            "プライベートドラフト支援",
            "再利用可能な評価セット",
            "ローカルモデル適応"
          ]
        },
        {
          "title": "オペレーション / 社内ツールチーム",
          "description": "社内手順、顧客機密レコード、自動化、制御されたデプロイ経路をめぐるモデルワークフローを必要とする企業向け。",
          "needs": [
            "プライベート知識アシスタント",
            "セキュアな文書ワークフロー",
            "ワークフロー自動化",
            "モデル評価エビデンス"
          ]
        }
      ],
  ko: [
        {
          "title": "연구 / IP 집약형 스튜디오",
          "description": "독점 연구, 발명 노트, 전문가 지식, 계약, 기밀 도메인 자료를 다루는 팀을 위한 영역입니다.",
          "needs": [
            "프라이빗 문서 추론",
            "특허 / 선행기술 지원 워크플로",
            "기밀 초안 작성 지원",
            "IP 민감 데이터 경계 제어"
          ]
        },
        {
          "title": "콘텐츠 / 디자인 / 프로덕션 팀",
          "description": "내부 스타일, 재사용 가능한 지식, 제작 자산, 로컬 검토 워크플로를 중심으로 AI 지원이 필요한 스튜디오를 위한 영역입니다.",
          "needs": [
            "스튜디오 지식 워크플로",
            "프라이빗 초안 작성 지원",
            "재사용 가능한 평가 세트",
            "로컬 모델 적응"
          ]
        },
        {
          "title": "운영 / 내부 도구 팀",
          "description": "내부 절차, 고객 민감 기록, 자동화, 통제된 배포 경로를 중심으로 모델 워크플로가 필요한 회사를 위한 영역입니다.",
          "needs": [
            "프라이빗 지식 어시스턴트",
            "보안 문서 워크플로",
            "워크플로 자동화",
            "모델 평가 증거"
          ]
        }
      ]
};

export const localizedDeploymentModes: Localized<DeploymentMode[]> = {
  en: deploymentModes,
  zh: [
        {
          "label": "Apple Silicon / 端侧",
          "where": "面向团队与个人开发者的本地模型迭代。",
          "evidence": "设备 / runtime 设置说明。"
        },
        {
          "label": "本地 GPU 服务器",
          "where": "在公司自有算力之内进行训练与推理。",
          "evidence": "环境记录与操作员 runbook。"
        },
        {
          "label": "私有云",
          "where": "具备受控访问路径的专用私有基础设施。",
          "evidence": "架构图与访问说明。"
        },
        {
          "label": "客户 VPC",
          "where": "部署在客户自有且已获批准的云边界之内。",
          "evidence": "数据流转登记与 runtime 记录。"
        },
        {
          "label": "离线隔离环境",
          "where": "为受限或断连环境设计的系统。",
          "evidence": "传输流程、更新路径与证据处理说明。"
        },
        {
          "label": "边缘设备",
          "where": "在设备、操作员、传感器或工业工作流附近进行推理。",
          "evidence": "设备群更新模型与轻量 runtime 说明。"
        }
      ],
  ja: [
        {
          "label": "Apple Silicon / オンデバイス",
          "where": "チームおよび個人開発者のためのローカルモデルイテレーション。",
          "evidence": "デバイス / runtime セットアップノート。"
        },
        {
          "label": "オンプレミス GPU サーバー",
          "where": "企業所有のコンピュート内で行う学習と推論。",
          "evidence": "環境記録とオペレーター runbook。"
        },
        {
          "label": "プライベートクラウド",
          "where": "制御されたアクセス経路を備えた専用プライベートインフラストラクチャ。",
          "evidence": "アーキテクチャ図とアクセスノート。"
        },
        {
          "label": "顧客 VPC",
          "where": "顧客自身が承認したクラウド境界内でのデプロイ。",
          "evidence": "データ移動台帳と runtime 記録。"
        },
        {
          "label": "エアギャップ環境",
          "where": "制限された、または切断された環境向けに設計されたシステム。",
          "evidence": "転送手順、更新経路、エビデンス取扱ノート。"
        },
        {
          "label": "エッジデバイス",
          "where": "デバイス、オペレーター、センサー、または産業ワークフローの近くで行う推論。",
          "evidence": "フリート更新モデルと軽量 runtime ノート。"
        }
      ],
  ko: [
        {
          "label": "Apple Silicon / 온디바이스",
          "where": "팀과 개인 개발자를 위한 로컬 모델 반복 작업.",
          "evidence": "디바이스 / runtime 설정 노트."
        },
        {
          "label": "온프레미스 GPU 서버",
          "where": "회사 소유 컴퓨트 안에서 수행하는 학습과 추론.",
          "evidence": "환경 기록 및 운영자 runbook."
        },
        {
          "label": "프라이빗 클라우드",
          "where": "통제된 접근 경로를 갖춘 전용 프라이빗 인프라스트럭처.",
          "evidence": "아키텍처 다이어그램 및 접근 노트."
        },
        {
          "label": "고객 VPC",
          "where": "고객이 자체 승인한 클라우드 경계 안에서의 배포.",
          "evidence": "데이터 이동 등록부 및 runtime 기록."
        },
        {
          "label": "에어갭 환경",
          "where": "제한되거나 연결이 차단된 환경을 위해 설계된 시스템.",
          "evidence": "전송 절차, 업데이트 경로, 증거 처리 노트."
        },
        {
          "label": "엣지 디바이스",
          "where": "디바이스, 운영자, 센서 또는 산업 워크플로 가까이에서 수행하는 추론.",
          "evidence": "플릿 업데이트 모델 및 경량 runtime 노트."
        }
      ]
};

export const localizedEvidenceArtifacts: Localized<readonly (readonly [string, string])[]> = {
  en: evidenceArtifacts,
  zh: [
        [
          "约束登记",
          "记录隐私、合规与部署约束。"
        ],
        [
          "数据集清单",
          "记录来源、转换、排除项与保留策略。"
        ],
        [
          "训练运行记录",
          "记录模型、数据集、适配器、runtime 与参数。"
        ],
        [
          "评估报告",
          "保留行为测试、基准结果、失败案例与限制。"
        ],
        [
          "部署 runbook",
          "说明安装、访问、监控、回滚与所有权。"
        ],
        [
          "变更日志",
          "持续追踪模型、数据、适配器与 runtime 的变化。"
        ]
      ],
  ja: [
        [
          "制約台帳",
          "プライバシー、コンプライアンス、デプロイ制約を記録します。"
        ],
        [
          "データセットマニフェスト",
          "ソース、変換、除外項目、保持方針を文書化します。"
        ],
        [
          "学習実行記録",
          "モデル、データセット、アダプター、runtime、パラメータを記録します。"
        ],
        [
          "評価レポート",
          "挙動テスト、ベンチマーク結果、失敗、制限を保持します。"
        ],
        [
          "デプロイ runbook",
          "インストール、アクセス、監視、ロールバック、所有権を説明します。"
        ],
        [
          "変更ログ",
          "モデル、データ、アダプター、runtime の変化を継続的に追跡します。"
        ]
      ],
  ko: [
        [
          "제약 등록부",
          "프라이버시, 컴플라이언스, 배포 제약을 기록합니다."
        ],
        [
          "데이터셋 매니페스트",
          "소스, 변환, 제외 항목, 보존 정책을 문서화합니다."
        ],
        [
          "학습 실행 기록",
          "모델, 데이터셋, 어댑터, runtime, 파라미터를 기록합니다."
        ],
        [
          "평가 리포트",
          "동작 테스트, 벤치마크 결과, 실패 사례, 제한사항을 보존합니다."
        ],
        [
          "배포 runbook",
          "설치, 접근, 모니터링, 롤백, 소유권을 설명합니다."
        ],
        [
          "변경 로그",
          "시간에 따른 모델, 데이터, 어댑터, runtime 변경을 추적합니다."
        ]
      ]
};

export const localizedTechnicalHeritage: Localized<string[]> = {
  en: technicalHeritage,
  zh: [
        "隐私工程",
        "数据平台",
        "分布式基础设施",
        "密码学系统",
        "本地优先产品设计",
        "AI/ML 系统"
      ],
  ja: [
        "プライバシーエンジニアリング",
        "データプラットフォーム",
        "分散インフラストラクチャ",
        "暗号システム",
        "ローカルファーストのプロダクト設計",
        "AI/ML システム"
      ],
  ko: [
        "프라이버시 엔지니어링",
        "데이터 플랫폼",
        "분산 인프라스트럭처",
        "암호 시스템",
        "로컬 우선 제품 설계",
        "AI/ML 시스템"
      ]
};

export const homeConstraintItems: Localized<{ title: string; description: string }[]> = {
  en: [
    "Customer privacy",
    "Commercial secrets",
    "Patent-sensitive R&D",
    "Regulated workflows",
    "Edge latency",
    "Air-gapped systems"
  ].map((title) => ({ title, description: "Boundary, retention, access, and evaluation requirements must be explicit before model work begins." })),
  zh: [
        {
          "title": "客户隐私",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        },
        {
          "title": "商业机密",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        },
        {
          "title": "专利敏感型研发",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        },
        {
          "title": "受监管工作流",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        },
        {
          "title": "边缘延迟",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        },
        {
          "title": "气隙系统",
          "description": "在模型工作开始之前，边界、留存、访问与评估要求必须被清晰界定。"
        }
      ],
  ja: [
        {
          "title": "顧客プライバシー",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        },
        {
          "title": "商業機密",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        },
        {
          "title": "特許に関わるR&D",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        },
        {
          "title": "規制対象ワークフロー",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        },
        {
          "title": "エッジレイテンシー",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        },
        {
          "title": "エアギャップシステム",
          "description": "モデル作業を始める前に、境界、保持、アクセス、評価の要件を明確に定める必要があります。"
        }
      ],
  ko: [
        {
          "title": "고객 프라이버시",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        },
        {
          "title": "상업 기밀",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        },
        {
          "title": "특허 민감 R&D",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        },
        {
          "title": "규제 대상 워크플로",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        },
        {
          "title": "엣지 지연 시간",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        },
        {
          "title": "에어갭 시스템",
          "description": "모델 작업이 시작되기 전에 경계, 보존, 접근, 평가 요건은 명확히 규정되어야 합니다."
        }
      ]
};

export const homeWorkflowVisualItems: Localized<VisualItem[]> = {
  en: [
    { label: "Data", eyebrow: "Step 01", title: "Private data boundary", description: "Source categories, movement constraints, retention rules, and review expectations are mapped before training begins.", assetId: "services-hero-private-data" },
    { label: "Dataset", eyebrow: "Step 02", title: "Dataset Package", description: "A reviewable package captures transformations, exclusions, splits, and manifest notes for controlled adaptation.", assetId: "services-dataset-package" },
    { label: "Adapter", eyebrow: "Step 03", title: "LoRA Adapter + Evidence", description: "Training configuration, base-model references, run records, and evaluation context travel with the adapter.", assetId: "services-lora-adapter" },
    { label: "Model", eyebrow: "Step 04", title: "Fused Model", description: "When deployment terms require it, delivery includes a packaged model artifact for customer-controlled runtime targets.", assetId: "services-fused-model" },
    { label: "Evaluation", eyebrow: "Step 05", title: "Evaluation Report", description: "Task behavior, limitations, regressions, and next-iteration recommendations are prepared for technical review.", assetId: "services-evaluation-report" },
    { label: "Runbook", eyebrow: "Step 06", title: "Deployment Runbook", description: "Runtime targets, access paths, rollback notes, and operator handoff are made explicit before operation.", assetId: "services-deployment-topology" },
    { label: "Support", eyebrow: "Ops", title: "Support / Iteration", description: "On-site introduction, remote support, and follow-up adaptation can be planned around the customer's boundary.", assetId: "services-support" }
  ],
  zh: [
        {
          "label": "数据",
          "eyebrow": "步骤 01",
          "title": "私有数据边界",
          "description": "在训练开始之前，先梳理来源类别、流转约束、保留规则与审阅预期。",
          "assetId": "services-hero-private-data"
        },
        {
          "label": "数据集",
          "eyebrow": "步骤 02",
          "title": "数据集包",
          "description": "以可审阅的包记录转换、排除、拆分与清单说明，用于受控适配。",
          "assetId": "services-dataset-package"
        },
        {
          "label": "适配器",
          "eyebrow": "步骤 03",
          "title": "LoRA 适配器 + 证据",
          "description": "训练配置、基座模型引用、运行记录与评估上下文，会随适配器一并流转。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "模型",
          "eyebrow": "步骤 04",
          "title": "融合模型",
          "description": "当部署条款要求时，交付内容包括面向客户可控 runtime 目标的打包模型 artifact。",
          "assetId": "services-fused-model"
        },
        {
          "label": "评估",
          "eyebrow": "步骤 05",
          "title": "评估报告",
          "description": "为技术审阅准备任务行为、限制、回归情况与下一轮迭代建议。",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "Runbook",
          "eyebrow": "步骤 06",
          "title": "部署 Runbook",
          "description": "在运行之前，明确 runtime 目标、访问路径、回滚说明与操作员交接。",
          "assetId": "services-deployment-topology"
        },
        {
          "label": "支持",
          "eyebrow": "步骤 07",
          "title": "支持 / 迭代",
          "description": "现场导入、远程支持与后续适配，可围绕客户边界进行规划。",
          "assetId": "services-support"
        }
      ],
  ja: [
        {
          "label": "データ",
          "eyebrow": "ステップ 01",
          "title": "プライベートデータ境界",
          "description": "学習を始める前に、ソースカテゴリ、移動制約、保持ルール、レビュー期待値を整理します。",
          "assetId": "services-hero-private-data"
        },
        {
          "label": "データセット",
          "eyebrow": "ステップ 02",
          "title": "データセットパッケージ",
          "description": "制御された適応のために、変換、除外、分割、マニフェストノートをレビュー可能なパッケージとして記録します。",
          "assetId": "services-dataset-package"
        },
        {
          "label": "アダプター",
          "eyebrow": "ステップ 03",
          "title": "LoRA アダプター + エビデンス",
          "description": "学習設定、ベースモデル参照、実行記録、評価コンテキストは、アダプターとともに受け渡されます。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "モデル",
          "eyebrow": "ステップ 04",
          "title": "融合モデル",
          "description": "デプロイ条件が求める場合、顧客が制御する runtime ターゲット向けのパッケージ化されたモデル artifact を納品に含めます。",
          "assetId": "services-fused-model"
        },
        {
          "label": "評価",
          "eyebrow": "ステップ 05",
          "title": "評価レポート",
          "description": "タスク挙動、制限、回帰、次回イテレーションへの推奨事項を、技術レビューに向けて整えます。",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "Runbook",
          "eyebrow": "ステップ 06",
          "title": "デプロイ Runbook",
          "description": "運用前に、runtime ターゲット、アクセス経路、ロールバックノート、オペレーターへの引き継ぎを明確にします。",
          "assetId": "services-deployment-topology"
        },
        {
          "label": "サポート",
          "eyebrow": "ステップ 07",
          "title": "サポート / イテレーション",
          "description": "オンサイト導入、リモートサポート、継続的な適応は、顧客の境界に沿って計画できます。",
          "assetId": "services-support"
        }
      ],
  ko: [
        {
          "label": "데이터",
          "eyebrow": "단계 01",
          "title": "프라이빗 데이터 경계",
          "description": "학습이 시작되기 전에 소스 카테고리, 이동 제약, 보존 규칙, 검토 기대치를 먼저 매핑합니다.",
          "assetId": "services-hero-private-data"
        },
        {
          "label": "데이터셋",
          "eyebrow": "단계 02",
          "title": "데이터셋 패키지",
          "description": "통제된 적응을 위해 변환, 제외, 분할, 매니페스트 노트를 검토 가능한 패키지로 기록합니다.",
          "assetId": "services-dataset-package"
        },
        {
          "label": "어댑터",
          "eyebrow": "단계 03",
          "title": "LoRA 어댑터 + 증거",
          "description": "학습 구성, 베이스 모델 참조, 실행 기록, 평가 컨텍스트가 어댑터와 함께 이동합니다.",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "모델",
          "eyebrow": "단계 04",
          "title": "융합 모델",
          "description": "배포 조건이 요구하는 경우, 고객이 통제하는 runtime 대상을 위한 패키징된 모델 artifact를 제공 범위에 포함합니다.",
          "assetId": "services-fused-model"
        },
        {
          "label": "평가",
          "eyebrow": "단계 05",
          "title": "평가 리포트",
          "description": "작업 동작, 제한사항, 회귀, 다음 반복을 위한 권고사항을 기술 검토에 맞게 준비합니다.",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "Runbook",
          "eyebrow": "단계 06",
          "title": "배포 Runbook",
          "description": "운영 전에 runtime 대상, 접근 경로, 롤백 노트, 운영자 인계를 명확히 합니다.",
          "assetId": "services-deployment-topology"
        },
        {
          "label": "지원",
          "eyebrow": "단계 07",
          "title": "지원 / 반복",
          "description": "현장 도입, 원격 지원, 후속 적응은 고객의 경계를 중심으로 계획할 수 있습니다.",
          "assetId": "services-support"
        }
      ]
};

export const servicesPageCopy: Localized<{
  hero: PageCopy;
  industries: PageCopy;
  delivery: PageCopy;
  modules: PageCopy;
  deployment: PageCopy;
  taxonomy: string[];
  groupLabels: string[];
  additionalDeliverables: string;
  evidenceLabel: string;
}> = {
  en: {
    hero: {
      eyebrow: "Services",
      title: "Engineering outcomes for private model workflows.",
      description: "We help customers prepare data, adapt models, fuse artifacts, evaluate behavior, deploy systems, and hand off operations inside controlled boundaries."
    },
    industries: {
      eyebrow: "Use cases",
      title: "For professional work where model capability and data control both matter.",
      description: "Research, content, design, engineering, operations, automation, and internal tools are good fits when boundary, quality, deployment, and evidence matter."
    },
    delivery: {
      eyebrow: "Deliverables",
      title: "Clear deliverables, reviewable results.",
      description: "Dataset packages, LoRA adapters, fused models, evaluation reports, deployment runbooks, CLI or local server integration notes, and FDE support."
    },
    modules: {
      eyebrow: "Modules",
      title: "Compose modules around the model workflow.",
      description: "Data cleaning, training sample preparation, LoRA adaptation, model fusion, model loading, evaluation, evidence records, local runtime, private deployment, and runbooks."
    },
    deployment: {
      eyebrow: "Deployment modes",
      title: "Deploy inside the boundary you define.",
      description: "We support Apple Silicon, controlled servers, private cloud, and hybrid architecture, choosing the path by model size, sensitivity, cost, and maintainability."
    },
    taxonomy: ["Dataset Package", "LoRA Adapter", "Fused Model", "Evaluation Report", "Deployment Runbook", "On-site / Remote Support"],
    groupLabels: ["Core model artifacts", "Operating model"],
    additionalDeliverables: "Additional deliverables",
    evidenceLabel: "Evidence"
  },
  zh: {
        "hero": {
          "eyebrow": "服务",
          "title": "面向私有模型工作流的工程化成果。",
          "description": "我们帮助客户在受控边界内完成数据准备、模型适配、artifact 融合、行为评估、系统部署与运营交接。"
        },
        "industries": {
          "eyebrow": "使用场景",
          "title": "适用于既重视模型能力，也重视数据控制的专业工作。",
          "description": "当边界、质量、部署与证据同样重要时，研究、内容、设计、工程、运营、自动化与内部工具都是适合的方向。"
        },
        "delivery": {
          "eyebrow": "交付物",
          "title": "清晰的交付物，可审阅的结果。",
          "description": "数据集包、LoRA 适配器、融合模型、评估报告、部署 runbook、CLI 或本地服务器集成说明，以及 FDE 支持。"
        },
        "modules": {
          "eyebrow": "模块",
          "title": "围绕模型工作流组合模块。",
          "description": "数据清洗、训练样本准备、LoRA 适配、模型融合、模型加载、评估、证据记录、本地 runtime、私有部署与 runbook。"
        },
        "deployment": {
          "eyebrow": "部署模式",
          "title": "部署在你定义的边界之内。",
          "description": "我们支持 Apple Silicon、受控服务器、私有云与混合架构，并根据模型规模、敏感性、成本与可维护性选择路径。"
        },
        "taxonomy": [
          "数据集包",
          "LoRA 适配器",
          "融合模型",
          "评估报告",
          "部署 Runbook",
          "现场 / 远程支持"
        ],
        "groupLabels": [
          "核心模型 artifacts",
          "运行模型"
        ],
        "additionalDeliverables": "其他交付物",
        "evidenceLabel": "证据"
      },
  ja: {
        "hero": {
          "eyebrow": "サービス",
          "title": "プライベートモデルワークフローのためのエンジニアリング成果。",
          "description": "私たちは、制御された境界の内側で、データ準備、モデル適応、artifact の融合、挙動評価、システムデプロイ、運用引き継ぎを支援します。"
        },
        "industries": {
          "eyebrow": "ユースケース",
          "title": "モデル能力とデータ制御の双方が重要なプロフェッショナルワークへ。",
          "description": "境界、品質、デプロイ、エビデンスが重要となる場面では、研究、コンテンツ、デザイン、エンジニアリング、オペレーション、自動化、社内ツールがよく適合します。"
        },
        "delivery": {
          "eyebrow": "納品物",
          "title": "明確な納品物、レビュー可能な結果。",
          "description": "データセットパッケージ、LoRA アダプター、融合モデル、評価レポート、デプロイ runbook、CLI またはローカルサーバー統合ノート、そして FDE サポート。"
        },
        "modules": {
          "eyebrow": "モジュール",
          "title": "モデルワークフローを中心にモジュールを構成する。",
          "description": "データクレンジング、学習サンプル準備、LoRA 適応、モデル融合、モデルロード、評価、エビデンス記録、ローカル runtime、プライベートデプロイ、runbook。"
        },
        "deployment": {
          "eyebrow": "デプロイモード",
          "title": "定義した境界の内側にデプロイする。",
          "description": "Apple Silicon、制御されたサーバー、プライベートクラウド、ハイブリッドアーキテクチャに対応し、モデルサイズ、機密性、コスト、保守性に応じて経路を選びます。"
        },
        "taxonomy": [
          "データセットパッケージ",
          "LoRA アダプター",
          "融合モデル",
          "評価レポート",
          "デプロイ Runbook",
          "オンサイト / リモートサポート"
        ],
        "groupLabels": [
          "中核モデル artifacts",
          "運用モデル"
        ],
        "additionalDeliverables": "追加納品物",
        "evidenceLabel": "エビデンス"
      },
  ko: {
        "hero": {
          "eyebrow": "서비스",
          "title": "프라이빗 모델 워크플로를 위한 엔지니어링 성과.",
          "description": "우리는 고객이 통제된 경계 안에서 데이터 준비, 모델 적응, artifact 융합, 동작 평가, 시스템 배포, 운영 인계를 수행하도록 지원합니다."
        },
        "industries": {
          "eyebrow": "사용 사례",
          "title": "모델 역량과 데이터 제어가 모두 중요한 전문 작업을 위해.",
          "description": "경계, 품질, 배포, 증거가 중요한 경우, 연구, 콘텐츠, 디자인, 엔지니어링, 운영, 자동화, 내부 도구는 좋은 적합성을 가집니다."
        },
        "delivery": {
          "eyebrow": "산출물",
          "title": "명확한 산출물, 검토 가능한 결과.",
          "description": "데이터셋 패키지, LoRA 어댑터, 융합 모델, 평가 리포트, 배포 runbook, CLI 또는 로컬 서버 통합 노트, 그리고 FDE 지원."
        },
        "modules": {
          "eyebrow": "모듈",
          "title": "모델 워크플로를 중심으로 모듈을 구성합니다.",
          "description": "데이터 정제, 학습 샘플 준비, LoRA 적응, 모델 융합, 모델 로딩, 평가, 증거 기록, 로컬 runtime, 프라이빗 배포, runbook."
        },
        "deployment": {
          "eyebrow": "배포 모드",
          "title": "당신이 정의한 경계 안에 배포합니다.",
          "description": "Apple Silicon, 통제된 서버, 프라이빗 클라우드, 하이브리드 아키텍처를 지원하며, 모델 크기, 민감도, 비용, 유지보수성을 기준으로 경로를 선택합니다."
        },
        "taxonomy": [
          "데이터셋 패키지",
          "LoRA 어댑터",
          "융합 모델",
          "평가 리포트",
          "배포 Runbook",
          "현장 / 원격 지원"
        ],
        "groupLabels": [
          "핵심 모델 artifacts",
          "운영 모델"
        ],
        "additionalDeliverables": "추가 산출물",
        "evidenceLabel": "증거"
      }
};

export const securityPageCopy: Localized<{
  hero: PageCopy;
  boundary: PageCopy;
  evidence: PageCopy;
  responsibility: PageCopy;
  primaryCta: string;
  secondaryCta: string;
  contributionTitle: string;
  contributionBody: string;
  customerTitle: string;
  customerBody: string;
}> = {
  en: {
    hero: { eyebrow: "Security", title: "Security is delivery structure, not an add-on.", description: "Random Walk defines data boundaries, access permissions, evaluation evidence, runtime logs, and ownership from the start of each private AI project." },
    boundary: { eyebrow: "Boundary", title: "Where data lives, how models use it, how results move.", description: "Training material, dataset packages, model weights, LoRA adapters, fused models, inference environments, external interfaces, and storage locations all belong in the boundary design." },
    evidence: { eyebrow: "Evidence", title: "The system must leave reviewable evidence.", description: "Data sources, processing steps, training configuration, model fusion, evaluation, deployment versions, call records, and key changes should be traceable." },
    responsibility: { eyebrow: "Responsibility", title: "Every capability needs clear ownership.", description: "We define who provides data, who approves use, who maintains environments, who reviews evaluation, and who makes release decisions. Systems with unclear ownership do not last." },
    primaryCta: "Scope a security review",
    secondaryCta: "View service model",
    contributionTitle: "Random Walk contribution",
    contributionBody: "Architecture, access-path design, deployment runbooks, evaluation evidence, documentation packages, and customer-side review support.",
    customerTitle: "Customer / advisor responsibility",
    customerBody: "Legal basis, policy approval, identity provider policy, user provisioning, internal audit, certification, and regulatory filings."
  },
  zh: {
        "hero": {
          "eyebrow": "安全",
          "title": "安全是交付结构，而非附加项。",
          "description": "Random Walk 从每一个私有 AI 项目的起点开始，定义数据边界、访问权限、评估证据、runtime 日志与所有权。"
        },
        "boundary": {
          "eyebrow": "边界",
          "title": "数据位于何处，模型如何使用它，结果如何流转。",
          "description": "训练材料、数据集包、模型权重、LoRA 适配器、融合模型、推理环境、外部接口与存储位置，都应纳入边界设计。"
        },
        "evidence": {
          "eyebrow": "证据",
          "title": "系统必须留下可审阅的证据。",
          "description": "数据来源、处理步骤、训练配置、模型融合、评估、部署版本、调用记录与关键变更，都应可追溯。"
        },
        "responsibility": {
          "eyebrow": "责任",
          "title": "每一种能力都需要清晰的所有权。",
          "description": "我们定义由谁提供数据、谁批准使用、谁维护环境、谁审阅评估、谁作出发布决策。所有权不清的系统无法持久。"
        },
        "primaryCta": "界定安全审查范围",
        "secondaryCta": "查看服务模型",
        "contributionTitle": "Random Walk 贡献",
        "contributionBody": "架构、访问路径设计、部署 runbook、评估证据、文档包，以及客户侧审阅支持。",
        "customerTitle": "客户 / 顾问责任",
        "customerBody": "法律依据、政策批准、身份提供方策略、用户配置、内部审计、认证与监管申报。"
      },
  ja: {
        "hero": {
          "eyebrow": "セキュリティ",
          "title": "セキュリティは追加機能ではなく、デリバリーの構造です。",
          "description": "Random Walk は、各プライベート AI プロジェクトの開始時点から、データ境界、アクセス権限、評価エビデンス、runtime ログ、所有権を定義します。"
        },
        "boundary": {
          "eyebrow": "境界",
          "title": "データがどこにあり、モデルがどう使い、結果がどう動くか。",
          "description": "学習素材、データセットパッケージ、モデル重み、LoRA アダプター、融合モデル、推論環境、外部インターフェース、保存場所はすべて、境界設計に含まれます。"
        },
        "evidence": {
          "eyebrow": "エビデンス",
          "title": "システムは、レビュー可能なエビデンスを残さなければなりません。",
          "description": "データソース、処理ステップ、学習設定、モデル融合、評価、デプロイバージョン、呼び出し記録、重要な変更は追跡可能であるべきです。"
        },
        "responsibility": {
          "eyebrow": "責任",
          "title": "すべての能力には、明確な所有権が必要です。",
          "description": "誰がデータを提供し、誰が利用を承認し、誰が環境を維持し、誰が評価をレビューし、誰がリリース判断を行うのかを定義します。所有権が曖昧なシステムは長続きしません。"
        },
        "primaryCta": "セキュリティレビューをスコープする",
        "secondaryCta": "サービスモデルを見る",
        "contributionTitle": "Random Walk の貢献",
        "contributionBody": "アーキテクチャ、アクセス経路設計、デプロイ runbook、評価エビデンス、ドキュメントパッケージ、顧客側レビュー支援。",
        "customerTitle": "顧客 / アドバイザーの責任",
        "customerBody": "法的根拠、ポリシー承認、ID プロバイダー方針、ユーザープロビジョニング、内部監査、認証、規制当局への届出。"
      },
  ko: {
        "hero": {
          "eyebrow": "보안",
          "title": "보안은 추가 기능이 아니라 제공 구조입니다.",
          "description": "Random Walk는 각 프라이빗 AI 프로젝트의 시작부터 데이터 경계, 접근 권한, 평가 증거, runtime 로그, 소유권을 정의합니다."
        },
        "boundary": {
          "eyebrow": "경계",
          "title": "데이터가 어디에 있고, 모델이 어떻게 사용하며, 결과가 어떻게 이동하는지.",
          "description": "학습 자료, 데이터셋 패키지, 모델 가중치, LoRA 어댑터, 융합 모델, 추론 환경, 외부 인터페이스, 저장 위치는 모두 경계 설계에 포함됩니다."
        },
        "evidence": {
          "eyebrow": "증거",
          "title": "시스템은 검토 가능한 증거를 남겨야 합니다.",
          "description": "데이터 소스, 처리 단계, 학습 구성, 모델 융합, 평가, 배포 버전, 호출 기록, 주요 변경사항은 추적 가능해야 합니다."
        },
        "responsibility": {
          "eyebrow": "책임",
          "title": "모든 역량에는 명확한 소유권이 필요합니다.",
          "description": "누가 데이터를 제공하고, 누가 사용을 승인하며, 누가 환경을 유지하고, 누가 평가를 검토하며, 누가 릴리스 결정을 내리는지 정의합니다. 소유권이 불분명한 시스템은 오래 지속되지 않습니다."
        },
        "primaryCta": "보안 검토 범위 정하기",
        "secondaryCta": "서비스 모델 보기",
        "contributionTitle": "Random Walk의 기여",
        "contributionBody": "아키텍처, 접근 경로 설계, 배포 runbook, 평가 증거, 문서 패키지, 고객 측 검토 지원.",
        "customerTitle": "고객 / 자문 책임",
        "customerBody": "법적 근거, 정책 승인, ID 제공자 정책, 사용자 프로비저닝, 내부 감사, 인증, 규제 신고."
      }
};

export const companyPageCopy: Localized<{
  hero: PageCopy;
  team: PageCopy;
  philosophy: PageCopy;
  operating: PageCopy;
  stats: { label: string; value: string }[];
  principles: { title: string; description: string }[];
  ctaLabel: string;
}> = {
  en: {
    hero: {
      eyebrow: "About Random Walk",
      title: "Build AI systems that stay under your control.",
      description: "Random Walk is a private AI technology studio. We work with professional teams, independent studios, and companies that need clear data boundaries to deploy systems in their own environments."
    },
    team: {
      eyebrow: "Field Deployment Engineering",
      title: "FDE makes engineering decisions close to the real environment.",
      description: "FDE (Forward Deployed Engineering, on-site engineering collaboration) connects models, data, deployment environments, and user feedback. Projects do not have to be on-site by default; we collaborate on-site when needed and remotely when that is the better path."
    },
    philosophy: {
      eyebrow: "Principles",
      title: "Clear, restrained, verifiable.",
      description: "We prefer clear boundaries, a small number of important capabilities, and engineering results backed by evidence. Every training run, merge, evaluation, and deployment should explain source, method, risk, and responsibility."
    },
    operating: {
      eyebrow: "Delivery",
      title: "Define the work from deliverables.",
      description: "Each project clarifies data scope, model path, runtime environment, acceptance criteria, and maintenance model before moving into adaptation, evaluation, deployment, and support."
    },
    stats: [
      { label: "Audience", value: "Professional teams / studios" },
      { label: "Mode", value: "FDE collaboration" },
      { label: "Output", value: "Private AI systems" }
    ],
    principles: [
      { title: "Start from the boundary", description: "Where data lives, where models run, how results move, and who approves each step." },
      { title: "Keep the capability focused", description: "Build the few model workflows that matter first, then expand only when the evidence supports it." },
      { title: "Leave work that can be owned", description: "Runtime behavior, limitations, evaluation records, and follow-up support stay clear after handoff." }
    ],
    ctaLabel: "Discuss your private AI project"
  },
  zh: {
        "hero": {
          "eyebrow": "关于 Random Walk",
          "title": "构建始终由你掌控的 AI 系统。",
          "description": "Random Walk 是一家私密 AI 技术工作室。我们与专业团队、独立工作室，以及需要清晰数据边界的企业合作，帮助他们在自有环境中部署系统。"
        },
        "team": {
          "eyebrow": "Field Deployment Engineering",
          "title": "FDE 让工程决策贴近真实环境。",
          "description": "FDE（Forward Deployed Engineering，现场工程协作）连接模型、数据、部署环境与用户反馈。项目并不默认需要现场推进；在必要时我们到现场协作，在远程更合适时则以远程方式推进。"
        },
        "philosophy": {
          "eyebrow": "原则",
          "title": "清晰、克制、可验证。",
          "description": "我们重视清晰的边界、少数真正重要的能力，以及由证据支撑的工程成果。每一次训练、合并、评估与部署，都应说明来源、方法、风险与责任。"
        },
        "operating": {
          "eyebrow": "交付",
          "title": "从交付物定义工作。",
          "description": "每个项目都会先明确数据范围、模型路径、运行环境、验收标准与维护模式，再进入适配、评估、部署与支持。"
        },
        "stats": [
          {
            "label": "受众",
            "value": "专业团队 / 工作室"
          },
          {
            "label": "模式",
            "value": "FDE 协作"
          },
          {
            "label": "产出",
            "value": "私密 AI 系统"
          }
        ],
        "principles": [
          {
            "title": "从边界开始",
            "description": "数据位于何处，模型在何处运行，结果如何流转，以及每一步由谁批准。"
          },
          {
            "title": "让能力保持聚焦",
            "description": "先构建少数真正关键的模型工作流；只有当证据支持时，再继续扩展。"
          },
          {
            "title": "留下可被接手的工作",
            "description": "交付之后，运行时行为、限制、评估记录与后续支持依然清楚可循。"
          }
        ],
        "ctaLabel": "讨论你的私密 AI 项目"
      },
  ja: {
        "hero": {
          "eyebrow": "Random Walk について",
          "title": "あなたの管理下にとどまる AI システムを構築する。",
          "description": "Random Walk は、プライベート AI 技術スタジオです。私たちは、プロフェッショナルチーム、独立系スタジオ、そして明確なデータ境界を必要とする企業と連携し、それぞれの自社環境にシステムを展開します。"
        },
        "team": {
          "eyebrow": "Field Deployment Engineering",
          "title": "FDE は、実環境に近い場所でエンジニアリング判断を行う。",
          "description": "FDE（Forward Deployed Engineering、オンサイトでのエンジニアリング協業）は、モデル、データ、デプロイ環境、ユーザーフィードバックをつなぎます。プロジェクトは常にオンサイトである必要はありません。必要なときは現地で協業し、リモートの方が適切な場合はリモートで進めます。"
        },
        "philosophy": {
          "eyebrow": "原則",
          "title": "明確に、抑制的に、検証可能に。",
          "description": "私たちは、明確な境界、少数の重要な能力、そして証拠に裏づけられたエンジニアリング成果を重視します。すべてのトレーニング実行、マージ、評価、デプロイは、出所、方法、リスク、責任を説明できるべきです。"
        },
        "operating": {
          "eyebrow": "デリバリー",
          "title": "成果物から仕事を定義する。",
          "description": "各プロジェクトでは、適応、評価、デプロイ、サポートへ進む前に、データ範囲、モデルパス、ランタイム環境、受け入れ基準、保守モデルを明確にします。"
        },
        "stats": [
          {
            "label": "対象",
            "value": "プロフェッショナルチーム / スタジオ"
          },
          {
            "label": "モード",
            "value": "FDE 協業"
          },
          {
            "label": "成果",
            "value": "プライベート AI システム"
          }
        ],
        "principles": [
          {
            "title": "境界から始める",
            "description": "データがどこに存在し、モデルがどこで動き、結果がどのように移動し、各段階を誰が承認するのか。"
          },
          {
            "title": "能力を絞り込む",
            "description": "まず重要な少数のモデルワークフローを構築し、証拠がそれを支持する場合にのみ拡張します。"
          },
          {
            "title": "所有できる仕事を残す",
            "description": "ハンドオフ後も、ランタイムの挙動、制約、評価記録、フォローアップサポートが明確に残ります。"
          }
        ],
        "ctaLabel": "あなたのプライベート AI プロジェクトを相談する"
      },
  ko: {
        "hero": {
          "eyebrow": "Random Walk 소개",
          "title": "당신의 통제 아래 머무는 AI 시스템을 구축합니다.",
          "description": "Random Walk는 프라이빗 AI 기술 스튜디오입니다. 우리는 전문 팀, 독립 스튜디오, 그리고 명확한 데이터 경계가 필요한 기업과 협력해 각자의 환경 안에서 시스템을 배포합니다."
        },
        "team": {
          "eyebrow": "Field Deployment Engineering",
          "title": "FDE는 실제 환경에 가까운 곳에서 엔지니어링 결정을 내립니다.",
          "description": "FDE(Forward Deployed Engineering, 현장 엔지니어링 협업)는 모델, 데이터, 배포 환경, 사용자 피드백을 연결합니다. 프로젝트가 기본적으로 현장 진행이어야 하는 것은 아닙니다. 필요할 때는 현장에서 협업하고, 원격이 더 나은 경로일 때는 원격으로 협업합니다."
        },
        "philosophy": {
          "eyebrow": "원칙",
          "title": "명확하게, 절제되게, 검증 가능하게.",
          "description": "우리는 명확한 경계, 소수의 중요한 역량, 그리고 증거로 뒷받침되는 엔지니어링 결과를 선호합니다. 모든 학습 실행, 병합, 평가, 배포는 출처, 방법, 위험, 책임을 설명할 수 있어야 합니다."
        },
        "operating": {
          "eyebrow": "딜리버리",
          "title": "산출물에서 작업을 정의합니다.",
          "description": "각 프로젝트는 적응, 평가, 배포, 지원으로 이동하기 전에 데이터 범위, 모델 경로, 런타임 환경, 수용 기준, 유지보수 모델을 명확히 합니다."
        },
        "stats": [
          {
            "label": "대상",
            "value": "전문 팀 / 스튜디오"
          },
          {
            "label": "방식",
            "value": "FDE 협업"
          },
          {
            "label": "산출물",
            "value": "프라이빗 AI 시스템"
          }
        ],
        "principles": [
          {
            "title": "경계에서 시작합니다",
            "description": "데이터가 어디에 있고, 모델이 어디에서 실행되며, 결과가 어떻게 이동하고, 각 단계를 누가 승인하는지부터 봅니다."
          },
          {
            "title": "역량을 집중시킵니다",
            "description": "먼저 중요한 소수의 모델 워크플로를 구축하고, 증거가 뒷받침할 때에만 확장합니다."
          },
          {
            "title": "소유 가능한 작업을 남깁니다",
            "description": "인수인계 이후에도 런타임 동작, 한계, 평가 기록, 후속 지원이 명확하게 남아 있습니다."
          }
        ],
        "ctaLabel": "프라이빗 AI 프로젝트 상담하기"
      }
};

export const companyPhilosophyVisualItems: Localized<VisualItem[]> = {
  en: [
    { label: "Problem", eyebrow: "Principle 01", title: "Start from the real problem", description: "We do not sell a model first. We first understand why the customer needs private AI.", assetId: "home-hero-local-ai-boundary" },
    { label: "Control", eyebrow: "Principle 02", title: "Keep the system under control", description: "Data, models, and runtime environments need to fit the customer's own boundaries.", assetId: "contact-scoping-flow" },
    { label: "Review", eyebrow: "Principle 03", title: "Deliver reviewable results", description: "Training, evaluation, deployment, and limitations should be clear to the customer team.", assetId: "work-case-wall" },
    { label: "Use", eyebrow: "Principle 04", title: "Move the project into real use", description: "Through FDE collaboration, we connect prototype, deployment, and handoff.", assetId: "services-support" }
  ],
  zh: [
        {
          "label": "问题",
          "eyebrow": "原则 01",
          "title": "从真实问题出发",
          "description": "我们不会先销售一个模型。我们先理解客户为何需要 private AI。",
          "assetId": "home-hero-local-ai-boundary"
        },
        {
          "label": "掌控",
          "eyebrow": "原则 02",
          "title": "让系统始终可控",
          "description": "数据、模型与 runtime environments，都需要契合客户自身的边界。",
          "assetId": "contact-scoping-flow"
        },
        {
          "label": "审阅",
          "eyebrow": "原则 03",
          "title": "交付可审阅的结果",
          "description": "Training、evaluation、deployment 与 limitations，都应清晰呈现给客户团队。",
          "assetId": "work-case-wall"
        },
        {
          "label": "使用",
          "eyebrow": "原则 04",
          "title": "让项目进入真实使用",
          "description": "通过 FDE collaboration，我们连接 prototype、deployment 与 handoff。",
          "assetId": "services-support"
        }
      ],
  ja: [
        {
          "label": "課題",
          "eyebrow": "原則 01",
          "title": "実在する課題から始める",
          "description": "私たちは、まずモデルを売ることはしません。顧客がなぜ private AI を必要としているのかを、先に理解します。",
          "assetId": "home-hero-local-ai-boundary"
        },
        {
          "label": "制御",
          "eyebrow": "原則 02",
          "title": "システムを制御下に保つ",
          "description": "データ、モデル、runtime environments は、顧客自身の境界に沿って設計されるべきです。",
          "assetId": "contact-scoping-flow"
        },
        {
          "label": "レビュー",
          "eyebrow": "原則 03",
          "title": "レビュー可能な成果を届ける",
          "description": "Training、evaluation、deployment、そして limitations は、顧客チームに明確であるべきです。",
          "assetId": "work-case-wall"
        },
        {
          "label": "実用",
          "eyebrow": "原則 04",
          "title": "プロジェクトを実際の利用へ進める",
          "description": "FDE collaboration を通じて、prototype、deployment、handoff をつなぎます。",
          "assetId": "services-support"
        }
      ],
  ko: [
        {
          "label": "문제",
          "eyebrow": "원칙 01",
          "title": "실제 문제에서 시작합니다",
          "description": "우리는 먼저 모델을 판매하지 않습니다. 고객이 왜 private AI를 필요로 하는지부터 이해합니다.",
          "assetId": "home-hero-local-ai-boundary"
        },
        {
          "label": "제어",
          "eyebrow": "원칙 02",
          "title": "시스템을 통제 가능한 상태로 유지합니다",
          "description": "데이터, 모델, runtime environments는 고객 고유의 경계에 맞아야 합니다.",
          "assetId": "contact-scoping-flow"
        },
        {
          "label": "검토",
          "eyebrow": "원칙 03",
          "title": "검토 가능한 결과를 제공합니다",
          "description": "Training, evaluation, deployment, limitations는 고객 팀에게 명확해야 합니다.",
          "assetId": "work-case-wall"
        },
        {
          "label": "활용",
          "eyebrow": "원칙 04",
          "title": "프로젝트를 실제 사용으로 옮깁니다",
          "description": "FDE collaboration을 통해 prototype, deployment, handoff를 연결합니다.",
          "assetId": "services-support"
        }
      ]
};

export const contactPageCopy: Localized<{
  hero: PageCopy;
  intake: PageCopy;
  nextEyebrow: string;
  directEmail: string;
  steps: { title: string; description: string }[];
}> = {
  en: {
    hero: { eyebrow: "Contact", title: "Define the project before we decide to work together.", description: "We start with the target model, data scope, deployment environment, evaluation method, boundary requirements, and expected deliverables. Good-fit projects move into a clear scope of work." },
    intake: { eyebrow: "Intake", title: "Bring a concrete model problem.", description: "The strongest inquiry includes data type, target model or model family, LoRA needs, fused-model needs, runtime environment, evaluation metrics, security boundary, and delivery timeline." },
    nextEyebrow: "What happens next",
    directEmail: "Direct email",
    steps: [
      { title: "Define target, data, and boundary", description: "We clarify the model objective, data category, deployment boundary, and review requirements before discussing sensitive material." },
      { title: "Confirm model path and deliverables", description: "We map the runtime, model task, LoRA or fused-model path, evaluation needs, support model, and environment." },
      { title: "Start FDE collaboration", description: "Good-fit projects move into FDE collaboration, training or deployment, then evaluation, runbooks, and engineering handoff." }
    ]
  },
  zh: {
        "hero": {
          "eyebrow": "联系",
          "title": "先定义项目，再决定是否同行。",
          "description": "我们从目标模型、数据范围、部署环境、评估方法、边界要求与预期交付物开始。契合的项目，将进入清晰的工作范围。"
        },
        "intake": {
          "eyebrow": "需求采集",
          "title": "请带来一个具体的模型问题。",
          "description": "最有价值的咨询，会包含数据类型、目标模型或模型家族、LoRA 需求、融合模型需求、运行环境、评估指标、安全边界与交付时间线。"
        },
        "nextEyebrow": "接下来会发生什么",
        "directEmail": "直接邮件",
        "steps": [
          {
            "title": "定义目标、数据与边界",
            "description": "在讨论敏感材料之前，我们会先明确模型目标、数据类别、部署边界与审查要求。"
          },
          {
            "title": "确认模型路径与交付物",
            "description": "我们会映射运行时、模型任务、LoRA 或融合模型路径、评估需求、支持模型与环境。"
          },
          {
            "title": "启动 FDE 协作",
            "description": "契合的项目将进入 FDE 协作、训练或部署，随后进行评估、运行手册编写与工程交接。"
          }
        ]
      },
  ja: {
        "hero": {
          "eyebrow": "お問い合わせ",
          "title": "共に取り組む前に、まずプロジェクトを定義する。",
          "description": "私たちは、対象モデル、データ範囲、デプロイ環境、評価方法、境界要件、想定される成果物から始めます。相性のよいプロジェクトは、明確な作業範囲へと進みます。"
        },
        "intake": {
          "eyebrow": "ご相談内容",
          "title": "具体的なモデル課題をお持ちください。",
          "description": "最も有意義なお問い合わせには、データ種別、対象モデルまたはモデルファミリー、LoRA の要件、融合モデルの要件、実行環境、評価指標、セキュリティ境界、納品タイムラインが含まれます。"
        },
        "nextEyebrow": "次に起こること",
        "directEmail": "直接メール",
        "steps": [
          {
            "title": "対象、データ、境界を定義する",
            "description": "機密性の高い素材について話す前に、モデルの目的、データカテゴリ、デプロイ境界、レビュー要件を明確にします。"
          },
          {
            "title": "モデルの進路と成果物を確認する",
            "description": "ランタイム、モデルタスク、LoRA または融合モデルの進路、評価ニーズ、サポートモデル、環境を整理します。"
          },
          {
            "title": "FDE 協業を開始する",
            "description": "相性のよいプロジェクトは FDE 協業、トレーニングまたはデプロイへ進み、その後、評価、ランブック、エンジニアリング引き継ぎへと進行します。"
          }
        ]
      },
  ko: {
        "hero": {
          "eyebrow": "문의",
          "title": "함께 일하기로 결정하기 전에, 먼저 프로젝트를 정의합니다.",
          "description": "우리는 대상 모델, 데이터 범위, 배포 환경, 평가 방법, 경계 요구사항, 기대 산출물에서 시작합니다. 결이 맞는 프로젝트는 명확한 작업 범위로 이어집니다."
        },
        "intake": {
          "eyebrow": "인테이크",
          "title": "구체적인 모델 문제를 가져오세요.",
          "description": "가장 좋은 문의에는 데이터 유형, 대상 모델 또는 모델 패밀리, LoRA 요구사항, 융합 모델 요구사항, 런타임 환경, 평가 지표, 보안 경계, 납품 일정이 포함됩니다."
        },
        "nextEyebrow": "다음 단계",
        "directEmail": "직접 이메일",
        "steps": [
          {
            "title": "대상, 데이터, 경계 정의",
            "description": "민감한 자료를 논의하기 전에 모델 목표, 데이터 범주, 배포 경계, 검토 요구사항을 명확히 합니다."
          },
          {
            "title": "모델 경로와 산출물 확인",
            "description": "런타임, 모델 작업, LoRA 또는 융합 모델 경로, 평가 요구, 지원 모델, 환경을 매핑합니다."
          },
          {
            "title": "FDE 협업 시작",
            "description": "결이 맞는 프로젝트는 FDE 협업, 트레이닝 또는 배포로 이어지고, 이후 평가, 런북, 엔지니어링 인수인계로 진행됩니다."
          }
        ]
      }
};

export const serviceVisualItems: Localized<VisualItem[]> = {
  en: [
    { label: "Dataset", eyebrow: "Artifact 01", title: "Dataset Package", description: "A versioned package of source categories, transformations, exclusions, splits, and review notes before training begins.", assetId: "services-dataset-package" },
    { label: "Adapter", eyebrow: "Artifact 02", title: "LoRA Adapter + Evidence", description: "A task-specific adapter with training configuration, model references, evaluation context, and activation notes.", assetId: "services-lora-adapter" },
    { label: "Fused model", eyebrow: "Artifact 03", title: "Fused Model", description: "A deployable model artifact for customer-controlled environments when private licensing and deployment terms require it.", assetId: "services-fused-model" },
    { label: "Evaluation", eyebrow: "Artifact 04", title: "Evaluation Report", description: "Task behavior, regressions, limitations, and next-iteration evidence prepared for engineering and security review.", assetId: "services-evaluation-report" }
  ],
  zh: [
        {
          "label": "Dataset",
          "eyebrow": "工件 01",
          "title": "数据集包",
          "description": "一份带版本管理的数据集包，涵盖源类别、转换、排除项、划分与审阅记录，在训练开始前沉静成形。",
          "assetId": "services-dataset-package"
        },
        {
          "label": "Adapter",
          "eyebrow": "工件 02",
          "title": "LoRA Adapter + 证据",
          "description": "面向特定任务的 adapter，包含训练配置、模型引用、评估语境与启用说明。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "Fused model",
          "eyebrow": "工件 03",
          "title": "融合模型",
          "description": "当私有许可与部署条款有所要求时，为客户可控环境准备的可部署模型 artifact。",
          "assetId": "services-fused-model"
        },
        {
          "label": "Evaluation",
          "eyebrow": "工件 04",
          "title": "评估报告",
          "description": "为工程与安全审阅准备的任务行为、回归、限制与下一轮迭代证据。",
          "assetId": "services-evaluation-report"
        }
      ],
  ja: [
        {
          "label": "Dataset",
          "eyebrow": "成果物 01",
          "title": "データセットパッケージ",
          "description": "学習が始まる前に整えられる、ソースカテゴリ、変換、除外項目、分割、レビュー記録を含むバージョン管理されたパッケージ。",
          "assetId": "services-dataset-package"
        },
        {
          "label": "Adapter",
          "eyebrow": "成果物 02",
          "title": "LoRA Adapter + エビデンス",
          "description": "タスク専用の adapter。学習設定、モデル参照、評価コンテキスト、アクティベーションノートを備えています。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "Fused model",
          "eyebrow": "成果物 03",
          "title": "融合モデル",
          "description": "プライベートライセンスとデプロイ条件が求める場合に、顧客管理環境へ配備できるモデル artifact。",
          "assetId": "services-fused-model"
        },
        {
          "label": "Evaluation",
          "eyebrow": "成果物 04",
          "title": "評価レポート",
          "description": "エンジニアリングとセキュリティレビューのために用意される、タスク挙動、回帰、制約、次回イテレーションへのエビデンス。",
          "assetId": "services-evaluation-report"
        }
      ],
  ko: [
        {
          "label": "Dataset",
          "eyebrow": "산출물 01",
          "title": "데이터셋 패키지",
          "description": "학습이 시작되기 전, 소스 카테고리, 변환, 제외 항목, 분할, 리뷰 노트를 정리한 버전 관리 패키지입니다.",
          "assetId": "services-dataset-package"
        },
        {
          "label": "Adapter",
          "eyebrow": "산출물 02",
          "title": "LoRA Adapter + 근거",
          "description": "특정 작업에 맞춘 adapter로, 학습 구성, 모델 참조, 평가 맥락, 활성화 노트를 함께 담고 있습니다.",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "Fused model",
          "eyebrow": "산출물 03",
          "title": "융합 모델",
          "description": "프라이빗 라이선스와 배포 조건이 요구될 때, 고객이 통제하는 환경에 배포할 수 있는 모델 artifact입니다.",
          "assetId": "services-fused-model"
        },
        {
          "label": "Evaluation",
          "eyebrow": "산출물 04",
          "title": "평가 보고서",
          "description": "엔지니어링 및 보안 리뷰를 위해 정리된 작업 동작, 회귀, 한계, 다음 이터레이션의 근거입니다.",
          "assetId": "services-evaluation-report"
        }
      ]
};

export const melixPageCopy: Localized<{
  hero: PageCopy;
  workflow: PageCopy;
  enterprise: PageCopy;
  repositoryEyebrow: string;
  repositoryDescription: string;
  repositoryStats: { stars: string; forks: string; lastUpdated: string };
  evidence: PageCopy;
  taxonomy: string[];
  sceneState: string;
}> = {
  en: {
    hero: { eyebrow: "Melix", title: "Local AI runtime and model workbench for Apple Silicon.", description: "Melix supports local model workflows on Apple Silicon: model loading, LoRA adaptation, evaluation, CLI calls, local server runs, and evidence records." },
    workflow: { eyebrow: "Workflow", title: "From model loading to evaluation evidence.", description: "Melix focuses on the foundations of local model operation: load a model, attach LoRA, run local inference, evaluate behavior, generate evidence, and connect through CLI or local server." },
    enterprise: { eyebrow: "Controlled use", title: "Built for local model operation inside controlled environments.", description: "Melix is for model experiments and operations that need to preserve local control. It keeps model workflows on the device and inside the boundary instead of handing them to an external platform." },
    repositoryEyebrow: "Repository metadata",
    repositoryDescription: "Local AI Toolkit: a native macOS application for local LLM chat, fine-tuning, and tool use.",
    repositoryStats: { stars: "Stars", forks: "Forks", lastUpdated: "Last updated" },
    evidence: { eyebrow: "Evidence", title: "Local AI needs evidence, not just output.", description: "" },
    taxonomy: ["Apple Silicon", "LoRA fine-tuning", "Local model serving", "Benchmarking", "Evaluation", "Native macOS UI", "CLI workflows"],
    sceneState: "Inspectable local model operation state."
  },
  zh: {
        "hero": {
          "eyebrow": "Melix",
          "title": "面向 Apple Silicon 的本地 AI 运行时与模型工作台。",
          "description": "Melix 支持 Apple Silicon 上的本地模型工作流：模型加载、LoRA 适配、评估、CLI 调用、本地服务器运行，以及证据记录。"
        },
        "workflow": {
          "eyebrow": "Workflow",
          "title": "从模型加载，到评估证据。",
          "description": "Melix 专注于本地模型运行的基础：加载模型、挂载 LoRA、执行本地推理、评估行为、生成证据，并通过 CLI 或本地服务器连接。"
        },
        "enterprise": {
          "eyebrow": "受控使用",
          "title": "为受控环境内的本地模型运行而构建。",
          "description": "Melix 面向需要保留本地控制的模型实验与运行。它将模型工作流留在设备上、边界内，而不是交给外部平台。"
        },
        "repositoryEyebrow": "仓库元数据",
        "repositoryDescription": "Local AI Toolkit：一款原生 macOS 应用，用于本地 LLM 聊天、微调与工具使用。",
        "repositoryStats": {
          "stars": "Stars",
          "forks": "Forks",
          "lastUpdated": "最后更新"
        },
        "evidence": {
          "eyebrow": "证据",
          "title": "本地 AI 需要证据，而不只是输出。",
          "description": ""
        },
        "taxonomy": [
          "Apple Silicon",
          "LoRA fine-tuning",
          "Local model serving",
          "Benchmarking",
          "Evaluation",
          "Native macOS UI",
          "CLI workflows"
        ],
        "sceneState": "可检视的本地模型运行状态。"
      },
  ja: {
        "hero": {
          "eyebrow": "Melix",
          "title": "Apple Silicon のためのローカル AI ランタイムとモデルワークベンチ。",
          "description": "Melix は Apple Silicon 上のローカルモデルワークフローを支えます：モデル読み込み、LoRA 適応、評価、CLI 呼び出し、ローカルサーバー実行、そして証拠記録。"
        },
        "workflow": {
          "eyebrow": "Workflow",
          "title": "モデル読み込みから、評価の証拠まで。",
          "description": "Melix はローカルモデル運用の基礎に焦点を当てています：モデルを読み込み、LoRA を接続し、ローカル推論を実行し、挙動を評価し、証拠を生成し、CLI またはローカルサーバーを通じて接続します。"
        },
        "enterprise": {
          "eyebrow": "制御された利用",
          "title": "制御された環境内でのローカルモデル運用のために構築。",
          "description": "Melix は、ローカルな制御を保つ必要があるモデル実験と運用のためのものです。モデルワークフローを外部プラットフォームへ渡すのではなく、デバイス上、そして境界の内側に留めます。"
        },
        "repositoryEyebrow": "リポジトリメタデータ",
        "repositoryDescription": "Local AI Toolkit：ローカル LLM チャット、fine-tuning、ツール利用のためのネイティブ macOS アプリケーション。",
        "repositoryStats": {
          "stars": "Stars",
          "forks": "Forks",
          "lastUpdated": "最終更新"
        },
        "evidence": {
          "eyebrow": "証拠",
          "title": "ローカル AI に必要なのは、出力だけではなく証拠です。",
          "description": ""
        },
        "taxonomy": [
          "Apple Silicon",
          "LoRA fine-tuning",
          "Local model serving",
          "Benchmarking",
          "Evaluation",
          "Native macOS UI",
          "CLI workflows"
        ],
        "sceneState": "検査可能なローカルモデル運用状態。"
      },
  ko: {
        "hero": {
          "eyebrow": "Melix",
          "title": "Apple Silicon을 위한 로컬 AI 런타임과 모델 워크벤치.",
          "description": "Melix는 Apple Silicon에서 로컬 모델 워크플로를 지원합니다: 모델 로딩, LoRA 적용, 평가, CLI 호출, 로컬 서버 실행, 그리고 증거 기록."
        },
        "workflow": {
          "eyebrow": "Workflow",
          "title": "모델 로딩에서 평가 증거까지.",
          "description": "Melix는 로컬 모델 운용의 기반에 집중합니다: 모델을 로드하고, LoRA를 연결하며, 로컬 추론을 실행하고, 동작을 평가하고, 증거를 생성하며, CLI 또는 로컬 서버를 통해 연결합니다."
        },
        "enterprise": {
          "eyebrow": "통제된 사용",
          "title": "통제된 환경 안에서의 로컬 모델 운용을 위해 구축되었습니다.",
          "description": "Melix는 로컬 통제를 유지해야 하는 모델 실험과 운용을 위한 도구입니다. 모델 워크플로를 외부 플랫폼에 넘기지 않고, 디바이스 위와 경계 안에 머물게 합니다."
        },
        "repositoryEyebrow": "리포지토리 메타데이터",
        "repositoryDescription": "Local AI Toolkit: 로컬 LLM 채팅, fine-tuning, 도구 사용을 위한 네이티브 macOS 애플리케이션.",
        "repositoryStats": {
          "stars": "Stars",
          "forks": "Forks",
          "lastUpdated": "마지막 업데이트"
        },
        "evidence": {
          "eyebrow": "증거",
          "title": "로컬 AI에는 출력만이 아니라 증거가 필요합니다.",
          "description": ""
        },
        "taxonomy": [
          "Apple Silicon",
          "LoRA fine-tuning",
          "Local model serving",
          "Benchmarking",
          "Evaluation",
          "Native macOS UI",
          "CLI workflows"
        ],
        "sceneState": "검사 가능한 로컬 모델 운용 상태."
      }
};

export const melixSceneItems: Localized<VisualItem[]> = {
  en: [
    { label: "Registry", eyebrow: "Melix scene", title: "Model Registry", description: "Track local models, references, and operating state before a model is served or adapted.", assetId: "melix-scene-composite" },
    { label: "Server", eyebrow: "Melix scene", title: "Local Server", description: "Run model services close to the developer and the data boundary instead of relying on a remote API.", assetId: "services-deployment-runbook" },
    { label: "Training", eyebrow: "Melix scene", title: "LoRA Training", description: "Adapt a local model with a controlled dataset package and preserve the training run context.", assetId: "services-lora-adapter" },
    { label: "Benchmark", eyebrow: "Melix scene", title: "Benchmark Matrix", description: "Compare behavior and performance before deciding which model artifact should move forward.", assetId: "services-evaluation-report" },
    { label: "Evidence", eyebrow: "Melix scene", title: "Evaluation Evidence", description: "Keep task results, limitations, and review artifacts near the model workflow.", assetId: "security-evidence-dashboard" }
  ],
  zh: [
        {
          "label": "注册表",
          "eyebrow": "Melix 场景",
          "title": "模型注册表",
          "description": "在模型被服务化或适配之前，追踪本地模型、引用与运行状态。",
          "assetId": "melix-scene-composite"
        },
        {
          "label": "服务器",
          "eyebrow": "Melix 场景",
          "title": "本地服务器",
          "description": "让模型服务贴近开发者与数据边界运行，而非依赖远程 API。",
          "assetId": "services-deployment-runbook"
        },
        {
          "label": "训练",
          "eyebrow": "Melix 场景",
          "title": "LoRA 训练",
          "description": "以受控的数据集包适配本地模型，并保留训练运行的上下文。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "基准测试",
          "eyebrow": "Melix 场景",
          "title": "基准矩阵",
          "description": "在决定哪个模型工件应进入下一阶段之前，比较其行为与性能。",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "证据",
          "eyebrow": "Melix 场景",
          "title": "评估证据",
          "description": "将任务结果、限制与评审工件保留在模型工作流近旁。",
          "assetId": "security-evidence-dashboard"
        }
      ],
  ja: [
        {
          "label": "レジストリ",
          "eyebrow": "Melix シーン",
          "title": "モデルレジストリ",
          "description": "モデルをサーブまたは適応する前に、ローカルモデル、参照、稼働状態を追跡します。",
          "assetId": "melix-scene-composite"
        },
        {
          "label": "サーバー",
          "eyebrow": "Melix シーン",
          "title": "ローカルサーバー",
          "description": "リモート API に頼るのではなく、開発者とデータ境界の近くでモデルサービスを動かします。",
          "assetId": "services-deployment-runbook"
        },
        {
          "label": "トレーニング",
          "eyebrow": "Melix シーン",
          "title": "LoRA トレーニング",
          "description": "管理されたデータセットパッケージでローカルモデルを適応し、トレーニング実行の文脈を保ちます。",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "ベンチマーク",
          "eyebrow": "Melix シーン",
          "title": "ベンチマークマトリクス",
          "description": "どのモデルアーティファクトを次へ進めるべきかを決める前に、挙動と性能を比較します。",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "エビデンス",
          "eyebrow": "Melix シーン",
          "title": "評価エビデンス",
          "description": "タスク結果、制約、レビューアーティファクトをモデルワークフローのそばに保ちます。",
          "assetId": "security-evidence-dashboard"
        }
      ],
  ko: [
        {
          "label": "레지스트리",
          "eyebrow": "Melix 장면",
          "title": "모델 레지스트리",
          "description": "모델을 서빙하거나 적응하기 전에 로컬 모델, 참조, 운영 상태를 추적합니다.",
          "assetId": "melix-scene-composite"
        },
        {
          "label": "서버",
          "eyebrow": "Melix 장면",
          "title": "로컬 서버",
          "description": "원격 API에 기대는 대신, 개발자와 데이터 경계 가까이에서 모델 서비스를 실행합니다.",
          "assetId": "services-deployment-runbook"
        },
        {
          "label": "트레이닝",
          "eyebrow": "Melix 장면",
          "title": "LoRA 트레이닝",
          "description": "통제된 데이터셋 패키지로 로컬 모델을 적응시키고, 트레이닝 실행의 맥락을 보존합니다.",
          "assetId": "services-lora-adapter"
        },
        {
          "label": "벤치마크",
          "eyebrow": "Melix 장면",
          "title": "벤치마크 매트릭스",
          "description": "어떤 모델 아티팩트를 다음 단계로 보낼지 결정하기 전에, 동작과 성능을 비교합니다.",
          "assetId": "services-evaluation-report"
        },
        {
          "label": "근거",
          "eyebrow": "Melix 장면",
          "title": "평가 근거",
          "description": "작업 결과, 한계, 리뷰 아티팩트를 모델 워크플로 가까이에 보관합니다.",
          "assetId": "security-evidence-dashboard"
        }
      ]
};

export const workStatusLabels: Localized<Record<string, string>> = {
  en: {
    placeholder: "example pattern · public material pending approval",
    public: "public",
    anonymized: "anonymized"
  },
  zh: {
        "placeholder": "示例模式 · 公开材料待审批",
        "public": "公开",
        "anonymized": "已匿名化"
      },
  ja: {
        "placeholder": "サンプルパターン · 公開資料は承認待ち",
        "public": "公開",
        "anonymized": "匿名化済み"
      },
  ko: {
        "placeholder": "예시 패턴 · 공개 자료 승인 대기 중",
        "public": "공개",
        "anonymized": "익명화됨"
      }
};

export const workPageCopy: Localized<{
  hero: PageCopy;
  featured: PageCopy;
  melixFeature: PageCopy;
  sayitFeature: PageCopy;
  examples: PageCopy;
  heritage: PageCopy;
  deliverablesLabel: string;
  detailLabels: { status: string; deployment: string; disclosure: string; disclosureBody: string };
}> = {
  en: {
    hero: { eyebrow: "Work", title: "Private AI projects with boundaries and evidence.", description: "Random Walk is a fit for model engineering work that starts from real constraints: sensitive data, a clear model path, controlled deployment, evaluation needs, and workflows that should not simply be handed to a general platform." },
    featured: { eyebrow: "Featured work", title: "", description: "" },
    melixFeature: { eyebrow: "Open-source reference", title: "Melix: local model operations for Apple Silicon.", description: "Melix shows how local model work can be registered, served, adapted, evaluated, and reviewed on Apple Silicon." },
    sayitFeature: { eyebrow: "Case study", title: "SayIt: local speech input without cloud transcription.", description: "SayIt demonstrates how local speech input can become a private product workflow without relying on cloud transcription." },
    examples: { eyebrow: "Examples", title: "Example patterns, not customer disclosures.", description: "We do not publish undisclosed customer material, data samples, or internal results. Discussable patterns include private dataset packaging, LoRA adaptation, model fusion, evaluation reports, local runtimes, private deployment runbooks, and FDE support." },
    heritage: { eyebrow: "Technical heritage", title: "A systems background, now focused on private AI.", description: "" },
    deliverablesLabel: "Deliverables",
    detailLabels: { status: "STATUS", deployment: "DEPLOYMENT", disclosure: "DISCLOSURE", disclosureBody: "No customer name, metric, logo, or internal material shown." }
  },
  zh: {
        "hero": {
          "eyebrow": "作品",
          "title": "有边界、有证据的私有 AI 项目。",
          "description": "当模型工程从真实约束出发，例如敏感数据、清晰的模型路径、受控部署、评估需求，以及不应被简单交给通用平台的工作流，Random Walk 正是合适的选择。"
        },
        "featured": {
          "eyebrow": "精选作品",
          "title": "",
          "description": ""
        },
        "melixFeature": {
          "eyebrow": "开源参考",
          "title": "Melix：面向 Apple Silicon 的本地模型运营。",
          "description": "Melix 展示了在 Apple Silicon 上，如何对本地模型工作进行注册、服务、适配、评估与审阅。"
        },
        "sayitFeature": {
          "eyebrow": "案例研究",
          "title": "SayIt：无需云端转录的本地语音输入。",
          "description": "SayIt 展示了本地语音输入如何在不依赖云端转录的情况下，成为一套私有产品工作流。"
        },
        "examples": {
          "eyebrow": "示例",
          "title": "示例模式，而非客户披露。",
          "description": "我们不会发布未披露的客户资料、数据样本或内部结果。可讨论的模式包括私有数据集打包、LoRA 适配、模型融合、评估报告、本地运行时、私有部署 runbooks，以及 FDE 支持。"
        },
        "heritage": {
          "eyebrow": "技术根基",
          "title": "源自系统工程背景，如今专注于私有 AI。",
          "description": ""
        },
        "deliverablesLabel": "交付物",
        "detailLabels": {
          "status": "状态",
          "deployment": "部署",
          "disclosure": "披露",
          "disclosureBody": "不展示客户名称、指标、标志或内部资料。"
        }
      },
  ja: {
        "hero": {
          "eyebrow": "実績",
          "title": "境界と根拠を備えたプライベート AI プロジェクト。",
          "description": "Random Walk が適しているのは、現実の制約から始まるモデルエンジニアリングです。機密データ、明確なモデルパス、管理されたデプロイ、評価の必要性、そして汎用プラットフォームへそのまま渡すべきではないワークフローがある場合です。"
        },
        "featured": {
          "eyebrow": "注目の実績",
          "title": "",
          "description": ""
        },
        "melixFeature": {
          "eyebrow": "オープンソース・リファレンス",
          "title": "Melix：Apple Silicon のためのローカルモデル運用。",
          "description": "Melix は、Apple Silicon 上でローカルモデルの作業を登録し、提供し、適応させ、評価し、レビューする方法を示します。"
        },
        "sayitFeature": {
          "eyebrow": "ケーススタディ",
          "title": "SayIt：クラウド転写に頼らないローカル音声入力。",
          "description": "SayIt は、クラウド転写に依存せず、ローカル音声入力をプライベートなプロダクトワークフローへ昇華できることを示します。"
        },
        "examples": {
          "eyebrow": "例",
          "title": "顧客情報の開示ではなく、パターンの例。",
          "description": "私たちは、未開示の顧客資料、データサンプル、内部結果を公開しません。議論可能なパターンには、プライベートデータセットのパッケージング、LoRA 適応、モデル融合、評価レポート、ローカルランタイム、プライベートデプロイ runbooks、FDE サポートが含まれます。"
        },
        "heritage": {
          "eyebrow": "技術的系譜",
          "title": "システムのバックグラウンドから、いまはプライベート AI へ。",
          "description": ""
        },
        "deliverablesLabel": "成果物",
        "detailLabels": {
          "status": "状態",
          "deployment": "デプロイ",
          "disclosure": "開示",
          "disclosureBody": "顧客名、指標、ロゴ、内部資料は表示しません。"
        }
      },
  ko: {
        "hero": {
          "eyebrow": "작업",
          "title": "경계와 근거를 갖춘 Private AI 프로젝트.",
          "description": "Random Walk는 실제 제약에서 출발하는 모델 엔지니어링에 적합합니다. 민감한 데이터, 명확한 모델 경로, 통제된 배포, 평가 요구, 그리고 범용 플랫폼에 그대로 넘겨서는 안 되는 워크플로가 있을 때입니다."
        },
        "featured": {
          "eyebrow": "주요 작업",
          "title": "",
          "description": ""
        },
        "melixFeature": {
          "eyebrow": "오픈소스 레퍼런스",
          "title": "Melix: Apple Silicon을 위한 로컬 모델 운영.",
          "description": "Melix는 Apple Silicon에서 로컬 모델 작업을 등록하고, 서빙하고, 적응시키고, 평가하고, 리뷰하는 방식을 보여줍니다."
        },
        "sayitFeature": {
          "eyebrow": "케이스 스터디",
          "title": "SayIt: 클라우드 전사 없이 이루어지는 로컬 음성 입력.",
          "description": "SayIt는 클라우드 전사에 의존하지 않고도 로컬 음성 입력이 Private 제품 워크플로가 될 수 있음을 보여줍니다."
        },
        "examples": {
          "eyebrow": "예시",
          "title": "고객 공개가 아닌, 예시 패턴.",
          "description": "우리는 공개되지 않은 고객 자료, 데이터 샘플, 내부 결과를 게시하지 않습니다. 논의 가능한 패턴에는 Private 데이터셋 패키징, LoRA 적응, 모델 융합, 평가 보고서, 로컬 런타임, Private 배포 runbooks, FDE 지원이 포함됩니다."
        },
        "heritage": {
          "eyebrow": "기술적 기반",
          "title": "시스템 배경에서 출발해, 이제 Private AI에 집중합니다.",
          "description": ""
        },
        "deliverablesLabel": "결과물",
        "detailLabels": {
          "status": "상태",
          "deployment": "배포",
          "disclosure": "공개 범위",
          "disclosureBody": "고객명, 지표, 로고 또는 내부 자료는 표시하지 않습니다."
        }
      }
};

export const notesPageCopy: Localized<{
  hero: PageCopy;
  readingCues: Array<{ label: string; description: string }>;
  current: PageCopy;
  topicsEyebrow: string;
  topicsDescription: string;
  topics: string[];
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    notes: { label: string; body: string };
    articles: { label: string; body: string };
  };
  publication: PageCopy;
  moreNotes: string;
  visuals: {
    hero: VisualAssetId;
    publication: VisualAssetId;
  };
  detailLabels: { type: string; topic: string; boundary: string; technicalNote: string; customerBoundary: string };
}> = {
  en: {
    hero: { eyebrow: "Notes", title: "Technical notes from private AI systems work.", description: "Short approved notes on deployment boundaries, local model workflows, LoRA review, evaluation evidence, and systems that can be operated, reviewed, and maintained." },
    readingCues: [
      { label: "Boundary note", description: "Scope, deployment, access, and operating limits before model work." },
      { label: "Evaluation note", description: "Checks, examples, comparison criteria, and known limits." },
      { label: "Local workflow note", description: "Runtime, operator path, and local model operation observations." },
      { label: "Adapter review note", description: "LoRA and adaptation readiness before customer-facing deployment." },
      { label: "Approved public note", description: "Published only when private details are removed or abstracted." }
    ],
    current: { eyebrow: "Current notes", title: "A small public ledger of approved technical notes.", description: "The list is intentionally selective. Notes are published when the material can be useful without exposing private project detail." },
    topicsEyebrow: "Topic index",
    topicsDescription: "The current notes cluster around a few recurring implementation concerns.",
    topics: ["Evaluation evidence", "Deployment boundaries", "Local model workflows", "Adapter review"],
    comparison: {
      eyebrow: "Format",
      title: "Notes and Articles serve different roles.",
      description: "Both are public and approved. They differ by scope, not by care.",
      notes: { label: "Notes", body: "Short technical observations, checks, and implementation remarks. Notes stay narrow, practical, and close to the engineering decision." },
      articles: { label: "Articles", body: "Longer public explanations with fuller context, clearer thesis, and a stronger publication boundary." }
    },
    publication: { eyebrow: "Publication boundary", title: "Private material stays private.", description: "Notes do not publish private customer configurations, internal deployment paths, unapproved datasets, private run records, or operational secrets. Examples are abstracted before publication." },
    moreNotes: "More public notes are published as reviewable material is approved.",
    visuals: { hero: "work-case-wall", publication: "contact-first-review-tray" },
    detailLabels: { type: "TYPE", topic: "TOPIC", boundary: "BOUNDARY", technicalNote: "Technical note", customerBoundary: "Customer-controlled environment" }
  },
  zh: {
        "hero": {
          "eyebrow": "笔记",
          "title": "来自私有 AI 系统工作的技术笔记。",
          "description": "经批准的简短笔记，涵盖部署边界、本地模型工作流、LoRA 审阅、评估证据，以及可运行、可审查、可维护的系统。"
        },
        "readingCues": [
          {
            "label": "边界笔记",
            "description": "在模型工作开始前，明确范围、部署、访问与运行限制。"
          },
          {
            "label": "评估笔记",
            "description": "检查项、示例、比较标准与已知限制。"
          },
          {
            "label": "本地工作流笔记",
            "description": "关于运行时、操作者路径与本地模型运行的观察。"
          },
          {
            "label": "适配器审阅笔记",
            "description": "面向客户部署前，对 LoRA 与适配准备度进行审阅。"
          },
          {
            "label": "已批准的公开笔记",
            "description": "仅在私有细节被移除或抽象化后发布。"
          }
        ],
        "current": {
          "eyebrow": "当前笔记",
          "title": "一份小型公开账册，记录经批准的技术笔记。",
          "description": "此列表有意保持精选。只有当材料在不暴露私有项目细节的前提下仍具价值时，才会发布。"
        },
        "topicsEyebrow": "主题索引",
        "topicsDescription": "当前笔记围绕几个反复出现的实现议题展开。",
        "topics": [
          "评估证据",
          "部署边界",
          "本地模型工作流",
          "适配器审阅"
        ],
        "comparison": {
          "eyebrow": "格式",
          "title": "笔记与文章承担不同角色。",
          "description": "二者皆为公开且经批准的内容。差异在于范围，而非用心程度。",
          "notes": {
            "label": "笔记",
            "body": "简短的技术观察、检查项与实现备注。笔记保持聚焦、实用，并贴近工程决策。"
          },
          "articles": {
            "label": "文章",
            "body": "篇幅更长的公开说明，具备更完整的上下文、更清晰的论点，以及更明确的发布边界。"
          }
        },
        "publication": {
          "eyebrow": "发布边界",
          "title": "私有材料保持私有。",
          "description": "笔记不会发布私有客户配置、内部部署路径、未经批准的数据集、私有运行记录或运营秘密。示例会在发布前进行抽象化处理。"
        },
        "moreNotes": "更多公开笔记将在可审阅材料获批后陆续发布。",
        "visuals": {
          "hero": "work-case-wall",
          "publication": "contact-first-review-tray"
        },
        "detailLabels": {
          "type": "类型",
          "topic": "主题",
          "boundary": "边界",
          "technicalNote": "技术笔记",
          "customerBoundary": "客户控制环境"
        }
      },
  ja: {
        "hero": {
          "eyebrow": "ノート",
          "title": "プライベート AI システムの実務から生まれた技術ノート。",
          "description": "デプロイメント境界、ローカルモデルのワークフロー、LoRA レビュー、評価エビデンス、そして運用・レビュー・保守が可能なシステムについての、承認済みの短いノート。"
        },
        "readingCues": [
          {
            "label": "境界ノート",
            "description": "モデル作業に入る前の、スコープ、デプロイメント、アクセス、運用上の制限。"
          },
          {
            "label": "評価ノート",
            "description": "チェック項目、例、比較基準、既知の制約。"
          },
          {
            "label": "ローカルワークフローノート",
            "description": "ランタイム、オペレーターの導線、ローカルモデル運用に関する観察。"
          },
          {
            "label": "アダプターレビューノート",
            "description": "顧客向けデプロイメント前の、LoRA と適応準備状況のレビュー。"
          },
          {
            "label": "承認済み公開ノート",
            "description": "プライベートな詳細を削除または抽象化した場合にのみ公開。"
          }
        ],
        "current": {
          "eyebrow": "現在のノート",
          "title": "承認済み技術ノートの、小さな公開台帳。",
          "description": "このリストは意図的に厳選されています。プライベートなプロジェクト詳細を明かさずに有用性を保てる素材だけを公開します。"
        },
        "topicsEyebrow": "トピック索引",
        "topicsDescription": "現在のノートは、繰り返し現れるいくつかの実装上の関心に集まっています。",
        "topics": [
          "評価エビデンス",
          "デプロイメント境界",
          "ローカルモデルのワークフロー",
          "アダプターレビュー"
        ],
        "comparison": {
          "eyebrow": "形式",
          "title": "ノートと記事は異なる役割を持ちます。",
          "description": "どちらも公開され、承認済みです。違いは扱う範囲であり、配慮の差ではありません。",
          "notes": {
            "label": "ノート",
            "body": "短い技術的観察、チェック項目、実装上の所見。ノートは狭く、実用的で、エンジニアリング判断に近い場所に留まります。"
          },
          "articles": {
            "label": "記事",
            "body": "より長い公開向けの説明。より十分な文脈、明確な主張、そして強い公開境界を備えています。"
          }
        },
        "publication": {
          "eyebrow": "公開境界",
          "title": "プライベートな素材は、プライベートなままに。",
          "description": "ノートでは、顧客固有のプライベートな設定、内部デプロイメント経路、未承認データセット、非公開の実行記録、運用上の秘密を公開しません。例は公開前に抽象化されます。"
        },
        "moreNotes": "レビュー可能な素材が承認され次第、さらに公開ノートを掲載します。",
        "visuals": {
          "hero": "work-case-wall",
          "publication": "contact-first-review-tray"
        },
        "detailLabels": {
          "type": "種別",
          "topic": "トピック",
          "boundary": "境界",
          "technicalNote": "技術ノート",
          "customerBoundary": "顧客管理環境"
        }
      },
  ko: {
        "hero": {
          "eyebrow": "노트",
          "title": "프라이빗 AI 시스템 작업에서 나온 기술 노트.",
          "description": "배포 경계, 로컬 모델 워크플로, LoRA 리뷰, 평가 증거, 그리고 운영·검토·유지보수가 가능한 시스템에 관한 승인된 짧은 노트입니다."
        },
        "readingCues": [
          {
            "label": "경계 노트",
            "description": "모델 작업 전에 범위, 배포, 접근, 운영 한계를 정리합니다."
          },
          {
            "label": "평가 노트",
            "description": "점검 항목, 예시, 비교 기준, 알려진 한계."
          },
          {
            "label": "로컬 워크플로 노트",
            "description": "런타임, 운영자 경로, 로컬 모델 운영에 관한 관찰."
          },
          {
            "label": "어댑터 리뷰 노트",
            "description": "고객 대상 배포 전에 LoRA 및 적응 준비 상태를 검토합니다."
          },
          {
            "label": "승인된 공개 노트",
            "description": "프라이빗 세부 사항을 제거하거나 추상화한 경우에만 공개됩니다."
          }
        ],
        "current": {
          "eyebrow": "현재 노트",
          "title": "승인된 기술 노트를 위한 작은 공개 원장.",
          "description": "이 목록은 의도적으로 선별되어 있습니다. 프라이빗 프로젝트 세부 사항을 드러내지 않으면서도 유용한 자료만 공개합니다."
        },
        "topicsEyebrow": "주제 색인",
        "topicsDescription": "현재 노트는 반복적으로 등장하는 몇 가지 구현상의 관심사를 중심으로 모여 있습니다.",
        "topics": [
          "평가 증거",
          "배포 경계",
          "로컬 모델 워크플로",
          "어댑터 리뷰"
        ],
        "comparison": {
          "eyebrow": "형식",
          "title": "노트와 아티클은 서로 다른 역할을 합니다.",
          "description": "둘 다 공개되며 승인된 콘텐츠입니다. 차이는 정성의 문제가 아니라 범위의 문제입니다.",
          "notes": {
            "label": "노트",
            "body": "짧은 기술적 관찰, 점검 항목, 구현 메모. 노트는 좁고 실용적이며 엔지니어링 결정에 가까운 자리에 머뭅니다."
          },
          "articles": {
            "label": "아티클",
            "body": "더 긴 공개 설명으로, 더 충분한 맥락, 더 선명한 논지, 더 강한 공개 경계를 갖습니다."
          }
        },
        "publication": {
          "eyebrow": "공개 경계",
          "title": "프라이빗 자료는 프라이빗하게 유지됩니다.",
          "description": "노트는 고객의 프라이빗 구성, 내부 배포 경로, 승인되지 않은 데이터셋, 비공개 실행 기록, 운영상 비밀을 공개하지 않습니다. 예시는 공개 전에 추상화됩니다."
        },
        "moreNotes": "검토 가능한 자료가 승인되면 더 많은 공개 노트가 게시됩니다.",
        "visuals": {
          "hero": "work-case-wall",
          "publication": "contact-first-review-tray"
        },
        "detailLabels": {
          "type": "유형",
          "topic": "주제",
          "boundary": "경계",
          "technicalNote": "기술 노트",
          "customerBoundary": "고객 제어 환경"
        }
  }
};

const finalPositioningCopy = {
  en: {
    homeHero: {
      eyebrow: "Local AI Infrastructure",
      title: "Private AI systems under control.",
      description: "Local infrastructure, private data workflows, and customer-controlled deployments for teams working with sensitive systems."
    },
    homeConstraint: {
      eyebrow: "Technical focus",
      title: "Local AI, private data, implementation support.",
      description: "We work close to the implementation surface: architecture, prototypes, deployment, review, and handoff."
    },
    homeServices: {
      eyebrow: "Services",
      title: "Capability areas for constrained systems.",
      description: "Private AI systems, local data infrastructure, deployment architecture, privacy boundaries, and customer-controlled infrastructure."
    },
    homeFinal: {
      eyebrow: "Next step",
      title: "Bring a constrained system.",
      description: "If you are working with private data, local infrastructure, model workflows, or deployment boundaries, send the context. We will review whether Random Walk is a fit for the work."
    },
    servicesHero: {
      eyebrow: "Services",
      title: "Services for local AI and private infrastructure.",
      description: "Random Walk helps teams design and implement systems where data, models, workflows, or deployment environments need to stay under control."
    },
    servicesDelivery: {
      eyebrow: "Method",
      title: "The work starts from a system boundary.",
      description: "Data cannot leave a controlled environment, a model workflow needs review, an internal system needs local inference, or a team needs implementation support around an existing stack."
    },
    workHero: {
      eyebrow: "Work",
      title: "Applied systems under real constraints.",
      description: "Selected work from Random Walk shows how private AI, local data infrastructure, and customer-controlled deployment patterns can be shaped for specific teams and operating environments."
    },
    contactHero: {
      eyebrow: "Contact",
      title: "Discuss a private AI project.",
      description: "Tell us what you are trying to build, what data or deployment constraints matter, and where the system needs to run."
    },
    contactIntake: {
      eyebrow: "Project context",
      title: "Send the boundary, not confidential material.",
      description: "Bring the ambition, not the confidential files. Tell us what you want the system to do and what must stay yours; we'll help turn that boundary into working infrastructure."
    }
  },
  zh: {
    homeHero: { eyebrow: "本地 AI 基础设施", title: "可控边界内的私有 AI 系统。", description: "为处理敏感系统的团队构建本地基础设施、私有数据工作流与客户可控部署。" },
    homeConstraint: { eyebrow: "技术焦点", title: "本地 AI、私有数据与实施支持。", description: "我们贴近真实实施面开展工作：架构、原型、部署、评审与交接。" },
    homeServices: { eyebrow: "服务", title: "面向受约束系统的能力领域。", description: "私有 AI 系统、本地数据基础设施、部署架构、隐私边界，以及客户可控基础设施。" },
    homeFinal: { eyebrow: "下一步", title: "带来一个有约束的系统。", description: "如果你正在处理私有数据、本地基础设施、模型工作流或部署边界，请发送项目上下文。我们会判断 Random Walk 是否适合参与。" },
    servicesHero: { eyebrow: "服务", title: "面向本地 AI 与私有基础设施的服务。", description: "Random Walk 帮助团队设计和实现需要掌控数据、模型、工作流或部署环境的系统。" },
    servicesDelivery: { eyebrow: "方法", title: "工作从系统边界开始。", description: "数据不能离开受控环境、模型工作流需要评审、内部系统需要本地推理，或团队需要围绕现有技术栈获得实施支持。" },
    workHero: { eyebrow: "案例", title: "真实约束下的应用系统。", description: "这些案例展示 Random Walk 如何为具体团队与运行环境塑造私有 AI、本地数据基础设施和客户可控部署模式。" },
    contactHero: { eyebrow: "联系", title: "讨论一个私有 AI 项目。", description: "告诉我们你要构建什么、哪些数据或部署约束重要，以及系统需要运行在哪里。" },
    contactIntake: { eyebrow: "项目上下文", title: "发送边界，不要发送机密材料。", description: "带来目标，而不是机密文件。告诉我们你希望系统做到什么、哪些部分必须留在你这边；我们会把这条边界转化为可落地的基础设施。" }
  },
  ja: {
    homeHero: { eyebrow: "ローカル AI 基盤", title: "制御下に置くプライベート AI システム。", description: "機密性の高いシステムに向けた、ローカル基盤、プライベートデータワークフロー、顧客管理型デプロイ。" },
    homeConstraint: { eyebrow: "技術フォーカス", title: "ローカル AI、プライベートデータ、実装支援。", description: "私たちは実装面に近い場所で作業します。アーキテクチャ、プロトタイプ、デプロイ、レビュー、引き継ぎです。" },
    homeServices: { eyebrow: "サービス", title: "制約のあるシステムのための能力領域。", description: "プライベート AI システム、ローカルデータ基盤、デプロイ設計、プライバシー境界、顧客管理型インフラ。" },
    homeFinal: { eyebrow: "次のステップ", title: "制約のあるシステムを持ち込む。", description: "プライベートデータ、ローカル基盤、モデルワークフロー、デプロイ境界に取り組んでいる場合は、その文脈を共有してください。Random Walk が適しているか確認します。" },
    servicesHero: { eyebrow: "サービス", title: "ローカル AI とプライベート基盤のためのサービス。", description: "Random Walk は、データ、モデル、ワークフロー、またはデプロイ環境を制御する必要があるシステムの設計と実装を支援します。" },
    servicesDelivery: { eyebrow: "方法", title: "作業はシステム境界から始まる。", description: "データが制御環境を離れられない、モデルワークフローにレビューが必要、社内システムにローカル推論が必要、または既存スタック周辺の実装支援が必要な場合です。" },
    workHero: { eyebrow: "実績", title: "現実の制約下で動くシステム。", description: "Random Walk の実績は、プライベート AI、ローカルデータ基盤、顧客管理型デプロイのパターンを、具体的なチームと運用環境に合わせて形にする方法を示します。" },
    contactHero: { eyebrow: "お問い合わせ", title: "プライベート AI プロジェクトを相談する。", description: "何を構築したいのか、重要なデータやデプロイ制約、システムがどこで動く必要があるのかを共有してください。" },
    contactIntake: { eyebrow: "プロジェクト文脈", title: "機密資料ではなく、境界を共有する。", description: "機密ファイルではなく、実現したいことを共有してください。何を動かしたいのか、何を手元に留めるべきかをもとに、その境界を実装可能な基盤へ落とし込みます。" }
  },
  ko: {
    homeHero: { eyebrow: "로컬 AI 인프라", title: "통제 경계 안의 프라이빗 AI 시스템.", description: "민감한 시스템을 다루는 팀을 위한 로컬 인프라, 프라이빗 데이터 워크플로, 고객 제어 배포." },
    homeConstraint: { eyebrow: "기술 초점", title: "로컬 AI, 프라이빗 데이터, 구현 지원.", description: "우리는 구현 표면 가까이에서 일합니다. 아키텍처, 프로토타입, 배포, 리뷰, 인수인계입니다." },
    homeServices: { eyebrow: "서비스", title: "제약이 있는 시스템을 위한 역량 영역.", description: "프라이빗 AI 시스템, 로컬 데이터 인프라, 배포 아키텍처, 프라이버시 경계, 고객 제어 인프라." },
    homeFinal: { eyebrow: "다음 단계", title: "제약이 있는 시스템을 가져오세요.", description: "프라이빗 데이터, 로컬 인프라, 모델 워크플로, 배포 경계를 다루고 있다면 맥락을 보내 주세요. Random Walk가 해당 작업에 적합한지 검토합니다." },
    servicesHero: { eyebrow: "서비스", title: "로컬 AI와 프라이빗 인프라를 위한 서비스.", description: "Random Walk는 데이터, 모델, 워크플로 또는 배포 환경을 통제해야 하는 시스템의 설계와 구현을 지원합니다." },
    servicesDelivery: { eyebrow: "방법", title: "작업은 시스템 경계에서 시작합니다.", description: "데이터가 통제된 환경을 떠날 수 없거나, 모델 워크플로에 리뷰가 필요하거나, 내부 시스템에 로컬 추론이 필요하거나, 기존 스택 주변의 구현 지원이 필요한 경우입니다." },
    workHero: { eyebrow: "작업", title: "현실의 제약 아래 적용되는 시스템.", description: "Random Walk의 작업은 프라이빗 AI, 로컬 데이터 인프라, 고객 제어 배포 패턴이 구체적인 팀과 운영 환경에 맞게 어떻게 구성되는지 보여줍니다." },
    contactHero: { eyebrow: "문의", title: "프라이빗 AI 프로젝트를 논의하세요.", description: "무엇을 만들려는지, 어떤 데이터나 배포 제약이 중요한지, 시스템이 어디에서 실행되어야 하는지 알려 주세요." },
    contactIntake: { eyebrow: "프로젝트 맥락", title: "기밀 자료가 아니라 경계를 보내 주세요.", description: "기밀 파일이 아니라 이루고 싶은 목표를 보내 주세요. 시스템이 무엇을 해야 하는지, 무엇이 당신 쪽에 남아야 하는지 알려 주시면 그 경계를 작동하는 인프라로 바꾸겠습니다." }
  }
} satisfies Record<Locale, {
  homeHero: PageCopy;
  homeConstraint: PageCopy;
  homeServices: PageCopy;
  homeFinal: PageCopy;
  servicesHero: PageCopy;
  servicesDelivery: PageCopy;
  workHero: PageCopy;
  contactHero: PageCopy;
  contactIntake: PageCopy;
}>;

for (const locale of locales) {
  homeCopy[locale].hero = finalPositioningCopy[locale].homeHero;
  homeCopy[locale].constraint = finalPositioningCopy[locale].homeConstraint;
  homeCopy[locale].services = finalPositioningCopy[locale].homeServices;
  homeCopy[locale].final = finalPositioningCopy[locale].homeFinal;
  servicesPageCopy[locale].hero = finalPositioningCopy[locale].servicesHero;
  servicesPageCopy[locale].delivery = finalPositioningCopy[locale].servicesDelivery;
  workPageCopy[locale].hero = finalPositioningCopy[locale].workHero;
  contactPageCopy[locale].hero = finalPositioningCopy[locale].contactHero;
  contactPageCopy[locale].intake = finalPositioningCopy[locale].contactIntake;
}

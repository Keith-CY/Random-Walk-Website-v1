import type { Locale } from "./i18n";
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
      title: "Private AI infrastructure for customer-controlled environments.",
      description: "Random Walk designs and delivers local AI systems for organizations that need model workflows to run inside their own security, data, and deployment boundaries."
    },
    constraint: {
      eyebrow: "The constraint",
      title: "Built for constrained environments.",
      description: "We work with teams that cannot move sensitive data into general-purpose cloud AI services, but still need practical model training, evaluation, deployment, and support."
    },
    workflow: {
      eyebrow: "Private model workflow",
      title: "From data to operating workflow.",
      description: "We help turn internal datasets, model adapters, evaluation evidence, deployment runbooks, and support procedures into a usable AI workflow."
    },
    services: {
      eyebrow: "Services",
      title: "Delivery services for private AI adoption.",
      description: "Dataset packaging, LoRA adaptation, private model delivery, evaluation reports, deployment runbooks, and technical support for controlled environments."
    },
    melix: {
      eyebrow: "Open-source reference",
      title: "Melix is a local-first AI runtime for Apple Silicon.",
      description: "Melix explores customer-controlled model workflows on macOS: loading, adapters, evaluation loops, and operator-facing controls."
    },
    security: {
      eyebrow: "Evidence",
      title: "Security starts with boundaries.",
      description: "We design around customer-controlled data, explicit deployment environments, operational evidence, and conservative access assumptions."
    },
    heritage: {
      eyebrow: "Technical heritage",
      title: "Built from systems work.",
      description: "Our work comes from years of building infrastructure, developer tools, and workflows where reliability, auditability, and operational clarity matter."
    },
    final: {
      eyebrow: "Next step",
      title: "Discuss a private AI deployment.",
      description: "Share your environment, data constraints, and target workflow. We can help scope a practical path from dataset preparation to supported deployment."
    }
  },
  zh: {
    hero: {
      eyebrow: "本地 AI 基础设施",
      title: "在数据所在的位置训练模型。",
      description: "Random Walk 为不能把敏感数据送上云的企业，构建本地 AI 基础设施与私有模型方案。"
    },
    constraint: {
      eyebrow: "约束",
      title: "最有价值的训练数据，往往也是最不能移动的数据。",
      description: "客户记录、商业机密、专利研发材料、运营日志和受监管流程都能提升模型质量，但不能随意上传到第三方 API。"
    },
    workflow: {
      eyebrow: "私有模型工作流",
      title: "从机密数据到可部署的本地模型。",
      description: "我们先定义边界，再准备数据集、训练适配器、评估行为、私有部署，并交付证据材料。"
    },
    services: {
      eyebrow: "服务",
      title: "面向私有 AI 的基础设施、模型与运营支持。",
      description: "每个项目都交付工程、安全与合规团队可以评审的具体资产。"
    },
    melix: {
      eyebrow: "开源参考",
      title: "Melix 是我们的 Apple Silicon 本地模型工作室。",
      description: "Melix 展示了开发者可操作的本地模型工作流：服务、LoRA 微调、基准测试、评估与 CLI。"
    },
    security: {
      eyebrow: "证据",
      title: "构建安全团队可以理解和评审的 AI 工作流。",
      description: "我们用明确的数据边界、部署模式、访问路径、评估记录和运行手册来设计模型系统。"
    },
    heritage: {
      eyebrow: "技术积累",
      title: "来自隐私、数据与分布式系统的多年实践。",
      description: "Random Walk 过往的系统工程经验，现在服务于私有 AI 基础设施建设。"
    },
    final: {
      eyebrow: "下一步",
      title: "不移动私有数据，也能构建私有 AI。",
      description: "告诉我们数据能在哪里存在、模型需要完成什么任务，以及它必须留在哪个边界内。"
    }
  },
  ja: {
    hero: {
      eyebrow: "ローカル AI 基盤",
      title: "データが存在する場所でモデルを鍛える。",
      description: "Random Walk は、機密データをクラウドに送れない企業のために、ローカル AI 基盤とプライベートモデルを構築します。"
    },
    constraint: {
      eyebrow: "制約",
      title: "最も価値のある学習データほど、動かせないことが多い。",
      description: "顧客記録、営業秘密、特許に関わる研究、運用ログ、規制対象ワークフローはモデル品質を高めますが、第三者 API に気軽に送ることはできません。"
    },
    workflow: {
      eyebrow: "プライベートモデルワークフロー",
      title: "機密データから、配備可能なローカルモデルへ。",
      description: "境界を定義し、データセットを準備し、アダプターを学習し、挙動を評価し、プライベートに配備して証拠を渡します。"
    },
    services: {
      eyebrow: "サービス",
      title: "プライベート AI のための基盤、モデル、運用支援。",
      description: "各エンゲージメントは、エンジニアリング、セキュリティ、コンプライアンスの各チームが確認できる成果物を残します。"
    },
    melix: {
      eyebrow: "オープンソース参照",
      title: "Melix は Apple Silicon 向けのローカルモデルスタジオです。",
      description: "Melix は、サービング、LoRA 微調整、ベンチマーク、評価、CLI 操作を含むローカルモデル運用を示す製品です。"
    },
    security: {
      eyebrow: "証拠",
      title: "セキュリティチームが確認できる AI ワークフローを構築する。",
      description: "明確な境界、配備方式、アクセス経路、評価記録、ランブックを持つモデルシステムを設計します。"
    },
    heritage: {
      eyebrow: "技術的背景",
      title: "プライバシー、データ、分散システムの経験を基盤に。",
      description: "Random Walk の過去のシステム開発経験は、現在のプライベート AI 基盤設計に活かされています。"
    },
    final: {
      eyebrow: "次のステップ",
      title: "プライベートデータを動かさずに、プライベート AI を構築する。",
      description: "データが存在できる場所、モデルに求めるタスク、維持すべき境界を共有してください。"
    }
  },
  ko: {
    hero: {
      eyebrow: "로컬 AI 인프라",
      title: "데이터가 있는 곳에서 모델을 훈련합니다.",
      description: "Random Walk는 민감한 데이터를 클라우드로 보낼 수 없는 기업을 위해 로컬 AI 인프라와 프라이빗 모델 솔루션을 구축합니다."
    },
    constraint: {
      eyebrow: "제약",
      title: "가장 가치 있는 학습 데이터는 가장 이동하기 어렵습니다.",
      description: "고객 기록, 영업 비밀, 특허 관련 연구, 운영 로그, 규제 워크플로는 모델 품질을 높일 수 있지만 제3자 API에 쉽게 업로드할 수 없습니다."
    },
    workflow: {
      eyebrow: "프라이빗 모델 워크플로",
      title: "기밀 데이터에서 배포 가능한 로컬 모델까지.",
      description: "경계를 정의하고, 데이터셋을 준비하고, 어댑터를 훈련하고, 동작을 평가하고, 프라이빗하게 배포한 뒤 증거를 전달합니다."
    },
    services: {
      eyebrow: "서비스",
      title: "프라이빗 AI를 위한 인프라, 모델, 운영 지원.",
      description: "각 프로젝트는 엔지니어링, 보안, 컴플라이언스 팀이 검토할 수 있는 산출물을 제공합니다."
    },
    melix: {
      eyebrow: "오픈소스 참고",
      title: "Melix는 Apple Silicon용 로컬 모델 스튜디오입니다.",
      description: "Melix는 서빙, LoRA 파인튜닝, 벤치마크, 평가, CLI 운영을 포함한 로컬 모델 워크플로를 보여줍니다."
    },
    security: {
      eyebrow: "증거",
      title: "보안팀이 이해하고 검토할 수 있는 AI 워크플로를 만듭니다.",
      description: "명확한 경계, 배포 모드, 접근 경로, 평가 기록, 운영 런북을 갖춘 모델 시스템을 설계합니다."
    },
    heritage: {
      eyebrow: "기술 기반",
      title: "프라이버시, 데이터, 분산 시스템 경험 위에 구축합니다.",
      description: "Random Walk의 기존 시스템 작업은 프라이빗 AI 인프라 설계의 기반이 됩니다."
    },
    final: {
      eyebrow: "다음 단계",
      title: "프라이빗 데이터를 이동하지 않고 프라이빗 AI를 구축하세요.",
      description: "데이터가 머무를 수 있는 위치, 모델이 수행해야 할 작업, 유지해야 할 경계를 알려주세요."
    }
  }
};

export const deliveryChain = [
  "Private Data",
  "Dataset Package",
  "LoRA Adapter + Evidence",
  "Fused Model",
  "Evaluation Report",
  "Deployment Runbook",
  "Support / Iteration"
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
    title: "Enterprise Support",
    description: "Support remote and on-site implementation, especially during the first introduction of private model systems.",
    deliverables: ["On-site introduction support", "Remote engineering support", "Support handoff", "Optional continuous tuning by contract"]
  }
];

export const industries: Industry[] = [
  {
    title: "Legal / Patent / IP-intensive enterprises",
    description: "For teams working with confidential legal material, patent strategy, invention disclosures, proprietary research, contracts, and privileged knowledge workflows.",
    needs: ["Private document reasoning", "Patent / prior-art support workflows", "Confidential drafting assistance", "IP-sensitive data boundary control"]
  },
  {
    title: "Manufacturing / Industrial Equipment",
    description: "For companies that need AI systems close to machines, operators, field devices, engineering documents, maintenance history, and offline or edge environments.",
    needs: ["Technician assistants", "Equipment manuals and troubleshooting", "On-prem / air-gapped inference", "Device-specific language adaptation"]
  },
  {
    title: "Financial / Insurance",
    description: "For teams working with regulated records, underwriting knowledge, claims documentation, internal risk procedures, and customer-sensitive data.",
    needs: ["Private knowledge assistants", "Secure document workflows", "Policy and claims support", "Model evaluation evidence"]
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
  zh: ["私有数据", "数据集包", "LoRA 适配器与证据", "融合模型", "评估报告", "部署运行手册", "支持 / 迭代"],
  ja: ["プライベートデータ", "データセットパッケージ", "LoRA アダプターと証拠", "融合モデル", "評価レポート", "配備ランブック", "サポート / 反復"],
  ko: ["프라이빗 데이터", "데이터셋 패키지", "LoRA 어댑터와 증거", "융합 모델", "평가 보고서", "배포 런북", "지원 / 반복"]
};

export const localizedServiceModules: Localized<ServiceModule[]> = {
  en: serviceModules,
  zh: [
    {
      title: "模型训练数据集准备",
      description: "将领域材料转换为可评审、可版本化、可用于本地模型适配的训练 / 验证 / 测试数据集。",
      deliverables: ["数据集包", "数据集清单", "拆分依据", "预处理说明", "脱敏 / 排除说明", "数据移动登记"]
    },
    {
      title: "LoRA 适配器开发",
      description: "为客户任务训练适配器，并交付训练记录、模型引用、评估摘要和启用说明。",
      deliverables: ["LoRA 适配器", "训练配置", "训练运行记录", "评估报告", "启用说明"]
    },
    {
      title: "融合模型交付",
      description: "在合同约定时，将调优后的行为打包为面向客户控制环境的私有授权融合模型。",
      deliverables: ["融合模型工件", "私有授权条款", "部署说明", "已知限制说明"]
    },
    {
      title: "评估与证据",
      description: "产出可评审的评估材料，让安全、合规和工程团队能在部署前理解模型行为。",
      deliverables: ["任务评估", "回归检查", "测试集摘要", "限制登记", "下一轮迭代建议"]
    },
    {
      title: "私有部署",
      description: "在 Apple Silicon、本地 GPU 服务器、私有云、客户 VPC、隔离系统和边缘设备上部署模型系统。",
      deliverables: ["部署运行手册", "运行时配置", "访问路径", "回滚计划", "操作员清单"]
    },
    {
      title: "企业支持",
      description: "提供远程和现场实施支持，尤其适用于首次引入私有模型系统的阶段。",
      deliverables: ["现场导入支持", "远程工程支持", "支持交接", "按合同可选的持续调优"]
    }
  ],
  ja: [
    {
      title: "モデル学習用データセット準備",
      description: "ドメイン資料を、レビュー、バージョン管理、ローカルモデル適応に使える学習 / 検証 / テストデータセットへ変換します。",
      deliverables: ["データセットパッケージ", "データセット目録", "分割根拠", "前処理メモ", "マスキング / 除外メモ", "データ移動記録"]
    },
    {
      title: "LoRA アダプター開発",
      description: "顧客固有タスク向けのアダプターを学習し、学習記録、モデル参照、評価要約、利用メモとともに納品します。",
      deliverables: ["LoRA アダプター", "学習設定", "学習実行記録", "評価レポート", "利用メモ"]
    },
    {
      title: "融合モデル納品",
      description: "契約で定めた場合、顧客管理環境向けに調整済み挙動を私的ライセンスの融合モデルとしてパッケージします。",
      deliverables: ["融合モデル成果物", "私的ライセンス条件", "配備メモ", "既知の制限"]
    },
    {
      title: "評価と証拠",
      description: "セキュリティ、コンプライアンス、エンジニアリングの各チームが配備前にモデル挙動を確認できる評価資料を作成します。",
      deliverables: ["タスク評価", "回帰チェック", "テストセット要約", "制限レジスター", "次回反復の推奨"]
    },
    {
      title: "プライベート配備",
      description: "Apple Silicon、オンプレ GPU、プライベートクラウド、顧客 VPC、エアギャップ、エッジデバイスにモデルシステムを配備します。",
      deliverables: ["配備ランブック", "ランタイム設定", "アクセス経路", "ロールバック計画", "運用者チェックリスト"]
    },
    {
      title: "企業向けサポート",
      description: "プライベートモデルシステムの初回導入を中心に、リモートおよびオンサイトの実装支援を提供します。",
      deliverables: ["オンサイト導入支援", "リモートエンジニアリング支援", "サポート引き継ぎ", "契約に基づく継続調整"]
    }
  ],
  ko: [
    {
      title: "모델 학습용 데이터셋 준비",
      description: "도메인 자료를 검토, 버전 관리, 로컬 모델 적응에 사용할 수 있는 학습 / 검증 / 테스트 데이터셋으로 변환합니다.",
      deliverables: ["데이터셋 패키지", "데이터셋 명세", "분할 근거", "전처리 메모", "비식별 / 제외 메모", "데이터 이동 기록"]
    },
    {
      title: "LoRA 어댑터 개발",
      description: "고객별 작업에 맞춘 어댑터를 학습하고 학습 기록, 모델 참조, 평가 요약, 활성화 메모와 함께 제공합니다.",
      deliverables: ["LoRA 어댑터", "학습 구성", "학습 실행 기록", "평가 보고서", "활성화 메모"]
    },
    {
      title: "융합 모델 제공",
      description: "계약된 경우 조정된 동작을 고객 통제 환경용 프라이빗 라이선스 융합 모델로 패키징합니다.",
      deliverables: ["융합 모델 산출물", "프라이빗 라이선스 조건", "배포 메모", "알려진 한계 메모"]
    },
    {
      title: "평가와 증거",
      description: "보안, 컴플라이언스, 엔지니어링 팀이 배포 전에 모델 동작을 검토할 수 있는 평가 자료를 만듭니다.",
      deliverables: ["작업 평가", "회귀 점검", "테스트셋 요약", "한계 레지스터", "다음 반복 권고"]
    },
    {
      title: "프라이빗 배포",
      description: "Apple Silicon, 온프레미스 GPU, 프라이빗 클라우드, 고객 VPC, 에어갭 시스템, 엣지 디바이스에 모델 시스템을 배포합니다.",
      deliverables: ["배포 런북", "런타임 구성", "접근 경로", "롤백 계획", "운영자 체크리스트"]
    },
    {
      title: "엔터프라이즈 지원",
      description: "프라이빗 모델 시스템의 초기 도입을 중심으로 원격 및 온사이트 구현 지원을 제공합니다.",
      deliverables: ["온사이트 도입 지원", "원격 엔지니어링 지원", "지원 인수인계", "계약 기반 지속 튜닝"]
    }
  ]
};

export const localizedIndustries: Localized<Industry[]> = {
  en: industries,
  zh: [
    {
      title: "法律 / 专利 / IP 密集型企业",
      description: "面向处理机密法律材料、专利策略、发明披露、专有研究、合同和特权知识工作流的团队。",
      needs: ["私有文档推理", "专利 / 现有技术支持工作流", "机密起草辅助", "IP 敏感数据边界控制"]
    },
    {
      title: "制造 / 工业设备",
      description: "面向需要让 AI 系统靠近机器、操作员、现场设备、工程文档、维护历史和离线或边缘环境的公司。",
      needs: ["技术员助手", "设备手册和故障排查", "本地 / 隔离推理", "设备特定语言适配"]
    },
    {
      title: "金融 / 保险",
      description: "面向处理受监管记录、核保知识、理赔文档、内部风险流程和客户敏感数据的团队。",
      needs: ["私有知识助手", "安全文档工作流", "保单和理赔支持", "模型评估证据"]
    }
  ],
  ja: [
    {
      title: "法律 / 特許 / IP 集約型企業",
      description: "機密法律資料、特許戦略、発明開示、専有研究、契約、秘匿特権のある知識ワークフローを扱うチーム向けです。",
      needs: ["プライベート文書推論", "特許 / 先行技術支援ワークフロー", "機密ドラフト支援", "IP センシティブなデータ境界管理"]
    },
    {
      title: "製造 / 産業機器",
      description: "機械、オペレーター、現場デバイス、設計文書、保守履歴、オフラインまたはエッジ環境の近くで AI を動かす企業向けです。",
      needs: ["技術者アシスタント", "設備マニュアルとトラブルシュート", "オンプレ / エアギャップ推論", "機器固有の言語適応"]
    },
    {
      title: "金融 / 保険",
      description: "規制対象記録、引受知識、請求文書、内部リスク手順、顧客センシティブデータを扱うチーム向けです。",
      needs: ["プライベート知識アシスタント", "安全な文書ワークフロー", "保険契約と請求支援", "モデル評価証拠"]
    }
  ],
  ko: [
    {
      title: "법률 / 특허 / IP 집약 기업",
      description: "기밀 법률 자료, 특허 전략, 발명 공개, 독점 연구, 계약, 특권 지식 워크플로를 다루는 팀을 위한 항목입니다.",
      needs: ["프라이빗 문서 추론", "특허 / 선행기술 지원 워크플로", "기밀 초안 작성 지원", "IP 민감 데이터 경계 제어"]
    },
    {
      title: "제조 / 산업 장비",
      description: "기계, 운영자, 현장 디바이스, 엔지니어링 문서, 유지보수 이력, 오프라인 또는 엣지 환경 가까이에서 AI를 운영해야 하는 회사를 위한 항목입니다.",
      needs: ["기술자 어시스턴트", "장비 매뉴얼과 문제 해결", "온프레미스 / 에어갭 추론", "장비별 언어 적응"]
    },
    {
      title: "금융 / 보험",
      description: "규제 기록, 언더라이팅 지식, 청구 문서, 내부 리스크 절차, 고객 민감 데이터를 다루는 팀을 위한 항목입니다.",
      needs: ["프라이빗 지식 어시스턴트", "보안 문서 워크플로", "정책 및 청구 지원", "모델 평가 증거"]
    }
  ]
};

export const localizedDeploymentModes: Localized<DeploymentMode[]> = {
  en: deploymentModes,
  zh: [
    { label: "Apple Silicon / 设备端", where: "面向团队和个人开发者的本地模型迭代。", evidence: "设备 / 运行时设置说明。" },
    { label: "本地 GPU 服务器", where: "在公司自有计算资源内完成训练和推理。", evidence: "环境记录和操作运行手册。" },
    { label: "私有云", where: "具备受控访问路径的专用私有基础设施。", evidence: "架构图和访问说明。" },
    { label: "客户 VPC", where: "部署在客户自己批准的云边界内。", evidence: "数据移动登记和运行记录。" },
    { label: "隔离环境", where: "为受限或断网环境设计的系统。", evidence: "传输流程、更新路径和证据处理说明。" },
    { label: "边缘设备", where: "在设备、操作员、传感器或工业工作流附近推理。", evidence: "设备群更新模式和轻量运行时说明。" }
  ],
  ja: [
    { label: "Apple Silicon / デバイス上", where: "チームや個人開発者向けのローカルモデル反復。", evidence: "デバイス / ランタイム設定メモ。" },
    { label: "オンプレ GPU サーバー", where: "会社所有の計算資源内で学習と推論を実行。", evidence: "環境記録と運用ランブック。" },
    { label: "プライベートクラウド", where: "アクセス経路を制御した専用プライベート基盤。", evidence: "アーキテクチャ図とアクセスメモ。" },
    { label: "顧客 VPC", where: "お客様が承認したクラウド境界内への配備。", evidence: "データ移動記録とランタイム記録。" },
    { label: "エアギャップ環境", where: "制限または切断された環境向けに設計したシステム。", evidence: "転送手順、更新経路、証拠取扱いメモ。" },
    { label: "エッジデバイス", where: "デバイス、作業者、センサー、産業ワークフローの近くで推論。", evidence: "フリート更新モデルと軽量ランタイムメモ。" }
  ],
  ko: [
    { label: "Apple Silicon / 온디바이스", where: "팀과 개인 개발자를 위한 로컬 모델 반복.", evidence: "디바이스 / 런타임 설정 메모." },
    { label: "온프레미스 GPU 서버", where: "회사 소유 컴퓨트 안에서 학습과 추론을 실행.", evidence: "환경 기록과 운영 런북." },
    { label: "프라이빗 클라우드", where: "제어된 접근 경로를 갖춘 전용 프라이빗 인프라.", evidence: "아키텍처 다이어그램과 접근 메모." },
    { label: "고객 VPC", where: "고객이 승인한 자체 클라우드 경계 안에 배포.", evidence: "데이터 이동 기록과 런타임 기록." },
    { label: "에어갭 환경", where: "제한되거나 연결되지 않은 환경을 위한 시스템.", evidence: "전송 절차, 업데이트 경로, 증거 처리 메모." },
    { label: "엣지 디바이스", where: "디바이스, 운영자, 센서, 산업 워크플로 가까이에서 추론.", evidence: "플릿 업데이트 모델과 경량 런타임 메모." }
  ]
};

export const localizedEvidenceArtifacts: Localized<readonly (readonly [string, string])[]> = {
  en: evidenceArtifacts,
  zh: [
    ["约束登记", "记录隐私、合规和部署约束。"],
    ["数据集清单", "记录来源、转换、排除和保留规则。"],
    ["训练运行记录", "记录模型、数据集、适配器、运行时和参数。"],
    ["评估报告", "保存行为测试、基准结果、失败和限制。"],
    ["部署运行手册", "说明安装、访问、监控、回滚和归属。"],
    ["变更日志", "跟踪模型、数据、适配器和运行时变化。"]
  ],
  ja: [
    ["制約レジスター", "プライバシー、コンプライアンス、配備制約を記録します。"],
    ["データセット目録", "ソース、変換、除外、保存を文書化します。"],
    ["学習実行記録", "モデル、データセット、アダプター、ランタイム、パラメータを記録します。"],
    ["評価レポート", "挙動テスト、ベンチマーク結果、失敗、制限を残します。"],
    ["配備ランブック", "インストール、アクセス、監視、ロールバック、責任範囲を説明します。"],
    ["変更ログ", "モデル、データ、アダプター、ランタイムの変更を追跡します。"]
  ],
  ko: [
    ["제약 레지스터", "개인정보, 컴플라이언스, 배포 제약을 기록합니다."],
    ["데이터셋 명세", "출처, 변환, 제외, 보존을 문서화합니다."],
    ["학습 실행 기록", "모델, 데이터셋, 어댑터, 런타임, 파라미터를 기록합니다."],
    ["평가 보고서", "동작 테스트, 벤치마크 결과, 실패, 한계를 보존합니다."],
    ["배포 런북", "설치, 접근, 모니터링, 롤백, 소유권을 설명합니다."],
    ["변경 로그", "모델, 데이터, 어댑터, 런타임 변경을 추적합니다."]
  ]
};

export const localizedTechnicalHeritage: Localized<string[]> = {
  en: technicalHeritage,
  zh: ["隐私工程", "数据平台", "分布式基础设施", "密码系统", "本地优先产品设计", "AI/ML 系统"],
  ja: ["プライバシーエンジニアリング", "データプラットフォーム", "分散基盤", "暗号システム", "ローカルファースト製品設計", "AI/ML システム"],
  ko: ["프라이버시 엔지니어링", "데이터 플랫폼", "분산 인프라", "암호 시스템", "로컬 우선 제품 설계", "AI/ML 시스템"]
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
    "客户隐私",
    "商业秘密",
    "专利敏感研发",
    "受监管工作流",
    "边缘延迟",
    "隔离系统"
  ].map((title) => ({ title, description: "在模型工作开始前，边界、保留、访问和评估要求必须明确。" })),
  ja: [
    "顧客プライバシー",
    "営業秘密",
    "特許センシティブな研究開発",
    "規制対象ワークフロー",
    "エッジ遅延",
    "エアギャップシステム"
  ].map((title) => ({ title, description: "モデル作業の前に、境界、保存、アクセス、評価要件を明確にする必要があります。" })),
  ko: [
    "고객 개인정보",
    "영업 비밀",
    "특허 민감 연구개발",
    "규제 워크플로",
    "엣지 지연",
    "에어갭 시스템"
  ].map((title) => ({ title, description: "모델 작업 전에 경계, 보존, 접근, 평가 요구사항을 명확히 해야 합니다." }))
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
    { label: "数据", eyebrow: "步骤 01", title: "私有数据边界", description: "在训练前先映射来源类别、移动约束、保留规则和评审预期。", assetId: "services-hero-private-data" },
    { label: "数据集", eyebrow: "步骤 02", title: "数据集包", description: "可评审的数据包记录转换、排除、拆分和清单说明。", assetId: "services-dataset-package" },
    { label: "适配器", eyebrow: "步骤 03", title: "LoRA 适配器与证据", description: "训练配置、基础模型引用、运行记录和评估背景与适配器一起交付。", assetId: "services-lora-adapter" },
    { label: "模型", eyebrow: "步骤 04", title: "融合模型", description: "当部署条款要求时，交付面向客户控制运行目标的打包模型工件。", assetId: "services-fused-model" },
    { label: "评估", eyebrow: "步骤 05", title: "评估报告", description: "为技术评审准备任务行为、限制、回归和下一轮建议。", assetId: "services-evaluation-report" },
    { label: "运行手册", eyebrow: "步骤 06", title: "部署运行手册", description: "在运行前明确运行目标、访问路径、回滚说明和操作交接。", assetId: "services-deployment-topology" },
    { label: "支持", eyebrow: "运营", title: "支持 / 迭代", description: "现场导入、远程支持和后续适配都围绕客户边界规划。", assetId: "services-support" }
  ],
  ja: [
    { label: "データ", eyebrow: "手順 01", title: "プライベートデータ境界", description: "学習前にソース分類、移動制約、保存ルール、レビュー期待値を整理します。", assetId: "services-hero-private-data" },
    { label: "データセット", eyebrow: "手順 02", title: "データセットパッケージ", description: "制御された適応のために、変換、除外、分割、目録メモをレビュー可能にします。", assetId: "services-dataset-package" },
    { label: "アダプター", eyebrow: "手順 03", title: "LoRA アダプターと証拠", description: "学習設定、ベースモデル参照、実行記録、評価文脈をアダプターと一緒に扱います。", assetId: "services-lora-adapter" },
    { label: "モデル", eyebrow: "手順 04", title: "融合モデル", description: "配備条件が求める場合、顧客管理ランタイム向けにモデル成果物をパッケージします。", assetId: "services-fused-model" },
    { label: "評価", eyebrow: "手順 05", title: "評価レポート", description: "タスク挙動、制限、回帰、次回反復の提案を技術レビュー用に整理します。", assetId: "services-evaluation-report" },
    { label: "ランブック", eyebrow: "手順 06", title: "配備ランブック", description: "運用前にランタイム先、アクセス経路、ロールバック、運用引き継ぎを明確にします。", assetId: "services-deployment-topology" },
    { label: "サポート", eyebrow: "運用", title: "サポート / 反復", description: "オンサイト導入、リモート支援、追加適応を顧客境界に沿って計画します。", assetId: "services-support" }
  ],
  ko: [
    { label: "데이터", eyebrow: "단계 01", title: "프라이빗 데이터 경계", description: "학습 전에 출처 범주, 이동 제약, 보존 규칙, 검토 기대치를 매핑합니다.", assetId: "services-hero-private-data" },
    { label: "데이터셋", eyebrow: "단계 02", title: "데이터셋 패키지", description: "통제된 적응을 위해 변환, 제외, 분할, 명세 메모를 검토 가능하게 남깁니다.", assetId: "services-dataset-package" },
    { label: "어댑터", eyebrow: "단계 03", title: "LoRA 어댑터와 증거", description: "학습 구성, 베이스 모델 참조, 실행 기록, 평가 맥락을 어댑터와 함께 전달합니다.", assetId: "services-lora-adapter" },
    { label: "모델", eyebrow: "단계 04", title: "융합 모델", description: "배포 조건이 요구할 때 고객 통제 런타임을 위한 패키지 모델 산출물을 제공합니다.", assetId: "services-fused-model" },
    { label: "평가", eyebrow: "단계 05", title: "평가 보고서", description: "작업 동작, 한계, 회귀, 다음 반복 권고를 기술 검토용으로 준비합니다.", assetId: "services-evaluation-report" },
    { label: "런북", eyebrow: "단계 06", title: "배포 런북", description: "운영 전 런타임 대상, 접근 경로, 롤백 메모, 운영자 인수인계를 명확히 합니다.", assetId: "services-deployment-topology" },
    { label: "지원", eyebrow: "운영", title: "지원 / 반복", description: "온사이트 도입, 원격 지원, 후속 적응을 고객 경계에 맞춰 계획합니다.", assetId: "services-support" }
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
      title: "Private AI delivery services.",
      description: "We help organizations prepare datasets, adapt models, evaluate outputs, package delivery artifacts, and deploy AI workflows inside customer-controlled environments."
    },
    industries: {
      eyebrow: "Who this is for",
      title: "Industry entry points for private model systems.",
      description: ""
    },
    delivery: {
      eyebrow: "Delivery chain",
      title: "Private business data becomes reviewable model assets.",
      description: ""
    },
    modules: {
      eyebrow: "Service modules",
      title: "Deliverables, not vague advice.",
      description: ""
    },
    deployment: {
      eyebrow: "Deployment modes",
      title: "Local does not mean one machine.",
      description: ""
    },
    taxonomy: ["Dataset Package", "LoRA Adapter", "Fused Model", "Evaluation Report", "Deployment Runbook", "On-site / Remote Support"],
    groupLabels: ["Core model artifacts", "Operating model"],
    additionalDeliverables: "Additional deliverables",
    evidenceLabel: "Evidence"
  },
  zh: {
    hero: {
      eyebrow: "服务",
      title: "私有 AI 交付服务。",
      description: "我们帮助组织准备数据集、适配模型、评估输出、打包交付资产，并在客户控制环境中部署 AI 工作流。"
    },
    industries: { eyebrow: "适用对象", title: "私有模型系统的行业入口。", description: "" },
    delivery: { eyebrow: "交付链路", title: "私有业务数据转化为可评审的模型资产。", description: "" },
    modules: { eyebrow: "服务模块", title: "交付具体资产，而不是模糊建议。", description: "" },
    deployment: { eyebrow: "部署模式", title: "本地不等于单机。", description: "" },
    taxonomy: ["数据集包", "LoRA 适配器", "融合模型", "评估报告", "部署运行手册", "现场 / 远程支持"],
    groupLabels: ["核心模型资产", "运营模型"],
    additionalDeliverables: "更多交付物",
    evidenceLabel: "证据"
  },
  ja: {
    hero: {
      eyebrow: "サービス",
      title: "プライベート AI の納品サービス。",
      description: "データセット準備、モデル適応、出力評価、納品物パッケージ、顧客管理環境内での AI ワークフロー配備を支援します。"
    },
    industries: { eyebrow: "対象領域", title: "プライベートモデルシステムの業界入口。", description: "" },
    delivery: { eyebrow: "納品チェーン", title: "プライベートな業務データをレビュー可能なモデル資産へ。", description: "" },
    modules: { eyebrow: "サービスモジュール", title: "曖昧な助言ではなく、成果物を残す。", description: "" },
    deployment: { eyebrow: "配備方式", title: "ローカルは一台の機械だけを意味しません。", description: "" },
    taxonomy: ["データセットパッケージ", "LoRA アダプター", "融合モデル", "評価レポート", "配備ランブック", "オンサイト / リモート支援"],
    groupLabels: ["中核モデル成果物", "運用モデル"],
    additionalDeliverables: "その他の成果物",
    evidenceLabel: "証拠"
  },
  ko: {
    hero: {
      eyebrow: "서비스",
      title: "프라이빗 AI 제공 서비스.",
      description: "조직이 데이터셋을 준비하고, 모델을 적응시키고, 출력을 평가하고, 제공 산출물을 패키징하며, 고객 통제 환경 안에서 AI 워크플로를 배포하도록 돕습니다."
    },
    industries: { eyebrow: "대상", title: "프라이빗 모델 시스템의 산업 진입점.", description: "" },
    delivery: { eyebrow: "제공 체인", title: "프라이빗 비즈니스 데이터를 검토 가능한 모델 자산으로 만듭니다.", description: "" },
    modules: { eyebrow: "서비스 모듈", title: "모호한 조언이 아니라 산출물을 제공합니다.", description: "" },
    deployment: { eyebrow: "배포 방식", title: "로컬은 한 대의 기계만 의미하지 않습니다.", description: "" },
    taxonomy: ["데이터셋 패키지", "LoRA 어댑터", "융합 모델", "평가 보고서", "배포 런북", "온사이트 / 원격 지원"],
    groupLabels: ["핵심 모델 산출물", "운영 모델"],
    additionalDeliverables: "추가 산출물",
    evidenceLabel: "증거"
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
    hero: { eyebrow: "Security model for private AI workflows", title: "Security model for private AI workflows.", description: "We focus on deployment boundaries, data handling, evidence, access assumptions, and operational procedures rather than broad claims or generic assurances." },
    boundary: { eyebrow: "Boundary first", title: "Define the boundary before the model.", description: "Before model selection or training, we map data movement, runtime location, access paths, and review requirements for sensitive workflows." },
    evidence: { eyebrow: "Evidence artifacts", title: "Give security teams something concrete to review.", description: "Each engagement can produce records for data handling, training runs, evaluation behavior, deployment ownership, and runtime changes." },
    responsibility: { eyebrow: "Responsibility model", title: "Engineering support for compliance review.", description: "Random Walk provides architecture, access-path design, deployment runbooks, evaluation evidence, and operating records. Formal legal, regulatory, and certification decisions remain with the customer and qualified advisors." },
    primaryCta: "Scope a security review",
    secondaryCta: "View service model",
    contributionTitle: "Random Walk contribution",
    contributionBody: "Architecture, access-path design, deployment runbooks, evaluation evidence, documentation packages, and customer-side review support.",
    customerTitle: "Customer / advisor responsibility",
    customerBody: "Legal basis, policy approval, identity provider policy, user provisioning, internal audit, certification, and regulatory filings."
  },
  zh: {
    hero: { eyebrow: "私有 AI 工作流的安全模型", title: "私有 AI 工作流的安全模型。", description: "我们关注部署边界、数据处理、证据、访问假设和运营流程，而不是宽泛口号或泛化保证。" },
    boundary: { eyebrow: "边界优先", title: "先定义边界，再选择模型。", description: "在选择或训练模型前，我们先映射敏感工作流的数据移动、运行位置、访问路径和评审要求。" },
    evidence: { eyebrow: "证据资产", title: "给安全团队可具体评审的材料。", description: "每个项目都可以产出数据处理、训练运行、评估行为、部署归属和运行时变更记录。" },
    responsibility: { eyebrow: "责任模型", title: "支持合规评审的工程工作。", description: "Random Walk 提供架构、访问路径设计、部署运行手册、评估证据和运营记录。正式法律、监管和认证决策仍由客户及合格顾问负责。" },
    primaryCta: "发起安全评审",
    secondaryCta: "查看服务模型",
    contributionTitle: "Random Walk 贡献",
    contributionBody: "架构、访问路径设计、部署运行手册、评估证据、文档包和客户侧评审支持。",
    customerTitle: "客户 / 顾问责任",
    customerBody: "法律依据、政策批准、身份提供方策略、用户开通、内部审计、认证和监管申报。"
  },
  ja: {
    hero: { eyebrow: "プライベート AI ワークフローのセキュリティモデル", title: "プライベート AI ワークフローのセキュリティモデル。", description: "広い主張や一般的保証ではなく、配備境界、データ取扱い、証拠、アクセス前提、運用手順に焦点を当てます。" },
    boundary: { eyebrow: "境界を先に", title: "モデルの前に境界を定義する。", description: "モデル選定や学習の前に、センシティブなワークフローのデータ移動、実行場所、アクセス経路、レビュー要件を整理します。" },
    evidence: { eyebrow: "証拠成果物", title: "セキュリティチームが具体的に確認できる材料を残す。", description: "各エンゲージメントでは、データ取扱い、学習実行、評価挙動、配備責任、ランタイム変更の記録を作成できます。" },
    responsibility: { eyebrow: "責任モデル", title: "コンプライアンスレビューを支えるエンジニアリング。", description: "Random Walk はアーキテクチャ、アクセス経路設計、配備ランブック、評価証拠、運用記録を提供します。正式な法的判断、規制判断、認証判断はお客様と専門アドバイザーの責任です。" },
    primaryCta: "セキュリティレビューを相談",
    secondaryCta: "サービスモデルを見る",
    contributionTitle: "Random Walk の貢献",
    contributionBody: "アーキテクチャ、アクセス経路設計、配備ランブック、評価証拠、文書パッケージ、お客様側レビュー支援。",
    customerTitle: "お客様 / アドバイザーの責任",
    customerBody: "法的根拠、ポリシー承認、ID プロバイダー方針、ユーザー管理、内部監査、認証、規制申請。"
  },
  ko: {
    hero: { eyebrow: "프라이빗 AI 워크플로 보안 모델", title: "프라이빗 AI 워크플로 보안 모델.", description: "광범위한 주장이나 일반 보증보다 배포 경계, 데이터 처리, 증거, 접근 가정, 운영 절차에 집중합니다." },
    boundary: { eyebrow: "경계 우선", title: "모델보다 먼저 경계를 정의합니다.", description: "모델 선택이나 학습 전에 민감 워크플로의 데이터 이동, 런타임 위치, 접근 경로, 검토 요구사항을 매핑합니다." },
    evidence: { eyebrow: "증거 산출물", title: "보안팀이 구체적으로 검토할 수 있는 자료를 제공합니다.", description: "각 프로젝트는 데이터 처리, 학습 실행, 평가 동작, 배포 소유권, 런타임 변경 기록을 만들 수 있습니다." },
    responsibility: { eyebrow: "책임 모델", title: "컴플라이언스 검토를 위한 엔지니어링 지원.", description: "Random Walk는 아키텍처, 접근 경로 설계, 배포 런북, 평가 증거, 운영 기록을 제공합니다. 공식 법률, 규제, 인증 결정은 고객과 자격 있는 자문가의 책임입니다." },
    primaryCta: "보안 검토 상담",
    secondaryCta: "서비스 모델 보기",
    contributionTitle: "Random Walk 기여",
    contributionBody: "아키텍처, 접근 경로 설계, 배포 런북, 평가 증거, 문서 패키지, 고객 측 검토 지원.",
    customerTitle: "고객 / 자문가 책임",
    customerBody: "법적 근거, 정책 승인, ID 제공자 정책, 사용자 프로비저닝, 내부 감사, 인증, 규제 신고."
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
      eyebrow: "Company",
      title: "Company for local AI infrastructure.",
      description: "Random Walk is a small systems team building private AI infrastructure for organizations that need models, data, and evidence to remain inside customer-controlled boundaries."
    },
    team: {
      eyebrow: "Team introduction",
      title: "A working group for constrained model systems.",
      description: "We work like an infrastructure team: close to runtime constraints, careful about operational ownership, and comfortable moving between product, security, data, and model behavior."
    },
    philosophy: {
      eyebrow: "Brand values",
      title: "Classical constraints, modern systems.",
      description: "Our visual language is intentionally abstract. The company is not defined by one dashboard or one workflow, but by judgement, boundaries, evidence, and disciplined adaptation."
    },
    operating: {
      eyebrow: "Operating style",
      title: "Small team, explicit boundaries.",
      description: "We keep engagements narrow enough to verify, document, and hand off. The work starts with constraints, then moves into model adaptation, evaluation, deployment, and support."
    },
    stats: [
      { label: "Focus", value: "Local AI" },
      { label: "Mode", value: "Customer-controlled" },
      { label: "Outputs", value: "Model artifacts + evidence" }
    ],
    principles: [
      { title: "Boundary before model", description: "Deployment location, data movement, access paths, and review expectations are defined before model work starts." },
      { title: "Evidence before assertion", description: "Training runs, evaluation behavior, deployment notes, and limitations stay reviewable instead of hidden behind a claim." },
      { title: "Support that can be handed off", description: "The result should be understandable to the customer's engineering, security, and operations teams." }
    ],
    ctaLabel: "Start a company conversation"
  },
  zh: {
    hero: {
      eyebrow: "公司",
      title: "面向本地 AI 基础设施的公司。",
      description: "Random Walk 是一个小型系统团队，为需要让模型、数据和证据留在客户控制边界内的组织构建私有 AI 基础设施。"
    },
    team: {
      eyebrow: "团队介绍",
      title: "为受约束模型系统工作的团队。",
      description: "我们像基础设施团队一样工作：贴近运行约束，重视运营归属，并能在产品、安全、数据和模型行为之间切换。"
    },
    philosophy: {
      eyebrow: "品牌价值",
      title: "古典约束，现代系统。",
      description: "我们的视觉语言刻意保持抽象。公司不是由某个仪表盘或某条流程定义，而是由判断、边界、证据和克制的适配定义。"
    },
    operating: {
      eyebrow: "工作方式",
      title: "小团队，清晰边界。",
      description: "我们把合作范围控制在可以验证、记录和交接的尺度内。工作从约束开始，再进入模型适配、评估、部署和支持。"
    },
    stats: [
      { label: "聚焦", value: "本地 AI" },
      { label: "模式", value: "客户控制" },
      { label: "输出", value: "模型工件 + 证据" }
    ],
    principles: [
      { title: "先边界，后模型", description: "在模型工作开始前，先定义部署位置、数据移动、访问路径和评审预期。" },
      { title: "先证据，后论断", description: "训练运行、评估行为、部署说明和限制都保持可评审，而不是藏在口号后面。" },
      { title: "可交接的支持", description: "最终结果应该能被客户的工程、安全和运营团队理解并接手。" }
    ],
    ctaLabel: "开始公司沟通"
  },
  ja: {
    hero: {
      eyebrow: "会社",
      title: "ローカル AI 基盤のための会社。",
      description: "Random Walk は、モデル、データ、証拠を顧客管理境界内に保つ必要がある組織のために、プライベート AI 基盤を構築する小さなシステムチームです。"
    },
    team: {
      eyebrow: "チーム紹介",
      title: "制約のあるモデルシステムに取り組むチーム。",
      description: "私たちはインフラチームのように働きます。ランタイム制約に近く、運用責任を明確にし、プロダクト、セキュリティ、データ、モデル挙動を横断します。"
    },
    philosophy: {
      eyebrow: "ブランド価値",
      title: "古典的な制約と、現代のシステム。",
      description: "視覚言語は意図的に抽象的にしています。会社を一つのダッシュボードや一つの業務フローで語るのではなく、判断、境界、証拠、規律ある適応で表します。"
    },
    operating: {
      eyebrow: "運用スタイル",
      title: "小さなチーム、明確な境界。",
      description: "エンゲージメントは検証、記録、引き継ぎが可能な範囲に保ちます。制約から始め、モデル適応、評価、配備、サポートへ進みます。"
    },
    stats: [
      { label: "焦点", value: "ローカル AI" },
      { label: "方式", value: "顧客管理" },
      { label: "成果", value: "モデル成果物 + 証拠" }
    ],
    principles: [
      { title: "モデルの前に境界", description: "配備場所、データ移動、アクセス経路、レビュー期待値をモデル作業の前に定義します。" },
      { title: "主張の前に証拠", description: "学習実行、評価挙動、配備メモ、制限をレビュー可能な状態に残します。" },
      { title: "引き継げる支援", description: "成果は顧客のエンジニアリング、セキュリティ、運用チームが理解し引き継げるものにします。" }
    ],
    ctaLabel: "会社について相談する"
  },
  ko: {
    hero: {
      eyebrow: "회사",
      title: "로컬 AI 인프라를 위한 회사.",
      description: "Random Walk는 모델, 데이터, 증거가 고객 통제 경계 안에 남아야 하는 조직을 위해 프라이빗 AI 인프라를 구축하는 작은 시스템 팀입니다."
    },
    team: {
      eyebrow: "팀 소개",
      title: "제약이 있는 모델 시스템을 위한 작업 그룹.",
      description: "우리는 인프라 팀처럼 일합니다. 런타임 제약 가까이에 있고, 운영 소유권을 명확히 하며, 제품, 보안, 데이터, 모델 동작을 함께 다룹니다."
    },
    philosophy: {
      eyebrow: "브랜드 가치",
      title: "고전적 제약과 현대 시스템.",
      description: "시각 언어는 의도적으로 추상적입니다. 회사는 하나의 대시보드나 업무 흐름이 아니라 판단, 경계, 증거, 절제된 적응으로 설명됩니다."
    },
    operating: {
      eyebrow: "작업 방식",
      title: "작은 팀, 명확한 경계.",
      description: "참여 범위는 검증, 기록, 인수인계가 가능한 크기로 유지합니다. 제약에서 시작해 모델 적응, 평가, 배포, 지원으로 이동합니다."
    },
    stats: [
      { label: "초점", value: "로컬 AI" },
      { label: "방식", value: "고객 통제" },
      { label: "산출", value: "모델 산출물 + 증거" }
    ],
    principles: [
      { title: "모델보다 먼저 경계", description: "배포 위치, 데이터 이동, 접근 경로, 검토 기대치를 모델 작업 전에 정의합니다." },
      { title: "주장보다 먼저 증거", description: "학습 실행, 평가 동작, 배포 메모, 한계를 검토 가능한 상태로 남깁니다." },
      { title: "인수인계 가능한 지원", description: "결과는 고객의 엔지니어링, 보안, 운영 팀이 이해하고 이어받을 수 있어야 합니다." }
    ],
    ctaLabel: "회사 대화 시작하기"
  }
};

export const companyPhilosophyVisualItems: Localized<VisualItem[]> = {
  en: [
    { label: "Judgement", eyebrow: "Value 01", title: "Judgement under constraint", description: "A quiet city path stands in for technical decisions made inside real boundaries.", assetId: "home-hero-local-ai-boundary" },
    { label: "Boundary", eyebrow: "Value 02", title: "Architecture as boundary", description: "An institutional threshold describes controlled passage without reducing the brand to a diagram.", assetId: "contact-scoping-flow" },
    { label: "Evidence", eyebrow: "Value 03", title: "Memory and evidence", description: "A civic archive courtyard represents reviewable records without exposing customer material.", assetId: "work-case-wall" },
    { label: "Adaptation", eyebrow: "Value 04", title: "Disciplined adaptation", description: "A branching city plaza suggests careful navigation from private knowledge to operating model.", assetId: "services-support" }
  ],
  zh: [
    { label: "判断", eyebrow: "价值 01", title: "约束中的判断", description: "安静的城市路径隐喻真实边界中的技术判断。", assetId: "home-hero-local-ai-boundary" },
    { label: "边界", eyebrow: "价值 02", title: "作为边界的架构", description: "机构建筑的门槛表达受控通行，而不是把品牌降格成流程图。", assetId: "contact-scoping-flow" },
    { label: "证据", eyebrow: "价值 03", title: "记忆与证据", description: "公共档案庭院代表可评审记录，同时不暴露客户材料。", assetId: "work-case-wall" },
    { label: "适配", eyebrow: "价值 04", title: "克制的适配", description: "分岔的城市广场象征从私有知识到运营模型的谨慎导航。", assetId: "services-support" }
  ],
  ja: [
    { label: "判断", eyebrow: "価値 01", title: "制約下の判断", description: "静かな都市の道筋が、現実の境界内での技術判断を表します。", assetId: "home-hero-local-ai-boundary" },
    { label: "境界", eyebrow: "価値 02", title: "境界としてのアーキテクチャ", description: "機関建築のしきいが、ブランドを図解に還元せず制御された通過を表現します。", assetId: "contact-scoping-flow" },
    { label: "証拠", eyebrow: "価値 03", title: "記憶と証拠", description: "公共的なアーカイブ中庭で、顧客資料を出さずにレビュー可能な記録を表します。", assetId: "work-case-wall" },
    { label: "適応", eyebrow: "価値 04", title: "規律ある適応", description: "分岐する都市広場が、私的知識から運用モデルへの慎重な進路選択を示します。", assetId: "services-support" }
  ],
  ko: [
    { label: "판단", eyebrow: "가치 01", title: "제약 속 판단", description: "조용한 도시 경로는 실제 경계 안에서 이뤄지는 기술 결정을 상징합니다.", assetId: "home-hero-local-ai-boundary" },
    { label: "경계", eyebrow: "가치 02", title: "경계로서의 아키텍처", description: "기관 건축의 문턱은 브랜드를 도표로 낮추지 않고 통제된 통과를 표현합니다.", assetId: "contact-scoping-flow" },
    { label: "증거", eyebrow: "가치 03", title: "기억과 증거", description: "공공 아카이브 안뜰은 고객 자료를 드러내지 않는 검토 가능한 기록을 뜻합니다.", assetId: "work-case-wall" },
    { label: "적응", eyebrow: "가치 04", title: "절제된 적응", description: "갈라지는 도시 광장은 프라이빗 지식에서 운영 모델로 가는 신중한 길 찾기를 암시합니다.", assetId: "services-support" }
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
    hero: { eyebrow: "Contact", title: "Scope a private AI workflow.", description: "Tell us what data must stay controlled, where the system needs to run, and what workflow you want to support. We will help define the first practical step." },
    intake: { eyebrow: "Lead intake", title: "Scope a private AI workflow", description: "The first form collects categories and constraints only. If sensitive material is needed later, we agree on an appropriate review channel before anything is shared." },
    nextEyebrow: "What happens next",
    directEmail: "Direct email",
    steps: [
      { title: "Constraint review", description: "We identify data categories, deployment boundaries, access limits, and review requirements before discussing sensitive material." },
      { title: "Technical scoping call", description: "We map the target runtime, model task, evaluation needs, support model, and deployment environment." },
      { title: "Engagement proposal", description: "We define the dataset, adapter, evaluation, deployment, and support work required for a customer-controlled model workflow." }
    ]
  },
  zh: {
    hero: { eyebrow: "联系", title: "界定私有 AI 工作流。", description: "告诉我们哪些数据必须受控、系统需要在哪里运行、想支持什么工作流。我们会帮助定义第一个可执行步骤。" },
    intake: { eyebrow: "线索收集", title: "界定私有 AI 工作流", description: "首次表单只收集类别和约束。如果后续需要敏感材料，我们会在共享前约定合适的评审渠道。" },
    nextEyebrow: "后续流程",
    directEmail: "直接邮件",
    steps: [
      { title: "约束评审", description: "在讨论敏感材料前，我们先识别数据类别、部署边界、访问限制和评审要求。" },
      { title: "技术范围沟通", description: "我们映射目标运行时、模型任务、评估需求、支持模式和部署环境。" },
      { title: "合作建议", description: "我们定义客户控制模型工作流所需的数据集、适配器、评估、部署和支持工作。" }
    ]
  },
  ja: {
    hero: { eyebrow: "お問い合わせ", title: "プライベート AI ワークフローを相談する。", description: "どのデータを管理下に置く必要があるか、どこでシステムを動かすか、どのワークフローを支援したいかを共有してください。最初の実行可能な一歩を定義します。" },
    intake: { eyebrow: "初回受付", title: "プライベート AI ワークフローを相談する", description: "初回フォームではカテゴリと制約のみを収集します。後に機密資料が必要な場合、共有前に適切なレビュー経路を合意します。" },
    nextEyebrow: "次に起きること",
    directEmail: "直接メール",
    steps: [
      { title: "制約レビュー", description: "機密資料を議論する前に、データ分類、配備境界、アクセス制限、レビュー要件を確認します。" },
      { title: "技術スコーピング", description: "対象ランタイム、モデルタスク、評価要件、サポートモデル、配備環境を整理します。" },
      { title: "エンゲージメント提案", description: "顧客管理モデルワークフローに必要なデータセット、アダプター、評価、配備、サポート作業を定義します。" }
    ]
  },
  ko: {
    hero: { eyebrow: "문의", title: "프라이빗 AI 워크플로를 범위화합니다.", description: "통제되어야 하는 데이터, 시스템이 실행될 위치, 지원하려는 워크플로를 알려 주세요. 첫 번째 실질적 단계를 정의하도록 돕겠습니다." },
    intake: { eyebrow: "문의 접수", title: "프라이빗 AI 워크플로 범위화", description: "첫 양식은 범주와 제약만 수집합니다. 이후 민감 자료가 필요하면 공유 전에 적절한 검토 채널을 합의합니다." },
    nextEyebrow: "다음 단계",
    directEmail: "직접 이메일",
    steps: [
      { title: "제약 검토", description: "민감 자료 논의 전에 데이터 범주, 배포 경계, 접근 제한, 검토 요구사항을 식별합니다." },
      { title: "기술 범위 논의", description: "대상 런타임, 모델 작업, 평가 필요, 지원 모델, 배포 환경을 매핑합니다." },
      { title: "참여 제안", description: "고객 통제 모델 워크플로에 필요한 데이터셋, 어댑터, 평가, 배포, 지원 작업을 정의합니다." }
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
    { label: "数据集", eyebrow: "工件 01", title: "数据集包", description: "训练前形成带来源类别、转换、排除、拆分和评审说明的版本化包。", assetId: "services-dataset-package" },
    { label: "适配器", eyebrow: "工件 02", title: "LoRA 适配器与证据", description: "面向任务的适配器，包含训练配置、模型引用、评估背景和启用说明。", assetId: "services-lora-adapter" },
    { label: "融合模型", eyebrow: "工件 03", title: "融合模型", description: "当私有授权和部署条款要求时，交付面向客户控制环境的可部署模型工件。", assetId: "services-fused-model" },
    { label: "评估", eyebrow: "工件 04", title: "评估报告", description: "为工程和安全评审准备任务行为、回归、限制和下一轮证据。", assetId: "services-evaluation-report" }
  ],
  ja: [
    { label: "データセット", eyebrow: "成果物 01", title: "データセットパッケージ", description: "学習前にソース分類、変換、除外、分割、レビューメモを含むバージョン付きパッケージを作ります。", assetId: "services-dataset-package" },
    { label: "アダプター", eyebrow: "成果物 02", title: "LoRA アダプターと証拠", description: "学習設定、モデル参照、評価文脈、利用メモを含むタスク固有アダプターです。", assetId: "services-lora-adapter" },
    { label: "融合モデル", eyebrow: "成果物 03", title: "融合モデル", description: "私的ライセンスや配備条件が求める場合、顧客管理環境向けに配備可能なモデル成果物を作ります。", assetId: "services-fused-model" },
    { label: "評価", eyebrow: "成果物 04", title: "評価レポート", description: "エンジニアリングとセキュリティレビュー向けに、挙動、回帰、制限、次回証拠を準備します。", assetId: "services-evaluation-report" }
  ],
  ko: [
    { label: "데이터셋", eyebrow: "산출물 01", title: "데이터셋 패키지", description: "학습 전에 출처 범주, 변환, 제외, 분할, 검토 메모를 담은 버전 패키지를 만듭니다.", assetId: "services-dataset-package" },
    { label: "어댑터", eyebrow: "산출물 02", title: "LoRA 어댑터와 증거", description: "학습 구성, 모델 참조, 평가 맥락, 활성화 메모가 포함된 작업별 어댑터입니다.", assetId: "services-lora-adapter" },
    { label: "융합 모델", eyebrow: "산출물 03", title: "융합 모델", description: "프라이빗 라이선스와 배포 조건이 요구할 때 고객 통제 환경용 배포 가능 모델 산출물을 만듭니다.", assetId: "services-fused-model" },
    { label: "평가", eyebrow: "산출물 04", title: "평가 보고서", description: "엔지니어링과 보안 검토를 위해 작업 동작, 회귀, 한계, 다음 반복 증거를 준비합니다.", assetId: "services-evaluation-report" }
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
    hero: { eyebrow: "Open-source local AI runtime", title: "Local AI runtime for controlled workstations.", description: "Melix explores a local-first runtime for Apple Silicon: model loading, adapter workflows, evaluation loops, and operator-facing controls for private AI work." },
    workflow: { eyebrow: "Workflow", title: "One local loop from model to evidence.", description: "Register a model, start a local server, adapt it with LoRA, compare behavior, and keep evaluation evidence close to the work." },
    enterprise: { eyebrow: "Enterprise bridge", title: "When local model work becomes production work.", description: "Melix proves the local workflow. Random Walk extends that workflow into enterprise settings: private datasets, LoRA adapters, fused models, deployment runbooks, security review artifacts, and support." },
    repositoryEyebrow: "Repository metadata",
    repositoryDescription: "Local AI Toolkit: a native macOS application for local LLM chat, fine-tuning, and tool use.",
    repositoryStats: { stars: "Stars", forks: "Forks", lastUpdated: "Last updated" },
    evidence: { eyebrow: "Evidence", title: "Local AI needs evidence, not just output.", description: "" },
    taxonomy: ["Apple Silicon", "LoRA fine-tuning", "Local model serving", "Benchmarking", "Evaluation", "Native macOS UI", "CLI workflows"],
    sceneState: "Inspectable local model operation state."
  },
  zh: {
    hero: { eyebrow: "开源本地 AI 运行时", title: "面向受控工作站的本地 AI 运行时。", description: "Melix 探索 Apple Silicon 上的本地优先运行时：模型加载、适配器工作流、评估循环和面向操作者的私有 AI 控制。" },
    workflow: { eyebrow: "工作流", title: "从模型到证据的一条本地闭环。", description: "登记模型、启动本地服务、用 LoRA 适配、比较行为，并让评估证据留在工作流附近。" },
    enterprise: { eyebrow: "企业桥接", title: "当本地模型工作进入生产。", description: "Melix 验证本地工作流。Random Walk 将它扩展到企业场景：私有数据集、LoRA 适配器、融合模型、部署运行手册、安全评审材料和支持。" },
    repositoryEyebrow: "仓库元数据",
    repositoryDescription: "本地 AI 工具包：用于本地大模型对话、微调和工具调用的原生 macOS 应用。",
    repositoryStats: { stars: "星标", forks: "分叉", lastUpdated: "最后更新" },
    evidence: { eyebrow: "证据", title: "本地 AI 需要证据，而不只是输出。", description: "" },
    taxonomy: ["Apple Silicon", "LoRA 微调", "本地模型服务", "基准测试", "评估", "原生 macOS UI", "CLI 工作流"],
    sceneState: "可检查的本地模型运行状态。"
  },
  ja: {
    hero: { eyebrow: "オープンソースのローカル AI ランタイム", title: "管理されたワークステーション向けローカル AI ランタイム。", description: "Melix は Apple Silicon 向けに、モデルロード、アダプターワークフロー、評価ループ、運用者向け制御を含むローカルファーストランタイムを探ります。" },
    workflow: { eyebrow: "ワークフロー", title: "モデルから証拠までのローカルループ。", description: "モデルを登録し、ローカルサーバーを起動し、LoRA で適応し、挙動を比較し、評価証拠を作業の近くに残します。" },
    enterprise: { eyebrow: "企業への橋渡し", title: "ローカルモデル作業が本番運用になるとき。", description: "Melix はローカルワークフローを検証します。Random Walk はそれを、プライベートデータセット、LoRA アダプター、融合モデル、配備ランブック、セキュリティレビュー資料、サポートへ拡張します。" },
    repositoryEyebrow: "リポジトリメタデータ",
    repositoryDescription: "ローカル大規模言語モデルのチャット、微調整、ツール利用のためのネイティブ macOS アプリケーションです。",
    repositoryStats: { stars: "スター", forks: "フォーク", lastUpdated: "最終更新" },
    evidence: { eyebrow: "証拠", title: "ローカル AI には出力だけでなく証拠が必要です。", description: "" },
    taxonomy: ["Apple Silicon", "LoRA 微調整", "ローカルモデルサービング", "ベンチマーク", "評価", "ネイティブ macOS UI", "CLI ワークフロー"],
    sceneState: "検査可能なローカルモデル運用状態。"
  },
  ko: {
    hero: { eyebrow: "오픈소스 로컬 AI 런타임", title: "통제된 워크스테이션을 위한 로컬 AI 런타임.", description: "Melix는 Apple Silicon에서 모델 로딩, 어댑터 워크플로, 평가 루프, 운영자용 제어를 포함한 로컬 우선 런타임을 탐색합니다." },
    workflow: { eyebrow: "워크플로", title: "모델에서 증거까지 이어지는 로컬 루프.", description: "모델을 등록하고 로컬 서버를 시작하고 LoRA로 적응시키고 동작을 비교하며 평가 증거를 작업 가까이에 둡니다." },
    enterprise: { eyebrow: "엔터프라이즈 연결", title: "로컬 모델 작업이 프로덕션 작업이 될 때.", description: "Melix는 로컬 워크플로를 검증합니다. Random Walk는 이를 프라이빗 데이터셋, LoRA 어댑터, 융합 모델, 배포 런북, 보안 검토 자료, 지원으로 확장합니다." },
    repositoryEyebrow: "저장소 메타데이터",
    repositoryDescription: "로컬 대규모 언어 모델 채팅, 파인튜닝, 도구 사용을 위한 네이티브 macOS 애플리케이션입니다.",
    repositoryStats: { stars: "스타", forks: "포크", lastUpdated: "마지막 업데이트" },
    evidence: { eyebrow: "증거", title: "로컬 AI에는 출력뿐 아니라 증거가 필요합니다.", description: "" },
    taxonomy: ["Apple Silicon", "LoRA 파인튜닝", "로컬 모델 서빙", "벤치마킹", "평가", "네이티브 macOS UI", "CLI 워크플로"],
    sceneState: "검사 가능한 로컬 모델 운영 상태."
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
    { label: "登记", eyebrow: "Melix 场景", title: "模型登记", description: "在服务或适配模型前，跟踪本地模型、引用和运行状态。", assetId: "melix-scene-composite" },
    { label: "服务", eyebrow: "Melix 场景", title: "本地服务", description: "让模型服务靠近开发者和数据边界，而不是依赖远程 API。", assetId: "services-deployment-runbook" },
    { label: "训练", eyebrow: "Melix 场景", title: "LoRA 训练", description: "用受控数据集包适配本地模型，并保留训练运行背景。", assetId: "services-lora-adapter" },
    { label: "基准", eyebrow: "Melix 场景", title: "基准矩阵", description: "在决定模型工件前比较行为和性能。", assetId: "services-evaluation-report" },
    { label: "证据", eyebrow: "Melix 场景", title: "评估证据", description: "让任务结果、限制和评审材料靠近模型工作流。", assetId: "security-evidence-dashboard" }
  ],
  ja: [
    { label: "登録", eyebrow: "Melix シーン", title: "モデルレジストリ", description: "モデルをサーブまたは適応する前に、ローカルモデル、参照、運用状態を追跡します。", assetId: "melix-scene-composite" },
    { label: "サーバー", eyebrow: "Melix シーン", title: "ローカルサーバー", description: "リモート API に依存せず、開発者とデータ境界の近くでモデルサービスを実行します。", assetId: "services-deployment-runbook" },
    { label: "学習", eyebrow: "Melix シーン", title: "LoRA 学習", description: "制御されたデータセットパッケージでローカルモデルを適応し、学習文脈を残します。", assetId: "services-lora-adapter" },
    { label: "ベンチマーク", eyebrow: "Melix シーン", title: "ベンチマーク行列", description: "次に進めるモデル成果物を決める前に、挙動と性能を比較します。", assetId: "services-evaluation-report" },
    { label: "証拠", eyebrow: "Melix シーン", title: "評価証拠", description: "タスク結果、制限、レビュー資料をモデルワークフローの近くに残します。", assetId: "security-evidence-dashboard" }
  ],
  ko: [
    { label: "레지스트리", eyebrow: "Melix 장면", title: "모델 레지스트리", description: "모델을 서빙하거나 적응시키기 전에 로컬 모델, 참조, 운영 상태를 추적합니다.", assetId: "melix-scene-composite" },
    { label: "서버", eyebrow: "Melix 장면", title: "로컬 서버", description: "원격 API에 의존하지 않고 개발자와 데이터 경계 가까이에서 모델 서비스를 실행합니다.", assetId: "services-deployment-runbook" },
    { label: "학습", eyebrow: "Melix 장면", title: "LoRA 학습", description: "통제된 데이터셋 패키지로 로컬 모델을 적응시키고 학습 실행 맥락을 보존합니다.", assetId: "services-lora-adapter" },
    { label: "벤치마크", eyebrow: "Melix 장면", title: "벤치마크 매트릭스", description: "어떤 모델 산출물을 다음 단계로 보낼지 결정하기 전에 동작과 성능을 비교합니다.", assetId: "services-evaluation-report" },
    { label: "증거", eyebrow: "Melix 장면", title: "평가 증거", description: "작업 결과, 한계, 검토 자료를 모델 워크플로 가까이에 둡니다.", assetId: "security-evidence-dashboard" }
  ]
};

export const workStatusLabels: Localized<Record<string, string>> = {
  en: {
    placeholder: "example pattern · public material pending approval",
    public: "public",
    anonymized: "anonymized"
  },
  zh: {
    placeholder: "示例模式 · 公开材料待批准",
    public: "公开",
    anonymized: "匿名"
  },
  ja: {
    placeholder: "例示パターン · 公開資料は承認待ち",
    public: "公開",
    anonymized: "匿名化"
  },
  ko: {
    placeholder: "예시 패턴 · 공개 자료 승인 대기",
    public: "공개",
    anonymized: "익명화"
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
    hero: { eyebrow: "Work", title: "Applied work in private AI systems.", description: "Selected examples of how we approach dataset preparation, model adaptation, evaluation, deployment planning, and workflow design for controlled environments." },
    featured: { eyebrow: "Featured work", title: "", description: "" },
    melixFeature: { eyebrow: "Open-source reference", title: "Melix: local model operations for Apple Silicon.", description: "Melix shows how local model work can be registered, served, adapted, evaluated, and reviewed on Apple Silicon." },
    sayitFeature: { eyebrow: "Case study", title: "SayIt: local speech input without cloud transcription.", description: "SayIt demonstrates how local speech input can become a private product workflow without relying on cloud transcription." },
    examples: { eyebrow: "Example engagements", title: "Example private AI engagements.", description: "These examples describe common engagement patterns. Customer names, metrics, and internal materials are shown only after approval." },
    heritage: { eyebrow: "Technical heritage", title: "A systems background, now focused on private AI.", description: "" },
    deliverablesLabel: "Deliverables",
    detailLabels: { status: "STATUS", deployment: "DEPLOYMENT", disclosure: "DISCLOSURE", disclosureBody: "No customer name, metric, logo, or internal material shown." }
  },
  zh: {
    hero: { eyebrow: "案例", title: "私有 AI 系统中的应用工作。", description: "展示我们如何在受控环境中处理数据集准备、模型适配、评估、部署规划和工作流设计。" },
    featured: { eyebrow: "精选工作", title: "", description: "" },
    melixFeature: { eyebrow: "开源参考", title: "Melix：Apple Silicon 上的本地模型运营。", description: "Melix 展示本地模型工作如何在 Apple Silicon 上登记、服务、适配、评估和评审。" },
    sayitFeature: { eyebrow: "案例研究", title: "SayIt：无需云端转写的本地语音输入。", description: "SayIt 展示本地语音输入如何在不依赖云端转写的情况下成为私有产品工作流。" },
    examples: { eyebrow: "示例项目", title: "私有 AI 项目示例。", description: "这些示例描述常见合作模式。客户名称、指标和内部材料只会在批准后展示。" },
    heritage: { eyebrow: "技术积累", title: "系统背景，现在聚焦私有 AI。", description: "" },
    deliverablesLabel: "交付物",
    detailLabels: { status: "状态", deployment: "部署", disclosure: "披露", disclosureBody: "不展示客户名称、指标、标志或内部材料。" }
  },
  ja: {
    hero: { eyebrow: "実績", title: "プライベート AI システムでの応用作業。", description: "制御された環境におけるデータセット準備、モデル適応、評価、配備計画、ワークフロー設計への取り組み例です。" },
    featured: { eyebrow: "注目の作業", title: "", description: "" },
    melixFeature: { eyebrow: "オープンソース参照", title: "Melix：Apple Silicon 上のローカルモデル運用。", description: "Melix は Apple Silicon 上でローカルモデルを登録、サーブ、適応、評価、レビューする流れを示します。" },
    sayitFeature: { eyebrow: "ケーススタディ", title: "SayIt：クラウド転写なしのローカル音声入力。", description: "SayIt は、クラウド転写に依存せずローカル音声入力をプライベートな製品ワークフローにする方法を示します。" },
    examples: { eyebrow: "エンゲージメント例", title: "プライベート AI のエンゲージメント例。", description: "これらは一般的なエンゲージメントパターンです。顧客名、指標、内部資料は承認後にのみ表示します。" },
    heritage: { eyebrow: "技術的背景", title: "システムの経験を、プライベート AI に集中させる。", description: "" },
    deliverablesLabel: "成果物",
    detailLabels: { status: "状態", deployment: "配備", disclosure: "開示", disclosureBody: "顧客名、指標、ロゴ、内部資料は表示していません。" }
  },
  ko: {
    hero: { eyebrow: "사례", title: "프라이빗 AI 시스템에 적용한 작업.", description: "통제된 환경에서 데이터셋 준비, 모델 적응, 평가, 배포 계획, 워크플로 설계를 어떻게 접근하는지 보여주는 예시입니다." },
    featured: { eyebrow: "주요 작업", title: "", description: "" },
    melixFeature: { eyebrow: "오픈소스 참고", title: "Melix: Apple Silicon 로컬 모델 운영.", description: "Melix는 Apple Silicon에서 로컬 모델 작업을 등록, 서빙, 적응, 평가, 검토하는 방식을 보여줍니다." },
    sayitFeature: { eyebrow: "사례 연구", title: "SayIt: 클라우드 전사 없는 로컬 음성 입력.", description: "SayIt은 클라우드 전사에 의존하지 않고 로컬 음성 입력을 프라이빗 제품 워크플로로 만드는 방식을 보여줍니다." },
    examples: { eyebrow: "예시 프로젝트", title: "프라이빗 AI 프로젝트 예시.", description: "이 예시는 일반적인 참여 패턴을 설명합니다. 고객명, 지표, 내부 자료는 승인 후에만 표시합니다." },
    heritage: { eyebrow: "기술 기반", title: "시스템 경험을 이제 프라이빗 AI에 집중합니다.", description: "" },
    deliverablesLabel: "산출물",
    detailLabels: { status: "상태", deployment: "배포", disclosure: "공개 범위", disclosureBody: "고객명, 지표, 로고, 내부 자료는 표시하지 않습니다." }
  }
};

export const notesPageCopy: Localized<{
  hero: PageCopy;
  topicsEyebrow: string;
  topics: string[];
  moreNotes: string;
  detailLabels: { type: string; topic: string; boundary: string; technicalNote: string; customerBoundary: string };
}> = {
  en: {
    hero: { eyebrow: "Notes", title: "Notes on local AI infrastructure.", description: "Research notes and implementation perspectives on local-first AI, model workflows, evaluation, deployment boundaries, and operational design." },
    topicsEyebrow: "Topic index",
    topics: ["Evaluation evidence", "Deployment boundaries", "Local model workflows", "Adapter review"],
    moreNotes: "More public notes are published as reviewable material is approved.",
    detailLabels: { type: "TYPE", topic: "TOPIC", boundary: "BOUNDARY", technicalNote: "Technical note", customerBoundary: "Customer-controlled environment" }
  },
  zh: {
    hero: { eyebrow: "笔记", title: "关于本地 AI 基础设施的笔记。", description: "关于本地优先 AI、模型工作流、评估、部署边界和运营设计的研究笔记与实施观点。" },
    topicsEyebrow: "主题索引",
    topics: ["评估证据", "部署边界", "本地模型工作流", "适配器评审"],
    moreNotes: "更多公开笔记会在材料可评审并获批后发布。",
    detailLabels: { type: "类型", topic: "主题", boundary: "边界", technicalNote: "技术笔记", customerBoundary: "客户控制环境" }
  },
  ja: {
    hero: { eyebrow: "ノート", title: "ローカル AI 基盤に関するノート。", description: "ローカルファースト AI、モデルワークフロー、評価、配備境界、運用設計に関するリサーチノートと実装視点です。" },
    topicsEyebrow: "トピック索引",
    topics: ["評価証拠", "配備境界", "ローカルモデルワークフロー", "アダプターレビュー"],
    moreNotes: "レビュー可能な資料が承認され次第、公開ノートを追加します。",
    detailLabels: { type: "種別", topic: "トピック", boundary: "境界", technicalNote: "技術ノート", customerBoundary: "顧客管理環境" }
  },
  ko: {
    hero: { eyebrow: "노트", title: "로컬 AI 인프라 노트.", description: "로컬 우선 AI, 모델 워크플로, 평가, 배포 경계, 운영 설계에 관한 리서치 노트와 구현 관점입니다." },
    topicsEyebrow: "주제 색인",
    topics: ["평가 증거", "배포 경계", "로컬 모델 워크플로", "어댑터 검토"],
    moreNotes: "검토 가능한 자료가 승인되면 더 많은 공개 노트를 게시합니다.",
    detailLabels: { type: "유형", topic: "주제", boundary: "경계", technicalNote: "기술 노트", customerBoundary: "고객 통제 환경" }
  }
};

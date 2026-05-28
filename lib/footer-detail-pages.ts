import type { Locale } from "@/lib/i18n";
import type { VisualAssetId } from "@/lib/visual-assets";

export type DetailLink = {
  label: string;
  href: string;
};

export type DetailSection = {
  eyebrow?: string;
  title: string;
  description: string;
  points: string[];
  assetId?: VisualAssetId;
};

export type DetailPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  taxonomy: string[];
  assetId: VisualAssetId;
  statusTag?: string;
  technicalSchema?: Array<{
    label: string;
    value: string;
  }>;
  officialLink?: DetailLink;
  primaryLink?: DetailLink;
  secondaryLink?: DetailLink;
  outputsAtGlance?: Array<{
    label: string;
    description: string;
  }>;
  sections: DetailSection[];
  notice: string;
  closing?: {
    title: string;
    description: string;
    fit: string[];
    notFit: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
};

export const serviceDetailSlugs = ["ai-ml", "data-platform", "it-architecture", "privacy-data", "sovereign-infrastructure"] as const;
export type ServiceDetailSlug = (typeof serviceDetailSlugs)[number];

export const creationDetailSlugs = ["melix", "1-tok", "fiber-link", "neuron", "utxo-data", "distributed-paradigm"] as const;
export type CreationDetailSlug = (typeof creationDetailSlugs)[number];

export const resourceDetailSlugs = ["repository-metadata", "engagement-patterns"] as const;
export type ResourceDetailSlug = (typeof resourceDetailSlugs)[number];

export const legalDetailSlugs = ["responsible-use", "security-review"] as const;
export type LegalDetailSlug = (typeof legalDetailSlugs)[number];

export const standaloneDetailSlugs = ["articles", "philosophy"] as const;
export type StandaloneDetailSlug = (typeof standaloneDetailSlugs)[number];

type DetailCollection<T extends string> = Record<Locale, Record<T, DetailPageCopy>>;

export function getDetailPage<T extends string>(collection: DetailCollection<T>, locale: Locale, slug: string) {
  return collection[locale][slug as T] ?? null;
}

export const serviceDetailPages: DetailCollection<ServiceDetailSlug> = {
  en: {
    "ai-ml": {
      eyebrow: "AI / ML Adaptation",
      title: "Model adaptation for private workflows.",
      description: "We adapt models around a defined task, then deliver usable artifacts, evaluation evidence, and activation notes for controlled deployment.",
      taxonomy: ["task boundaries", "dataset package", "LoRA adapters", "fused artifacts", "evaluation evidence"],
      assetId: "services-lora-adapter",
      primaryLink: { label: "Scope a 私有 AI 项目", href: "/contact" },
      secondaryLink: { label: "View service overview", href: "/services" },
      outputsAtGlance: [
        { label: "Dataset package", description: "Structured examples with source notes and review splits." },
        { label: "Adapter or artifact", description: "LoRA adapter or fused artifact for deployment needs." },
        { label: "Training run record", description: "Configuration, assumptions, run notes, and reproducibility context." },
        { label: "Evaluation evidence", description: "Task checks, regression cases, failures, and limits." },
        { label: "Activation runbook", description: "Loading, rollback, versioning, and handoff notes." }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "When this service fits",
          description: "Best for teams with a real workflow, usable examples, and private deployment constraints.",
          points: ["Known workflow needing better model behavior", "Repeatable inputs and expected outputs", "Sensitive data or controlled deployment needs", "Implementation help beyond model selection"]
        },
        {
          eyebrow: "Boundary",
          title: "Task boundary and data package",
          description: "Adaptation starts by defining behavior, examples, exclusions, and evaluation material before any training run.",
          points: ["Target behavior and failure modes", "Input and output rules", "Allowed and excluded data sources", "Train, validation, and test split"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Artifact",
          title: "Adapter and artifact delivery",
          description: "We prepare the adaptation artifact around the deployment path, not as an isolated experiment.",
          points: ["LoRA adapter when appropriate", "Fused artifact when required", "Configuration and run record", "Activation notes for operators"],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Evidence",
          title: "Empirical evaluation and limits",
          description: "The delivery includes task evidence, regression checks, and known limits for customer review.",
          points: ["Task-specific evaluation examples", "Regression checks across versions", "Failure and edge-case notes", "Customer review loop included"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime and deployment boundary",
          description: "Adapted artifacts are prepared for the customer's actual operating boundary and handoff model.",
          points: ["Local workstation or on-prem GPU", "Private cloud or VPC context", "Air-gapped constraints when required", "Loading, rollback, and versioning"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Patterns",
          title: "Example engagement patterns",
          description: "Typical work centers on constrained model behavior inside existing professional workflows.",
          points: ["Domain summarization with approved examples", "Internal review routing or classification", "Structured professional document drafting", "Existing local model evaluation"]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "A concrete package for technical review, controlled activation, and future maintenance decisions.",
          points: ["Dataset package with provenance notes", "Adapter or fused model artifact", "Training configuration and run record", "Evaluation report and activation runbook"]
        }
      ],
      notice: "Best for teams that already know the workflow they want to improve, but need a private model path.",
      closing: {
        title: "Bring the workflow, not a buzzword.",
        description: "We scope adaptation from your task, examples, operating boundary, and review criteria.",
        fit: [
          "You can show representative inputs and outputs.",
          "The workflow needs private or controlled deployment.",
          "Your team wants direct technical implementation support."
        ],
        notFit: [
          "You only need generic chatbot exploration.",
          "You expect guaranteed accuracy or compliance certification.",
          "You need foundation model research from scratch."
        ],
        ctaTitle: "Scope a private AI adaptation",
        ctaDescription: "Share the workflow, examples, deployment boundary, and current model or runtime constraints."
      }
    },
    "data-platform": {
      eyebrow: "Data Platform",
      title: "Private data packages for model work.",
      description: "We shape internal material into bounded, reviewable data packages for adaptation, retrieval, evaluation, and local product workflows.",
      taxonomy: ["source register", "dataset manifest", "reviewed package shape", "preprocessing notes", "handoff constraints"],
      assetId: "services-dataset-package",
      primaryLink: { label: "Scope a data package", href: "/contact" },
      secondaryLink: { label: "View service overview", href: "/services" },
      outputsAtGlance: [
        { label: "Source register", description: "Allowed, excluded, and restricted source categories." },
        { label: "Dataset manifest", description: "Package identity, source notes, versions, and processing context." },
        { label: "Reviewed package shape", description: "Training split, retrieval corpus, evaluation set, or product inputs." },
        { label: "Review notes", description: "Transformation notes, exclusions, gaps, and review checkpoints." },
        { label: "Handoff constraints", description: "Access path, loading assumptions, updates, and next steps." }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "When this service fits",
          description: "Best for teams with useful internal material, known model use, and controlled working boundaries.",
          points: ["Internal material is not model-ready", "Intended model use is identifiable", "Reviewability matters before model use", "Implementation support is needed"]
        },
        {
          eyebrow: "Inventory",
          title: "Source inventory and boundaries",
          description: "We define what may enter the package before material is moved, copied, transformed, or reviewed.",
          points: ["Allowed source categories", "Excluded or restricted material", "Access and movement paths", "Retention and deletion assumptions"],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "Manifest",
          title: "Package structure and manifest",
          description: "The core output is a structured package with identity, source context, and reviewable organization.",
          points: ["Schema or folder structure", "Source and version notes", "Processing assumptions", "Package identity and boundaries"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Preprocessing and review notes",
          description: "Transformations are recorded so customers can inspect what changed, what stayed out, and why.",
          points: ["Cleaning and normalization notes", "Deduplication or chunking choices", "Redaction or exclusion notes", "Known gaps and unresolved material"],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Paths",
          title: "Use-case package paths",
          description: "Different model workflows need different package shapes, review material, and downstream assumptions.",
          points: ["Adaptation dataset for fine-tuning", "Retrieval corpus for local RAG", "Evaluation set for regression checks", "Structured local product inputs"]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "The delivery package is designed for technical review, controlled use, and future maintenance decisions.",
          points: ["Source register", "Dataset manifest", "Package structure notes", "Review notes and handoff constraints"]
        },
        {
          eyebrow: "Handoff",
          title: "Handoff and operational constraints",
          description: "We prepare the package for the customer-defined environment, access path, and next model workflow.",
          points: ["Movement register and transfer notes", "Loading assumptions for downstream tools", "Versioning and update expectations", "Customer review remains explicit"],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Patterns",
          title: "Example package patterns",
          description: "Typical packages support constrained model work rather than general analytics or warehouse migration.",
          points: ["Internal document corpus for retrieval", "Domain examples for adaptation", "Evaluation set for local models", "Studio asset metadata package"]
        }
      ],
      notice: "This page is about data preparation structure, not a claim that every dataset can be used safely without customer review.",
      closing: {
        title: "Package the material before model work.",
        description: "Bring source categories, intended model use, examples, boundaries, and review expectations.",
        fit: [
          "You know the material and intended model path.",
          "The package must remain reviewable and bounded.",
          "Your team needs implementation support, not tooling sprawl."
        ],
        notFit: [
          "You need BI, dashboards, or warehouse migration.",
          "You expect automatic legal or security clearance.",
          "You want unmanaged bulk data ingestion."
        ],
        ctaTitle: "Scope a private data package",
        ctaDescription: "Share the source categories, model workflow, environment constraints, and review responsibilities."
      }
    },
    "it-architecture": {
      eyebrow: "IT Architecture",
      title: "AI infrastructure your team can operate.",
      description: "We design runtime shape, access paths, deployment assumptions, diagnostics, and rollback notes around your real operating environment.",
      taxonomy: ["runtime topology", "access path", "deployment shape", "hardware diagnostics", "rollback notes"],
      assetId: "services-deployment-runbook",
      primaryLink: { label: "Discuss architecture", href: "/contact" },
      secondaryLink: { label: "View security model", href: "/security" },
      outputsAtGlance: [
        { label: "Runtime topology", description: "Where models, jobs, and supporting services run." },
        { label: "Access path", description: "Operator entry points, network assumptions, and admin surfaces." },
        { label: "Deployment assumptions", description: "Hardware, environment, runtime, and maintenance constraints." },
        { label: "Diagnostics notes", description: "Capacity, VRAM, queue latency, process health, and logs." },
        { label: "Operator runbook", description: "Install, activation, recovery, rollback, and handoff notes." }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "When this service fits",
          description: "Best for teams moving private model workflows from experiments into operable environments.",
          points: ["Defined model workflow boundary", "Known deployment target or constraint", "Operator access needs explicit design", "Rollback and recovery matter"]
        },
        {
          eyebrow: "Environment",
          title: "Environment and deployment shape",
          description: "Architecture follows the customer environment, not a default platform template.",
          points: ["Apple Silicon or local workstation", "On-prem GPU or internal server", "Private cloud or VPC context", "Restricted network assumptions"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime topology and model path",
          description: "We define where models run, how artifacts load, and how data reaches the workflow.",
          points: ["Runtime location and responsibility", "Model or adapter loading path", "Data package or retrieval access", "Update path for artifacts"],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Access",
          title: "Access path and operator surface",
          description: "Operator routes, admin actions, and sensitive surfaces are made explicit before implementation.",
          points: ["Identity and role assumptions", "Network entry path", "Admin surface and operator actions", "Secrets handling assumptions"],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Diagnostics",
          title: "Hardware diagnostics and rollback",
          description: "Operability work covers modest signals, likely failures, and recovery paths for first deployment.",
          points: ["Hardware capacity and VRAM", "Queue latency and process health", "Log collection assumptions", "Rollback and recovery notes"],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Support",
          title: "Implementation support model",
          description: "We work directly with the customer team through architecture, first deployment, and handoff.",
          points: ["Architecture pass before implementation", "Remote or on-site support", "Customer review and handoff", "Follow-up changes scoped separately"]
        },
        {
          eyebrow: "Patterns",
          title: "Example architecture patterns",
          description: "Typical patterns are private model environments, not generic IT outsourcing or cloud migration.",
          points: ["Local AI workstation", "On-prem GPU runtime", "Private VPC model service", "Restricted evaluation environment"]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "The output is a practical architecture package for review, implementation, and customer-side operation.",
          points: ["Architecture brief", "Runtime topology", "Access and deployment assumptions", "Diagnostics and rollback notes"]
        }
      ],
      notice: "Architecture work is scoped with the customer team before implementation begins.",
      closing: {
        title: "Design the operating boundary.",
        description: "Bring the model workflow, target environment, access constraints, hardware context, and support expectations.",
        fit: [
          "You need a private model workflow deployed.",
          "Your team will own or co-own operation.",
          "Access, diagnostics, and rollback need design."
        ],
        notFit: [
          "You need helpdesk or generic MSP support.",
          "You expect guaranteed security or compliance outcomes.",
          "You want a SaaS control-plane product."
        ],
        ctaTitle: "Discuss private AI architecture",
        ctaDescription: "Share the workflow, environment, access path, hardware constraints, and deployment timeline."
      }
    },
    "privacy-data": {
      eyebrow: "Privacy Data",
      title: "Data boundaries before model work.",
      description: "We define what customer material can be touched, moved, transformed, retained, or excluded before AI implementation begins.",
      taxonomy: ["privacy boundary", "access assumptions", "movement path", "retention notes", "review responsibility"],
      assetId: "services-hero-private-data",
      primaryLink: { label: "Review data boundaries", href: "/contact" },
      secondaryLink: { label: "Responsible use", href: "/legal/responsible-use" },
      outputsAtGlance: [
        { label: "Boundary brief", description: "Practical scope for allowed handling before implementation." },
        { label: "Classification notes", description: "Allowed, restricted, excluded, and ambiguous material." },
        { label: "Access assumptions", description: "Customer, Random Walk, operator, and admin access." },
        { label: "Movement limits", description: "Permitted paths, working copies, caches, and transformations." },
        { label: "Retention notes", description: "Deletion, return, exclusion, and review expectations." }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "When this service fits",
          description: "Best before customer material enters adaptation, retrieval, evaluation, or deployment work.",
          points: ["Customer material may enter AI workflows", "Handling rules need definition", "Sensitive or restricted sources exist", "Engineering support is needed"]
        },
        {
          eyebrow: "Classify",
          title: "Material classification",
          description: "We separate usable, restricted, excluded, and ambiguous material before technical work begins.",
          points: ["Allowed source categories", "Restricted source categories", "Excluded source categories", "Review owner for ambiguous material"],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Access",
          title: "Access and operator boundaries",
          description: "Access assumptions are made explicit for customer teams, Random Walk, operators, and admin surfaces.",
          points: ["Customer access assumptions", "Random Walk access assumptions", "Operator roles and admin surfaces", "Credential handling assumptions"],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Movement",
          title: "Movement and processing boundaries",
          description: "We define how material may be copied, staged, transformed, or used during model work.",
          points: ["Allowed movement paths", "Scoped project environments", "Temporary working copies and caches", "Training and retrieval handling limits"],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Retention",
          title: "Exclusion, retention, and deletion",
          description: "Retention expectations cover kept-out material, intermediate artifacts, derived files, and return or deletion paths.",
          points: ["Material kept outside workflows", "Retention period assumptions", "Intermediate artifact expectations", "Deletion or return expectations"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Boundary review notes",
          description: "Review notes document handling assumptions, exceptions, and customer decisions without replacing advisor judgment.",
          points: ["Boundary checklist before implementation", "Customer review checkpoints", "Exception and exclusion notes", "Advisor decisions recorded separately"]
        },
        {
          eyebrow: "Patterns",
          title: "Use-case boundary patterns",
          description: "Boundary work is shaped around the intended model workflow, not generic privacy policy.",
          points: ["Dataset preparation boundary", "Retrieval corpus boundary", "Evaluation set boundary", "Local runtime boundary"]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "The output is a practical boundary package for technical scoping and customer-side review.",
          points: ["Boundary brief", "Source classification notes", "Access and movement assumptions", "Retention and review notes"]
        }
      ],
      notice: "Random Walk provides engineering support; formal legal and regulatory decisions remain with the customer and qualified advisors.",
      closing: {
        title: "Decide boundaries before handling material.",
        description: "Bring source categories, intended model use, access expectations, retention requirements, and advisor review responsibilities.",
        fit: [
          "You need boundaries before model work begins.",
          "Your material needs customer-side review first.",
          "Engineering choices depend on handling limits."
        ],
        notFit: [
          "You need legal or compliance advice.",
          "You expect formal compliance sign-off.",
          "You want automatic clearance for training data."
        ],
        ctaTitle: "Review private data boundaries",
        ctaDescription: "Share source categories, intended model workflow, access expectations, and review responsibilities."
      }
    },
    "sovereign-infrastructure": {
      eyebrow: "Sovereign Infrastructure",
      title: "AI inside customer-controlled boundaries.",
      description: "We build private AI systems for scoped operating environments where runtime, data packages, model artifacts, access paths, and rollback procedures stay under customer-defined control.",
      taxonomy: ["customer VPC", "private cloud", "on-prem GPU", "air-gapped", "edge runtime"],
      assetId: "security-boundary-model",
      primaryLink: { label: "Scope a private infrastructure path", href: "/contact" },
      secondaryLink: { label: "View service overview", href: "/services" },
      outputsAtGlance: [
        { label: "Boundary brief", description: "A practical definition of what stays inside the customer-controlled environment." },
        { label: "Deployment topology", description: "Runtime placement, hardware assumptions, network path, and operating constraints." },
        { label: "Runtime package", description: "Model artifacts, runtime config, dependencies, and activation notes." },
        { label: "Access assumptions", description: "Who can reach what, how artifacts move, and where temporary files may exist." },
        { label: "Runbook notes", description: "Operator steps, debug logs, recovery assumptions, and rollback paths." }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "When this service fits",
          description: "Best for teams with a defined AI workflow that must run inside a customer-controlled deployment boundary.",
          points: ["Private AI workflow already identified", "Customer-defined infrastructure boundary required", "Data or artifacts cannot use generic SaaS", "Direct implementation support is needed"]
        },
        {
          eyebrow: "Boundary",
          title: "Choose the operating boundary",
          description: "We shape deployment around the customer environment instead of forcing every workflow into one hosted pattern.",
          points: ["Local workstation or Apple Silicon", "On-prem GPU or internal server", "Customer VPC or private cloud", "Restricted network or edge site"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "Package the runtime path",
          description: "We prepare the runtime, model artifacts, dependencies, and activation notes for the selected private deployment boundary.",
          points: ["Model artifact and adapter placement", "Runtime config and dependency notes", "Quantization and VRAM budget assumptions", "Version and update constraints"],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Operation",
          title: "Operate inside the environment",
          description: "The system is designed with operator paths, diagnostics, local logs, and rollback assumptions from the first deployment pass.",
          points: ["Operator path and admin surface", "Hardware capacity and VRAM checks", "Runtime debug logs and process health", "Rollback path for model changes"],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "Control movement and retention",
          description: "We define how data packages, model artifacts, checkpoints, caches, and temporary files move through the scoped environment.",
          points: ["Artifact and data movement paths", "Scratch disks and temporary compilation files", "Fine-tuning checkpoints and cache locations", "Return, deletion, and retention expectations"],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Patterns",
          title: "Deployment patterns we support",
          description: "Typical patterns are private model environments, not generic cloud migration or managed SaaS control planes.",
          points: ["Local AI workstation for studios", "On-prem GPU inference runtime", "Private VPC model service", "Restricted evaluation environment"]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "The engagement produces concrete infrastructure material for technical review, implementation, handoff, and scoped future changes.",
          points: ["Boundary and environment brief", "Runtime topology and package contents", "Access, movement, and retention assumptions", "Runbook, diagnostics, and rollback notes"]
        },
        {
          eyebrow: "Support",
          title: "Direct implementation support",
          description: "Random Walk works directly with the customer team to land the first private AI deployment path.",
          points: ["Architecture pass before implementation", "Remote or on-site support", "First deployment stabilization", "Follow-up changes scoped separately"]
        }
      ],
      notice: "Sovereign here means customer-controlled engineering boundaries, not a legal or government claim.",
      closing: {
        title: "Build inside the boundary.",
        description: "Bring the workflow, target environment, model artifacts, data movement limits, hardware constraints, and operator expectations.",
        fit: [
          "You need AI workflows inside customer-controlled environments.",
          "Your team has a defined workflow and deployment boundary.",
          "You need direct engineering support to land the system."
        ],
        notFit: [
          "You need legal or government sovereignty determinations.",
          "You want generic hosted SaaS AI deployment.",
          "You expect guaranteed security, compliance, or unsupported operation."
        ],
        ctaTitle: "Scope a customer-controlled AI deployment",
        ctaDescription: "Share the workflow, environment, runtime target, data movement limits, and operating responsibilities."
      }
    }
  },
  zh: {
    "ai-ml": {
      eyebrow: "AI / ML Adaptation",
      title: "面向私有工作流的模型适配。",
      description: "我们围绕已定义的任务来 适配模型，然后交付可用 工件、评估证据 与 启用说明，用于受控 部署。",
      taxonomy: [
        "task 边界",
        "dataset package",
        "LoRA 适配器",
        "fused 工件",
        "评估证据"
      ],
      assetId: "services-lora-adapter",
      primaryLink: {
        label: "界定 私有 AI 项目 范围",
        href: "/contact"
      },
      secondaryLink: {
        label: "查看服务概览",
        href: "/服务"
      },
      outputsAtGlance: [
        {
          label: "Dataset package",
          description: "带有 来源 notes 与 评审 splits 的结构化 examples。"
        },
        {
          label: "Adapter 或 工件",
          description: "面向 部署 needs 的 LoRA 适配器 或 fused 工件。"
        },
        {
          label: "Training run record",
          description: "Configuration、assumptions、run notes 与 reproducibility 上下文。"
        },
        {
          label: "Evaluation 证据",
          description: "Task checks、regression cases、failures 与 limits。"
        },
        {
          label: "Activation runbook",
          description: "Loading、rollback、versioning 与 交接说明。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "何时适合这项服务",
          description: "最适合拥有真实 工作流、可用 examples 与 私有部署 constraints 的团队。",
          points: [
            "需要更好 model behavior 的已知 工作流",
            "可重复的 inputs 与预期 输出",
            "敏感数据或受控 部署 needs",
            "超越 model selection 的 implementation help"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Task 边界 与 数据包",
          description: "Adaptation 从定义 behavior、examples、exclusions 与 评估材料 开始，先于任何 training run。",
          points: [
            "Target behavior 与 failure modes",
            "Input 与 输出 rules",
            "允许与排除的 data 来源s",
            "Train、validation 与 test split"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Artifact",
          title: "Adapter 与 工件 交付",
          description: "我们围绕 部署 path 准备 适配 工件，而不是将其作为孤立实验。",
          points: [
            "适当时使用 LoRA 适配器",
            "必要时使用 fused 工件",
            "Configuration 与 run record",
            "面向 operators 的 启用说明"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Evidence",
          title: "经验性 评估 与 limits",
          description: "交付内容包含 task 证据、regression checks 与 已知限制，用于客户 评审。",
          points: [
            "Task-specific 评估 examples",
            "跨版本 regression checks",
            "Failure 与 edge-case notes",
            "包含 客户评审 loop"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime 与 部署边界",
          description: "Adapted 工件 会围绕客户实际 operating 边界 与 handoff model 来准备。",
          points: [
            "本地 workstation 或 on-prem GPU",
            "Private cloud 或 VPC 上下文",
            "必要时支持 air-gapped constraints",
            "Loading、rollback 与 versioning"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Patterns",
          title: "示例 engagement 模式",
          description: "典型工作聚焦于既有专业 工作流s 中受约束的 model behavior。",
          points: [
            "使用已批准 examples 的 domain summarization",
            "内部 评审 routing 或 classification",
            "结构化专业 document drafting",
            "既有本地 model 评估"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "一套具体 package，用于 technical 评审、控制led activation 与未来 维护 decisions。",
          points: [
            "带 provenance notes 的 dataset package",
            "Adapter 或 fused model 工件",
            "Training configuration 与 run record",
            "Evaluation report 与 activation runbook"
          ]
        }
      ],
      notice: "最适合已经知道想要改进的 工作流，但需要 private model path 的团队。",
      closing: {
        title: "带来 工作流，而不是 buzzword。",
        description: "我们从你的 task、examples、operating 边界 与 评审 criteria 出发界定 适配 范围。",
        fit: [
          "你可以展示具有代表性的 inputs 与 输出。",
          "该 工作流 需要 private 或 受控部署。",
          "你的团队希望获得直接的 technical implementation support。"
        ],
        notFit: [
          "你只需要 generic chatbot exploration。",
          "你期待 guaranteed accuracy 或 compliance certification。",
          "你需要从零开始的 foundation model research。"
        ],
        ctaTitle: "界定 private AI 适配 范围",
        ctaDescription: "分享 工作流、examples、部署边界，以及当前 model 或 运行时 constraints。"
      }
    },
    "data-platform": {
      eyebrow: "数据平台",
      title: "面向 模型工作 的 私有数据包。",
      description: "我们将内部材料塑形成有边界、可审查的数据 package，用于 适配、检索、评估 与本地 产品工作流。",
      taxonomy: [
        "来源 register",
        "dataset manifest",
        "评审ed package shape",
        "preprocessing notes",
        "handoff constraints"
      ],
      assetId: "services-dataset-package",
      primaryLink: {
        label: "界定 数据包 范围",
        href: "/contact"
      },
      secondaryLink: {
        label: "查看服务概览",
        href: "/服务"
      },
      outputsAtGlance: [
        {
          label: "Source register",
          description: "允许、排除与受限的 来源 categories。"
        },
        {
          label: "Dataset manifest",
          description: "Package identity、来源 notes、versions 与 processing 上下文。"
        },
        {
          label: "Reviewed package shape",
          description: "Training split、检索 corpus、评估 set 或 product inputs。"
        },
        {
          label: "Review notes",
          description: "Transformation notes、exclusions、gaps 与 评审节点。"
        },
        {
          label: "Handoff constraints",
          description: "Access path、loading assumptions、updates 与 next steps。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "何时适合这项服务",
          description: "最适合拥有有价值内部材料、明确 model use 与受控工作边界的团队。",
          points: [
            "内部材料尚未达到 model-ready 状态",
            "能够识别 intended model use",
            "在 model use 前重视 评审ability",
            "需要 implementation support"
          ]
        },
        {
          eyebrow: "Inventory",
          title: "Source inventory 与 边界",
          description: "在材料被移动、复制、转换或 评审 之前，我们先定义哪些内容可以进入 package。",
          points: [
            "允许的 来源 categories",
            "排除或受限的 材料",
            "Access 与 movement paths",
            "Retention 与 deletion assumptions"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "Manifest",
          title: "Package 结构 与 manifest",
          description: "核心输出是一套结构化 package，带有 identity、来源 上下文 与可审查的组织方式。",
          points: [
            "Schema 或 folder 结构",
            "Source 与 version notes",
            "Processing assumptions",
            "Package identity 与 边界"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Preprocessing 与 评审说明",
          description: "所有 transformations 都会被记录，使客户能够检查哪些内容发生了变化、哪些被排除，以及原因。",
          points: [
            "Cleaning 与 normalization notes",
            "Deduplication 或 chunking choices",
            "Redaction 或 exclusion notes",
            "Known gaps 与 unresolved 材料"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Paths",
          title: "Use-case package paths",
          description: "不同的 模型工作flows 需要不同的 package shapes、评审 材料 与 downstream assumptions。",
          points: [
            "用于 fine-tuning 的 适配 dataset",
            "用于本地 RAG 的 检索 corpus",
            "用于 regression checks 的 评估 set",
            "结构化本地 product inputs"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "交付 package 面向 technical 评审、控制led use 与未来 维护 decisions 而设计。",
          points: [
            "Source register",
            "Dataset manifest",
            "Package 结构 notes",
            "Review notes 与 handoff constraints"
          ]
        },
        {
          eyebrow: "Handoff",
          title: "Handoff 与 operational constraints",
          description: "我们会根据客户定义的 environment、访问路径 与后续 模型工作flow 来准备 package。",
          points: [
            "Movement register 与 transfer notes",
            "面向 downstream tools 的 loading assumptions",
            "Versioning 与 update expectations",
            "Customer 评审 保持明确"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Patterns",
          title: "示例 package 模式",
          description: "典型 package 支持的是受约束的 模型工作，而不是通用 analytics 或 warehouse migration。",
          points: [
            "用于 检索 的内部 document corpus",
            "用于 适配 的 domain examples",
            "用于本地 models 的 评估 set",
            "Studio asset meta数据包"
          ]
        }
      ],
      notice: "本页讨论的是数据准备结构，而不是宣称所有 dataset 都能在没有客户 评审 的情况下被安全使用。",
      closing: {
        title: "在 模型工作 之前，先将材料打包。",
        description: "带来 来源 categories、intended model use、examples、边界 与 评审 expectations。",
        fit: [
          "你清楚材料与 intended model path。",
          "Package 必须保持可审查且有边界。",
          "你的团队需要 implementation support，而不是 tooling sprawl。"
        ],
        notFit: [
          "你需要 BI、dashboards 或 warehouse migration。",
          "你期待自动 legal 或 security clearance。",
          "你想要无人管理的大规模数据 ingestion。"
        ],
        ctaTitle: "界定 private 数据包 范围",
        ctaDescription: "分享 来源 categories、模型工作flow、environment constraints 与 评审 responsibilities。"
      }
    },
    "it-architecture": {
      eyebrow: "IT 架构",
      title: "你的团队能够运营的 AI 基础设施。",
      description: "我们围绕你的真实 运行环境，设计 运行形态、访问路径、部署 assumptions、诊断 与 回滚说明。",
      taxonomy: [
        "运行时 topology",
        "访问路径",
        "部署 shape",
        "hardware 诊断",
        "回滚说明"
      ],
      assetId: "services-deployment-runbook",
      primaryLink: {
        label: "讨论架构",
        href: "/contact"
      },
      secondaryLink: {
        label: "查看 security model",
        href: "/security"
      },
      outputsAtGlance: [
        {
          label: "Runtime topology",
          description: "models、jobs 与 supporting 服务 在哪里运行。"
        },
        {
          label: "Access path",
          description: "operator entry points、network assumptions 与 admin 界面s。"
        },
        {
          label: "Deployment assumptions",
          description: "hardware、environment、运行时 与 维护 constraints。"
        },
        {
          label: "Diagnostics notes",
          description: "capacity、VRAM、queue latency、process health 与 logs。"
        },
        {
          label: "Operator runbook",
          description: "install、activation、recovery、rollback 与 交接说明。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "何时适合这项服务",
          description: "最适合正在将 私有模型工作流 从实验推进到可运营环境的团队。",
          points: [
            "已定义的 模型工作flow 边界",
            "已知的 部署 target 或 constraint",
            "operator access 需要明确设计",
            "rollback 与 recovery 很重要"
          ]
        },
        {
          eyebrow: "Environment",
          title: "Environment 与 部署 shape",
          description: "Architecture 跟随客户环境，而不是默认的平台模板。",
          points: [
            "Apple Silicon 或本地 workstation",
            "On-prem GPU 或内部 server",
            "Private cloud 或 VPC 上下文",
            "受限 network assumptions"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime topology 与 model path",
          description: "我们定义 models 在哪里运行、工件 如何加载，以及 data 如何到达 工作流。",
          points: [
            "Runtime location 与 responsibility",
            "Model 或 适配器 loading path",
            "Data package 或 检索 access",
            "工件 的 update path"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Access",
          title: "Access path 与 operator 界面",
          description: "Operator routes、admin actions 与 sensitive 界面s 会在 implementation 之前被明确写下。",
          points: [
            "Identity 与 role assumptions",
            "Network entry path",
            "Admin 界面 与 operator actions",
            "Secrets handling assumptions"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Diagnostics",
          title: "Hardware 诊断 与 rollback",
          description: "Operability work 覆盖适度的 signals、可能的 failures，以及 first 部署 的 recovery paths。",
          points: [
            "Hardware capacity 与 VRAM",
            "Queue latency 与 process health",
            "Log collection assumptions",
            "Rollback 与 recovery notes"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Support",
          title: "Implementation support model",
          description: "我们与客户团队直接协作，贯穿 architecture、first 部署 与 handoff。",
          points: [
            "implementation 前的 architecture pass",
            "remote 或 on-site support",
            "客户评审 与 handoff",
            "follow-up changes 另行界定范围"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Example architecture 模式",
          description: "典型 模式 是 private model environments，而不是 generic IT outsourcing 或 cloud migration。",
          points: [
            "Local AI workstation",
            "On-prem GPU 运行时",
            "Private VPC model service",
            "Restricted 评估 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "输出是一套实用 architecture package，用于 评审、implementation 与客户侧 operation。",
          points: [
            "Architecture brief",
            "Runtime topology",
            "Access 与 部署 assumptions",
            "Diagnostics 与 回滚说明"
          ]
        }
      ],
      notice: "Architecture work 会在 implementation 开始前，与客户团队共同界定范围。",
      closing: {
        title: "设计 operating 边界。",
        description: "带来 模型工作flow、target environment、access constraints、hardware 上下文 与 support expectations。",
        fit: [
          "你需要部署 私有模型工作流。",
          "你的团队将拥有或共同拥有 operation。",
          "Access、诊断 与 rollback 需要设计。"
        ],
        notFit: [
          "你需要 helpdesk 或 generic MSP support。",
          "你期待 guaranteed security 或 compliance outcomes。",
          "你想要 SaaS 控制-plane product。"
        ],
        ctaTitle: "讨论 private AI architecture",
        ctaDescription: "分享 工作流、environment、访问路径、hardware constraints 与 部署 timeline。"
      }
    },
    "privacy-data": {
      eyebrow: "隐私数据",
      title: "在 模型工作 之前定义 数据边界。",
      description: "在 AI 实施 开始之前，我们先定义哪些 客户材料 可以被触及、移动、转换、保留或排除。",
      taxonomy: [
        "privacy 边界",
        "access assumptions",
        "movement path",
        "retention notes",
        "评审 responsibility"
      ],
      assetId: "services-hero-private-data",
      primaryLink: {
        label: "Review 数据边界",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "边界简报",
          description: "implementation 前允许处理范围的实用界定。"
        },
        {
          label: "Classification notes",
          description: "允许、受限、排除与含糊的 材料。"
        },
        {
          label: "Access assumptions",
          description: "Customer、Random Walk、operator 与 admin access。"
        },
        {
          label: "Movement limits",
          description: "允许的 paths、working copies、caches 与 transformations。"
        },
        {
          label: "Retention notes",
          description: "Deletion、return、exclusion 与 评审 expectations。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "何时适合这项服务",
          description: "最适合在 客户材料 进入 适配、检索、评估 或 部署 work 之前使用。",
          points: [
            "Customer 材料 可能进入 AI 工作流s",
            "handling rules 需要定义",
            "存在 sensitive 或 restricted 来源s",
            "需要 engineering support"
          ]
        },
        {
          eyebrow: "Classify",
          title: "Material classification",
          description: "在 technical work 开始之前，我们先区分可用、受限、排除与含糊的 材料。",
          points: [
            "允许的 来源 categories",
            "受限的 来源 categories",
            "排除的 来源 categories",
            "含糊 材料 的 评审 owner"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Access",
          title: "Access 与 operator 边界",
          description: "面向 customer teams、Random Walk、operators 与 admin 界面s 的 access assumptions 会被明确写下。",
          points: [
            "Customer access assumptions",
            "Random Walk access assumptions",
            "Operator roles 与 admin 界面s",
            "Credential handling assumptions"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Movement",
          title: "Movement 与 processing 边界",
          description: "我们定义在 模型工作 中 材料 可以如何被复制、暂存、转换或使用。",
          points: [
            "允许的 movement paths",
            "有范围的 project environments",
            "Temporary working copies 与 caches",
            "Training 与 检索 handling limits"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Retention",
          title: "Exclusion、retention 与 deletion",
          description: "Retention expectations 覆盖被排除在 工作流s 之外的 材料、intermediate 工件、derived files，以及 return 或 deletion paths。",
          points: [
            "保留在 工作流s 外部的 材料",
            "Retention period assumptions",
            "Intermediate 工件 expectations",
            "Deletion 或 return expectations"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Boundary 评审说明",
          description: "Review notes 记录 handling assumptions、exceptions 与 customer decisions，但不取代 advisor judgment。",
          points: [
            "implementation 前的 边界 checklist",
            "Customer 评审节点",
            "Exception 与 exclusion notes",
            "Advisor decisions 另行记录"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Use-case 边界 模式",
          description: "Boundary work 围绕 intended 模型工作flow 来塑形，而不是泛泛的 privacy policy。",
          points: [
            "Dataset preparation 边界",
            "Retrieval corpus 边界",
            "Evaluation set 边界",
            "Local 运行时 边界"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "输出是一套实用 边界 package，用于 technical scoping 与客户侧 评审。",
          points: [
            "边界简报",
            "Source classification notes",
            "Access 与 movement assumptions",
            "Retention 与 评审说明"
          ]
        }
      ],
      notice: "Random Walk 提供 engineering support；正式 legal 与 regulatory decisions 仍由客户及合格顾问负责。",
      closing: {
        title: "在处理 材料 之前，先决定 边界。",
        description: "带来 来源 categories、intended model use、access expectations、retention requirements 与 advisor 评审 responsibilities。",
        fit: [
          "你需要在 模型工作 开始前定义 边界。",
          "你的 材料 需要先经过客户侧 评审。",
          "Engineering choices 取决于 handling limits。"
        ],
        notFit: [
          "你需要 legal 或 compliance advice。",
          "你期待 formal compliance sign-off。",
          "你想要 training data 的 automatic clearance。"
        ],
        ctaTitle: "Review private 数据边界",
        ctaDescription: "分享 来源 categories、intended 模型工作flow、access expectations 与 评审 responsibilities。"
      }
    },
    "sovereign-infrastructure": {
      eyebrow: "主权基础设施",
      title: "位于客户可控边界内的 AI。",
      description: "我们为有范围的 运行环境 构建 私有 AI 系统，使 运行时、数据包、model 工件、访问路径 与 回滚流程 保持在客户定义的控制之下。",
      taxonomy: [
        "customer VPC",
        "private cloud",
        "on-prem GPU",
        "air-gapped",
        "edge 运行时"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "界定 私有基础设施路径 范围",
        href: "/contact"
      },
      secondaryLink: {
        label: "查看服务概览",
        href: "/服务"
      },
      outputsAtGlance: [
        {
          label: "边界简报",
          description: "对哪些内容留在客户可控环境内作出实用定义。"
        },
        {
          label: "Deployment topology",
          description: "Runtime placement、hardware assumptions、network path 与 operating constraints。"
        },
        {
          label: "Runtime package",
          description: "Model 工件、运行时 config、dependencies 与 启用说明。"
        },
        {
          label: "Access assumptions",
          description: "谁可以触达什么、工件 如何移动，以及 temporary files 可能存在于哪里。"
        },
        {
          label: "Runbook notes",
          description: "Operator steps、debug logs、recovery assumptions 与 rollback paths。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "何时适合这项服务",
          description: "最适合已经定义 AI 工作流，且必须在客户可控 部署边界 内运行的团队。",
          points: [
            "私有 AI 工作flow 已被识别",
            "需要客户定义的 infra结构 边界",
            "Data 或 工件 不能使用 generic SaaS",
            "需要直接的 implementation support"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "选择 operating 边界",
          description: "我们围绕客户环境塑造 部署，而不是把每个 工作流 强行纳入同一种 hosted 模式。",
          points: [
            "本地 workstation 或 Apple Silicon",
            "On-prem GPU 或内部 server",
            "Customer VPC 或 private cloud",
            "受限 network 或 edge site"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "打包 运行时 path",
          description: "我们为选定的 私有部署边界 准备 运行时、model 工件、dependencies 与 启用说明。",
          points: [
            "Model 工件 与 适配器 placement",
            "Runtime config 与 dependency notes",
            "Quantization 与 VRAM budget assumptions",
            "Version 与 update constraints"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Operation",
          title: "在 environment 内运营",
          description: "系统从 first 部署 pass 起，就围绕 operator paths、诊断、local logs 与 rollback assumptions 来设计。",
          points: [
            "Operator path 与 admin 界面",
            "Hardware capacity 与 VRAM checks",
            "Runtime debug logs 与 process health",
            "model changes 的 rollback path"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "控制 movement 与 retention",
          description: "我们定义 数据包、model 工件、checkpoints、caches 与 temporary files 如何在有范围的 environment 中移动。",
          points: [
            "Artifact 与 data movement paths",
            "Scratch disks 与 temporary compilation files",
            "Fine-tuning checkpoints 与 cache locations",
            "Return、deletion 与 retention expectations"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Patterns",
          title: "我们支持的 部署 模式",
          description: "典型 模式 是 private model environments，而不是 generic cloud migration 或 managed SaaS 控制 planes。",
          points: [
            "面向 studios 的 Local AI workstation",
            "On-prem GPU inference 运行时",
            "Private VPC model service",
            "Restricted 评估 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "这项 engagement 会产出具体的 infra结构 材料，用于 technical 评审、implementation、handoff 与有范围的未来变更。",
          points: [
            "Boundary 与 environment brief",
            "Runtime topology 与 package contents",
            "Access、movement 与 retention assumptions",
            "Runbook、诊断 与 回滚说明"
          ]
        },
        {
          eyebrow: "Support",
          title: "直接 implementation support",
          description: "Random Walk 直接与客户团队协作，落地第一条 private AI 部署 path。",
          points: [
            "implementation 前的 architecture pass",
            "remote 或 on-site support",
            "first 部署 stabilization",
            "follow-up changes 另行界定范围"
          ]
        }
      ],
      notice: "这里的 Sovereign 指客户可控的工程边界，并非法律或政府主张。",
      closing: {
        title: "在边界之内构建。",
        description: "带来 工作流、target environment、model 工件、data movement limits、hardware constraints 与 operator expectations。",
        fit: [
          "你需要 AI 工作流s 运行在客户可控 environments 内。",
          "你的团队拥有已定义的 工作流 与 部署边界。",
          "你需要直接的 engineering support 来落地系统。"
        ],
        notFit: [
          "你需要 legal 或 government sovereignty determinations。",
          "你想要 generic hosted SaaS AI 部署。",
          "你期待 guaranteed security、compliance 或 unsupported operation。"
        ],
        ctaTitle: "界定 customer-控制led AI 部署 范围",
        ctaDescription: "分享 工作流、environment、运行时 target、data movement limits 与 operating responsibilities。"
      }
    }
  },
  ja: {
    "ai-ml": {
      eyebrow: "AI / ML Adaptation",
      title: "プライベートワークフロー のための モデル適応。",
      description: "私たちは定義された タスク を中心に models を 適応 し、管理された配備 のために usable 成果物、評価証拠、有効化メモ を納品します。",
      taxonomy: [
        "タスク 境界",
        "dataset package",
        "LoRA アダプター",
        "fused 成果物",
        "評価証拠"
      ],
      assetId: "services-lora-adapter",
      primaryLink: {
        label: "私有 AI 项目 をスコープする",
        href: "/contact"
      },
      secondaryLink: {
        label: "サービス概要を見る",
        href: "/サービス"
      },
      outputsAtGlance: [
        {
          label: "Dataset package",
          description: "ソース notes と レビュー splits を備えた構造化 例。"
        },
        {
          label: "Adapter または 成果物",
          description: "配備 needs に応じた LoRA アダプター または fused 成果物。"
        },
        {
          label: "Training run record",
          description: "Configuration、assumptions、run notes、reproducibility 文脈。"
        },
        {
          label: "Evaluation 証拠",
          description: "Task checks、regression ケース、failures、limits。"
        },
        {
          label: "Activation runbook",
          description: "Loading、rollback、versioning、引き継ぎメモ。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "このサービスが適する場面",
          description: "実際の ワークフロー、利用可能な 例、プライベート配備 constraints を持つチームに最も適しています。",
          points: [
            "より良い model behavior を必要とする既知の ワークフロー",
            "反復可能な inputs と期待される 出力",
            "機微なデータまたは 管理された配備 needs",
            "model selection を超える implementation help"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Task 境界 と データパッケージ",
          description: "Adaptation は、training run の前に behavior、例、exclusions、評価資料 を定義することから始まります。",
          points: [
            "Target behavior と failure modes",
            "Input と 出力 rules",
            "許可および除外された data ソースs",
            "Train、validation、test split"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Artifact",
          title: "Adapter と 成果物 delivery",
          description: "私たちは 適応 成果物 を、切り離された実験としてではなく、配備 path を中心に準備します。",
          points: [
            "適切な場合は LoRA アダプター",
            "必要な場合は fused 成果物",
            "Configuration と run record",
            "operators のための 有効化メモ"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Evidence",
          title: "経験的 評価 と limits",
          description: "納品には、顧客 レビュー のための タスク 証拠、regression checks、既知の限界 が含まれます。",
          points: [
            "Task-specific 評価 例",
            "バージョン間の regression checks",
            "Failure と edge-case notes",
            "顧客レビュー loop を含む"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime と 配備境界",
          description: "Adapted 成果物 は、顧客の実際の operating 境界 と handoff model に合わせて準備されます。",
          points: [
            "ローカル workstation または on-prem GPU",
            "Private cloud または VPC 文脈",
            "必要に応じた air-gapped constraints",
            "Loading、rollback、versioning"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Patterns",
          title: "Example engagement パターン",
          description: "典型的な作業は、既存の professional ワークフローs の中にある制約された model behavior を中心に行われます。",
          points: [
            "承認済み 例 を用いた domain summarization",
            "内部 レビュー routing または classification",
            "構造化された professional document drafting",
            "既存のローカル model 評価"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "technical レビュー、制御led activation、将来の 保守 decisions のための具体的な package です。",
          points: [
            "provenance notes 付き dataset package",
            "Adapter または fused model 成果物",
            "Training configuration と run record",
            "Evaluation report と activation runbook"
          ]
        }
      ],
      notice: "改善したい ワークフロー をすでに把握しているが、private model path を必要とするチームに最適です。",
      closing: {
        title: "buzzword ではなく、ワークフロー を持ち込む。",
        description: "私たちは、あなたの タスク、例、operating 境界、レビュー criteria から 適応 をスコープします。",
        fit: [
          "代表的な inputs と 出力 を示すことができる。",
          "その ワークフロー には private または 管理された配備 が必要である。",
          "チームが直接的な technical implementation support を求めている。"
        ],
        notFit: [
          "generic chatbot exploration だけが必要である。",
          "guaranteed accuracy または compliance certification を期待している。",
          "ゼロからの foundation model research が必要である。"
        ],
        ctaTitle: "private AI 適応 をスコープする",
        ctaDescription: "ワークフロー、例、配備境界、現在の model または ランタイム constraints を共有してください。"
      }
    },
    "data-platform": {
      eyebrow: "データプラットフォーム",
      title: "モデル作業 のための プライベートデータパッケージ。",
      description: "私たちは内部 資料 を、適応、検索、評価、ローカル プロダクトワークフロー のための bounded で レビューable な データパッケージ に整えます。",
      taxonomy: [
        "ソース register",
        "dataset manifest",
        "レビューed package shape",
        "preprocessing notes",
        "handoff constraints"
      ],
      assetId: "services-dataset-package",
      primaryLink: {
        label: "データパッケージ をスコープする",
        href: "/contact"
      },
      secondaryLink: {
        label: "サービス概要を見る",
        href: "/サービス"
      },
      outputsAtGlance: [
        {
          label: "Source register",
          description: "許可、除外、制限された ソース categories。"
        },
        {
          label: "Dataset manifest",
          description: "Package identity、ソース notes、versions、processing 文脈。"
        },
        {
          label: "Reviewed package shape",
          description: "Training split、検索 corpus、評価 set、または product inputs。"
        },
        {
          label: "Review notes",
          description: "Transformation notes、exclusions、gaps、レビューポイント。"
        },
        {
          label: "Handoff constraints",
          description: "Access path、loading assumptions、updates、next steps。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "このサービスが適する場面",
          description: "有用な内部 資料、既知の model use、そして 制御led working 境界 を持つチームに最適です。",
          points: [
            "内部 資料 がまだ model-ready ではない",
            "intended model use を特定できる",
            "model use 前に レビューability が重要である",
            "implementation support が必要である"
          ]
        },
        {
          eyebrow: "Inventory",
          title: "Source inventory と 境界",
          description: "私たちは、資料 が移動、複製、変換、レビュー される前に、何が package に入るかを定義します。",
          points: [
            "許可された ソース categories",
            "除外または制限された 資料",
            "Access と movement paths",
            "Retention と deletion assumptions"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "Manifest",
          title: "Package 構造 と manifest",
          description: "中核となる 出力 は、identity、ソース 文脈、レビューable organization を備えた 構造d package です。",
          points: [
            "Schema または folder 構造",
            "Source と version notes",
            "Processing assumptions",
            "Package identity と 境界"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Preprocessing と レビューメモ",
          description: "Transformations は記録されるため、顧客は何が変わり、何が除外され、その理由が何かを確認できます。",
          points: [
            "Cleaning と normalization notes",
            "Deduplication または chunking choices",
            "Redaction または exclusion notes",
            "Known gaps と unresolved 資料"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Paths",
          title: "Use-case package paths",
          description: "異なる モデル作業flows には、異なる package shapes、レビュー 資料、downstream assumptions が必要です。",
          points: [
            "fine-tuning 用 適応 dataset",
            "ローカル RAG 用 検索 corpus",
            "regression checks 用 評価 set",
            "構造d local product inputs"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "Delivery package は、technical レビュー、制御led use、将来の 保守 decisions のために設計されています。",
          points: [
            "Source register",
            "Dataset manifest",
            "Package 構造 notes",
            "Review notes と handoff constraints"
          ]
        },
        {
          eyebrow: "Handoff",
          title: "Handoff と operational constraints",
          description: "私たちは、顧客定義の environment、アクセス経路、次の モデル作業flow に合わせて package を準備します。",
          points: [
            "Movement register と transfer notes",
            "downstream tools のための loading assumptions",
            "Versioning と update expectations",
            "Customer レビュー は明示的なまま保つ"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Patterns",
          title: "Example package パターン",
          description: "典型的な packages は、general analytics や warehouse migration ではなく、制約された モデル作業 を支援します。",
          points: [
            "検索 のための内部 document corpus",
            "適応 のための domain 例",
            "ローカル models のための 評価 set",
            "Studio asset metaデータパッケージ"
          ]
        }
      ],
      notice: "このページは data preparation 構造 に関するものであり、すべての dataset が 顧客レビュー なしで安全に利用できるという主張ではありません。",
      closing: {
        title: "モデル作業 の前に 資料 を package 化する。",
        description: "ソース categories、intended model use、例、境界、レビュー expectations を持ち込んでください。",
        fit: [
          "資料 と intended model path を把握している。",
          "package は レビューable かつ bounded である必要がある。",
          "チームは tooling sprawl ではなく implementation support を必要としている。"
        ],
        notFit: [
          "BI、dashboards、warehouse migration が必要である。",
          "automatic legal または security clearance を期待している。",
          "unmanaged bulk data ingestion を望んでいる。"
        ],
        ctaTitle: "private データパッケージ をスコープする",
        ctaDescription: "ソース categories、モデル作業flow、environment constraints、レビュー responsibilities を共有してください。"
      }
    },
    "it-architecture": {
      eyebrow: "IT アーキテクチャ",
      title: "チームが運用できる AI インフラ。",
      description: "私たちは、実際の 運用環境 に合わせて、ランタイム形態、アクセス経路、配備 assumptions、診断、ロールバックメモ を設計します。",
      taxonomy: [
        "ランタイム topology",
        "アクセス経路",
        "配備 shape",
        "hardware 診断",
        "ロールバックメモ"
      ],
      assetId: "services-deployment-runbook",
      primaryLink: {
        label: "architecture を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "security model を見る",
        href: "/security"
      },
      outputsAtGlance: [
        {
          label: "Runtime topology",
          description: "models、jobs、supporting サービス がどこで動くか。"
        },
        {
          label: "Access path",
          description: "operator entry points、network assumptions、admin 画面s。"
        },
        {
          label: "Deployment assumptions",
          description: "hardware、environment、ランタイム、保守 constraints。"
        },
        {
          label: "Diagnostics notes",
          description: "capacity、VRAM、queue latency、process health、logs。"
        },
        {
          label: "Operator runbook",
          description: "install、activation、recovery、rollback、引き継ぎメモ。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "このサービスが適する場面",
          description: "プライベートモデルワークフロー を実験から運用可能な environments へ移そうとしているチームに最適です。",
          points: [
            "定義された モデル作業flow 境界",
            "既知の 配備 target または constraint",
            "operator access に明示的な設計が必要",
            "rollback と recovery が重要である"
          ]
        },
        {
          eyebrow: "Environment",
          title: "Environment と 配備 shape",
          description: "Architecture は、default platform template ではなく、顧客 environment に従います。",
          points: [
            "Apple Silicon またはローカル workstation",
            "On-prem GPU または内部 server",
            "Private cloud または VPC 文脈",
            "制限された network assumptions"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime topology と model path",
          description: "私たちは models がどこで動き、成果物 がどのように load され、data がどのように ワークフロー に届くかを定義します。",
          points: [
            "Runtime location と responsibility",
            "Model または アダプター loading path",
            "Data package または 検索 access",
            "成果物 の update path"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Access",
          title: "Access path と operator 画面",
          description: "Operator routes、admin actions、sensitive 画面s は、implementation 前に明示されます。",
          points: [
            "Identity と role assumptions",
            "Network entry path",
            "Admin 画面 と operator actions",
            "Secrets handling assumptions"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Diagnostics",
          title: "Hardware 診断 と rollback",
          description: "Operability work は、first 配備 のための控えめな signals、起こりうる failures、recovery paths を扱います。",
          points: [
            "Hardware capacity と VRAM",
            "Queue latency と process health",
            "Log collection assumptions",
            "Rollback と recovery notes"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Support",
          title: "Implementation support model",
          description: "私たちは顧客チームと直接協働し、architecture、first 配備、handoff まで伴走します。",
          points: [
            "implementation 前の architecture pass",
            "remote または on-site support",
            "顧客レビュー と handoff",
            "follow-up changes は別途スコープ化"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Example architecture パターン",
          description: "典型的な パターン は private model environments であり、generic IT outsourcing や cloud migration ではありません。",
          points: [
            "Local AI workstation",
            "On-prem GPU ランタイム",
            "Private VPC model service",
            "Restricted 評価 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "出力は、レビュー、implementation、顧客側 operation のための実用的な architecture package です。",
          points: [
            "Architecture brief",
            "Runtime topology",
            "Access と 配備 assumptions",
            "Diagnostics と ロールバックメモ"
          ]
        }
      ],
      notice: "Architecture work は、implementation が始まる前に顧客チームとスコープされます。",
      closing: {
        title: "operating 境界 を設計する。",
        description: "モデル作業flow、target environment、access constraints、hardware 文脈、support expectations を持ち込んでください。",
        fit: [
          "プライベートモデルワークフロー をデプロイする必要がある。",
          "チームが operation を所有または共同所有する。",
          "Access、診断、rollback に設計が必要である。"
        ],
        notFit: [
          "helpdesk または generic MSP support が必要である。",
          "guaranteed security または compliance outcomes を期待している。",
          "SaaS 制御-plane product が欲しい。"
        ],
        ctaTitle: "private AI architecture を相談",
        ctaDescription: "ワークフロー、environment、アクセス経路、hardware constraints、配備 timeline を共有してください。"
      }
    },
    "privacy-data": {
      eyebrow: "プライバシーデータ",
      title: "モデル作業 の前に データ境界 を定義する。",
      description: "AI 実装 が始まる前に、顧客資料 のうち何に触れ、移動し、変換し、保持し、または除外できるかを定義します。",
      taxonomy: [
        "privacy 境界",
        "access assumptions",
        "movement path",
        "retention notes",
        "レビュー responsibility"
      ],
      assetId: "services-hero-private-data",
      primaryLink: {
        label: "データ境界 を確認",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "境界ブリーフ",
          description: "implementation 前に許可される handling の実践的な scope。"
        },
        {
          label: "Classification notes",
          description: "許可、制限、除外、曖昧な 資料。"
        },
        {
          label: "Access assumptions",
          description: "Customer、Random Walk、operator、admin access。"
        },
        {
          label: "Movement limits",
          description: "許可された paths、working copies、caches、transformations。"
        },
        {
          label: "Retention notes",
          description: "Deletion、return、exclusion、レビュー expectations。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "このサービスが適する場面",
          description: "顧客資料 が 適応、検索、評価、配備 work に入る前に最適です。",
          points: [
            "Customer 資料 が AI ワークフローs に入る可能性がある",
            "handling rules の定義が必要である",
            "sensitive または restricted ソースs が存在する",
            "engineering support が必要である"
          ]
        },
        {
          eyebrow: "Classify",
          title: "Material classification",
          description: "technical work が始まる前に、利用可能、制限、除外、曖昧な 資料 を分けます。",
          points: [
            "許可された ソース categories",
            "制限された ソース categories",
            "除外された ソース categories",
            "曖昧な 資料 の レビュー owner"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Access",
          title: "Access と operator 境界",
          description: "customer teams、Random Walk、operators、admin 画面s に対する access assumptions を明示します。",
          points: [
            "Customer access assumptions",
            "Random Walk access assumptions",
            "Operator roles と admin 画面s",
            "Credential handling assumptions"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Movement",
          title: "Movement と processing 境界",
          description: "モデル作業 の中で 資料 をどのようにコピー、ステージング、変換、または使用できるかを定義します。",
          points: [
            "許可された movement paths",
            "スコープされた project environments",
            "Temporary working copies と caches",
            "Training と 検索 handling limits"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Retention",
          title: "Exclusion、retention、deletion",
          description: "Retention expectations は、ワークフローs の外に置かれる 資料、intermediate 成果物、derived files、return または deletion paths を対象にします。",
          points: [
            "ワークフローs の外に保たれる 資料",
            "Retention period assumptions",
            "Intermediate 成果物 expectations",
            "Deletion または return expectations"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Boundary レビューメモ",
          description: "Review notes は handling assumptions、exceptions、customer decisions を記録しますが、advisor judgment の代替にはなりません。",
          points: [
            "implementation 前の 境界 checklist",
            "Customer レビューポイント",
            "Exception と exclusion notes",
            "Advisor decisions は別に記録"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Use-case 境界 パターン",
          description: "Boundary work は generic privacy policy ではなく、intended モデル作業flow を中心に形づくられます。",
          points: [
            "Dataset preparation 境界",
            "Retrieval corpus 境界",
            "Evaluation set 境界",
            "Local ランタイム 境界"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "出力は、technical scoping と顧客側 レビュー のための実用的な 境界 package です。",
          points: [
            "境界ブリーフ",
            "Source classification notes",
            "Access と movement assumptions",
            "Retention と レビューメモ"
          ]
        }
      ],
      notice: "Random Walk は engineering support を提供します。正式な legal および regulatory decisions は、顧客と qualified advisors に残ります。",
      closing: {
        title: "資料 を扱う前に 境界 を決める。",
        description: "ソース categories、intended model use、access expectations、retention requirements、advisor レビュー responsibilities を持ち込んでください。",
        fit: [
          "モデル作業 が始まる前に 境界 が必要である。",
          "資料 は先に顧客側 レビュー が必要である。",
          "Engineering choices は handling limits に依存する。"
        ],
        notFit: [
          "legal または compliance advice が必要である。",
          "formal compliance sign-off を期待している。",
          "training data の automatic clearance を求めている。"
        ],
        ctaTitle: "private データ境界 を確認",
        ctaDescription: "ソース categories、intended モデル作業flow、access expectations、レビュー responsibilities を共有してください。"
      }
    },
    "sovereign-infrastructure": {
      eyebrow: "ソブリンインフラ",
      title: "顧客が制御する境界内の AI。",
      description: "私たちは、ランタイム、データパッケージ、model 成果物、アクセス経路、ロールバック手順 が顧客定義の制御下に留まる、スコープされた 運用環境 向けの プライベート AI システム を構築します。",
      taxonomy: [
        "customer VPC",
        "private cloud",
        "on-prem GPU",
        "air-gapped",
        "edge ランタイム"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "プライベートインフラ経路 をスコープする",
        href: "/contact"
      },
      secondaryLink: {
        label: "サービス概要を見る",
        href: "/サービス"
      },
      outputsAtGlance: [
        {
          label: "境界ブリーフ",
          description: "顧客が制御する environment の内側に何が留まるかを実践的に定義します。"
        },
        {
          label: "Deployment topology",
          description: "Runtime placement、hardware assumptions、network path、operating constraints。"
        },
        {
          label: "Runtime package",
          description: "Model 成果物、ランタイム config、dependencies、有効化メモ。"
        },
        {
          label: "Access assumptions",
          description: "誰が何に到達できるか、成果物 がどのように動くか、temporary files がどこに存在しうるか。"
        },
        {
          label: "Runbook notes",
          description: "Operator steps、debug logs、recovery assumptions、rollback paths。"
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "このサービスが適する場面",
          description: "顧客が制御する 配備境界 の中で実行しなければならない、定義済みの AI ワークフロー を持つチームに最適です。",
          points: [
            "プライベート AI 作業flow がすでに特定されている",
            "顧客定義の infra構造 境界 が必要である",
            "Data または 成果物 が generic SaaS を使用できない",
            "直接的な implementation support が必要である"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "operating 境界 を選ぶ",
          description: "私たちはすべての ワークフロー をひとつの hosted パターン に押し込むのではなく、顧客 environment を中心に 配備 を形づくります。",
          points: [
            "ローカル workstation または Apple Silicon",
            "On-prem GPU または内部 server",
            "Customer VPC または private cloud",
            "制限された network または edge site"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "ランタイム path を package 化する",
          description: "選択された プライベート配備境界 に向けて、ランタイム、model 成果物、dependencies、有効化メモ を準備します。",
          points: [
            "Model 成果物 と アダプター placement",
            "Runtime config と dependency notes",
            "Quantization と VRAM budget assumptions",
            "Version と update constraints"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Operation",
          title: "environment の内側で運用する",
          description: "system は first 配備 pass から、operator paths、診断、local logs、rollback assumptions を前提に設計されます。",
          points: [
            "Operator path と admin 画面",
            "Hardware capacity と VRAM checks",
            "Runtime debug logs と process health",
            "model changes の rollback path"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "movement と retention を制御する",
          description: "データパッケージ、model 成果物、checkpoints、caches、temporary files が、スコープされた environment の中をどのように移動するかを定義します。",
          points: [
            "Artifact と data movement paths",
            "Scratch disks と temporary compilation files",
            "Fine-tuning checkpoints と cache locations",
            "Return、deletion、retention expectations"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Patterns",
          title: "対応する 配備 パターン",
          description: "典型的な パターン は private model environments であり、generic cloud migration や managed SaaS 制御 planes ではありません。",
          points: [
            "studios 向け Local AI workstation",
            "On-prem GPU inference ランタイム",
            "Private VPC model service",
            "Restricted 評価 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "この engagement は、technical レビュー、implementation、handoff、スコープされた将来の変更のための具体的な infra構造 資料 を生み出します。",
          points: [
            "Boundary と environment brief",
            "Runtime topology と package contents",
            "Access、movement、retention assumptions",
            "Runbook、診断、ロールバックメモ"
          ]
        },
        {
          eyebrow: "Support",
          title: "直接的な implementation support",
          description: "Random Walk は顧客チームと直接協働し、最初の private AI 配備 path を着地させます。",
          points: [
            "implementation 前の architecture pass",
            "remote または on-site support",
            "first 配備 stabilization",
            "follow-up changes は別途スコープ化"
          ]
        }
      ],
      notice: "ここでの Sovereign は、顧客が制御する engineering 境界 を意味し、legal または government claim ではありません。",
      closing: {
        title: "境界の内側で構築する。",
        description: "ワークフロー、target environment、model 成果物、data movement limits、hardware constraints、operator expectations を持ち込んでください。",
        fit: [
          "顧客が制御する environments の中で AI ワークフローs が必要である。",
          "チームには定義済みの ワークフロー と 配備境界 がある。",
          "system を着地させるための直接的な engineering support が必要である。"
        ],
        notFit: [
          "legal または government sovereignty determinations が必要である。",
          "generic hosted SaaS AI 配備 を求めている。",
          "guaranteed security、compliance、または unsupported operation を期待している。"
        ],
        ctaTitle: "customer-制御led AI 配備 をスコープする",
        ctaDescription: "ワークフロー、environment、ランタイム target、data movement limits、operating responsibilities を共有してください。"
      }
    }
  },
  ko: {
    "ai-ml": {
      eyebrow: "AI / ML Adaptation",
      title: "프라이빗 워크플로를 위한 모델 적응.",
      description: "우리는 정의된 작업를 중심으로 models를 적응한 뒤, 통제된 배포를 위한 usable 결과물, 평가 증거, 활성화 메모를 전달합니다.",
      taxonomy: [
        "작업 경계",
        "dataset package",
        "LoRA 어댑터",
        "fused 결과물",
        "평가 증거"
      ],
      assetId: "services-lora-adapter",
      primaryLink: {
        label: "私有 AI 项目 범위 설정",
        href: "/contact"
      },
      secondaryLink: {
        label: "서비스 개요 보기",
        href: "/서비스"
      },
      outputsAtGlance: [
        {
          label: "Dataset package",
          description: "소스 notes와 검토 splits가 포함된 구조화된 예시."
        },
        {
          label: "Adapter 또는 결과물",
          description: "배포 needs를 위한 LoRA 어댑터 또는 fused 결과물."
        },
        {
          label: "Training run record",
          description: "Configuration, assumptions, run notes, reproducibility 맥락."
        },
        {
          label: "Evaluation 증거",
          description: "Task checks, regression 사례, failures, limits."
        },
        {
          label: "Activation runbook",
          description: "Loading, rollback, versioning, 인수인계 메모."
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "이 서비스가 적합한 경우",
          description: "실제 워크플로, 사용 가능한 예시, 프라이빗 배포 constraints가 있는 팀에 가장 적합합니다.",
          points: [
            "더 나은 model behavior가 필요한 알려진 워크플로",
            "반복 가능한 inputs와 예상 출력",
            "민감한 데이터 또는 통제된 배포 needs",
            "model selection을 넘어서는 implementation help"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Task 경계 및 데이터 패키지",
          description: "Adaptation은 모든 training run 전에 behavior, 예시, exclusions, 평가 자료을 정의하는 것에서 시작됩니다.",
          points: [
            "Target behavior 및 failure modes",
            "Input 및 출력 rules",
            "허용 및 제외된 data 소스s",
            "Train, validation, test split"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Artifact",
          title: "Adapter 및 결과물 delivery",
          description: "우리는 적응 결과물를 고립된 실험이 아니라 배포 path를 중심으로 준비합니다.",
          points: [
            "적절한 경우 LoRA 어댑터",
            "필요한 경우 fused 결과물",
            "Configuration 및 run record",
            "operators를 위한 활성화 메모"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Evidence",
          title: "경험적 평가 및 limits",
          description: "Delivery에는 고객 검토를 위한 작업 증거, regression checks, 알려진 한계가 포함됩니다.",
          points: [
            "Task-specific 평가 예시",
            "버전 간 regression checks",
            "Failure 및 edge-case notes",
            "고객 검토 loop 포함"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime 및 배포 경계",
          description: "Adapted 결과물는 고객의 실제 operating 경계와 handoff model에 맞춰 준비됩니다.",
          points: [
            "로컬 workstation 또는 on-prem GPU",
            "Private cloud 또는 VPC 맥락",
            "필요한 경우 air-gapped constraints",
            "Loading, rollback, versioning"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Patterns",
          title: "Example engagement 패턴",
          description: "일반적인 작업은 기존 professional 워크플로s 안의 제한된 model behavior를 중심으로 이루어집니다.",
          points: [
            "승인된 예시를 활용한 domain summarization",
            "내부 검토 routing 또는 classification",
            "구조화된 professional document drafting",
            "기존 로컬 model 평가"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "technical 검토, 제어led activation, 미래 유지보수 decisions를 위한 구체적인 package입니다.",
          points: [
            "provenance notes가 포함된 dataset package",
            "Adapter 또는 fused model 결과물",
            "Training configuration 및 run record",
            "Evaluation report 및 activation runbook"
          ]
        }
      ],
      notice: "개선하고 싶은 워크플로를 이미 알고 있지만 private model path가 필요한 팀에 가장 적합합니다.",
      closing: {
        title: "buzzword가 아니라 워크플로를 가져오세요.",
        description: "우리는 작업, 예시, operating 경계, 검토 criteria를 기준으로 적응 범위를 정합니다.",
        fit: [
          "대표적인 inputs와 출력를 보여줄 수 있습니다.",
          "해당 워크플로에는 private 또는 통제된 배포가 필요합니다.",
          "팀이 직접적인 technical implementation support를 원합니다."
        ],
        notFit: [
          "generic chatbot exploration만 필요합니다.",
          "guaranteed accuracy 또는 compliance certification을 기대합니다.",
          "처음부터 foundation model research가 필요합니다."
        ],
        ctaTitle: "private AI 적응 범위 설정",
        ctaDescription: "워크플로, 예시, 배포 경계, 현재 model 또는 런타임 constraints를 공유하세요."
      }
    },
    "data-platform": {
      eyebrow: "데이터 플랫폼",
      title: "모델 작업를 위한 프라이빗 데이터 패키지.",
      description: "우리는 내부 자료을 적응, 검색, 평가, 로컬 제품 워크플로를 위한 bounded하고 검토able한 데이터 패키지로 구성합니다.",
      taxonomy: [
        "소스 register",
        "dataset manifest",
        "검토ed package shape",
        "preprocessing notes",
        "handoff constraints"
      ],
      assetId: "services-dataset-package",
      primaryLink: {
        label: "데이터 패키지 범위 설정",
        href: "/contact"
      },
      secondaryLink: {
        label: "서비스 개요 보기",
        href: "/서비스"
      },
      outputsAtGlance: [
        {
          label: "Source register",
          description: "허용, 제외, 제한된 소스 categories."
        },
        {
          label: "Dataset manifest",
          description: "Package identity, 소스 notes, versions, processing 맥락."
        },
        {
          label: "Reviewed package shape",
          description: "Training split, 검색 corpus, 평가 set, 또는 product inputs."
        },
        {
          label: "Review notes",
          description: "Transformation notes, exclusions, gaps, 검토 지점."
        },
        {
          label: "Handoff constraints",
          description: "Access path, loading assumptions, updates, next steps."
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "이 서비스가 적합한 경우",
          description: "유용한 내부 자료, 알려진 model use, 제어led working 경계를 가진 팀에 가장 적합합니다.",
          points: [
            "내부 자료이 아직 model-ready 상태가 아님",
            "intended model use를 식별할 수 있음",
            "model use 전에 검토ability가 중요함",
            "implementation support가 필요함"
          ]
        },
        {
          eyebrow: "Inventory",
          title: "Source inventory 및 경계",
          description: "우리는 자료이 이동, 복사, 변환, 검토되기 전에 무엇이 package에 들어갈 수 있는지 정의합니다.",
          points: [
            "허용된 소스 categories",
            "제외되거나 제한된 자료",
            "Access 및 movement paths",
            "Retention 및 deletion assumptions"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "Manifest",
          title: "Package 구조 및 manifest",
          description: "핵심 출력은 identity, 소스 맥락, 검토able organization을 갖춘 구조d package입니다.",
          points: [
            "Schema 또는 folder 구조",
            "Source 및 version notes",
            "Processing assumptions",
            "Package identity 및 경계"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Preprocessing 및 검토 메모",
          description: "Transformations는 기록되므로 고객은 무엇이 변경되었고, 무엇이 제외되었으며, 왜 그런지 검사할 수 있습니다.",
          points: [
            "Cleaning 및 normalization notes",
            "Deduplication 또는 chunking choices",
            "Redaction 또는 exclusion notes",
            "Known gaps 및 unresolved 자료"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Paths",
          title: "Use-case package paths",
          description: "서로 다른 모델 작업flows에는 서로 다른 package shapes, 검토 자료, downstream assumptions가 필요합니다.",
          points: [
            "fine-tuning을 위한 적응 dataset",
            "로컬 RAG를 위한 검색 corpus",
            "regression checks를 위한 평가 set",
            "구조화된 로컬 product inputs"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "Delivery package는 technical 검토, 제어led use, 미래 유지보수 decisions를 위해 설계됩니다.",
          points: [
            "Source register",
            "Dataset manifest",
            "Package 구조 notes",
            "Review notes 및 handoff constraints"
          ]
        },
        {
          eyebrow: "Handoff",
          title: "Handoff 및 operational constraints",
          description: "우리는 고객이 정의한 environment, 접근 경로, 다음 모델 작업flow에 맞춰 package를 준비합니다.",
          points: [
            "Movement register 및 transfer notes",
            "downstream tools를 위한 loading assumptions",
            "Versioning 및 update expectations",
            "Customer 검토는 명시적으로 유지"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Patterns",
          title: "Example package 패턴",
          description: "일반적인 packages는 general analytics나 warehouse migration이 아니라 제한된 모델 작업를 지원합니다.",
          points: [
            "검색을 위한 내부 document corpus",
            "적응을 위한 domain 예시",
            "로컬 models를 위한 평가 set",
            "Studio asset meta데이터 패키지"
          ]
        }
      ],
      notice: "이 페이지는 data preparation 구조에 대한 설명이며, 모든 dataset이 고객 검토 없이 안전하게 사용될 수 있다는 주장이 아닙니다.",
      closing: {
        title: "모델 작업 전에 자료을 package화하세요.",
        description: "소스 categories, intended model use, 예시, 경계, 검토 expectations를 가져오세요.",
        fit: [
          "자료과 intended model path를 알고 있습니다.",
          "package는 검토able하고 bounded한 상태를 유지해야 합니다.",
          "팀은 tooling sprawl이 아니라 implementation support가 필요합니다."
        ],
        notFit: [
          "BI, dashboards, warehouse migration이 필요합니다.",
          "automatic legal 또는 security clearance를 기대합니다.",
          "unmanaged bulk data ingestion을 원합니다."
        ],
        ctaTitle: "private 데이터 패키지 범위 설정",
        ctaDescription: "소스 categories, 모델 작업flow, environment constraints, 검토 responsibilities를 공유하세요。"
      }
    },
    "it-architecture": {
      eyebrow: "IT 아키텍처",
      title: "팀이 운영할 수 있는 AI 인프라.",
      description: "우리는 실제 운영 환경를 중심으로 런타임 형태, 접근 경로, 배포 assumptions, 진단, 롤백 메모를 설계합니다.",
      taxonomy: [
        "런타임 topology",
        "접근 경로",
        "배포 shape",
        "hardware 진단",
        "롤백 메모"
      ],
      assetId: "services-deployment-runbook",
      primaryLink: {
        label: "architecture 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "security model 보기",
        href: "/security"
      },
      outputsAtGlance: [
        {
          label: "Runtime topology",
          description: "models, jobs, supporting 서비스가 어디에서 실행되는지."
        },
        {
          label: "Access path",
          description: "operator entry points, network assumptions, admin 화면s."
        },
        {
          label: "Deployment assumptions",
          description: "hardware, environment, 런타임, 유지보수 constraints."
        },
        {
          label: "Diagnostics notes",
          description: "capacity, VRAM, queue latency, process health, logs."
        },
        {
          label: "Operator runbook",
          description: "install, activation, recovery, rollback, 인수인계 메모."
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "이 서비스가 적합한 경우",
          description: "프라이빗 모델 워크플로를 실험에서 운영 가능한 environments로 옮기는 팀에 가장 적합합니다.",
          points: [
            "정의된 모델 작업flow 경계",
            "알려진 배포 target 또는 constraint",
            "operator access에 명시적 설계가 필요함",
            "rollback 및 recovery가 중요함"
          ]
        },
        {
          eyebrow: "Environment",
          title: "Environment 및 배포 shape",
          description: "Architecture는 default platform template이 아니라 고객 environment를 따릅니다.",
          points: [
            "Apple Silicon 또는 로컬 workstation",
            "On-prem GPU 또는 내부 server",
            "Private cloud 또는 VPC 맥락",
            "제한된 network assumptions"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "Runtime topology 및 model path",
          description: "우리는 models가 어디에서 실행되고, 결과물가 어떻게 load되며, data가 어떻게 워크플로에 도달하는지 정의합니다.",
          points: [
            "Runtime location 및 responsibility",
            "Model 또는 어댑터 loading path",
            "Data package 또는 검색 access",
            "결과물의 update path"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Access",
          title: "Access path 및 operator 화면",
          description: "Operator routes, admin actions, sensitive 화면s는 implementation 전에 명시됩니다.",
          points: [
            "Identity 및 role assumptions",
            "Network entry path",
            "Admin 화면 및 operator actions",
            "Secrets handling assumptions"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Diagnostics",
          title: "Hardware 진단 및 rollback",
          description: "Operability work는 first 배포를 위한 적절한 signals, 가능한 failures, recovery paths를 다룹니다.",
          points: [
            "Hardware capacity 및 VRAM",
            "Queue latency 및 process health",
            "Log collection assumptions",
            "Rollback 및 recovery notes"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Support",
          title: "Implementation support model",
          description: "우리는 architecture, first 배포, handoff 전반에서 고객 팀과 직접 협업합니다.",
          points: [
            "implementation 전 architecture pass",
            "remote 또는 on-site support",
            "고객 검토 및 handoff",
            "follow-up changes는 별도로 범위 설정"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Example architecture 패턴",
          description: "일반적인 패턴는 private model environments이지, generic IT outsourcing이나 cloud migration이 아닙니다.",
          points: [
            "Local AI workstation",
            "On-prem GPU 런타임",
            "Private VPC model service",
            "Restricted 평가 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "출력은 검토, implementation, 고객 측 operation을 위한 실용적인 architecture package입니다.",
          points: [
            "Architecture brief",
            "Runtime topology",
            "Access 및 배포 assumptions",
            "Diagnostics 및 롤백 메모"
          ]
        }
      ],
      notice: "Architecture work는 implementation이 시작되기 전에 고객 팀과 함께 범위가 정해집니다.",
      closing: {
        title: "operating 경계를 설계하세요.",
        description: "모델 작업flow, target environment, access constraints, hardware 맥락, support expectations를 가져오세요.",
        fit: [
          "프라이빗 모델 워크플로를 배포해야 합니다.",
          "팀이 operation을 소유하거나 공동 소유합니다.",
          "Access, 진단, rollback에는 설계가 필요합니다."
        ],
        notFit: [
          "helpdesk 또는 generic MSP support가 필요합니다.",
          "guaranteed security 또는 compliance outcomes를 기대합니다.",
          "SaaS 제어-plane product를 원합니다."
        ],
        ctaTitle: "private AI architecture 논의",
        ctaDescription: "워크플로, environment, 접근 경로, hardware constraints, 배포 timeline을 공유하세요."
      }
    },
    "privacy-data": {
      eyebrow: "프라이버시 데이터",
      title: "모델 작업 전에 데이터 경계를 정의합니다.",
      description: "AI 구현이 시작되기 전에 어떤 고객 자료을 접촉, 이동, 변환, 보존, 또는 제외할 수 있는지 정의합니다.",
      taxonomy: [
        "privacy 경계",
        "access assumptions",
        "movement path",
        "retention notes",
        "검토 responsibility"
      ],
      assetId: "services-hero-private-data",
      primaryLink: {
        label: "데이터 경계 검토",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "경계 브리프",
          description: "implementation 전에 허용되는 handling의 실무적 scope."
        },
        {
          label: "Classification notes",
          description: "허용, 제한, 제외, 모호한 자료."
        },
        {
          label: "Access assumptions",
          description: "Customer, Random Walk, operator, admin access."
        },
        {
          label: "Movement limits",
          description: "허용된 paths, working copies, caches, transformations."
        },
        {
          label: "Retention notes",
          description: "Deletion, return, exclusion, 검토 expectations."
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "이 서비스가 적합한 경우",
          description: "고객 자료이 적응, 검색, 평가, 배포 work에 들어가기 전에 가장 적합합니다.",
          points: [
            "Customer 자료이 AI 워크플로s에 들어갈 수 있음",
            "handling rules 정의가 필요함",
            "sensitive 또는 restricted 소스s가 존재함",
            "engineering support가 필요함"
          ]
        },
        {
          eyebrow: "Classify",
          title: "Material classification",
          description: "technical work가 시작되기 전에 사용 가능, 제한, 제외, 모호한 자료을 구분합니다.",
          points: [
            "허용된 소스 categories",
            "제한된 소스 categories",
            "제외된 소스 categories",
            "모호한 자료의 검토 owner"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Access",
          title: "Access 및 operator 경계",
          description: "customer teams, Random Walk, operators, admin 화면s에 대한 access assumptions를 명시합니다.",
          points: [
            "Customer access assumptions",
            "Random Walk access assumptions",
            "Operator roles 및 admin 화면s",
            "Credential handling assumptions"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Movement",
          title: "Movement 및 processing 경계",
          description: "모델 작업 중 자료이 어떻게 복사, staging, 변환, 또는 사용될 수 있는지 정의합니다.",
          points: [
            "허용된 movement paths",
            "범위가 정해진 project environments",
            "Temporary working copies 및 caches",
            "Training 및 검색 handling limits"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Retention",
          title: "Exclusion, retention, deletion",
          description: "Retention expectations는 워크플로s 밖에 둔 자료, intermediate 결과물, derived files, return 또는 deletion paths를 포함합니다.",
          points: [
            "워크플로s 밖에 유지되는 자료",
            "Retention period assumptions",
            "Intermediate 결과물 expectations",
            "Deletion 또는 return expectations"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Boundary 검토 메모",
          description: "Review notes는 handling assumptions, exceptions, customer decisions를 기록하지만 advisor judgment를 대체하지 않습니다.",
          points: [
            "implementation 전 경계 checklist",
            "Customer 검토 지점",
            "Exception 및 exclusion notes",
            "Advisor decisions는 별도로 기록"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Use-case 경계 패턴",
          description: "Boundary work는 generic privacy policy가 아니라 intended 모델 작업flow를 중심으로 형성됩니다.",
          points: [
            "Dataset preparation 경계",
            "Retrieval corpus 경계",
            "Evaluation set 경계",
            "Local 런타임 경계"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "출력은 technical scoping과 고객 측 검토를 위한 실용적인 경계 package입니다.",
          points: [
            "경계 브리프",
            "Source classification notes",
            "Access 및 movement assumptions",
            "Retention 및 검토 메모"
          ]
        }
      ],
      notice: "Random Walk는 engineering support를 제공합니다. 공식적인 legal 및 regulatory decisions는 고객과 qualified advisors에게 남아 있습니다.",
      closing: {
        title: "자료을 다루기 전에 경계를 결정하세요.",
        description: "소스 categories, intended model use, access expectations, retention requirements, advisor 검토 responsibilities를 가져오세요.",
        fit: [
          "모델 작업가 시작되기 전에 경계가 필요합니다.",
          "자료은 먼저 고객 측 검토가 필요합니다.",
          "Engineering choices는 handling limits에 따라 달라집니다."
        ],
        notFit: [
          "legal 또는 compliance advice가 필요합니다.",
          "formal compliance sign-off를 기대합니다.",
          "training data에 대한 automatic clearance를 원합니다."
        ],
        ctaTitle: "private 데이터 경계 검토",
        ctaDescription: "소스 categories, intended 모델 작업flow, access expectations, 검토 responsibilities를 공유하세요."
      }
    },
    "sovereign-infrastructure": {
      eyebrow: "소버린 인프라",
      title: "고객이 제어하는 경계 안의 AI.",
      description: "우리는 런타임, 데이터 패키지, model 결과물, 접근 경로, 롤백 절차가 고객이 정의한 제어 아래 머무르는 scoped 운영 환경를 위한 프라이빗 AI 시스템를 구축합니다.",
      taxonomy: [
        "customer VPC",
        "private cloud",
        "on-prem GPU",
        "air-gapped",
        "edge 런타임"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "프라이빗 인프라 경로 범위 설정",
        href: "/contact"
      },
      secondaryLink: {
        label: "서비스 개요 보기",
        href: "/서비스"
      },
      outputsAtGlance: [
        {
          label: "경계 브리프",
          description: "고객이 제어하는 environment 안에 무엇이 머무르는지에 대한 실무적 정의."
        },
        {
          label: "Deployment topology",
          description: "Runtime placement, hardware assumptions, network path, operating constraints."
        },
        {
          label: "Runtime package",
          description: "Model 결과물, 런타임 config, dependencies, 활성화 메모."
        },
        {
          label: "Access assumptions",
          description: "누가 무엇에 도달할 수 있는지, 결과물가 어떻게 이동하는지, temporary files가 어디에 존재할 수 있는지."
        },
        {
          label: "Runbook notes",
          description: "Operator steps, debug logs, recovery assumptions, rollback paths."
        }
      ],
      sections: [
        {
          eyebrow: "Fit",
          title: "이 서비스가 적합한 경우",
          description: "고객이 제어하는 배포 경계 안에서 실행되어야 하는 정의된 AI 워크플로를 가진 팀에 가장 적합합니다.",
          points: [
            "프라이빗 AI 작업flow가 이미 식별됨",
            "고객이 정의한 infra구조 경계가 필요함",
            "Data 또는 결과물가 generic SaaS를 사용할 수 없음",
            "직접적인 implementation support가 필요함"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "operating 경계 선택",
          description: "우리는 모든 워크플로를 하나의 hosted 패턴에 밀어 넣지 않고, 고객 environment를 중심으로 배포를 형성합니다.",
          points: [
            "로컬 workstation 또는 Apple Silicon",
            "On-prem GPU 또는 내부 server",
            "Customer VPC 또는 private cloud",
            "제한된 network 또는 edge site"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Runtime",
          title: "런타임 path package화",
          description: "선택된 프라이빗 배포 경계를 위해 런타임, model 결과물, dependencies, 활성화 메모를 준비합니다.",
          points: [
            "Model 결과물 및 어댑터 placement",
            "Runtime config 및 dependency notes",
            "Quantization 및 VRAM budget assumptions",
            "Version 및 update constraints"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Operation",
          title: "environment 안에서 운영",
          description: "system은 first 배포 pass부터 operator paths, 진단, local logs, rollback assumptions를 고려해 설계됩니다.",
          points: [
            "Operator path 및 admin 화면",
            "Hardware capacity 및 VRAM checks",
            "Runtime debug logs 및 process health",
            "model changes를 위한 rollback path"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "movement 및 retention 제어",
          description: "데이터 패키지, model 결과물, checkpoints, caches, temporary files가 scoped environment를 통해 어떻게 이동하는지 정의합니다.",
          points: [
            "Artifact 및 data movement paths",
            "Scratch disks 및 temporary compilation files",
            "Fine-tuning checkpoints 및 cache locations",
            "Return, deletion, retention expectations"
          ],
          assetId: "services-fused-model"
        },
        {
          eyebrow: "Patterns",
          title: "지원하는 배포 패턴",
          description: "일반적인 패턴는 private model environments이지, generic cloud migration이나 managed SaaS 제어 planes가 아닙니다.",
          points: [
            "studios를 위한 Local AI workstation",
            "On-prem GPU inference 런타임",
            "Private VPC model service",
            "Restricted 평가 environment"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Deliverables ledger",
          description: "이 engagement는 technical 검토, implementation, handoff, 범위가 정해진 future changes를 위한 구체적인 infra구조 자료을 만들어냅니다.",
          points: [
            "Boundary 및 environment brief",
            "Runtime topology 및 package contents",
            "Access, movement, retention assumptions",
            "Runbook, 진단, 롤백 메모"
          ]
        },
        {
          eyebrow: "Support",
          title: "직접적인 implementation support",
          description: "Random Walk는 고객 팀과 직접 협업하여 첫 프라이빗 AI 배포 path를 안착시킵니다.",
          points: [
            "implementation 전 architecture pass",
            "remote 또는 on-site support",
            "first 배포 stabilization",
            "follow-up changes는 별도로 범위 설정"
          ]
        }
      ],
      notice: "여기서 Sovereign은 고객이 제어하는 engineering 경계를 의미하며, legal 또는 government claim이 아닙니다.",
      closing: {
        title: "경계 안에서 구축하세요.",
        description: "워크플로, target environment, model 결과물, data movement limits, hardware constraints, operator expectations를 가져오세요.",
        fit: [
          "고객이 제어하는 environments 안에서 AI 워크플로s가 필요합니다.",
          "팀에 정의된 워크플로와 배포 경계가 있습니다.",
          "system을 안착시키기 위한 직접적인 engineering support가 필요합니다."
        ],
        notFit: [
          "legal 또는 government sovereignty determinations가 필요합니다.",
          "generic hosted SaaS AI 배포를 원합니다.",
          "guaranteed security, compliance, 또는 unsupported operation을 기대합니다."
        ],
        ctaTitle: "customer-제어led AI 배포 범위 설정",
        ctaDescription: "워크플로, environment, 런타임 target, data movement limits, operating responsibilities를 공유하세요."
      }
    }
  }
};export const creationDetailPages: DetailCollection<CreationDetailSlug> = {
  en: {
    melix: {
      eyebrow: "Creation / Melix",
      title: "A local AI reference runtime.",
      description: "Melix is Random Walk's open-source engineering reference for Apple Silicon local AI work: runtime operation, LoRA training, benchmarking, evaluation, CLI workflows, and local integration paths.",
      taxonomy: ["Apple Silicon", "local runtime", "MLX / MLX LoRA", "CLI workflows", "evaluation records"],
      assetId: "home-melix-product-panel",
      primaryLink: { label: "Explore Melix", href: "/melix" },
      secondaryLink: { label: "Repository metadata", href: "/resources/repository-metadata" },
      outputsAtGlance: [
        { label: "Local runtime reference", description: "A working reference for local-first model operation on Apple Silicon." },
        { label: "Model loading path", description: "A practical surface for loading and running local models." },
        { label: "LoRA adaptation workflow", description: "Local LoRA training and adapter-oriented workflow exploration." },
        { label: "Benchmarking and evaluation", description: "Records for comparing behavior, runs, and task results." },
        { label: "CLI and local server path", description: "Operator workflows and local integration surfaces for experiments." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why Melix belongs here",
          description: "Melix is a creation because it makes Random Walk's local AI engineering style visible as working software.",
          points: ["Open-source engineering reference artifact", "Built around local-first AI operation", "Shows adaptation and evaluation practice", "Informs customer-controlled infrastructure work"]
        },
        {
          eyebrow: "Runtime",
          title: "Local-first runtime thinking",
          description: "Melix starts from the machine near the operator, where model behavior, runtime choices, and artifacts can remain inspectable.",
          points: ["Apple Silicon as a local target", "Local inference as a design center", "Runtime choices remain operator-visible", "macOS workflows stay close to use"],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "Adaptation",
          title: "Adapter-oriented model work",
          description: "Melix gives Random Walk a reference surface for LoRA training, adapter handling, and local adaptation experiments.",
          points: ["LoRA training workflow exploration", "MLX LoRA as a local path", "Adapter activation stays explicit", "Dataset assumptions can be tested"],
          assetId: "services-lora-adapter"
        },
        {
          eyebrow: "Evidence",
          title: "Benchmarking and evaluation records",
          description: "Melix supports the habit of keeping model work tied to comparison records, task results, and known limits.",
          points: ["Benchmarking as local evidence", "Evaluation records near the runtime", "Comparison notes across runs", "Known limits stay visible"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Operation",
          title: "CLI and local server bridge",
          description: "Melix exposes operator-oriented workflows through CLI and local server paths for controlled experiments and integration work.",
          points: ["CLI workflows for operators", "Local server path for integration", "Runtime state remains inspectable", "No hosted control plane assumption"],
          assetId: "melix-scene-composite"
        },
        {
          eyebrow: "Services",
          title: "How Melix informs services",
          description: "Melix can support scoped customer work when appropriate, but it is not a universal dependency for every engagement.",
          points: ["Validates local runtime assumptions", "Informs adaptation delivery choices", "Helps discuss evaluation surfaces", "Supports selected scoped engagements"]
        },
        {
          eyebrow: "Boundaries",
          title: "What Melix is not",
          description: "This creation page should not turn Melix into a generic product claim or broad infrastructure promise.",
          points: ["Not a hosted AI platform", "Not a broad orchestration suite", "Not a public API gateway wrapper", "Not required for every service"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "Melix gives the creation set a concrete technical artifact, not only a visual concept or written philosophy.",
          points: ["Local runtime codebase", "CLI and macOS workflows", "LoRA training references", "Benchmarking and evaluation patterns"]
        }
      ],
      notice: "This creation page is distinct from the product page and explains why Melix belongs in the Random Walk creation set.",
      closing: {
        title: "Read Melix as an engineering reference.",
        description: "Use this page to understand how Random Walk thinks about local runtime, adaptation, evaluation, and customer-controlled AI work.",
        fit: [
          "You want Random Walk's local AI style in software form.",
          "You are exploring Apple Silicon model workflows.",
          "You need a reference for private AI runtime discussions."
        ],
        notFit: [
          "You want a managed SaaS AI product.",
          "You need a no-code chatbot builder.",
          "You expect universal production deployment guarantees."
        ],
        ctaTitle: "Explore the Melix runtime",
        ctaDescription: "Review the product page or repository metadata to understand the local runtime reference in more detail."
      }
    },
    "1-tok": {
      eyebrow: "Creation / 1-TOK",
      title: "Compact learning units from source material.",
      description: "1-TOK explores how selected material becomes bounded practice units, generated exercise packets, review status, and reusable local or private learning workflows.",
      taxonomy: ["source packet", "practice unit", "exercise packet", "review status", "local reuse"],
      assetId: "creation-1-tok-cover",
      officialLink: { label: "Visit 1-TOK", href: "http://1-tok.pro/" },
      primaryLink: { label: "Discuss structured workflows", href: "/contact" },
      secondaryLink: { label: "Creations overview", href: "/creations" },
      outputsAtGlance: [
        { label: "Source packet", description: "Selected material kept attached to the generated practice unit." },
        { label: "Practice unit", description: "A bounded learning object small enough to inspect." },
        { label: "Exercise set", description: "Generated prompts shaped around the selected source material." },
        { label: "Answer key", description: "Draft answers kept with the exercise packet for review." },
        { label: "Review status", description: "A simple state for draft, reviewed, or revised material." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why 1-TOK belongs here",
          description: "1-TOK is a Random Walk creation because it turns generation into a bounded, reviewable workflow artifact.",
          points: ["Structured learning-unit workflow", "Source-bound generation pattern", "Reviewable output package", "Local or private reuse model"]
        },
        {
          eyebrow: "Unit",
          title: "Shape the practice unit",
          description: "Each unit starts with a limited source scope and a clear practice objective before exercises are generated.",
          points: ["One selected source scope", "One practice objective", "Exercises and answers together", "Status attached to the unit"],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Generation",
          title: "Keep generation source-bound",
          description: "Generated exercises stay tied to the selected source packet so the reviewer can inspect the basis.",
          points: ["Source material selected first", "Practice type defined before generation", "Exercise packet tied to source", "Reviewer can inspect the basis"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Review",
          title: "Keep review visible",
          description: "1-TOK treats generated material as draft output until it is reviewed, revised, or rejected.",
          points: ["Draft material remains marked", "Corrections stay with the unit", "Weak examples can be noted", "Review status guides reuse"],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Boundary",
          title: "Support private reuse",
          description: "The workflow can be used with local or private material when the project boundary is scoped that way.",
          points: ["Private notes can stay bounded", "Internal material needs review", "Public examples require approval", "Reuse follows the source boundary"],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Patterns",
          title: "Practice patterns",
          description: "1-TOK is suited to compact practice formats where source material, generated output, and review status should stay together.",
          points: ["Vocabulary review packets", "Concept check units", "Reading comprehension units", "Technical documentation drills"]
        },
        {
          eyebrow: "Boundaries",
          title: "What 1-TOK is not",
          description: "This creation should not be read as a finished edtech product or automatic learning system.",
          points: ["Not a generic AI tutor", "Not a gamified learning app", "Not a public content library", "Not automatic correctness"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "The creation demonstrates a compact workflow shape for source-bound generation and reviewable reuse.",
          points: ["Source packet structure", "Practice unit shape", "Exercise and answer packet", "Review status model"]
        }
      ],
      notice: "Public material is intentionally limited until examples are approved for publication.",
      closing: {
        title: "Build practice units from bounded material.",
        description: "Use 1-TOK as a reference for source-bound practice generation, review status, and local or private reuse.",
        fit: [
          "You want compact practice units from selected material.",
          "You need generated exercises to remain reviewable.",
          "You care about local or private reuse boundaries."
        ],
        notFit: [
          "You want a shipped consumer edtech app.",
          "You expect automatic correctness without review.",
          "You need a public library of ready-made lessons."
        ],
        ctaTitle: "Discuss a source-bound workflow",
        ctaDescription: "Review how source material can become bounded practice units with generated exercises, answers, and review status."
      }
    },
    "fiber-link": {
      eyebrow: "Creation / Fiber Link",
      title: "Connected systems need explicit handoff.",
      description: "Fiber Link is a Random Walk reference workspace for connection boundaries, access paths, reliability assumptions, recovery notes, and operational handoff in private infrastructure work.",
      taxonomy: ["connection boundary", "access path", "recovery notes", "operator handoff", "reviewable constraints"],
      assetId: "creation-fiber-link-cover",
      officialLink: { label: "Visit Fiber Link", href: "http://fiberlink.me/" },
      primaryLink: { label: "Discuss infrastructure notes", href: "/contact" },
      secondaryLink: { label: "Work examples", href: "/work" },
      outputsAtGlance: [
        { label: "Connection boundary", description: "Defines where systems meet, separate, or cross control lines." },
        { label: "Access path", description: "Records operator, admin, and service entry routes." },
        { label: "Reliability assumptions", description: "Captures failure modes, recovery notes, manual checks, and operating limits." },
        { label: "Handoff notes", description: "Describes what the next operator needs to understand after delivery." },
        { label: "Reviewable constraints", description: "Keeps decisions, exclusions, open questions, and implementation limits visible." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why Fiber Link belongs here",
          description: "Fiber Link captures Random Walk's connected-system implementation thinking as a reference workspace, not a shipped network product.",
          points: ["Boundary-aware infrastructure notes", "Access and handoff made explicit", "Reliability treated as assumptions", "Connected to private implementation work"]
        },
        {
          eyebrow: "Boundary",
          title: "Define the connection boundary",
          description: "The first concern is where systems meet, what crosses the boundary, and where responsibility changes.",
          points: ["Connected systems and surfaces", "Data, control, and operator paths", "Boundary ownership assumptions", "Constraints recorded before build"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Access",
          title: "Make access paths explicit",
          description: "Fiber Link treats access as an implementation surface: who reaches what, through which route, and under which assumptions.",
          points: ["Operator entry points", "Admin and service surfaces", "Credential and secret assumptions", "Approval points for sensitive actions"],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Recovery",
          title: "Record reliability assumptions",
          description: "Reliability is handled as reviewable assumptions: known failure modes, operator-visible fail states, checks, and recovery notes.",
          points: ["Failure modes that matter", "Manual checks and observed states", "Recovery and retry notes", "Operating limits kept visible"],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Handoff",
          title: "Prepare operational handoff",
          description: "The work is not complete when a connection runs; it must be understandable after first delivery.",
          points: ["Install or activation notes", "Rollback and recovery notes", "Ownership and escalation boundaries", "Customer operator expectations"],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "Patterns",
          title: "Implementation patterns",
          description: "Fiber Link is useful for thinking through connected systems inside scoped private infrastructure work.",
          points: ["Local runtime to private resource", "Restricted data source connection", "Operator-approved workflow path", "Melix or 1-TOK context scoped case by case"]
        },
        {
          eyebrow: "Boundaries",
          title: "What Fiber Link is not",
          description: "Fiber Link is a creation reference, not a network product, protocol, managed service, or customer deployment story.",
          points: ["Not a telecom system", "Not a VPN or service mesh", "Not an uptime-backed product", "Not a public customer case study"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "The reference shape is a compact set of notes for implementation review, operator handoff, and scoped follow-up.",
          points: ["Connection notes", "Access path assumptions", "Reliability and recovery notes", "Handoff checklist"]
        }
      ],
      notice: "This is a creation page, not a public customer case study.",
      closing: {
        title: "Make the connection understandable.",
        description: "Use Fiber Link as a reference for explicit boundaries, access paths, recovery assumptions, and handoff notes in private infrastructure work.",
        fit: [
          "You are mapping how systems cross boundaries.",
          "You need implementation notes, not product claims.",
          "You care about access, recovery, and handoff."
        ],
        notFit: [
          "You need a packaged network product.",
          "You expect formal uptime claims.",
          "You want a public customer case study."
        ],
        ctaTitle: "Discuss connected-system implementation",
        ctaDescription: "Bring the systems, boundary, access path, failure modes, and operator handoff expectations."
      }
    },
    neuron: {
      eyebrow: "Creation / Neuron",
      title: "Interfaces for understandable local AI.",
      description: "Neuron is a Random Walk reference direction for operator-facing local AI interfaces: context surfaces, visible state patterns, approval boundaries, controls, and review notes.",
      taxonomy: ["context surface", "visible state", "operator controls", "approval boundary", "review surface"],
      assetId: "creation-neuron-cover",
      officialLink: { label: "Visit Neuron", href: "http://neuron.magickbase.com/" },
      primaryLink: { label: "Discuss interface patterns", href: "/contact" },
      secondaryLink: { label: "Melix", href: "/melix" },
      outputsAtGlance: [
        { label: "Context surface", description: "Shows which source material, model, adapter, or package the workflow is using." },
        { label: "Visible state", description: "Makes workflow status, transitions, waiting points, and failures easier to understand." },
        { label: "Operator controls", description: "Defines deliberate actions such as approve, reject, retry, revise, cancel, or hand off." },
        { label: "Approval boundary", description: "Marks where human confirmation should happen before sensitive actions continue." },
        { label: "Review surface", description: "Keeps outputs, references, known-limit notes, and review status close to the workflow." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why Neuron belongs here",
          description: "Neuron captures Random Walk's interface thinking for local and private AI workflows without presenting a shipped application.",
          points: ["Operator-facing interface reference", "Built around understandable local workflows", "Connects runtime work to human review", "Supports scoped implementation discussions"]
        },
        {
          eyebrow: "Context",
          title: "Make context visible",
          description: "The interface should make selected material and active runtime assumptions visible before output is trusted or reused.",
          points: ["Selected source material", "Active model or adapter context", "Missing or ambiguous inputs", "Source and output references"],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "State",
          title: "Show workflow state",
          description: "Neuron treats state as an interface pattern: operators should see what is happening and what comes next.",
          points: ["Example state concepts", "Current action visibility", "Next operator action", "Failure or waiting state"],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Control",
          title: "Design operator controls",
          description: "Operator actions should be bounded, deliberate, and legible, especially when the workflow may affect private material or downstream systems.",
          points: ["Approve or reject output", "Retry or revise with context", "Cancel or hand off work", "Confirm sensitive actions"],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Review",
          title: "Keep review material close",
          description: "Outputs should stay near their references, notes, known limits, and review status instead of becoming detached results.",
          points: ["Output references", "Review notes", "Known-limit notes", "Review status"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "Local interface patterns",
          description: "Neuron is useful for thinking through operation surfaces around private runtime, data packages, evaluation, and adapters.",
          points: ["Local runtime operation surface", "Data package review interface", "Evaluation review surface", "Melix context scoped case by case"]
        },
        {
          eyebrow: "Boundaries",
          title: "What Neuron is not",
          description: "Neuron should not be read as a finished application, generic chat surface, automation platform, or scientific claim.",
          points: ["Not a finished application", "Not a generic chat surface", "Not an admin console", "Not a scientific claim"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "The reference shape is a compact set of interface concepts for reviewable local and private AI operation.",
          points: ["Context-surface concepts", "Visible state patterns", "Operator control patterns", "Review surface notes"]
        }
      ],
      notice: "Neuron is presented as a creation direction, not a shipped standalone product claim.",
      closing: {
        title: "Make local AI understandable.",
        description: "Use Neuron as a reference for context visibility, operator action, review status, and approval boundaries in private AI workflows.",
        fit: [
          "You are designing operator-facing AI workflows.",
          "You need context and state to stay visible.",
          "You care about review boundaries and handoff."
        ],
        notFit: [
          "You want a packaged AI helper.",
          "You expect self-running execution claims.",
          "You need a finished console."
        ],
        ctaTitle: "Discuss local AI interface patterns",
        ctaDescription: "Bring the workflow, runtime context, operator actions, review needs, and approval boundaries."
      }
    },
    "utxo-data": {
      eyebrow: "Creation / UTXO Data",
      title: "Records shaped for reviewable systems.",
      description: "UTXO Data is a Random Walk reference direction for bounded records, state-aware history, provenance notes, and review surfaces. Here, UTXO is a record-design lens, not a market-facing data product.",
      taxonomy: ["bounded records", "state transitions", "provenance notes", "review surface", "evidence package"],
      assetId: "creation-utxo-data-cover",
      officialLink: { label: "Open UTXO Data", href: "https://p.magickbase.com/" },
      primaryLink: { label: "Discuss record design", href: "/contact" },
      secondaryLink: { label: "Data platform", href: "/services/data-platform" },
      outputsAtGlance: [
        { label: "Record shape", description: "Defines the bounded unit, identity, scope, and attached metadata." },
        { label: "State transition", description: "Describes how records are created, revised, consumed, superseded, or closed." },
        { label: "Provenance notes", description: "Keeps source, transformation, review, and exclusion context attached." },
        { label: "Query surface", description: "Supports inspection by source, status, transition, or review state." },
        { label: "Evidence package", description: "Makes records usable for review, evaluation, handoff, or model work." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why UTXO Data belongs here",
          description: "UTXO Data captures Random Walk's thinking around structured history, reviewable records, and evidence packages for private workflows.",
          points: ["Record design as infrastructure thinking", "Useful for customer-controlled data systems", "Connected to local and private AI workflows", "Not a public data product"]
        },
        {
          eyebrow: "Shape",
          title: "Define the record shape",
          description: "Good records need clear boundaries before they can support review, reuse, or model work.",
          points: ["Bounded unit and identity", "Metadata kept with the record", "Scope and review context", "Reusable without becoming loose notes"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "State",
          title: "Make transitions explicit",
          description: "State-aware records help teams see when material changes, closes, or becomes replaced by later work.",
          points: ["Created, revised, or closed", "Consumed or superseded records", "Transition notes kept visible", "Review boundary around changes"],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Provenance",
          title: "Keep provenance notes attached",
          description: "Source, transformation, review, and exclusion context should remain near the record instead of living in scattered notes.",
          points: ["Source reference notes", "Transformation notes", "Review checkpoint notes", "Exclusions and gaps"],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Review",
          title: "Support query and review",
          description: "Review surfaces should help operators inspect records by source, status, transition, and review state.",
          points: ["Filterable notes by source", "Status and transition views", "Review state inspection", "Useful for evaluation sets"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "Use-case patterns",
          description: "UTXO Data is useful where private workflows need structured records rather than detached operational notes.",
          points: ["Dataset package manifest", "Evaluation record set", "Document transformation log", "Handoff-ready records"]
        },
        {
          eyebrow: "Boundaries",
          title: "What UTXO Data is not",
          description: "This creation should not be read as a market-facing product, public data browser, or finished implementation claim.",
          points: ["Not an asset product", "Not a public data browser", "Not a published customer dataset", "Not a guarantee system"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "The reference shape is a compact set of concepts for structured history and reviewable data work.",
          points: ["Record shape notes", "Transition concepts", "Provenance note patterns", "Evidence package structure"]
        }
      ],
      notice: "The page explains the theme; it does not publish private customer data or internal ledgers.",
      closing: {
        title: "Keep records reviewable.",
        description: "Use UTXO Data as a reference for bounded records, state-aware history, provenance notes, and evidence packages in private workflows.",
        fit: [
          "You are designing reviewable records for private workflows.",
          "You need state changes and provenance notes visible.",
          "You care about evidence packages over loose notes."
        ],
        notFit: [
          "You want a public data browser.",
          "You expect guarantee claims.",
          "You need published customer data."
        ],
        ctaTitle: "Discuss structured record design",
        ctaDescription: "Bring the record type, state changes, review needs, source context, and private workflow boundary."
      }
    },
    "distributed-paradigm": {
      eyebrow: "Creation / Distributed Paradigm",
      title: "Distributed systems need visible boundaries.",
      description: "Distributed Paradigm is a Random Walk reference notebook for local-first implementation notes, scoped state movement, ownership handoff, recovery paths, and operational memory.",
      taxonomy: ["local-first stance", "sync boundary", "ownership handoff", "recovery path", "operational memory"],
      assetId: "creation-distributed-paradigm-cover",
      officialLink: { label: "View kuai on GitHub", href: "https://github.com/ckb-js/kuai" },
      primaryLink: { label: "Discuss implementation notes", href: "/contact" },
      secondaryLink: { label: "Notes", href: "/notes" },
      outputsAtGlance: [
        { label: "Local-first stance", description: "Clarifies what should remain close to the operator or customer environment." },
        { label: "Sync boundary", description: "Defines what state moves, when it moves, and across which boundary." },
        { label: "Ownership handoff", description: "Records who operates, reviews, updates, and recovers each part." },
        { label: "Recovery path", description: "Keeps failure modes, manual checks, and rollback notes visible." },
        { label: "Operational memory", description: "Preserves decisions, state notes, constraints, and unresolved items after delivery." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why this belongs here",
          description: "This creation captures practical implementation notes for distributed product systems without presenting a product platform or full archive.",
          points: ["Local-first product thinking", "Boundary-aware implementation notes", "Recovery and handoff focus", "Useful for private workflows"]
        },
        {
          eyebrow: "Local",
          title: "Define the local stance",
          description: "Local-first work starts by deciding what should stay close to the operator and what may depend on later movement.",
          points: ["Local operation where scoped", "Useful state near the operator", "Deferred movement when appropriate", "Customer environment considered first"],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Boundary",
          title: "Scope state movement",
          description: "Boundary-aware sync is treated as a set of decisions: what moves, when, by which route, and under whose review.",
          points: ["State movement assumptions", "Manual or staged transfer", "Stale-state visibility", "Review before reuse"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Ownership",
          title: "Make ownership handoff clear",
          description: "Distributed product work needs clear responsibility for operation, updates, review, and recovery after first delivery.",
          points: ["Operator responsibility notes", "Update ownership assumptions", "Review and escalation boundaries", "Handoff state after delivery"],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "Recovery",
          title: "Preserve operational memory",
          description: "Recovery notes and operational memory help teams understand what happened, what changed, and what remains unresolved.",
          points: ["Failure modes that matter", "Manual checks and rollback notes", "State notes after incidents", "Unresolved decisions kept visible"],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "Patterns",
          title: "Implementation patterns",
          description: "The notebook is useful for product systems where local state, boundary movement, and handoff must remain understandable.",
          points: ["Local runtime with deferred movement", "Private package with review boundary", "Site-local tool with central notes", "Customer-controlled workflow boundaries"]
        },
        {
          eyebrow: "Boundaries",
          title: "What this is not",
          description: "This page should not be read as a product platform, theoretical essay, hosting product, or full archive.",
          points: ["Not a general systems textbook", "Not a public coordination system", "Not a hosting product", "Not a full archive"]
        },
        {
          eyebrow: "Ledger",
          title: "Artifact ledger",
          description: "The reference shape is a compact set of notes for local-first work, sync boundaries, ownership, and recovery.",
          points: ["Local-first notes", "Sync boundary patterns", "Ownership handoff notes", "Recovery path notes"]
        }
      ],
      notice: "This page is a public direction marker, not a complete research archive.",
      closing: {
        title: "Keep distributed work understandable.",
        description: "Use this notebook as a reference for local-first implementation notes, scoped state movement, ownership handoff, and operational memory.",
        fit: [
          "You are designing local-first product systems.",
          "You need boundaries and handoff made explicit.",
          "You want implementation notes, not theory."
        ],
        notFit: [
          "You need a packaged infrastructure product.",
          "You expect recovery without operator work.",
          "You want a complete research archive."
        ],
        ctaTitle: "Discuss distributed implementation notes",
        ctaDescription: "Bring the workflow, local state, movement boundary, ownership expectations, and recovery concerns."
      }
    }
  },
  zh: {
    melix: {
      eyebrow: "创造物 / Melix",
      title: "一个本地 AI 参考 运行时。",
      description: "Melix 是 Random Walk 面向 Apple Silicon 本地 AI 工作的 开源工程参考：涵盖 运行操作、LoRA 训练、基准测试、评估、CLI 工作流，以及本地 集成路径。",
      taxonomy: [
        "Apple Silicon",
        "本地 运行时",
        "MLX / MLX LoRA",
        "CLI 工作流",
        "评估 records"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "探索 Melix",
        href: "/melix"
      },
      secondaryLink: {
        label: "仓库元数据",
        href: "/re来源s/repository-metadata"
      },
      outputsAtGlance: [
        {
          label: "本地 运行时 参考",
          description: "面向 Apple Silicon 上 local-first model operation 的可运行参考。"
        },
        {
          label: "模型加载路径",
          description: "用于加载与运行本地模型的实用表面。"
        },
        {
          label: "LoRA 适配 工作流",
          description: "本地 LoRA 训练 与以 适配器 为中心的 工作流 探索。"
        },
        {
          label: "Benchmarking 与 评估",
          description: "用于比较行为、运行过程与任务结果的记录。"
        },
        {
          label: "CLI 与本地服务器路径",
          description: "面向 operator 的 工作流s，以及用于实验的本地 integration 界面s。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么 Melix 属于这里",
          description: "Melix 是一项 creation，因为它将 Random Walk 的本地 AI 工程风格以可运行的软件形式显现出来。",
          points: [
            "Open-来源 engineering reference 工件",
            "围绕 local-first AI operation 构建",
            "展示 适配 与 评估 实践",
            "为客户可控的基础设施工作提供参考"
          ]
        },
        {
          eyebrow: "Runtime",
          title: "Local-first 运行时 思维",
          description: "Melix 从靠近 operator 的机器开始，在那里，模型行为、运行时 选择与 工件 都可以保持可检查。",
          points: [
            "Apple Silicon 作为本地目标",
            "本地 inference 作为设计中心",
            "运行时 选择保持 operator-visible",
            "macOS 工作流s 贴近实际使用"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "Adaptation",
          title: "以 适配器 为中心的模型工作",
          description: "Melix 为 Random Walk 提供一个参考表面，用于 LoRA 训练、适配器 handling 与本地 适配 experiments。",
          points: [
            "LoRA 训练 工作流 探索",
            "MLX LoRA 作为本地路径",
            "适配器 activation 保持明确",
            "dataset assumptions 可以被测试"
          ],
          assetId: "services-lora-adapter"
        },
        {
          eyebrow: "证据",
          title: "Benchmarking 与 评估 records",
          description: "Melix 支持一种习惯：让模型工作始终连接到 comparison records、task results 与 已知限制。",
          points: [
            "Benchmarking 作为本地证据",
            "评估 records 靠近 运行时",
            "跨运行的 comparison notes",
            "已知限制 保持可见"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Operation",
          title: "CLI 与本地服务器桥接",
          description: "Melix 通过 CLI 与本地服务器路径暴露面向 operator 的 工作流s，用于受控实验与 integration work。",
          points: [
            "面向 operator 的 CLI 工作流",
            "用于 integration 的本地服务器路径",
            "运行时 state 保持可检查",
            "不假设 hosted 控制 plane"
          ],
          assetId: "melix-scene-composite"
        },
        {
          eyebrow: "服务",
          title: "Melix 如何影响 服务",
          description: "在适当情况下，Melix 可以支持有范围的客户工作，但它不是每一次 engagement 的通用 dependency。",
          points: [
            "验证本地 运行时 assumptions",
            "为 适配 delivery choices 提供参考",
            "帮助讨论 评估 界面s",
            "支持经选择的 限定范围的 engagements"
          ]
        },
        {
          eyebrow: "边界",
          title: "Melix 不是什么",
          description: "这个 creation page 不应把 Melix 转化为泛泛的 product claim，或宽泛的 infra结构 promise。",
          points: [
            "不是 hosted AI platform",
            "不是 broad orchestration suite",
            "不是 public API gateway wrapper",
            "不是每项 service 的必要条件"
          ]
        },
        {
          eyebrow: "台账",
          title: "Artifact 台账",
          description: "Melix 为 creation set 提供了一个具体的技术 工件，而不只是视觉概念或书面理念。",
          points: [
            "本地 运行时 codebase",
            "CLI 与 macOS 工作流s",
            "LoRA 训练 references",
            "Benchmarking 与 评估 模式"
          ]
        }
      ],
      notice: "这个 creation page 不同于 product page，它说明 Melix 为什么属于 Random Walk creation set。",
      closing: {
        title: "将 Melix 读作一份工程参考。",
        description: "使用本页理解 Random Walk 如何思考本地 运行时、适配、评估，以及客户可控的 AI 工作。",
        fit: [
          "你希望以软件形式看到 Random Walk 的本地 AI 风格。",
          "你正在探索 Apple Silicon 模型工作flows。",
          "你需要一份用于 private AI 运行时 讨论的参考。"
        ],
        notFit: [
          "你想要 managed SaaS AI product。",
          "你需要 no-code chatbot builder。",
          "你期待 universal production 部署 guarantees。"
        ],
        ctaTitle: "探索 Melix 运行时",
        ctaDescription: "查看 product page 或 repository metadata，以更细致地理解这份本地 运行时 参考。"
      }
    },
    "1-tok": {
      eyebrow: "创造物 / 1-TOK",
      title: "源材料凝练而成的紧凑学习单元。",
      description: "1-TOK 探索如何将选定材料转化为有边界的练习单元、生成式练习包、复习状态，以及可复用的本地或私有学习工作流。",
      taxonomy: [
        "源材料包",
        "练习单元",
        "练习包",
        "复习状态",
        "本地复用"
      ],
      assetId: "creation-1-tok-cover",
      officialLink: {
        label: "访问 1-TOK",
        href: "http://1-tok.pro/"
      },
      primaryLink: {
        label: "讨论结构化工作流",
        href: "/contact"
      },
      secondaryLink: {
        label: "Creation 总览",
        href: "/creations"
      },
      outputsAtGlance: [
        {
          label: "源材料包",
          description: "选定材料始终附着于生成的练习单元。"
        },
        {
          label: "练习单元",
          description: "一个有边界的学习对象，小到足以被细致审阅。"
        },
        {
          label: "练习集",
          description: "围绕选定源材料塑形生成的提示题。"
        },
        {
          label: "答案键",
          description: "草拟答案随练习包保留，便于复习审阅。"
        },
        {
          label: "复习状态",
          description: "用于标记草稿、已审阅或已修订材料的简明状态。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么 1-TOK 属于这里",
          description: "1-TOK 是一项 Random Walk creation，因为它把生成转化为有边界、可审阅的工作流 工件。",
          points: [
            "结构化学习单元工作流",
            "源材料绑定的生成模式",
            "可审阅的输出包",
            "本地或私有复用模型"
          ]
        },
        {
          eyebrow: "单元",
          title: "塑造练习单元",
          description: "每个单元都先从有限的源材料范围与清晰的练习目标开始，再生成练习。",
          points: [
            "一个选定的源材料范围",
            "一个练习目标",
            "练习与答案并置",
            "状态附着于单元"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "生成",
          title: "让生成保持源材料绑定",
          description: "生成的练习持续关联到选定源材料包，使审阅者可以检查其依据。",
          points: [
            "先选择源材料",
            "生成前定义练习类型",
            "练习包绑定源材料",
            "审阅者可检查依据"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "复习",
          title: "让复习保持可见",
          description: "1-TOK 将生成材料视为草稿输出，直到其被审阅、修订或拒绝。",
          points: [
            "草稿材料保持标记",
            "修正随单元保留",
            "薄弱示例可被记录",
            "复习状态引导复用"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "边界",
          title: "支持私有复用",
          description: "当项目边界按此设定时，该工作流可用于本地或私有材料。",
          points: [
            "私有笔记可保持有界",
            "内部材料需要审阅",
            "公开示例需要批准",
            "复用遵循源材料边界"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "模式",
          title: "练习模式",
          description: "1-TOK 适用于紧凑型练习格式，其中源材料、生成输出与复习状态应保持在一起。",
          points: [
            "词汇复习包",
            "概念检查单元",
            "阅读理解单元",
            "技术文档练习"
          ]
        },
        {
          eyebrow: "边界",
          title: "1-TOK 不是什么",
          description: "这项 creation 不应被理解为成熟的教育科技产品或自动学习系统。",
          points: [
            "不是通用 AI 导师",
            "不是游戏化学习应用",
            "不是公共内容库",
            "不是自动正确性"
          ]
        },
        {
          eyebrow: "账本",
          title: "Artifact 账本",
          description: "这项 creation 展示了一种紧凑的工作流形态，用于源材料绑定生成与可审阅复用。",
          points: [
            "源材料包结构",
            "练习单元形态",
            "练习与答案包",
            "复习状态模型"
          ]
        }
      ],
      notice: "公开材料会被有意限制，直到示例获准发布。",
      closing: {
        title: "从有边界的材料构建练习单元。",
        description: "将 1-TOK 作为源材料绑定练习生成、复习状态，以及本地或私有复用的参考。",
        fit: [
          "你希望从选定材料生成紧凑练习单元。",
          "你需要生成练习保持可审阅。",
          "你重视本地或私有复用边界。"
        ],
        notFit: [
          "你想要一个已发布的消费者教育科技应用。",
          "你期待无需审阅的自动正确性。",
          "你需要一个现成课程的公共库。"
        ],
        ctaTitle: "讨论源材料绑定工作流",
        ctaDescription: "审阅源材料如何转化为有边界的练习单元，并配备生成练习、答案与复习状态。"
      }
    },
    "fiber-link": {
      eyebrow: "创造物 / Fiber Link",
      title: "互联的系统，需要清晰而明确的交接。",
      description: "Fiber Link 是 Random Walk 的参考型工作空间，用于私有基础设施工作中的连接边界、访问路径、可靠性假设、恢复 notes，以及运营交接。",
      taxonomy: [
        "连接边界",
        "访问路径",
        "恢复 notes",
        "operator 交接",
        "可审查约束"
      ],
      assetId: "creation-fiber-link-cover",
      officialLink: {
        label: "访问 Fiber Link",
        href: "http://fiberlink.me/"
      },
      primaryLink: {
        label: "讨论基础设施 notes",
        href: "/contact"
      },
      secondaryLink: {
        label: "工作示例",
        href: "/work"
      },
      outputsAtGlance: [
        {
          label: "连接边界",
          description: "定义系统在何处相遇、分离，或跨越控制线。"
        },
        {
          label: "访问路径",
          description: "记录 operator、admin 与 service 的入口路径。"
        },
        {
          label: "可靠性假设",
          description: "捕捉故障模式、恢复 notes、人工检查与运行边界。"
        },
        {
          label: "交接 notes",
          description: "说明下一位 operator 在交付之后需要理解的内容。"
        },
        {
          label: "可审查约束",
          description: "让决策、排除项、开放问题与实现边界保持可见。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么 Fiber Link 属于这里",
          description: "Fiber Link 将 Random Walk 对互联系统实现的思考沉淀为一个参考型工作空间，而不是一个已交付的网络产品。",
          points: [
            "具备边界意识的基础设施 notes",
            "让访问与交接变得明确",
            "将可靠性视为假设来处理",
            "连接到私有实现工作"
          ]
        },
        {
          eyebrow: "边界",
          title: "定义连接边界",
          description: "首先要关心的是系统在哪里相遇，什么会跨越边界，以及责任在哪里发生转移。",
          points: [
            "互联的系统与表面",
            "数据、控制与 operator 路径",
            "边界所有权假设",
            "在构建之前记录约束"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "访问",
          title: "让访问路径清晰可见",
          description: "Fiber Link 将访问视为一种实现表面：谁能到达什么，通过哪条路径，以及基于哪些假设。",
          points: [
            "operator 入口点",
            "admin 与 service 表面",
            "credential 与 secret 假设",
            "敏感操作的批准点"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "恢复",
          title: "记录可靠性假设",
          description: "可靠性以可审查的假设来处理：已知故障模式、operator 可见的失效状态、检查，以及恢复 notes。",
          points: [
            "真正重要的故障模式",
            "人工检查与观测状态",
            "恢复与重试 notes",
            "让运行边界保持可见"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "交接",
          title: "准备运营交接",
          description: "当连接能够运行时，工作并未结束；它在首次交付之后仍必须能够被理解。",
          points: [
            "安装或激活 notes",
            "回滚与恢复 notes",
            "所有权与升级边界",
            "客户 operator 预期"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "模式",
          title: "实现模式",
          description: "Fiber Link 适合在有范围的私有基础设施工作中，梳理互联系统的实现思路。",
          points: [
            "本地 运行时 到私有资源",
            "受限数据源连接",
            "operator 批准的工作流路径",
            "Melix 或 1-TOK 上下文 按案例限定范围"
          ]
        },
        {
          eyebrow: "边界",
          title: "Fiber Link 不是什么",
          description: "Fiber Link 是 creation reference，不是网络产品、protocol、managed service，或客户部署故事。",
          points: [
            "不是 telecom system",
            "不是 VPN 或 service mesh",
            "不是以 uptime 背书的产品",
            "不是公开客户 case study"
          ]
        },
        {
          eyebrow: "台账",
          title: "Artifact 台账",
          description: "这种参考形态是一组紧凑 notes，用于实现审查、operator 交接，以及有范围的后续跟进。",
          points: [
            "连接 notes",
            "访问路径假设",
            "可靠性与恢复 notes",
            "交接 checklist"
          ]
        }
      ],
      notice: "这是一个 creation page，不是公开客户 case study。",
      closing: {
        title: "让连接变得可以被理解。",
        description: "在私有基础设施工作中，将 Fiber Link 作为明确边界、访问路径、恢复假设与交接 notes 的参考。",
        fit: [
          "你正在梳理系统如何跨越边界。",
          "你需要的是实现 notes，而不是产品宣称。",
          "你重视访问、恢复与交接。"
        ],
        notFit: [
          "你需要的是打包好的网络产品。",
          "你期待正式的 uptime 声明。",
          "你想要公开客户 case study。"
        ],
        ctaTitle: "讨论互联系统实现",
        ctaDescription: "带来系统、边界、访问路径、故障模式，以及 operator 交接预期。"
      }
    },
    neuron: {
      eyebrow: "创造物 / Neuron",
      title: "让本地 AI 可以被理解的 界面。",
      description: "Neuron 是 Random Walk 面向 operator 的本地 AI 界面 参考方向：涵盖 上下文界面、可见状态模式、审批边界、控制项 与 评审说明。",
      taxonomy: [
        "上下文 界面",
        "可见状态",
        "operator 控制项",
        "approval 边界",
        "评审 界面"
      ],
      assetId: "creation-neuron-cover",
      officialLink: {
        label: "访问 Neuron",
        href: "http://neuron.magickbase.com/"
      },
      primaryLink: {
        label: "讨论 界面模式",
        href: "/contact"
      },
      secondaryLink: {
        label: "Melix",
        href: "/melix"
      },
      outputsAtGlance: [
        {
          label: "上下文界面",
          description: "显示 工作流 正在使用哪些 来源 材料、model、适配器 或 package。"
        },
        {
          label: "可见状态",
          description: "让 工作流 状态、转换、等待点与失败更容易被理解。"
        },
        {
          label: "Operator 控制项",
          description: "定义有意图的动作，例如 approve、reject、retry、revise、cancel 或 hand off。"
        },
        {
          label: "Approval 边界",
          description: "标记在敏感操作继续之前应由人进行确认的位置。"
        },
        {
          label: "Review 界面",
          description: "让 输出、references、known-limit notes 与 评审 status 始终靠近 工作流。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么 Neuron 属于这里",
          description: "Neuron 捕捉 Random Walk 对本地与 私有 AI 工作flows 的 interface 思考，而不将其呈现为一个已交付的应用。",
          points: [
            "面向 operator 的 interface reference",
            "围绕可理解的本地 工作流s 构建",
            "将 运行时 work 连接到人工 评审",
            "支持有范围的实现讨论"
          ]
        },
        {
          eyebrow: "Context",
          title: "让 上下文 可见",
          description: "在 输出 被信任或复用之前，interface 应让被选中的 材料 与当前 运行时 assumptions 保持可见。",
          points: [
            "被选中的 来源 材料",
            "当前 model 或 适配器 上下文",
            "缺失或含糊的 inputs",
            "来源 与 输出 references"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "状态",
          title: "展示 工作流状态",
          description: "Neuron 将状态视为一种 interface 模式：operators 应该看见正在发生什么，以及下一步是什么。",
          points: [
            "示例 state concepts",
            "当前动作可见性",
            "下一步 operator action",
            "失败或等待状态"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Control",
          title: "设计 operator 控制项",
          description: "Operator actions 应有边界、有意图，并且清晰可读，尤其当 工作流 可能影响 private 材料 或下游系统时。",
          points: [
            "Approve 或 reject 输出",
            "带 上下文 retry 或 revise",
            "Cancel 或 hand off work",
            "确认敏感操作"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Review",
          title: "让 评审 材料 保持靠近",
          description: "Outputs 应与其 references、notes、已知限制 和 评审 status 保持相邻，而不是变成脱离语境的结果。",
          points: [
            "Output references",
            "Review notes",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "本地 界面模式",
          description: "Neuron 适合用于思考 private 运行时、数据包、评估 与 适配器 周围的 operation 界面s。",
          points: [
            "本地 运行操作 界面",
            "Data package 评审 interface",
            "Evaluation 评审 界面",
            "Melix 上下文 按案例限定范围"
          ]
        },
        {
          eyebrow: "边界",
          title: "Neuron 不是什么",
          description: "Neuron 不应被解读为一个完成的应用、generic chat 界面、automation platform 或 scientific claim。",
          points: [
            "不是 finished application",
            "不是 generic chat 界面",
            "不是 admin console",
            "不是 scientific claim"
          ]
        },
        {
          eyebrow: "台账",
          title: "Artifact 台账",
          description: "这种参考形态是一组紧凑的 interface concepts，用于可审查的本地与 private AI operation。",
          points: [
            "Context-界面 concepts",
            "可见状态 模式",
            "Operator 控制 模式",
            "Review 界面 notes"
          ]
        }
      ],
      notice: "Neuron 以 creation direction 的形式呈现，而不是一个已交付的 standalone product claim。",
      closing: {
        title: "让本地 AI 变得可以被理解。",
        description: "在 私有 AI 工作flows 中，将 Neuron 作为 上下文 visibility、operator action、评审 status 与 审批边界 的参考。",
        fit: [
          "你正在设计面向 operator 的 AI 工作流s。",
          "你需要 上下文 与 state 持续可见。",
          "你重视 评审 边界 与 handoff。"
        ],
        notFit: [
          "你想要一个 packaged AI helper。",
          "你期待 self-running execution claims。",
          "你需要一个 finished console。"
        ],
        ctaTitle: "讨论本地 AI 界面模式",
        ctaDescription: "带来 工作流、运行时 上下文、operator actions、评审 needs 与 审批边界。"
      }
    },
    "utxo-data": {
      eyebrow: "创造物 / UTXO Data",
      title: "为可审查系统塑形的记录。",
      description: "UTXO Data 是 Random Walk 的参考方向，面向有边界的记录、具备状态意识的历史、provenance notes 与 评审 界面s。在这里，UTXO 是一种记录设计视角，而不是面向市场的数据产品。",
      taxonomy: [
        "有边界的记录",
        "状态转换",
        "provenance notes",
        "评审 界面",
        "证据 package"
      ],
      assetId: "creation-utxo-data-cover",
      officialLink: {
        label: "打开 UTXO Data",
        href: "https://p.magickbase.com/"
      },
      primaryLink: {
        label: "讨论记录设计",
        href: "/contact"
      },
      secondaryLink: {
        label: "数据平台",
        href: "/服务/data-platform"
      },
      outputsAtGlance: [
        {
          label: "记录形态",
          description: "定义有边界的单元、身份、范围与附属 metadata。"
        },
        {
          label: "状态转换",
          description: "描述记录如何被创建、修订、消耗、取代或关闭。"
        },
        {
          label: "Provenance notes",
          description: "让 来源、transformation、评审 与 exclusion 上下文 始终附着于记录。"
        },
        {
          label: "查询表面",
          description: "支持按 来源、status、transition 或 评审 state 进行检查。"
        },
        {
          label: "Evidence package",
          description: "让记录可用于 评审、评估、handoff 或 模型工作。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么 UTXO Data 属于这里",
          description: "UTXO Data 捕捉 Random Walk 围绕结构化历史、可审查记录与私有 工作流s 中 证据 packages 的思考。",
          points: [
            "将记录设计视为基础设施思维",
            "适用于客户可控的数据系统",
            "连接到本地与 私有 AI 工作flows",
            "不是公开数据产品"
          ]
        },
        {
          eyebrow: "形态",
          title: "定义记录形态",
          description: "好的记录需要清晰边界，之后才能支持 评审、reuse 或 模型工作。",
          points: [
            "有边界的单元与身份",
            "metadata 与记录保持在一起",
            "范围与 评审 上下文",
            "可复用，而不会变成松散 notes"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "状态",
          title: "让转换明确可见",
          description: "具备状态意识的记录帮助团队看清材料何时变化、关闭，或被后续工作替代。",
          points: [
            "被创建、修订或关闭",
            "被消耗或取代的记录",
            "transition notes 保持可见",
            "围绕变更的 评审 边界"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Provenance",
          title: "让 provenance notes 保持附着",
          description: "Source、transformation、评审 与 exclusion 上下文 应留在记录附近，而不是散落在零碎 notes 中。",
          points: [
            "Source reference notes",
            "Transformation notes",
            "Review checkpoint notes",
            "排除项与缺口"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Review",
          title: "支持查询与 评审",
          description: "Review 界面s 应帮助 operators 按 来源、status、transition 与 评审 state 检查记录。",
          points: [
            "可按 来源 筛选的 notes",
            "status 与 transition views",
            "评审 state inspection",
            "适用于 评估 sets"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "Use-case 模式",
          description: "当 私有工作流 需要结构化记录，而不是脱离语境的 operational notes 时，UTXO Data 尤为有用。",
          points: [
            "Dataset package manifest",
            "Evaluation record set",
            "Document transformation log",
            "可交接的记录"
          ]
        },
        {
          eyebrow: "边界",
          title: "UTXO Data 不是什么",
          description: "这项 creation 不应被解读为面向市场的产品、公开数据浏览器，或已完成实现的宣称。",
          points: [
            "不是 asset product",
            "不是公开数据浏览器",
            "不是已发布的客户 dataset",
            "不是 guarantee system"
          ]
        },
        {
          eyebrow: "台账",
          title: "Artifact 台账",
          description: "这种参考形态是一组紧凑的概念，用于结构化历史与可审查的数据工作。",
          points: [
            "记录形态 notes",
            "transition concepts",
            "provenance note 模式",
            "证据 package 结构"
          ]
        }
      ],
      notice: "本页解释的是主题；它不会发布私有客户数据或内部 ledgers。",
      closing: {
        title: "让记录保持可审查。",
        description: "在 私有工作流 中，将 UTXO Data 作为有边界记录、具备状态意识的历史、provenance notes 与 证据 packages 的参考。",
        fit: [
          "你正在为 私有工作流 设计可审查记录。",
          "你需要状态变化与 provenance notes 保持可见。",
          "相比松散 notes，你更重视 证据 packages。"
        ],
        notFit: [
          "你想要公开数据浏览器。",
          "你期待 guarantee claims。",
          "你需要已发布的客户数据。"
        ],
        ctaTitle: "讨论结构化记录设计",
        ctaDescription: "带来记录类型、状态变化、评审 needs、来源 上下文 与 私有工作流 边界。"
      }
    },
    "distributed-paradigm": {
      eyebrow: "创造物 / Distributed Paradigm",
      title: "分布式系统需要可见的边界。",
      description: "Distributed Paradigm 是 Random Walk 的参考笔记本，用于记录 local-first 实现笔记、限定范围的状态移动、所有权交接、恢复路径与运营记忆。",
      taxonomy: [
        "local-first 立场",
        "同步边界",
        "所有权交接",
        "恢复路径",
        "运营记忆"
      ],
      assetId: "creation-distributed-paradigm-cover",
      officialLink: {
        label: "在 GitHub 查看 kuai",
        href: "https://github.com/ckb-js/kuai"
      },
      primaryLink: {
        label: "讨论实现笔记",
        href: "/contact"
      },
      secondaryLink: {
        label: "笔记",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Local-first 立场",
          description: "阐明哪些内容应留在操作者或客户环境附近。"
        },
        {
          label: "同步边界",
          description: "定义哪些状态会移动、何时移动，以及跨越哪一道边界。"
        },
        {
          label: "所有权交接",
          description: "记录每一部分由谁运营、审阅、更新与恢复。"
        },
        {
          label: "恢复路径",
          description: "让故障模式、人工检查与回滚笔记保持可见。"
        },
        {
          label: "运营记忆",
          description: "在交付之后保留决策、状态笔记、约束与未决事项。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "它为何属于这里",
          description: "这项 creation 捕捉分布式产品系统的实践实现笔记，而不将其呈现为产品平台或完整档案。",
          points: [
            "Local-first 产品思维",
            "具备边界意识的实现笔记",
            "聚焦恢复与交接",
            "适用于私有工作流"
          ]
        },
        {
          eyebrow: "本地",
          title: "定义本地立场",
          description: "Local-first 工作始于判断哪些内容应贴近操作者，哪些内容可以依赖后续移动。",
          points: [
            "在限定范围内进行本地运营",
            "让有用状态贴近操作者",
            "在适当时延后移动",
            "优先考虑客户环境"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "边界",
          title: "限定状态移动范围",
          description: "具备边界意识的同步被视为一组决策：移动什么、何时移动、经由哪条路径，以及由谁审阅。",
          points: [
            "状态移动假设",
            "人工或分阶段传输",
            "陈旧状态可见性",
            "复用前审阅"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "所有权",
          title: "让所有权交接清晰",
          description: "分布式产品工作需要在首次交付后，对运营、更新、审阅与恢复的责任作出清晰界定。",
          points: [
            "操作者责任笔记",
            "更新所有权假设",
            "审阅与升级边界",
            "交付后的交接状态"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "恢复",
          title: "保留运营记忆",
          description: "恢复笔记与运营记忆帮助团队理解发生了什么、改变了什么，以及仍有哪些问题未被解决。",
          points: [
            "重要的故障模式",
            "人工检查与回滚笔记",
            "事件后的状态笔记",
            "让未决决策保持可见"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "模式",
          title: "实现模式",
          description: "这本笔记本适用于那些需要让本地状态、边界移动与交接持续可理解的产品系统。",
          points: [
            "带延后移动的本地运行时",
            "带审阅边界的私有包",
            "带中心笔记的站点本地工具",
            "由客户控制的工作流边界"
          ]
        },
        {
          eyebrow: "边界",
          title: "它不是什么",
          description: "本页不应被解读为产品平台、理论文章、托管产品或完整档案。",
          points: [
            "不是通用系统教材",
            "不是公共协调系统",
            "不是托管产品",
            "不是完整档案"
          ]
        },
        {
          eyebrow: "账本",
          title: "Artifact 账本",
          description: "该参考形态是一组紧凑笔记，服务于 local-first 工作、同步边界、所有权与恢复。",
          points: [
            "Local-first 笔记",
            "同步边界模式",
            "所有权交接笔记",
            "恢复路径笔记"
          ]
        }
      ],
      notice: "本页是公开的方向标记，而不是完整的研究档案。",
      closing: {
        title: "让分布式工作保持可理解。",
        description: "将这本笔记本作为参考，用于 local-first 实现笔记、限定范围的状态移动、所有权交接与运营记忆。",
        fit: [
          "你正在设计 local-first 产品系统。",
          "你需要让边界与交接清晰显化。",
          "你想要实现笔记，而不是理论。"
        ],
        notFit: [
          "你需要打包好的基础设施产品。",
          "你期待无需操作者参与的恢复。",
          "你想要完整的研究档案。"
        ],
        ctaTitle: "讨论分布式实现笔记",
        ctaDescription: "带上工作流、本地状态、移动边界、所有权预期与恢复关切。"
      }
    }
  },
  ja: {
    melix: {
      eyebrow: "制作物 / Melix",
      title: "ローカル AI の参照 ランタイム。",
      description: "Melix は、Apple Silicon におけるローカル AI 作業のための Random Walk の オープンソースのエンジニアリング参照 です。ランタイム運用、LoRA トレーニング、ベンチマーク、評価、CLI ワークフロー、そしてローカル 統合経路 を扱います。",
      taxonomy: [
        "Apple Silicon",
        "ローカル ランタイム",
        "MLX / MLX LoRA",
        "CLI ワークフロー",
        "評価 records"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "Melix を探索",
        href: "/melix"
      },
      secondaryLink: {
        label: "リポジトリメタデータ",
        href: "/reソースs/repository-metadata"
      },
      outputsAtGlance: [
        {
          label: "ローカル ランタイム 参照",
          description: "Apple Silicon 上での local-first model operation のための、動作する参照です。"
        },
        {
          label: "モデル読み込み経路",
          description: "ローカルモデルを読み込み、実行するための実践的なサーフェスです。"
        },
        {
          label: "LoRA 適応 ワークフロー",
          description: "ローカル LoRA トレーニング と、アダプター 指向 ワークフロー の探索です。"
        },
        {
          label: "Benchmarking と 評価",
          description: "挙動、実行、タスク結果を比較するための記録です。"
        },
        {
          label: "CLI とローカルサーバー経路",
          description: "実験のための operator ワークフローs とローカル integration 画面s です。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "Melix がここに属する理由",
          description: "Melix は creation です。Random Walk のローカル AI エンジニアリングのスタイルを、動作するソフトウェアとして可視化するからです。",
          points: [
            "Open-ソース engineering reference 成果物",
            "local-first AI operation を中心に構築",
            "適応 と 評価 の実践を示す",
            "顧客が制御するインフラストラクチャ作業に知見を与える"
          ]
        },
        {
          eyebrow: "Runtime",
          title: "Local-first ランタイム の思考",
          description: "Melix は operator の近くにあるマシンから始まります。そこでは、モデルの挙動、ランタイム の選択、成果物 を検査可能なまま保てます。",
          points: [
            "Apple Silicon をローカルターゲットにする",
            "ローカル inference を設計の中心に置く",
            "ランタイム choices は operator-visible のまま保つ",
            "macOS ワークフローs を利用の現場に近づける"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "Adaptation",
          title: "アダプター 指向のモデル作業",
          description: "Melix は Random Walk に、LoRA トレーニング、アダプター handling、ローカル 適応 experiments のための参照サーフェスを与えます。",
          points: [
            "LoRA トレーニング ワークフロー の探索",
            "MLX LoRA をローカル経路として扱う",
            "アダプター activation は明示的に保つ",
            "dataset assumptions を検証可能にする"
          ],
          assetId: "services-lora-adapter"
        },
        {
          eyebrow: "証拠",
          title: "Benchmarking と 評価 records",
          description: "Melix は、モデル作業を comparison records、タスク results、既知の限界 に結びつけておく習慣を支えます。",
          points: [
            "Benchmarking をローカルな証拠として扱う",
            "評価 records を ランタイム の近くに置く",
            "実行間の comparison notes",
            "既知の限界 を見える状態に保つ"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Operation",
          title: "CLI とローカルサーバーの橋渡し",
          description: "Melix は、制御された実験と integration work のために、CLI とローカルサーバー経路を通じて operator-oriented ワークフローs を露出します。",
          points: [
            "operator のための CLI ワークフロー",
            "integration のためのローカルサーバー経路",
            "ランタイム state は検査可能なまま保つ",
            "hosted 制御 plane を前提にしない"
          ],
          assetId: "melix-scene-composite"
        },
        {
          eyebrow: "サービス",
          title: "Melix が サービス に与えるもの",
          description: "Melix は適切な場合、スコープを定めた顧客作業を支援できます。ただし、すべての engagement における普遍的な dependency ではありません。",
          points: [
            "ローカル ランタイム assumptions を検証する",
            "適応 delivery choices に知見を与える",
            "評価 画面s の議論を助ける",
            "選択された scoped engagements を支援する"
          ]
        },
        {
          eyebrow: "境界",
          title: "Melix ではないもの",
          description: "この creation page は、Melix を一般的な product claim や広範な infra構造 promise に変えるべきではありません。",
          points: [
            "hosted AI platform ではありません",
            "broad orchestration suite ではありません",
            "public API gateway wrapper ではありません",
            "すべての service に必須ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "Melix は creation set に、視覚的な概念や書かれた哲学だけではない、具体的な技術 成果物 を与えます。",
          points: [
            "ローカル ランタイム codebase",
            "CLI と macOS ワークフローs",
            "LoRA トレーニング references",
            "Benchmarking と 評価 パターン"
          ]
        }
      ],
      notice: "この creation page は product page とは別のものであり、Melix が Random Walk creation set に属する理由を説明します。",
      closing: {
        title: "Melix をエンジニアリング参照として読む。",
        description: "このページは、Random Walk がローカル ランタイム、適応、評価、そして顧客が制御する AI 作業をどのように考えるかを理解するためのものです。",
        fit: [
          "Random Walk のローカル AI スタイルをソフトウェアの形で見たい。",
          "Apple Silicon モデル作業flows を探索している。",
          "private AI ランタイム の議論に使う参照が必要である。"
        ],
        notFit: [
          "managed SaaS AI product が欲しい。",
          "no-code chatbot builder が必要である。",
          "universal production 配備 guarantees を期待している。"
        ],
        ctaTitle: "Melix ランタイム を探索",
        ctaDescription: "product page または repository metadata を確認し、このローカル ランタイム 参照をより詳しく理解してください。"
      }
    },
    "1-tok": {
      eyebrow: "制作物 / 1-TOK",
      title: "ソース素材から生まれる、コンパクトな学習ユニット。",
      description: "1-TOK は、選定された素材が、境界づけられた練習ユニット、生成された演習パケット、レビュー状態、そして再利用可能なローカルまたはプライベートな学習ワークフローへと変わる過程を探究します。",
      taxonomy: [
        "ソースパケット",
        "練習ユニット",
        "演習パケット",
        "レビュー状態",
        "ローカル再利用"
      ],
      assetId: "creation-1-tok-cover",
      officialLink: {
        label: "1-TOK を訪問",
        href: "http://1-tok.pro/"
      },
      primaryLink: {
        label: "構造化ワークフローを相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "制作物 概要",
        href: "/creations"
      },
      outputsAtGlance: [
        {
          label: "ソースパケット",
          description: "選定された素材を、生成された練習ユニットに結びつけたまま保持します。"
        },
        {
          label: "練習ユニット",
          description: "確認できるほど小さく境界づけられた学習オブジェクト。"
        },
        {
          label: "演習セット",
          description: "選定されたソース素材を軸に形づくられた生成プロンプト。"
        },
        {
          label: "解答キー",
          description: "レビューのため、演習パケットとともに保持される下書き解答。"
        },
        {
          label: "レビュー状態",
          description: "下書き、レビュー済み、改訂済みの素材を示すシンプルな状態。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "1-TOK がここに属する理由",
          description: "1-TOK は Random Walk の creation です。生成を、境界づけられ、レビュー可能なワークフロー 成果物 へと変えるからです。",
          points: [
            "構造化された学習ユニットワークフロー",
            "ソースに結びついた生成パターン",
            "レビュー可能な出力パッケージ",
            "ローカルまたはプライベートな再利用モデル"
          ]
        },
        {
          eyebrow: "ユニット",
          title: "練習ユニットを形づくる",
          description: "各ユニットは、演習が生成される前に、限定されたソース範囲と明確な練習目的から始まります。",
          points: [
            "選定されたひとつのソース範囲",
            "ひとつの練習目的",
            "演習と解答を一体で保持",
            "状態をユニットに付与"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "生成",
          title: "生成をソースに結びつけておく",
          description: "生成された演習は選定されたソースパケットに結びついたまま保たれ、レビュー担当者が根拠を確認できます。",
          points: [
            "まずソース素材を選定",
            "生成前に練習タイプを定義",
            "演習パケットをソースに結合",
            "レビュー担当者が根拠を確認可能"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "レビュー",
          title: "レビューを見える状態に保つ",
          description: "1-TOK は、生成された素材を、レビュー、改訂、または却下されるまでは下書き出力として扱います。",
          points: [
            "下書き素材はマークされたまま保持",
            "修正はユニットとともに残す",
            "弱い例は記録可能",
            "レビュー状態が再利用を導く"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "境界",
          title: "プライベートな再利用を支える",
          description: "プロジェクト境界がそのように設計されている場合、このワークフローはローカルまたはプライベート素材にも使用できます。",
          points: [
            "プライベートノートを有界に保持可能",
            "内部素材にはレビューが必要",
            "公開例には承認が必要",
            "再利用はソース境界に従う"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "パターン",
          title: "練習パターン",
          description: "1-TOK は、ソース素材、生成出力、レビュー状態を一緒に保つべきコンパクトな練習形式に適しています。",
          points: [
            "語彙レビュー用パケット",
            "概念確認ユニット",
            "読解ユニット",
            "技術ドキュメント演習"
          ]
        },
        {
          eyebrow: "境界",
          title: "1-TOK ではないもの",
          description: "この creation は、完成済みのエドテック製品や自動学習システムとして読むべきものではありません。",
          points: [
            "汎用 AI チューターではありません",
            "ゲーム化された学習アプリではありません",
            "公開コンテンツライブラリではありません",
            "自動的な正確性ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "この creation は、ソースに結びついた生成とレビュー可能な再利用のための、コンパクトなワークフロー形状を示します。",
          points: [
            "ソースパケット構造",
            "練習ユニットの形状",
            "演習と解答のパケット",
            "レビュー状態モデル"
          ]
        }
      ],
      notice: "公開素材は、例が公開承認を得るまで意図的に制限されています。",
      closing: {
        title: "境界づけられた素材から練習ユニットを構築する。",
        description: "1-TOK を、ソースに結びついた練習生成、レビュー状態、ローカルまたはプライベートな再利用の参照として使用してください。",
        fit: [
          "選定された素材からコンパクトな練習ユニットを作りたい。",
          "生成された演習をレビュー可能なまま保つ必要がある。",
          "ローカルまたはプライベートな再利用境界を重視している。"
        ],
        notFit: [
          "出荷済みの消費者向けエドテックアプリを求めている。",
          "レビューなしの自動的な正確性を期待している。",
          "すぐに使えるレッスンの公開ライブラリが必要である。"
        ],
        ctaTitle: "ソースに結びついたワークフローを相談",
        ctaDescription: "ソース素材が、生成された演習、解答、レビュー状態を備えた境界づけられた練習ユニットへと変わる方法をレビューします。"
      }
    },
    "fiber-link": {
      eyebrow: "制作物 / Fiber Link",
      title: "接続されたシステムには、明示的な引き継ぎが必要です。",
      description: "Fiber Link は Random Walk の参照用ワークスペースです。プライベートインフラストラクチャの作業における接続境界、アクセス経路、信頼性の前提、復旧 notes、そして運用引き継ぎを扱います。",
      taxonomy: [
        "接続境界",
        "アクセス経路",
        "復旧 notes",
        "operator 引き継ぎ",
        "レビュー可能な制約"
      ],
      assetId: "creation-fiber-link-cover",
      officialLink: {
        label: "Fiber Link を訪問",
        href: "http://fiberlink.me/"
      },
      primaryLink: {
        label: "インフラストラクチャ notes を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "制作事例",
        href: "/work"
      },
      outputsAtGlance: [
        {
          label: "接続境界",
          description: "システムがどこで出会い、分かれ、あるいは制御線を越えるのかを定義します。"
        },
        {
          label: "アクセス経路",
          description: "operator、admin、service の入口ルートを記録します。"
        },
        {
          label: "信頼性の前提",
          description: "故障モード、復旧 notes、手動確認、運用限界を捉えます。"
        },
        {
          label: "引き継ぎ notes",
          description: "納品後、次の operator が理解すべきことを記述します。"
        },
        {
          label: "レビュー可能な制約",
          description: "意思決定、除外事項、未解決の問い、実装上の限界を見える状態に保ちます。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "Fiber Link がここに属する理由",
          description: "Fiber Link は、接続されたシステムの実装に対する Random Walk の思考を、出荷済みネットワーク製品ではなく、参照用ワークスペースとして保持します。",
          points: [
            "境界を意識したインフラストラクチャ notes",
            "アクセスと引き継ぎを明示化",
            "信頼性を前提として扱う",
            "プライベートな実装作業と接続"
          ]
        },
        {
          eyebrow: "境界",
          title: "接続境界を定義する",
          description: "最初に問うべきことは、システムがどこで出会い、何が境界を越え、どこで責任が変わるのかです。",
          points: [
            "接続されたシステムとサーフェス",
            "データ、制御、operator の経路",
            "境界の所有に関する前提",
            "構築前に記録される制約"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "アクセス",
          title: "アクセス経路を明示する",
          description: "Fiber Link はアクセスを実装サーフェスとして扱います。誰が何に到達するのか、どのルートを通るのか、そしてどの前提のもとで行われるのか。",
          points: [
            "operator の入口点",
            "admin と service のサーフェス",
            "credential と secret の前提",
            "機微な操作の承認点"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "復旧",
          title: "信頼性の前提を記録する",
          description: "信頼性はレビュー可能な前提として扱います。既知の故障モード、operator から見える失敗状態、確認、復旧 notes を記録します。",
          points: [
            "重要な故障モード",
            "手動確認と観測された状態",
            "復旧とリトライの notes",
            "運用限界を見える状態に保つ"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "引き継ぎ",
          title: "運用引き継ぎを準備する",
          description: "接続が動いた時点で作業は完了ではありません。初回納品の後にも理解できるものでなければなりません。",
          points: [
            "インストールまたは有効化の notes",
            "ロールバックと復旧の notes",
            "所有権とエスカレーション境界",
            "顧客 operator への期待値"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "パターン",
          title: "実装パターン",
          description: "Fiber Link は、スコープを定めたプライベートインフラストラクチャ作業の中で、接続されたシステムを検討する際に有用です。",
          points: [
            "ローカル ランタイム からプライベートリソースへ",
            "制限されたデータソース接続",
            "operator が承認するワークフロー経路",
            "Melix または 1-TOK 文脈 はケースごとにスコープ設定"
          ]
        },
        {
          eyebrow: "境界",
          title: "Fiber Link ではないもの",
          description: "Fiber Link は creation reference であり、ネットワーク製品、protocol、managed service、または顧客導入ストーリーではありません。",
          points: [
            "telecom system ではありません",
            "VPN または service mesh ではありません",
            "uptime によって保証される製品ではありません",
            "公開顧客 case study ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "この参照形態は、実装レビュー、operator 引き継ぎ、スコープを定めたフォローアップのための、コンパクトな notes の集合です。",
          points: [
            "接続 notes",
            "アクセス経路の前提",
            "信頼性と復旧の notes",
            "引き継ぎ checklist"
          ]
        }
      ],
      notice: "これは creation page であり、公開顧客 case study ではありません。",
      closing: {
        title: "接続を、理解できるものにする。",
        description: "プライベートインフラストラクチャ作業において、明示的な境界、アクセス経路、復旧前提、引き継ぎ notes の参照として Fiber Link を使用します。",
        fit: [
          "システムがどのように境界を越えるかを整理している。",
          "必要なのは製品主張ではなく、実装 notes である。",
          "アクセス、復旧、引き継ぎを重視している。"
        ],
        notFit: [
          "パッケージ化されたネットワーク製品が必要である。",
          "正式な uptime 主張を期待している。",
          "公開顧客 case study を求めている。"
        ],
        ctaTitle: "接続システムの実装を相談",
        ctaDescription: "システム、境界、アクセス経路、故障モード、そして operator 引き継ぎへの期待値を持ち込んでください。"
      }
    },
    neuron: {
      eyebrow: "制作物 / Neuron",
      title: "理解できるローカル AI のための インターフェース。",
      description: "Neuron は、オペレーター向け なローカル AI インターフェース に向けた Random Walk の参照方向です。コンテキスト画面、visible state パターン、承認境界、操作項目、そして レビューメモ を扱います。",
      taxonomy: [
        "文脈 画面",
        "visible state",
        "operator 操作項目",
        "approval 境界",
        "レビュー 画面"
      ],
      assetId: "creation-neuron-cover",
      officialLink: {
        label: "Neuron を訪問",
        href: "http://neuron.magickbase.com/"
      },
      primaryLink: {
        label: "インターフェースパターン を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "Melix",
        href: "/melix"
      },
      outputsAtGlance: [
        {
          label: "コンテキスト画面",
          description: "ワークフロー がどの ソース 資料、model、アダプター、または package を使用しているかを示します。"
        },
        {
          label: "Visible state",
          description: "ワークフロー の状態、遷移、待機点、失敗を理解しやすくします。"
        },
        {
          label: "Operator 操作項目",
          description: "approve、reject、retry、revise、cancel、hand off などの意図的な操作を定義します。"
        },
        {
          label: "Approval 境界",
          description: "機微な操作が続行される前に、人による確認が行われるべき位置を示します。"
        },
        {
          label: "Review 画面",
          description: "出力、references、known-limit notes、レビュー status を ワークフロー の近くに保ちます。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "Neuron がここに属する理由",
          description: "Neuron は、出荷済みアプリケーションとして提示することなく、ローカルおよび private AI ワークフローs に対する Random Walk の interface 思考を捉えます。",
          points: [
            "オペレーター向け interface reference",
            "理解しやすいローカル ワークフローs を中心に構築",
            "ランタイム work を人間の レビュー につなげる",
            "スコープを定めた実装議論を支援"
          ]
        },
        {
          eyebrow: "Context",
          title: "文脈 を見えるようにする",
          description: "出力 が信頼または再利用される前に、interface は選択された 資料 と有効な ランタイム assumptions を見える状態にすべきです。",
          points: [
            "選択された ソース 資料",
            "有効な model または アダプター 文脈",
            "欠けている、または曖昧な inputs",
            "ソース と 出力 references"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "状態",
          title: "ワークフロー状態 を示す",
          description: "Neuron は状態を interface パターン として扱います。operators は、何が起きているのか、次に何が来るのかを見るべきです。",
          points: [
            "state concepts の例",
            "現在の action visibility",
            "次の operator action",
            "失敗または待機 state"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Control",
          title: "operator 操作項目 を設計する",
          description: "Operator actions は、境界づけられ、意図的で、読み取りやすいものであるべきです。ワークフロー が private 資料 や下流システムに影響しうる場合は特にそうです。",
          points: [
            "出力 を approve または reject",
            "文脈 とともに retry または revise",
            "work を cancel または hand off",
            "機微な actions を確認"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Review",
          title: "レビュー 資料 を近くに保つ",
          description: "Outputs は、切り離された結果になるのではなく、references、notes、既知の限界、レビュー status の近くに留まるべきです。",
          points: [
            "Output references",
            "Review notes",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "ローカル インターフェースパターン",
          description: "Neuron は、private ランタイム、データパッケージ、評価、アダプター の周辺にある operation 画面s を考えるうえで有用です。",
          points: [
            "ローカル ランタイム運用 画面",
            "Data package レビュー interface",
            "Evaluation レビュー 画面",
            "Melix 文脈 はケースごとにスコープ設定"
          ]
        },
        {
          eyebrow: "境界",
          title: "Neuron ではないもの",
          description: "Neuron は、完成したアプリケーション、generic chat 画面、automation platform、または scientific claim として読むべきではありません。",
          points: [
            "finished application ではありません",
            "generic chat 画面 ではありません",
            "admin console ではありません",
            "scientific claim ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "この参照形態は、レビュー可能なローカルおよび private AI operation のための、コンパクトな interface concepts の集合です。",
          points: [
            "Context-画面 concepts",
            "visible state パターン",
            "Operator 制御 パターン",
            "Review 画面 notes"
          ]
        }
      ],
      notice: "Neuron は creation direction として提示されており、出荷済みの standalone product claim ではありません。",
      closing: {
        title: "ローカル AI を理解できるものにする。",
        description: "private AI ワークフローs における 文脈 visibility、operator action、レビュー status、承認境界 の参照として Neuron を使用します。",
        fit: [
          "オペレーター向け AI ワークフローs を設計している。",
          "文脈 と state を見える状態に保つ必要がある。",
          "レビュー 境界 と handoff を重視している。"
        ],
        notFit: [
          "packaged AI helper が欲しい。",
          "self-running execution claims を期待している。",
          "finished console が必要である。"
        ],
        ctaTitle: "ローカル AI インターフェースパターン を相談",
        ctaDescription: "ワークフロー、ランタイム 文脈、operator actions、レビュー needs、承認境界 を持ち込んでください。"
      }
    },
    "utxo-data": {
      eyebrow: "制作物 / UTXO Data",
      title: "レビュー可能なシステムのために形づくられた記録。",
      description: "UTXO Data は、bounded records、state-aware history、provenance notes、レビュー 画面s のための Random Walk の参照方向です。ここでの UTXO は記録設計のレンズであり、市場向けのデータ製品ではありません。",
      taxonomy: [
        "bounded records",
        "state transitions",
        "provenance notes",
        "レビュー 画面",
        "証拠 package"
      ],
      assetId: "creation-utxo-data-cover",
      officialLink: {
        label: "UTXO Data を開く",
        href: "https://p.magickbase.com/"
      },
      primaryLink: {
        label: "record design を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "データプラットフォーム",
        href: "/サービス/data-platform"
      },
      outputsAtGlance: [
        {
          label: "記録の形",
          description: "境界づけられた単位、identity、scope、付随する metadata を定義します。"
        },
        {
          label: "State transition",
          description: "記録がどのように作成され、修訂され、消費され、置き換えられ、または閉じられるかを記述します。"
        },
        {
          label: "Provenance notes",
          description: "ソース、transformation、レビュー、exclusion 文脈 を記録に結びついたまま保ちます。"
        },
        {
          label: "Query 画面",
          description: "ソース、status、transition、レビュー state による検査を支援します。"
        },
        {
          label: "Evidence package",
          description: "記録を レビュー、評価、handoff、モデル作業 に使えるものにします。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "UTXO Data がここに属する理由",
          description: "UTXO Data は、プライベート ワークフローs のための構造化された履歴、レビュー可能な記録、証拠 packages をめぐる Random Walk の思考を捉えます。",
          points: [
            "record design をインフラストラクチャ思考として扱う",
            "顧客が制御するデータシステムに有用",
            "ローカルおよび private AI ワークフローs と接続",
            "公開データ製品ではない"
          ]
        },
        {
          eyebrow: "Shape",
          title: "記録の形を定義する",
          description: "良い記録には、レビュー、reuse、モデル作業 を支える前に、明確な境界が必要です。",
          points: [
            "境界づけられた単位と identity",
            "metadata を記録とともに保つ",
            "scope と レビュー 文脈",
            "loose notes にならず再利用できる"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "State",
          title: "transitions を明示する",
          description: "state-aware records は、素材がいつ変わり、閉じられ、または後続の作業に置き換えられるのかをチームが把握する助けになります。",
          points: [
            "作成、修訂、または閉鎖",
            "消費または置換された records",
            "transition notes を見える状態に保つ",
            "変更を囲む レビュー 境界"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Provenance",
          title: "provenance notes を結びつけて保つ",
          description: "ソース、transformation、レビュー、exclusion 文脈 は、散在する notes の中に置かれるのではなく、記録の近くに留まるべきです。",
          points: [
            "Source reference notes",
            "Transformation notes",
            "Review checkpoint notes",
            "除外事項とギャップ"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Review",
          title: "query と レビュー を支援する",
          description: "Review 画面s は、operators が ソース、status、transition、レビュー state によって記録を検査できるよう支えるべきです。",
          points: [
            "ソース でフィルタ可能な notes",
            "status と transition views",
            "レビュー state inspection",
            "評価 sets に有用"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "Use-case パターン",
          description: "UTXO Data は、プライベートワークフロー が切り離された operational notes ではなく、構造化された記録を必要とする場面で有用です。",
          points: [
            "Dataset package manifest",
            "Evaluation record set",
            "Document transformation log",
            "handoff-ready records"
          ]
        },
        {
          eyebrow: "境界",
          title: "UTXO Data ではないもの",
          description: "この creation は、市場向け製品、公開データブラウザ、または完成した実装の主張として読むべきではありません。",
          points: [
            "asset product ではありません",
            "公開データブラウザではありません",
            "公開された顧客 dataset ではありません",
            "guarantee system ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "この参照形態は、構造化された履歴とレビュー可能なデータ作業のための、コンパクトな概念の集合です。",
          points: [
            "Record shape notes",
            "Transition concepts",
            "Provenance note パターン",
            "Evidence package 構造"
          ]
        }
      ],
      notice: "このページはテーマを説明するものであり、プライベートな顧客データや内部 ledgers を公開するものではありません。",
      closing: {
        title: "記録をレビュー可能に保つ。",
        description: "プライベートワークフロー における bounded records、state-aware history、provenance notes、証拠 packages の参照として UTXO Data を使用します。",
        fit: [
          "プライベートワークフロー のためにレビュー可能な records を設計している。",
          "state changes と provenance notes を見える状態に保つ必要がある。",
          "loose notes より 証拠 packages を重視している。"
        ],
        notFit: [
          "公開データブラウザが欲しい。",
          "guarantee claims を期待している。",
          "公開された顧客データが必要である。"
        ],
        ctaTitle: "構造d record design を相談",
        ctaDescription: "record type、state changes、レビュー needs、ソース 文脈、プライベートワークフロー 境界 を持ち込んでください。"
      }
    },
    "distributed-paradigm": {
      eyebrow: "制作物 / Distributed Paradigm",
      title: "分散システムには、見える境界が必要です。",
      description: "Distributed Paradigm は、local-first の実装メモ、範囲を定めた状態移動、所有権の引き渡し、復旧経路、運用記憶のための Random Walk リファレンスノートブックです。",
      taxonomy: [
        "local-first の姿勢",
        "同期境界",
        "所有権の引き渡し",
        "復旧経路",
        "運用記憶"
      ],
      assetId: "creation-distributed-paradigm-cover",
      officialLink: {
        label: "GitHub で kuai を見る",
        href: "https://github.com/ckb-js/kuai"
      },
      primaryLink: {
        label: "実装メモを相談する",
        href: "/contact"
      },
      secondaryLink: {
        label: "ノート",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Local-first の姿勢",
          description: "何をオペレーターまたは顧客環境の近くに留めるべきかを明確にします。"
        },
        {
          label: "同期境界",
          description: "どの状態が、いつ、どの境界を越えて移動するのかを定義します。"
        },
        {
          label: "所有権の引き渡し",
          description: "各部分を誰が運用し、レビューし、更新し、復旧するのかを記録します。"
        },
        {
          label: "復旧経路",
          description: "障害モード、手動確認、ロールバックメモを見える状態に保ちます。"
        },
        {
          label: "運用記憶",
          description: "納品後も、意思決定、状態メモ、制約、未解決事項を保持します。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "これがここに属する理由",
          description: "この creation は、製品プラットフォームや完全なアーカイブとしてではなく、分散型プロダクトシステムの実践的な実装メモを捉えるものです。",
          points: [
            "Local-first のプロダクト思考",
            "境界を意識した実装メモ",
            "復旧と引き渡しへの焦点",
            "プライベートなワークフローに有用"
          ]
        },
        {
          eyebrow: "ローカル",
          title: "ローカルの姿勢を定義する",
          description: "Local-first の仕事は、何をオペレーターの近くに置くべきか、何を後の移動に委ねられるかを決めることから始まります。",
          points: [
            "範囲が定められたローカル運用",
            "有用な状態をオペレーターの近くに置く",
            "適切な場合は移動を後回しにする",
            "顧客環境を最初に考慮する"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "境界",
          title: "状態移動の範囲を定める",
          description: "境界を意識した同期は、一連の判断として扱われます。何が、いつ、どの経路で、誰のレビューのもとに移動するのか。",
          points: [
            "状態移動の前提",
            "手動または段階的な転送",
            "古い状態の可視性",
            "再利用前のレビュー"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "所有権",
          title: "所有権の引き渡しを明確にする",
          description: "分散型プロダクトの仕事には、初回納品後の運用、更新、レビュー、復旧に対する明確な責任が必要です。",
          points: [
            "オペレーター責任メモ",
            "更新所有権の前提",
            "レビューとエスカレーションの境界",
            "納品後の引き渡し状態"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "復旧",
          title: "運用記憶を保つ",
          description: "復旧メモと運用記憶は、何が起き、何が変わり、何が未解決のまま残っているかをチームが理解する助けになります。",
          points: [
            "重要な障害モード",
            "手動確認とロールバックメモ",
            "インシデント後の状態メモ",
            "未解決の判断を見える状態に保つ"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "パターン",
          title: "実装パターン",
          description: "このノートブックは、ローカル状態、境界を越える移動、引き渡しを理解可能なまま保つ必要があるプロダクトシステムに有用です。",
          points: [
            "移動を後回しにできるローカルランタイム",
            "レビュー境界を持つプライベートパッケージ",
            "中央ノートを備えたサイトローカルツール",
            "顧客が制御するワークフロー境界"
          ]
        },
        {
          eyebrow: "境界",
          title: "これではないもの",
          description: "このページは、製品プラットフォーム、理論的エッセイ、ホスティング製品、完全なアーカイブとして読むべきものではありません。",
          points: [
            "一般的なシステム教科書ではありません",
            "公共の調整システムではありません",
            "ホスティング製品ではありません",
            "完全なアーカイブではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Artifact 台帳",
          description: "このリファレンス形状は、local-first の仕事、同期境界、所有権、復旧のためのコンパクトなメモ群です。",
          points: [
            "Local-first メモ",
            "同期境界パターン",
            "所有権引き渡しメモ",
            "復旧経路メモ"
          ]
        }
      ],
      notice: "このページは公開された方向標識であり、完全な研究アーカイブではありません。",
      closing: {
        title: "分散した仕事を、理解できるままに保つ。",
        description: "このノートブックを、local-first の実装メモ、範囲を定めた状態移動、所有権の引き渡し、運用記憶のためのリファレンスとして使用してください。",
        fit: [
          "local-first のプロダクトシステムを設計している。",
          "境界と引き渡しを明示する必要がある。",
          "理論ではなく、実装メモがほしい。"
        ],
        notFit: [
          "パッケージ化されたインフラ製品が必要である。",
          "オペレーター作業なしの復旧を期待している。",
          "完全な研究アーカイブがほしい。"
        ],
        ctaTitle: "分散実装メモを相談する",
        ctaDescription: "ワークフロー、ローカル状態、移動境界、所有権の期待、復旧上の懸念をお持ちください。"
      }
    }
  },
  ko: {
    melix: {
      eyebrow: "창작물 / Melix",
      title: "로컬 AI 참조 런타임.",
      description: "Melix는 Apple Silicon 로컬 AI 작업을 위한 Random Walk의 오픈소스 엔지니어링 참조입니다. 런타임 운영, LoRA 훈련, 벤치마킹, 평가, CLI 워크플로, 그리고 로컬 통합 경로를 다룹니다.",
      taxonomy: [
        "Apple Silicon",
        "로컬 런타임",
        "MLX / MLX LoRA",
        "CLI 워크플로",
        "평가 records"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "Melix 탐색",
        href: "/melix"
      },
      secondaryLink: {
        label: "저장소 메타데이터",
        href: "/re소스s/repository-metadata"
      },
      outputsAtGlance: [
        {
          label: "로컬 런타임 참조",
          description: "Apple Silicon에서 local-first model operation을 위한 작동 가능한 참조입니다."
        },
        {
          label: "모델 로딩 경로",
          description: "로컬 모델을 로드하고 실행하기 위한 실용적인 표면입니다."
        },
        {
          label: "LoRA 적응 워크플로",
          description: "로컬 LoRA 훈련과 어댑터 중심 워크플로 탐색입니다."
        },
        {
          label: "Benchmarking 및 평가",
          description: "동작, 실행, 작업 결과를 비교하기 위한 기록입니다."
        },
        {
          label: "CLI 및 로컬 서버 경로",
          description: "실험을 위한 operator 워크플로s와 로컬 integration 화면s입니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "Melix가 여기에 속하는 이유",
          description: "Melix는 creation입니다. Random Walk의 로컬 AI 엔지니어링 스타일을 작동하는 소프트웨어로 드러내기 때문입니다.",
          points: [
            "Open-소스 engineering reference 결과물",
            "local-first AI operation을 중심으로 구축",
            "적응과 평가 실천을 보여줌",
            "고객이 제어하는 인프라스트럭처 작업에 시사점 제공"
          ]
        },
        {
          eyebrow: "Runtime",
          title: "Local-first 런타임 사고",
          description: "Melix는 operator 가까이에 있는 머신에서 시작합니다. 그곳에서는 모델 동작, 런타임 선택, 결과물를 계속 검사 가능한 상태로 둘 수 있습니다.",
          points: [
            "Apple Silicon을 로컬 타깃으로 삼음",
            "로컬 inference를 설계 중심에 둠",
            "런타임 choices는 operator-visible 상태로 유지",
            "macOS 워크플로s를 실제 사용에 가깝게 유지"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "Adaptation",
          title: "어댑터 중심 모델 작업",
          description: "Melix는 Random Walk에 LoRA 훈련, 어댑터 handling, 로컬 적응 experiments를 위한 참조 표면을 제공합니다.",
          points: [
            "LoRA 훈련 워크플로 탐색",
            "MLX LoRA를 로컬 경로로 사용",
            "어댑터 activation은 명시적으로 유지",
            "dataset assumptions를 테스트 가능하게 함"
          ],
          assetId: "services-lora-adapter"
        },
        {
          eyebrow: "증거",
          title: "Benchmarking 및 평가 records",
          description: "Melix는 모델 작업을 comparison records, 작업 results, 알려진 한계와 연결해 두는 습관을 지원합니다.",
          points: [
            "Benchmarking을 로컬 증거로 사용",
            "평가 records를 런타임 가까이에 둠",
            "실행 간 comparison notes",
            "알려진 한계를 계속 보이게 유지"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Operation",
          title: "CLI와 로컬 서버 브리지",
          description: "Melix는 제어된 실험과 integration work를 위해 CLI 및 로컬 서버 경로를 통해 operator-oriented 워크플로s를 드러냅니다.",
          points: [
            "operator를 위한 CLI 워크플로",
            "integration을 위한 로컬 서버 경로",
            "런타임 state는 검사 가능한 상태로 유지",
            "hosted 제어 plane을 전제로 하지 않음"
          ],
          assetId: "melix-scene-composite"
        },
        {
          eyebrow: "서비스",
          title: "Melix가 서비스에 주는 시사점",
          description: "Melix는 적절한 경우 범위가 정해진 고객 작업을 지원할 수 있지만, 모든 engagement의 보편적인 dependency는 아닙니다.",
          points: [
            "로컬 런타임 assumptions 검증",
            "적응 delivery choices에 시사점 제공",
            "평가 화면s 논의 지원",
            "선택된 scoped engagements 지원"
          ]
        },
        {
          eyebrow: "경계",
          title: "Melix가 아닌 것",
          description: "이 creation page는 Melix를 일반적인 product claim이나 넓은 infra구조 promise로 바꾸어서는 안 됩니다.",
          points: [
            "hosted AI platform이 아닙니다",
            "broad orchestration suite가 아닙니다",
            "public API gateway wrapper가 아닙니다",
            "모든 service에 필수는 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "Melix는 creation set에 시각적 개념이나 글로 된 철학만이 아니라, 구체적인 기술 결과물를 제공합니다.",
          points: [
            "로컬 런타임 codebase",
            "CLI 및 macOS 워크플로s",
            "LoRA 훈련 references",
            "Benchmarking 및 평가 패턴"
          ]
        }
      ],
      notice: "이 creation page는 product page와 구별되며, Melix가 왜 Random Walk creation set에 속하는지 설명합니다.",
      closing: {
        title: "Melix를 엔지니어링 참조로 읽으세요.",
        description: "이 페이지를 통해 Random Walk가 로컬 런타임, 적응, 평가, 그리고 고객이 제어하는 AI 작업을 어떻게 생각하는지 이해하세요.",
        fit: [
          "Random Walk의 로컬 AI 스타일을 소프트웨어 형태로 보고 싶습니다.",
          "Apple Silicon 모델 작업flows를 탐색하고 있습니다.",
          "private AI 런타임 논의를 위한 참조가 필요합니다."
        ],
        notFit: [
          "managed SaaS AI product를 원합니다.",
          "no-code chatbot builder가 필요합니다.",
          "universal production 배포 guarantees를 기대합니다."
        ],
        ctaTitle: "Melix 런타임 탐색",
        ctaDescription: "product page 또는 repository metadata를 검토해 이 로컬 런타임 참조를 더 자세히 이해하세요."
      }
    },
    "1-tok": {
      eyebrow: "창작물 / 1-TOK",
      title: "소스 자료에서 빚어낸 컴팩트한 학습 유닛.",
      description: "1-TOK은 선택된 자료가 어떻게 경계가 분명한 연습 유닛, 생성된 exercise packet, 검토 status, 그리고 재사용 가능한 로컬 또는 프라이빗 학습 워크플로로 전환되는지 탐구합니다.",
      taxonomy: [
        "소스 패킷",
        "연습 유닛",
        "exercise packet",
        "검토 status",
        "로컬 재사용"
      ],
      assetId: "creation-1-tok-cover",
      officialLink: {
        label: "1-TOK 방문",
        href: "http://1-tok.pro/"
      },
      primaryLink: {
        label: "구조화된 워크플로 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "창작물 개요",
        href: "/creations"
      },
      outputsAtGlance: [
        {
          label: "소스 패킷",
          description: "선택된 자료를 생성된 연습 유닛에 계속 연결해 둡니다."
        },
        {
          label: "연습 유닛",
          description: "검토할 수 있을 만큼 작고 경계가 분명한 학습 객체입니다."
        },
        {
          label: "연습 세트",
          description: "선택된 소스 자료를 중심으로 구성된 생성 프롬프트입니다."
        },
        {
          label: "정답 키",
          description: "검토를 위해 exercise packet과 함께 보관되는 초안 답안입니다."
        },
        {
          label: "Review status",
          description: "초안, 검토 완료, 수정 완료 자료를 위한 단순한 상태입니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "1-TOK이 여기에 속하는 이유",
          description: "1-TOK은 생성 과정을 경계가 분명하고 검토 가능한 워크플로 결과물로 전환하기 때문에 Random Walk의 creation입니다.",
          points: [
            "구조화된 학습 유닛 워크플로",
            "소스에 결속된 생성 패턴",
            "검토 가능한 출력 패키지",
            "로컬 또는 프라이빗 재사용 모델"
          ]
        },
        {
          eyebrow: "유닛",
          title: "연습 유닛의 형태를 잡다",
          description: "각 유닛은 연습이 생성되기 전에 제한된 소스 범위와 명확한 연습 목표에서 시작합니다.",
          points: [
            "하나의 선택된 소스 범위",
            "하나의 연습 목표",
            "연습과 답안을 함께 보관",
            "상태를 유닛에 연결"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "생성",
          title: "생성을 소스에 결속해 두다",
          description: "생성된 연습은 선택된 소스 패킷에 연결된 상태로 유지되어, 검토자가 그 근거를 확인할 수 있습니다.",
          points: [
            "먼저 소스 자료 선택",
            "생성 전에 연습 유형 정의",
            "exercise packet을 소스에 연결",
            "검토자가 근거를 확인 가능"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "검토",
          title: "검토를 보이는 상태로 유지하다",
          description: "1-TOK은 생성된 자료를 검토, 수정 또는 거절되기 전까지 초안 출력으로 다룹니다.",
          points: [
            "초안 자료는 표시된 채 유지",
            "수정 사항은 유닛과 함께 보관",
            "약한 예시는 기록 가능",
            "검토 status가 재사용을 안내"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "경계",
          title: "프라이빗 재사용을 지원하다",
          description: "프로젝트 경계가 그렇게 설정되어 있다면, 이 워크플로는 로컬 또는 프라이빗 자료와 함께 사용할 수 있습니다.",
          points: [
            "프라이빗 노트는 경계 안에 유지 가능",
            "내부 자료에는 검토가 필요",
            "공개 예시는 승인이 필요",
            "재사용은 소스 경계를 따름"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "패턴",
          title: "연습 패턴",
          description: "1-TOK은 소스 자료, 생성 출력, 검토 status가 함께 유지되어야 하는 컴팩트한 연습 형식에 적합합니다.",
          points: [
            "어휘 복습 패킷",
            "개념 점검 유닛",
            "독해 유닛",
            "기술 문서 드릴"
          ]
        },
        {
          eyebrow: "경계",
          title: "1-TOK이 아닌 것",
          description: "이 creation은 완성된 에듀테크 제품이나 자동 학습 시스템으로 읽혀서는 안 됩니다.",
          points: [
            "범용 AI 튜터가 아님",
            "게임화된 학습 앱이 아님",
            "공개 콘텐츠 라이브러리가 아님",
            "자동 정확성이 아님"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "이 creation은 소스에 결속된 생성과 검토 가능한 재사용을 위한 컴팩트한 워크플로 형태를 보여줍니다.",
          points: [
            "소스 패킷 구조",
            "연습 유닛 형태",
            "연습 및 답안 패킷",
            "검토 status 모델"
          ]
        }
      ],
      notice: "공개 자료는 예시가 게시 승인을 받을 때까지 의도적으로 제한됩니다.",
      closing: {
        title: "경계가 분명한 자료로 연습 유닛을 구축하세요.",
        description: "1-TOK을 소스에 결속된 연습 생성, 검토 status, 그리고 로컬 또는 프라이빗 재사용을 위한 참조로 사용하세요.",
        fit: [
          "선택된 자료에서 컴팩트한 연습 유닛을 만들고 싶습니다.",
          "생성된 연습이 검토 가능한 상태로 남아 있어야 합니다.",
          "로컬 또는 프라이빗 재사용 경계를 중시합니다."
        ],
        notFit: [
          "출시된 소비자용 에듀테크 앱을 원합니다.",
          "검토 없는 자동 정확성을 기대합니다.",
          "바로 사용할 수 있는 수업의 공개 라이브러리가 필요합니다."
        ],
        ctaTitle: "소스에 결속된 워크플로 논의",
        ctaDescription: "소스 자료가 생성된 연습, 답안, 검토 status를 갖춘 경계가 분명한 연습 유닛으로 전환되는 방식을 검토합니다."
      }
    },
    "fiber-link": {
      eyebrow: "창작물 / Fiber Link",
      title: "연결된 시스템에는 명확한 인계가 필요합니다.",
      description: "Fiber Link는 Random Walk의 참조형 작업 공간입니다. 프라이빗 인프라스트럭처 작업에서 연결 경계, 접근 경로, 신뢰성 가정, 복구 notes, 운영 인계를 다룹니다.",
      taxonomy: [
        "연결 경계",
        "접근 경로",
        "복구 notes",
        "operator 인계",
        "검토 가능한 제약"
      ],
      assetId: "creation-fiber-link-cover",
      officialLink: {
        label: "Fiber Link 방문",
        href: "http://fiberlink.me/"
      },
      primaryLink: {
        label: "인프라스트럭처 notes 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "작업 사례",
        href: "/work"
      },
      outputsAtGlance: [
        {
          label: "연결 경계",
          description: "시스템이 어디에서 만나고, 분리되며, 제어선을 넘는지 정의합니다."
        },
        {
          label: "접근 경로",
          description: "operator, admin, service의 진입 경로를 기록합니다."
        },
        {
          label: "신뢰성 가정",
          description: "장애 모드, 복구 notes, 수동 점검, 운영 한계를 포착합니다."
        },
        {
          label: "인계 notes",
          description: "전달 이후 다음 operator가 이해해야 할 내용을 설명합니다."
        },
        {
          label: "검토 가능한 제약",
          description: "결정, 제외 사항, 열린 질문, 구현 한계를 계속 보이게 합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "Fiber Link가 여기에 속하는 이유",
          description: "Fiber Link는 연결된 시스템 구현에 대한 Random Walk의 사고를 출하된 네트워크 제품이 아닌 참조형 작업 공간으로 담아냅니다.",
          points: [
            "경계를 의식한 인프라스트럭처 notes",
            "접근과 인계를 명시화",
            "신뢰성을 가정으로 취급",
            "프라이빗 구현 작업과 연결"
          ]
        },
        {
          eyebrow: "경계",
          title: "연결 경계를 정의하기",
          description: "첫 번째 관심사는 시스템이 어디에서 만나고, 무엇이 경계를 넘으며, 책임이 어디에서 바뀌는가입니다.",
          points: [
            "연결된 시스템과 표면",
            "데이터, 제어, operator 경로",
            "경계 소유권 가정",
            "구축 전에 기록되는 제약"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "접근",
          title: "접근 경로를 명확히 하기",
          description: "Fiber Link는 접근을 구현 표면으로 다룹니다. 누가 무엇에 도달하는지, 어떤 경로를 통하는지, 어떤 가정 아래 이루어지는지까지 봅니다.",
          points: [
            "operator 진입점",
            "admin 및 service 표면",
            "credential 및 secret 가정",
            "민감한 작업에 대한 승인 지점"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "복구",
          title: "신뢰성 가정을 기록하기",
          description: "신뢰성은 검토 가능한 가정으로 다룹니다. 알려진 장애 모드, operator에게 보이는 실패 상태, 점검, 복구 notes를 기록합니다.",
          points: [
            "중요한 장애 모드",
            "수동 점검과 관찰된 상태",
            "복구 및 재시도 notes",
            "운영 한계를 계속 보이게 유지"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "인계",
          title: "운영 인계 준비하기",
          description: "연결이 실행된다고 해서 작업이 끝나는 것은 아닙니다. 최초 전달 이후에도 이해 가능한 상태여야 합니다.",
          points: [
            "설치 또는 활성화 notes",
            "롤백 및 복구 notes",
            "소유권과 에스컬레이션 경계",
            "고객 operator 기대치"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "패턴",
          title: "구현 패턴",
          description: "Fiber Link는 범위가 정해진 프라이빗 인프라스트럭처 작업 안에서 연결된 시스템을 검토하는 데 유용합니다.",
          points: [
            "로컬 런타임에서 프라이빗 리소스로",
            "제한된 데이터 소스 연결",
            "operator 승인 워크플로 경로",
            "Melix 또는 1-TOK 맥락는 사례별로 범위 설정"
          ]
        },
        {
          eyebrow: "경계",
          title: "Fiber Link가 아닌 것",
          description: "Fiber Link는 creation reference이며, 네트워크 제품, protocol, managed service, 또는 고객 배포 스토리가 아닙니다.",
          points: [
            "telecom system이 아닙니다",
            "VPN 또는 service mesh가 아닙니다",
            "uptime이 보장되는 제품이 아닙니다",
            "공개 고객 case study가 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "이 참조 형태는 구현 검토, operator 인계, 범위가 정해진 후속 작업을 위한 간결한 notes 묶음입니다.",
          points: [
            "연결 notes",
            "접근 경로 가정",
            "신뢰성 및 복구 notes",
            "인계 checklist"
          ]
        }
      ],
      notice: "이것은 creation page이며, 공개 고객 case study가 아닙니다.",
      closing: {
        title: "연결을 이해 가능한 상태로 만드세요.",
        description: "프라이빗 인프라스트럭처 작업에서 명확한 경계, 접근 경로, 복구 가정, 인계 notes의 참조로 Fiber Link를 사용하세요.",
        fit: [
          "시스템이 경계를 어떻게 넘는지 매핑하고 있습니다.",
          "제품 주장보다 구현 notes가 필요합니다.",
          "접근, 복구, 인계를 중요하게 봅니다."
        ],
        notFit: [
          "패키지화된 네트워크 제품이 필요합니다.",
          "공식적인 uptime 주장을 기대합니다.",
          "공개 고객 case study를 원합니다."
        ],
        ctaTitle: "연결 시스템 구현 논의",
        ctaDescription: "시스템, 경계, 접근 경로, 장애 모드, 그리고 operator 인계 기대치를 가져오세요."
      }
    },
    neuron: {
      eyebrow: "창작물 / Neuron",
      title: "이해 가능한 로컬 AI를 위한 인터페이스.",
      description: "Neuron은 운영자용 로컬 AI 인터페이스를 위한 Random Walk의 참조 방향입니다. 컨텍스트 화면, visible state 패턴, 승인 경계, 제어 항목, 검토 메모를 다룹니다.",
      taxonomy: [
        "맥락 화면",
        "visible state",
        "operator 제어 항목",
        "approval 경계",
        "검토 화면"
      ],
      assetId: "creation-neuron-cover",
      officialLink: {
        label: "Neuron 방문",
        href: "http://neuron.magickbase.com/"
      },
      primaryLink: {
        label: "인터페이스 패턴 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "Melix",
        href: "/melix"
      },
      outputsAtGlance: [
        {
          label: "컨텍스트 화면",
          description: "워크플로가 어떤 소스 자료, model, 어댑터 또는 package를 사용하고 있는지 보여줍니다."
        },
        {
          label: "Visible state",
          description: "워크플로 상태, 전환, 대기 지점, 실패를 더 쉽게 이해할 수 있게 합니다."
        },
        {
          label: "Operator 제어 항목",
          description: "approve, reject, retry, revise, cancel, hand off 같은 의도적인 동작을 정의합니다."
        },
        {
          label: "Approval 경계",
          description: "민감한 작업이 계속되기 전에 사람이 확인해야 하는 지점을 표시합니다."
        },
        {
          label: "Review 화면",
          description: "출력, references, known-limit notes, 검토 status를 워크플로 가까이에 유지합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "Neuron이 여기에 속하는 이유",
          description: "Neuron은 출시된 애플리케이션을 제시하지 않으면서, 로컬 및 private AI 워크플로s에 대한 Random Walk의 interface 사고를 담아냅니다.",
          points: [
            "운영자용 interface reference",
            "이해 가능한 로컬 워크플로s를 중심으로 구축",
            "런타임 work를 인간 검토와 연결",
            "범위가 정해진 구현 논의를 지원"
          ]
        },
        {
          eyebrow: "Context",
          title: "맥락를 보이게 하기",
          description: "출력이 신뢰되거나 재사용되기 전에, interface는 선택된 자료과 활성 런타임 assumptions를 보이게 해야 합니다.",
          points: [
            "선택된 소스 자료",
            "활성 model 또는 어댑터 맥락",
            "누락되었거나 모호한 inputs",
            "소스 및 출력 references"
          ],
          assetId: "melix-main-ui"
        },
        {
          eyebrow: "상태",
          title: "워크플로 상태 보여주기",
          description: "Neuron은 상태를 interface 패턴으로 다룹니다. operators는 지금 무엇이 일어나고 있는지, 다음에 무엇이 오는지 볼 수 있어야 합니다.",
          points: [
            "예시 state concepts",
            "현재 action visibility",
            "다음 operator action",
            "실패 또는 대기 state"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Control",
          title: "operator 제어 항목 설계하기",
          description: "Operator actions는 경계가 있고, 의도적이며, 읽을 수 있어야 합니다. 워크플로가 private 자료이나 downstream systems에 영향을 줄 수 있을 때는 특히 그렇습니다.",
          points: [
            "출력 approve 또는 reject",
            "맥락와 함께 retry 또는 revise",
            "work cancel 또는 hand off",
            "민감한 actions 확인"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Review",
          title: "검토 자료을 가까이에 두기",
          description: "Outputs는 분리된 결과가 되는 대신, references, notes, 알려진 한계, 검토 status 가까이에 머물러야 합니다.",
          points: [
            "Output references",
            "Review notes",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "로컬 인터페이스 패턴",
          description: "Neuron은 private 런타임, 데이터 패키지, 평가, 어댑터 주변의 operation 화면s를 검토하는 데 유용합니다.",
          points: [
            "로컬 런타임 운영 화면",
            "Data package 검토 interface",
            "Evaluation 검토 화면",
            "Melix 맥락는 사례별로 범위 설정"
          ]
        },
        {
          eyebrow: "경계",
          title: "Neuron이 아닌 것",
          description: "Neuron은 완성된 애플리케이션, generic chat 화면, automation platform, 또는 scientific claim으로 읽혀서는 안 됩니다.",
          points: [
            "finished application이 아닙니다",
            "generic chat 화면가 아닙니다",
            "admin console이 아닙니다",
            "scientific claim이 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "이 참조 형태는 검토 가능한 로컬 및 private AI operation을 위한 간결한 interface concepts 묶음입니다.",
          points: [
            "Context-화면 concepts",
            "visible state 패턴",
            "Operator 제어 패턴",
            "Review 화면 notes"
          ]
        }
      ],
      notice: "Neuron은 creation direction으로 제시되며, 출시된 standalone product claim이 아닙니다.",
      closing: {
        title: "로컬 AI를 이해 가능한 상태로 만드세요.",
        description: "private AI 워크플로s에서 맥락 visibility, operator action, 검토 status, 승인 경계의 참조로 Neuron을 사용하세요.",
        fit: [
          "운영자용 AI 워크플로s를 설계하고 있습니다.",
          "맥락와 state가 계속 보이는 상태여야 합니다.",
          "검토 경계와 handoff를 중요하게 봅니다."
        ],
        notFit: [
          "packaged AI helper를 원합니다.",
          "self-running execution claims를 기대합니다.",
          "finished console이 필요합니다."
        ],
        ctaTitle: "로컬 AI 인터페이스 패턴 논의",
        ctaDescription: "워크플로, 런타임 맥락, operator actions, 검토 needs, 승인 경계를 가져오세요."
      }
    },
    "utxo-data": {
      eyebrow: "창작물 / UTXO Data",
      title: "검토 가능한 시스템을 위해 형태가 잡힌 records.",
      description: "UTXO Data는 bounded records, state-aware history, provenance notes, 검토 화면s를 위한 Random Walk의 참조 방향입니다. 여기서 UTXO는 기록 설계의 렌즈이며, 시장을 향한 데이터 제품이 아닙니다.",
      taxonomy: [
        "bounded records",
        "state transitions",
        "provenance notes",
        "검토 화면",
        "증거 package"
      ],
      assetId: "creation-utxo-data-cover",
      officialLink: {
        label: "UTXO Data 열기",
        href: "https://p.magickbase.com/"
      },
      primaryLink: {
        label: "record design 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "데이터 플랫폼",
        href: "/서비스/data-platform"
      },
      outputsAtGlance: [
        {
          label: "Record shape",
          description: "경계가 있는 단위, identity, scope, 부착된 metadata를 정의합니다."
        },
        {
          label: "State transition",
          description: "records가 어떻게 생성, 수정, 소비, 대체, 또는 종료되는지 설명합니다."
        },
        {
          label: "Provenance notes",
          description: "소스, transformation, 검토, exclusion 맥락가 기록에 붙어 있도록 유지합니다."
        },
        {
          label: "Query 화면",
          description: "소스, status, transition, 검토 state를 기준으로 검사할 수 있게 지원합니다."
        },
        {
          label: "Evidence package",
          description: "records를 검토, 평가, handoff, 모델 작업에 사용할 수 있게 합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "UTXO Data가 여기에 속하는 이유",
          description: "UTXO Data는 프라이빗 워크플로를 위한 구조화된 이력, 검토 가능한 records, 증거 packages에 대한 Random Walk의 사고를 담아냅니다.",
          points: [
            "record design을 인프라스트럭처 사고로 다룸",
            "고객이 제어하는 데이터 시스템에 유용",
            "로컬 및 private AI 워크플로s와 연결",
            "공개 데이터 제품이 아님"
          ]
        },
        {
          eyebrow: "Shape",
          title: "record shape 정의하기",
          description: "좋은 records는 검토, reuse, 모델 작업를 지원하기 전에 명확한 경계가 필요합니다.",
          points: [
            "경계가 있는 단위와 identity",
            "metadata를 record와 함께 유지",
            "scope와 검토 맥락",
            "느슨한 notes가 되지 않고 재사용 가능"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "State",
          title: "transitions를 명확히 하기",
          description: "state-aware records는 자료가 언제 바뀌고, 닫히며, 또는 이후 작업으로 대체되는지 팀이 볼 수 있게 합니다.",
          points: [
            "생성, 수정, 또는 종료",
            "소비되거나 대체된 records",
            "transition notes를 보이게 유지",
            "변경을 둘러싼 검토 경계"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Provenance",
          title: "provenance notes를 붙어 있게 유지하기",
          description: "소스, transformation, 검토, exclusion 맥락는 흩어진 notes 속에 사는 대신 record 가까이에 남아 있어야 합니다.",
          points: [
            "Source reference notes",
            "Transformation notes",
            "Review checkpoint notes",
            "제외 사항과 공백"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Review",
          title: "query와 검토 지원하기",
          description: "Review 화면s는 operators가 소스, status, transition, 검토 state를 기준으로 records를 검사할 수 있도록 도와야 합니다.",
          points: [
            "소스별로 필터링 가능한 notes",
            "status 및 transition views",
            "검토 state inspection",
            "평가 sets에 유용"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Patterns",
          title: "Use-case 패턴",
          description: "UTXO Data는 프라이빗 워크플로에 분리된 operational notes가 아니라 구조화된 records가 필요한 곳에서 유용합니다.",
          points: [
            "Dataset package manifest",
            "Evaluation record set",
            "Document transformation log",
            "handoff-ready records"
          ]
        },
        {
          eyebrow: "경계",
          title: "UTXO Data가 아닌 것",
          description: "이 creation은 시장을 향한 제품, 공개 데이터 브라우저, 또는 완성된 구현 주장으로 읽혀서는 안 됩니다.",
          points: [
            "asset product가 아닙니다",
            "공개 데이터 브라우저가 아닙니다",
            "공개된 고객 dataset이 아닙니다",
            "guarantee system이 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "이 참조 형태는 구조화된 이력과 검토 가능한 데이터 작업을 위한 간결한 concepts 묶음입니다.",
          points: [
            "Record shape notes",
            "Transition concepts",
            "Provenance note 패턴",
            "Evidence package 구조"
          ]
        }
      ],
      notice: "이 페이지는 주제를 설명합니다. private customer data나 internal ledgers를 공개하지 않습니다.",
      closing: {
        title: "records를 검토 가능한 상태로 유지하세요.",
        description: "프라이빗 워크플로에서 bounded records, state-aware history, provenance notes, 증거 packages를 위한 참조로 UTXO Data를 사용하세요.",
        fit: [
          "프라이빗 워크플로를 위한 검토 가능한 records를 설계하고 있습니다.",
          "state changes와 provenance notes가 보이는 상태여야 합니다.",
          "느슨한 notes보다 증거 packages를 중요하게 봅니다."
        ],
        notFit: [
          "공개 데이터 브라우저를 원합니다.",
          "guarantee claims를 기대합니다.",
          "공개된 고객 데이터가 필요합니다."
        ],
        ctaTitle: "구조d record design 논의",
        ctaDescription: "record type, state changes, 검토 needs, 소스 맥락, 프라이빗 워크플로 경계를 가져오세요."
      }
    },
    "distributed-paradigm": {
      eyebrow: "창작물 / Distributed Paradigm",
      title: "분산 시스템에는 보이는 경계가 필요합니다.",
      description: "Distributed Paradigm은 local-first 구현 노트, 범위가 정해진 상태 이동, 소유권 인계, 복구 경로, 운영 기억을 위한 Random Walk 레퍼런스 노트북입니다.",
      taxonomy: [
        "local-first 태도",
        "동기화 경계",
        "소유권 인계",
        "복구 경로",
        "운영 기억"
      ],
      assetId: "creation-distributed-paradigm-cover",
      officialLink: {
        label: "GitHub에서 kuai 보기",
        href: "https://github.com/ckb-js/kuai"
      },
      primaryLink: {
        label: "구현 노트 논의하기",
        href: "/contact"
      },
      secondaryLink: {
        label: "노트",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Local-first 태도",
          description: "무엇을 운영자 또는 고객 환경 가까이에 두어야 하는지 명확히 합니다."
        },
        {
          label: "동기화 경계",
          description: "어떤 상태가 언제, 어느 경계를 넘어 이동하는지 정의합니다."
        },
        {
          label: "소유권 인계",
          description: "각 부분을 누가 운영하고, 검토하고, 업데이트하고, 복구하는지 기록합니다."
        },
        {
          label: "복구 경로",
          description: "장애 모드, 수동 점검, 롤백 노트를 보이는 상태로 유지합니다."
        },
        {
          label: "운영 기억",
          description: "전달 이후에도 결정, 상태 노트, 제약, 미해결 항목을 보존합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "이것이 여기에 속하는 이유",
          description: "이 creation은 제품 플랫폼이나 완전한 아카이브로 제시하지 않으면서, 분산 제품 시스템을 위한 실질적인 구현 노트를 담습니다.",
          points: [
            "Local-first 제품 사고",
            "경계를 의식한 구현 노트",
            "복구와 인계에 집중",
            "프라이빗 워크플로에 유용"
          ]
        },
        {
          eyebrow: "로컬",
          title: "로컬 태도 정의하기",
          description: "Local-first 작업은 무엇을 운영자 가까이에 두어야 하고, 무엇을 이후의 이동에 의존해도 되는지 결정하는 데서 시작됩니다.",
          points: [
            "범위가 정해진 로컬 운영",
            "운영자 가까이에 유용한 상태 배치",
            "적절한 경우 이동 지연",
            "고객 환경을 먼저 고려"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "경계",
          title: "상태 이동의 범위 정하기",
          description: "경계를 의식한 동기화는 일련의 결정으로 다룹니다. 무엇이, 언제, 어떤 경로로, 누구의 검토 아래 이동하는가.",
          points: [
            "상태 이동 가정",
            "수동 또는 단계적 전송",
            "오래된 상태의 가시성",
            "재사용 전 검토"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "소유권",
          title: "소유권 인계를 명확히 하기",
          description: "분산 제품 작업에는 최초 전달 이후 운영, 업데이트, 검토, 복구에 대한 명확한 책임이 필요합니다.",
          points: [
            "운영자 책임 노트",
            "업데이트 소유권 가정",
            "검토 및 에스컬레이션 경계",
            "전달 이후의 인계 상태"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "복구",
          title: "운영 기억 보존하기",
          description: "복구 노트와 운영 기억은 팀이 무엇이 일어났고, 무엇이 바뀌었으며, 무엇이 아직 해결되지 않았는지 이해하도록 돕습니다.",
          points: [
            "중요한 장애 모드",
            "수동 점검 및 롤백 노트",
            "인시던트 이후의 상태 노트",
            "미해결 결정을 보이는 상태로 유지"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "패턴",
          title: "구현 패턴",
          description: "이 노트북은 로컬 상태, 경계 이동, 인계를 계속 이해 가능한 상태로 유지해야 하는 제품 시스템에 유용합니다.",
          points: [
            "이동을 지연할 수 있는 로컬 런타임",
            "검토 경계를 가진 프라이빗 패키지",
            "중앙 노트를 갖춘 사이트 로컬 도구",
            "고객이 제어하는 워크플로 경계"
          ]
        },
        {
          eyebrow: "경계",
          title: "이것이 아닌 것",
          description: "이 페이지는 제품 플랫폼, 이론적 에세이, 호스팅 제품, 완전한 아카이브로 읽어서는 안 됩니다.",
          points: [
            "일반 시스템 교과서가 아닙니다",
            "공개 조정 시스템이 아닙니다",
            "호스팅 제품이 아닙니다",
            "완전한 아카이브가 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Artifact 원장",
          description: "이 레퍼런스 형태는 local-first 작업, 동기화 경계, 소유권, 복구를 위한 압축된 노트 세트입니다.",
          points: [
            "Local-first 노트",
            "동기화 경계 패턴",
            "소유권 인계 노트",
            "복구 경로 노트"
          ]
        }
      ],
      notice: "이 페이지는 공개된 방향 표식이며, 완전한 연구 아카이브가 아닙니다.",
      closing: {
        title: "분산된 작업을 이해 가능한 상태로 유지하세요.",
        description: "이 노트북을 local-first 구현 노트, 범위가 정해진 상태 이동, 소유권 인계, 운영 기억을 위한 레퍼런스로 사용하세요.",
        fit: [
          "local-first 제품 시스템을 설계하고 있습니다.",
          "경계와 인계를 명시해야 합니다.",
          "이론이 아니라 구현 노트가 필요합니다."
        ],
        notFit: [
          "패키지화된 인프라 제품이 필요합니다.",
          "운영자 작업 없는 복구를 기대합니다.",
          "완전한 연구 아카이브를 원합니다."
        ],
        ctaTitle: "분산 구현 노트 논의하기",
        ctaDescription: "워크플로, 로컬 상태, 이동 경계, 소유권 기대치, 복구 우려를 가져오세요."
      }
    }
  }
};

export const resourceDetailPages: DetailCollection<ResourceDetailSlug> = {
  en: {
    "repository-metadata": {
      eyebrow: "Repository Metadata",
      title: "How to read public repository signals.",
      description: "Repository metadata can show public activity, structure, and maintenance surface. It is useful context, not evidence of deployment quality or customer outcomes.",
      taxonomy: ["public signals", "repository activity", "maintenance surface", "open-source context", "claim boundary"],
      assetId: "home-melix-product-panel",
      primaryLink: { label: "Open Melix", href: "/melix" },
      secondaryLink: { label: "Notes", href: "/notes" },
      outputsAtGlance: [
        { label: "Activity context", description: "Commits, releases, and tags can show visible project movement." },
        { label: "Structure signal", description: "Folders, examples, and documentation show how the repository is organized." },
        { label: "Maintenance surface", description: "Issues and pull requests show public discussion and review entry points." },
        { label: "Claim boundary", description: "Repository signals do not prove customer deployment or operational quality." },
        { label: "Better questions", description: "Metadata helps readers ask sharper technical questions before scoping work." }
      ],
      sections: [
        {
          eyebrow: "Frame",
          title: "Read metadata as context",
          description: "Public repository metadata is a starting point for interpretation, not a conclusion about product maturity.",
          points: ["Activity does not equal readiness", "Stars do not equal adoption", "Issue volume needs context", "Public code is separate from delivery"],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "Can show",
          title: "What metadata can show",
          description: "Metadata can make public project movement, structure, and collaboration surfaces easier to inspect.",
          points: ["Visible activity cadence", "Release and tag patterns", "Repository structure and examples", "Public issues and review surfaces"]
        },
        {
          eyebrow: "Cannot show",
          title: "What metadata cannot show",
          description: "Repository metadata cannot prove private implementation quality, customer outcomes, or environment-specific behavior.",
          points: ["Deployment quality in a customer environment", "Security or compliance posture", "Customer adoption or satisfaction", "Private runtime performance"],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Use",
          title: "How Random Walk uses it",
          description: "Repository signals help make open-source reference work inspectable while keeping service claims separate.",
          points: ["Show public engineering direction", "Expose reference artifacts for review", "Separate repository context from service delivery", "Support technical conversations before scoping"]
        },
        {
          eyebrow: "Inspect",
          title: "Useful signals to inspect",
          description: "A repository can be read through a few visible surfaces without turning them into a score.",
          points: ["Releases and tags", "Commit history", "Issues and pull requests", "Documentation and examples"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Restraint",
          title: "Read with restraint",
          description: "The useful question is whether the visible signals match the stated role of the project.",
          points: ["Compare claims with visible artifacts", "Treat missing metadata as a question", "Treat popularity as a weak signal", "Ask what the repository demonstrates"]
        },
        {
          eyebrow: "Boundary",
          title: "Repository versus implementation",
          description: "A public repository may be a reference artifact. Customer implementation is scoped separately.",
          points: ["Customer environments vary", "Runtime assumptions may differ", "Data and access paths are scoped", "Handoff expectations are project-specific"]
        },
        {
          eyebrow: "Boundaries",
          title: "What this resource is not",
          description: "This resource is an interpretation guide, not a rating system or formal assessment.",
          points: ["Not a GitHub popularity ranking", "Not a security audit checklist", "Not a procurement scoring rubric", "Not customer deployment evidence"]
        },
        {
          eyebrow: "Takeaway",
          title: "Use signals to ask better questions",
          description: "Repository metadata is useful when it sharpens the next technical conversation instead of replacing it.",
          points: ["What is the project meant to show?", "Which signals support that role?", "Which claims need separate scoping?", "Which gaps need direct discussion?"]
        }
      ],
      closing: {
        title: "Public context, not private implementation evidence.",
        description: "Read repository metadata as a public signal layer. Use it to understand open-source reference work and prepare better technical questions.",
        ctaTitle: "Discuss open-source reference work",
        ctaDescription: "Bring the repository, intended use, deployment boundary, and questions that need technical scoping.",
        fit: [
          "You want to interpret open-source project signals with restraint.",
          "You are reviewing reference work such as Melix.",
          "You need public context before a scoped technical discussion."
        ],
        notFit: [
          "You want a production certification guide.",
          "You need a security audit or procurement checklist.",
          "You expect repository metadata to prove customer outcomes."
        ]
      },
      notice: "Private customer deployments are governed by separate review and written agreements."
    },
    "engagement-patterns": {
      eyebrow: "Engagement Patterns",
      title: "How FDE collaboration works.",
      description: "Random Walk works directly with customer teams to define the boundary, build the first working private AI system, keep evidence close, and leave a clear handoff path.",
      taxonomy: ["direct collaboration", "boundary brief", "first working system", "evidence pack", "operator handoff"],
      assetId: "company-team-panel-photo",
      primaryLink: { label: "Start scoping", href: "/contact" },
      secondaryLink: { label: "Company", href: "/company" },
      outputsAtGlance: [
        { label: "Boundary brief", description: "Defines workflow, data, access, runtime, and handoff limits before build work begins." },
        { label: "First working system", description: "Lands a scoped private AI path inside the customer environment." },
        { label: "Evidence pack", description: "Keeps examples, run notes, known limits, and review material visible." },
        { label: "Operator handoff", description: "Leaves activation, rollback, ownership, and maintenance assumptions clear." },
        { label: "Follow-up scope", description: "Separates future changes from the first delivery and review pass." }
      ],
      sections: [
        {
          eyebrow: "Collaboration",
          title: "Direct technical collaboration",
          description: "The work happens close to the customer team that understands the workflow and will operate the system.",
          points: ["Engineer-to-customer communication", "Workflow details discussed directly", "Implementation decisions kept visible", "Delivery shaped by the real environment"],
          assetId: "company-team-room-photo"
        },
        {
          eyebrow: "Scope",
          title: "Scope the boundary",
          description: "Every engagement starts by defining where the system can run, what it can touch, and who can operate it.",
          points: ["Customer workflow and target behavior", "Data movement and access limits", "Runtime and resource assumptions", "First milestone and review owners"]
        },
        {
          eyebrow: "Build",
          title: "Build the first working system",
          description: "The first delivery is a scoped implementation path, not a detached recommendation.",
          points: ["Private runtime or deployment path", "Data, model, or adapter packaging", "Environment-specific constraints", "Customer review during implementation"],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Evidence",
          title: "Review evidence",
          description: "Evidence stays close to the system so behavior, limits, and decisions can be inspected before handoff.",
          points: ["Task examples and review cases", "Run notes or configuration summaries", "Known limits and weak cases", "Accepted and unresolved items"]
        },
        {
          eyebrow: "Handoff",
          title: "Make handoff understandable",
          description: "Delivery includes the operating assumptions needed for the customer team to understand the system after first launch.",
          points: ["Activation notes", "Rollback assumptions", "Operator actions and admin surfaces", "Ownership and maintenance expectations"],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Mode",
          title: "Remote and on-site collaboration",
          description: "Support mode depends on environment access, implementation speed, and the customer team's operating needs.",
          points: ["Remote scoping and review", "On-site support when useful", "Direct access to technical context", "Delivery mode scoped by project"]
        },
        {
          eyebrow: "Patterns",
          title: "Engagement patterns",
          description: "Typical projects are scoped around a real workflow, a private environment, and a concrete first system.",
          points: ["Private AI adaptation sprint", "Local runtime setup and handoff", "Data package and evaluation pass", "Deployment boundary review"]
        },
        {
          eyebrow: "Boundaries",
          title: "What this is not",
          description: "This collaboration model is direct implementation support for private AI systems, not a detached business exercise.",
          points: ["Not generic AI advice", "Not rented engineering capacity", "Not ticket-based delivery work", "Not hands-off SaaS onboarding"]
        },
        {
          eyebrow: "Ledger",
          title: "Engagement ledger",
          description: "A good engagement leaves a compact record of scope, build decisions, evidence, handoff, and next steps.",
          points: ["Boundary definition", "Build scope", "Evidence material", "Follow-up decision"]
        }
      ],
      closing: {
        title: "Work with the team that will operate it.",
        description: "Random Walk fits projects where a private AI system must be scoped, built, reviewed, and handed over with technical clarity.",
        ctaTitle: "Discuss an engagement pattern",
        ctaDescription: "Bring the workflow, target environment, boundary constraints, review needs, and handoff expectations.",
        fit: [
          "You have a real workflow and customer-controlled environment constraints.",
          "You need direct technical implementation support.",
          "You want evidence and handoff, not only advice."
        ],
        notFit: [
          "You only need general AI positioning.",
          "You want temporary ticket execution.",
          "You expect a fully hands-off hosted product."
        ]
      },
      notice: "The exact engagement shape is agreed before work begins."
    }
  },
  zh: {
    "repository-metadata": {
      eyebrow: "仓库元数据",
      title: "如何阅读公开 仓库信号。",
      description: "仓库元数据 可以呈现公开活动、结构与维护表面。它是有用的语境，而不是 部署质量 或 客户结果 的证据。",
      taxonomy: [
        "public signals",
        "repository 活动",
        "维护 界面",
        "open-来源 上下文",
        "claim 边界"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "打开 Melix",
        href: "/melix"
      },
      secondaryLink: {
        label: "笔记",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Activity 上下文",
          description: "Commits、releases 与 tags 可以显示项目可见的推进。"
        },
        {
          label: "Structure signal",
          description: "Folders、examples 与 documentation 显示 repository 如何组织。"
        },
        {
          label: "Maintenance 界面",
          description: "Issues 与 pull requests 显示公开讨论与 评审 入口点。"
        },
        {
          label: "Claim 边界",
          description: "Repository signals 不能证明 customer 部署 或 operational quality。"
        },
        {
          label: "Better questions",
          description: "Metadata 帮助读者在界定工作范围前，提出更清晰的技术问题。"
        }
      ],
      sections: [
        {
          eyebrow: "Frame",
          title: "将 metadata 作为 上下文 来阅读",
          description: "Public repository metadata 是解释的起点，而不是关于 product maturity 的结论。",
          points: [
            "Activity 不等于 readiness",
            "Stars 不等于 adoption",
            "Issue volume 需要 上下文",
            "Public code 与 delivery 是分开的"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "Can show",
          title: "Metadata 可以显示什么",
          description: "Metadata 可以让公开项目的推进、结构与协作表面更容易被检查。",
          points: [
            "可见的 活动 cadence",
            "Release 与 tag 模式",
            "Repository 结构 与 examples",
            "Public issues 与 评审 界面s"
          ]
        },
        {
          eyebrow: "Cannot show",
          title: "Metadata 不能显示什么",
          description: "仓库元数据 不能证明 private implementation quality、客户结果 或 environment-specific behavior。",
          points: [
            "客户环境中的 部署质量",
            "Security 或 compliance posture",
            "Customer adoption 或 satisfaction",
            "Private 运行时 performance"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Use",
          title: "Random Walk 如何使用它",
          description: "Repository signals 帮助 open-来源 reference work 保持可检查，同时让 service claims 保持分离。",
          points: [
            "展示 public engineering direction",
            "暴露 reference 工件 供 评审",
            "将 repository 上下文 与 service delivery 分开",
            "在 scoping 前支持技术对话"
          ]
        },
        {
          eyebrow: "Inspect",
          title: "值得检查的 signals",
          description: "一个 repository 可以通过若干可见表面来阅读，而不必把它们变成分数。",
          points: [
            "Releases 与 tags",
            "Commit history",
            "Issues 与 pull requests",
            "Documentation 与 examples"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Restraint",
          title: "克制地阅读",
          description: "真正有用的问题是，可见 signals 是否与项目所声明的角色相匹配。",
          points: [
            "将 claims 与 visible 工件 对照",
            "将缺失的 metadata 视为问题",
            "将 popularity 视为弱信号",
            "询问 repository 实际展示了什么"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Repository 与 implementation",
          description: "公开 repository 可能是 reference 工件。Customer implementation 需要另行界定范围。",
          points: [
            "Customer environments 各不相同",
            "Runtime assumptions 可能不同",
            "Data 与 访问路径 需要界定范围",
            "Handoff expectations 因项目而异"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "这个 re来源 不是什么",
          description: "这个 re来源 是一份 interpretation guide，而不是评分系统或正式评估。",
          points: [
            "不是 GitHub popularity ranking",
            "不是 security audit checklist",
            "不是 procurement scoring rubric",
            "不是 customer 部署 证据"
          ]
        },
        {
          eyebrow: "Takeaway",
          title: "用 signals 提出更好的问题",
          description: "当 repository metadata 能让下一次技术对话更清晰，而不是取代它时，它才真正有用。",
          points: [
            "这个项目意在展示什么？",
            "哪些 signals 支持这个角色？",
            "哪些 claims 需要另行 scoping？",
            "哪些 gaps 需要直接讨论？"
          ]
        }
      ],
      closing: {
        title: "公开 上下文，而不是 private implementation 证据。",
        description: "将 repository metadata 作为一层 public signal layer 来阅读。用它理解 open-来源 reference work，并准备更好的技术问题。",
        ctaTitle: "讨论 open-来源 reference work",
        ctaDescription: "带来 repository、intended use、部署边界，以及需要 technical scoping 的问题。",
        fit: [
          "你希望克制地解读 open-来源 project signals。",
          "你正在 评审 Melix 这样的 reference work。",
          "你在有范围的技术讨论前，需要 public 上下文。"
        ],
        notFit: [
          "你想要 production certification guide。",
          "你需要 security audit 或 procurement checklist。",
          "你期待 repository metadata 证明 客户结果。"
        ]
      },
      notice: "Private customer 部署s 由单独的 评审 与书面协议管理。"
    },
    "engagement-patterns": {
      eyebrow: "Engagement Patterns",
      title: "FDE 协作如何开展。",
      description: "Random Walk 直接与客户团队协作，定义边界，构建第一个可运行的 私有 AI 系统，让 证据 始终靠近工作，并留下清晰的 交接路径。",
      taxonomy: [
        "直接协作",
        "边界 brief",
        "第一个可运行系统",
        "证据 pack",
        "operator handoff"
      ],
      assetId: "company-team-panel-photo",
      primaryLink: {
        label: "开始界定范围",
        href: "/contact"
      },
      secondaryLink: {
        label: "公司",
        href: "/company"
      },
      outputsAtGlance: [
        {
          label: "边界简报",
          description: "在构建工作开始之前，定义 工作流、data、access、运行时 与 handoff limits。"
        },
        {
          label: "第一个可运行系统",
          description: "在客户环境中落地一条有范围的 private AI path。"
        },
        {
          label: "Evidence pack",
          description: "让 examples、run notes、已知限制 与 评审 材料 保持可见。"
        },
        {
          label: "Operator handoff",
          description: "让 activation、rollback、ownership 与 维护 assumptions 保持清晰。"
        },
        {
          label: "Follow-up scope",
          description: "将未来变更与首次交付及 评审 pass 分开。"
        }
      ],
      sections: [
        {
          eyebrow: "协作",
          title: "直接技术协作",
          description: "工作发生在靠近客户团队的位置；他们理解 工作流，也将负责操作系统。",
          points: [
            "engineer-to-customer communication",
            "直接讨论 工作流 details",
            "implementation decisions 保持可见",
            "交付由真实环境塑形"
          ],
          assetId: "company-team-room-photo"
        },
        {
          eyebrow: "范围",
          title: "界定边界",
          description: "每一次 engagement 都从定义系统可以在哪里运行、可以触及什么、以及谁可以操作它开始。",
          points: [
            "客户 工作流 与 target behavior",
            "data movement 与 access limits",
            "运行时 与 re来源 assumptions",
            "first milestone 与 评审 owners"
          ]
        },
        {
          eyebrow: "构建",
          title: "构建第一个可运行系统",
          description: "首次交付是一条有范围的实现路径，而不是脱离语境的建议。",
          points: [
            "private 运行时 或 部署 path",
            "data、model 或 适配器 packaging",
            "environment-specific constraints",
            "implementation 期间的客户 评审"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "证据",
          title: "Review 证据",
          description: "Evidence 始终靠近系统，使 behavior、limits 与 decisions 在 handoff 之前可以被检查。",
          points: [
            "task examples 与 评审 cases",
            "run notes 或 configuration summaries",
            "已知限制 与 weak cases",
            "accepted 与 unresolved items"
          ]
        },
        {
          eyebrow: "交接",
          title: "让 handoff 可以被理解",
          description: "交付包含必要的 operating assumptions，使客户团队在首次上线后仍能理解系统。",
          points: [
            "启用说明",
            "rollback assumptions",
            "operator actions 与 admin 界面s",
            "ownership 与 维护 expectations"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "模式",
          title: "远程与现场协作",
          description: "支持模式取决于 environment access、implementation speed，以及客户团队的 operating needs。",
          points: [
            "remote scoping 与 评审",
            "必要时提供 on-site support",
            "直接访问 technical 上下文",
            "delivery mode 按项目限定范围"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Engagement 模式",
          description: "典型项目围绕真实 工作流、private environment 与一个具体的 first system 来界定范围。",
          points: [
            "private AI 适配 sprint",
            "local 运行时 setup 与 handoff",
            "数据包 与 评估 pass",
            "部署边界 评审"
          ]
        },
        {
          eyebrow: "边界",
          title: "这不是什么",
          description: "这种协作模型是面向 私有 AI 系统 的直接实现支持，而不是抽离的商业练习。",
          points: [
            "不是 generic AI advice",
            "不是租用式 engineering capacity",
            "不是 ticket-based delivery work",
            "不是 hands-off SaaS onboarding"
          ]
        },
        {
          eyebrow: "台账",
          title: "Engagement ledger",
          description: "一次良好的 engagement 会留下紧凑记录，涵盖 scope、build decisions、证据、handoff 与 next steps。",
          points: [
            "边界 definition",
            "build scope",
            "证据 材料",
            "follow-up decision"
          ]
        }
      ],
      closing: {
        title: "与将要操作它的团队一起工作。",
        description: "Random Walk 适合那些需要以技术清晰度完成界定、构建、评审 与 handoff 的 私有 AI 系统 项目。",
        ctaTitle: "讨论 engagement 模式",
        ctaDescription: "带来 工作流、target environment、边界 constraints、评审 needs 与 handoff expectations。",
        fit: [
          "你拥有真实 工作流 与客户可控环境约束。",
          "你需要直接的技术实现支持。",
          "你想要 证据 与 handoff，而不只是建议。"
        ],
        notFit: [
          "你只需要 general AI positioning。",
          "你想要 temporary ticket execution。",
          "你期待完全 hands-off 的 hosted product。"
        ]
      },
      notice: "具体的 engagement shape 会在工作开始前达成一致。"
    }
  },
  ja: {
    "repository-metadata": {
      eyebrow: "リポジトリメタデータ",
      title: "公開 リポジトリのシグナル の読み方。",
      description: "リポジトリメタデータ は、公開された 活動、構造、保守 画面 を示すことができます。それは有用な 文脈 であり、配備品質 や 顧客成果 の証拠ではありません。",
      taxonomy: [
        "public signals",
        "repository 活動",
        "保守 画面",
        "open-ソース 文脈",
        "claim 境界"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "Melix を開く",
        href: "/melix"
      },
      secondaryLink: {
        label: "ノート",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Activity 文脈",
          description: "Commits、releases、tags は、見える project movement を示すことがあります。"
        },
        {
          label: "Structure signal",
          description: "Folders、例、documentation は、repository がどのように構成されているかを示します。"
        },
        {
          label: "Maintenance 画面",
          description: "Issues と pull requests は、公開された議論と レビュー entry points を示します。"
        },
        {
          label: "Claim 境界",
          description: "Repository signals は、customer 配備 や operational quality を証明しません。"
        },
        {
          label: "Better questions",
          description: "Metadata は、作業をスコープする前に、より鋭い技術的な問いを立てる助けになります。"
        }
      ],
      sections: [
        {
          eyebrow: "Frame",
          title: "metadata を 文脈 として読む",
          description: "Public repository metadata は解釈の出発点であり、product maturity についての結論ではありません。",
          points: [
            "Activity は readiness と同義ではありません",
            "Stars は adoption と同義ではありません",
            "Issue volume には 文脈 が必要です",
            "Public code は delivery とは別です"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "Can show",
          title: "metadata が示せるもの",
          description: "Metadata は、公開 project movement、構造、collaboration 画面s を検査しやすくします。",
          points: [
            "見える 活動 cadence",
            "Release と tag パターン",
            "Repository 構造 と 例",
            "Public issues と レビュー 画面s"
          ]
        },
        {
          eyebrow: "Cannot show",
          title: "metadata が示せないもの",
          description: "リポジトリメタデータ は、private implementation quality、顧客成果、environment-specific behavior を証明できません。",
          points: [
            "顧客環境における 配備品質",
            "Security または compliance posture",
            "Customer adoption または satisfaction",
            "Private ランタイム performance"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Use",
          title: "Random Walk がどのように使うか",
          description: "Repository signals は、open-ソース reference work を検査可能にしながら、service claims を切り分ける助けになります。",
          points: [
            "public engineering direction を示す",
            "レビュー のために reference 成果物 を露出する",
            "repository 文脈 と service delivery を分ける",
            "scoping 前の技術的な会話を支える"
          ]
        },
        {
          eyebrow: "Inspect",
          title: "検査に役立つ signals",
          description: "Repository は、いくつかの見える 画面s を通じて読むことができます。それらを score に変える必要はありません。",
          points: [
            "Releases と tags",
            "Commit history",
            "Issues と pull requests",
            "Documentation と 例"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Restraint",
          title: "抑制をもって読む",
          description: "有用な問いは、見える signals が project の stated role と一致しているかどうかです。",
          points: [
            "claims と visible 成果物 を比較する",
            "欠けている metadata を問いとして扱う",
            "popularity を弱い signal として扱う",
            "repository が何を示しているのかを問う"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Repository と implementation",
          description: "公開 repository は reference 成果物 である場合があります。Customer implementation は別にスコープされます。",
          points: [
            "Customer environments はそれぞれ異なる",
            "Runtime assumptions は異なる場合がある",
            "Data と アクセス経路 はスコープされる",
            "Handoff expectations は project-specific である"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "この reソース ではないもの",
          description: "この reソース は interpretation guide であり、rating system や formal assessment ではありません。",
          points: [
            "GitHub popularity ranking ではありません",
            "security audit checklist ではありません",
            "procurement scoring rubric ではありません",
            "customer 配備 証拠 ではありません"
          ]
        },
        {
          eyebrow: "Takeaway",
          title: "signals を使ってより良い問いを立てる",
          description: "リポジトリメタデータ は、次の技術的な会話を置き換えるのではなく、より鮮明にするときに有用です。",
          points: [
            "project は何を示すためのものか？",
            "どの signals がその役割を支えているか？",
            "どの claims に別途 scoping が必要か？",
            "どの gaps に直接の議論が必要か？"
          ]
        }
      ],
      closing: {
        title: "公開 文脈 であり、private implementation 証拠 ではない。",
        description: "リポジトリメタデータ を public signal layer として読みます。それを使って open-ソース reference work を理解し、より良い技術的な問いを準備します。",
        ctaTitle: "open-ソース reference work を相談",
        ctaDescription: "repository、intended use、配備境界、そして technical scoping が必要な問いを持ち込んでください。",
        fit: [
          "open-ソース project signals を抑制的に解釈したい。",
          "Melix のような reference work を レビュー している。",
          "スコープされた技術的議論の前に public 文脈 が必要である。"
        ],
        notFit: [
          "production certification guide が欲しい。",
          "security audit または procurement checklist が必要である。",
          "repository metadata が 顧客成果 を証明することを期待している。"
        ]
      },
      notice: "Private customer 配備s は、別個の レビュー と書面による agreements によって管理されます。"
    },
    "engagement-patterns": {
      eyebrow: "Engagement Patterns",
      title: "FDE コラボレーションの進め方。",
      description: "Random Walk は顧客チームと直接協働し、境界 を定義し、最初に動作する プライベート AI システム を構築し、証拠 を作業の近くに保ち、明確な 引き継ぎ経路 を残します。",
      taxonomy: [
        "直接協働",
        "境界 brief",
        "最初に動作するシステム",
        "証拠 pack",
        "operator handoff"
      ],
      assetId: "company-team-panel-photo",
      primaryLink: {
        label: "スコープ設定を始める",
        href: "/contact"
      },
      secondaryLink: {
        label: "会社",
        href: "/company"
      },
      outputsAtGlance: [
        {
          label: "境界ブリーフ",
          description: "構築作業が始まる前に、ワークフロー、data、access、ランタイム、handoff limits を定義します。"
        },
        {
          label: "最初に動作するシステム",
          description: "顧客環境の中に、スコープを定めた private AI path を着地させます。"
        },
        {
          label: "Evidence pack",
          description: "例、run notes、既知の限界、レビュー 資料 を見える状態に保ちます。"
        },
        {
          label: "Operator handoff",
          description: "activation、rollback、ownership、保守 assumptions を明確に残します。"
        },
        {
          label: "Follow-up scope",
          description: "将来の変更を、最初の delivery と レビュー pass から切り分けます。"
        }
      ],
      sections: [
        {
          eyebrow: "協働",
          title: "直接的な技術協働",
          description: "作業は、ワークフロー を理解し、システムを運用する顧客チームの近くで行われます。",
          points: [
            "engineer-to-customer communication",
            "ワークフロー details を直接議論",
            "implementation decisions を見える状態に保つ",
            "実際の environment によって delivery を形づくる"
          ],
          assetId: "company-team-room-photo"
        },
        {
          eyebrow: "Scope",
          title: "境界 をスコープする",
          description: "すべての engagement は、システムがどこで動き、何に触れ、誰が操作できるのかを定義することから始まります。",
          points: [
            "顧客 ワークフロー と target behavior",
            "data movement と access limits",
            "ランタイム と reソース assumptions",
            "first milestone と レビュー owners"
          ]
        },
        {
          eyebrow: "Build",
          title: "最初に動作するシステムを構築する",
          description: "最初の delivery は、切り離された recommendation ではなく、スコープを定めた implementation path です。",
          points: [
            "private ランタイム または 配備 path",
            "data、model、または アダプター packaging",
            "environment-specific constraints",
            "implementation 中の顧客 レビュー"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Evidence",
          title: "Review 証拠",
          description: "Evidence は system の近くに保たれ、behavior、limits、decisions を handoff 前に検査できるようにします。",
          points: [
            "タスク 例 と レビュー ケース",
            "run notes または configuration summaries",
            "既知の限界 と weak ケース",
            "accepted と unresolved items"
          ]
        },
        {
          eyebrow: "Handoff",
          title: "handoff を理解できるものにする",
          description: "Delivery には、初回ローンチ後に顧客チームが system を理解するために必要な operating assumptions が含まれます。",
          points: [
            "有効化メモ",
            "rollback assumptions",
            "operator actions と admin 画面s",
            "ownership と 保守 expectations"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Mode",
          title: "リモートとオンサイトの協働",
          description: "Support mode は、environment access、implementation speed、顧客チームの operating needs によって決まります。",
          points: [
            "remote scoping と レビュー",
            "有用な場合の on-site support",
            "technical 文脈 への直接アクセス",
            "delivery mode は project ごとにスコープ設定"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Engagement パターン",
          description: "典型的な projects は、実際の ワークフロー、private environment、具体的な first system を中心にスコープされます。",
          points: [
            "private AI 適応 sprint",
            "local ランタイム setup と handoff",
            "データパッケージ と 評価 pass",
            "配備境界 レビュー"
          ]
        },
        {
          eyebrow: "境界",
          title: "これではないもの",
          description: "この collaboration model は、プライベート AI システム のための直接的な implementation support であり、切り離された business exercise ではありません。",
          points: [
            "generic AI advice ではありません",
            "rented engineering capacity ではありません",
            "ticket-based delivery work ではありません",
            "hands-off SaaS onboarding ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Engagement ledger",
          description: "良い engagement は、scope、build decisions、証拠、handoff、next steps のコンパクトな記録を残します。",
          points: [
            "境界 definition",
            "build scope",
            "証拠 資料",
            "follow-up decision"
          ]
        }
      ],
      closing: {
        title: "それを運用するチームと共に働く。",
        description: "Random Walk が適しているのは、プライベート AI システム を技術的な明瞭さとともにスコープし、構築し、レビュー し、handoff する必要がある projects です。",
        ctaTitle: "engagement パターン を相談",
        ctaDescription: "ワークフロー、target environment、境界 constraints、レビュー needs、handoff expectations を持ち込んでください。",
        fit: [
          "実際の ワークフロー と、顧客が制御する environment constraints がある。",
          "直接的な technical implementation support が必要である。",
          "助言だけでなく、証拠 と handoff が欲しい。"
        ],
        notFit: [
          "general AI positioning だけが必要である。",
          "temporary ticket execution を求めている。",
          "完全に hands-off な hosted product を期待している。"
        ]
      },
      notice: "正確な engagement shape は、作業開始前に合意されます。"
    }
  },
  ko: {
    "repository-metadata": {
      eyebrow: "저장소 메타데이터",
      title: "공개 저장소 신호를 읽는 방법.",
      description: "저장소 메타데이터는 공개 활동, 구조, 유지보수 화면를 보여줄 수 있습니다. 이는 유용한 맥락이지만, 배포 품질나 고객 결과의 증거는 아닙니다.",
      taxonomy: [
        "public signals",
        "repository 활동",
        "유지보수 화면",
        "open-소스 맥락",
        "claim 경계"
      ],
      assetId: "home-melix-product-panel",
      primaryLink: {
        label: "Melix 열기",
        href: "/melix"
      },
      secondaryLink: {
        label: "노트",
        href: "/notes"
      },
      outputsAtGlance: [
        {
          label: "Activity 맥락",
          description: "Commits, releases, tags는 보이는 project movement를 보여줄 수 있습니다."
        },
        {
          label: "Structure signal",
          description: "Folders, 예시, documentation은 repository가 어떻게 구성되어 있는지 보여줍니다."
        },
        {
          label: "Maintenance 화면",
          description: "Issues와 pull requests는 공개 discussion 및 검토 entry points를 보여줍니다."
        },
        {
          label: "Claim 경계",
          description: "Repository signals는 customer 배포나 operational quality를 증명하지 않습니다."
        },
        {
          label: "Better questions",
          description: "Metadata는 작업 범위를 정하기 전에 더 날카로운 기술 질문을 하도록 돕습니다."
        }
      ],
      sections: [
        {
          eyebrow: "Frame",
          title: "metadata를 맥락로 읽기",
          description: "Public repository metadata는 해석의 출발점이지, product maturity에 대한 결론이 아닙니다.",
          points: [
            "Activity는 readiness와 같지 않습니다",
            "Stars는 adoption과 같지 않습니다",
            "Issue volume에는 맥락가 필요합니다",
            "Public code는 delivery와 별개입니다"
          ],
          assetId: "work-case-wall"
        },
        {
          eyebrow: "Can show",
          title: "metadata가 보여줄 수 있는 것",
          description: "Metadata는 공개 project movement, 구조, collaboration 화면s를 더 쉽게 검사할 수 있게 합니다.",
          points: [
            "보이는 활동 cadence",
            "Release 및 tag 패턴",
            "Repository 구조 및 예시",
            "Public issues 및 검토 화면s"
          ]
        },
        {
          eyebrow: "Cannot show",
          title: "metadata가 보여줄 수 없는 것",
          description: "저장소 메타데이터는 private implementation quality, 고객 결과, environment-specific behavior를 증명할 수 없습니다.",
          points: [
            "고객 환경의 배포 품질",
            "Security 또는 compliance posture",
            "Customer adoption 또는 satisfaction",
            "Private 런타임 performance"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Use",
          title: "Random Walk가 사용하는 방식",
          description: "Repository signals는 open-소스 reference work를 검사 가능하게 하면서 service claims를 분리하는 데 도움을 줍니다.",
          points: [
            "public engineering direction 보여주기",
            "검토를 위한 reference 결과물 공개",
            "repository 맥락와 service delivery 분리",
            "scoping 전 기술 대화 지원"
          ]
        },
        {
          eyebrow: "Inspect",
          title: "검사할 만한 signals",
          description: "Repository는 몇 가지 보이는 화면s를 통해 읽을 수 있으며, 이를 score로 바꿀 필요는 없습니다.",
          points: [
            "Releases 및 tags",
            "Commit history",
            "Issues 및 pull requests",
            "Documentation 및 예시"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Restraint",
          title: "절제해서 읽기",
          description: "유용한 질문은 보이는 signals가 project의 stated role과 맞는지 여부입니다.",
          points: [
            "claims를 visible 결과물와 비교",
            "누락된 metadata를 질문으로 취급",
            "popularity를 약한 signal로 취급",
            "repository가 무엇을 보여주는지 묻기"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "Repository와 implementation",
          description: "공개 repository는 reference 결과물일 수 있습니다. Customer implementation은 별도로 scope됩니다.",
          points: [
            "Customer environments는 서로 다릅니다",
            "Runtime assumptions는 다를 수 있습니다",
            "Data와 접근 경로는 scope됩니다",
            "Handoff expectations는 project-specific입니다"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "이 re소스가 아닌 것",
          description: "이 re소스는 interpretation guide이지, rating system이나 formal assessment가 아닙니다.",
          points: [
            "GitHub popularity ranking이 아닙니다",
            "security audit checklist가 아닙니다",
            "procurement scoring rubric이 아닙니다",
            "customer 배포 증거가 아닙니다"
          ]
        },
        {
          eyebrow: "Takeaway",
          title: "signals로 더 나은 질문하기",
          description: "저장소 메타데이터는 다음 기술 대화를 대체하는 대신 더 선명하게 만들 때 유용합니다.",
          points: [
            "project는 무엇을 보여주기 위한 것인가?",
            "어떤 signals가 그 역할을 뒷받침하는가?",
            "어떤 claims에 별도 scoping이 필요한가?",
            "어떤 gaps에 직접 논의가 필요한가?"
          ]
        }
      ],
      closing: {
        title: "공개 맥락이지, private implementation 증거가 아닙니다.",
        description: "저장소 메타데이터를 public signal layer로 읽으세요. 이를 사용해 open-소스 reference work를 이해하고 더 나은 기술 질문을 준비하세요.",
        ctaTitle: "open-소스 reference work 논의",
        ctaDescription: "repository, intended use, 배포 경계, 그리고 technical scoping이 필요한 질문을 가져오세요.",
        fit: [
          "open-소스 project signals를 절제해서 해석하고 싶습니다.",
          "Melix 같은 reference work를 검토하고 있습니다.",
          "범위가 정해진 기술 논의 전에 public 맥락가 필요합니다."
        ],
        notFit: [
          "production certification guide를 원합니다.",
          "security audit 또는 procurement checklist가 필요합니다.",
          "repository metadata가 고객 결과를 증명하기를 기대합니다."
        ]
      },
      notice: "Private customer 배포s는 별도의 검토와 written agreements에 의해 관리됩니다."
    },
    "engagement-patterns": {
      eyebrow: "Engagement Patterns",
      title: "FDE 협업이 작동하는 방식.",
      description: "Random Walk는 고객 팀과 직접 협업하여 경계를 정의하고, 처음 작동하는 프라이빗 AI 시스템을 구축하며, 증거를 가까이에 두고, 명확한 인수인계 경로를 남깁니다.",
      taxonomy: [
        "직접 협업",
        "경계 brief",
        "처음 작동하는 시스템",
        "증거 pack",
        "operator handoff"
      ],
      assetId: "company-team-panel-photo",
      primaryLink: {
        label: "스코프 설정 시작",
        href: "/contact"
      },
      secondaryLink: {
        label: "회사",
        href: "/company"
      },
      outputsAtGlance: [
        {
          label: "경계 브리프",
          description: "구축 작업이 시작되기 전에 워크플로, data, access, 런타임, handoff limits를 정의합니다."
        },
        {
          label: "처음 작동하는 시스템",
          description: "고객 환경 안에 범위가 정해진 private AI path를 안착시킵니다."
        },
        {
          label: "Evidence pack",
          description: "예시, run notes, 알려진 한계, 검토 자료을 보이는 상태로 유지합니다."
        },
        {
          label: "Operator handoff",
          description: "activation, rollback, ownership, 유지보수 assumptions를 명확하게 남깁니다."
        },
        {
          label: "Follow-up scope",
          description: "미래의 변경 사항을 첫 delivery 및 검토 pass와 분리합니다."
        }
      ],
      sections: [
        {
          eyebrow: "협업",
          title: "직접적인 기술 협업",
          description: "작업은 워크플로를 이해하고 시스템을 운영할 고객 팀 가까이에서 이루어집니다.",
          points: [
            "engineer-to-customer communication",
            "워크플로 details를 직접 논의",
            "implementation decisions를 보이는 상태로 유지",
            "실제 environment에 맞춰 delivery 형성"
          ],
          assetId: "company-team-room-photo"
        },
        {
          eyebrow: "Scope",
          title: "경계 범위 설정",
          description: "모든 engagement는 system이 어디에서 실행될 수 있고, 무엇을 접촉할 수 있으며, 누가 운영할 수 있는지 정의하는 것에서 시작됩니다.",
          points: [
            "고객 워크플로 및 target behavior",
            "data movement 및 access limits",
            "런타임 및 re소스 assumptions",
            "first milestone 및 검토 owners"
          ]
        },
        {
          eyebrow: "Build",
          title: "처음 작동하는 시스템 구축",
          description: "첫 delivery는 분리된 recommendation이 아니라, 범위가 정해진 implementation path입니다.",
          points: [
            "private 런타임 또는 배포 path",
            "data, model, 또는 어댑터 packaging",
            "environment-specific constraints",
            "implementation 중 고객 검토"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Evidence",
          title: "Review 증거",
          description: "Evidence는 system 가까이에 남아 behavior, limits, decisions를 handoff 전에 검사할 수 있게 합니다.",
          points: [
            "작업 예시 및 검토 사례",
            "run notes 또는 configuration summaries",
            "알려진 한계 및 weak 사례",
            "accepted 및 unresolved items"
          ]
        },
        {
          eyebrow: "Handoff",
          title: "handoff를 이해 가능하게 만들기",
          description: "Delivery에는 첫 launch 이후 고객 팀이 system을 이해하는 데 필요한 operating assumptions가 포함됩니다.",
          points: [
            "활성화 메모",
            "rollback assumptions",
            "operator actions 및 admin 화면s",
            "ownership 및 유지보수 expectations"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Mode",
          title: "원격 및 현장 협업",
          description: "Support mode는 environment access, implementation speed, 고객 팀의 operating needs에 따라 달라집니다.",
          points: [
            "remote scoping 및 검토",
            "유용할 때 on-site support",
            "technical 맥락에 대한 직접 접근",
            "delivery mode는 project별로 범위 설정"
          ]
        },
        {
          eyebrow: "Patterns",
          title: "Engagement 패턴",
          description: "일반적인 projects는 실제 워크플로, private environment, 구체적인 first system을 중심으로 범위가 정해집니다.",
          points: [
            "private AI 적응 sprint",
            "local 런타임 setup 및 handoff",
            "데이터 패키지 및 평가 pass",
            "배포 경계 검토"
          ]
        },
        {
          eyebrow: "경계",
          title: "이것이 아닌 것",
          description: "이 collaboration model은 프라이빗 AI 시스템를 위한 직접 implementation support이지, 분리된 business exercise가 아닙니다.",
          points: [
            "generic AI advice가 아닙니다",
            "rented engineering capacity가 아닙니다",
            "ticket-based delivery work가 아닙니다",
            "hands-off SaaS onboarding이 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Engagement ledger",
          description: "좋은 engagement는 scope, build decisions, 증거, handoff, next steps에 대한 간결한 기록을 남깁니다.",
          points: [
            "경계 definition",
            "build scope",
            "증거 자료",
            "follow-up decision"
          ]
        }
      ],
      closing: {
        title: "그것을 운영할 팀과 함께 일하세요.",
        description: "Random Walk는 프라이빗 AI 시스템을 기술적으로 명확하게 scope하고, build하고, 검토하고, handoff해야 하는 projects에 적합합니다.",
        ctaTitle: "engagement 패턴 논의",
        ctaDescription: "워크플로, target environment, 경계 constraints, 검토 needs, handoff expectations를 가져오세요.",
        fit: [
          "실제 워크플로와 고객이 제어하는 environment constraints가 있습니다.",
          "직접적인 technical implementation support가 필요합니다.",
          "조언만이 아니라 증거와 handoff를 원합니다."
        ],
        notFit: [
          "general AI positioning만 필요합니다.",
          "temporary ticket execution을 원합니다.",
          "완전히 hands-off인 hosted product를 기대합니다."
        ]
      },
      notice: "정확한 engagement shape는 작업이 시작되기 전에 합의됩니다."
    }
  }
};

export const legalDetailPages: DetailCollection<LegalDetailSlug> = {
  en: {
    "responsible-use": {
      eyebrow: "Responsible Use",
      title: "Responsible use starts with clear boundaries.",
      description: "Private AI work needs written limits for customer material, model behavior, review checkpoints, decision ownership, and known limits before deployment.",
      taxonomy: ["data-use boundary", "behavior boundary", "review checkpoints", "decision ownership", "known limits"],
      assetId: "security-responsibility-handoff",
      primaryLink: { label: "Discuss boundaries", href: "/contact" },
      secondaryLink: { label: "Terms", href: "/terms" },
      outputsAtGlance: [
        { label: "Data-use boundary", description: "Defines what material may be used, excluded, transformed, retained, or returned." },
        { label: "Behavior boundary", description: "Describes intended behavior, restricted behavior, and unsupported uses." },
        { label: "Review checkpoints", description: "Marks where customer review is needed before reuse or deployment." },
        { label: "Decision ownership", description: "Clarifies who owns final business, domain, and operational decisions." },
        { label: "Limit notes", description: "Keeps weak cases, unresolved questions, and follow-up needs visible." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why this page exists",
          description: "This page explains the practical responsible-use boundaries Random Walk expects in private AI service work.",
          points: ["Sets project expectations before implementation", "Connects engineering work to written limits", "Separates support from final customer decisions", "Keeps review points explicit"],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Material",
          title: "Customer material",
          description: "Customer material should be classified before it is used for training, retrieval, evaluation, or deployment.",
          points: ["Allowed source categories", "Restricted or excluded material", "Temporary copies and derived artifacts", "Retention, return, or deletion expectations"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Behavior",
          title: "Model behavior boundaries",
          description: "Model behavior should be described in terms of intended use, restricted behavior, and known weak areas.",
          points: ["Intended task behavior", "Unsupported output patterns", "Restricted use cases", "Sensitive or ambiguous outputs"]
        },
        {
          eyebrow: "Review",
          title: "Review and approval points",
          description: "Private AI work should define where customer review is needed before material or behavior is reused.",
          points: ["Dataset review before model work", "Evaluation review before deployment", "Output review before customer-facing use", "Activation review for models or adapters"]
        },
        {
          eyebrow: "Responsibility",
          title: "Decision ownership",
          description: "Random Walk provides engineering support. Customers and their advisors own final business, domain, and policy decisions.",
          points: ["Engineering support from Random Walk", "Business use decisions by customer", "Advisor review where needed", "Exceptions documented before proceeding"],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "Evidence",
          title: "Evidence and limits",
          description: "Responsible-use boundaries are stronger when evidence, weak cases, and open questions remain close to the work.",
          points: ["Evaluation examples", "Known-limit notes", "Failure or weak-case examples", "Unresolved questions and next steps"]
        },
        {
          eyebrow: "Checklist",
          title: "What should be written down",
          description: "A responsible-use boundary should be compact, specific, and usable during implementation.",
          points: ["Permitted and excluded sources", "Intended and restricted behavior", "Review checkpoints and decision owner", "Activation and rollback conditions"]
        },
        {
          eyebrow: "Boundaries",
          title: "What this page is not",
          description: "This page is an informational boundary guide for service work, not a substitute for customer-side review.",
          points: ["Not legal advice", "Not a formal approval statement", "Not a universal AI policy", "Not a promise that every risk is removed"]
        }
      ],
      closing: {
        title: "Write the limits before deployment.",
        description: "Responsible private AI work starts with explicit boundaries for material, behavior, review, ownership, evidence, and known limits.",
        ctaTitle: "Review responsible-use boundaries",
        ctaDescription: "Bring the material categories, intended model behavior, review checkpoints, decision owners, and known constraints.",
        fit: [
          "You need private AI work with clear use boundaries.",
          "You want reviewable material before deployment.",
          "You understand final decisions need named owners."
        ],
        notFit: [
          "You need legal or regulatory advice from this page.",
          "You want unrestricted use of unreviewed material.",
          "You expect engineering work to replace customer judgment."
        ]
      },
      notice: "This page is informational and does not replace a contract, policy, or legal review."
    },
    "security-review": {
      eyebrow: "Security Review",
      title: "Security review for private AI deployments.",
      description: "Random Walk prepares engineering evidence for customer review: deployment boundary, access path, artifact movement, evaluation material, and handoff notes.",
      taxonomy: ["deployment boundary", "access path", "artifact movement", "evaluation material", "handoff notes"],
      assetId: "security-access-control-diagram",
      primaryLink: { label: "Discuss review material", href: "/contact" },
      secondaryLink: { label: "Responsible use", href: "/legal/responsible-use" },
      outputsAtGlance: [
        { label: "Deployment boundary", description: "Where the system runs, what it connects to, and what remains outside scope." },
        { label: "Access path", description: "Operator, admin, service, and support access assumptions for the scoped engagement." },
        { label: "Artifact movement", description: "How data packages, models, adapters, logs, outputs, temporary files, and caches move." },
        { label: "Evaluation material", description: "Task examples, known-limit notes, review material, and unresolved questions." },
        { label: "Handoff notes", description: "Operation, rollback, ownership, advisor review where needed, and follow-up assumptions." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why this page exists",
          description: "This page explains the engineering evidence Random Walk can prepare for customer-side review.",
          points: ["Defines review material before deployment", "Separates engineering evidence from final decisions", "Helps customer teams ask concrete questions", "Keeps review expectations scoped"]
        },
        {
          eyebrow: "Scope",
          title: "Review scope",
          description: "Review starts by defining what system, environment, access path, and material are in scope.",
          points: ["Deployment environment", "Runtime and dependency assumptions", "Data and model artifact boundary", "Customer-side review owner"],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Boundary",
          title: "Deployment boundary evidence",
          description: "The deployment boundary should show where the system runs and what it touches.",
          points: ["Runtime location and operating environment", "Connected systems and data paths", "Temporary material that may be created", "Items outside the engagement scope"],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Access",
          title: "Access path evidence",
          description: "Access review needs practical information about who can reach which surface and under what assumptions.",
          points: ["Operator access", "Admin access", "Service access", "Support or maintenance access"],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "Artifact movement and retention",
          description: "Material movement should be written down before customer review and handoff.",
          points: ["Dataset or retrieval package movement", "Model, adapter, or fused artifact movement", "Logs, prompts, outputs, temporary files, and caches", "Return, deletion, or retention assumptions"]
        },
        {
          eyebrow: "Evidence",
          title: "Evidence pack",
          description: "The evidence pack keeps the review material close to the deployment work.",
          points: ["Boundary or architecture brief", "Configuration summary", "Evaluation examples and known-limit notes", "Rollback notes and unresolved questions"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Archive",
          title: "Review material archive",
          description: "Review material should remain organized enough for customer teams to inspect after delivery.",
          points: ["Evaluation material grouped by task", "Run notes and delivery decisions", "Exception notes where needed", "Follow-up items kept visible"],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Decision",
          title: "Decision boundary",
          description: "Random Walk prepares engineering evidence. The customer and qualified advisors own final acceptance decisions.",
          points: ["Engineering evidence prepared by Random Walk", "Customer review remains explicit", "Advisor review where needed", "Follow-up work scoped separately"],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "Boundaries",
          title: "What this page is not",
          description: "This page is informational. It does not replace customer security ownership or qualified advisor review.",
          points: ["Not a security approval statement", "Not legal or regulatory advice", "Not a replacement for customer review", "Not a promise that risk is removed"]
        }
      ],
      closing: {
        title: "Prepare review material before deployment.",
        description: "Private AI deployments are easier to review when boundary, access, movement, evidence, and handoff assumptions are written down.",
        ctaTitle: "Discuss security review material",
        ctaDescription: "Bring the deployment boundary, access path, artifact movement, retention assumptions, evaluation material, and review owners.",
        fit: [
          "You need engineering evidence for a private AI deployment review.",
          "Your team or advisors own the final review decision.",
          "Boundary, access, movement, retention, and handoff need to be explicit."
        ],
        notFit: [
          "You need a formal security approval from this page.",
          "You expect Random Walk to replace internal review.",
          "You want universal security-control claims independent of scope."
        ]
      },
      notice: "Random Walk prepares engineering evidence for review. Final security, legal, regulatory, and operational acceptance remain with the customer and their qualified advisors."
    }
  },
  zh: {
    "responsible-use": {
      eyebrow: "负责任使用",
      title: "负责任的使用，始于清晰边界。",
      description: "Private AI 工作在部署之前，需要为客户材料、模型行为、评审节点、决策归属与 已知限制 写下明确边界。",
      taxonomy: [
        "data-use 边界",
        "behavior 边界",
        "评审节点",
        "decision ownership",
        "已知限制"
      ],
      assetId: "security-responsibility-handoff",
      primaryLink: {
        label: "讨论边界",
        href: "/contact"
      },
      secondaryLink: {
        label: "Terms",
        href: "/terms"
      },
      outputsAtGlance: [
        {
          label: "Data-use 边界",
          description: "定义哪些材料可以被使用、排除、转换、保留或返还。"
        },
        {
          label: "Behavior 边界",
          description: "描述预期行为、受限行为与不支持的用途。"
        },
        {
          label: "Review checkpoints",
          description: "标记在复用或部署之前，需要客户 评审 的位置。"
        },
        {
          label: "Decision ownership",
          description: "明确最终业务、领域与运营决策由谁负责。"
        },
        {
          label: "Limit notes",
          description: "让薄弱场景、未解决问题与后续需求保持可见。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么存在本页",
          description: "本页说明 Random Walk 在 私有 AI 服务工作 中所期待的实际 负责任使用边界。",
          points: [
            "在实现之前设定项目预期",
            "将工程工作连接到书面边界",
            "将支持工作与客户最终决策分开",
            "让 评审 points 保持明确"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "材料",
          title: "客户材料",
          description: "客户材料在用于 training、检索、评估 或 部署 之前，应先完成分类。",
          points: [
            "允许的 来源 categories",
            "受限或排除的材料",
            "临时副本与 derived 工件",
            "保留、返还或删除预期"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "行为",
          title: "模型行为边界",
          description: "模型行为应围绕预期用途、受限行为与已知薄弱区域进行描述。",
          points: [
            "预期任务行为",
            "不支持的 输出 模式",
            "受限 use cases",
            "敏感或含糊的 输出"
          ]
        },
        {
          eyebrow: "Review",
          title: "Review 与 approval points",
          description: "Private AI 工作应定义材料或行为在复用之前，哪些位置需要客户 评审。",
          points: [
            "模型工作 前的 dataset 评审",
            "部署 前的 评估 评审",
            "customer-facing use 前的 输出 评审",
            "models 或 适配器 的 activation 评审"
          ]
        },
        {
          eyebrow: "责任",
          title: "Decision ownership",
          description: "Random Walk 提供工程支持。客户及其顾问拥有最终业务、领域与 policy decisions。",
          points: [
            "来自 Random Walk 的工程支持",
            "由客户决定 business use",
            "必要时进行 advisor 评审",
            "在继续之前记录例外情况"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "证据",
          title: "Evidence 与 limits",
          description: "当 证据、薄弱场景与开放问题始终靠近工作本身时，负责任使用边界 会更稳固。",
          points: [
            "Evaluation examples",
            "Known-limit notes",
            "Failure 或 weak-case examples",
            "未解决问题与 next steps"
          ]
        },
        {
          eyebrow: "Checklist",
          title: "应写下什么",
          description: "Responsible-use 边界 应当紧凑、具体，并能在实现过程中使用。",
          points: [
            "允许与排除的 来源s",
            "预期与受限 behavior",
            "Review checkpoints 与 decision owner",
            "Activation 与 rollback conditions"
          ]
        },
        {
          eyebrow: "边界",
          title: "本页不是什么",
          description: "本页是面向 service work 的信息性 边界 guide，并不能替代客户侧 评审。",
          points: [
            "不是 legal advice",
            "不是 formal approval statement",
            "不是 universal AI policy",
            "不是承诺每一种风险都已被移除"
          ]
        }
      ],
      closing: {
        title: "在部署之前写下边界。",
        description: "负责任的 private AI 工作始于对材料、行为、评审、ownership、证据 与 已知限制 的明确边界。",
        ctaTitle: "Review 负责任使用边界",
        ctaDescription: "带来 材料 categories、intended model behavior、评审节点、decision owners 与 known constraints。",
        fit: [
          "你需要具备清晰 use 边界 的 private AI 工作。",
          "你希望在部署之前拥有可审查的材料。",
          "你理解最终决策需要指定明确负责人。"
        ],
        notFit: [
          "你需要从本页获得 legal 或 regulatory advice。",
          "你希望不受限制地使用未经 评审 的材料。",
          "你期待工程工作取代客户判断。"
        ]
      },
      notice: "本页仅供参考，不能替代合同、policy 或 legal 评审。"
    },
    "security-review": {
      eyebrow: "安全评审",
      title: "面向 private AI 部署s 的安全审查。",
      description: "Random Walk 为客户 评审 准备工程证据：部署边界、访问路径、工件 movement、评估材料 与 交接说明。",
      taxonomy: [
        "部署边界",
        "访问路径",
        "工件 movement",
        "评估材料",
        "交接说明"
      ],
      assetId: "security-access-control-diagram",
      primaryLink: {
        label: "讨论 评审 材料",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "部署边界",
          description: "系统在哪里运行、连接到什么，以及哪些内容仍在范围之外。"
        },
        {
          label: "Access path",
          description: "面向 限定范围的 engagement 的 operator、admin、service 与 support access assumptions。"
        },
        {
          label: "Artifact movement",
          description: "数据包、models、适配器、logs、输出、temporary files 与 caches 如何移动。"
        },
        {
          label: "Evaluation 材料",
          description: "任务示例、known-limit notes、评审 材料 与 unresolved questions。"
        },
        {
          label: "Handoff notes",
          description: "运营、rollback、ownership、必要时的 advisor 评审，以及后续跟进假设。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么存在本页",
          description: "本页说明 Random Walk 可为客户侧 评审 准备的工程证据。",
          points: [
            "在 部署 之前定义 评审 材料",
            "将工程证据与最终决策分开",
            "帮助客户团队提出具体问题",
            "让 评审 expectations 保持有范围"
          ]
        },
        {
          eyebrow: "Scope",
          title: "Review scope",
          description: "Review 始于定义哪些系统、环境、访问路径 与 材料 属于范围内。",
          points: [
            "Deployment environment",
            "Runtime 与 dependency assumptions",
            "Data 与 model 工件 边界",
            "客户侧 评审 owner"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Boundary",
          title: "部署边界 证据",
          description: "部署边界 应展示系统在哪里运行，以及它触及什么。",
          points: [
            "Runtime location 与 运行环境",
            "Connected systems 与 data paths",
            "可能被创建的 temporary 材料",
            "engagement scope 之外的项目"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Access",
          title: "Access path 证据",
          description: "Access 评审 需要实用信息：谁可以到达哪些 界面，以及基于什么 assumptions。",
          points: [
            "Operator access",
            "Admin access",
            "Service access",
            "Support 或 维护 access"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "Artifact movement 与 retention",
          description: "Material movement 应在客户 评审 与 handoff 之前被写下。",
          points: [
            "Dataset 或 检索 package movement",
            "Model、适配器 或 fused 工件 movement",
            "Logs、prompts、输出、temporary files 与 caches",
            "Return、deletion 或 retention assumptions"
          ]
        },
        {
          eyebrow: "Evidence",
          title: "Evidence pack",
          description: "Evidence pack 让 评审 材料 始终靠近 部署 work。",
          points: [
            "Boundary 或 architecture brief",
            "Configuration summary",
            "Evaluation examples 与 known-limit notes",
            "Rollback notes 与 unresolved questions"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Archive",
          title: "Review 材料 archive",
          description: "Review 材料 应保持足够有序，使客户团队在交付后仍可检查。",
          points: [
            "按任务分组的 评估材料",
            "Run notes 与 delivery decisions",
            "必要时的 exception notes",
            "Follow-up items 保持可见"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Decision",
          title: "Decision 边界",
          description: "Random Walk 准备工程证据。客户与合格顾问拥有最终 acceptance decisions。",
          points: [
            "由 Random Walk 准备的 engineering 证据",
            "客户 评审 保持明确",
            "必要时进行 advisor 评审",
            "后续工作另行限定范围"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "边界",
          title: "本页不是什么",
          description: "本页仅供参考。它不能替代客户 security ownership 或合格顾问 评审。",
          points: [
            "不是 security approval statement",
            "不是 legal 或 regulatory advice",
            "不是 客户评审 的替代品",
            "不是承诺 risk 已被移除"
          ]
        }
      ],
      closing: {
        title: "在 部署 之前准备 评审 材料。",
        description: "当 边界、access、movement、证据 与 handoff assumptions 被写下时，private AI 部署s 会更容易被 评审。",
        ctaTitle: "讨论 security 评审 材料",
        ctaDescription: "带来 部署边界、访问路径、工件 movement、retention assumptions、评估材料 与 评审 owners。",
        fit: [
          "你需要用于 private AI 部署 评审 的工程证据。",
          "你的团队或顾问拥有最终 评审 decision。",
          "Boundary、access、movement、retention 与 handoff 需要明确。"
        ],
        notFit: [
          "你需要从本页获得 formal security approval。",
          "你期待 Random Walk 取代内部 评审。",
          "你想要脱离 scope 的 universal security-控制 claims。"
        ]
      },
      notice: "Random Walk 为 评审 准备工程证据。最终 security、legal、regulatory 与 operational acceptance 仍归客户及其合格顾问所有。"
    }
  },
  ja: {
    "responsible-use": {
      eyebrow: "責任ある利用",
      title: "責任ある利用は、明確な境界から始まります。",
      description: "プライベート AI 作業 では、デプロイ前に顧客 資料、model behavior、レビューポイント、decision ownership、既知の限界 に対する書かれた境界が必要です。",
      taxonomy: [
        "data-use 境界",
        "behavior 境界",
        "レビューポイント",
        "decision ownership",
        "既知の限界"
      ],
      assetId: "security-responsibility-handoff",
      primaryLink: {
        label: "境界を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "Terms",
        href: "/terms"
      },
      outputsAtGlance: [
        {
          label: "Data-use 境界",
          description: "どの 資料 を使用、除外、変換、保持、または返却できるかを定義します。"
        },
        {
          label: "Behavior 境界",
          description: "意図された behavior、制限された behavior、そしてサポートされない用途を記述します。"
        },
        {
          label: "Review checkpoints",
          description: "再利用またはデプロイ前に顧客 レビュー が必要な位置を示します。"
        },
        {
          label: "Decision ownership",
          description: "最終的な business、domain、operational decisions を誰が所有するかを明確にします。"
        },
        {
          label: "Limit notes",
          description: "弱いケース、未解決の問い、フォローアップの必要性を見える状態に保ちます。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "このページが存在する理由",
          description: "このページは、Random Walk が プライベート AI サービス作業 において期待する実践的な 責任ある利用の境界 を説明します。",
          points: [
            "実装前にプロジェクトの期待値を設定する",
            "エンジニアリング作業を書かれた limits に結びつける",
            "支援と最終的な顧客判断を分ける",
            "レビュー points を明示的に保つ"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Material",
          title: "顧客 資料",
          description: "顧客 資料 は、training、検索、評価、配備 に使われる前に分類されるべきです。",
          points: [
            "許可された ソース categories",
            "制限または除外された 資料",
            "一時コピーと derived 成果物",
            "保持、返却、または削除の期待値"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Behavior",
          title: "Model behavior 境界",
          description: "Model behavior は、意図された use、制限された behavior、既知の弱い領域という観点から記述されるべきです。",
          points: [
            "意図された タスク behavior",
            "サポートされない 出力 パターン",
            "制限された use ケース",
            "機微または曖昧な 出力"
          ]
        },
        {
          eyebrow: "Review",
          title: "Review と approval points",
          description: "プライベート AI 作業 では、資料 や behavior が再利用される前に、どこで顧客 レビュー が必要かを定義するべきです。",
          points: [
            "モデル作業 前の dataset レビュー",
            "配備 前の 評価 レビュー",
            "customer-facing use 前の 出力 レビュー",
            "models または アダプター の activation レビュー"
          ]
        },
        {
          eyebrow: "責任",
          title: "Decision ownership",
          description: "Random Walk はエンジニアリング支援を提供します。最終的な business、domain、policy decisions は、顧客とその advisors が所有します。",
          points: [
            "Random Walk によるエンジニアリング支援",
            "顧客による business use decisions",
            "必要に応じた advisor レビュー",
            "進行前に例外を文書化する"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "証拠",
          title: "Evidence と limits",
          description: "Evidence、弱いケース、未解決の問いが作業の近くに保たれているほど、責任ある利用の境界 は強くなります。",
          points: [
            "Evaluation 例",
            "Known-limit notes",
            "Failure または weak-case 例",
            "未解決の問いと next steps"
          ]
        },
        {
          eyebrow: "Checklist",
          title: "何を書き留めるべきか",
          description: "Responsible-use 境界 は、コンパクトで具体的であり、実装中に使えるものであるべきです。",
          points: [
            "許可および除外された ソースs",
            "意図された behavior と制限された behavior",
            "Review checkpoints と decision owner",
            "Activation と rollback conditions"
          ]
        },
        {
          eyebrow: "境界",
          title: "このページではないもの",
          description: "このページは service work のための情報的な 境界 guide であり、顧客側 レビュー の代替ではありません。",
          points: [
            "legal advice ではありません",
            "formal approval statement ではありません",
            "universal AI policy ではありません",
            "すべてのリスクが取り除かれるという約束ではありません"
          ]
        }
      ],
      closing: {
        title: "デプロイ前に limits を書く。",
        description: "責任ある private AI work は、資料、behavior、レビュー、ownership、証拠、既知の限界 に対する明示的な境界から始まります。",
        ctaTitle: "責任ある利用の境界 を確認",
        ctaDescription: "資料 categories、intended model behavior、レビューポイント、decision owners、known constraints を持ち込んでください。",
        fit: [
          "明確な use 境界 を備えた private AI work が必要である。",
          "デプロイ前にレビュー可能な 資料 が欲しい。",
          "最終判断には名指しされた owner が必要であることを理解している。"
        ],
        notFit: [
          "このページから legal または regulatory advice が必要である。",
          "レビュー されていない 資料 を無制限に使用したい。",
          "エンジニアリング作業が顧客判断を置き換えることを期待している。"
        ]
      },
      notice: "このページは情報提供を目的としており、契約、policy、または legal レビュー の代替にはなりません。"
    },
    "security-review": {
      eyebrow: "セキュリティレビュー",
      title: "private AI 配備s のためのセキュリティレビュー。",
      description: "Random Walk は顧客 レビュー のために、配備境界、アクセス経路、成果物 movement、評価資料、引き継ぎメモ という engineering 証拠 を準備します。",
      taxonomy: [
        "配備境界",
        "アクセス経路",
        "成果物 movement",
        "評価資料",
        "引き継ぎメモ"
      ],
      assetId: "security-access-control-diagram",
      primaryLink: {
        label: "レビュー 資料 を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "配備境界",
          description: "システムがどこで動き、何に接続し、何がスコープ外に残るのか。"
        },
        {
          label: "Access path",
          description: "scoped engagement における operator、admin、service、support access assumptions。"
        },
        {
          label: "Artifact movement",
          description: "データパッケージ、models、アダプター、logs、出力、temporary files、caches がどのように移動するか。"
        },
        {
          label: "Evaluation 資料",
          description: "タスク例、known-limit notes、レビュー 資料、unresolved questions。"
        },
        {
          label: "Handoff notes",
          description: "運用、rollback、ownership、必要に応じた advisor レビュー、そしてフォローアップの前提。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "このページが存在する理由",
          description: "このページは、Random Walk が顧客側 レビュー のために準備できる engineering 証拠 を説明します。",
          points: [
            "配備 前に レビュー 資料 を定義する",
            "engineering 証拠 と最終判断を分ける",
            "顧客チームが具体的な問いを立てる助けになる",
            "レビュー expectations をスコープ内に保つ"
          ]
        },
        {
          eyebrow: "Scope",
          title: "Review scope",
          description: "Review は、どの system、environment、アクセス経路、資料 がスコープ内にあるかを定義することから始まります。",
          points: [
            "Deployment environment",
            "Runtime と dependency assumptions",
            "Data と model 成果物 境界",
            "顧客側 レビュー owner"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Boundary",
          title: "配備境界 証拠",
          description: "配備境界 は、システムがどこで動き、何に触れるのかを示すべきです。",
          points: [
            "Runtime location と 運用環境",
            "Connected systems と data paths",
            "作成される可能性のある temporary 資料",
            "engagement scope 外の項目"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Access",
          title: "Access path 証拠",
          description: "Access レビュー には、誰がどの 画面 に到達できるのか、そしてどの assumptions の下で到達できるのかという実践的な情報が必要です。",
          points: [
            "Operator access",
            "Admin access",
            "Service access",
            "Support または 保守 access"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "Artifact movement と retention",
          description: "Material movement は、顧客 レビュー と handoff の前に書き留められるべきです。",
          points: [
            "Dataset または 検索 package movement",
            "Model、アダプター、または fused 成果物 movement",
            "Logs、prompts、出力、temporary files、caches",
            "Return、deletion、または retention assumptions"
          ]
        },
        {
          eyebrow: "Evidence",
          title: "Evidence pack",
          description: "Evidence pack は、レビュー 資料 を 配備 work の近くに保ちます。",
          points: [
            "Boundary または architecture brief",
            "Configuration summary",
            "Evaluation 例 と known-limit notes",
            "Rollback notes と unresolved questions"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Archive",
          title: "Review 資料 archive",
          description: "Review 資料 は、納品後に顧客チームが検査できるだけの整理状態を保つべきです。",
          points: [
            "タスク別にまとめられた 評価資料",
            "Run notes と delivery decisions",
            "必要に応じた exception notes",
            "Follow-up items を見える状態に保つ"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Decision",
          title: "Decision 境界",
          description: "Random Walk は engineering 証拠 を準備します。最終的な acceptance decisions は顧客と qualified advisors が所有します。",
          points: [
            "Random Walk によって準備される engineering 証拠",
            "顧客 レビュー は明示的なまま保つ",
            "必要に応じた advisor レビュー",
            "フォローアップ作業は別途スコープ化する"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "境界",
          title: "このページではないもの",
          description: "このページは情報提供を目的としています。顧客の security ownership や qualified advisor レビュー の代替にはなりません。",
          points: [
            "security approval statement ではありません",
            "legal または regulatory advice ではありません",
            "顧客レビュー の代替ではありません",
            "risk が取り除かれるという約束ではありません"
          ]
        }
      ],
      closing: {
        title: "配備 前に レビュー 資料 を準備する。",
        description: "境界、access、movement、証拠、handoff assumptions が書き留められていると、private AI 配備s はレビューしやすくなります。",
        ctaTitle: "security レビュー 資料 を相談",
        ctaDescription: "配備境界、アクセス経路、成果物 movement、retention assumptions、評価資料、レビュー owners を持ち込んでください。",
        fit: [
          "private AI 配備 レビュー のための engineering 証拠 が必要である。",
          "チームまたは advisors が最終的な レビュー decision を所有している。",
          "Boundary、access、movement、retention、handoff を明示する必要がある。"
        ],
        notFit: [
          "このページから formal security approval が必要である。",
          "Random Walk が internal レビュー を置き換えることを期待している。",
          "scope から独立した universal security-制御 claims を求めている。"
        ]
      },
      notice: "Random Walk は レビュー のための engineering 証拠 を準備します。最終的な security、legal、regulatory、operational acceptance は、顧客とその qualified advisors に残ります。"
    }
  },
  ko: {
    "responsible-use": {
      eyebrow: "책임 있는 사용",
      title: "책임 있는 사용은 명확한 경계에서 시작됩니다.",
      description: "프라이빗 AI 작업는 배포 전에 고객 자료, model behavior, 검토 지점, decision ownership, 알려진 한계에 대한 서면 경계가 필요합니다.",
      taxonomy: [
        "data-use 경계",
        "behavior 경계",
        "검토 지점",
        "decision ownership",
        "알려진 한계"
      ],
      assetId: "security-responsibility-handoff",
      primaryLink: {
        label: "경계 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "Terms",
        href: "/terms"
      },
      outputsAtGlance: [
        {
          label: "Data-use 경계",
          description: "어떤 자료을 사용, 제외, 변환, 보존, 또는 반환할 수 있는지 정의합니다."
        },
        {
          label: "Behavior 경계",
          description: "의도된 behavior, 제한된 behavior, 지원되지 않는 사용을 설명합니다."
        },
        {
          label: "Review checkpoints",
          description: "재사용 또는 배포 전에 고객 검토가 필요한 지점을 표시합니다."
        },
        {
          label: "Decision ownership",
          description: "최종 business, domain, operational decisions를 누가 소유하는지 명확히 합니다."
        },
        {
          label: "Limit notes",
          description: "취약한 사례, unresolved questions, follow-up needs를 보이는 상태로 유지합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "이 페이지가 존재하는 이유",
          description: "이 페이지는 프라이빗 AI 서비스 작업에서 Random Walk가 기대하는 실질적인 책임 있는 사용 경계를 설명합니다.",
          points: [
            "구현 전에 프로젝트 기대치 설정",
            "엔지니어링 작업을 서면 limits와 연결",
            "지원과 최종 고객 결정을 분리",
            "검토 points를 명시적으로 유지"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Material",
          title: "고객 자료",
          description: "고객 자료은 training, 검색, 평가, 배포에 사용되기 전에 분류되어야 합니다.",
          points: [
            "허용된 소스 categories",
            "제한되거나 제외된 자료",
            "임시 사본과 derived 결과물",
            "보존, 반환, 또는 삭제 기대치"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Behavior",
          title: "Model behavior 경계",
          description: "Model behavior는 의도된 use, 제한된 behavior, 알려진 취약 영역을 기준으로 설명되어야 합니다.",
          points: [
            "의도된 작업 behavior",
            "지원되지 않는 출력 패턴",
            "제한된 use 사례",
            "민감하거나 모호한 출력"
          ]
        },
        {
          eyebrow: "Review",
          title: "Review 및 approval points",
          description: "프라이빗 AI 작업는 자료 또는 behavior가 재사용되기 전에 고객 검토가 필요한 지점을 정의해야 합니다.",
          points: [
            "모델 작업 전 dataset 검토",
            "배포 전 평가 검토",
            "customer-facing use 전 출력 검토",
            "models 또는 어댑터의 activation 검토"
          ]
        },
        {
          eyebrow: "책임",
          title: "Decision ownership",
          description: "Random Walk는 엔지니어링 지원을 제공합니다. 고객과 그 advisors가 최종 business, domain, policy decisions를 소유합니다.",
          points: [
            "Random Walk의 엔지니어링 지원",
            "고객의 business use decisions",
            "필요한 경우 advisor 검토",
            "진행 전 예외 사항 문서화"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "증거",
          title: "Evidence 및 limits",
          description: "증거, 취약한 사례, 열린 질문이 작업 가까이에 남아 있을 때 책임 있는 사용 경계는 더 강해집니다.",
          points: [
            "Evaluation 예시",
            "Known-limit notes",
            "Failure 또는 weak-case 예시",
            "Unresolved questions 및 next steps"
          ]
        },
        {
          eyebrow: "Checklist",
          title: "무엇을 기록해야 하는가",
          description: "Responsible-use 경계는 간결하고 구체적이며 구현 중에 사용할 수 있어야 합니다.",
          points: [
            "허용 및 제외된 소스s",
            "의도된 behavior와 제한된 behavior",
            "Review checkpoints 및 decision owner",
            "Activation 및 rollback conditions"
          ]
        },
        {
          eyebrow: "경계",
          title: "이 페이지가 아닌 것",
          description: "이 페이지는 service work를 위한 정보성 경계 guide이며, 고객 측 검토를 대체하지 않습니다.",
          points: [
            "legal advice가 아닙니다",
            "formal approval statement가 아닙니다",
            "universal AI policy가 아닙니다",
            "모든 위험이 제거된다는 약속이 아닙니다"
          ]
        }
      ],
      closing: {
        title: "배포 전에 limits를 기록하세요.",
        description: "책임 있는 private AI work는 자료, behavior, 검토, ownership, 증거, 알려진 한계에 대한 명시적 경계에서 시작됩니다.",
        ctaTitle: "책임 있는 사용 경계 검토",
        ctaDescription: "자료 categories, intended model behavior, 검토 지점, decision owners, known constraints를 가져오세요.",
        fit: [
          "명확한 use 경계가 있는 private AI work가 필요합니다.",
          "배포 전에 검토 가능한 자료을 원합니다.",
          "최종 결정에는 지정된 owners가 필요하다는 점을 이해합니다."
        ],
        notFit: [
          "이 페이지에서 legal 또는 regulatory advice가 필요합니다.",
          "검토되지 않은 자료을 제한 없이 사용하고 싶습니다.",
          "엔지니어링 작업이 고객 판단을 대체하기를 기대합니다."
        ]
      },
      notice: "이 페이지는 정보 제공용이며 계약, policy, 또는 legal 검토를 대체하지 않습니다."
    },
    "security-review": {
      eyebrow: "보안 검토",
      title: "프라이빗 AI 배포를 위한 보안 검토.",
      description: "Random Walk는 고객 검토를 위한 engineering 증거를 준비합니다: 배포 경계, 접근 경로, 결과물 movement, 평가 자료, 인수인계 메모.",
      taxonomy: [
        "배포 경계",
        "접근 경로",
        "결과물 movement",
        "평가 자료",
        "인수인계 메모"
      ],
      assetId: "security-access-control-diagram",
      primaryLink: {
        label: "검토 자료 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "Responsible use",
        href: "/legal/responsible-use"
      },
      outputsAtGlance: [
        {
          label: "배포 경계",
          description: "시스템이 어디에서 실행되고, 무엇에 연결되며, 무엇이 범위 밖에 남는지."
        },
        {
          label: "Access path",
          description: "scoped engagement를 위한 operator, admin, service, support access assumptions."
        },
        {
          label: "Artifact movement",
          description: "데이터 패키지, models, 어댑터, logs, 출력, temporary files, caches가 어떻게 이동하는지."
        },
        {
          label: "Evaluation 자료",
          description: "작업 예시, known-limit notes, 검토 자료, unresolved questions."
        },
        {
          label: "Handoff notes",
          description: "운영, rollback, ownership, 필요한 경우 advisor 검토, 그리고 후속 작업 assumptions."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "이 페이지가 존재하는 이유",
          description: "이 페이지는 Random Walk가 고객 측 검토를 위해 준비할 수 있는 engineering 증거를 설명합니다.",
          points: [
            "배포 전에 검토 자료 정의",
            "engineering 증거와 최종 결정을 분리",
            "고객 팀이 구체적인 질문을 할 수 있도록 지원",
            "검토 expectations를 범위 안에 유지"
          ]
        },
        {
          eyebrow: "Scope",
          title: "Review scope",
          description: "Review는 어떤 system, environment, 접근 경로, 자료이 범위 안에 있는지 정의하는 것에서 시작됩니다.",
          points: [
            "Deployment environment",
            "Runtime 및 dependency assumptions",
            "Data 및 model 결과물 경계",
            "고객 측 검토 owner"
          ],
          assetId: "security-boundary-model"
        },
        {
          eyebrow: "Boundary",
          title: "배포 경계 증거",
          description: "배포 경계는 시스템이 어디에서 실행되고 무엇을 접촉하는지 보여주어야 합니다.",
          points: [
            "Runtime location 및 운영 환경",
            "Connected systems 및 data paths",
            "생성될 수 있는 temporary 자료",
            "engagement scope 밖의 항목"
          ],
          assetId: "services-deployment-topology"
        },
        {
          eyebrow: "Access",
          title: "Access path 증거",
          description: "Access 검토에는 누가 어떤 화면에 도달할 수 있는지, 어떤 assumptions 아래에서 가능한지에 대한 실무 정보가 필요합니다.",
          points: [
            "Operator access",
            "Admin access",
            "Service access",
            "Support 또는 유지보수 access"
          ],
          assetId: "security-access-control-diagram"
        },
        {
          eyebrow: "Movement",
          title: "Artifact movement 및 retention",
          description: "Material movement는 고객 검토와 handoff 전에 기록되어야 합니다.",
          points: [
            "Dataset 또는 검색 package movement",
            "Model, 어댑터, 또는 fused 결과물 movement",
            "Logs, prompts, 출력, temporary files, caches",
            "Return, deletion, 또는 retention assumptions"
          ]
        },
        {
          eyebrow: "Evidence",
          title: "Evidence pack",
          description: "Evidence pack은 검토 자료을 배포 work 가까이에 유지합니다.",
          points: [
            "Boundary 또는 architecture brief",
            "Configuration summary",
            "Evaluation 예시 및 known-limit notes",
            "Rollback notes 및 unresolved questions"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Archive",
          title: "Review 자료 archive",
          description: "Review 자료은 전달 이후 고객 팀이 검사할 수 있을 만큼 충분히 정리된 상태로 남아 있어야 합니다.",
          points: [
            "작업별로 묶인 평가 자료",
            "Run notes 및 delivery decisions",
            "필요한 경우 exception notes",
            "Follow-up items를 보이는 상태로 유지"
          ],
          assetId: "home-evidence-archive-scene"
        },
        {
          eyebrow: "Decision",
          title: "Decision 경계",
          description: "Random Walk는 engineering 증거를 준비합니다. 고객과 qualified advisors가 최종 acceptance decisions를 소유합니다.",
          points: [
            "Random Walk가 준비한 engineering 증거",
            "고객 검토는 명시적으로 유지",
            "필요한 경우 advisor 검토",
            "후속 작업은 별도로 범위 설정"
          ],
          assetId: "security-responsibility-handoff"
        },
        {
          eyebrow: "경계",
          title: "이 페이지가 아닌 것",
          description: "이 페이지는 정보 제공용입니다. 고객의 security ownership이나 qualified advisor 검토를 대체하지 않습니다.",
          points: [
            "security approval statement가 아닙니다",
            "legal 또는 regulatory advice가 아닙니다",
            "고객 검토를 대체하지 않습니다",
            "risk가 제거된다는 약속이 아닙니다"
          ]
        }
      ],
      closing: {
        title: "배포 전에 검토 자료을 준비하세요.",
        description: "경계, access, movement, 증거, handoff assumptions가 기록되어 있으면 프라이빗 AI 배포는 더 쉽게 검토할 수 있습니다.",
        ctaTitle: "security 검토 자료 논의",
        ctaDescription: "배포 경계, 접근 경로, 결과물 movement, retention assumptions, 평가 자료, 검토 owners를 가져오세요.",
        fit: [
          "프라이빗 AI 배포 검토를 위한 engineering 증거가 필요합니다.",
          "팀 또는 advisors가 최종 검토 decision을 소유합니다.",
          "Boundary, access, movement, retention, handoff가 명시적이어야 합니다."
        ],
        notFit: [
          "이 페이지에서 formal security approval이 필요합니다.",
          "Random Walk가 internal 검토를 대체하기를 기대합니다.",
          "scope와 무관한 universal security-제어 claims를 원합니다."
        ]
      },
      notice: "Random Walk는 검토를 위한 engineering 증거를 준비합니다. 최종 security, legal, regulatory, operational acceptance는 고객과 그들의 qualified advisors에게 남아 있습니다."
    }
  }
};

export const standaloneDetailPages: DetailCollection<StandaloneDetailSlug> = {
  en: {
    articles: {
      eyebrow: "Articles",
      title: "Longer public material from systems work.",
      description: "Articles collect Random Walk's longer public explanations: engineering positions, deployment-boundary thinking, product and creation context, and approved public background material.",
      taxonomy: ["engineering positions", "deployment thinking", "product context", "approved context", "disclosure boundary"],
      assetId: "work-case-wall",
      primaryLink: { label: "Read notes", href: "/notes" },
      secondaryLink: { label: "Contact", href: "/contact" },
      outputsAtGlance: [
        { label: "Engineering positions", description: "Longer explanations of technical tradeoffs and implementation judgment." },
        { label: "Deployment thinking", description: "Public writing about boundaries, runtime paths, operation, and handoff." },
        { label: "Product context", description: "Background for creations, service directions, and system choices." },
        { label: "Approved context", description: "Reviewed public material that supports technical understanding." },
        { label: "Disclosure boundary", description: "Keeps private customer material and internal project details out of public articles." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why Articles exists",
          description: "Articles is the place for longer public explanations, not a generic blog index or content feed.",
          points: ["Longer reference writing", "Clearer thesis and context", "Connected to systems work", "Selective public material"]
        },
        {
          eyebrow: "Format",
          title: "Notes versus Articles",
          description: "Notes are shorter working fragments; Articles are longer explanations with clearer context and publication boundary.",
          points: ["Notes are shorter observations", "Notes can stay provisional", "Articles carry fuller context", "Articles remain reference material"],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Engineering",
          title: "Engineering positions",
          description: "Some articles explain technical positions behind Random Walk's private AI and implementation work.",
          points: ["Local and private AI tradeoffs", "Boundary and access positions", "Evidence and handoff thinking", "Shared without private detail"],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Context",
          title: "Product and creation context",
          description: "Articles can explain why a service direction, creation, or technical artifact exists without becoming product documentation.",
          points: ["Creation background", "Service direction context", "System choice rationale", "Public scope made clear"],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Boundary",
          title: "Keep disclosure bounded",
          description: "Public articles should explain enough to be useful without exposing private customer material or internal operational detail.",
          points: ["No private customer material", "No unapproved datasets", "No private runbooks", "Sensitive examples abstracted"],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Deployment",
          title: "Deployment-boundary thinking",
          description: "Articles may describe runtime paths, operation, constraints, and handoff without publishing private implementation specifics.",
          points: ["Customer-defined boundaries", "Runtime path context", "Operation and handoff notes", "Constraints without private details"]
        },
        {
          eyebrow: "Boundaries",
          title: "What Articles is not",
          description: "This page should not read as bulk content, a news desk, product docs, or customer reporting.",
          points: ["Not search-driven content", "Not a news feed", "Not product documentation", "Not customer project reporting"]
        },
        {
          eyebrow: "Ledger",
          title: "Editorial ledger",
          description: "Each article should be easy to place by topic, public status, related work, and disclosure boundary.",
          points: ["Article title", "Topic category", "Related service or creation", "Publication boundary note"]
        }
      ],
      notice: "This page is intentionally distinct from Notes: it explains the article surface and links to the current public material.",
      closing: {
        title: "Read the longer public context.",
        description: "Articles are for readers who want Random Walk's fuller explanations of systems work, boundaries, services, and creations.",
        fit: [
          "You want longer context behind Random Walk's work.",
          "You are evaluating engineering judgment and positioning.",
          "You need public material, not private project detail."
        ],
        notFit: [
          "You want bulk content.",
          "You expect customer deployment reports.",
          "You need short updates or working fragments."
        ],
        ctaTitle: "Explore Random Walk articles",
        ctaDescription: "Read approved public material on engineering positions, deployment thinking, product context, and creation background."
      }
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "Operating principles for controlled systems.",
      description: "Random Walk builds private AI systems by defining boundaries, delivering usable infrastructure, keeping reviewable project evidence, and making handoff clear.",
      taxonomy: ["boundary first", "usable system", "reviewable evidence", "clear handoff", "direct collaboration"],
      assetId: "security-boundary-model",
      primaryLink: { label: "Discuss a 私有 AI 项目", href: "/contact" },
      secondaryLink: { label: "View services", href: "/services" },
      outputsAtGlance: [
        { label: "Boundary first", description: "Define data, access, deployment, runtime, and artifact limits before implementation." },
        { label: "Usable system", description: "Build toward an operating path the customer team can understand and use." },
        { label: "Reviewable evidence", description: "Keep evaluation examples, run records, known limits, and delivery decisions visible." },
        { label: "Clear handoff", description: "Leave operator notes, ownership assumptions, recovery paths, and follow-up constraints." },
        { label: "Direct collaboration", description: "Work closely with the team that will use, review, or operate the system." }
      ],
      sections: [
        {
          eyebrow: "Role",
          title: "Why this page exists",
          description: "These operating principles explain how Random Walk approaches practical systems work, not ornamental values copy.",
          points: ["Applies across services and creations", "Grounded in implementation work", "Focused on customer-defined boundaries", "Written for practical delivery"]
        },
        {
          eyebrow: "Boundary",
          title: "Start with the boundary",
          description: "The first design decision is what may be touched, moved, deployed, operated, or handed off.",
          points: ["Data boundary", "Access boundary", "Deployment boundary", "Runtime and artifact boundary"],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "System",
          title: "Build the usable system",
          description: "The work should become an operating path, not a strategy artifact or disconnected prototype.",
          points: ["Runtime shape", "Operator path", "Activation notes", "Local and private constraints"],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Evidence",
          title: "Keep evidence close",
          description: "Project evidence should stay near the work so decisions, limits, and results remain reviewable.",
          points: ["Evaluation examples", "Run records", "Known-limit notes", "Review status"],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Handoff",
          title: "Make handoff clear",
          description: "Delivery should include the assumptions, notes, and paths needed for customer-side operation and scoped follow-up.",
          points: ["Operator notes", "Ownership assumptions", "Rollback and recovery paths", "Follow-up scope"],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Collaboration",
          title: "Work directly with operators",
          description: "Good implementation comes from working close to the people who understand the workflow and will operate the result.",
          points: ["Direct technical communication", "Customer workflow understanding", "Scoped remote or on-site support", "Practical iteration during delivery"]
        },
        {
          eyebrow: "Boundaries",
          title: "What this is not",
          description: "This page should not be read as a slogan page, values page, or abstract AI strategy statement.",
          points: ["Not a corporate values page", "Not a transformation promise", "Not a risk-removal claim", "Not abstract strategy language"]
        },
        {
          eyebrow: "Ledger",
          title: "Principles ledger",
          description: "The working posture is compact: define the boundary, build the system, keep evidence, and hand it over clearly.",
          points: ["Boundary brief", "Usable runtime path", "Evidence notes", "Handoff notes"]
        }
      ],
      notice: "The page describes operating principles for practical systems work.",
      closing: {
        title: "Build where control is defined.",
        description: "Random Walk works best when the boundary, workflow, operating path, evidence needs, and handoff expectations can be scoped clearly.",
        fit: [
          "You need AI systems inside customer-defined boundaries.",
          "You want direct technical implementation support.",
          "You care about evidence, operation, and handoff."
        ],
        notFit: [
          "You want generic strategy decks.",
          "You expect control claims beyond scope.",
          "You need a hands-off SaaS product."
        ],
        ctaTitle: "Discuss practical private AI implementation",
        ctaDescription: "Bring the workflow, boundary, runtime target, evidence needs, and handoff expectations."
      }
    }
  },
  zh: {
    articles: {
      eyebrow: "文章",
      title: "来自系统工作的长篇公开材料。",
      description: "文章 汇集 Random Walk 更完整的公开阐释：工程立场、部署边界思考、product 与 创造物背景，以及经过批准的公开背景材料。",
      taxonomy: [
        "工程立场",
        "部署 thinking",
        "产品背景",
        "approved 上下文",
        "disclosure 边界"
      ],
      assetId: "work-case-wall",
      primaryLink: {
        label: "阅读 notes",
        href: "/notes"
      },
      secondaryLink: {
        label: "联系",
        href: "/contact"
      },
      outputsAtGlance: [
        {
          label: "Engineering positions",
          description: "对技术取舍与实现判断的更长篇说明。"
        },
        {
          label: "Deployment thinking",
          description: "关于 边界、运行时 paths、operation 与 handoff 的公开写作。"
        },
        {
          label: "Product 上下文",
          description: "为 creations、service directions 与 system choices 提供背景。"
        },
        {
          label: "Approved 上下文",
          description: "支持技术理解的、经过 评审 的公开材料。"
        },
        {
          label: "Disclosure 边界",
          description: "让 private 客户材料 与内部 project details 不进入公开 articles。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么存在 文章",
          description: "文章 是更长篇公开阐释的所在，而不是 generic blog index 或 content feed。",
          points: [
            "更长篇的 reference writing",
            "更清晰的 thesis 与 上下文",
            "连接到 systems work",
            "选择性的 public 材料"
          ]
        },
        {
          eyebrow: "Format",
          title: "笔记 与 文章",
          description: "笔记 是较短的 working fragments；文章 是具备更清晰 上下文 与 publication 边界 的更长篇说明。",
          points: [
            "笔记 是较短的 observations",
            "笔记 可以保持 provisional",
            "文章 承载更完整的 上下文",
            "文章 保持为 reference 材料"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Engineering",
          title: "Engineering positions",
          description: "一些 articles 解释 Random Walk 在 private AI 与 implementation work 背后的技术立场。",
          points: [
            "Local 与 private AI tradeoffs",
            "Boundary 与 access positions",
            "Evidence 与 handoff thinking",
            "在不暴露 private detail 的情况下分享"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Context",
          title: "Product 与 创造物背景",
          description: "文章 可以解释某个 service direction、creation 或 technical 工件 为什么存在，而不会变成 product documentation。",
          points: [
            "Creation background",
            "Service direction 上下文",
            "System choice rationale",
            "明确 public scope"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Boundary",
          title: "让 disclosure 保持有边界",
          description: "公开 articles 应说明足够有用的内容，同时不暴露 private 客户材料 或内部 operational detail。",
          points: [
            "不包含 private 客户材料",
            "不包含未经批准的 datasets",
            "不包含 private runbooks",
            "敏感 examples 进行抽象处理"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Deployment",
          title: "Deployment-边界 thinking",
          description: "文章 可以描述 运行时 paths、operation、constraints 与 handoff，而不发布 private implementation specifics。",
          points: [
            "Customer-defined 边界",
            "Runtime path 上下文",
            "Operation 与 交接说明",
            "不含 private details 的 constraints"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "文章 不是什么",
          description: "本页不应被理解为 bulk content、news desk、product docs 或 customer reporting。",
          points: [
            "不是 search-driven content",
            "不是 news feed",
            "不是 product documentation",
            "不是 customer project reporting"
          ]
        },
        {
          eyebrow: "台账",
          title: "Editorial ledger",
          description: "每篇 article 都应能按 topic、public status、related work 与 disclosure 边界 清晰归位。",
          points: [
            "Article title",
            "Topic category",
            "Related service 或 creation",
            "Publication 边界 note"
          ]
        }
      ],
      notice: "本页有意与 笔记 区分开来：它说明 article 界面，并链接到当前 public 材料。",
      closing: {
        title: "阅读更完整的公开 上下文。",
        description: "文章 面向希望了解 Random Walk 对 systems work、边界、服务 与 creations 更完整阐释的读者。",
        fit: [
          "你想了解 Random Walk 工作背后的更长篇 上下文。",
          "你正在评估 engineering judgment 与 positioning。",
          "你需要 public 材料，而不是 private project detail。"
        ],
        notFit: [
          "你想要 bulk content。",
          "你期待 customer 部署 reports。",
          "你需要 short updates 或 working fragments。"
        ],
        ctaTitle: "探索 Random Walk articles",
        ctaDescription: "阅读关于 工程立场、部署 thinking、产品背景 与 creation background 的 approved public 材料。"
      }
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "面向受控系统的运行原则。",
      description: "Random Walk 通过定义边界、交付可用 infra结构、保留可审查的 project 证据，并让 handoff 清晰，来构建 私有 AI 系统。",
      taxonomy: [
        "边界 first",
        "usable system",
        "评审able 证据",
        "clear handoff",
        "direct collaboration"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "讨论 私有 AI 项目",
        href: "/contact"
      },
      secondaryLink: {
        label: "查看 服务",
        href: "/服务"
      },
      outputsAtGlance: [
        {
          label: "Boundary first",
          description: "在 implementation 之前，定义 data、access、部署、运行时 与 工件 limits。"
        },
        {
          label: "Usable system",
          description: "构建一条客户团队能够理解并使用的 operating path。"
        },
        {
          label: "Reviewable 证据",
          description: "让 评估 examples、run records、已知限制 与 delivery decisions 保持可见。"
        },
        {
          label: "Clear handoff",
          description: "留下 operator notes、ownership assumptions、recovery paths 与 follow-up constraints。"
        },
        {
          label: "Direct collaboration",
          description: "与将使用、评审 或操作系统的团队紧密协作。"
        }
      ],
      sections: [
        {
          eyebrow: "角色",
          title: "为什么存在本页",
          description: "这些 operating principles 说明 Random Walk 如何处理实际 systems work，而不是装饰性的 values copy。",
          points: [
            "适用于 服务 与 creations",
            "扎根于 implementation work",
            "聚焦 customer-defined 边界",
            "为 practical delivery 而写"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "从 边界 开始",
          description: "第一个设计决定，是哪些内容可以被触及、移动、部署、操作或 hand off。",
          points: [
            "Data 边界",
            "Access 边界",
            "部署边界",
            "Runtime 与 工件 边界"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "System",
          title: "构建 usable system",
          description: "工作应成为一条 operating path，而不是 strategy 工件 或脱节的 prototype。",
          points: [
            "Runtime shape",
            "Operator path",
            "Activation notes",
            "Local 与 private constraints"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Evidence",
          title: "让 证据 靠近工作",
          description: "Project 证据 应停留在工作附近，使 decisions、limits 与 results 始终可审查。",
          points: [
            "Evaluation examples",
            "Run records",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Handoff",
          title: "让 handoff 清晰",
          description: "Delivery 应包含客户侧 operation 与有范围 follow-up 所需的 assumptions、notes 与 paths。",
          points: [
            "Operator notes",
            "Ownership assumptions",
            "Rollback 与 recovery paths",
            "Follow-up scope"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Collaboration",
          title: "直接与 operators 协作",
          description: "好的 implementation 来自靠近那些理解 工作流、并将操作结果的人一起工作。",
          points: [
            "Direct technical communication",
            "Customer 工作流 understanding",
            "有范围的 remote 或 on-site support",
            "delivery 期间的 practical iteration"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "这不是什么",
          description: "本页不应被解读为 slogan page、values page 或 abstract AI strategy statement。",
          points: [
            "不是 corporate values page",
            "不是 transformation promise",
            "不是 risk-removal claim",
            "不是 abstract strategy language"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Principles ledger",
          description: "工作姿态很紧凑：定义 边界，构建 system，保留 证据，并清晰 hand over。",
          points: [
            "边界简报",
            "Usable 运行时 path",
            "Evidence notes",
            "Handoff notes"
          ]
        }
      ],
      notice: "本页描述 practical systems work 的 operating principles。",
      closing: {
        title: "在控制被定义之处构建。",
        description: "当 边界、工作流、operating path、证据 needs 与 handoff expectations 能被清晰界定时，Random Walk 最能发挥作用。",
        fit: [
          "你需要位于 customer-defined 边界 内的 AI systems。",
          "你希望获得直接的 technical implementation support。",
          "你重视 证据、operation 与 handoff。"
        ],
        notFit: [
          "你想要 generic strategy decks。",
          "你期待超出 scope 的 控制 claims。",
          "你需要 hands-off SaaS product。"
        ],
        ctaTitle: "讨论 practical private AI 实施",
        ctaDescription: "带来 工作流、边界、运行时 target、证据 needs 与 handoff expectations。"
      }
    }
  },
  ja: {
    articles: {
      eyebrow: "記事",
      title: "systems work から生まれる長めの公開 資料。",
      description: "記事 は、Random Walk のより長い公開説明を集める場所です。エンジニアリング上の立場、配備境界の考え方、product と 制作物の背景、そして承認済みの公開背景 資料 を扱います。",
      taxonomy: [
        "エンジニアリング上の立場",
        "配備 thinking",
        "プロダクト背景",
        "approved 文脈",
        "disclosure 境界"
      ],
      assetId: "work-case-wall",
      primaryLink: {
        label: "notes を読む",
        href: "/notes"
      },
      secondaryLink: {
        label: "問い合わせ",
        href: "/contact"
      },
      outputsAtGlance: [
        {
          label: "Engineering positions",
          description: "技術的な tradeoffs と implementation judgment についての長めの説明。"
        },
        {
          label: "Deployment thinking",
          description: "境界、ランタイム paths、operation、handoff に関する公開 writing。"
        },
        {
          label: "Product 文脈",
          description: "creations、service directions、system choices の背景。"
        },
        {
          label: "Approved 文脈",
          description: "技術的理解を支える、レビュー 済みの public 資料。"
        },
        {
          label: "Disclosure 境界",
          description: "private 顧客資料 と内部 project details を public articles の外に保ちます。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "記事 が存在する理由",
          description: "記事 は、長めの公開説明のための場所であり、generic blog index や content feed ではありません。",
          points: [
            "長めの reference writing",
            "より明確な thesis と 文脈",
            "systems work と接続",
            "選択された public 資料"
          ]
        },
        {
          eyebrow: "Format",
          title: "ノート と 記事",
          description: "ノート は短い working fragments です。記事 は、より明確な 文脈 と publication 境界 を持つ長めの説明です。",
          points: [
            "ノート は短い observations",
            "ノート は provisional なままでよい",
            "記事 はより完全な 文脈 を持つ",
            "記事 は reference 資料 であり続ける"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Engineering",
          title: "Engineering positions",
          description: "一部の articles は、Random Walk の private AI と implementation work の背後にある技術的立場を説明します。",
          points: [
            "Local と private AI の tradeoffs",
            "Boundary と access positions",
            "Evidence と handoff thinking",
            "private detail なしで共有"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Context",
          title: "Product と 制作物の背景",
          description: "記事 は、service direction、creation、technical 成果物 がなぜ存在するのかを説明できますが、product documentation になるものではありません。",
          points: [
            "Creation background",
            "Service direction 文脈",
            "System choice rationale",
            "Public scope を明確にする"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Boundary",
          title: "disclosure を bounded に保つ",
          description: "Public articles は、private 顧客資料 や内部 operational detail を露出せず、有用であるために十分な説明を行うべきです。",
          points: [
            "private 顧客資料 なし",
            "未承認 datasets なし",
            "private runbooks なし",
            "Sensitive 例 は抽象化"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Deployment",
          title: "Deployment-境界 thinking",
          description: "記事 は、private implementation specifics を公開することなく、ランタイム paths、operation、constraints、handoff を記述できます。",
          points: [
            "Customer-defined 境界",
            "Runtime path 文脈",
            "Operation と 引き継ぎメモ",
            "private details なしの constraints"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "記事 ではないもの",
          description: "このページは、bulk content、news desk、product docs、customer reporting として読むべきではありません。",
          points: [
            "search-driven content ではありません",
            "news feed ではありません",
            "product documentation ではありません",
            "customer project reporting ではありません"
          ]
        },
        {
          eyebrow: "台帳",
          title: "Editorial ledger",
          description: "各 article は、topic、public status、related work、disclosure 境界 によって位置づけやすいものであるべきです。",
          points: [
            "Article title",
            "Topic category",
            "Related service または creation",
            "Publication 境界 note"
          ]
        }
      ],
      notice: "このページは ノート と意図的に区別されています。article 画面 を説明し、現在の public 資料 へリンクします。",
      closing: {
        title: "より長い public 文脈 を読む。",
        description: "記事 は、Random Walk による systems work、境界、サービス、creations のより完全な説明を求める読者のためのものです。",
        fit: [
          "Random Walk の work の背後にある長めの 文脈 を知りたい。",
          "engineering judgment と positioning を評価している。",
          "private project detail ではなく public 資料 が必要である。"
        ],
        notFit: [
          "bulk content が欲しい。",
          "customer 配備 reports を期待している。",
          "short updates または working fragments が必要である。"
        ],
        ctaTitle: "Random Walk articles を探索",
        ctaDescription: "エンジニアリング上の立場、配備 thinking、プロダクト背景、creation background に関する approved public 資料 を読んでください。"
      }
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "制御led systems のための operating principles。",
      description: "Random Walk は、境界 を定義し、usable infra構造 を納品し、レビューable project 証拠 を保ち、handoff を明確にすることで プライベート AI システム を構築します。",
      taxonomy: [
        "境界 first",
        "usable system",
        "レビューable 証拠",
        "clear handoff",
        "direct collaboration"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "私有 AI 项目 を相談",
        href: "/contact"
      },
      secondaryLink: {
        label: "サービス を見る",
        href: "/サービス"
      },
      outputsAtGlance: [
        {
          label: "Boundary first",
          description: "implementation 前に data、access、配備、ランタイム、成果物 limits を定義します。"
        },
        {
          label: "Usable system",
          description: "顧客チームが理解し、使える operating path に向けて構築します。"
        },
        {
          label: "Reviewable 証拠",
          description: "評価 例、run records、既知の限界、delivery decisions を見える状態に保ちます。"
        },
        {
          label: "Clear handoff",
          description: "operator notes、ownership assumptions、recovery paths、follow-up constraints を残します。"
        },
        {
          label: "Direct collaboration",
          description: "system を使い、レビュー し、または運用するチームと密に働きます。"
        }
      ],
      sections: [
        {
          eyebrow: "役割",
          title: "このページが存在する理由",
          description: "これらの operating principles は、Random Walk が実践的な systems work にどう向き合うかを説明するものであり、装飾的な values copy ではありません。",
          points: [
            "サービス と creations 全体に適用",
            "implementation work に根ざしている",
            "customer-defined 境界 に焦点を置く",
            "practical delivery のために書かれている"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "境界 から始める",
          description: "最初の設計判断は、何に触れ、何を移動し、deploy し、operate し、または hand off できるかです。",
          points: [
            "Data 境界",
            "Access 境界",
            "配備境界",
            "Runtime と 成果物 境界"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "System",
          title: "usable system を構築する",
          description: "作業は、strategy 成果物 や切り離された prototype ではなく、operating path になるべきです。",
          points: [
            "Runtime shape",
            "Operator path",
            "Activation notes",
            "Local と private constraints"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Evidence",
          title: "証拠 を近くに保つ",
          description: "Project 証拠 は work の近くに保たれ、decisions、limits、results が レビューable な状態で残るべきです。",
          points: [
            "Evaluation 例",
            "Run records",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Handoff",
          title: "handoff を明確にする",
          description: "Delivery には、顧客側 operation とスコープされた follow-up に必要な assumptions、notes、paths が含まれるべきです。",
          points: [
            "Operator notes",
            "Ownership assumptions",
            "Rollback と recovery paths",
            "Follow-up scope"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Collaboration",
          title: "operators と直接働く",
          description: "良い implementation は、ワークフロー を理解し、結果を運用する人々の近くで働くことから生まれます。",
          points: [
            "Direct technical communication",
            "Customer ワークフロー understanding",
            "スコープされた remote または on-site support",
            "delivery 中の practical iteration"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "これではないもの",
          description: "このページは slogan page、values page、または abstract AI strategy statement として読むべきではありません。",
          points: [
            "corporate values page ではありません",
            "transformation promise ではありません",
            "risk-removal claim ではありません",
            "abstract strategy language ではありません"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Principles ledger",
          description: "working posture はコンパクトです。境界 を定義し、system を構築し、証拠 を保ち、明確に hand over すること。",
          points: [
            "境界ブリーフ",
            "Usable ランタイム path",
            "Evidence notes",
            "Handoff notes"
          ]
        }
      ],
      notice: "このページは practical systems work のための operating principles を説明します。",
      closing: {
        title: "制御 が定義された場所で構築する。",
        description: "Random Walk は、境界、ワークフロー、operating path、証拠 needs、handoff expectations を明確にスコープできるときに最もよく機能します。",
        fit: [
          "customer-defined 境界 の内側に AI systems が必要である。",
          "直接的な technical implementation support を求めている。",
          "証拠、operation、handoff を重視している。"
        ],
        notFit: [
          "generic strategy decks が欲しい。",
          "scope を超えた 制御 claims を期待している。",
          "hands-off SaaS product が必要である。"
        ],
        ctaTitle: "practical private AI 実装 を相談",
        ctaDescription: "ワークフロー、境界、ランタイム target、証拠 needs、handoff expectations を持ち込んでください。"
      }
    }
  },
  ko: {
    articles: {
      eyebrow: "글",
      title: "systems work에서 나온 더 긴 공개 자료.",
      description: "글는 Random Walk의 더 긴 공개 설명을 모읍니다. 엔지니어링 입장, 배포 경계 사고, product 및 창작물 맥락, 승인된 공개 배경 자료을 다룹니다.",
      taxonomy: [
        "엔지니어링 입장",
        "배포 thinking",
        "제품 맥락",
        "approved 맥락",
        "disclosure 경계"
      ],
      assetId: "work-case-wall",
      primaryLink: {
        label: "notes 읽기",
        href: "/notes"
      },
      secondaryLink: {
        label: "문의",
        href: "/contact"
      },
      outputsAtGlance: [
        {
          label: "Engineering positions",
          description: "기술적 tradeoffs와 implementation judgment에 대한 더 긴 설명."
        },
        {
          label: "Deployment thinking",
          description: "경계, 런타임 paths, operation, handoff에 대한 공개 writing."
        },
        {
          label: "Product 맥락",
          description: "creations, service directions, system choices를 위한 배경."
        },
        {
          label: "Approved 맥락",
          description: "기술적 이해를 지원하는 검토된 public 자료."
        },
        {
          label: "Disclosure 경계",
          description: "private 고객 자료과 internal project details를 public articles 밖에 유지합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "글가 존재하는 이유",
          description: "글는 더 긴 공개 설명을 위한 장소이지, generic blog index나 content feed가 아닙니다.",
          points: [
            "더 긴 reference writing",
            "더 명확한 thesis와 맥락",
            "systems work와 연결",
            "선택적인 public 자료"
          ]
        },
        {
          eyebrow: "Format",
          title: "노트와 글",
          description: "노트는 더 짧은 working fragments입니다. 글는 더 명확한 맥락와 publication 경계를 가진 긴 설명입니다.",
          points: [
            "노트는 더 짧은 observations입니다",
            "노트는 provisional한 상태로 남을 수 있습니다",
            "글는 더 충분한 맥락를 담습니다",
            "글는 reference 자료로 남습니다"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Engineering",
          title: "Engineering positions",
          description: "일부 articles는 Random Walk의 private AI 및 implementation work 뒤에 있는 기술적 입장을 설명합니다.",
          points: [
            "Local 및 private AI tradeoffs",
            "Boundary 및 access positions",
            "Evidence 및 handoff thinking",
            "private detail 없이 공유"
          ],
          assetId: "home-constraint-matrix-board"
        },
        {
          eyebrow: "Context",
          title: "Product 및 창작물 맥락",
          description: "글는 service direction, creation, technical 결과물가 왜 존재하는지 설명할 수 있지만 product documentation이 되지는 않습니다.",
          points: [
            "Creation background",
            "Service direction 맥락",
            "System choice rationale",
            "Public scope를 명확히 함"
          ],
          assetId: "services-dataset-package"
        },
        {
          eyebrow: "Boundary",
          title: "disclosure를 bounded하게 유지",
          description: "Public articles는 private 고객 자료이나 internal operational detail을 노출하지 않으면서도 유용할 만큼 충분히 설명해야 합니다.",
          points: [
            "private 고객 자료 없음",
            "승인되지 않은 datasets 없음",
            "private runbooks 없음",
            "Sensitive 예시는 추상화"
          ],
          assetId: "contact-first-review-tray"
        },
        {
          eyebrow: "Deployment",
          title: "Deployment-경계 thinking",
          description: "글는 private implementation specifics를 공개하지 않고 런타임 paths, operation, constraints, handoff를 설명할 수 있습니다.",
          points: [
            "Customer-defined 경계",
            "Runtime path 맥락",
            "Operation 및 인수인계 메모",
            "private details 없는 constraints"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "글가 아닌 것",
          description: "이 페이지는 bulk content, news desk, product docs, customer reporting으로 읽혀서는 안 됩니다.",
          points: [
            "search-driven content가 아닙니다",
            "news feed가 아닙니다",
            "product documentation이 아닙니다",
            "customer project reporting이 아닙니다"
          ]
        },
        {
          eyebrow: "원장",
          title: "Editorial ledger",
          description: "각 article은 topic, public status, related work, disclosure 경계에 따라 쉽게 배치될 수 있어야 합니다.",
          points: [
            "Article title",
            "Topic category",
            "Related service 또는 creation",
            "Publication 경계 note"
          ]
        }
      ],
      notice: "이 페이지는 의도적으로 노트와 구분됩니다. article 화면를 설명하고 현재 public 자료로 연결합니다.",
      closing: {
        title: "더 긴 public 맥락를 읽으세요.",
        description: "글는 Random Walk의 systems work, 경계, 서비스, creations에 대한 더 충분한 설명을 원하는 독자를 위한 것입니다.",
        fit: [
          "Random Walk의 work 뒤에 있는 더 긴 맥락를 원합니다.",
          "engineering judgment와 positioning을 평가하고 있습니다.",
          "private project detail이 아니라 public 자료이 필요합니다."
        ],
        notFit: [
          "bulk content를 원합니다.",
          "customer 배포 reports를 기대합니다.",
          "short updates 또는 working fragments가 필요합니다."
        ],
        ctaTitle: "Random Walk articles 탐색",
        ctaDescription: "엔지니어링 입장, 배포 thinking, 제품 맥락, creation background에 관한 approved public 자료을 읽어보세요."
      }
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "제어led systems를 위한 operating principles.",
      description: "Random Walk는 경계를 정의하고, usable infra구조를 전달하며, 검토able project 증거를 유지하고, handoff를 명확히 함으로써 프라이빗 AI 시스템를 구축합니다.",
      taxonomy: [
        "경계 first",
        "usable system",
        "검토able 증거",
        "clear handoff",
        "direct collaboration"
      ],
      assetId: "security-boundary-model",
      primaryLink: {
        label: "私有 AI 项目 논의",
        href: "/contact"
      },
      secondaryLink: {
        label: "서비스 보기",
        href: "/서비스"
      },
      outputsAtGlance: [
        {
          label: "Boundary first",
          description: "implementation 전에 data, access, 배포, 런타임, 결과물 limits를 정의합니다."
        },
        {
          label: "Usable system",
          description: "고객 팀이 이해하고 사용할 수 있는 operating path를 향해 구축합니다."
        },
        {
          label: "Reviewable 증거",
          description: "평가 예시, run records, 알려진 한계, delivery decisions를 보이는 상태로 유지합니다."
        },
        {
          label: "Clear handoff",
          description: "operator notes, ownership assumptions, recovery paths, follow-up constraints를 남깁니다."
        },
        {
          label: "Direct collaboration",
          description: "system을 사용, 검토, 또는 운영할 팀과 긴밀하게 협업합니다."
        }
      ],
      sections: [
        {
          eyebrow: "역할",
          title: "이 페이지가 존재하는 이유",
          description: "이 operating principles는 Random Walk가 실제 systems work에 접근하는 방식을 설명하며, 장식적인 values copy가 아닙니다.",
          points: [
            "서비스와 creations 전반에 적용",
            "implementation work에 기반",
            "customer-defined 경계에 집중",
            "practical delivery를 위해 작성됨"
          ]
        },
        {
          eyebrow: "Boundary",
          title: "경계에서 시작하기",
          description: "첫 번째 설계 결정은 무엇을 접촉, 이동, deploy, operate, 또는 hand off할 수 있는지입니다.",
          points: [
            "Data 경계",
            "Access 경계",
            "배포 경계",
            "Runtime 및 결과물 경계"
          ],
          assetId: "services-hero-private-data"
        },
        {
          eyebrow: "System",
          title: "usable system 구축",
          description: "작업은 strategy 결과물나 분리된 prototype이 아니라 operating path가 되어야 합니다.",
          points: [
            "Runtime shape",
            "Operator path",
            "Activation notes",
            "Local 및 private constraints"
          ],
          assetId: "services-deployment-runbook"
        },
        {
          eyebrow: "Evidence",
          title: "증거를 가까이에 유지",
          description: "Project 증거는 work 가까이에 남아 decisions, limits, results가 검토able한 상태를 유지해야 합니다.",
          points: [
            "Evaluation 예시",
            "Run records",
            "Known-limit notes",
            "Review status"
          ],
          assetId: "services-evaluation-report"
        },
        {
          eyebrow: "Handoff",
          title: "handoff를 명확히 하기",
          description: "Delivery에는 고객 측 operation과 범위가 정해진 follow-up에 필요한 assumptions, notes, paths가 포함되어야 합니다.",
          points: [
            "Operator notes",
            "Ownership assumptions",
            "Rollback 및 recovery paths",
            "Follow-up scope"
          ],
          assetId: "home-delivery-chain"
        },
        {
          eyebrow: "Collaboration",
          title: "operators와 직접 협업",
          description: "좋은 implementation은 워크플로를 이해하고 결과를 운영할 사람들과 가까이에서 일할 때 나옵니다.",
          points: [
            "Direct technical communication",
            "Customer 워크플로 understanding",
            "범위가 정해진 remote 또는 on-site support",
            "delivery 중 practical iteration"
          ]
        },
        {
          eyebrow: "Boundaries",
          title: "이것이 아닌 것",
          description: "이 페이지는 slogan page, values page, 또는 abstract AI strategy statement로 읽혀서는 안 됩니다.",
          points: [
            "corporate values page가 아닙니다",
            "transformation promise가 아닙니다",
            "risk-removal claim이 아닙니다",
            "abstract strategy language가 아닙니다"
          ]
        },
        {
          eyebrow: "Ledger",
          title: "Principles ledger",
          description: "working posture는 간결합니다. 경계를 정의하고, system을 구축하며, 증거를 유지하고, 명확하게 hand over하는 것입니다.",
          points: [
            "경계 브리프",
            "Usable 런타임 path",
            "Evidence notes",
            "Handoff notes"
          ]
        }
      ],
      notice: "이 페이지는 practical systems work를 위한 operating principles를 설명합니다.",
      closing: {
        title: "제어이 정의된 곳에서 구축하세요.",
        description: "Random Walk는 경계, 워크플로, operating path, 증거 needs, handoff expectations를 명확히 scope할 수 있을 때 가장 적합합니다.",
        fit: [
          "customer-defined 경계 안의 AI systems가 필요합니다.",
          "직접적인 technical implementation support를 원합니다.",
          "증거, operation, handoff를 중요하게 봅니다."
        ],
        notFit: [
          "generic strategy decks를 원합니다.",
          "scope를 넘어서는 제어 claims를 기대합니다.",
          "hands-off SaaS product가 필요합니다."
        ],
        ctaTitle: "practical private AI 구현 논의",
        ctaDescription: "워크플로, 경계, 런타임 target, 증거 needs, handoff expectations를 가져오세요."
      }
    }
  }
};

export const creationsIndexPages: Record<Locale, DetailPageCopy> = {
  en: {
    eyebrow: "Creations",
    title: "Open products, research directions, and product-system experiments.",
    description: "Creations are Random Walk's public product and research surfaces. Some are mature enough to open directly; others are published as directional pages while material is reviewed.",
    taxonomy: ["Melix", "1-TOK", "Fiber Link", "Neuron", "UTXO Data", "Distributed Paradigm"],
    assetId: "home-technical-heritage-plate",
    primaryLink: { label: "Explore Melix", href: "/creations/melix" },
    secondaryLink: { label: "Contact", href: "/contact" },
    sections: creationDetailSlugs.map((slug) => ({
      title: creationDetailPages.en[slug].title,
      description: creationDetailPages.en[slug].description,
      points: creationDetailPages.en[slug].taxonomy
    })),
    notice: "Each creation has its own page so the footer does not collapse unrelated items into one reused route."
  },
  zh: {
    eyebrow: "创造物",
    title: "开放产品、研究方向与产品系统实验。",
    description: "创造物 是 Random Walk 面向公众的产品与研究表面。有些已经成熟到可以直接开放；另一些则在材料审查期间，以方向性页面的形式发布。",
    taxonomy: [
      "Melix",
      "1-TOK",
      "Fiber Link",
      "Neuron",
      "UTXO Data",
      "Distributed Paradigm"
    ],
    assetId: "home-technical-heritage-plate",
    primaryLink: {
      label: "探索 Melix",
      href: "/creations/melix"
    },
    secondaryLink: {
      label: "联系",
      href: "/contact"
    },
    sections: [
      {
        title: "一个本地 AI 参考 运行时。",
        description: "Melix 是 Random Walk 面向 Apple Silicon 本地 AI 工作的 开源工程参考：涵盖 运行操作、LoRA 训练、基准测试、评估、CLI 工作流，以及本地 集成路径。",
        points: [
          "Apple Silicon",
          "本地 运行时",
          "MLX / MLX LoRA",
          "CLI 工作流",
          "评估 records"
        ]
      },
      {
        title: "来自 来源 材料 的紧凑学习单元。",
        description: "1-TOK 探索被选中的 材料 如何成为有边界的 practice units、生成的 exercise packets、评审 status，以及可复用的本地或 private learning 工作流s。",
        points: [
          "来源 packet",
          "practice unit",
          "exercise packet",
          "评审 status",
          "本地复用"
        ]
      },
      {
        title: "互联的系统，需要清晰而明确的交接。",
        description: "Fiber Link 是 Random Walk 的参考型工作空间，用于私有基础设施工作中的连接边界、访问路径、可靠性假设、恢复 notes，以及运营交接。",
        points: [
          "连接边界",
          "访问路径",
          "恢复 notes",
          "operator 交接",
          "可审查约束"
        ]
      },
      {
        title: "让本地 AI 可以被理解的 界面。",
        description: "Neuron 是 Random Walk 面向 operator 的本地 AI 界面 参考方向：涵盖 上下文界面、可见状态模式、审批边界、控制项 与 评审说明。",
        points: [
          "上下文 界面",
          "可见状态",
          "operator 控制项",
          "approval 边界",
          "评审 界面"
        ]
      },
      {
        title: "为可审查系统塑形的记录。",
        description: "UTXO Data 是 Random Walk 的参考方向，面向有边界的记录、具备状态意识的历史、provenance notes 与 评审 界面s。在这里，UTXO 是一种记录设计视角，而不是面向市场的数据产品。",
        points: [
          "有边界的记录",
          "状态转换",
          "provenance notes",
          "评审 界面",
          "证据 package"
        ]
      },
      {
        title: "分布式系统需要可见的边界。",
        description: "Distributed Paradigm 是 Random Walk 的参考 notebook，用于 local-first implementation notes、有范围的 state movement、ownership handoff、recovery paths 与 operational memory。",
        points: [
          "local-first stance",
          "sync 边界",
          "ownership handoff",
          "recovery path",
          "operational memory"
        ]
      }
    ],
    notice: "每一项 creation 都有自己的页面，因此 footer 不会把无关条目折叠进同一条复用 route。"
  },
  ja: {
    eyebrow: "制作物",
    title: "オープンな製品、研究方向、そして プロダクトシステム実験。",
    description: "制作物 は、Random Walk の公開された製品および研究サーフェスです。直接公開できるほど成熟したものもあれば、素材のレビュー中に方向性ページとして公開されるものもあります。",
    taxonomy: [
      "Melix",
      "1-TOK",
      "Fiber Link",
      "Neuron",
      "UTXO Data",
      "Distributed Paradigm"
    ],
    assetId: "home-technical-heritage-plate",
    primaryLink: {
      label: "Melix を探索",
      href: "/creations/melix"
    },
    secondaryLink: {
      label: "問い合わせ",
      href: "/contact"
    },
    sections: [
      {
        title: "ローカル AI の参照 ランタイム。",
        description: "Melix は、Apple Silicon におけるローカル AI 作業のための Random Walk の オープンソースのエンジニアリング参照 です。ランタイム運用、LoRA トレーニング、ベンチマーク、評価、CLI ワークフロー、そしてローカル 統合経路 を扱います。",
        points: [
          "Apple Silicon",
          "ローカル ランタイム",
          "MLX / MLX LoRA",
          "CLI ワークフロー",
          "評価 records"
        ]
      },
      {
        title: "ソース 資料 から生まれるコンパクトな学習単位。",
        description: "1-TOK は、選択された 資料 が、境界づけられた practice units、生成された exercise packets、レビュー status、そして再利用可能なローカルまたは private learning ワークフローs へと変わる過程を探ります。",
        points: [
          "ソース packet",
          "practice unit",
          "exercise packet",
          "レビュー status",
          "ローカル再利用"
        ]
      },
      {
        title: "接続されたシステムには、明示的な引き継ぎが必要です。",
        description: "Fiber Link は Random Walk の参照用ワークスペースです。プライベートインフラストラクチャの作業における接続境界、アクセス経路、信頼性の前提、復旧 notes、そして運用引き継ぎを扱います。",
        points: [
          "接続境界",
          "アクセス経路",
          "復旧 notes",
          "operator 引き継ぎ",
          "レビュー可能な制約"
        ]
      },
      {
        title: "理解できるローカル AI のための インターフェース。",
        description: "Neuron は、オペレーター向け なローカル AI インターフェース に向けた Random Walk の参照方向です。コンテキスト画面、visible state パターン、承認境界、操作項目、そして レビューメモ を扱います。",
        points: [
          "文脈 画面",
          "visible state",
          "operator 操作項目",
          "approval 境界",
          "レビュー 画面"
        ]
      },
      {
        title: "レビュー可能なシステムのために形づくられた記録。",
        description: "UTXO Data は、bounded records、state-aware history、provenance notes、レビュー 画面s のための Random Walk の参照方向です。ここでの UTXO は記録設計のレンズであり、市場向けのデータ製品ではありません。",
        points: [
          "bounded records",
          "state transitions",
          "provenance notes",
          "レビュー 画面",
          "証拠 package"
        ]
      },
      {
        title: "分散システムには、見える境界が必要です。",
        description: "Distributed Paradigm は、local-first implementation notes、スコープを定めた state movement、ownership handoff、recovery paths、operational memory のための Random Walk の参照 notebook です。",
        points: [
          "local-first stance",
          "sync 境界",
          "ownership handoff",
          "recovery path",
          "operational memory"
        ]
      }
    ],
    notice: "各 creation にはそれぞれ専用ページがあるため、footer が無関係な項目をひとつの再利用 route に折りたたむことはありません。"
  },
  ko: {
    eyebrow: "창작물",
    title: "오픈 제품, 연구 방향, 그리고 제품 시스템 실험.",
    description: "창작물는 Random Walk의 공개 제품 및 연구 표면입니다. 일부는 직접 공개할 만큼 충분히 성숙했고, 다른 일부는 자료를 검토하는 동안 방향성 페이지로 게시됩니다.",
    taxonomy: [
      "Melix",
      "1-TOK",
      "Fiber Link",
      "Neuron",
      "UTXO Data",
      "Distributed Paradigm"
    ],
    assetId: "home-technical-heritage-plate",
    primaryLink: {
      label: "Melix 탐색",
      href: "/creations/melix"
    },
    secondaryLink: {
      label: "문의",
      href: "/contact"
    },
    sections: [
      {
        title: "로컬 AI 참조 런타임.",
        description: "Melix는 Apple Silicon 로컬 AI 작업을 위한 Random Walk의 오픈소스 엔지니어링 참조입니다. 런타임 운영, LoRA 훈련, 벤치마킹, 평가, CLI 워크플로, 그리고 로컬 통합 경로를 다룹니다.",
        points: [
          "Apple Silicon",
          "로컬 런타임",
          "MLX / MLX LoRA",
          "CLI 워크플로",
          "평가 records"
        ]
      },
      {
        title: "소스 자료에서 만들어지는 압축된 학습 단위.",
        description: "1-TOK는 선택된 자료이 어떻게 경계가 있는 practice units, 생성된 exercise packets, 검토 status, 그리고 재사용 가능한 로컬 또는 private learning 워크플로s가 되는지 탐색합니다.",
        points: [
          "소스 packet",
          "practice unit",
          "exercise packet",
          "검토 status",
          "로컬 재사용"
        ]
      },
      {
        title: "연결된 시스템에는 명확한 인계가 필요합니다.",
        description: "Fiber Link는 Random Walk의 참조형 작업 공간입니다. 프라이빗 인프라스트럭처 작업에서 연결 경계, 접근 경로, 신뢰성 가정, 복구 notes, 운영 인계를 다룹니다.",
        points: [
          "연결 경계",
          "접근 경로",
          "복구 notes",
          "operator 인계",
          "검토 가능한 제약"
        ]
      },
      {
        title: "이해 가능한 로컬 AI를 위한 인터페이스.",
        description: "Neuron은 운영자용 로컬 AI 인터페이스를 위한 Random Walk의 참조 방향입니다. 컨텍스트 화면, visible state 패턴, 승인 경계, 제어 항목, 검토 메모를 다룹니다.",
        points: [
          "맥락 화면",
          "visible state",
          "operator 제어 항목",
          "approval 경계",
          "검토 화면"
        ]
      },
      {
        title: "검토 가능한 시스템을 위해 형태가 잡힌 records.",
        description: "UTXO Data는 bounded records, state-aware history, provenance notes, 검토 화면s를 위한 Random Walk의 참조 방향입니다. 여기서 UTXO는 기록 설계의 렌즈이며, 시장을 향한 데이터 제품이 아닙니다.",
        points: [
          "bounded records",
          "state transitions",
          "provenance notes",
          "검토 화면",
          "증거 package"
        ]
      },
      {
        title: "분산 시스템에는 보이는 경계가 필요합니다.",
        description: "Distributed Paradigm은 local-first implementation notes, 범위가 정해진 state movement, ownership handoff, recovery paths, operational memory를 위한 Random Walk의 참조 notebook입니다.",
        points: [
          "local-first stance",
          "sync 경계",
          "ownership handoff",
          "recovery path",
          "operational memory"
        ]
      }
    ],
    notice: "각 creation에는 고유한 페이지가 있으므로 footer가 서로 관련 없는 항목들을 하나의 재사용 route로 접어 넣지 않습니다."
  }
};

type CreationCopyOverride = Pick<DetailPageCopy, "title" | "description" | "taxonomy" | "sections" | "notice"> & {
  outputsAtGlance?: DetailPageCopy["outputsAtGlance"];
  closing?: DetailPageCopy["closing"];
};

const creationCopyOverrides: Record<Locale, Record<CreationDetailSlug, CreationCopyOverride>> = {
  en: {
    melix: {
      title: "Local AI for Apple Silicon.",
      description: "Run, adapt, benchmark, and serve models on-device through local workflows, keeping inference and evaluation close to the machine.",
      taxonomy: ["Local AI Runtime", "On-Device Inference", "Privacy Infrastructure"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "Melix is a local AI runtime and model workbench for Apple Silicon.", points: ["Local model loading", "LoRA adaptation", "Benchmark and evaluation records", "CLI and local server workflows"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use Melix when model work should stay close to the machine, local data, and operator review.", points: ["Apple Silicon development", "Local inference", "Controlled evaluation", "Private model workflows"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not position Melix as generic cloud AI tooling.", points: ["Not a hosted AI platform", "Not a cloud control plane", "Not a universal orchestration suite"] }
      ],
      notice: "Melix should read as local execution, privacy, and Apple Silicon performance, not as generic cloud AI tooling.",
      closing: undefined
    },
    "1-tok": {
      title: "Token-metered agent work.",
      description: "A marketplace for agent runtime work, where usage can be metered by token output and settlement can follow streamed execution.",
      taxonomy: ["Agent Runtime Work", "Usage-Based Settlement", "Streamed Execution"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "1-TOK is a marketplace for agent runtime work with token-based usage metering.", points: ["Agent runtime tasks", "Token output metering", "Streamed execution", "Settlement records"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use 1-TOK when agent work needs a clear usage model and settlement can follow the execution stream.", points: ["Runtime work requests", "Usage-aware coordination", "Streaming output", "Work marketplace context"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not reduce 1-TOK to simple runtime rent or a generic freelance marketplace.", points: ["Not simple server rental", "Not a generic gig marketplace", "Do not make settlement the whole story"] }
      ],
      notice: "1-TOK should be understood as token-metered agent runtime work, not generic freelance work or simple infrastructure rental.",
      closing: undefined
    },
    "fiber-link": {
      title: "Community settlement over Fiber.",
      description: "Bring CKB Fiber-based tipping, creator rewards, balances, and withdrawals into community platforms without forcing users through complex on-chain flows.",
      taxonomy: ["Community Rewards", "Fiber Network", "Settlement Infrastructure"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "Fiber Link brings Fiber-based reward and settlement flows into community products.", points: ["Community tipping", "Creator rewards", "Platform balances", "Withdrawals"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use Fiber Link when a community platform needs rewards and balances without making users handle complex on-chain steps.", points: ["Community platforms", "Creator programs", "Reward balances", "CKB Fiber settlement"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not claim every user flow is fully non-custodial.", points: ["Hosted service components may exist", "Platform balances are part of the flow", "Avoid crypto-first marketing"] }
      ],
      notice: "Fiber Link can mention CKB and Fiber where needed, but the page should emphasize community settlement and usable product flows.",
      closing: undefined
    },
    neuron: {
      title: "The CKB desktop wallet.",
      description: "Manage CKB assets, governance activity, and script interactions through an open-source desktop wallet built for Nervos CKB.",
      taxonomy: ["CKB Wallet", "Desktop App", "Asset Control"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "Neuron is desktop wallet infrastructure for Nervos CKB.", points: ["CKB asset management", "Governance activity", "Script interactions", "Open-source desktop app"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use Neuron when the work needs a concrete reference for CKB asset control and wallet operation.", points: ["Desktop wallet context", "Asset control", "CKB scripts", "Nervos ecosystem operations"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not describe Neuron as a general multi-chain wallet or local AI workspace.", points: ["Not a generic wallet suite", "Not an AI product", "Not detached from Nervos CKB"] }
      ],
      notice: "Neuron should be positioned as Nervos CKB wallet infrastructure, not as a general wallet or local AI interface.",
      closing: undefined
    },
    "utxo-data": {
      title: "Structured data for UTXO systems.",
      description: "Access indexed UTXO-chain activity through APIs and analytics infrastructure for monitoring, investigation, product data, and downstream applications.",
      taxonomy: ["UTXO Data", "Indexed Infrastructure", "API Access"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "UTXO Data provides indexed data access for UTXO-style systems.", points: ["Indexed chain activity", "API access", "Analytics infrastructure", "Product data support"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use UTXO Data when monitoring, investigation, or product workflows need structured UTXO activity.", points: ["Monitoring", "Investigation", "Product data", "Downstream applications"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not lead with broad blockchain marketing or imply universal live coverage.", points: ["Separate supported networks from planned ones", "Avoid universal coverage claims", "Keep the data-infrastructure focus"] }
      ],
      notice: "UTXO Data should read as structured data infrastructure, not as broad blockchain marketing.",
      closing: undefined
    },
    "distributed-paradigm": {
      title: "Actor-style distributed systems.",
      description: "Use Kuai to build distributed applications with clearer service boundaries, message-passing coordination, and runtime-level structure.",
      taxonomy: ["Distributed Systems", "Actor Model", "Kuai Framework"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "Role", title: "What it is", description: "Distributed Paradigm is the Kuai-backed direction for actor-style distributed application structure.", points: ["Service boundaries", "Message passing", "Runtime structure", "Distributed coordination"] },
        { eyebrow: "Fit", title: "Where it fits", description: "Use it when distributed systems need clearer ownership, coordination, and runtime-level design.", points: ["Distributed applications", "Actor-style coordination", "Service boundaries", "Kuai framework context"] },
        { eyebrow: "Boundary", title: "What not to overclaim", description: "Do not position Distributed Paradigm as a standalone platform detached from Kuai.", points: ["Not independent of Kuai", "Not a generic platform claim", "Not broad distributed-system marketing"] }
      ],
      notice: "Distributed Paradigm should stay tied to Kuai and actor-style systems, not a standalone platform claim.",
      closing: undefined
    }
  },
  zh: {
    melix: {
      title: "Apple Silicon 上的本地 AI。",
      description: "通过本地工作流在设备端运行、适配、基准测试并服务模型，让推理与评估贴近机器本身。",
      taxonomy: ["本地 AI 运行时", "设备端推理", "隐私基础设施"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "Melix 是面向 Apple Silicon 的本地 AI 运行时与模型工作台。", points: ["本地模型加载", "LoRA 适配", "基准测试与评估记录", "CLI 与本地服务器工作流"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当模型工作需要靠近机器、本地数据和人工评审时，Melix 是合适的参考。", points: ["Apple Silicon 开发", "本地推理", "受控评估", "私有模型工作流"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要将 Melix 表述为通用云端 AI 工具。", points: ["不是托管 AI 平台", "不是云端控制平面", "不是通用编排套件"] }
      ],
      notice: "Melix 应该表达本地执行、隐私与 Apple Silicon 性能，而不是通用云端 AI 工具。",
      closing: undefined
    },
    "1-tok": {
      title: "按 Token 计量的 Agent 工作。",
      description: "面向 Agent 运行时工作的市场，使用量可按 token 输出计量，结算可随流式执行推进。",
      taxonomy: ["Agent 运行时工作", "按使用量结算", "流式执行"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "1-TOK 是面向 Agent 运行时工作的市场，并支持基于 token 的使用量计量。", points: ["Agent 运行时任务", "Token 输出计量", "流式执行", "结算记录"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当 Agent 工作需要清晰的使用量模型，并且结算可以跟随执行流推进时，1-TOK 更合适。", points: ["运行时工作请求", "使用量感知协作", "流式输出", "工作市场场景"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要将 1-TOK 简化为单纯运行时租赁，或泛化为普通自由职业市场。", points: ["不是简单服务器租赁", "不是普通零工市场", "不要把结算作为唯一主叙事"] }
      ],
      notice: "1-TOK 应被理解为按 token 计量的 Agent 运行时工作，而不是普通自由职业或简单基础设施租赁。",
      closing: undefined
    },
    "fiber-link": {
      title: "基于 Fiber 的社区结算。",
      description: "将基于 CKB Fiber 的打赏、创作者奖励、余额与提现带入社区平台，同时不要求用户理解复杂链上流程。",
      taxonomy: ["社区奖励", "Fiber Network", "结算基础设施"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "Fiber Link 将基于 Fiber 的奖励与结算流程带入社区产品。", points: ["社区打赏", "创作者奖励", "平台余额", "提现"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当社区平台需要奖励和余额体系，但不希望用户处理复杂链上步骤时，Fiber Link 更合适。", points: ["社区平台", "创作者计划", "奖励余额", "CKB Fiber 结算"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要声称 Fiber Link 的每一条用户流程都是完全非托管的。", points: ["可能存在托管服务组件", "平台余额是流程的一部分", "避免 crypto-first 营销"] }
      ],
      notice: "Fiber Link 可以在必要处提到 CKB 与 Fiber，但页面重点应是社区结算和可用的产品流程。",
      closing: undefined
    },
    neuron: {
      title: "CKB 桌面钱包。",
      description: "通过为 Nervos CKB 构建的开源桌面钱包，管理 CKB 资产、治理活动与脚本交互。",
      taxonomy: ["CKB Wallet", "桌面应用", "资产控制"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "Neuron 是 Nervos CKB 的桌面钱包基础设施。", points: ["CKB 资产管理", "治理活动", "脚本交互", "开源桌面应用"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当工作需要 CKB 资产控制和钱包操作的具体参考时，Neuron 更合适。", points: ["桌面钱包场景", "资产控制", "CKB 脚本", "Nervos 生态操作"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要将 Neuron 描述为通用多链钱包或本地 AI 工作空间。", points: ["不是通用钱包套件", "不是 AI 产品", "不要脱离 Nervos CKB 语境"] }
      ],
      notice: "Neuron 应定位为 Nervos CKB 钱包基础设施，而不是通用钱包或本地 AI 界面。",
      closing: undefined
    },
    "utxo-data": {
      title: "面向 UTXO 系统的结构化数据。",
      description: "通过 API 与分析基础设施访问已索引的 UTXO 链活动，用于监控、调查、产品数据与下游应用。",
      taxonomy: ["UTXO Data", "索引基础设施", "API 访问"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "UTXO Data 为 UTXO 风格系统提供索引数据访问。", points: ["已索引链上活动", "API 访问", "分析基础设施", "产品数据支持"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当监控、调查或产品工作流需要结构化 UTXO 活动时，UTXO Data 更合适。", points: ["监控", "调查", "产品数据", "下游应用"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要用宽泛区块链叙事包装 UTXO Data，也不要声称具备全网络实时覆盖。", points: ["区分已支持与计划支持的网络", "避免全覆盖承诺", "保持数据基础设施叙事"] }
      ],
      notice: "UTXO Data 应表达为结构化数据基础设施，而不是宽泛的区块链营销。",
      closing: undefined
    },
    "distributed-paradigm": {
      title: "Actor 风格的分布式系统。",
      description: "使用 Kuai 构建分布式应用，以更清晰的服务边界、消息传递协作与运行时结构组织系统。",
      taxonomy: ["分布式系统", "Actor Model", "Kuai Framework"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "定位", title: "它是什么", description: "Distributed Paradigm 是基于 Kuai 的 Actor 风格分布式应用结构方向。", points: ["服务边界", "消息传递", "运行时结构", "分布式协作"] },
        { eyebrow: "适用", title: "适合什么场景", description: "当分布式系统需要更清晰的所有权、协作方式和运行时设计时，它更合适。", points: ["分布式应用", "Actor 风格协作", "服务边界", "Kuai 框架语境"] },
        { eyebrow: "边界", title: "不要过度表达", description: "不要将 Distributed Paradigm 描述为脱离 Kuai 的独立平台。", points: ["不脱离 Kuai", "不是通用平台声明", "不要做宽泛分布式系统营销"] }
      ],
      notice: "Distributed Paradigm 应保持与 Kuai 和 Actor 风格系统绑定，而不是成为独立平台声明。",
      closing: undefined
    }
  },
  ja: {
    melix: {
      title: "Apple Silicon のためのローカル AI。",
      description: "ローカルワークフローでモデルを実行、適応、ベンチマーク、サーブし、推論と評価をマシンの近くに保ちます。",
      taxonomy: ["ローカル AI ランタイム", "オンデバイス推論", "プライバシー基盤"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "Melix は Apple Silicon のためのローカル AI ランタイムとモデルワークベンチです。", points: ["ローカルモデル読み込み", "LoRA 適応", "ベンチマークと評価記録", "CLI とローカルサーバーワークフロー"] },
        { eyebrow: "適用", title: "適した場面", description: "モデル作業をマシン、ローカルデータ、オペレーターのレビューに近づけたい場合に適しています。", points: ["Apple Silicon 開発", "ローカル推論", "制御された評価", "プライベートなモデルワークフロー"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "Melix を汎用的なクラウド AI ツールとして表現しないこと。", points: ["ホスト型 AI プラットフォームではない", "クラウド制御プレーンではない", "汎用オーケストレーションスイートではない"] }
      ],
      notice: "Melix は、汎用クラウド AI ではなく、ローカル実行、プライバシー、Apple Silicon の性能として読まれるべきです。",
      closing: undefined
    },
    "1-tok": {
      title: "Token で計測する Agent Work。",
      description: "Agent ランタイムワークのマーケットプレイス。利用量を token 出力で計測し、ストリーミング実行に沿って精算を進められます。",
      taxonomy: ["Agent ランタイムワーク", "利用量ベース精算", "ストリーミング実行"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "1-TOK は、token ベースの利用量計測に対応する Agent ランタイムワークのマーケットプレイスです。", points: ["Agent ランタイムタスク", "Token 出力の計測", "ストリーミング実行", "精算記録"] },
        { eyebrow: "適用", title: "適した場面", description: "Agent work に明確な利用量モデルが必要で、実行ストリームに沿って精算を進めたい場合に適しています。", points: ["ランタイムワーク依頼", "利用量を意識した協調", "ストリーミング出力", "ワークマーケットプレイス文脈"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "1-TOK を単なるランタイム貸出、または一般的なフリーランスマーケットプレイスとして扱わないこと。", points: ["単なるサーバーレンタルではない", "一般的なギグ市場ではない", "精算だけを主題にしない"] }
      ],
      notice: "1-TOK は、一般的なフリーランス作業や単純な基盤レンタルではなく、token で計測する Agent ランタイムワークとして扱います。",
      closing: undefined
    },
    "fiber-link": {
      title: "Fiber 上のコミュニティ精算。",
      description: "CKB Fiber ベースのチップ、クリエイター報酬、残高、出金を、複雑なオンチェーン手順を理解させることなくコミュニティプラットフォームへ組み込みます。",
      taxonomy: ["コミュニティ報酬", "Fiber Network", "精算基盤"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "Fiber Link は、Fiber ベースの報酬と精算フローをコミュニティプロダクトへ組み込みます。", points: ["コミュニティのチップ", "クリエイター報酬", "プラットフォーム内残高", "出金"] },
        { eyebrow: "適用", title: "適した場面", description: "複雑なオンチェーン手順をユーザーに求めず、コミュニティに報酬と残高の仕組みを入れたい場合に適しています。", points: ["コミュニティプラットフォーム", "クリエイタープログラム", "報酬残高", "CKB Fiber 精算"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "Fiber Link のすべてのユーザーフローが完全にノンカストディアルであると主張しないこと。", points: ["ホスト型サービス要素があり得る", "プラットフォーム内残高も流れの一部", "crypto-first な訴求を避ける"] }
      ],
      notice: "Fiber Link では必要に応じて CKB と Fiber に触れつつ、中心はコミュニティ精算と使いやすいプロダクトフローに置きます。",
      closing: undefined
    },
    neuron: {
      title: "CKB デスクトップウォレット。",
      description: "Nervos CKB のために構築されたオープンソースのデスクトップウォレットで、CKB 資産、ガバナンス活動、スクリプト操作を管理します。",
      taxonomy: ["CKB Wallet", "デスクトップアプリ", "資産管理"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "Neuron は Nervos CKB のためのデスクトップウォレット基盤です。", points: ["CKB 資産管理", "ガバナンス活動", "スクリプト操作", "オープンソースのデスクトップアプリ"] },
        { eyebrow: "適用", title: "適した場面", description: "CKB の資産管理とウォレット操作について具体的な参照が必要な場合に適しています。", points: ["デスクトップウォレット文脈", "資産管理", "CKB スクリプト", "Nervos エコシステム運用"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "Neuron を汎用マルチチェーンウォレット、またはローカル AI ワークスペースとして説明しないこと。", points: ["汎用ウォレットスイートではない", "AI プロダクトではない", "Nervos CKB から切り離さない"] }
      ],
      notice: "Neuron は Nervos CKB のウォレット基盤として位置づけ、汎用ウォレットやローカル AI インターフェースとはしません。",
      closing: undefined
    },
    "utxo-data": {
      title: "UTXO システムのための構造化データ。",
      description: "インデックス済みの UTXO チェーン活動を API と分析基盤から利用し、監視、調査、プロダクトデータ、下流アプリケーションに活用できます。",
      taxonomy: ["UTXO Data", "インデックス基盤", "API アクセス"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "UTXO Data は、UTXO 型システムのためのインデックス済みデータアクセスを提供します。", points: ["インデックス済みチェーン活動", "API アクセス", "分析基盤", "プロダクトデータ支援"] },
        { eyebrow: "適用", title: "適した場面", description: "監視、調査、プロダクトワークフローで構造化された UTXO 活動が必要な場合に適しています。", points: ["監視", "調査", "プロダクトデータ", "下流アプリケーション"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "UTXO Data を広範なブロックチェーン訴求として見せたり、全ネットワークのリアルタイム対応を主張したりしないこと。", points: ["対応済みネットワークと計画中ネットワークを分ける", "全カバレッジを主張しない", "データ基盤の焦点を保つ"] }
      ],
      notice: "UTXO Data は、広範なブロックチェーン訴求ではなく、構造化データ基盤として読まれるべきです。",
      closing: undefined
    },
    "distributed-paradigm": {
      title: "Actor スタイルの分散システム。",
      description: "Kuai を使い、より明確なサービス境界、メッセージパッシングによる協調、ランタイムレベルの構造を持つ分散アプリケーションを構築します。",
      taxonomy: ["分散システム", "Actor Model", "Kuai Framework"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "位置づけ", title: "これは何か", description: "Distributed Paradigm は、Kuai に基づく Actor スタイルの分散アプリケーション構造です。", points: ["サービス境界", "メッセージパッシング", "ランタイム構造", "分散協調"] },
        { eyebrow: "適用", title: "適した場面", description: "分散システムに明確な所有、協調、ランタイム設計が必要な場合に適しています。", points: ["分散アプリケーション", "Actor スタイルの協調", "サービス境界", "Kuai フレームワーク文脈"] },
        { eyebrow: "境界", title: "過度に主張しないこと", description: "Distributed Paradigm を Kuai から切り離された独立プラットフォームとして位置づけないこと。", points: ["Kuai から切り離さない", "汎用プラットフォーム主張ではない", "広範な分散システム訴求にしない"] }
      ],
      notice: "Distributed Paradigm は Kuai と Actor スタイルのシステムに結びつけ、独立プラットフォームとして扱いません。",
      closing: undefined
    }
  },
  ko: {
    melix: {
      title: "Apple Silicon을 위한 로컬 AI.",
      description: "로컬 워크플로에서 모델을 실행, 적응, 벤치마크, 서빙하며 추론과 평가를 기기 가까이에 둡니다.",
      taxonomy: ["로컬 AI 런타임", "온디바이스 추론", "프라이버시 인프라"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "Melix는 Apple Silicon을 위한 로컬 AI 런타임이자 모델 워크벤치입니다.", points: ["로컬 모델 로딩", "LoRA 적응", "벤치마크와 평가 기록", "CLI 및 로컬 서버 워크플로"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "모델 작업을 기기, 로컬 데이터, 운영자 리뷰 가까이에 둬야 할 때 적합합니다.", points: ["Apple Silicon 개발", "로컬 추론", "제어된 평가", "프라이빗 모델 워크플로"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "Melix를 일반적인 클라우드 AI 도구로 설명하지 마십시오.", points: ["호스팅형 AI 플랫폼이 아님", "클라우드 제어 평면이 아님", "범용 오케스트레이션 제품군이 아님"] }
      ],
      notice: "Melix는 일반 클라우드 AI가 아니라 로컬 실행, 프라이버시, Apple Silicon 성능으로 읽혀야 합니다.",
      closing: undefined
    },
    "1-tok": {
      title: "Token으로 계량되는 Agent 작업.",
      description: "Agent 런타임 작업을 위한 마켓플레이스입니다. 사용량은 token 출력으로 계량되고, 정산은 스트리밍 실행에 맞춰 진행될 수 있습니다.",
      taxonomy: ["Agent 런타임 작업", "사용량 기반 정산", "스트리밍 실행"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "1-TOK은 token 기반 사용량 계량을 지원하는 Agent 런타임 작업 마켓플레이스입니다.", points: ["Agent 런타임 작업", "Token 출력 계량", "스트리밍 실행", "정산 기록"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "Agent 작업에 명확한 사용량 모델이 필요하고 정산이 실행 흐름을 따라가야 할 때 적합합니다.", points: ["런타임 작업 요청", "사용량 인식 조율", "스트리밍 출력", "작업 마켓플레이스 맥락"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "1-TOK을 단순 런타임 임대나 일반 프리랜서 마켓플레이스로 축소하지 마십시오.", points: ["단순 서버 임대가 아님", "일반 긱 마켓이 아님", "정산만을 중심 서사로 삼지 않을 것"] }
      ],
      notice: "1-TOK은 일반 프리랜서 작업이나 단순 인프라 임대가 아니라 token으로 계량되는 Agent 런타임 작업으로 다뤄야 합니다.",
      closing: undefined
    },
    "fiber-link": {
      title: "Fiber 기반 커뮤니티 정산.",
      description: "CKB Fiber 기반 팁, 크리에이터 리워드, 잔액, 출금을 커뮤니티 플랫폼에 통합하되, 사용자가 복잡한 온체인 절차를 이해하도록 요구하지 않습니다.",
      taxonomy: ["커뮤니티 리워드", "Fiber Network", "정산 인프라"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "Fiber Link는 Fiber 기반 보상과 정산 흐름을 커뮤니티 제품에 통합합니다.", points: ["커뮤니티 팁", "크리에이터 리워드", "플랫폼 잔액", "출금"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "커뮤니티 플랫폼에 보상과 잔액 시스템이 필요하지만 사용자가 복잡한 온체인 단계를 다루지 않아야 할 때 적합합니다.", points: ["커뮤니티 플랫폼", "크리에이터 프로그램", "리워드 잔액", "CKB Fiber 정산"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "Fiber Link의 모든 사용자 흐름이 완전한 논커스터디얼이라고 주장하지 마십시오.", points: ["호스팅 서비스 구성요소가 있을 수 있음", "플랫폼 잔액도 흐름의 일부", "crypto-first 마케팅을 피할 것"] }
      ],
      notice: "Fiber Link는 필요한 곳에서 CKB와 Fiber를 언급하되, 중심은 커뮤니티 정산과 사용 가능한 제품 흐름이어야 합니다.",
      closing: undefined
    },
    neuron: {
      title: "CKB 데스크톱 월렛.",
      description: "Nervos CKB를 위해 구축된 오픈소스 데스크톱 월렛으로 CKB 자산, 거버넌스 활동, 스크립트 상호작용을 관리합니다.",
      taxonomy: ["CKB Wallet", "데스크톱 앱", "자산 제어"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "Neuron은 Nervos CKB를 위한 데스크톱 월렛 인프라입니다.", points: ["CKB 자산 관리", "거버넌스 활동", "스크립트 상호작용", "오픈소스 데스크톱 앱"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "CKB 자산 제어와 월렛 운용에 대한 구체적 참조가 필요할 때 적합합니다.", points: ["데스크톱 월렛 맥락", "자산 제어", "CKB 스크립트", "Nervos 생태계 운용"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "Neuron을 범용 멀티체인 월렛이나 로컬 AI 워크스페이스로 설명하지 마십시오.", points: ["범용 월렛 제품군이 아님", "AI 제품이 아님", "Nervos CKB와 분리하지 않을 것"] }
      ],
      notice: "Neuron은 범용 월렛이나 로컬 AI 인터페이스가 아니라 Nervos CKB 월렛 인프라로 포지셔닝해야 합니다.",
      closing: undefined
    },
    "utxo-data": {
      title: "UTXO 시스템을 위한 구조화 데이터.",
      description: "인덱싱된 UTXO 체인 활동을 API와 분석 인프라로 접근해 모니터링, 조사, 제품 데이터, 다운스트림 애플리케이션에 활용합니다.",
      taxonomy: ["UTXO Data", "인덱싱 인프라", "API 접근"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "UTXO Data는 UTXO 스타일 시스템을 위한 인덱싱 데이터 접근을 제공합니다.", points: ["인덱싱된 체인 활동", "API 접근", "분석 인프라", "제품 데이터 지원"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "모니터링, 조사, 제품 워크플로에 구조화된 UTXO 활동이 필요할 때 적합합니다.", points: ["모니터링", "조사", "제품 데이터", "다운스트림 애플리케이션"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "UTXO Data를 광범위한 블록체인 마케팅으로 포장하거나 모든 네트워크의 실시간 커버리지를 주장하지 마십시오.", points: ["지원 네트워크와 계획 네트워크를 구분할 것", "전체 커버리지를 주장하지 않을 것", "데이터 인프라 중심을 유지할 것"] }
      ],
      notice: "UTXO Data는 광범위한 블록체인 마케팅이 아니라 구조화 데이터 인프라로 읽혀야 합니다.",
      closing: undefined
    },
    "distributed-paradigm": {
      title: "Actor 스타일 분산 시스템.",
      description: "Kuai로 더 명확한 서비스 경계, 메시지 패싱 기반 조율, 런타임 수준의 구조를 갖춘 분산 애플리케이션을 구축합니다.",
      taxonomy: ["분산 시스템", "Actor Model", "Kuai Framework"],
      outputsAtGlance: undefined,
      sections: [
        { eyebrow: "역할", title: "무엇인가", description: "Distributed Paradigm은 Kuai 기반의 Actor 스타일 분산 애플리케이션 구조입니다.", points: ["서비스 경계", "메시지 패싱", "런타임 구조", "분산 조율"] },
        { eyebrow: "적합성", title: "어디에 맞는가", description: "분산 시스템에 더 명확한 소유권, 조율 방식, 런타임 설계가 필요할 때 적합합니다.", points: ["분산 애플리케이션", "Actor 스타일 조율", "서비스 경계", "Kuai 프레임워크 맥락"] },
        { eyebrow: "경계", title: "과장하지 않을 것", description: "Distributed Paradigm을 Kuai와 분리된 독립 플랫폼으로 포지셔닝하지 마십시오.", points: ["Kuai와 분리하지 않을 것", "범용 플랫폼 주장이 아님", "광범위한 분산 시스템 마케팅이 아님"] }
      ],
      notice: "Distributed Paradigm은 Kuai 및 Actor 스타일 시스템과 연결되어야 하며, 독립 플랫폼으로 다뤄서는 안 됩니다.",
      closing: undefined
    }
  }
};

const creationIndexOverrides: Record<Locale, Pick<DetailPageCopy, "title" | "description" | "notice">> = {
  en: {
    title: "Products for local, private infrastructure.",
    description: "Random Walk builds products for customer-controlled workflows, local data infrastructure, privacy-preserving execution, and settlement-aware coordination.",
    notice: "These creations come from production constraints: local inference, controlled data access, agent runtime work, community settlement, structured data infrastructure, and distributed system design."
  },
  zh: {
    title: "面向本地与私有基础设施的产品。",
    description: "Random Walk 构建面向客户可控工作流、本地数据基础设施、隐私保护执行与结算感知协作的产品。",
    notice: "这些产品来自真实生产约束：本地推理、受控数据访问、Agent 运行时工作、社区结算、结构化数据基础设施与分布式系统设计。"
  },
  ja: {
    title: "ローカルでプライベートな基盤のためのプロダクト。",
    description: "Random Walk は、顧客が制御できるワークフロー、ローカルデータ基盤、プライバシーを保つ実行環境、精算を意識した協調のためのプロダクトを構築します。",
    notice: "これらのプロダクトは、本番環境の制約から生まれています。ローカル推論、制御されたデータアクセス、Agent ランタイムワーク、コミュニティ精算、構造化データ基盤、分散システム設計です。"
  },
  ko: {
    title: "로컬·프라이빗 인프라를 위한 제품.",
    description: "Random Walk는 고객이 제어하는 워크플로, 로컬 데이터 인프라, 프라이버시 보존 실행, 정산을 고려한 조율을 위한 제품을 만듭니다.",
    notice: "이 제품들은 실제 운영 제약에서 출발합니다. 로컬 추론, 제어된 데이터 접근, Agent 런타임 작업, 커뮤니티 정산, 구조화 데이터 인프라, 분산 시스템 설계입니다."
  }
};

const creationStatusTags: Record<CreationDetailSlug, string> = {
  melix: "[PRODUCTION-TOOL]",
  "1-tok": "[PRODUCT-EXPERIMENT]",
  "fiber-link": "[REFERENCE]",
  neuron: "[REFERENCE]",
  "utxo-data": "[DATA-INFRA]",
  "distributed-paradigm": "[TECHNICAL-STUDY]"
};

for (const locale of ["en", "zh", "ja", "ko"] as const) {
  for (const slug of creationDetailSlugs) {
    Object.assign(creationDetailPages[locale][slug], creationCopyOverrides[locale][slug]);
  }

  Object.assign(creationsIndexPages[locale], creationIndexOverrides[locale], {
    taxonomy: creationDetailSlugs.map((slug) => creationDetailPages[locale][slug].title.replace(/\.$/, "")),
    sections: creationDetailSlugs.map((slug) => ({
      eyebrow: creationStatusTags[slug],
      title: creationDetailPages[locale][slug].title,
      description: creationDetailPages[locale][slug].description,
      points: creationDetailPages[locale][slug].taxonomy
    }))
  });
}

const creationPrimaryLinkOverrides: Record<Locale, Record<CreationDetailSlug, DetailLink>> = {
  en: {
    melix: { label: "Explore Melix", href: "/creations/melix" },
    "1-tok": { label: "Discuss agent runtime work", href: "/contact" },
    "fiber-link": { label: "Discuss community settlement", href: "/contact" },
    neuron: { label: "Discuss wallet infrastructure", href: "/contact" },
    "utxo-data": { label: "Discuss data infrastructure", href: "/contact" },
    "distributed-paradigm": { label: "Discuss distributed systems", href: "/contact" }
  },
  zh: {
    melix: { label: "探索 Melix", href: "/creations/melix" },
    "1-tok": { label: "讨论 Agent 运行时工作", href: "/contact" },
    "fiber-link": { label: "讨论社区结算", href: "/contact" },
    neuron: { label: "讨论钱包基础设施", href: "/contact" },
    "utxo-data": { label: "讨论数据基础设施", href: "/contact" },
    "distributed-paradigm": { label: "讨论分布式系统", href: "/contact" }
  },
  ja: {
    melix: { label: "Melix を探索", href: "/creations/melix" },
    "1-tok": { label: "Agent ランタイムワークを相談", href: "/contact" },
    "fiber-link": { label: "コミュニティ精算を相談", href: "/contact" },
    neuron: { label: "ウォレット基盤を相談", href: "/contact" },
    "utxo-data": { label: "データ基盤を相談", href: "/contact" },
    "distributed-paradigm": { label: "分散システムを相談", href: "/contact" }
  },
  ko: {
    melix: { label: "Melix 살펴보기", href: "/creations/melix" },
    "1-tok": { label: "Agent 런타임 작업 논의", href: "/contact" },
    "fiber-link": { label: "커뮤니티 정산 논의", href: "/contact" },
    neuron: { label: "월렛 인프라 논의", href: "/contact" },
    "utxo-data": { label: "데이터 인프라 논의", href: "/contact" },
    "distributed-paradigm": { label: "분산 시스템 논의", href: "/contact" }
  }
};

for (const locale of ["en", "zh", "ja", "ko"] as const) {
  for (const slug of creationDetailSlugs) {
    creationDetailPages[locale][slug].primaryLink = creationPrimaryLinkOverrides[locale][slug];
  }
}

const serviceTechnicalSchemas: Record<ServiceDetailSlug, DetailPageCopy["technicalSchema"]> = {
  "ai-ml": [
    { label: "runtime", value: "local | private-server | customer-cloud" },
    { label: "data", value: "internal | confidential | regulated" },
    { label: "models", value: "local | routed | hybrid" },
    { label: "review", value: "human-in-loop" },
    { label: "handoff", value: "docs | runbook | repo" }
  ],
  "data-platform": [
    { label: "sources", value: "approved | restricted | excluded" },
    { label: "shape", value: "dataset | retrieval | evaluation" },
    { label: "movement", value: "registered | reviewed" },
    { label: "review", value: "manifest | exclusions" },
    { label: "handoff", value: "package | notes" }
  ],
  "it-architecture": [
    { label: "runtime", value: "workstation | on-prem | VPC" },
    { label: "access", value: "operator | admin | service" },
    { label: "diagnostics", value: "logs | capacity | rollback" },
    { label: "network", value: "private | restricted" },
    { label: "handoff", value: "topology | runbook" }
  ],
  "privacy-data": [
    { label: "material", value: "allowed | restricted | excluded" },
    { label: "access", value: "customer | project | operator" },
    { label: "movement", value: "scoped | logged" },
    { label: "retention", value: "return | delete | exclude" },
    { label: "review", value: "customer-owned" }
  ],
  "sovereign-infrastructure": [
    { label: "boundary", value: "customer-controlled" },
    { label: "runtime", value: "local | on-prem | VPC | edge" },
    { label: "artifacts", value: "models | data | configs" },
    { label: "operation", value: "operator path | rollback" },
    { label: "handoff", value: "runbook | diagnostics" }
  ]
};

for (const locale of ["en", "zh", "ja", "ko"] as const) {
  for (const slug of creationDetailSlugs) {
    creationDetailPages[locale][slug].statusTag = creationStatusTags[slug];
  }

  for (const slug of serviceDetailSlugs) {
    serviceDetailPages[locale][slug].technicalSchema = serviceTechnicalSchemas[slug];
  }
}

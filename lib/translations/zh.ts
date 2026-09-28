import { exhibit } from "../exhibits";
import type { Translation } from "./types";

// Simplified Chinese. Translated from the English source in lib/site-copy.ts, lib/detail-copy.ts,
// lib/work-entries.ts and lib/examination/content.ts; keep the structure in step with it.

const cta = "洽谈项目";

export const zh: Translation = {
  site: {
    meta: {
      siteTitle: "为成长型企业服务的 AI 实验室"
    },
    paintings: {
      home: "一幅油画：天文台大厅里，一束阳光从圆形开口射入，落在地面带刻度的黄铜线上，一位身穿靛蓝长袍的学者跪着用分规标记它。",
      homeXray: "夜晚的同一座天文台大厅，一位天文学家站在黄铜望远镜旁，地上放着一盏提灯。",
      services: "一幅油画：钟表店里，一位女士伸手去取挂在金怀表之间的智能手表，旁边的工匠正为一位绅士调试落地钟。",
      datasets: "一幅油画：三名学徒对着立在墨水瓶之间的现代显示器临摹一幅解剖图，师傅在一旁检查他们的摹本。",
      macComputerUse: "一幅油画：一位老师傅指导一名年轻书记员，书记员在羽毛笔和伊万里瓷杯之间操作一台打开的 MacBook Pro。",
      businessArenas: "一幅油画：账房里，书记员们在核对账簿，一卷收据纸从桌上垂落。",
      turnvector: "一幅油画：烛光下三位乐师共用一架羽管键琴，旁边的小桌上放着一台 Mac Studio。",
      melix: "一幅静物画：石台上摆着锡壶、剥开的柠檬、伊万里瓷碗、核桃和一台 Mac Studio。",
      company: "一幅油画：画家的工坊里，身穿长袍的助手们背对观者，站在各自的画架前。",
      contact: "一幅油画：一位商人在黑金漆器文具盒上书写委托信。",
      notFound: "一幅虚空派静物画：空的镀金画框、熄灭的蜡烛、沙漏、怀表和一朵凋谢的郁金香。",
      noteAssay: "一幅油画：化验所里，一位化验师在黄铜天平旁用试金石检验金条，砝码之间放着一个小小的现代 U 盘。",
      noteAlcove: "一幅油画：一位细木工在打造合适的座钟之前，用铜头量杆测量空着的壁龛，地上放着一个现代激光测距仪。"
    },
    addressBlock: ["日本东京都东大和市新堀1丁目"],
    nav: {
      items: [
        { label: "服务", href: "/services" },
        { label: "数据集", href: "/datasets" },
        { label: "作品", href: "/work" },
        { label: "Melix", href: "/melix" },
        { label: "公司", href: "/company" }
      ],
      cta,
      menu: "菜单",
      language: "切换语言",
      home: "Random Walk 首页",
      primary: "主导航"
    },
    footer: {
      line: "为成长型企业服务的 AI 实验室。我们选定模型、构建数据，在值得时训练，并让它在你自己的机器上持续运行。",
      groups: [
        { title: "实验室", links: [{ label: "服务", href: "/services" }, { label: "数据集", href: "/datasets" }, { label: "作品", href: "/work" }, { label: "Melix", href: "/melix" }] },
        { title: "公司", links: [{ label: "关于我们", href: "/company" }, { label: "笔记", href: "/notes" }, { label: "早期项目", href: "/earlier-work" }, { label: cta, href: "/contact" }] },
        { title: "法律", links: [{ label: "隐私政策", href: "/privacy" }, { label: "服务条款", href: "/terms" }, { label: "安全", href: "/security" }, { label: "负责任的使用", href: "/legal/responsible-use" }] }
      ],
      label: "页脚",
      credits: "画作由我们自己的机器生成。",
      copyright: "© 2026 Random Walk K.K."
    },
    home: {
      title: "模型是一层一层画成的",
      description: "Random Walk 是为成长型企业服务的 AI 实验室。我们选定合适的模型，构建数据，在值得时进行训练，并让它在你的云、机房或 Mac 上持续运行。",
      lensHint: "在画面上移动，看看每一层是由什么构成的。"
    },
    close: {
      title: "每一件委托，都从一次谈话开始。",
      body: "告诉我们要做的工作、你手里有哪些数据、模型需要在哪里运行。我们会在两个工作日内回复。",
      cta
    },
    services: {
      kicker: "服务",
      title: "现成的，或量身定制的。",
      levelsLabel: "两种合作方式",
      lede: "每个项目都从了解业务开始。然后我们和你一起决定它需要什么：一个精心适配的好用的现有模型，或者一个属于你自己的模型。多数公司从前者开始，在划算的地方再走向后者。",
      levels: [
        {
          name: "现成",
          title: "现有模型，适配你的工作",
          body: "适合通用模型本就擅长的工作：起草、总结、基于你自己的文档回答问题、填写表单。功夫在适配。",
          items: [
            "我们梳理工作流程及其涉及的数据。",
            "我们选定模型，并把它接入你的文档和工具。",
            "我们与你约定一套测试，并用它来衡量模型。",
            "我们用 vLLM 部署在你的云或机房，或用 Melix 部署在你的 Mac 上。",
            "我们负责持续运行，并在更好的模型出现时换上。",
            "如果数据不能离开你的办公楼，我们就在现场离线完成工作。"
          ]
        },
        {
          name: "定制",
          title: "属于你自己的模型",
          body: "适合依赖你公司独有知识的工作（术语、流程、格式和软件），或者你需要一个能在自有硬件上运行的更小的模型。",
          lead: "包含“现成”的全部内容，另外还有：",
          items: [
            "用你的材料构建的数据集，附数据集卡片；",
            "基于员工真实任务的微调和偏好调优；",
            "当通用模型缺少你所在领域的词汇时，进行继续预训练。"
          ]
        }
      ],
      processTitle: "项目如何推进",
      process: [
        { title: "了解业务。", receive: "你会收到一份书面的工作流程图，标出 AI 能帮上忙的地方。" },
        { title: "选择方式。", receive: "你会收到一份方案：现成还是定制，包含范围和我们将使用的测试。" },
        { title: "准备数据。", receive: "你会收到一份数据集卡片。", note: "仅限定制。" },
        { title: "训练。", receive: "你会收到模型权重和一份评估报告。", note: "仅限定制。" },
        { title: "部署。", receive: "你会收到带版本号的模型和一份运维手册。" },
        { title: "维护。", receive: "每次发布，你都会收到一份变更日志。" }
      ],
      whereTitle: "在哪里运行",
      where: [
        { place: "你的云或机房", how: "用 vLLM 提供服务" },
        { place: "你的 Mac", how: "用 Melix 提供服务" }
      ],
      adviceTitle: "先咨询，或只咨询",
      advice: "清楚判断 AI 适合用在你业务的哪些地方，或者为你已经在用的系统提供第二意见。"
    },
    datasets: {
      kicker: "数据集",
      title: "别人没有的数据。",
      lede: "公开数据集教给模型的，是十年前的软件。我们记录的是企业每天都在用的软件，也能同样快地用你自己的工作构建数据集。",
      releaseTitle: "macOS 电脑操作数据集",
      release: "v2.1 版，2026 年 9 月 25 日发布",
      facts: [
        { value: "15,854", label: "个标注步骤" },
        { value: "450", label: "个任务" },
        { value: "175", label: "个教程" }
      ],
      topics: "日常 macOS、视频剪辑、Blender 和 Godot。",
      heldOut: "仅留作测试：Photoshop、DaVinci Resolve、Audacity、Camtasia、QuickTime 等。",
      audit: "在对 1,015 个步骤的抽查中，约 90% 的点击落在正确目标上，约 70% 的操作完全正确。",
      byTopic: [
        { topic: "日常 macOS", action: "76%" },
        { topic: "视频剪辑", action: "78%" },
        { topic: "Blender", action: "71%" },
        { topic: "Godot", action: "55%" }
      ],
      byTopicHead: ["主题", "完全正确的操作"],
      byTopicNote: "各主题中完全正确的操作占比。Blender 和 Godot 按每批 30 个抽查，数字较为粗略。",
      honest: "标注由模型从教程视频中生成，通过抽样检查，而非逐条人工标注。",
      pipelineTitle: "一段教程如何变成训练数据",
      pipeline: "我们找到全世界都在学的教程，只留下清晰的那些。每段教程被切分成一个个瞬间。对每个瞬间，我们还原做了什么、为什么这样做，找到屏幕上的准确位置，再把这些瞬间组合成任务。发布之前，再随机抽样审核一次。",
      pace: "从第一版到第二版用了两天，数据量增加了十倍。",
      stepsTitle: "数据集中的步骤",
      yoursTitle: "你的数据集",
      yours: "同一套工坊，也可以用在你的文档、工单和屏幕录像上。如果数据不能离开你的办公楼，我们就在现场离线工作：机器由我们带去，数据始终在你手里。"
    },
    work: {
      kicker: "作品",
      title: "我们做过的东西。",
      lede: "我们自己的项目，做法和为客户做时一样：一份数据集、一个模型、一套必须通过的测试，以及运行它的机器。",
      facts: "概览",
      scores: "得分",
      back: "全部作品"
    },
    melix: {
      kicker: "Melix",
      title: "你的模型，安居在你的 Mac 上。",
      lede: "Melix 是我们为在 Apple Silicon 上部署的企业打造的推理引擎。注册模型、运行服务、用 LoRA 微调，再做基准测试和评估，都可以在原生 Mac 应用或命令行里完成。任何数据都不会离开这台机器。",
      capabilities: [
        { title: "模型注册表", body: "从本地磁盘或 Hugging Face 导入模型，放进由你掌控的注册表。" },
        { title: "模型服务", body: "一条命令或一次点击，即可启动、暂停、恢复和停止本地模型服务。" },
        { title: "LoRA 与 QLoRA", body: "用你自己的数据训练适配器，再与基础模型并排比较。" },
        { title: "基准测试与评估", body: "运行可重复的基准测试和评估套件，结果以你自己掌握的格式保存。" },
        { title: "原生 Mac 应用", body: "菜单栏应用和工作区涵盖以上全部功能，背后是同一套命令行。" }
      ],
      source: "Melix 以 Apache 2.0 许可证开源。",
      loopTitle: "一个闭环，一台机器。",
      capabilitiesLabel: "Melix 能做什么",
      window: exhibit("melixWindow", "macOS 上的 Melix 窗口：本地服务正在运行一个带 LoRA 适配器的模型，显示其网关和服务设置。", "macOS 上的 Melix 工作区，在本机上运行带 LoRA 适配器的模型。"),
      cover: exhibit("melix", "Melix 产品页：基于 MLX 的 LoRA 训练与适配器，为 Apple Silicon 打造。", "Melix，截自产品官网。"),
      repo: "查看代码仓库"
    },
    company: {
      kicker: "公司",
      title: "一步一步走出来的路。",
      lede: "随机游走（random walk）是一条由一小步一小步走出的路径，每一步都是一次选择。语言模型写作也是如此，一个词接一个词。Random Walk 是一家 AI 实验室，帮助成长型企业借助一个懂自己业务的模型，走好这些步。",
      tokenPlantTitle: "Token Plant",
      tokenPlant: "Token Plant 是我们的公开项目组。TurnVector 就出自这里，它是一个让多个模型在同一台 Apple Silicon 机器上运行的运行时。",
      eventsTitle: "活动",
      eventsHead: ["活动", "地点", "时间"],
      registeredTitle: "登记信息",
      registered: {
        name: "登记名称",
        number: "法人编号",
        date: "设立日期",
        address: "地址",
        email: "邮箱"
      },
      registeredOn: "2022 年 9 月 14 日",
      registeredNote: "完整的登记地址见法律页面。"
    },
    contact: {
      kicker: cta,
      title: "每一件委托，都从一次谈话开始。",
      lede: "告诉我们要做的工作、你手里有哪些数据、模型需要在哪里运行。我们会在两个工作日内回复。",
      formTitle: "说说你要做的工作。",
      formLabel: "项目表单",
      writeTo: "也可以直接写信至",
      writeToEnd: "。",
      mapTitle: "我们在哪里",
      mapBody: "我们的工作室位于东京西郊的东大和市新堀。我们与各地的公司合作，面谈需提前预约。",
      mapLink: "在 Google 地图中打开"
    },
    earlierWork: {
      kicker: "早期项目",
      title: "早期项目。",
      lede: "在 Random Walk 成为 AI 实验室之前，我们为 Nervos CKB 区块链做过钱包、支付工具和数据服务。这里列出它们作为记录，并附上各自现在所在的链接。",
      back: "全部早期项目"
    },
    notes: {
      kicker: "笔记",
      title: "工坊笔记。",
      lede: "关于我们如何为企业选择、训练、测试和部署模型的短文，都写自实际工作。",
      read: "阅读笔记",
      date: "日期",
      back: "全部笔记",
      by: "作者",
      topics: "主题"
    },
    security: {
      kicker: "安全",
      title: "你的数据，留在你决定的地方。",
      lede: "任何模型工作开始之前，我们会先和你划定边界：数据放在哪里、谁能接触、模型可以做什么、每次发布由谁签字确认。如果数据不能离开你的办公楼，我们就带上自己的机器在现场离线工作。",
      whereTitle: "数据放在哪里",
      whereBody: "你的材料、由它构建的数据集、模型及其适配器、运行中的服务和日志，都留在我们共同划定的边界之内。",
      whereHead: ["位置", "适合", "你会收到"],
      places: [
        ["你的 Mac", "希望在自有 Apple Silicon 机器上运行模型的团队。", "每台机器和运行时的配置说明。"],
        ["你的机房", "在自有 GPU 上训练和提供服务。", "环境记录和操作手册。"],
        ["你的私有云", "有受控入口的专用基础设施。", "架构图和访问说明。"],
        ["你的云账户", "在你已批准的云边界内部署。", "数据流向和服务运行方式的记录。"],
        ["物理隔离的机房", "与外部完全不联网的环境。", "文件如何进入、如何更新、证据如何处理。"],
        ["现场设备", "在机器、传感器或工作人员身旁运行的模型。", "设备如何更新，每台设备上运行什么。"]
      ],
      evidenceTitle: "每个项目都会留下什么",
      evidenceBody: "让你的安全团队不必凭我们一句话，就能自行审查这项工作。",
      records: [
        ["约束登记表", "你在隐私、合规和部署上的约束，在工作开始前写下来。"],
        ["数据集卡片", "每个来源、每处改动、每项排除内容，以及保留多久。"],
        ["训练记录", "每次训练所用的基础模型、数据、适配器、运行时和设置。"],
        ["评估报告", "测试、结果、失败案例和已知局限。"],
        ["运维手册", "如何安装、访问、监控和回滚模型，以及由谁负责。"],
        ["变更日志", "每次发布中模型、数据、适配器或运行时的变化。"]
      ],
      ownershipTitle: "谁决定什么",
      ours: "我们提供",
      oursBody: "架构、访问路径、部署手册、评估证据、文档，以及对你内部审查的支持。",
      yours: "你和你的顾问负责",
      yoursBody: "使用数据的法律依据、政策审批、身份和用户管理、内部审计、认证和监管申报。",
      more: "延伸阅读",
      responsibleUse: "负责任的使用",
      securityReview: "安全审查"
    },
    operator: {
      title: "运营方",
      company: "公司",
      number: "法人编号",
      address: "登记地址",
      contact: "联系方式"
    },
    document: {
      contents: "目录",
      atGlance: "概览",
      fit: "适合",
      notFit: "不适合"
    },
    notFound: {
      title: "这一页已被覆盖重画。",
      body: "网站重建时，地址可能变了。首页是每条路的起点。",
      cta: "返回首页"
    }
  },

  earlierWork: {
    neuron: {
      eyebrow: "早期项目",
      title: "Neuron",
      description: "一款开源的 Nervos CKB 桌面钱包：在一个应用里持有资产、参与治理、使用 CKB 脚本。",
      exhibit: exhibit("neuron", "Neuron 产品页", "Neuron，截自产品官网。"),
      officialLink: { label: "访问 Neuron", href: "http://neuron.magickbase.com/" },
      sections: [
        {
          title: "它是什么",
          description: "一款桌面钱包，面向持有 CKB、希望在自己的机器上完全掌控私钥的人。",
          points: ["收发和持有 CKB 资产", "投票及其他治理活动", "使用 CKB 脚本", "开源，运行在桌面端"]
        },
        {
          title: "为谁而做",
          description: "Nervos 生态中需要一款可以自己检查、自己运行的参考钱包的持有者、开发者和团队。",
          points: []
        }
      ]
    },
    "1-tok": {
      eyebrow: "早期项目",
      title: "1-TOK",
      description: "一个 AI 智能体工作的交易市场：按智能体产出的 token 计量用量，付款随工作以流式结算。",
      exhibit: exhibit("1-tok", "1-TOK 产品页", "1-TOK，截自产品官网。"),
      statusTag: "产品实验",
      officialLink: { label: "访问 1-TOK", href: "http://1-tok.pro/" },
      sections: [
        {
          title: "它是什么",
          description: "一个向 AI 智能体下达任务、并按实际产出付费的地方。",
          points: ["提交智能体任务", "按输出 token 计量用量", "智能体边工作边流式返回结果", "每项工作都有结算记录"]
        },
        {
          title: "为谁而做",
          description: "希望按单位购买智能体工作、并清楚记录用了多少、付了多少的团队。",
          points: []
        }
      ]
    },
    "fiber-link": {
      eyebrow: "早期项目",
      title: "Fiber Link",
      description: "为社区平台提供打赏、创作者奖励、余额和提现，通过 CKB 的 Fiber Network 结算，成员无需处理任何链上操作。",
      exhibit: exhibit("fiber-link", "Fiber Link 产品页", "Fiber Link，截自产品官网。"),
      officialLink: { label: "访问 Fiber Link", href: "http://fiberlink.me/" },
      sections: [
        {
          title: "它是什么",
          description: "社区平台可以接入的一层结算，让成员轻点几下就能互相奖励。",
          points: ["成员之间打赏", "奖励创作者", "余额存放在平台上", "成员随时提现"]
        },
        {
          title: "为谁而做",
          description: "希望奖励像点赞一样简单的社区平台和创作者计划。",
          points: []
        }
      ]
    },
    "utxo-data": {
      eyebrow: "早期项目",
      title: "UTXO Data",
      description: "来自基于 UTXO 的区块链的索引数据，通过 API 和分析工具提供，用于监控、调查和产品开发。",
      exhibit: exhibit("utxo-data", "UTXO Data 产品页", "UTXO Data，截自产品官网。"),
      officialLink: { label: "打开 UTXO Data", href: "https://p.magickbase.com/" },
      sections: [
        {
          title: "它是什么",
          description: "一项数据服务，把原始链上活动整理成产品或分析师可以查询的记录。",
          points: ["索引后的链上活动", "API 访问", "分析工具", "供上层产品使用的数据"]
        },
        {
          title: "为谁而做",
          description: "需要监控链上活动、调查事件，或把链上数据接入自家产品的团队。",
          points: []
        }
      ]
    },
    "distributed-paradigm": {
      eyebrow: "早期项目",
      title: "Distributed Paradigm",
      description: "Kuai：一个在 CKB 上构建分布式应用的框架，应用由通过消息协作的 actor 组成。",
      exhibit: exhibit("distributed-paradigm", "Distributed Paradigm 产品页", "Distributed Paradigm，截自产品官网。"),
      officialLink: { label: "在 GitHub 查看 Kuai", href: "https://github.com/ckb-js/kuai" },
      sections: [
        {
          title: "它是什么",
          description: "一种组织分布式应用的方式：每个部分各自持有状态，并通过消息与其他部分沟通。",
          points: ["服务之间边界清晰", "通过消息传递协作", "在运行时层面提供结构", "开源框架 Kuai"]
        },
        {
          title: "为谁而做",
          description: "在 CKB 上构建应用、希望系统各部分职责更清晰的开发者。",
          points: []
        }
      ]
    }
  },

  legalDetails: {
    "responsible-use": {
      eyebrow: "负责任的使用",
      title: "在构建模型之前，先约定边界。",
      description: "每个项目都从一份简短的书面约定开始：模型可以从什么中学习、应该做和不应该做什么、你在哪些环节审查工作、由谁做决定。本页说明其中包含的内容。",
      primaryLink: { label: cta, href: "/contact" },
      secondaryLink: { label: "安全审查", href: "/legal/security-review" },
      outputsAtGlance: [
        { label: "材料", description: "可以使用什么、排除什么，以及结束时归还或删除什么。" },
        { label: "行为", description: "模型用来做什么、绝不能做什么、在哪里薄弱。" },
        { label: "审查节点", description: "工作继续推进之前，你在哪些环节检查。" },
        { label: "决策", description: "每项业务、专业和运营决定由谁负责。" },
        { label: "已知局限", description: "薄弱案例和未决问题，放在所有人都看得到的地方。" }
      ],
      sections: [
        {
          eyebrow: "材料",
          title: "模型可以从什么中学习",
          description: "你的任何材料用于训练、检索或测试之前，我们都会和你一起分类整理。",
          points: ["可以使用的来源", "排除或受限的材料", "副本及其衍生内容如何处理", "工作结束时归还或删除什么"]
        },
        {
          eyebrow: "行为",
          title: "模型应该做和不应该做什么",
          description: "我们从用途、限制和薄弱之处来描述模型。",
          points: ["它要完成的任务", "它绝不能产生的输出", "不适用的用途", "敏感或模糊的情形"]
        },
        {
          eyebrow: "审查",
          title: "你在哪里审查工作",
          description: "在工作交到你的员工手中之前，你会在四个节点进行检查。",
          points: ["训练开始前的数据集", "部署前的评估", "员工或客户使用前的样本输出", "启用新模型或新适配器"]
        },
        {
          eyebrow: "决策",
          title: "由谁决定",
          description: "工程由我们来做。业务、专业和政策上的决定由你和你的顾问做出。",
          points: ["Random Walk 提供工程支持", "使用方面的决定由你做出", "必要时引入顾问", "例外情况先书面记录，再继续工作"]
        },
        {
          eyebrow: "局限",
          title: "让局限始终可见",
          description: "薄弱案例和未决问题始终放在工作旁边，下一个接手的人一眼就能看到。",
          points: ["评估样例", "已知局限说明", "模型出错的样例", "未决问题和后续步骤"]
        },
        {
          eyebrow: "范围",
          title: "本页不是什么",
          description: "本页说明我们的工作方式。它不是法律意见、不是批准、不是通用的 AI 政策，也不承诺消除一切风险。",
          points: []
        }
      ],
      notice: "本页仅供参考，不能替代合同、政策或法律审查。",
      closing: {
        title: "部署之前，把边界写下来。",
        description: "如果每个人事先都同意模型可以用什么、可以做什么、由谁签字确认，模型就更容易被信任。",
        fit: ["你希望模型在使用和行为上有清晰的边界。", "你希望在部署前审查工作。", "你能指明每项最终决定由谁负责。"],
        notFit: ["你需要从本页获得法律或监管建议。", "你想使用未经任何人审查的材料。", "你希望工程取代你自己的判断。"],
        ctaTitle: cta,
        ctaDescription: "请带上涉及的材料类型、模型要做的事、你希望在哪里审查，以及由谁做决定。"
      }
    },
    "security-review": {
      eyebrow: "安全审查",
      title: "你的安全团队可以核查的证据。",
      description: "在模型进入你的环境上线之前，我们会准备好安全团队或顾问审查所需的材料：它在哪里运行、谁能访问、什么数据流向哪里、如何测试过。",
      primaryLink: { label: cta, href: "/contact" },
      secondaryLink: { label: "负责任的使用", href: "/legal/responsible-use" },
      outputsAtGlance: [
        { label: "在哪里运行", description: "所在的机器和网络、连接了什么、哪些不在范围内。" },
        { label: "谁能访问", description: "操作员、管理员、服务和支持人员的访问，以及各自的前提假设。" },
        { label: "什么在流动", description: "数据、模型、适配器、日志、输出和临时文件如何流转，止于何处。" },
        { label: "如何测试", description: "任务样例、已知局限、审查记录和未决问题。" },
        { label: "如何交接", description: "运维、回滚、归属，以及接下来会发生什么。" }
      ],
      sections: [
        {
          eyebrow: "范围",
          title: "审查覆盖什么",
          description: "我们先约定哪些系统、环境、访问和材料在范围内，以及你这边由谁负责审查。",
          points: ["运行环境", "运行时及其依赖", "数据和模型文件的边界", "你方的审查负责人"]
        },
        {
          eyebrow: "位置",
          title: "在哪里运行",
          description: "用平实的语言说明模型放在哪里、会接触到什么。",
          points: ["机器和运行环境", "相连的系统和数据流经的路径", "系统可能生成的临时材料", "不在本次合作范围内的部分"]
        },
        {
          eyebrow: "访问",
          title: "谁能访问",
          description: "谁能使用或更改系统，通过哪道门，基于什么前提。",
          points: ["操作员", "管理员", "其他服务", "支持和维护人员"]
        },
        {
          eyebrow: "流转",
          title: "什么在流动，什么被保留",
          description: "每一份副本在审查和交接之前都会记录在案。",
          points: ["数据集和检索索引", "模型、适配器和合并后的模型文件", "日志、提示词、输出、临时文件和缓存", "归还、删除或保留什么，保留多久"]
        },
        {
          eyebrow: "证据",
          title: "证据包",
          description: "审查材料随部署一起交付，日后不必再重新整理。",
          points: ["架构简报", "配置摘要", "评估样例和已知局限说明", "回滚说明和未决问题"]
        },
        {
          eyebrow: "交付之后",
          title: "保持可审查",
          description: "材料持续整理有序，交接之后很久，你的团队仍能查阅。",
          points: ["按任务整理的评估材料", "运行记录和交付决定", "例外情况说明", "持续跟进的待办事项"]
        },
        {
          eyebrow: "决策",
          title: "由谁决定",
          description: "我们准备工程证据。最终是否验收，由你和有资质的顾问决定。",
          points: []
        },
        {
          eyebrow: "范围",
          title: "本页不是什么",
          description: "本页说明我们准备的证据。它不是安全批准，不是法律或监管建议，不能替代你自己的审查，也不承诺消除风险。",
          points: []
        }
      ],
      notice: "我们为审查准备工程证据。最终的安全、法律、监管和运营验收，由你和你的顾问负责。",
      closing: {
        title: "部署之前，先准备好审查。",
        description: "如果先写清楚在哪里运行、谁能访问、什么在流动、如何测试，部署就更容易审查。",
        fit: ["你需要为安全审查准备工程证据。", "最终决定由你的团队或顾问做出。", "位置、访问、流转、保留和交接都需要写清楚。"],
        notFit: ["你需要从本页获得正式的安全批准。", "你希望我们取代你的内部审查。", "你想要不论范围如何都成立的笼统安全承诺。"],
        ctaTitle: cta,
        ctaDescription: "请带上运行位置、谁需要访问、哪些数据会流动、保留多久，以及由谁审查。"
      }
    }
  },

  work: [
    {
      slug: "mac-computer-use",
      kicker: "Model Train",
      title: "教模型使用 Mac",
      summary: "一份面向企业当下所用 Mac 软件的数据集，以及在其上训练的 Qwen3.5-9B 模型。",
      facts: [
        { label: "数据集", value: "450 个任务，15,854 个步骤" },
        { label: "基础模型", value: "Qwen3.5-9B" },
        { label: "动作得分", value: "0.33 → 0.77" }
      ],
      sections: [
        {
          title: "数据",
          body: [
            "我们把 macOS、视频剪辑、Blender 和 Godot 方面观看次数最多的 175 个教程，变成了 450 个任务：每一次点击、按键和拖动，连同原因和屏幕上的准确位置。",
            "标注由模型生成，并通过抽样审核。在对 1,015 个步骤的抽查中，约 90% 的点击落在正确目标上，约 70% 的操作完全正确。"
          ]
        },
        {
          title: "模型",
          body: [
            "我们选择 Qwen3.5-9B，是因为它能读懂屏幕，又能在单台 Mac 上运行；然后在这份数据集上训练了一个 LoRA 适配器。",
            "在一套固定的 477 步离线测试中，它的动作得分从 0.33 提高到 0.77。这是我们自己的离线测试，不是官方基准，其中一部分提升来自模型学会了答案格式。"
          ]
        },
        {
          title: "下一步",
          body: ["在真实任务上做实时评估：成功率、出错后的恢复和多余的操作都要计入，而不只是看下一步动作是否一致。"]
        }
      ]
    },
    {
      slug: "business-arenas",
      kicker: "展示",
      title: "账房里的模型",
      summary: "实时 3D 竞技场，模型在其中完成真实的办公工作，每一项都与基于规则的工具对比打分。",
      facts: [
        { label: "对账，规则引擎", value: "36" },
        { label: "对账，本地 27B 模型", value: "72" },
        { label: "对账，GPT-5.6-SOL", value: "84" }
      ],
      sections: [
        {
          title: "为什么做竞技场",
          body: [
            "基准分数对财务负责人来说意义不大。所以我们搭建了能看见工作的房间：银行流水和账簿两条纸带从天花板垂下，模型每配对一笔，就用一根金线缝在一起。",
            "每个竞技场都有真实的规则基线和精确的标准答案，所以分数不取决于个人喜好。"
          ]
        },
        {
          title: "如何运行",
          body: ["目前竞技场回放的是录制好的运行过程。很快，它们将直接在你的浏览器里运行模型。"]
        }
      ],
      table: {
        caption: "单次录制运行的得分",
        head: ["竞技场", "规则", "本地 27B", "GPT-5.6-SOL"],
        rows: [
          ["对账", "36", "72", "84"],
          ["数据精炼", "31%", "83%", "100%"],
          ["查询规划", "56", "63", "99"]
        ]
      }
    },
    {
      slug: "turnvector",
      kicker: "Token Plant",
      title: "多个模型，一台机器",
      summary: "TurnVector 让多个 AI 模型共用一台 Apple Silicon 机器，同时让每一段对话都保持流畅响应。",
      status: "开发中",
      facts: [
        { label: "状态", value: "开发中" },
        { label: "资格测试", value: "12 条通道，385 个用例" }
      ],
      sections: [
        {
          title: "问题",
          body: ["公司很少只运行一个模型。起草模型、检索模型、读屏模型都想用同一台 Mac，而有人正在等待的那个模型，不应该卡在一个长时间的批处理任务后面。"]
        },
        {
          title: "做法",
          body: [
            "TurnVector 给每个模型分配短而有界的轮次。交互式回答保持快速，机器在模型之间公平分配，吞吐量排在最后，绝不以牺牲前两者为代价。",
            "它用 Rust 编写，并通过一套独立的基准测试进行资格验证，共 12 条通道、385 个用例，缺失的功能绝不算作通过。"
          ]
        }
      ]
    },
    {
      slug: "sayit",
      kicker: "产品",
      title: "SayIt",
      summary: "语音输入，全程不离开你的 Mac。",
      facts: [{ label: "运行于", value: "Apple Silicon Mac" }],
      sections: [
        {
          title: "它做什么",
          body: ["SayIt 用本地模型把语音转成文字，实时显示预览，并直接粘贴到你正在使用的应用里。任何音频都不会发送到云端。"]
        }
      ]
    }
  ],

  examination: {
    lang: "zh",
    steps: [
      {
        index: "可见光",
        instrument: "可见光",
        setting: "400–700 nm",
        lens: "颜料中的文字",
        title: "模型是一层一层画成的。",
        body: "凑近看一幅古画，你会发现它是慢慢画成的：先起稿，再打底，然后一层层罩染。好的模型也是这样做出来的。Random Walk 是为成长型企业服务的 AI 实验室：我们选定合适的模型，构建数据，在值得时进行训练，并让它在你的云、机房或 Mac 上持续运行。"
      },
      {
        index: "下一个词",
        instrument: "词元图",
        setting: "一笔一个词",
        lens: "模型写下的词",
        kicker: "下一个词",
        title: "通用模型画出大意，你的模型画出细节。"
      },
      {
        index: "红外 · 数据",
        instrument: "红外反射成像",
        setting: "1,100–1,700 nm",
        lens: "我们数据集中的步骤",
        kicker: "一、数据",
        title: "颜料之下，是底稿。",
        body: "红外线能穿透颜料，找到最先画下的线条。模型之下，这些线条就是它的数据。我们的线条取自企业每天早上打开的软件；同一套工坊，也能在几天之内把你的文档、工单和屏幕录像变成训练数据。",
        receive: "你会收到一份数据集卡片，列明每个来源、每项排除内容和经过审核的错误率。"
      },
      {
        index: "X 射线 · 基础模型",
        instrument: "X 射线成像",
        setting: "40 kV, 10 mA",
        lens: "基础模型读过的内容",
        kicker: "二、基础模型",
        title: "底稿之下，还有一幅更早的画。",
        body: "X 射线常常在一幅画下面发现另一幅画。模型也是这样做成的：画在别人训练好的开源基础模型之上。我们根据你的任务、语言和硬件选择这层底子，只在你的领域真正需要的地方覆盖重画。",
        receive: "你会收到基础模型的许可证、训练运行记录及其日志。"
      },
      {
        index: "侧光 · 评估",
        instrument: "侧光",
        setting: "左侧 8°",
        lens: "它必须通过的测试",
        kicker: "三、训练与评估",
        title: "从侧面打光，每一笔都无处可藏。",
        body: "我们用你的员工真正在做的工作来训练，并在交付之前与你约定一套测试。每次发布都要拿来对照，旁边放着基础模型和一个简单的规则工具。",
        receive: "你会收到模型权重，以及一份可以重新运行的评估报告。"
      },
      {
        index: "紫外 · 维护",
        instrument: "紫外荧光",
        setting: "365 nm",
        lens: "发布记录",
        kicker: "四、部署与维护",
        title: "紫外光照出每一次后来的修补。",
        body: "我们把模型部署在你的数据已经在的地方：用 vLLM 部署在你的云或机房，或用 Melix 部署在你的 Mac 上。之后我们持续观察模型，用新材料重新训练，并为每次发布签字。",
        receive: "你会收到带版本号的模型、运维手册和变更日志。"
      }
    ],
    domainLabels: ["合同", "客服", "财务"],
    corpora: {
      visible: [
        "Random Walk 是为成长型企业服务的 AI 实验室。我们选定合适的模型，构建数据，在值得时训练，并让它持续运行。",
        "根据我们的标准经销协议，赔偿责任的上限为索赔前十二个月内已支付的费用。",
        "主轴运行 600 小时后振动超过 4.5 mm/s，通常说明驱动侧轴承磨损。",
        "請求書の支払期限は受領後六十日以内とする。",
        "Studio 套餐的客户报告同步错误时，应先重置工作区令牌。",
        "Under our standard distributor agreement, liability is capped at twelve months' fees.",
        "来自日本经销商的发票，自交货当月月末起六十天内结算。",
        "보증 기간은 인수일로부터 24개월이다.",
        "每次发布，都要对照交付前约定的测试。",
        "部署在它必须运行的地方：你的云、你的机房或你的 Mac。"
      ],
      xray: [
        "该地区的历史可以追溯到沿河最早的定居点。",
        "在数学中，质数是大于一、且除了一和它本身以外没有其他因数的自然数。",
        "这道菜谱需要两杯面粉、一撮盐和一点耐心。",
        "光合作用把光能转化为化学能。",
        "比赛在加时赛后以平局告终。",
        "许多语言都会向邻近的语言借词。",
        "博物馆在长时间修复后重新开放。",
        "预计周末北方各地将有降雨。"
      ],
      raking: [
        "固定离线测试，477 步：训练前动作得分 0.326，训练后 0.770。",
        "对账竞技场，一个月的记录：规则引擎 36，本地 27B 模型 72，GPT-5.6-SOL 84。",
        "数据精炼竞技场：规则引擎清理出 31% 的记录，本地 27B 为 83%，GPT-5.6-SOL 为 100%。",
        "抽查 1,015 步：点击命中目标约 90%，整个操作完全正确约 70%。",
        "测试：打开夜览排程。预期点击位置约为 (0.65, 0.44)。通过",
        "测试：在 Godot 的“附加脚本”对话框中创建脚本。预期点击“创建”按钮。通过"
      ],
      ultraviolet: [
        "v1 · 2026 年 9 月 23 日 · 两个主题共 1,616 步",
        "v1.1 · 2026 年 9 月 24 日 · 留出的开发集",
        "v2 · 2026 年 9 月 25 日 · 15,854 步；新增 Blender 和 Godot",
        "v2.1 · 2026 年 9 月 25 日 · 审核后发布",
        "用 vLLM 部署在客户自己的云中，或用 Melix 部署在 Mac 上",
        "监控、用新材料重新训练，每次发布都附变更日志"
      ]
    },
    marks: {
      boxes: ["窗户", "采光孔", "人物", "账簿", "阳光"],
      xray: ["更早的画：开源基础模型", "你的一层：继续预训练"],
      raking: ["点击命中：约 90%", "动作得分 0.33 → 0.77", "对账：规则 36，27B 72，GPT-5.6-SOL 84"],
      spots: ["v1 · 2026-09-23 · 1,616 步", "v1.1 · 09-24 · 开发集", "v2 · 09-25 · 15,854 步", "v2.1 · 09-25 · 已审核"]
    },
    lexicon: {
      alternatives: {
        "模型": [["模型", 0.58], ["系统", 0.17], ["工具", 0.09]],
        "发布": [["发布", 0.61], ["版本", 0.2], ["更新", 0.08]],
        "数据": [["数据", 0.55], ["记录", 0.18], ["文件", 0.12]]
      },
      pool: ["的", "一个", "你的", "模型", "合同", "发布", "数据", "条款", "字段", "团队", "报告", "来源", "期限", "设备", "记录", "步骤"],
      fallback: ["它", "这"]
    },
    ui: {
      subject: "示例主题",
      model: "由哪个模型来写",
      base: "基础模型",
      trained: "用你的数据训练",
      light: "光源",
      setting: "参数",
      lens: "透镜",
      lensValue: "透镜：{lens}",
      position: "位置",
      layers: "画作的各层",
      tip: "下一个词的概率"
    }
  }
};

import type { Locale } from "./i18n";

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

type LegalContent = {
  privacy: Record<Locale, LegalPageContent>;
  terms: Record<Locale, LegalPageContent>;
};

export const legalContent: LegalContent = {
  privacy: {
    en: {
      eyebrow: "Privacy",
      title: "Privacy policy",
      description: "How Random Walk handles what you send us through this website, from the first inquiry to the start of a project.",
      sections: [
        {
          heading: "Effective date",
          body: ["This policy took effect on 18 May 2026 and was last updated on 28 September 2026. It explains how Random Walk株式会社 collects, uses and protects the information you send through this website."]
        },
        {
          heading: "What this policy covers",
          body: ["It covers this website, its contact and visit forms, and the business conversations that follow an inquiry. Project systems, support channels, repositories and deployments inside your own environment are covered by separate written agreements."]
        },
        {
          heading: "What we collect",
          body: ["An inquiry may include your name, work email, company and role; the industry, use case and deployment target; the sensitivity of the data involved and whether an air-gapped setup or an on-site visit is needed; your timeline, support preference and compliance constraints; your message; whether you consented; and the language, page and campaign you came from.", "A request to visit our office adds your phone number and the date and time you choose.", "The form has no file upload and is not meant for confidential files, source code, customer records, patent drafts, privileged legal material, private keys or trade secrets."]
        },
        {
          heading: "How we use it",
          body: ["We use it to understand what you need, pass it to the right person, judge whether we can help, arrange a follow-up, prepare a first technical conversation, improve how the website explains our work and keep ordinary business records.", "We do not sell personal information."]
        },
        {
          heading: "Keep the first message general",
          body: ["Please describe the kinds of data, the constraints, where the model has to run and how you review work, without the material itself. If sensitive material is needed later, we will agree a suitable way to share it with you before anything is sent."]
        },
        {
          heading: "Who else may see it",
          body: ["We use service providers to run the website, process forms, host email, schedule meetings and support our operations. They may process your information only to provide that service.", "We may disclose information when the law requires it, to protect rights and security, or in the course of running the company."]
        },
        {
          heading: "Processing outside your country",
          body: ["Our website, email and form providers may operate in several regions, so your information may be processed outside the country you sent it from. We protect it with reasonable administrative and technical measures suited to what it is."]
        },
        {
          heading: "How long we keep it",
          body: ["We keep inquiry information as long as we need it to reply, keep business records, meet legal and operational requirements and understand our history with you. How long depends on the channel and the project."]
        },
        {
          heading: "Security",
          body: ["We protect inquiry information with reasonable technical and organizational safeguards. No transmission or storage over the internet is perfectly secure, and this policy is not a guarantee of security or a certification."]
        },
        {
          heading: "Project material",
          body: ["Our work may involve your environments, datasets, models, adapters, evaluation reports and runbooks. None of that is collected through the website's forms unless we agree otherwise in writing."]
        },
        {
          heading: "Your choices and changes to this policy",
          body: ["You can ask us to correct, delete or show you your inquiry information where the law allows. We may update this policy as the website, the business or the law changes."]
        },
        {
          heading: "Children and contact",
          body: ["This website is for businesses and is not directed at children. Questions about this policy can be sent to privacy@random-walk.co.jp."]
        }
      ]
    },
    zh: {
      eyebrow: "隐私",
      title: "隐私政策",
      description: "Random Walk 如何处理你通过本网站发送给我们的信息，从第一次咨询到项目开始。",
      sections: [
        { heading: "生效日期", body: ["本政策自 2026 年 5 月 18 日起生效，最近更新于 2026 年 9 月 28 日。它说明 Random Walk株式会社如何收集、使用和保护你通过本网站发送的信息。"] },
        { heading: "本政策的适用范围", body: ["本政策适用于本网站、网站上的联系表单和到访预约表单，以及咨询之后的业务沟通。项目系统、支持渠道、代码仓库以及部署在你自己环境中的系统，另由单独的书面协议约定。"] },
        { heading: "我们收集什么", body: ["一次咨询可能包含：你的姓名、工作邮箱、公司和职位；所在行业、使用场景和部署目标；所涉及数据的敏感程度，以及是否需要物理隔离环境或现场到访；你的时间安排、支持偏好和合规约束；你的留言；你是否同意；以及你来自的语言、页面和推广活动。", "到访办公室的预约还会包含你的电话号码，以及你选择的日期和时间。", "表单不支持上传文件，也不用于提交机密文件、源代码、客户记录、专利草稿、受特权保护的法律材料、私钥或商业秘密。"] },
        { heading: "我们如何使用", body: ["我们用这些信息来了解你的需求、转交给合适的人、判断我们能否提供帮助、安排后续沟通、准备第一次技术交流、改进网站对我们工作的说明，以及保存正常的业务记录。", "我们不出售个人信息。"] },
        { heading: "第一条消息请保持概括", body: ["请描述数据的类型、约束条件、模型需要在哪里运行，以及你如何审查工作，但不要附上材料本身。如果之后确实需要敏感材料，我们会在发送任何内容之前，与你约定合适的共享方式。"] },
        { heading: "还有谁可能看到", body: ["我们使用服务提供商来运营网站、处理表单、托管邮件、安排会议和支持日常运营。他们只能为提供相应服务而处理你的信息。", "在法律要求时、为保护权利和安全，或在公司正常经营过程中，我们可能会披露信息。"] },
        { heading: "在你所在国家以外处理", body: ["我们的网站、邮件和表单服务商可能在多个地区运营，因此你的信息可能会在你发送信息所在的国家以外被处理。我们会根据信息的性质，采取合理的管理和技术措施加以保护。"] },
        { heading: "我们保留多久", body: ["我们保留咨询信息的时间，以回复你、保存业务记录、满足法律和运营要求，以及了解与你的往来历史所需为限。具体期限取决于沟通渠道和项目。"] },
        { heading: "安全", body: ["我们以合理的技术和组织措施保护咨询信息。任何通过互联网进行的传输或存储都不是绝对安全的，本政策也不构成安全保证或认证。"] },
        { heading: "项目材料", body: ["我们的工作可能涉及你的环境、数据集、模型、适配器、评估报告和运维手册。除非另有书面约定，这些都不会通过网站表单收集。"] },
        { heading: "你的选择与本政策的变更", body: ["在法律允许的范围内，你可以要求我们更正、删除或向你出示你的咨询信息。随着网站、业务或法律的变化，我们可能会更新本政策。"] },
        { heading: "未成年人与联系方式", body: ["本网站面向企业，并非针对未成年人。关于本政策的问题，请发送至 privacy@random-walk.co.jp。"] }
      ]
    },
    ja: {
      eyebrow: "プライバシー",
      title: "プライバシーポリシー",
      description: "このウェブサイトを通じてお送りいただいた情報を、最初のお問い合わせからプロジェクトの開始まで、Random Walk がどのように取り扱うかを説明します。",
      sections: [
        { heading: "施行日", body: ["本ポリシーは 2026年5月18日に施行し、2026年9月28日に最終更新しました。Random Walk株式会社が、このウェブサイトを通じてお送りいただいた情報をどのように収集、利用、保護するかを説明します。"] },
        { heading: "本ポリシーの対象", body: ["本ポリシーは、このウェブサイト、サイト上のお問い合わせフォームと訪問予約フォーム、およびお問い合わせに続く業務上のやり取りを対象とします。プロジェクトのシステム、サポート窓口、リポジトリ、御社の環境内でのデプロイについては、別途の書面による契約で定めます。"] },
        { heading: "収集する情報", body: ["お問い合わせには、氏名、勤務先のメールアドレス、会社名と役職、業種、用途、デプロイ先、扱うデータの機密性とエアギャップ環境や現地訪問の要否、スケジュール、サポートのご希望、コンプライアンス上の制約、メッセージ、同意の有無、そしてアクセス元の言語、ページ、キャンペーンが含まれる場合があります。", "オフィス訪問のご予約では、これに加えて電話番号と、選択された日時をお預かりします。", "フォームにはファイルのアップロード機能がなく、機密ファイル、ソースコード、顧客記録、特許の草案、秘匿特権のある法律資料、秘密鍵、営業秘密を送るためのものではありません。"] },
        { heading: "利用目的", body: ["ご要望を理解する、適切な担当者に引き継ぐ、お手伝いできるかを判断する、フォローアップを手配する、最初の技術的な打ち合わせを準備する、ウェブサイトでの説明を改善する、通常の業務記録を残す、といった目的で利用します。", "個人情報を販売することはありません。"] },
        { heading: "最初のメッセージは概要にとどめてください", body: ["データの種類、制約、モデルを動かす場所、作業の確認方法を、資料そのものは添えずにお書きください。後から機微な資料が必要になった場合は、何かをお送りいただく前に、適切な共有方法を御社と取り決めます。"] },
        { heading: "第三者による取り扱い", body: ["ウェブサイトの運営、フォームの処理、メールのホスティング、会議の日程調整、業務の支援のために、サービス提供者を利用しています。提供者は、そのサービスを提供する目的に限って情報を取り扱います。", "法令で求められる場合、権利と安全を守るため、または会社の運営上必要な場合に、情報を開示することがあります。"] },
        { heading: "国外での取り扱い", body: ["ウェブサイト、メール、フォームの提供者は複数の地域で運営されている場合があり、お送りいただいた国の外で情報が処理されることがあります。情報の性質に応じた合理的な管理上・技術上の措置で保護します。"] },
        { heading: "保管期間", body: ["お問い合わせの情報は、ご返信、業務記録の保管、法令上・運営上の要件への対応、御社とのやり取りの経緯の把握に必要な期間保管します。期間は窓口とプロジェクトによって異なります。"] },
        { heading: "セキュリティ", body: ["お問い合わせの情報は、合理的な技術的・組織的安全管理措置によって保護します。インターネット上の送信や保存に完全な安全はなく、本ポリシーはセキュリティの保証や認証ではありません。"] },
        { heading: "プロジェクトの資料", body: ["私たちの仕事では、御社の環境、データセット、モデル、アダプター、評価レポート、運用手順書を扱うことがあります。書面で別途合意しない限り、それらをウェブサイトのフォームで収集することはありません。"] },
        { heading: "ご本人の選択と本ポリシーの変更", body: ["法令で認められる範囲で、お問い合わせ情報の訂正、削除、開示を求めることができます。ウェブサイト、事業、法令の変化に応じて、本ポリシーを改定することがあります。"] },
        { heading: "未成年の方と連絡先", body: ["このウェブサイトは企業向けであり、未成年の方を対象としていません。本ポリシーに関するご質問は privacy@random-walk.co.jp までお送りください。"] }
      ]
    },
    ko: {
      eyebrow: "개인정보",
      title: "개인정보처리방침",
      description: "이 웹사이트를 통해 보내 주신 정보를 첫 문의부터 프로젝트 시작까지 Random Walk가 어떻게 다루는지 설명합니다.",
      sections: [
        { heading: "시행일", body: ["이 방침은 2026년 5월 18일부터 시행되었으며 2026년 9월 28일에 마지막으로 개정되었습니다. Random Walk株式会社가 이 웹사이트를 통해 보내 주신 정보를 어떻게 수집, 이용, 보호하는지 설명합니다."] },
        { heading: "적용 범위", body: ["이 방침은 이 웹사이트, 웹사이트의 문의 양식과 방문 예약 양식, 그리고 문의 이후의 업무상 대화에 적용됩니다. 프로젝트 시스템, 지원 채널, 저장소, 귀사 환경 안의 배포는 별도의 서면 계약으로 정합니다."] },
        { heading: "수집하는 정보", body: ["문의에는 이름, 업무용 이메일, 회사와 직책, 업종, 사용 사례, 배포 대상, 관련 데이터의 민감도와 망분리 환경 또는 현장 방문 필요 여부, 일정, 지원 방식 선호, 컴플라이언스 제약, 메시지, 동의 여부, 그리고 접속한 언어, 페이지, 캠페인이 포함될 수 있습니다.", "사무실 방문 예약에는 전화번호와 선택하신 날짜와 시간이 추가됩니다.", "양식에는 파일 업로드 기능이 없으며, 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 비밀유지특권이 있는 법률 자료, 개인 키, 영업 비밀을 보내기 위한 것이 아닙니다."] },
        { heading: "이용 목적", body: ["필요한 것을 이해하고, 알맞은 담당자에게 전달하고, 도울 수 있는지 판단하고, 후속 연락을 잡고, 첫 기술 미팅을 준비하고, 웹사이트가 저희 일을 설명하는 방식을 개선하고, 일반적인 업무 기록을 남기는 데 씁니다.", "개인정보를 판매하지 않습니다."] },
        { heading: "첫 메시지는 개괄적으로 적어 주세요", body: ["자료 자체는 빼고, 데이터의 종류, 제약 조건, 모델이 돌아가야 할 곳, 작업을 검토하는 방식을 설명해 주세요. 나중에 민감한 자료가 필요하면, 무엇이든 보내시기 전에 알맞은 공유 방법을 귀사와 합의합니다."] },
        { heading: "정보를 볼 수 있는 다른 주체", body: ["웹사이트 운영, 양식 처리, 이메일 호스팅, 미팅 일정 관리, 업무 지원을 위해 서비스 제공자를 이용합니다. 이들은 해당 서비스를 제공하기 위해서만 정보를 처리할 수 있습니다.", "법이 요구하는 경우, 권리와 보안을 보호하기 위해, 또는 회사 운영 과정에서 정보를 공개할 수 있습니다."] },
        { heading: "국외에서의 처리", body: ["웹사이트, 이메일, 양식 제공자는 여러 지역에서 운영될 수 있으므로, 정보를 보내신 국가 밖에서 처리될 수 있습니다. 정보의 성격에 맞는 합리적인 관리적, 기술적 조치로 보호합니다."] },
        { heading: "보관 기간", body: ["문의 정보는 답장, 업무 기록 보관, 법적·운영상 요건 충족, 귀사와의 이력 파악에 필요한 기간 동안 보관합니다. 기간은 채널과 프로젝트에 따라 다릅니다."] },
        { heading: "보안", body: ["문의 정보는 합리적인 기술적, 조직적 보호 조치로 보호합니다. 인터넷을 통한 전송이나 저장은 완벽하게 안전하지 않으며, 이 방침은 보안 보장이나 인증이 아닙니다."] },
        { heading: "프로젝트 자료", body: ["저희 작업에는 귀사의 환경, 데이터셋, 모델, 어댑터, 평가 보고서, 운영 매뉴얼이 관련될 수 있습니다. 서면으로 달리 합의하지 않는 한, 이것들은 웹사이트 양식으로 수집하지 않습니다."] },
        { heading: "선택권과 방침의 변경", body: ["법이 허용하는 범위에서 문의 정보의 정정, 삭제, 열람을 요청할 수 있습니다. 웹사이트, 사업, 법의 변화에 따라 이 방침을 개정할 수 있습니다."] },
        { heading: "아동과 연락처", body: ["이 웹사이트는 기업을 위한 것이며 아동을 대상으로 하지 않습니다. 이 방침에 관한 질문은 privacy@random-walk.co.jp로 보내 주세요."] }
      ]
    }
  },
  terms: {
    en: {
      eyebrow: "Terms",
      title: "Terms of service",
      description: "Terms for using this website, its materials and its inquiry forms.",
      sections: [
        { heading: "Effective date", body: ["These terms took effect on 18 May 2026 and were last updated on 28 September 2026. They govern your use of the Random Walk website and its public materials."] },
        { heading: "What the website offers", body: ["The website describes Random Walk株式会社 and its work as an AI lab: choosing and fitting models, building datasets, training, deployment on your own machines and upkeep. It also describes Melix, our open-source tooling, and our earlier projects."] },
        { heading: "Information only", body: ["The materials on this website are for general information. They do not create an advisory relationship or a service engagement, and they are not a legal opinion, a security or compliance certification, or a promise of any outcome."] },
        { heading: "Do not send confidential material", body: ["The forms are for a first conversation only. Do not send confidential files, source code, customer records, patent drafts, privileged legal material, private keys, credentials or trade secrets through this website.", "If a project needs sensitive material, we will agree how to share it, and on what written terms, before anything is sent."] },
        { heading: "Projects are governed by separate agreements", body: ["Paid services, deployments, support, licenses, data handling, model delivery and work inside your environment are governed by separate written agreements. These terms do not replace them."] },
        { heading: "Open-source projects", body: ["References to Melix and other open-source projects are for information. Each repository is governed by its own license, notices and contribution rules."] },
        { heading: "Intellectual property", body: ["Unless stated otherwise, the text, design, paintings, graphics and brand assets on this website belong to Random Walk or its licensors. Do not copy, change or reuse them in a way that suggests our endorsement, a partnership or a client relationship without our permission."] },
        { heading: "What you may not do", body: ["Do not misuse the website, interfere with how it works, try to gain unauthorized access, submit harmful content, scrape it at unreasonable volume or use it to send unlawful, confidential or infringing material."] },
        { heading: "Links to other websites", body: ["The website links to other sites, repositories, tools and services. We are not responsible for their content, availability, policies or security."] },
        { heading: "Disclaimers and liability", body: ["The website is provided as it is and as available. To the extent the law allows, Random Walk disclaims implied warranties and is not liable for indirect, incidental, special, consequential or punitive damages arising from your use of the website."] },
        { heading: "Governing law and changes", body: ["These terms are maintained by Random Walk株式会社 in Japan. Mandatory laws where you are may also apply. We may update these terms as the website, our services or the law changes."] },
        { heading: "Contact", body: ["Questions about these terms can be sent to legal@random-walk.co.jp."] }
      ]
    },
    zh: {
      eyebrow: "条款",
      title: "服务条款",
      description: "使用本网站、网站材料和咨询表单的条款。",
      sections: [
        { heading: "生效日期", body: ["本条款自 2026 年 5 月 18 日起生效，最近更新于 2026 年 9 月 28 日。本条款适用于你对 Random Walk 网站及其公开材料的使用。"] },
        { heading: "网站提供的内容", body: ["本网站介绍 Random Walk株式会社及其作为 AI 实验室的工作：选择和适配模型、构建数据集、训练、在你自己的机器上部署以及后续维护。网站也介绍我们的开源工具 Melix 和我们的早期项目。"] },
        { heading: "仅供参考", body: ["本网站上的材料仅供一般参考。它们不构成咨询关系或服务合作，也不是法律意见、安全或合规认证，或对任何结果的承诺。"] },
        { heading: "请勿发送机密材料", body: ["表单仅用于初次沟通。请不要通过本网站发送机密文件、源代码、客户记录、专利草稿、受特权保护的法律材料、私钥、凭据或商业秘密。", "如果项目需要敏感材料，我们会在发送任何内容之前，约定共享方式及相应的书面条款。"] },
        { heading: "项目受单独协议约束", body: ["付费服务、部署、支持、许可、数据处理、模型交付以及在你环境中进行的工作，均受单独的书面协议约束。本条款不替代这些协议。"] },
        { heading: "开源项目", body: ["对 Melix 及其他开源项目的介绍仅供参考。每个代码仓库均受其自身的许可证、声明和贡献规则约束。"] },
        { heading: "知识产权", body: ["除另有说明外，本网站上的文字、设计、画作、图形和品牌资产归 Random Walk 或其许可方所有。未经我们许可，不得以暗示我们认可、合作或客户关系的方式复制、修改或再使用。"] },
        { heading: "禁止行为", body: ["不得滥用本网站、干扰其运行、试图未经授权访问、提交有害内容、以不合理的规模抓取，或利用本网站发送违法、机密或侵权的材料。"] },
        { heading: "指向其他网站的链接", body: ["本网站链接到其他网站、代码仓库、工具和服务。我们不对它们的内容、可用性、政策或安全负责。"] },
        { heading: "免责声明与责任", body: ["本网站按现状和可用状态提供。在法律允许的范围内，Random Walk 不作任何默示保证，也不对因你使用本网站而产生的间接、附带、特殊、后果性或惩罚性损害承担责任。"] },
        { heading: "适用法律与变更", body: ["本条款由位于日本的 Random Walk株式会社维护。你所在地的强制性法律也可能适用。随着网站、我们的服务或法律的变化，我们可能会更新本条款。"] },
        { heading: "联系方式", body: ["关于本条款的问题，请发送至 legal@random-walk.co.jp。"] }
      ]
    },
    ja: {
      eyebrow: "規約",
      title: "利用規約",
      description: "このウェブサイト、その資料、お問い合わせフォームの利用に関する規約です。",
      sections: [
        { heading: "施行日", body: ["本規約は 2026年5月18日に施行し、2026年9月28日に最終更新しました。Random Walk のウェブサイトとその公開資料のご利用に適用されます。"] },
        { heading: "ウェブサイトの内容", body: ["このウェブサイトでは、Random Walk株式会社と、AI ラボとしての仕事を紹介しています。モデルの選定と調整、データセットの構築、学習、御社のマシンへのデプロイ、保守です。オープンソースのツール Melix と、過去のプロダクトも紹介しています。"] },
        { heading: "情報提供のみ", body: ["このウェブサイトの資料は一般的な情報提供を目的としています。助言関係やサービス契約を生じさせるものではなく、法的意見、セキュリティやコンプライアンスの認証、何らかの結果の約束でもありません。"] },
        { heading: "機密資料を送らないでください", body: ["フォームは最初のご相談のためだけのものです。機密ファイル、ソースコード、顧客記録、特許の草案、秘匿特権のある法律資料、秘密鍵、認証情報、営業秘密を、このウェブサイトから送らないでください。", "プロジェクトで機微な資料が必要な場合は、何かをお送りいただく前に、共有方法とその書面上の条件を取り決めます。"] },
        { heading: "プロジェクトは別途の契約による", body: ["有償サービス、デプロイ、サポート、ライセンス、データの取り扱い、モデルの納品、御社の環境内での作業は、別途の書面による契約で定めます。本規約はそれらに代わるものではありません。"] },
        { heading: "オープンソースプロジェクト", body: ["Melix その他のオープンソースプロジェクトへの言及は情報提供を目的としています。各リポジトリには、それぞれのライセンス、表示、コントリビューションのルールが適用されます。"] },
        { heading: "知的財産", body: ["別段の表示がない限り、このウェブサイトの文章、デザイン、絵画、図版、ブランド資産は Random Walk またはそのライセンサーに帰属します。私たちの許可なく、推奨、提携、取引関係を示唆するような形で複製、改変、再利用しないでください。"] },
        { heading: "禁止事項", body: ["ウェブサイトの不正利用、運用の妨害、不正アクセスの試み、有害なコンテンツの送信、過度な規模でのスクレイピング、違法・機密・権利侵害にあたる資料の送信は禁止します。"] },
        { heading: "外部サイトへのリンク", body: ["このウェブサイトは、ほかのサイト、リポジトリ、ツール、サービスにリンクしています。それらの内容、可用性、ポリシー、セキュリティについて、私たちは責任を負いません。"] },
        { heading: "免責と責任の制限", body: ["このウェブサイトは現状有姿かつ提供可能な範囲で提供されます。法令で認められる範囲で、Random Walk は黙示の保証を否認し、ウェブサイトの利用から生じる間接的、付随的、特別、結果的または懲罰的な損害について責任を負いません。"] },
        { heading: "準拠法と変更", body: ["本規約は、日本の Random Walk株式会社が管理しています。ご利用者の所在地の強行法規が適用される場合もあります。ウェブサイト、サービス、法令の変化に応じて、本規約を改定することがあります。"] },
        { heading: "お問い合わせ", body: ["本規約に関するご質問は legal@random-walk.co.jp までお送りください。"] }
      ]
    },
    ko: {
      eyebrow: "약관",
      title: "이용약관",
      description: "이 웹사이트와 자료, 문의 양식의 이용에 관한 약관입니다.",
      sections: [
        { heading: "시행일", body: ["이 약관은 2026년 5월 18일부터 시행되었으며 2026년 9월 28일에 마지막으로 개정되었습니다. Random Walk 웹사이트와 공개 자료의 이용에 적용됩니다."] },
        { heading: "웹사이트가 제공하는 것", body: ["이 웹사이트는 Random Walk株式会社와 AI 랩으로서의 작업을 소개합니다. 모델 선택과 맞춤, 데이터셋 구축, 학습, 귀사 장비로의 배포, 유지 관리입니다. 저희의 오픈 소스 도구 Melix와 이전 프로젝트도 소개합니다."] },
        { heading: "정보 제공용", body: ["이 웹사이트의 자료는 일반적인 정보 제공용입니다. 자문 관계나 서비스 계약을 만들지 않으며, 법률 의견, 보안 또는 컴플라이언스 인증, 어떤 결과에 대한 약속도 아닙니다."] },
        { heading: "기밀 자료를 보내지 마세요", body: ["양식은 첫 대화만을 위한 것입니다. 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 비밀유지특권이 있는 법률 자료, 개인 키, 자격 증명, 영업 비밀을 이 웹사이트로 보내지 마세요.", "프로젝트에 민감한 자료가 필요하면, 무엇이든 보내시기 전에 공유 방법과 그에 관한 서면 조건을 합의합니다."] },
        { heading: "프로젝트는 별도 계약을 따릅니다", body: ["유료 서비스, 배포, 지원, 라이선스, 데이터 처리, 모델 납품, 귀사 환경 안에서의 작업은 별도의 서면 계약을 따릅니다. 이 약관은 그것을 대신하지 않습니다."] },
        { heading: "오픈 소스 프로젝트", body: ["Melix와 기타 오픈 소스 프로젝트에 관한 언급은 정보 제공용입니다. 각 저장소에는 고유한 라이선스, 고지, 기여 규칙이 적용됩니다."] },
        { heading: "지식재산", body: ["달리 명시하지 않는 한, 이 웹사이트의 글, 디자인, 그림, 그래픽, 브랜드 자산은 Random Walk 또는 그 라이선스 제공자에게 속합니다. 저희의 허락 없이 보증, 제휴, 고객 관계를 암시하는 방식으로 복제, 변경, 재사용하지 마세요."] },
        { heading: "금지 행위", body: ["웹사이트를 오용하거나, 작동을 방해하거나, 무단 접근을 시도하거나, 유해한 콘텐츠를 제출하거나, 과도한 규모로 수집하거나, 불법·기밀·권리 침해 자료를 보내는 데 사용하지 마세요."] },
        { heading: "다른 웹사이트로의 링크", body: ["이 웹사이트는 다른 사이트, 저장소, 도구, 서비스로 연결됩니다. 저희는 그 내용, 가용성, 정책, 보안에 책임을 지지 않습니다."] },
        { heading: "면책과 책임", body: ["이 웹사이트는 있는 그대로, 제공 가능한 상태로 제공됩니다. 법이 허용하는 범위에서 Random Walk는 묵시적 보증을 부인하며, 웹사이트 이용으로 생기는 간접적, 부수적, 특별, 결과적, 징벌적 손해에 책임을 지지 않습니다."] },
        { heading: "준거법과 변경", body: ["이 약관은 일본의 Random Walk株式会社가 관리합니다. 이용자가 있는 곳의 강행 법규도 적용될 수 있습니다. 웹사이트, 서비스, 법의 변화에 따라 이 약관을 개정할 수 있습니다."] },
        { heading: "연락처", body: ["이 약관에 관한 질문은 legal@random-walk.co.jp로 보내 주세요."] }
      ]
    }
  }
};

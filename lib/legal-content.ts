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
      eyebrow: "Privacy Policy",
      title: "Random Walk Privacy Policy",
      description: "How Random Walk handles website inquiries and first-contact lead intake for private AI infrastructure work.",
      sections: [
        {
          heading: "Effective date",
          body: ["This Privacy Policy is effective May 18, 2026. It explains how Random Walk 株式会社 collects, uses, and protects information submitted through this website."]
        },
        {
          heading: "Scope",
          body: ["This policy applies to the public Random Walk website, contact forms, and related business inquiry workflows. Project-specific systems, support channels, repositories, or customer-controlled deployments may be governed by separate written agreements."]
        },
        {
          heading: "Information we collect",
          body: ["A contact inquiry may include name, work email, company, role, industry, use case, deployment target, data sensitivity category, air-gapped requirement, on-site introduction preference, timeline, support preference, compliance constraints, message content, consent status, locale, page origin, and UTM source.", "The first-contact form does not include a file upload field and is not intended for confidential files, source code, customer records, patent drafts, legally privileged material, private keys, or trade secrets."]
        },
        {
          heading: "How we use information",
          body: ["We use inquiry information to understand the requested workflow, route the request, assess whether Random Walk can help, schedule follow-up, prepare a technical scoping conversation, improve website communication, and maintain ordinary business records.", "We do not sell personal information."]
        },
        {
          heading: "Contact-form confidentiality",
          body: ["Please describe categories, constraints, deployment boundaries, and review requirements only. If sensitive material is needed later, Random Walk and the customer will agree on an appropriate review channel before anything is shared."]
        },
        {
          heading: "Sharing and processors",
          body: ["We may share inquiry information with service providers that help operate the website, process forms, host email, manage scheduling, or support business operations. These providers are expected to process information only for the relevant service purpose.", "We may disclose information when required by law, to protect rights and security, or in connection with corporate administration."]
        },
        {
          heading: "International transfer",
          body: ["Because website, email, and form infrastructure may operate across regions, inquiry information may be processed outside the country where it was submitted. We use reasonable administrative and technical measures appropriate to the nature of the information."]
        },
        {
          heading: "Retention",
          body: ["We retain inquiry information for as long as needed to respond, maintain business records, manage legal or operational requirements, and understand customer communication history. Retention may vary by communication channel and project context."]
        },
        {
          heading: "Security",
          body: ["We use reasonable technical and organizational safeguards for website inquiry information. No internet transmission or electronic storage method is perfectly secure, and this policy does not create a guaranteed-security or certification claim."]
        },
        {
          heading: "Customer-controlled deployment boundaries",
          body: ["Random Walk's services may involve discussions about customer-controlled environments, local model workflows, dataset packages, LoRA adapters, evaluation reports, and deployment runbooks. Those project materials are not collected through the public first-contact form unless separately agreed in writing."]
        },
        {
          heading: "Choices and updates",
          body: ["You may contact us to request correction, deletion, or review of inquiry information where applicable. We may update this policy as the website, business, or legal requirements change."]
        },
        {
          heading: "Children and contact",
          body: ["This website is intended for business users and is not directed to children. Questions about this policy can be sent to privacy@random-walk.co.jp."]
        }
      ]
    },
    zh: {
      eyebrow: "隐私政策",
      title: "Random Walk 隐私政策",
      description: "说明 Random Walk 如何处理网站咨询和首次联系表单中的信息。",
      sections: [
        { heading: "生效日期", body: ["本隐私政策自 2026 年 5 月 18 日起生效，说明 Random Walk 株式会社 如何收集、使用和保护通过本网站提交的信息。"] },
        { heading: "适用范围", body: ["本政策适用于 Random Walk 公开网站、联系表单和相关商务咨询流程。项目系统、支持渠道、代码仓库或客户控制的部署环境，可能由单独书面协议约定。"] },
        { heading: "我们收集的信息", body: ["联系咨询可能包含姓名、工作邮箱、公司、职位、行业、使用场景、部署目标、数据敏感度类别、是否需要隔离环境、是否需要现场导入、时间计划、支持偏好、合规约束、消息内容、同意状态、语言、页面来源和 UTM 来源。", "首次联系表单不提供文件上传，也不用于接收机密文件、源代码、客户记录、专利草稿、受法律特权保护的材料、私钥或商业秘密。"] },
        { heading: "信息用途", body: ["我们使用咨询信息来理解目标工作流、分配请求、评估 Random Walk 是否适合提供帮助、安排后续沟通、准备技术范围讨论、改进网站沟通，并维护普通商务记录。", "我们不会出售个人信息。"] },
        { heading: "联系表单保密提示", body: ["请只描述数据类别、约束、部署边界和评审要求。如果后续需要敏感材料，Random Walk 与客户会先约定合适的评审渠道，再进行共享。"] },
        { heading: "共享与服务提供商", body: ["我们可能与帮助运营网站、处理表单、托管邮件、安排日程或支持商务运营的服务提供商共享咨询信息。这些提供商应仅为相关服务目的处理信息。", "在法律要求、权利与安全保护或公司管理需要时，我们也可能披露相关信息。"] },
        { heading: "跨境处理", body: ["由于网站、邮件和表单基础设施可能跨地区运行，咨询信息可能在提交国家或地区之外被处理。我们会根据相关信息性质采取合理的管理和技术措施。"] },
        { heading: "保留期限", body: ["我们会在回复咨询、维护商务记录、处理法律或运营要求，以及理解客户沟通历史所需期间保留咨询信息。具体期限可能随沟通渠道和项目背景而变化。"] },
        { heading: "安全", body: ["我们会对网站咨询信息采用合理的技术和组织保护措施。但互联网传输和电子存储都无法保证绝对安全，本政策不构成安全保证或认证声明。"] },
        { heading: "客户控制的部署边界", body: ["Random Walk 的服务可能涉及客户控制环境、本地模型工作流、数据集包、LoRA 适配器、评估报告和部署运行手册。除非另有书面约定，这些项目材料不会通过公开首次联系表单收集。"] },
        { heading: "选择与更新", body: ["在适用情况下，你可以联系我们请求更正、删除或查看咨询信息。我们可能根据网站、业务或法律要求变化更新本政策。"] },
        { heading: "儿童与联系方式", body: ["本网站面向商务用户，不面向儿童。关于本政策的问题可发送至 privacy@random-walk.co.jp。"] }
      ]
    },
    ja: {
      eyebrow: "プライバシーポリシー",
      title: "Random Walk プライバシーポリシー",
      description: "Random Walk がウェブサイト問い合わせと初回連絡フォームの情報をどのように扱うかを説明します。",
      sections: [
        { heading: "発効日", body: ["本プライバシーポリシーは 2026 年 5 月 18 日に発効します。Random Walk 株式会社が本サイトを通じて送信された情報をどのように収集、利用、保護するかを説明します。"] },
        { heading: "適用範囲", body: ["本ポリシーは、Random Walk の公開ウェブサイト、問い合わせフォーム、関連するビジネス問い合わせに適用されます。プロジェクト固有のシステム、サポートチャネル、リポジトリ、顧客管理環境は、別途書面契約の対象となる場合があります。"] },
        { heading: "収集する情報", body: ["問い合わせには、氏名、業務用メールアドレス、会社名、役割、業界、用途、配備先、データ感度区分、エアギャップ要否、オンサイト導入希望、時期、サポート希望、コンプライアンス上の制約、メッセージ、同意状況、ロケール、ページ由来、UTM ソースが含まれる場合があります。", "初回連絡フォームにはファイルアップロード欄はなく、機密ファイル、ソースコード、顧客記録、特許草案、法的秘匿特権のある資料、秘密鍵、営業秘密の送信を目的としていません。"] },
        { heading: "利用目的", body: ["問い合わせ情報は、対象ワークフローの理解、依頼の振り分け、Random Walk が支援可能かの確認、フォローアップ調整、技術スコーピング準備、ウェブサイト上の説明改善、通常の業務記録管理に利用します。", "当社は個人情報を販売しません。"] },
        { heading: "contact-form confidentiality", body: ["初回フォームには、カテゴリ、制約、配備境界、レビュー要件のみを記載してください。後に機密資料が必要となる場合、共有前に Random Walk とお客様の間で適切なレビュー経路を合意します。"] },
        { heading: "共有と処理委託先", body: ["ウェブサイト運営、フォーム処理、メールホスティング、日程調整、業務運営を支援するサービス提供者に問い合わせ情報を共有する場合があります。これらの提供者は、関連するサービス目的のために情報を処理することが期待されます。", "法令上必要な場合、権利や安全の保護、会社管理に関連して情報を開示する場合があります。"] },
        { heading: "国外処理", body: ["ウェブサイト、メール、フォームのインフラは複数地域で運用される場合があるため、問い合わせ情報は送信国以外で処理される可能性があります。情報の性質に応じた合理的な管理上・技術上の措置を講じます。"] },
        { heading: "保存期間", body: ["問い合わせへの回答、業務記録、法的または運用上の必要性、顧客との連絡履歴の把握に必要な期間、問い合わせ情報を保持します。保存期間はチャネルやプロジェクト背景により異なります。"] },
        { heading: "セキュリティ", body: ["ウェブサイト問い合わせ情報について合理的な技術的・組織的保護措置を講じます。ただし、インターネット送信や電子保存に完全な安全性はなく、本ポリシーは安全保証や認証取得を主張するものではありません。"] },
        { heading: "customer-controlled deployment", body: ["Random Walk のサービスでは、顧客管理環境、ローカルモデルワークフロー、データセットパッケージ、LoRA アダプター、評価レポート、配備ランブックについて話し合う場合があります。これらのプロジェクト資料は、別途書面で合意しない限り公開初回フォームでは収集しません。"] },
        { heading: "選択と更新", body: ["適用される範囲で、問い合わせ情報の訂正、削除、確認を求めることができます。当社はウェブサイト、事業、法的要件の変更に応じて本ポリシーを更新する場合があります。"] },
        { heading: "児童と連絡先", body: ["本サイトはビジネスユーザー向けであり、児童を対象としていません。本ポリシーに関する質問は privacy@random-walk.co.jp までお送りください。"] }
      ]
    },
    ko: {
      eyebrow: "개인정보 처리방침",
      title: "Random Walk 개인정보 처리방침",
      description: "Random Walk가 웹사이트 문의와 최초 연락 양식 정보를 처리하는 방식을 설명합니다.",
      sections: [
        { heading: "시행일", body: ["본 개인정보 처리방침은 2026년 5월 18일부터 적용됩니다. Random Walk 株式会社가 본 웹사이트를 통해 제출된 정보를 수집, 사용, 보호하는 방식을 설명합니다."] },
        { heading: "범위", body: ["본 방침은 Random Walk 공개 웹사이트, 문의 양식, 관련 비즈니스 문의 워크플로에 적용됩니다. 프로젝트별 시스템, 지원 채널, 저장소, 고객 통제 배포 환경은 별도 서면 계약의 적용을 받을 수 있습니다."] },
        { heading: "수집하는 정보", body: ["문의에는 이름, 업무용 이메일, 회사, 역할, 산업, 사용 사례, 배포 대상, 데이터 민감도 범주, 에어갭 필요 여부, 온사이트 도입 선호, 일정, 지원 선호, 컴플라이언스 제약, 메시지, 동의 상태, 로케일, 페이지 출처, UTM 소스가 포함될 수 있습니다.", "최초 연락 양식에는 파일 업로드 필드가 없으며 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적 특권 자료, 개인 키 또는 영업 비밀 제출을 위한 수단이 아닙니다."] },
        { heading: "사용 목적", body: ["문의 정보는 요청 워크플로 이해, 요청 라우팅, Random Walk의 지원 가능성 검토, 후속 일정 조율, 기술 범위 논의 준비, 웹사이트 커뮤니케이션 개선, 일반 비즈니스 기록 관리를 위해 사용합니다.", "개인정보를 판매하지 않습니다."] },
        { heading: "contact-form confidentiality", body: ["최초 양식에는 범주, 제약, 배포 경계, 검토 요구사항만 작성해 주세요. 이후 민감 자료가 필요할 경우 Random Walk와 고객은 공유 전에 적절한 검토 채널을 합의합니다."] },
        { heading: "공유 및 처리자", body: ["웹사이트 운영, 양식 처리, 이메일 호스팅, 일정 관리, 비즈니스 운영을 지원하는 서비스 제공자와 문의 정보를 공유할 수 있습니다. 이러한 제공자는 관련 서비스 목적을 위해서만 정보를 처리해야 합니다.", "법률상 요구, 권리와 보안 보호, 회사 관리와 관련하여 정보를 공개할 수 있습니다."] },
        { heading: "국제 이전", body: ["웹사이트, 이메일, 양식 인프라가 여러 지역에서 운영될 수 있으므로 문의 정보는 제출 국가 외부에서 처리될 수 있습니다. 정보의 성격에 맞는 합리적인 관리적 및 기술적 조치를 사용합니다."] },
        { heading: "보관", body: ["문의 응답, 비즈니스 기록 유지, 법적 또는 운영상 요구 처리, 고객 커뮤니케이션 이력 파악에 필요한 기간 동안 문의 정보를 보관합니다. 보관 기간은 채널과 프로젝트 상황에 따라 달라질 수 있습니다."] },
        { heading: "보안", body: ["웹사이트 문의 정보에 대해 합리적인 기술적 및 조직적 보호 조치를 사용합니다. 다만 인터넷 전송이나 전자 저장 방식은 완전한 보안을 보장하지 않으며, 본 방침은 보안 보증이나 인증 주장을 만들지 않습니다."] },
        { heading: "customer-controlled deployment", body: ["Random Walk 서비스는 고객 통제 환경, 로컬 모델 워크플로, 데이터셋 패키지, LoRA 어댑터, 평가 보고서, 배포 런북 논의를 포함할 수 있습니다. 이러한 프로젝트 자료는 별도 서면 합의가 없는 한 공개 최초 연락 양식으로 수집하지 않습니다."] },
        { heading: "선택 및 업데이트", body: ["적용 가능한 경우 문의 정보의 정정, 삭제 또는 검토를 요청할 수 있습니다. 웹사이트, 사업 또는 법적 요구사항 변화에 따라 본 방침을 업데이트할 수 있습니다."] },
        { heading: "아동 및 연락처", body: ["본 웹사이트는 비즈니스 사용자를 대상으로 하며 아동을 대상으로 하지 않습니다. 본 방침에 관한 질문은 privacy@random-walk.co.jp 로 보내 주세요."] }
      ]
    }
  },
  terms: {
    en: {
      eyebrow: "Terms",
      title: "Random Walk Terms of Service",
      description: "Terms for using Random Walk public website materials, inquiry flows, and service descriptions.",
      sections: [
        { heading: "Effective date", body: ["These Terms of Service are effective May 18, 2026 and govern use of the Random Walk website and public materials."] },
        { heading: "Website use", body: ["The website provides information about Random Walk 株式会社, private and local AI infrastructure services, dataset packaging, LoRA adapter development, evaluation evidence, deployment runbooks, support options, and Melix-related local AI tooling."] },
        { heading: "Informational nature", body: ["Website materials are provided for general informational purposes. They do not create a professional advisory relationship, service engagement, legal opinion, security certification, compliance certification, or guaranteed outcome."] },
        { heading: "Inquiries and no confidential submission", body: ["The contact form is for initial scoping only. Do not submit confidential files, source code, customer records, patent drafts, legally privileged material, private keys, credentials, or trade secrets through the website.", "If a potential project requires sensitive material, appropriate review channels and written terms must be agreed before such material is shared."] },
        { heading: "Separate written agreements", body: ["Any paid service, deployment, support, license, data handling, model delivery, or customer-controlled deployment work is governed by separate written agreements. These website terms do not replace those agreements."] },
        { heading: "Open-source references", body: ["References to Melix or other open-source materials are informational. Open-source repositories are governed by their own licenses, notices, and contribution rules."] },
        { heading: "Intellectual property", body: ["Unless otherwise stated, website text, design, graphics, and Random Walk brand assets are owned by Random Walk or its licensors. You may not copy, modify, or reuse website materials in a way that suggests endorsement, partnership, or customer proof without permission."] },
        { heading: "Prohibited use", body: ["You may not misuse the website, interfere with its operation, attempt unauthorized access, submit harmful content, scrape at unreasonable volume, or use the website to transmit unlawful, confidential, or rights-infringing material."] },
        { heading: "Third-party links", body: ["The website may link to third-party sites, repositories, tools, or services. Random Walk is not responsible for third-party content, availability, policies, or security practices."] },
        { heading: "Disclaimers and liability", body: ["The website is provided on an as-is and as-available basis. To the extent permitted by law, Random Walk disclaims implied warranties and will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website."] },
        { heading: "Governing context and changes", body: ["These terms are maintained by Random Walk 株式会社 in Japan. Mandatory laws may apply depending on user location and transaction context. We may update these terms as the website, services, or legal requirements change."] },
        { heading: "Contact", body: ["Questions about these terms can be sent to legal@random-walk.co.jp."] }
      ]
    },
    zh: {
      eyebrow: "服务条款",
      title: "Random Walk 服务条款",
      description: "适用于 Random Walk 公开网站材料、咨询流程和服务说明的条款。",
      sections: [
        { heading: "生效日期", body: ["本服务条款自 2026 年 5 月 18 日起生效，适用于 Random Walk 网站和公开材料的使用。"] },
        { heading: "网站使用", body: ["本网站介绍 Random Walk 株式会社、私有和本地 AI 基础设施服务、数据集打包、LoRA 适配器开发、评估证据、部署运行手册、支持选项，以及 Melix 相关本地 AI 工具。"] },
        { heading: "信息性质", body: ["网站材料仅用于一般信息说明，不构成专业顾问关系、服务委托、法律意见、安全认证、合规认证或结果保证。"] },
        { heading: "咨询与禁止提交机密信息", body: ["联系表单仅用于初步范围沟通。请不要通过网站提交机密文件、源代码、客户记录、专利草稿、受法律特权保护的材料、私钥、凭据或商业秘密。", "如果潜在项目需要敏感材料，必须先约定合适的评审渠道和书面条款。"] },
        { heading: "单独书面协议", body: ["任何付费服务、部署、支持、许可、数据处理、模型交付或客户控制部署工作，都由单独书面协议约定。本网站条款不替代这些协议。"] },
        { heading: "开源引用", body: ["对 Melix 或其他开源材料的引用仅用于说明。开源仓库由各自的许可证、声明和贡献规则约束。"] },
        { heading: "知识产权", body: ["除非另有说明，网站文字、设计、图形和 Random Walk 品牌资产归 Random Walk 或其许可方所有。未经许可，不得以暗示背书、合作关系或客户证明的方式复制、修改或复用网站材料。"] },
        { heading: "禁止使用", body: ["不得滥用网站、干扰网站运行、尝试未授权访问、提交有害内容、以不合理规模抓取，或利用网站传输违法、机密或侵犯权利的材料。"] },
        { heading: "第三方链接", body: ["网站可能链接到第三方网站、仓库、工具或服务。Random Walk 不对第三方内容、可用性、政策或安全实践负责。"] },
        { heading: "免责声明与责任限制", body: ["网站按现状和可用状态提供。在法律允许范围内，Random Walk 不承担默示保证，也不对因使用网站产生的间接、附带、特殊、后果性或惩罚性损害承担责任。"] },
        { heading: "适用背景与变更", body: ["本条款由位于日本的 Random Walk 株式会社 维护。根据用户所在地和交易背景，强制性法律可能适用。我们可能根据网站、服务或法律要求变化更新本条款。"] },
        { heading: "联系方式", body: ["关于本条款的问题可发送至 legal@random-walk.co.jp。"] }
      ]
    },
    ja: {
      eyebrow: "利用規約",
      title: "Random Walk 利用規約",
      description: "Random Walk の公開ウェブサイト資料、問い合わせフロー、サービス説明の利用条件です。",
      sections: [
        { heading: "発効日", body: ["本利用規約は 2026 年 5 月 18 日に発効し、Random Walk ウェブサイトおよび公開資料の利用に適用されます。"] },
        { heading: "ウェブサイト利用", body: ["本サイトは、Random Walk 株式会社、プライベートおよびローカル AI 基盤サービス、データセットパッケージ、LoRA アダプター開発、評価証拠、配備ランブック、サポート選択肢、Melix 関連のローカル AI ツールについて説明します。"] },
        { heading: "情報提供の性質", body: ["ウェブサイト資料は一般的な情報提供を目的としています。専門的助言関係、サービス契約、法的意見、セキュリティ認証、コンプライアンス認証、成果保証を作るものではありません。"] },
        { heading: "問い合わせと機密情報の不送信", body: ["問い合わせフォームは初期スコーピングのためのものです。機密ファイル、ソースコード、顧客記録、特許草案、法的秘匿特権のある資料、秘密鍵、認証情報、営業秘密をウェブサイトから送信しないでください。", "潜在プロジェクトで機密資料が必要な場合、共有前に適切なレビュー経路と書面条件を合意する必要があります。"] },
        { heading: "separate written agreements", body: ["有償サービス、配備、サポート、ライセンス、データ取扱い、モデル納品、顧客管理環境での作業は、別途書面契約により規律されます。本サイト規約はそれらを置き換えません。"] },
        { heading: "オープンソース参照", body: ["Melix またはその他のオープンソース資料への言及は情報提供です。オープンソースリポジトリは各ライセンス、通知、コントリビューションルールに従います。"] },
        { heading: "知的財産", body: ["別途明記しない限り、サイト上の文章、デザイン、図版、Random Walk ブランド資産は Random Walk またはライセンサーに帰属します。許可なく、推奨、提携、顧客実績を示唆する形で複製、変更、再利用することはできません。"] },
        { heading: "禁止事項", body: ["サイトの悪用、運営妨害、不正アクセスの試み、有害コンテンツの送信、不合理な量のスクレイピング、違法・機密・権利侵害資料の送信は禁止されます。"] },
        { heading: "第三者リンク", body: ["本サイトは第三者サイト、リポジトリ、ツール、サービスへリンクする場合があります。Random Walk は第三者コンテンツ、可用性、ポリシー、セキュリティ実務について責任を負いません。"] },
        { heading: "免責と責任制限", body: ["本サイトは現状有姿かつ提供可能な範囲で提供されます。法律で許される範囲で、Random Walk は黙示保証を否認し、サイト利用から生じる間接、付随、特別、結果的、懲罰的損害について責任を負いません。"] },
        { heading: "準拠背景と変更", body: ["本規約は日本の Random Walk 株式会社が管理します。利用者所在地や取引背景に応じて強行法規が適用される場合があります。当社はサイト、サービス、法的要件の変更に応じて本規約を更新する場合があります。"] },
        { heading: "連絡先", body: ["本規約に関する質問は legal@random-walk.co.jp までお送りください。"] }
      ]
    },
    ko: {
      eyebrow: "서비스 약관",
      title: "Random Walk 서비스 약관",
      description: "Random Walk 공개 웹사이트 자료, 문의 흐름, 서비스 설명의 이용 조건입니다.",
      sections: [
        { heading: "시행일", body: ["본 서비스 약관은 2026년 5월 18일부터 적용되며 Random Walk 웹사이트와 공개 자료 사용을 규율합니다."] },
        { heading: "웹사이트 이용", body: ["본 웹사이트는 Random Walk 株式会社, 프라이빗 및 로컬 AI 인프라 서비스, 데이터셋 패키징, LoRA 어댑터 개발, 평가 증거, 배포 런북, 지원 옵션, Melix 관련 로컬 AI 도구를 설명합니다."] },
        { heading: "정보 제공 성격", body: ["웹사이트 자료는 일반적인 정보 제공을 위한 것입니다. 전문 자문 관계, 서비스 계약, 법률 의견, 보안 인증, 컴플라이언스 인증 또는 보장된 결과를 만들지 않습니다."] },
        { heading: "문의와 기밀 정보 미제출", body: ["연락 양식은 초기 범위 확인을 위한 것입니다. 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적 특권 자료, 개인 키, 자격 증명 또는 영업 비밀을 웹사이트를 통해 제출하지 마세요.", "잠재 프로젝트에 민감 자료가 필요한 경우, 공유 전에 적절한 검토 채널과 서면 조건을 합의해야 합니다."] },
        { heading: "separate written agreements", body: ["유료 서비스, 배포, 지원, 라이선스, 데이터 처리, 모델 납품 또는 고객 통제 배포 작업은 별도 서면 계약에 따릅니다. 본 웹사이트 약관은 그러한 계약을 대체하지 않습니다."] },
        { heading: "오픈소스 참조", body: ["Melix 또는 기타 오픈소스 자료에 대한 언급은 정보 제공 목적입니다. 오픈소스 저장소는 각 라이선스, 고지, 기여 규칙의 적용을 받습니다."] },
        { heading: "지식재산", body: ["달리 명시되지 않는 한 웹사이트 텍스트, 디자인, 그래픽, Random Walk 브랜드 자산은 Random Walk 또는 라이선스 제공자가 소유합니다. 허가 없이 보증, 파트너십 또는 고객 증거를 암시하는 방식으로 복사, 수정, 재사용할 수 없습니다."] },
        { heading: "금지된 이용", body: ["웹사이트 오용, 운영 방해, 무단 접근 시도, 유해 콘텐츠 제출, 비합리적인 규모의 스크래핑, 불법·기밀·권리 침해 자료 전송을 금지합니다."] },
        { heading: "제3자 링크", body: ["웹사이트는 제3자 사이트, 저장소, 도구 또는 서비스로 연결될 수 있습니다. Random Walk는 제3자 콘텐츠, 이용 가능성, 정책 또는 보안 관행에 책임지지 않습니다."] },
        { heading: "면책 및 책임 제한", body: ["웹사이트는 있는 그대로, 이용 가능한 상태로 제공됩니다. 법이 허용하는 범위에서 Random Walk는 묵시적 보증을 부인하며 웹사이트 사용으로 인한 간접, 부수, 특별, 결과적 또는 징벌적 손해에 책임지지 않습니다."] },
        { heading: "준거 맥락 및 변경", body: ["본 약관은 일본의 Random Walk 株式会社가 관리합니다. 사용자 위치와 거래 맥락에 따라 강행 법규가 적용될 수 있습니다. 웹사이트, 서비스 또는 법적 요구사항 변화에 따라 본 약관을 업데이트할 수 있습니다."] },
        { heading: "연락처", body: ["본 약관에 관한 질문은 legal@random-walk.co.jp 로 보내 주세요."] }
      ]
    }
  }
};

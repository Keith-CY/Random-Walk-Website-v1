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
        "eyebrow": "隐私政策",
        "title": "Random Walk 隐私政策",
        "description": "Random Walk 如何处理网站咨询以及面向私有 AI 基础设施工作的首次联系潜在客户信息收集。",
        "sections": [
          {
            "heading": "生效日期",
            "body": [
              "本隐私政策自 2026 年 5 月 18 日起生效。它说明 Random Walk 株式会社如何收集、使用和保护通过本网站提交的信息。"
            ]
          },
          {
            "heading": "适用范围",
            "body": [
              "本政策适用于公开的 Random Walk 网站、联系表单以及相关业务咨询流程。项目特定系统、支持渠道、代码库或由客户控制的部署，可能受单独书面协议约束。"
            ]
          },
          {
            "heading": "我们收集的信息",
            "body": [
              "联系咨询可能包括姓名、工作邮箱、公司、职位、行业、使用场景、部署目标、数据敏感性类别、离线隔离要求、现场引入偏好、时间安排、支持偏好、合规限制、消息内容、同意状态、区域设置、页面来源以及 UTM 来源。",
              "首次联系表单不包含文件上传字段，也不用于提交机密文件、源代码、客户记录、专利草案、受法律特权保护的材料、私钥或商业秘密。"
            ]
          },
          {
            "heading": "我们如何使用信息",
            "body": [
              "我们使用咨询信息来了解所请求的工作流程、分派请求、评估 Random Walk 是否能够提供帮助、安排后续沟通、准备技术范围界定对话、改进网站沟通，并维护日常业务记录。",
              "我们不会出售个人信息。"
            ]
          },
          {
            "heading": "联系表单的保密性",
            "body": [
              "请仅描述类别、限制、部署边界和审查要求。如果之后需要敏感材料，Random Walk 与客户将在共享任何内容之前商定适当的审查渠道。"
            ]
          },
          {
            "heading": "共享和处理方",
            "body": [
              "我们可能会与协助运营网站、处理表单、托管电子邮件、管理日程安排或支持业务运营的服务提供商共享咨询信息。这些提供商应仅为相关服务目的处理信息。",
              "在法律要求、为保护权利和安全，或与公司管理有关的情况下，我们可能会披露信息。"
            ]
          },
          {
            "heading": "国际传输",
            "body": [
              "由于网站、电子邮件和表单基础设施可能跨地区运行，咨询信息可能会在提交所在国家以外的地区被处理。我们会根据该信息的性质采取合理的行政和技术措施。"
            ]
          },
          {
            "heading": "保留",
            "body": [
              "我们会在回应咨询、维护业务记录、管理法律或运营要求以及了解客户沟通历史所需的期限内保留咨询信息。保留期限可能因沟通渠道和项目背景而异。"
            ]
          },
          {
            "heading": "安全",
            "body": [
              "我们对网站咨询信息采用合理的技术和组织保障措施。任何互联网传输或电子存储方法都无法做到绝对安全，本政策不构成保证安全或认证声明。"
            ]
          },
          {
            "heading": "客户控制的部署边界",
            "body": [
              "Random Walk 的服务可能涉及关于客户控制环境、本地模型工作流、数据集包、LoRA 适配器、评估报告和部署运行手册的讨论。除非另有书面约定，这些项目材料不会通过公开的首次联系表单收集。"
            ]
          },
          {
            "heading": "选择和更新",
            "body": [
              "在适用情况下，您可以联系我们，请求更正、删除或审查咨询信息。我们可能会随着网站、业务或法律要求的变化更新本政策。"
            ]
          },
          {
            "heading": "儿童和联系方式",
            "body": [
              "本网站面向商业用户，并非针对儿童。关于本政策的问题可发送至 privacy@random-walk.co.jp。"
            ]
          }
        ]
      },
    ja: {
        "eyebrow": "プライバシーポリシー",
        "title": "Random Walk プライバシーポリシー",
        "description": "Random Walk が、プライベート AI インフラストラクチャ業務に関するウェブサイトからの問い合わせおよび初回接点でのリード受付をどのように取り扱うかについて。",
        "sections": [
          {
            "heading": "施行日",
            "body": [
              "本プライバシーポリシーは 2026 年 5 月 18 日に施行されます。本ポリシーは、Random Walk 株式会社が本ウェブサイトを通じて送信された情報をどのように収集、利用、保護するかを説明するものです。"
            ]
          },
          {
            "heading": "適用範囲",
            "body": [
              "本ポリシーは、公開されている Random Walk のウェブサイト、問い合わせフォーム、および関連する事業問い合わせワークフローに適用されます。プロジェクト固有のシステム、サポートチャネル、リポジトリ、または顧客管理下のデプロイメントについては、別途の書面契約が適用される場合があります。"
            ]
          },
          {
            "heading": "収集する情報",
            "body": [
              "問い合わせには、氏名、業務用メールアドレス、会社名、役職、業種、ユースケース、デプロイ先、データ感度カテゴリ、エアギャップ要件、オンサイト導入の希望、スケジュール、サポートの希望、コンプライアンス上の制約、メッセージ内容、同意状況、ロケール、ページの発信元、および UTM source が含まれる場合があります。",
              "初回問い合わせフォームにはファイルアップロード欄はなく、機密ファイル、ソースコード、顧客記録、特許草案、法的秘匿特権の対象となる資料、秘密鍵、または営業秘密の送信を意図したものではありません。"
            ]
          },
          {
            "heading": "情報の利用方法",
            "body": [
              "当社は、問い合わせ情報を、依頼されたワークフローの理解、リクエストの振り分け、Random Walk が支援可能かどうかの評価、フォローアップの日程調整、技術的なスコーピング面談の準備、ウェブサイト上のコミュニケーション改善、および通常の業務記録の維持のために利用します。",
              "当社は個人情報を販売しません。"
            ]
          },
          {
            "heading": "問い合わせフォームの機密性",
            "body": [
              "カテゴリ、制約、デプロイ境界、およびレビュー要件のみを記載してください。後日、機微な資料が必要となる場合、Random Walk と顧客は、何らかの情報が共有される前に、適切なレビュー経路について合意します。"
            ]
          },
          {
            "heading": "共有および処理業者",
            "body": [
              "当社は、ウェブサイトの運営、フォーム処理、メールホスティング、スケジュール管理、または事業運営の支援を行うサービスプロバイダーと問い合わせ情報を共有する場合があります。これらのプロバイダーは、関連するサービス目的のためにのみ情報を処理することが求められます。",
              "当社は、法律で求められる場合、権利およびセキュリティを保護するため、または会社管理に関連して、情報を開示する場合があります。"
            ]
          },
          {
            "heading": "国際移転",
            "body": [
              "ウェブサイト、メール、およびフォームのインフラストラクチャは複数の地域で運用される場合があるため、問い合わせ情報は、送信された国以外で処理される場合があります。当社は、情報の性質に応じた合理的な管理上および技術上の措置を講じます。"
            ]
          },
          {
            "heading": "保存期間",
            "body": [
              "当社は、回答、業務記録の維持、法的または運用上の要件の管理、および顧客とのコミュニケーション履歴の把握に必要な期間、問い合わせ情報を保存します。保存期間は、コミュニケーションチャネルおよびプロジェクトの文脈によって異なる場合があります。"
            ]
          },
          {
            "heading": "セキュリティ",
            "body": [
              "当社は、ウェブサイト問い合わせ情報について合理的な技術的および組織的保護措置を講じます。インターネット送信または電子的保存の方法に完全に安全なものはなく、本ポリシーは、セキュリティ保証または認証に関する主張を構成するものではありません。"
            ]
          },
          {
            "heading": "顧客管理下のデプロイメント境界",
            "body": [
              "Random Walk のサービスでは、顧客管理下の環境、ローカルモデルワークフロー、データセットパッケージ、LoRA アダプター、評価レポート、およびデプロイメント ランブック について協議する場合があります。これらのプロジェクト資料は、別途書面で合意されない限り、公開された初回問い合わせフォームを通じて収集されることはありません。"
            ]
          },
          {
            "heading": "選択および更新",
            "body": [
              "適用される場合、問い合わせ情報の訂正、削除、または確認を求めるために当社へ連絡することができます。当社は、ウェブサイト、事業、または法的要件の変更に応じて、本ポリシーを更新する場合があります。"
            ]
          },
          {
            "heading": "児童および連絡先",
            "body": [
              "本ウェブサイトはビジネスユーザー向けであり、児童を対象としたものではありません。本ポリシーに関するご質問は privacy@random-walk.co.jp までお送りください。"
            ]
          }
        ]
      },
    ko: {
        "eyebrow": "개인정보 처리방침",
        "title": "Random Walk 개인정보 처리방침",
        "description": "Random Walk가 프라이빗 AI 인프라 작업을 위한 웹사이트 문의 및 최초 연락 리드 접수를 처리하는 방식입니다.",
        "sections": [
          {
            "heading": "시행일",
            "body": [
              "본 개인정보 처리방침은 2026년 5월 18일부터 시행됩니다. 본 방침은 Random Walk 株式会社가 본 웹사이트를 통해 제출된 정보를 수집, 이용 및 보호하는 방법을 설명합니다."
            ]
          },
          {
            "heading": "적용 범위",
            "body": [
              "본 방침은 공개 Random Walk 웹사이트, 문의 양식 및 관련 비즈니스 문의 워크플로에 적용됩니다. 프로젝트별 시스템, 지원 채널, 리포지토리 또는 고객이 관리하는 배포에는 별도의 서면 계약이 적용될 수 있습니다."
            ]
          },
          {
            "heading": "수집하는 정보",
            "body": [
              "문의에는 이름, 업무용 이메일, 회사, 직무, 산업, 사용 사례, 배포 대상, 데이터 민감도 범주, 에어갭 요구사항, 온사이트 도입 선호, 일정, 지원 선호, 컴플라이언스 제약, 메시지 내용, 동의 상태, 로캘, 페이지 출처 및 UTM source가 포함될 수 있습니다.",
              "최초 연락 양식에는 파일 업로드 필드가 없으며, 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적 비밀유지 특권이 적용되는 자료, 개인 키 또는 영업비밀을 제출하기 위한 것이 아닙니다."
            ]
          },
          {
            "heading": "정보 이용 방법",
            "body": [
              "당사는 문의 정보를 사용하여 요청된 워크플로를 이해하고, 요청을 라우팅하며, Random Walk가 지원할 수 있는지 평가하고, 후속 연락 일정을 잡고, 기술 범위 설정 대화를 준비하며, 웹사이트 커뮤니케이션을 개선하고, 일반적인 비즈니스 기록을 유지합니다.",
              "당사는 개인정보를 판매하지 않습니다."
            ]
          },
          {
            "heading": "문의 양식의 기밀성",
            "body": [
              "범주, 제약사항, 배포 경계 및 검토 요구사항만 설명해 주십시오. 추후 민감한 자료가 필요한 경우, Random Walk와 고객은 어떠한 자료도 공유되기 전에 적절한 검토 채널에 합의합니다."
            ]
          },
          {
            "heading": "공유 및 처리업체",
            "body": [
              "당사는 웹사이트 운영, 양식 처리, 이메일 호스팅, 일정 관리 또는 비즈니스 운영 지원을 돕는 서비스 제공업체와 문의 정보를 공유할 수 있습니다. 이러한 제공업체는 관련 서비스 목적을 위해서만 정보를 처리해야 합니다.",
              "당사는 법률상 요구되는 경우, 권리와 보안을 보호하기 위한 경우 또는 회사 관리와 관련하여 정보를 공개할 수 있습니다."
            ]
          },
          {
            "heading": "국제 이전",
            "body": [
              "웹사이트, 이메일 및 양식 인프라는 여러 지역에서 운영될 수 있으므로, 문의 정보는 제출된 국가 외부에서 처리될 수 있습니다. 당사는 정보의 성격에 적합한 합리적인 관리적 및 기술적 조치를 사용합니다."
            ]
          },
          {
            "heading": "보유",
            "body": [
              "당사는 응답, 비즈니스 기록 유지, 법적 또는 운영상 요구사항 관리, 고객 커뮤니케이션 이력 파악에 필요한 기간 동안 문의 정보를 보유합니다. 보유 기간은 커뮤니케이션 채널 및 프로젝트 맥락에 따라 달라질 수 있습니다."
            ]
          },
          {
            "heading": "보안",
            "body": [
              "당사는 웹사이트 문의 정보에 대해 합리적인 기술적 및 조직적 보호조치를 사용합니다. 인터넷 전송 또는 전자 저장 방식 중 완벽하게 안전한 것은 없으며, 본 방침은 보안 보장 또는 인증 주장을 생성하지 않습니다."
            ]
          },
          {
            "heading": "고객 관리 배포 경계",
            "body": [
              "Random Walk의 서비스에는 고객 관리 환경, 로컬 모델 워크플로, 데이터셋 패키지, LoRA 어댑터, 평가 보고서 및 배포 런북에 대한 논의가 포함될 수 있습니다. 이러한 프로젝트 자료는 별도로 서면 합의되지 않는 한 공개 최초 연락 양식을 통해 수집되지 않습니다."
            ]
          },
          {
            "heading": "선택 및 업데이트",
            "body": [
              "해당되는 경우, 귀하는 문의 정보의 정정, 삭제 또는 검토를 요청하기 위해 당사에 연락할 수 있습니다. 당사는 웹사이트, 비즈니스 또는 법적 요구사항의 변경에 따라 본 방침을 업데이트할 수 있습니다."
            ]
          },
          {
            "heading": "아동 및 연락처",
            "body": [
              "본 웹사이트는 비즈니스 사용자를 대상으로 하며 아동을 대상으로 하지 않습니다. 본 방침에 관한 질문은 privacy@random-walk.co.jp 로 보낼 수 있습니다."
            ]
          }
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
        "eyebrow": "条款",
        "title": "Random Walk 服务条款",
        "description": "适用于使用 Random Walk 公开网站材料、咨询流程及服务说明的条款。",
        "sections": [
          {
            "heading": "生效日期",
            "body": [
              "本服务条款自 2026 年 5 月 18 日起生效，并适用于 Random Walk 网站及公开材料的使用。"
            ]
          },
          {
            "heading": "网站使用",
            "body": [
              "本网站提供有关 Random Walk 株式会社、私有与本地 AI 基础设施服务、数据集打包、LoRA 适配器开发、评估证据、部署运行手册、支持选项，以及 Melix 相关 本地 AI 工具 的信息。"
            ]
          },
          {
            "heading": "信息性质",
            "body": [
              "网站材料仅供一般信息参考之用。其不构成专业顾问关系、服务委托、法律意见、安全认证、合规认证或任何保证结果。"
            ]
          },
          {
            "heading": "咨询与禁止提交保密资料",
            "body": [
              "联系表单仅用于初步范围确认。请勿通过本网站提交保密文件、源代码、客户记录、专利草案、受法律特权保护的材料、私钥、凭证 或 商业秘密。",
              "如潜在项目需要敏感材料，必须在共享此类材料前约定适当的审查渠道和书面条款。"
            ]
          },
          {
            "heading": "单独书面协议",
            "body": [
              "任何付费服务、部署、支持、许可、数据处理、模型交付 或 客户控制的部署 工作，均受单独书面协议约束。本网站条款不取代该等协议。"
            ]
          },
          {
            "heading": "开源引用",
            "body": [
              "对 Melix 或其他 开源材料 的引用仅供信息参考。开源仓库 受其各自的 许可证、声明 和 贡献规则 约束。"
            ]
          },
          {
            "heading": "知识产权",
            "body": [
              "除非另有说明，网站文本、设计、图形及 Random Walk 品牌资产归 Random Walk 或其许可方所有。未经许可，您不得以暗示认可、合作关系或客户证明的方式复制、修改或再利用网站材料。"
            ]
          },
          {
            "heading": "禁止使用",
            "body": [
              "您不得滥用本网站、干扰其运行、尝试 未授权访问、提交有害内容、以不合理规模 抓取，或使用本网站传输违法、保密或侵犯权利的材料。"
            ]
          },
          {
            "heading": "第三方链接",
            "body": [
              "本网站可能链接至 第三方网站、仓库、工具 或 服务。Random Walk 不对第三方内容、可用性、政策或安全实践负责。"
            ]
          },
          {
            "heading": "免责声明与责任",
            "body": [
              "本网站按 按现状 和 按可用状态 基础提供。在法律允许的范围内，Random Walk 不承担 默示保证，并且不对因使用本网站而产生的 间接、附带、特殊、后果性 或 惩罚性损害 承担责任。"
            ]
          },
          {
            "heading": "管辖背景与变更",
            "body": [
              "本条款由位于日本的 Random Walk 株式会社维护。根据用户所在地和交易背景，强制性法律 可能适用。我们可随着网站、服务或法律要求的变化更新本条款。"
            ]
          },
          {
            "heading": "联系方式",
            "body": [
              "有关本条款的问题可发送至 legal@random-walk.co.jp。"
            ]
          }
        ]
      },
    ja: {
        "eyebrow": "規約",
        "title": "Random Walk 利用規約",
        "description": "Random Walk の公開ウェブサイト資料、問い合わせフロー、およびサービス説明の利用に関する規約。",
        "sections": [
          {
            "heading": "効力発生日",
            "body": [
              "本利用規約は 2026 年 5 月 18 日から効力を有し、Random Walk のウェブサイトおよび公開資料の利用に適用されます。"
            ]
          },
          {
            "heading": "ウェブサイトの利用",
            "body": [
              "本ウェブサイトは、Random Walk 株式会社、プライベートおよびローカル AI 基盤サービス、データセットのパッケージ化、LoRA アダプター開発、評価証跡、デプロイ用ランブック、サポート選択肢、および Melix 関連の ローカル AI ツール に関する情報を提供します。"
            ]
          },
          {
            "heading": "情報提供の性質",
            "body": [
              "ウェブサイト資料は、一般的な情報提供を目的として提供されます。これらは、専門的助言関係、サービス契約、法律意見、セキュリティ認証、コンプライアンス認証、または成果の保証を生じさせるものではありません。"
            ]
          },
          {
            "heading": "問い合わせおよび秘密情報の提出禁止",
            "body": [
              "お問い合わせフォームは、初期的なスコープ確認のみを目的としています。本ウェブサイトを通じて、秘密ファイル、ソースコード、顧客記録、特許草案、法的秘匿特権の対象となる資料、秘密鍵、認証情報、または 営業秘密 を提出しないでください。",
              "潜在的なプロジェクトにおいてセンシティブな資料が必要となる場合、当該資料を共有する前に、適切なレビュー経路および書面による条件について合意する必要があります。"
            ]
          },
          {
            "heading": "別個の書面契約",
            "body": [
              "有償サービス、デプロイ、サポート、ライセンス、データ取扱い、モデル納品、または 顧客管理下のデプロイ に関する作業は、別個の書面契約により規律されます。本ウェブサイト規約は、これらの契約に代わるものではありません。"
            ]
          },
          {
            "heading": "オープンソースへの言及",
            "body": [
              "Melix またはその他の オープンソース資料 への言及は、情報提供を目的とするものです。オープンソースリポジトリ は、それぞれの ライセンス、通知、および コントリビューションルール によって規律されます。"
            ]
          },
          {
            "heading": "知的財産",
            "body": [
              "別段の記載がない限り、ウェブサイトのテキスト、デザイン、グラフィック、および Random Walk のブランド資産は、Random Walk またはそのライセンサーに帰属します。許可なく、推奨、提携、または顧客実績を示唆する方法でウェブサイト資料を複製、変更、または再利用することはできません。"
            ]
          },
          {
            "heading": "禁止される利用",
            "body": [
              "本ウェブサイトを不正に利用すること、その運営を妨害すること、不正アクセス を試みること、有害なコンテンツを送信すること、不合理な量で スクレイピング すること、または本ウェブサイトを利用して違法、秘密、もしくは権利侵害となる資料を送信することはできません。"
            ]
          },
          {
            "heading": "第三者リンク",
            "body": [
              "本ウェブサイトは、第三者サイト、リポジトリ、ツール、または サービス にリンクする場合があります。Random Walk は、第三者のコンテンツ、利用可能性、ポリシー、またはセキュリティ慣行について責任を負いません。"
            ]
          },
          {
            "heading": "免責および責任",
            "body": [
              "本ウェブサイトは、現状有姿 および 提供可能な範囲 の条件で提供されます。法律で認められる範囲において、Random Walk は 黙示保証 を否認し、本ウェブサイトの利用から生じる 間接、付随的、特別、結果的、または 懲罰的損害 について責任を負いません。"
            ]
          },
          {
            "heading": "準拠する背景および変更",
            "body": [
              "本規約は、日本の Random Walk 株式会社により管理されています。ユーザーの所在地および取引の文脈に応じて、強行法規 が適用される場合があります。当社は、ウェブサイト、サービス、または法的要件の変更に応じて、本規約を更新することがあります。"
            ]
          },
          {
            "heading": "連絡先",
            "body": [
              "本規約に関する質問は legal@random-walk.co.jp までお送りください。"
            ]
          }
        ]
      },
    ko: {
        "eyebrow": "약관",
        "title": "Random Walk 서비스 약관",
        "description": "Random Walk 공개 웹사이트 자료, 문의 절차 및 서비스 설명의 이용에 관한 약관입니다.",
        "sections": [
          {
            "heading": "시행일",
            "body": [
              "본 서비스 약관은 2026년 5월 18일부터 시행되며 Random Walk 웹사이트 및 공개 자료의 이용에 적용됩니다."
            ]
          },
          {
            "heading": "웹사이트 이용",
            "body": [
              "본 웹사이트는 Random Walk 株式会社, 프라이빗 및 로컬 AI 인프라 서비스, 데이터셋 패키징, LoRA 어댑터 개발, 평가 증거, 배포 런북, 지원 옵션 및 Melix 관련 로컬 AI 도구 에 관한 정보를 제공합니다."
            ]
          },
          {
            "heading": "정보 제공의 성격",
            "body": [
              "웹사이트 자료는 일반적인 정보 제공 목적으로 제공됩니다. 이는 전문 자문 관계, 서비스 계약, 법률 의견, 보안 인증, 컴플라이언스 인증 또는 보장된 결과를 형성하지 않습니다."
            ]
          },
          {
            "heading": "문의 및 비밀자료 제출 금지",
            "body": [
              "문의 양식은 초기 범위 확인만을 위한 것입니다. 본 웹사이트를 통해 비밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적으로 보호되는 특권 자료, 개인 키, 인증 정보 또는 영업 비밀 를 제출하지 마십시오.",
              "잠재적 프로젝트에 민감한 자료가 필요한 경우, 해당 자료를 공유하기 전에 적절한 검토 채널 및 서면 조건에 합의해야 합니다."
            ]
          },
          {
            "heading": "별도 서면 계약",
            "body": [
              "모든 유료 서비스, 배포, 지원, 라이선스, 데이터 처리, 모델 납품 또는 고객 통제 배포 업무는 별도의 서면 계약에 따릅니다. 본 웹사이트 약관은 그러한 계약을 대체하지 않습니다."
            ]
          },
          {
            "heading": "오픈소스 관련 언급",
            "body": [
              "Melix 또는 기타 오픈소스 자료 에 대한 언급은 정보 제공 목적입니다. 오픈소스 저장소 는 각자의 라이선스, 고지 및 기여 규칙 의 적용을 받습니다."
            ]
          },
          {
            "heading": "지식재산권",
            "body": [
              "달리 명시되지 않는 한, 웹사이트 텍스트, 디자인, 그래픽 및 Random Walk 브랜드 자산은 Random Walk 또는 그 라이선스 제공자에게 귀속됩니다. 허가 없이 보증, 제휴 또는 고객 사례를 시사하는 방식으로 웹사이트 자료를 복사, 수정 또는 재사용할 수 없습니다."
            ]
          },
          {
            "heading": "금지되는 이용",
            "body": [
              "웹사이트를 오용하거나, 그 운영을 방해하거나, 무단 접근 를 시도하거나, 유해한 콘텐츠를 제출하거나, 불합리한 규모로 스크래핑 하거나, 웹사이트를 이용하여 불법적, 비밀적 또는 권리 침해 자료를 전송해서는 안 됩니다."
            ]
          },
          {
            "heading": "제3자 링크",
            "body": [
              "웹사이트는 제3자 사이트, 저장소, 도구 또는 서비스 로 연결될 수 있습니다. Random Walk 는 제3자 콘텐츠, 가용성, 정책 또는 보안 관행에 대해 책임을 지지 않습니다."
            ]
          },
          {
            "heading": "면책 및 책임",
            "body": [
              "본 웹사이트는 있는 그대로 및 이용 가능한 상태 기준으로 제공됩니다. 법률이 허용하는 범위 내에서 Random Walk 는 묵시적 보증 를 부인하며, 웹사이트 이용으로 인해 발생하는 간접, 부수적, 특별, 결과적 또는 징벌적 손해 에 대해 책임을 지지 않습니다."
            ]
          },
          {
            "heading": "준거 맥락 및 변경",
            "body": [
              "본 약관은 일본의 Random Walk 株式会社 가 관리합니다. 사용자의 소재지 및 거래 맥락에 따라 강행 법규 가 적용될 수 있습니다. 당사는 웹사이트, 서비스 또는 법적 요건의 변경에 따라 본 약관을 업데이트할 수 있습니다."
            ]
          },
          {
            "heading": "연락처",
            "body": [
              "본 약관에 관한 질문은 legal@random-walk.co.jp 로 보낼 수 있습니다."
            ]
          }
        ]
      }
  }
};

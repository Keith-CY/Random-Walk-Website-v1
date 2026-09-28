"use client";

import { useEffect, useMemo, useState } from "react";
import { contactFieldOptions, validateContactPayload } from "@/lib/contact-schema";
import type { Locale } from "@/lib/i18n";
import { speakingContactCopy } from "@/lib/site-data";

type ContactOptionLabels = {
  [Field in keyof typeof contactFieldOptions]: Record<(typeof contactFieldOptions)[Field][number], string>;
};

type ContactFormCopy = {
  confidentialityTitle: string;
  confidentialityBody: string;
  sections: { contact: string; useCase: string; deploymentTarget: string; sensitivitySupport: string; message: string };
  fields: {
    name: string; email: string; company: string; role: string; industry: string; useCase: string; deploymentTarget: string;
    dataSensitivity: string; airGappedRequired: string; onsiteIntro: string; timeline: string; supportPreference: string;
    complianceConstraints: string; message: string; consent: string;
  };
  placeholders: { selectOne: string; complianceConstraints: string; message: string };
  inlineWarning: string;
  sent: string;
  error: string;
  fieldError: string;
  sending: string;
  submitConfigured: string;
  submitFallback: string;
  emailSubject: string;
  fallbackBodyLabels: { name: string; company: string; useCase: string; deployment: string };
  options: ContactOptionLabels;
};

// Option values are validated by lib/contact-schema.ts and must not change; only the labels people read do.
const contactFormCopy: Record<Locale, ContactFormCopy> = {
  en: {
    confidentialityTitle: "Keep this first message general",
    confidentialityBody: "Describe the kind of work and data, not the material itself. Please leave out confidential files, source code, customer records, patent drafts, privileged legal material and trade secrets.",
    sections: { contact: "About you", useCase: "The work", deploymentTarget: "Where it has to run", sensitivitySupport: "Data and support", message: "Your message" },
    fields: {
      name: "Name *", email: "Work email *", company: "Company *", role: "Role", industry: "Industry", useCase: "What you need",
      deploymentTarget: "Where it has to run", dataSensitivity: "The most sensitive data involved", airGappedRequired: "Must it run with no outside connection?",
      onsiteIntro: "Would you like to meet in person?", timeline: "When you would like to start", supportPreference: "How you would like us to work",
      complianceConstraints: "Compliance requirements", message: "Message *", consent: "I agree that Random Walk may use this information to review and reply to my inquiry. *"
    },
    placeholders: {
      selectOne: "Choose one",
      complianceConstraints: "The kinds of rules you work under, such as data residency or industry regulation. No confidential details.",
      message: "What the work is, what data you keep, where the model has to run and how you review changes. No confidential material."
    },
    inlineWarning: "Please leave out confidential files, records, source code and privileged material.",
    sent: "Thank you. We have your message and will reply within two business days.",
    error: "We could not send the form. Please check",
    fieldError: "Please check this field.",
    sending: "Sending…",
    submitConfigured: "Send",
    submitFallback: "Write the email",
    emailSubject: "Project inquiry",
    fallbackBodyLabels: { name: "Name", company: "Company", useCase: "What you need", deployment: "Where it has to run" },
    options: {
      industry: { "legal-ip": "Research / IP", "manufacturing-industrial": "Content / Design / Production", "finance-insurance": "Operations / Internal Tools", other: "Other" },
      use_case: { "dataset-package": "Build a dataset", "lora-adapter": "Train a model of our own", "private-deployment": "Deploy an existing model", "evaluation-evidence": "Test or review a model", "air-gapped": "Offline or air-gapped work", "speaking-workshop-panel": "A talk, workshop or panel", other: "Something else" },
      deployment_target: { "apple-silicon": "Our Macs", "on-prem-gpu": "Our server room", "private-cloud": "Our private cloud", "customer-vpc": "Our cloud account", "air-gapped": "An air-gapped room", "edge-devices": "Devices in the field" },
      data_sensitivity: { "trade-secrets": "Trade secrets", "customer-data": "Customer data", "legal-ip": "Legal or IP material", "regulated-records": "Regulated records", "internal-knowledge": "Internal knowledge", other: "Other" },
      air_gapped_required: { yes: "Yes", no: "No", unsure: "Not sure" },
      onsite_intro: { yes: "Yes", no: "No", unsure: "Not sure" },
      timeline: { exploratory: "Just exploring", "0-30-days": "Within a month", "1-3-months": "In 1 to 3 months", "3-6-months": "In 3 to 6 months" },
      support_preference: { "on-site": "On site", remote: "Remote", hybrid: "A mix of both", "continuous-tuning": "Ongoing retraining" }
    }
  },
  zh: {
    confidentialityTitle: "第一次联系，概括说明即可",
    confidentialityBody: "请描述工作和数据的类型，不要提交材料本身。请勿附上机密文件、源代码、客户记录、专利草稿、受法律特权保护的材料或商业秘密。",
    sections: { contact: "关于你", useCase: "工作内容", deploymentTarget: "需要在哪里运行", sensitivitySupport: "数据与合作方式", message: "留言" },
    fields: {
      name: "姓名 *", email: "工作邮箱 *", company: "公司 *", role: "职位", industry: "行业", useCase: "你需要什么",
      deploymentTarget: "需要在哪里运行", dataSensitivity: "涉及的最敏感数据", airGappedRequired: "是否必须在完全断网的环境中运行？",
      onsiteIntro: "希望当面沟通吗？", timeline: "希望何时开始", supportPreference: "希望的合作方式",
      complianceConstraints: "合规要求", message: "留言 *", consent: "我同意 Random Walk 使用以上信息来评估并回复本次咨询。*"
    },
    placeholders: {
      selectOne: "请选择",
      complianceConstraints: "你们需要遵守的规则类型，例如数据存放地点或行业监管。请勿填写机密细节。",
      message: "是什么工作、有哪些数据、模型需要在哪里运行、你们如何审查变更。请勿附上机密材料。"
    },
    inlineWarning: "请勿在留言中附上机密文件、记录、源代码或受特权保护的材料。",
    sent: "谢谢。我们已收到你的留言，会在两个工作日内回复。",
    error: "表单未能发送，请检查",
    fieldError: "请检查此项。",
    sending: "发送中…",
    submitConfigured: "发送",
    submitFallback: "生成邮件",
    emailSubject: "项目咨询",
    fallbackBodyLabels: { name: "姓名", company: "公司", useCase: "你需要什么", deployment: "需要在哪里运行" },
    options: {
      industry: { "legal-ip": "研究 / IP", "manufacturing-industrial": "内容 / 设计 / 生产", "finance-insurance": "运营 / 内部工具", other: "其他" },
      use_case: { "dataset-package": "构建数据集", "lora-adapter": "训练自己的模型", "private-deployment": "部署现有模型", "evaluation-evidence": "测试或评审模型", "air-gapped": "离线或隔离环境中的工作", "speaking-workshop-panel": "演讲、工作坊或圆桌", other: "其他" },
      deployment_target: { "apple-silicon": "我们的 Mac", "on-prem-gpu": "我们的机房", "private-cloud": "我们的私有云", "customer-vpc": "我们的云账号", "air-gapped": "隔离机房", "edge-devices": "现场设备" },
      data_sensitivity: { "trade-secrets": "商业秘密", "customer-data": "客户数据", "legal-ip": "法律或知识产权材料", "regulated-records": "受监管的记录", "internal-knowledge": "内部知识", other: "其他" },
      air_gapped_required: { yes: "是", no: "否", unsure: "不确定" },
      onsite_intro: { yes: "是", no: "否", unsure: "不确定" },
      timeline: { exploratory: "先了解看看", "0-30-days": "一个月内", "1-3-months": "1 到 3 个月内", "3-6-months": "3 到 6 个月内" },
      support_preference: { "on-site": "现场", remote: "远程", hybrid: "两者结合", "continuous-tuning": "持续再训练" }
    }
  },
  ja: {
    confidentialityTitle: "最初のご連絡は概要だけで結構です",
    confidentialityBody: "資料そのものではなく、業務やデータの種類をお書きください。機密ファイル、ソースコード、顧客記録、特許の草案、法的秘匿特権のある資料、営業秘密は含めないでください。",
    sections: { contact: "ご連絡先", useCase: "ご依頼の内容", deploymentTarget: "稼働させる場所", sensitivitySupport: "データと進め方", message: "メッセージ" },
    fields: {
      name: "氏名 *", email: "業務用メールアドレス *", company: "会社名 *", role: "役職", industry: "業界", useCase: "必要なこと",
      deploymentTarget: "稼働させる場所", dataSensitivity: "扱うデータのうち最も機密性の高いもの", airGappedRequired: "外部と完全に切り離して動かす必要がありますか？",
      onsiteIntro: "対面での打ち合わせをご希望ですか？", timeline: "開始のご希望時期", supportPreference: "ご希望の進め方",
      complianceConstraints: "コンプライアンス上の要件", message: "メッセージ *", consent: "本件の確認とご返信のために、Random Walk がこの情報を利用することに同意します。*"
    },
    placeholders: {
      selectOne: "選択してください",
      complianceConstraints: "データの保管場所や業界の規制など、守る必要のあるルールの種類。機密の詳細は含めないでください。",
      message: "どのような業務か、どのようなデータをお持ちか、モデルをどこで動かす必要があるか、変更をどう確認されているか。機密資料は含めないでください。"
    },
    inlineWarning: "機密ファイル、記録、ソースコード、秘匿特権のある資料は含めないでください。",
    sent: "ありがとうございます。メッセージを受け取りました。2 営業日以内にご返信します。",
    error: "送信できませんでした。次の項目をご確認ください",
    fieldError: "この項目をご確認ください。",
    sending: "送信中…",
    submitConfigured: "送信する",
    submitFallback: "メールを作成する",
    emailSubject: "プロジェクトのご相談",
    fallbackBodyLabels: { name: "氏名", company: "会社名", useCase: "必要なこと", deployment: "稼働させる場所" },
    options: {
      industry: { "legal-ip": "研究 / IP", "manufacturing-industrial": "コンテンツ / デザイン / 制作", "finance-insurance": "運用 / 社内ツール", other: "その他" },
      use_case: { "dataset-package": "データセットの構築", "lora-adapter": "自社専用モデルの学習", "private-deployment": "既存モデルの導入", "evaluation-evidence": "モデルの評価・レビュー", "air-gapped": "オフライン・エアギャップ環境での作業", "speaking-workshop-panel": "講演・ワークショップ・パネル", other: "その他" },
      deployment_target: { "apple-silicon": "自社の Mac", "on-prem-gpu": "自社のサーバールーム", "private-cloud": "自社のプライベートクラウド", "customer-vpc": "自社のクラウドアカウント", "air-gapped": "エアギャップ環境", "edge-devices": "現場の端末" },
      data_sensitivity: { "trade-secrets": "営業秘密", "customer-data": "顧客データ", "legal-ip": "法務・知的財産の資料", "regulated-records": "規制対象の記録", "internal-knowledge": "社内のナレッジ", other: "その他" },
      air_gapped_required: { yes: "はい", no: "いいえ", unsure: "未定" },
      onsite_intro: { yes: "はい", no: "いいえ", unsure: "未定" },
      timeline: { exploratory: "まずは情報収集", "0-30-days": "1 か月以内", "1-3-months": "1〜3 か月以内", "3-6-months": "3〜6 か月以内" },
      support_preference: { "on-site": "オンサイト", remote: "リモート", hybrid: "両方の組み合わせ", "continuous-tuning": "継続的な再学習" }
    }
  },
  ko: {
    confidentialityTitle: "첫 문의는 개요만 적어 주세요",
    confidentialityBody: "자료 자체가 아니라 업무와 데이터의 종류를 설명해 주세요. 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적 특권 자료, 영업 비밀은 포함하지 마세요.",
    sections: { contact: "연락처", useCase: "업무 내용", deploymentTarget: "실행 위치", sensitivitySupport: "데이터와 진행 방식", message: "메시지" },
    fields: {
      name: "이름 *", email: "업무용 이메일 *", company: "회사 *", role: "직책", industry: "업종", useCase: "필요한 것",
      deploymentTarget: "실행 위치", dataSensitivity: "관련 데이터 중 가장 민감한 것", airGappedRequired: "외부와 완전히 분리된 환경에서 실행해야 하나요?",
      onsiteIntro: "직접 만나서 이야기하고 싶으신가요?", timeline: "희망 시작 시기", supportPreference: "희망하는 진행 방식",
      complianceConstraints: "컴플라이언스 요건", message: "메시지 *", consent: "Random Walk가 이 문의를 검토하고 답변하기 위해 위 정보를 사용하는 데 동의합니다. *"
    },
    placeholders: {
      selectOne: "선택하세요",
      complianceConstraints: "데이터 보관 위치나 업계 규제처럼 지켜야 하는 규칙의 종류. 기밀 세부 정보는 적지 마세요.",
      message: "어떤 업무인지, 어떤 데이터가 있는지, 모델을 어디에서 실행해야 하는지, 변경 사항을 어떻게 검토하는지. 기밀 자료는 포함하지 마세요."
    },
    inlineWarning: "기밀 파일, 기록, 소스 코드, 특권 자료는 포함하지 마세요.",
    sent: "감사합니다. 메시지를 받았으며 영업일 기준 2일 이내에 답변드리겠습니다.",
    error: "양식을 보내지 못했습니다. 다음 항목을 확인해 주세요",
    fieldError: "이 항목을 확인해 주세요.",
    sending: "보내는 중…",
    submitConfigured: "보내기",
    submitFallback: "이메일 작성",
    emailSubject: "프로젝트 문의",
    fallbackBodyLabels: { name: "이름", company: "회사", useCase: "필요한 것", deployment: "실행 위치" },
    options: {
      industry: { "legal-ip": "연구 / IP", "manufacturing-industrial": "콘텐츠 / 디자인 / 제작", "finance-insurance": "운영 / 사내 도구", other: "기타" },
      use_case: { "dataset-package": "데이터셋 구축", "lora-adapter": "자체 모델 학습", "private-deployment": "기존 모델 도입", "evaluation-evidence": "모델 테스트 또는 검토", "air-gapped": "오프라인·에어갭 환경 작업", "speaking-workshop-panel": "강연·워크숍·패널", other: "기타" },
      deployment_target: { "apple-silicon": "우리 회사의 Mac", "on-prem-gpu": "우리 회사의 서버실", "private-cloud": "우리 회사의 프라이빗 클라우드", "customer-vpc": "우리 회사의 클라우드 계정", "air-gapped": "에어갭 환경", "edge-devices": "현장 기기" },
      data_sensitivity: { "trade-secrets": "영업 비밀", "customer-data": "고객 데이터", "legal-ip": "법률·지식재산 자료", "regulated-records": "규제 대상 기록", "internal-knowledge": "사내 지식", other: "기타" },
      air_gapped_required: { yes: "예", no: "아니요", unsure: "미정" },
      onsite_intro: { yes: "예", no: "아니요", unsure: "미정" },
      timeline: { exploratory: "우선 알아보는 중", "0-30-days": "한 달 이내", "1-3-months": "1~3개월 이내", "3-6-months": "3~6개월 이내" },
      support_preference: { "on-site": "현장 방문", remote: "원격", hybrid: "둘 다", "continuous-tuning": "지속적인 재학습" }
    }
  }
};

function fieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function ContactForm({ locale, pageOrigin, emailAddress }: { locale: Locale; pageOrigin: string; emailAddress: string }) {
  const copy = contactFormCopy[locale];
  const speakingCopy = speakingContactCopy[locale];
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT;
  const [isSpeakingIntent, setIsSpeakingIntent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const canPost = useMemo(() => Boolean(endpoint), [endpoint]);
  const errorSet = useMemo(() => new Set(errors), [errors]);
  const globalError = errorSet.has("form") || errorSet.has("file") || errorSet.has("locale") || errorSet.has("page_origin");

  useEffect(() => {
    if (status !== "sent") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 5200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    setIsSpeakingIntent(new URLSearchParams(window.location.search).get("intent") === "speaking");
  }, []);

  function fieldErrorId(field: string) {
    return `contact-${field.replaceAll("_", "-")}-error`;
  }

  function fieldErrorProps(field: string) {
    if (!errorSet.has(field)) {
      return {};
    }

    return {
      "aria-describedby": fieldErrorId(field),
      "aria-invalid": true
    };
  }

  function FieldError({ field }: { field: string }) {
    if (!errorSet.has(field)) return null;

    return (
      <p className="rw-field-error" id={fieldErrorId(field)}>
        {copy.fieldError}
      </p>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: fieldValue(formData, "name"),
      email: fieldValue(formData, "email"),
      company: fieldValue(formData, "company"),
      role: fieldValue(formData, "role"),
      industry: fieldValue(formData, "industry"),
      use_case: fieldValue(formData, "use_case"),
      deployment_target: formData.getAll("deployment_target"),
      data_sensitivity: fieldValue(formData, "data_sensitivity"),
      air_gapped_required: fieldValue(formData, "air_gapped_required"),
      onsite_intro: fieldValue(formData, "onsite_intro"),
      timeline: fieldValue(formData, "timeline"),
      support_preference: formData.getAll("support_preference"),
      compliance_constraints: fieldValue(formData, "compliance_constraints"),
      message: fieldValue(formData, "message"),
      consent: formData.get("consent") === "on",
      locale,
      page_origin: pageOrigin,
      inquiry_intent: fieldValue(formData, "inquiry_intent"),
      utm_source: fieldValue(formData, "utm_source")
    };

    const result = validateContactPayload(payload);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("error");
      return;
    }

    if (!canPost || !endpoint) {
      setErrors([]);
      setStatus("idle");
      const subject = encodeURIComponent(isSpeakingIntent ? speakingCopy.emailSubject : copy.emailSubject);
      const useCaseLabel = (copy.options.use_case as Record<string, string>)[payload.use_case] ?? payload.use_case;
      const deploymentLabels = payload.deployment_target.map((target) => {
        const key = String(target);
        return (copy.options.deployment_target as Record<string, string>)[key] ?? key;
      });
      const body = encodeURIComponent(`${copy.fallbackBodyLabels.name}: ${payload.name}\n${copy.fallbackBodyLabels.company}: ${payload.company}\n${copy.fallbackBodyLabels.useCase}: ${useCaseLabel}\n${copy.fallbackBodyLabels.deployment}: ${deploymentLabels.join(", ")}\n\n${payload.message}`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setErrors([]);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });

    if (response.ok) {
      setErrors([]);
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrors(["form"]);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      {status === "sent" ? (
        <div className="rw-form-toast" role="status" aria-live="polite">
          <p>{copy.sent}</p>
        </div>
      ) : null}

      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page_origin" value={pageOrigin} />
      <input type="hidden" name="inquiry_intent" value={isSpeakingIntent ? "speaking" : "project"} />
      <input type="hidden" name="utm_source" value="" />

      <div className="rw-form-alert">
        <p className="rw-eyebrow text-[var(--rw-warning)]">{copy.confidentialityTitle}</p>
        <p className="rw-body mt-3">
          {copy.confidentialityBody}
        </p>
      </div>

      {isSpeakingIntent ? (
        <div className="rw-contact-intent-note">
          <p className="rw-eyebrow">{speakingCopy.panelTitle}</p>
          <p className="rw-body mt-3">{speakingCopy.panelBody}</p>
        </div>
      ) : null}

      <div className="rw-form-section">
        <p className="rw-form-section-label">{copy.sections.contact}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.name}</span>
            <input className="rw-field" name="name" required {...fieldErrorProps("name")} />
            <FieldError field="name" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.email}</span>
            <input className="rw-field" name="email" type="email" required {...fieldErrorProps("email")} />
            <FieldError field="email" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.company}</span>
            <input className="rw-field" name="company" required {...fieldErrorProps("company")} />
            <FieldError field="company" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.role}</span>
            <input className="rw-field" name="role" />
          </label>
        </div>
      </div>

      <div className="rw-form-section">
        <p className="rw-form-section-label">{copy.sections.useCase}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.industry}</span>
            <select className="rw-field" name="industry" defaultValue="" {...fieldErrorProps("industry")}>
              <option value="">{copy.placeholders.selectOne}</option>
              {contactFieldOptions.industry.map((option) => <option key={option} value={option}>{copy.options.industry[option]}</option>)}
            </select>
            <FieldError field="industry" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{isSpeakingIntent ? speakingCopy.topicLabel : copy.fields.useCase}</span>
            <select className="rw-field" name="use_case" key={isSpeakingIntent ? "speaking-use-case" : "project-use-case"} defaultValue={isSpeakingIntent ? "speaking-workshop-panel" : ""} {...fieldErrorProps("use_case")}>
              <option value="">{copy.placeholders.selectOne}</option>
              {contactFieldOptions.use_case.map((option) => <option key={option} value={option}>{copy.options.use_case[option]}</option>)}
            </select>
            <FieldError field="use_case" />
          </label>
        </div>
      </div>

      <div className="rw-form-section">
        <p className="rw-form-section-label">{copy.sections.deploymentTarget}</p>
        <fieldset className="rw-fieldset grid gap-3" {...fieldErrorProps("deployment_target")}>
          <legend className="sr-only">{copy.fields.deploymentTarget}</legend>
          <span className="rw-fieldset-title" aria-hidden="true">{copy.fields.deploymentTarget}</span>
          <div className="grid gap-2 md:grid-cols-2">
            {contactFieldOptions.deployment_target.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input type="checkbox" name="deployment_target" value={option} />
                <span>{copy.options.deployment_target[option]}</span>
              </label>
            ))}
          </div>
          <FieldError field="deployment_target" />
        </fieldset>
      </div>

      <div className="rw-form-section">
        <p className="rw-form-section-label">{copy.sections.sensitivitySupport}</p>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.dataSensitivity}</span>
            <select className="rw-field" name="data_sensitivity" defaultValue="" {...fieldErrorProps("data_sensitivity")}>
              <option value="">{copy.placeholders.selectOne}</option>
              {contactFieldOptions.data_sensitivity.map((option) => <option key={option} value={option}>{copy.options.data_sensitivity[option]}</option>)}
            </select>
            <FieldError field="data_sensitivity" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.airGappedRequired}</span>
            <select className="rw-field" name="air_gapped_required" defaultValue="" {...fieldErrorProps("air_gapped_required")}>
              <option value="">{copy.placeholders.selectOne}</option>
              {contactFieldOptions.air_gapped_required.map((option) => <option key={option} value={option}>{copy.options.air_gapped_required[option]}</option>)}
            </select>
            <FieldError field="air_gapped_required" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.onsiteIntro}</span>
            <select className="rw-field" name="onsite_intro" defaultValue="" {...fieldErrorProps("onsite_intro")}>
              <option value="">{copy.placeholders.selectOne}</option>
              {contactFieldOptions.onsite_intro.map((option) => <option key={option} value={option}>{copy.options.onsite_intro[option]}</option>)}
            </select>
            <FieldError field="onsite_intro" />
          </label>
        </div>

        <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.timeline}</span>
            <select className="rw-field" name="timeline" defaultValue="exploratory">
              {contactFieldOptions.timeline.map((option) => <option key={option} value={option}>{copy.options.timeline[option]}</option>)}
            </select>
          </label>
          <fieldset className="rw-fieldset grid gap-2">
            <legend className="sr-only">{copy.fields.supportPreference}</legend>
            <span className="rw-fieldset-title" aria-hidden="true">{copy.fields.supportPreference}</span>
            {contactFieldOptions.support_preference.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input type="checkbox" name="support_preference" value={option} />
                <span>{copy.options.support_preference[option]}</span>
              </label>
            ))}
          </fieldset>
        </div>
      </div>

      <div className="rw-form-section">
        <p className="rw-form-section-label">{copy.sections.message}</p>
        <label className="grid gap-2">
          <span className="font-medium">{copy.fields.complianceConstraints}</span>
          <textarea className="rw-field min-h-24" name="compliance_constraints" placeholder={copy.placeholders.complianceConstraints} />
        </label>

        <label className="mt-4 grid gap-2">
          <span className="font-medium">{copy.fields.message}</span>
          <textarea className="rw-field min-h-32" name="message" required placeholder={isSpeakingIntent ? speakingCopy.messagePlaceholder : copy.placeholders.message} {...fieldErrorProps("message")} />
          <FieldError field="message" />
        </label>
        <p className="rw-form-inline-warning rw-caption mt-3">{copy.inlineWarning}</p>
      </div>

      <div className="grid gap-2">
        <label className="flex items-start gap-3">
          <input className="mt-1" type="checkbox" name="consent" required {...fieldErrorProps("consent")} />
          <span>{copy.fields.consent}</span>
        </label>
        <FieldError field="consent" />
      </div>

      {status === "error" && globalError ? <p className="rw-form-status rw-form-status-error">{copy.error}.</p> : null}

      <button className="rw-button rw-button-primary justify-self-start" type="submit" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : canPost ? copy.submitConfigured : copy.submitFallback}
      </button>
    </form>
  );
}

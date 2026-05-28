"use client";

import { useEffect, useMemo, useState } from "react";
import { contactFieldOptions, validateContactPayload } from "@/lib/contact-schema";
import type { Locale } from "@/lib/i18n";

const labels = {
  industry: {
    "legal-ip": "Research / IP",
    "manufacturing-industrial": "Content / Design / Production",
    "finance-insurance": "Operations / Internal Tools",
    other: "Other"
  },
  use_case: {
    "dataset-package": "Dataset Package",
    "lora-adapter": "LoRA Adapter",
    "private-deployment": "Private Deployment",
    "evaluation-evidence": "Evaluation Evidence",
    "air-gapped": "Air-gapped",
    other: "Other"
  },
  deployment_target: {
    "apple-silicon": "Apple Silicon",
    "on-prem-gpu": "On-prem GPU",
    "private-cloud": "Private Cloud",
    "customer-vpc": "Customer VPC",
    "air-gapped": "Air-gapped",
    "edge-devices": "Edge Devices"
  },
  data_sensitivity: {
    "trade-secrets": "Trade secrets",
    "customer-data": "Customer data",
    "legal-ip": "Legal / IP",
    "regulated-records": "Regulated records",
    "internal-knowledge": "Internal knowledge",
    other: "Other"
  },
  air_gapped_required: {
    yes: "Yes",
    no: "No",
    unsure: "Not sure"
  },
  onsite_intro: {
    yes: "Yes",
    no: "No",
    unsure: "Not sure"
  },
  timeline: {
    exploratory: "Exploratory",
    "0-30-days": "0-30 days",
    "1-3-months": "1-3 months",
    "3-6-months": "3-6 months"
  },
  support_preference: {
    "on-site": "On-site",
    remote: "Remote",
    hybrid: "Hybrid",
    "continuous-tuning": "Continuous tuning"
  }
} as const;

type ContactOptionLabels = {
  [Field in keyof typeof contactFieldOptions]: Record<(typeof contactFieldOptions)[Field][number], string>;
};

const contactFormCopy: Record<Locale, {
  confidentialityTitle: string;
  confidentialityBody: string;
  sections: {
    contact: string;
    useCase: string;
    deploymentTarget: string;
    sensitivitySupport: string;
    message: string;
  };
  fields: {
    name: string;
    email: string;
    company: string;
    role: string;
    industry: string;
    useCase: string;
    deploymentTarget: string;
    dataSensitivity: string;
    airGappedRequired: string;
    onsiteIntro: string;
    timeline: string;
    supportPreference: string;
    complianceConstraints: string;
    message: string;
    consent: string;
  };
  placeholders: {
    selectOne: string;
    complianceConstraints: string;
    message: string;
  };
  inlineWarning: string;
  sent: string;
  error: string;
  fieldError: string;
  sending: string;
  submitConfigured: string;
  submitFallback: string;
  emailSubject: string;
  fallbackBodyLabels: {
    name: string;
    company: string;
    useCase: string;
    deployment: string;
  };
  options: ContactOptionLabels;
}> = {
  en: {
    confidentialityTitle: "Confidentiality warning",
    confidentialityBody: "Please do not include confidential files, source code, customer records, patent drafts, legally privileged material, or trade secrets in this first-contact form.",
    sections: { contact: "Contact", useCase: "Use case", deploymentTarget: "Deployment target", sensitivitySupport: "Sensitivity and support", message: "Message" },
    fields: {
      name: "Name *",
      email: "Work email *",
      company: "Company *",
      role: "Role",
      industry: "Industry *",
      useCase: "Use case *",
      deploymentTarget: "Deployment target *",
      dataSensitivity: "Data sensitivity *",
      airGappedRequired: "Air-gapped required *",
      onsiteIntro: "FDE support mode *",
      timeline: "Timeline",
      supportPreference: "Support preference",
      complianceConstraints: "Compliance constraints",
      message: "Message *",
      consent: "I agree that Random Walk may use this information to review and respond to this inquiry. *"
    },
    placeholders: {
      selectOne: "Select one",
      complianceConstraints: "Describe categories, constraints, and review requirements only. Do not include confidential details.",
      message: "Describe the task, data category, deployment target, review needs, and support expectations. Do not include confidential material."
    },
    inlineWarning: "Do not include confidential files, records, source code, or privileged material in this message.",
    sent: "Thank you. We received your request and will review the deployment environment, data sensitivity category, and support needs before responding.",
    error: "The form could not be submitted. Please check",
    fieldError: "Please check this field.",
    sending: "Sending...",
    submitConfigured: "Submit project constraints",
    submitFallback: "Prepare project inquiry",
    emailSubject: "Private AI project scoping request",
    fallbackBodyLabels: { name: "Name", company: "Company", useCase: "Use case", deployment: "Deployment" },
    options: labels
  },
  zh: {
    confidentialityTitle: "保密提示",
    confidentialityBody: "请不要在首次联系表单中包含机密文件、源代码、客户记录、专利草稿、受法律特权保护的材料或商业秘密。",
    sections: { contact: "联系信息", useCase: "使用场景", deploymentTarget: "部署目标", sensitivitySupport: "敏感度与支持", message: "消息" },
    fields: {
      name: "姓名 *",
      email: "工作邮箱 *",
      company: "公司 *",
      role: "职位",
      industry: "行业 *",
      useCase: "使用场景 *",
      deploymentTarget: "部署目标 *",
      dataSensitivity: "数据敏感度 *",
      airGappedRequired: "是否需要隔离环境 *",
      onsiteIntro: "FDE 支持方式 *",
      timeline: "时间计划",
      supportPreference: "支持偏好",
      complianceConstraints: "合规约束",
      message: "消息 *",
      consent: "我同意 Random Walk 使用这些信息来评审并回复本次咨询。*"
    },
    placeholders: {
      selectOne: "请选择",
      complianceConstraints: "只描述类别、约束和评审要求。不要包含机密细节。",
      message: "描述任务、数据类别、部署目标、评审需求和支持预期。不要包含机密材料。"
    },
    inlineWarning: "请勿在消息中包含机密文件、记录、源代码或受特权保护的材料。",
    sent: "谢谢。我们已收到请求，会在回复前评审部署环境、数据敏感度类别和支持需求。",
    error: "表单未能提交。请检查",
    fieldError: "请检查此项。",
    sending: "发送中...",
    submitConfigured: "提交项目约束",
    submitFallback: "准备项目咨询",
    emailSubject: "私有 AI 项目界定请求",
    fallbackBodyLabels: { name: "姓名", company: "公司", useCase: "使用场景", deployment: "部署目标" },
    options: {
      industry: { "legal-ip": "研究 / IP", "manufacturing-industrial": "内容 / 设计 / 生产", "finance-insurance": "运营 / 内部工具", other: "其他" },
      use_case: { "dataset-package": "数据集包", "lora-adapter": "LoRA 适配器", "private-deployment": "私有部署", "evaluation-evidence": "评估证据", "air-gapped": "隔离环境", other: "其他" },
      deployment_target: { "apple-silicon": "Apple Silicon", "on-prem-gpu": "本地 GPU", "private-cloud": "私有云", "customer-vpc": "客户 VPC", "air-gapped": "隔离环境", "edge-devices": "边缘设备" },
      data_sensitivity: { "trade-secrets": "商业秘密", "customer-data": "客户数据", "legal-ip": "法律 / IP", "regulated-records": "受监管记录", "internal-knowledge": "内部知识", other: "其他" },
      air_gapped_required: { yes: "是", no: "否", unsure: "不确定" },
      onsite_intro: { yes: "是", no: "否", unsure: "不确定" },
      timeline: { exploratory: "探索阶段", "0-30-days": "0-30 天", "1-3-months": "1-3 个月", "3-6-months": "3-6 个月" },
      support_preference: { "on-site": "现场", remote: "远程", hybrid: "混合", "continuous-tuning": "持续调优" }
    }
  },
  ja: {
    confidentialityTitle: "機密情報に関する注意",
    confidentialityBody: "初回連絡フォームには、機密ファイル、ソースコード、顧客記録、特許草案、法的秘匿特権のある資料、営業秘密を含めないでください。",
    sections: { contact: "連絡先", useCase: "用途", deploymentTarget: "配備先", sensitivitySupport: "感度とサポート", message: "メッセージ" },
    fields: {
      name: "氏名 *",
      email: "業務用メール *",
      company: "会社名 *",
      role: "役割",
      industry: "業界 *",
      useCase: "用途 *",
      deploymentTarget: "配備先 *",
      dataSensitivity: "データ感度 *",
      airGappedRequired: "エアギャップ要否 *",
      onsiteIntro: "FDE 支援方式 *",
      timeline: "時期",
      supportPreference: "サポート希望",
      complianceConstraints: "コンプライアンス制約",
      message: "メッセージ *",
      consent: "Random Walk が本問い合わせの確認と返信のためにこの情報を利用することに同意します。*"
    },
    placeholders: {
      selectOne: "選択してください",
      complianceConstraints: "カテゴリ、制約、レビュー要件のみを記載してください。機密詳細は含めないでください。",
      message: "タスク、データ分類、配備先、レビュー要件、サポート期待値を記載してください。機密資料は含めないでください。"
    },
    inlineWarning: "このメッセージに機密ファイル、記録、ソースコード、秘匿特権のある資料を含めないでください。",
    sent: "ありがとうございます。配備環境、データ感度区分、サポート要件を確認したうえで返信します。",
    error: "フォームを送信できませんでした。確認してください",
    fieldError: "この項目を確認してください。",
    sending: "送信中...",
    submitConfigured: "プロジェクト制約を送信",
    submitFallback: "プロジェクト相談を準備",
    emailSubject: "プライベート AI プロジェクト相談",
    fallbackBodyLabels: { name: "氏名", company: "会社名", useCase: "用途", deployment: "配備先" },
    options: {
      industry: { "legal-ip": "研究 / IP", "manufacturing-industrial": "コンテンツ / デザイン / 制作", "finance-insurance": "運用 / 内部ツール", other: "その他" },
      use_case: { "dataset-package": "データセットパッケージ", "lora-adapter": "LoRA アダプター", "private-deployment": "プライベート配備", "evaluation-evidence": "評価証拠", "air-gapped": "エアギャップ", other: "その他" },
      deployment_target: { "apple-silicon": "Apple Silicon", "on-prem-gpu": "オンプレ GPU", "private-cloud": "プライベートクラウド", "customer-vpc": "顧客 VPC", "air-gapped": "エアギャップ", "edge-devices": "エッジデバイス" },
      data_sensitivity: { "trade-secrets": "営業秘密", "customer-data": "顧客データ", "legal-ip": "法律 / IP", "regulated-records": "規制対象記録", "internal-knowledge": "内部知識", other: "その他" },
      air_gapped_required: { yes: "はい", no: "いいえ", unsure: "未定" },
      onsite_intro: { yes: "はい", no: "いいえ", unsure: "未定" },
      timeline: { exploratory: "検討段階", "0-30-days": "0-30 日", "1-3-months": "1-3 か月", "3-6-months": "3-6 か月" },
      support_preference: { "on-site": "オンサイト", remote: "リモート", hybrid: "ハイブリッド", "continuous-tuning": "継続調整" }
    }
  },
  ko: {
    confidentialityTitle: "기밀 정보 안내",
    confidentialityBody: "최초 연락 양식에는 기밀 파일, 소스 코드, 고객 기록, 특허 초안, 법적 특권 자료 또는 영업 비밀을 포함하지 마세요.",
    sections: { contact: "연락처", useCase: "사용 사례", deploymentTarget: "배포 대상", sensitivitySupport: "민감도와 지원", message: "메시지" },
    fields: {
      name: "이름 *",
      email: "업무용 이메일 *",
      company: "회사 *",
      role: "역할",
      industry: "산업 *",
      useCase: "사용 사례 *",
      deploymentTarget: "배포 대상 *",
      dataSensitivity: "데이터 민감도 *",
      airGappedRequired: "에어갭 필요 여부 *",
      onsiteIntro: "FDE 지원 방식 *",
      timeline: "일정",
      supportPreference: "지원 선호",
      complianceConstraints: "컴플라이언스 제약",
      message: "메시지 *",
      consent: "Random Walk가 이 문의를 검토하고 응답하기 위해 이 정보를 사용하는 데 동의합니다. *"
    },
    placeholders: {
      selectOne: "선택하세요",
      complianceConstraints: "범주, 제약, 검토 요구사항만 설명하세요. 기밀 세부 정보는 포함하지 마세요.",
      message: "작업, 데이터 범주, 배포 대상, 검토 필요, 지원 기대치를 설명하세요. 기밀 자료는 포함하지 마세요."
    },
    inlineWarning: "이 메시지에 기밀 파일, 기록, 소스 코드 또는 특권 자료를 포함하지 마세요.",
    sent: "감사합니다. 배포 환경, 데이터 민감도 범주, 지원 요구를 검토한 후 응답하겠습니다.",
    error: "양식을 제출할 수 없습니다. 확인하세요",
    fieldError: "이 항목을 확인하세요.",
    sending: "전송 중...",
    submitConfigured: "프로젝트 제약 제출",
    submitFallback: "프로젝트 문의 준비",
    emailSubject: "프라이빗 AI 프로젝트 범위화 요청",
    fallbackBodyLabels: { name: "이름", company: "회사", useCase: "사용 사례", deployment: "배포 대상" },
    options: {
      industry: { "legal-ip": "연구 / IP", "manufacturing-industrial": "콘텐츠 / 디자인 / 제작", "finance-insurance": "운영 / 내부 도구", other: "기타" },
      use_case: { "dataset-package": "데이터셋 패키지", "lora-adapter": "LoRA 어댑터", "private-deployment": "프라이빗 배포", "evaluation-evidence": "평가 증거", "air-gapped": "에어갭", other: "기타" },
      deployment_target: { "apple-silicon": "Apple Silicon", "on-prem-gpu": "온프레미스 GPU", "private-cloud": "프라이빗 클라우드", "customer-vpc": "고객 VPC", "air-gapped": "에어갭", "edge-devices": "엣지 디바이스" },
      data_sensitivity: { "trade-secrets": "영업 비밀", "customer-data": "고객 데이터", "legal-ip": "법률 / IP", "regulated-records": "규제 기록", "internal-knowledge": "내부 지식", other: "기타" },
      air_gapped_required: { yes: "예", no: "아니요", unsure: "미정" },
      onsite_intro: { yes: "예", no: "아니요", unsure: "미정" },
      timeline: { exploratory: "검토 단계", "0-30-days": "0-30일", "1-3-months": "1-3개월", "3-6-months": "3-6개월" },
      support_preference: { "on-site": "온사이트", remote: "원격", hybrid: "하이브리드", "continuous-tuning": "지속 튜닝" }
    }
  }
};

function fieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function ContactForm({ locale, pageOrigin, emailAddress }: { locale: Locale; pageOrigin: string; emailAddress: string }) {
  const copy = contactFormCopy[locale];
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT;
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
      const subject = encodeURIComponent(copy.emailSubject);
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
      <input type="hidden" name="utm_source" value="" />

      <div className="rw-form-alert">
        <p className="rw-eyebrow text-[var(--rw-warning)]">{copy.confidentialityTitle}</p>
        <p className="rw-body mt-3">
          {copy.confidentialityBody}
        </p>
      </div>

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
            <select className="rw-field" name="industry" required defaultValue="" {...fieldErrorProps("industry")}>
              <option value="" disabled>{copy.placeholders.selectOne}</option>
              {contactFieldOptions.industry.map((option) => <option key={option} value={option}>{copy.options.industry[option]}</option>)}
            </select>
            <FieldError field="industry" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.useCase}</span>
            <select className="rw-field" name="use_case" required defaultValue="" {...fieldErrorProps("use_case")}>
              <option value="" disabled>{copy.placeholders.selectOne}</option>
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
            <select className="rw-field" name="data_sensitivity" required defaultValue="" {...fieldErrorProps("data_sensitivity")}>
              <option value="" disabled>{copy.placeholders.selectOne}</option>
              {contactFieldOptions.data_sensitivity.map((option) => <option key={option} value={option}>{copy.options.data_sensitivity[option]}</option>)}
            </select>
            <FieldError field="data_sensitivity" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.airGappedRequired}</span>
            <select className="rw-field" name="air_gapped_required" required defaultValue="" {...fieldErrorProps("air_gapped_required")}>
              <option value="" disabled>{copy.placeholders.selectOne}</option>
              {contactFieldOptions.air_gapped_required.map((option) => <option key={option} value={option}>{copy.options.air_gapped_required[option]}</option>)}
            </select>
            <FieldError field="air_gapped_required" />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">{copy.fields.onsiteIntro}</span>
            <select className="rw-field" name="onsite_intro" required defaultValue="" {...fieldErrorProps("onsite_intro")}>
              <option value="" disabled>{copy.placeholders.selectOne}</option>
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
          <textarea className="rw-field min-h-32" name="message" required placeholder={copy.placeholders.message} {...fieldErrorProps("message")} />
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

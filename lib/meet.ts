import type { Locale } from "./i18n";

export const meetTimeZone = "Asia/Tokyo";
export const meetLeadDays = 2;
export const meetDurationMinutes = 120;

export const meetSlots = [
  { id: "morning", start: "10:00", end: "12:00", policy: "blocked" },
  { id: "early-afternoon", start: "14:00", end: "16:00", policy: "bookable" },
  { id: "late-afternoon", start: "16:00", end: "18:00", policy: "bookable" }
] as const;

export type MeetSlotId = (typeof meetSlots)[number]["id"];

type MeetSlot = (typeof meetSlots)[number];

export const meetBookableSlotIds = meetSlots.filter((slot) => slot.policy === "bookable").map((slot) => slot.id) as MeetSlotId[];

export type MeetValidationInput = {
  date?: unknown;
  slotId?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  locale?: unknown;
};

export type MeetValidationResult =
  | {
      ok: true;
      data: {
        date: string;
        slotId: MeetSlotId;
        name: string;
        email: string;
        phone: string;
        message: string;
        locale: Locale;
      };
      errors?: never;
    }
  | { ok: false; errors: string[]; data?: never };

export const meetPageCopy: Record<
  Locale,
  {
    metadataTitle: string;
    metadataDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    address: {
      label: string;
      fallback: string;
      maps: string;
    };
    calendar: {
      title: string;
      previous: string;
      next: string;
      weekdays: string[];
      unavailable: string;
      selected: string;
    };
    slots: {
      title: string;
      status: {
        booked: string;
        available: string;
        selected: string;
        unavailable: string;
      };
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      error: string;
      fieldError: string;
    };
    confirmation: {
      title: string;
      body: string;
      another: string;
      reference: string;
    };
  }
> = {
  en: {
    metadataTitle: "Choose a visit time",
    metadataDescription: "Choose a time to visit Random Walk's office for a focused in-person conversation.",
    hero: {
      eyebrow: "Office visit",
      title: "Choose a visit time.",
      description: "Please select a visit time. We will reserve time at our office for your meeting. If the schedule needs to change, we will follow up through your contact details."
    },
    address: {
      label: "Visit location",
      fallback: "Random Walk 株式会社, Tokyo, Japan",
      maps: "View on Google Maps"
    },
    calendar: {
      title: "Date",
      previous: "Previous month",
      next: "Next month",
      weekdays: ["S", "M", "T", "W", "T", "F", "S"],
      unavailable: "Unavailable",
      selected: "Selected"
    },
    slots: {
      title: "Time",
      status: {
        booked: "Booked",
        available: "Available",
        selected: "Selected",
        unavailable: "Unavailable"
      }
    },
    form: {
      title: "Details",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+81 ...",
      messagePlaceholder: "Briefly share who will visit and what you would like to discuss.",
      submit: "Request visit",
      submitting: "Sending...",
      error: "We could not submit this request. Please try again or email biz@random-walk.co.jp.",
      fieldError: "Please check this field."
    },
    confirmation: {
      title: "Request received.",
      body: "We will reserve time at our office for your selected meeting. If the schedule needs to change, we will follow up through your contact details.",
      another: "Choose another time",
      reference: "Reference"
    }
  },
  zh: {
    metadataTitle: "选择到访时间",
    metadataDescription: "选择一个到访 Random Walk 办公室的时间。",
    hero: {
      eyebrow: "到访预约",
      title: "选择到访时间。",
      description: "请选择一个到访时间。我们会在办公室为本次会面预留时间；如果该时间需要调整，会通过你的联系方式跟进。"
    },
    address: {
      label: "到访地点",
      fallback: "Random Walk 株式会社, Tokyo, Japan",
      maps: "在 Google Maps 查看"
    },
    calendar: {
      title: "日期",
      previous: "上个月",
      next: "下个月",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      unavailable: "不可预约",
      selected: "已选择"
    },
    slots: {
      title: "时间",
      status: {
        booked: "已安排",
        available: "可预约",
        selected: "已选择",
        unavailable: "不可预约"
      }
    },
    form: {
      title: "留言",
      name: "姓名",
      email: "邮箱",
      phone: "电话",
      message: "留言",
      namePlaceholder: "你的姓名",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+81 ...",
      messagePlaceholder: "简单说明到访人员和希望讨论的内容。",
      submit: "提交预约",
      submitting: "提交中...",
      error: "预约未能提交。请重试，或发送邮件至 biz@random-walk.co.jp。",
      fieldError: "请检查此项。"
    },
    confirmation: {
      title: "已收到预约请求。",
      body: "我们会在办公室为所选时间预留会面。如时间需要调整，会通过你的联系方式跟进。",
      another: "选择其他时间",
      reference: "参考编号"
    }
  },
  ja: {
    metadataTitle: "訪問時間を選択",
    metadataDescription: "Random Walk のオフィスでの対面相談時間を選択してください。",
    hero: {
      eyebrow: "Office visit",
      title: "訪問時間を選択してください。",
      description: "訪問時間をお選びください。オフィスでの面談時間を確保します。日程の調整が必要な場合は、ご連絡先にお知らせします。"
    },
    address: {
      label: "訪問先",
      fallback: "Random Walk 株式会社, Tokyo, Japan",
      maps: "Google Maps で見る"
    },
    calendar: {
      title: "日付",
      previous: "前の月",
      next: "次の月",
      weekdays: ["日", "月", "火", "水", "木", "金", "土"],
      unavailable: "予約不可",
      selected: "選択中"
    },
    slots: {
      title: "時間",
      status: {
        booked: "予定あり",
        available: "予約可",
        selected: "選択中",
        unavailable: "予約不可"
      }
    },
    form: {
      title: "詳細",
      name: "お名前",
      email: "メール",
      phone: "電話番号",
      message: "メッセージ",
      namePlaceholder: "お名前",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+81 ...",
      messagePlaceholder: "訪問される方と相談内容を簡単にご記入ください。",
      submit: "訪問をリクエスト",
      submitting: "送信中...",
      error: "送信できませんでした。再度お試しいただくか、biz@random-walk.co.jp までご連絡ください。",
      fieldError: "この項目をご確認ください。"
    },
    confirmation: {
      title: "リクエストを受け付けました。",
      body: "選択された時間にオフィスでの面談時間を確保します。日程の調整が必要な場合は、ご連絡先にお知らせします。",
      another: "別の時間を選ぶ",
      reference: "参照番号"
    }
  },
  ko: {
    metadataTitle: "방문 시간 선택",
    metadataDescription: "Random Walk 사무실 방문 시간을 선택하세요.",
    hero: {
      eyebrow: "Office visit",
      title: "방문 시간을 선택하세요.",
      description: "방문 시간을 선택해 주세요. 해당 시간에는 사무실에서 미팅을 준비합니다. 일정 조정이 필요하면 남겨주신 연락처로 안내드리겠습니다."
    },
    address: {
      label: "방문 장소",
      fallback: "Random Walk 株式会社, Tokyo, Japan",
      maps: "Google Maps에서 보기"
    },
    calendar: {
      title: "날짜",
      previous: "이전 달",
      next: "다음 달",
      weekdays: ["일", "월", "화", "수", "목", "금", "토"],
      unavailable: "예약 불가",
      selected: "선택됨"
    },
    slots: {
      title: "시간",
      status: {
        booked: "예약됨",
        available: "예약 가능",
        selected: "선택됨",
        unavailable: "예약 불가"
      }
    },
    form: {
      title: "내용",
      name: "이름",
      email: "이메일",
      phone: "전화",
      message: "메시지",
      namePlaceholder: "이름",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+81 ...",
      messagePlaceholder: "방문 인원과 논의하고 싶은 내용을 간단히 적어주세요.",
      submit: "방문 요청",
      submitting: "전송 중...",
      error: "요청을 보낼 수 없습니다. 다시 시도하거나 biz@random-walk.co.jp 로 연락해 주세요.",
      fieldError: "이 항목을 확인해 주세요."
    },
    confirmation: {
      title: "요청을 받았습니다.",
      body: "선택한 시간에 사무실 미팅을 준비합니다. 일정 조정이 필요하면 남겨주신 연락처로 안내드리겠습니다.",
      another: "다른 시간 선택",
      reference: "참조 번호"
    }
  }
};

const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isMeetSlotId(value: unknown): value is MeetSlotId {
  return typeof value === "string" && meetSlots.some((slot) => slot.id === value);
}

export function findMeetSlot(slotId: MeetSlotId): MeetSlot {
  return meetSlots.find((slot) => slot.id === slotId) ?? meetSlots[0];
}

export function formatMeetSlot(slot: Pick<MeetSlot, "start" | "end">) {
  return `${slot.start}-${slot.end}`;
}

export function isBookableMeetSlot(slotId: MeetSlotId) {
  return findMeetSlot(slotId).policy === "bookable";
}

function parseIsoDate(dateIso: string) {
  if (!isoDatePattern.test(dateIso)) return null;
  const [year, month, day] = dateIso.split("-").map(Number);
  return { year, month, day };
}

function makeIsoDate(year: number, month: number, day: number) {
  return `${year.toString().padStart(4, "0")}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

export function getTokyoTodayIso(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: meetTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(now);
  const year = parts.find((part) => part.type === "year")?.value ?? "1970";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";
  return `${year}-${month}-${day}`;
}

export function addDaysIso(dateIso: string, days: number) {
  const date = parseIsoDate(dateIso);
  if (!date) return dateIso;
  const next = new Date(Date.UTC(date.year, date.month - 1, date.day + days, 12));
  return makeIsoDate(next.getUTCFullYear(), next.getUTCMonth() + 1, next.getUTCDate());
}

export function compareIsoDate(a: string, b: string) {
  return a.localeCompare(b);
}

export function getEarliestMeetDateIso(todayIso = getTokyoTodayIso()) {
  return addDaysIso(todayIso, meetLeadDays);
}

export function getWeekdayIso(dateIso: string) {
  const date = parseIsoDate(dateIso);
  if (!date) return -1;
  return new Date(Date.UTC(date.year, date.month - 1, date.day, 12)).getUTCDay();
}

export function isWeekendIso(dateIso: string) {
  const weekday = getWeekdayIso(dateIso);
  return weekday === 0 || weekday === 6;
}

export function isSelectableMeetDate(dateIso: string, todayIso = getTokyoTodayIso()) {
  return isoDatePattern.test(dateIso) && compareIsoDate(dateIso, getEarliestMeetDateIso(todayIso)) >= 0 && !isWeekendIso(dateIso);
}

export function getNextSelectableMeetDateIso(todayIso = getTokyoTodayIso()) {
  let dateIso = getEarliestMeetDateIso(todayIso);
  for (let index = 0; index < 14; index += 1) {
    if (isSelectableMeetDate(dateIso, todayIso)) return dateIso;
    dateIso = addDaysIso(dateIso, 1);
  }
  return dateIso;
}

export function monthKeyFromIso(dateIso: string) {
  return dateIso.slice(0, 7);
}

export function addMonthsToMonthKey(monthKey: string, amount: number) {
  const [year, month] = monthKey.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1 + amount, 1, 12));
  return makeIsoDate(next.getUTCFullYear(), next.getUTCMonth() + 1, 1).slice(0, 7);
}

export function getMonthGrid(monthKey: string) {
  const [year, month] = monthKey.split("-").map(Number);
  const daysInMonth = new Date(Date.UTC(year, month, 0, 12)).getUTCDate();
  const firstIso = makeIsoDate(year, month, 1);
  const leadingBlankCount = getWeekdayIso(firstIso);
  const days: Array<{ dateIso: string; day: number } | null> = [];

  for (let index = 0; index < leadingBlankCount; index += 1) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push({ dateIso: makeIsoDate(year, month, day), day });
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

export function meetSlotStartUtcIso(dateIso: string, slotId: MeetSlotId) {
  const slot = findMeetSlot(slotId);
  return new Date(`${dateIso}T${slot.start}:00+09:00`).toISOString();
}

export function validateMeetRequest(input: MeetValidationInput, todayIso = getTokyoTodayIso()): MeetValidationResult {
  const errors = new Set<string>();
  const date = typeof input.date === "string" ? input.date.trim() : "";
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const locale = input.locale;

  if (!isSelectableMeetDate(date, todayIso)) errors.add("date");
  if (!isMeetSlotId(input.slotId) || !isBookableMeetSlot(input.slotId)) errors.add("slotId");
  if (!name) errors.add("name");
  if (!email || !emailPattern.test(email)) errors.add("email");
  if (!message) errors.add("message");
  if (locale !== "en" && locale !== "zh" && locale !== "ja" && locale !== "ko") errors.add("locale");

  if (errors.size > 0 || !isMeetSlotId(input.slotId) || !isBookableMeetSlot(input.slotId)) {
    return { ok: false, errors: [...errors] };
  }

  return {
    ok: true,
    data: {
      date,
      slotId: input.slotId,
      name,
      email,
      phone,
      message,
      locale
    }
  };
}

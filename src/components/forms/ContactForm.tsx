"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const COOLDOWN_MS = 60_000;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [cooldown, setCooldown] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => {
      setCooldown((s) => Math.max(0, s - 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || cooldown > 0) return;

    if (honeypotRef.current?.value) {
      setStatus("sent");
      formRef.current?.reset();
      setCooldown(COOLDOWN_MS);
      return;
    }

    const data = new FormData(e.currentTarget);
    const from_name = String(data.get("from_name") ?? "").trim();
    const from_email = String(data.get("from_email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!from_name || !from_email || !message) {
      setStatus("error");
      setErrorMessage("이름, 이메일, 내용을 모두 입력해 주세요.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email)) {
      setStatus("error");
      setErrorMessage("올바른 이메일 형식이 아닙니다.");
      return;
    }
    if (message.length < 10) {
      setStatus("error");
      setErrorMessage("내용을 10자 이상 입력해 주세요.");
      return;
    }

    if (!isConfigured) {
      setStatus("error");
      setErrorMessage(
        "메일 발송이 일시적으로 비활성화되어 있습니다. 직접 fukuoka@eostrip.com 으로 문의해 주세요.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name,
          from_email,
          message,
          page_source:
            typeof window !== "undefined" ? window.location.pathname : "/info",
        },
        { publicKey: PUBLIC_KEY! },
      );
      setStatus("sent");
      formRef.current?.reset();
      setCooldown(COOLDOWN_MS);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        "메일 발송에 실패했습니다. 잠시 후 다시 시도하거나 fukuoka@eostrip.com 으로 직접 문의해 주세요.",
      );
    }
  }

  const cooldownSec = Math.ceil(cooldown / 1000);
  const disabled = status === "sending" || cooldown > 0;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-slate-100 bg-paper p-6 shadow-card md:p-8"
    >
      <h3 className="text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
        여행 문의
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        영업일 24시간 이내에 답변드립니다. 일정·인원·예산을 함께 적어주시면 빠른
        상담이 가능합니다.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">
            이름 <span className="text-sakura-600">*</span>
          </span>
          <input
            type="text"
            name="from_name"
            required
            autoComplete="name"
            placeholder="홍길동"
            disabled={disabled}
            className="rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-base text-ink shadow-sm transition-colors focus:border-sakura-500 focus:outline-none focus:ring-2 focus:ring-sakura-100 disabled:cursor-not-allowed disabled:bg-mist"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">
            이메일 <span className="text-sakura-600">*</span>
          </span>
          <input
            type="email"
            name="from_email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            disabled={disabled}
            className="rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-base text-ink shadow-sm transition-colors focus:border-sakura-500 focus:outline-none focus:ring-2 focus:ring-sakura-100 disabled:cursor-not-allowed disabled:bg-mist"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-ink">
          내용 <span className="text-sakura-600">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="원하시는 일정, 인원, 예산, 출발일 등을 자유롭게 적어주세요."
          disabled={disabled}
          className="resize-y rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-base text-ink shadow-sm transition-colors focus:border-sakura-500 focus:outline-none focus:ring-2 focus:ring-sakura-100 disabled:cursor-not-allowed disabled:bg-mist"
        />
      </label>

      {/* honeypot — bots fill this; humans don't see it */}
      <div className="hidden" aria-hidden>
        <label>
          Website (do not fill)
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={disabled}
          className={clsx(
            "inline-flex items-center justify-center gap-2 rounded-full bg-sakura-500 px-6 py-3 text-base font-medium text-paper shadow-sakura transition-all",
            "hover:bg-sakura-600 hover:shadow-cardHover",
            "disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none",
          )}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              보내는 중…
            </>
          ) : cooldown > 0 ? (
            <>대기 {cooldownSec}초</>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              문의 보내기
            </>
          )}
        </button>
        <button
          type="reset"
          disabled={disabled}
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="rounded-full px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed"
        >
          처음부터
        </button>
      </div>

      <div className="mt-4" role="status" aria-live="polite">
        {status === "sent" && (
          <p className="inline-flex items-start gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
            문의가 정상적으로 발송되었습니다. 빠른 시일 내 회신드리겠습니다.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="inline-flex items-start gap-2 rounded-2xl bg-sakura-50 px-4 py-3 text-sm text-sakura-700">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
            {errorMessage}
          </p>
        )}
      </div>

      {!isConfigured && (
        <p className="mt-3 text-xs text-slate-500">
          ※ 관리자 안내: <code className="rounded bg-mist px-1.5 py-0.5">.env.local</code>{" "}
          에 EmailJS 키를 설정해 주세요.
        </p>
      )}
    </form>
  );
}

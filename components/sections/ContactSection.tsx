"use client";

import { ArrowButton } from "@/components/ui/ArrowButton";
import { HighlightedHeading } from "@/components/ui/HighlightedHeading";
import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string; success?: boolean } | null;

      if (!response.ok || !payload?.success) {
        setStatus("error");
        setStatusMessage(payload?.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks, your message has been sent.");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="section-rule scroll-mt-28 pt-5" id="contact">
      <div className="grid gap-8 md:grid-cols-[minmax(260px,534px)_1fr] md:gap-[148px]">
        <HighlightedHeading>Let&apos;s discuss your project</HighlightedHeading>
        <p className="max-w-[753px] text-[28px] font-medium leading-[1.3] md:text-[30px]">
          Whether you need UX clarity, a stronger visual direction or a senior design partner for your team, feel
          free to reach out.
        </p>
      </div>

      <div className="mt-[100px] grid gap-12 md:grid-cols-[398px_1fr] md:gap-[284px]">
        <address className="not-italic text-[28px] font-medium leading-[1.4] text-[var(--muted)] md:text-[40px]">
          Jan Michoin
          <br />
          <a href="mailto:jmichoin@gmail.com">jmichoin@gmail.com</a>
          <br />
          <a href="tel:+420721673055">(+420) 721 673 055</a>
        </address>

        <form aria-label="Contact form" className="flex flex-col items-end gap-5" onSubmit={handleSubmit}>
          <div className="w-full space-y-10">
            <Field autoComplete="name" label="Your name" name="name" required />
            <Field autoComplete="email" label="Your email" name="email" required type="email" />
            <Field autoComplete="organization" label="Your company" name="company" />
            <Field label="How can I help you" name="message" required textarea />
          </div>
          <div className="flex w-full flex-col items-end gap-3">
            {statusMessage ? (
              <p
                aria-live="polite"
                className="w-full text-left text-[14px] uppercase leading-[1.5] tracking-[0.08em] text-[var(--muted)]"
                role={status === "error" ? "alert" : "status"}
              >
                {statusMessage}
              </p>
            ) : null}
            <ArrowButton disabled={status === "loading"} type="submit">
              {status === "loading" ? "Sending..." : "Send"}
            </ArrowButton>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  const fieldClass =
    "w-full border border-[var(--muted)] bg-transparent px-4 text-[20px] leading-[1.4] outline-none transition focus:border-[var(--foreground)] focus:ring-1 focus:ring-[var(--foreground)]";

  return (
    <div className="space-y-[10px]">
      <label className="block text-[14px] uppercase leading-[1.5] tracking-[0.08em] text-[var(--muted)]" htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          autoComplete={autoComplete}
          className={`${fieldClass} min-h-[200px] resize-y py-4`}
          id={id}
          name={name}
          required={required}
        />
      ) : (
        <input
          autoComplete={autoComplete}
          className={`${fieldClass} h-[60px]`}
          id={id}
          name={name}
          required={required}
          type={type}
        />
      )}
    </div>
  );
}

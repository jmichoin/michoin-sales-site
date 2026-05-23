"use client";

import { ArrowButton } from "@/components/ui/ArrowButton";
import { HighlightedHeading } from "@/components/ui/HighlightedHeading";
import type { FormEvent } from "react";

const contactEmail = "jmichoin@gmail.com";

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ].filter(Boolean).join("\n");

    const params = new URLSearchParams({
      subject: `Project inquiry from ${name || "website"}`,
      body,
    });

    window.location.href = `mailto:${contactEmail}?${params.toString()}`;
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
            <Field autoComplete="tel" label="Your phone number" name="phone" type="tel" />
            <Field label="How can I help you" name="message" required textarea />
          </div>
          <ArrowButton type="submit">Send</ArrowButton>
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
        <textarea className={`${fieldClass} min-h-[200px] resize-y py-4`} id={id} name={name} required={required} />
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

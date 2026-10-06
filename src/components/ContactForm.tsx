"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/validation";

const inp = "w-full rounded-md border border-line bg-card p-3";
export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(d: ContactInput) {
    setStatus(null);
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error(String(r.status));
      setStatus({ ok: true, msg: "Message sent. Thank you." });
      reset();
    } catch {
      // Fallback when the API is unavailable
      setStatus({ ok: false, msg: "Could not send right now. Opening your email app instead." });
      window.location.href = `mailto:sanatk254@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name}\n${d.email}`)}`;
    }
  }
  const f = (id: keyof ContactInput, label: string, extra = "") => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">{label}</label>
      {id === "message" ? <textarea id={id} rows={5} className={inp} aria-invalid={!!errors[id]} {...register(id)} />
        : <input id={id} type={id === "email" ? "email" : "text"} autoComplete={extra} className={inp} aria-invalid={!!errors[id]} {...register(id)} />}
      <p role="alert" className="min-h-5 text-sm text-red-600">{errors[id]?.message}</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-2">
      {f("name", "Full name", "name")}{f("email", "Email address", "email")}{f("subject", "Subject")}{f("message", "Message")}
      <input tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" {...register("website")} />
      <button disabled={isSubmitting} className="min-h-11 rounded-md bg-fg px-6 font-semibold text-bg hover:bg-acc hover:text-white disabled:opacity-60">{isSubmitting ? "Sending…" : "Send message"}</button>
      <p role="status" aria-live="polite" className={status?.ok ? "text-green-700" : "text-mut"}>{status?.msg}</p>
    </form>
  );
}

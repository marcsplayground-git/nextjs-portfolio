/* On hold

"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: integrate with API / service like Resend later
    try {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className="input" name="name" placeholder="Your name" required />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <textarea
        className="input min-h-[140px]"
        name="message"
        placeholder="Your message"
        required
      />
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600">
          Message sent! I’ll get back to you.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

*/

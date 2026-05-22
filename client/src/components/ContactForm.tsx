import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xlgvbvqb");

  if (state.succeeded) {
    return (
      <div className="info-card text-center">
        <h3 className="!mt-0">Message Sent</h3>
        <p>Thanks for reaching out. We'll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="info-card">
      <h3>Send a Message</h3>
      <p className="!mt-2">Fill out the form below and we'll get back to you.</p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--navy)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border border-[var(--steel)]/30 bg-white/80 p-3 text-[var(--navy)] placeholder:text-[var(--steel)] focus:border-[var(--gold)] focus:outline-none"
            placeholder="Your name"
          />
          <ValidationError field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--navy)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-[var(--steel)]/30 bg-white/80 p-3 text-[var(--navy)] placeholder:text-[var(--steel)] focus:border-[var(--gold)] focus:outline-none"
            placeholder="your@email.com"
          />
          <ValidationError field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--navy)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-y border border-[var(--steel)]/30 bg-white/80 p-3 text-[var(--navy)] placeholder:text-[var(--steel)] focus:border-[var(--gold)] focus:outline-none"
            placeholder="How can we help?"
          />
          <ValidationError field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="btn-primary inline-flex w-full justify-center"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

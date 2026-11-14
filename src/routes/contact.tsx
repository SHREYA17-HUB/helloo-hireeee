import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/Blocks";
import { CONTACT } from "@/lib/site";

type Search = { type?: "employer" | "jobseeker" };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): Search =>
    s["type"] === "employer" || s["type"] === "jobseeker" ? { type: s["type"] } : {},
  head: () => ({
    meta: [
      { title: "Contact Us – HelloHire Bengaluru" },
      { name: "description", content: "Call +91-93418-73532 or email info@hellohire.in. Visit HelloHire in Basaveshwar Nagar, Bengaluru." },
      { property: "og:title", content: "Contact HelloHire" },
      { property: "og:description", content: "Let's start a conversation about talent, careers or recruitment support." },
    ],
  }),
  component: Contact,
});

const input = "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition focus:border-ink focus:ring-4 focus:ring-lime/40";

function Contact() {
  const { type } = Route.useSearch();
  const [opened, setOpened] = useState(false);
  const defaultSubject = type === "employer" ? "Hiring requirement" : type === "jobseeker" ? "Job opportunity enquiry" : "";

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const cards = [
    { icon: Phone, label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: "Email us", value: CONTACT.email, href: CONTACT.emailHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: CONTACT.whatsappHref },
    { icon: MapPin, label: "Visit us", value: CONTACT.address, href: CONTACT.mapLink },
  ];

  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Let's Start a <span className="text-lime">Conversation.</span></>}>
        Whether you're looking for exceptional talent, exploring career opportunities or need recruitment support, we're here to help.
      </PageHero>
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid content-start gap-4">
            {cards.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-lux flex gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime"><c.icon size={20} /></span>
                <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.label}</span><span className="mt-1 block font-semibold">{c.value}</span></span>
              </a>
            ))}
          </div>
          <form onSubmit={submit} className="rounded-3xl bg-paper p-8 md:p-10">
            <h2 className="text-2xl font-extrabold">Send us a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Name" aria-label="Name" className={input} />
              <input name="email" type="email" required placeholder="Email" aria-label="Email" className={input} />
              <input name="phone" type="tel" placeholder="Phone" aria-label="Phone" className={input} />
              <input name="subject" required defaultValue={defaultSubject} placeholder="Subject" aria-label="Subject" className={input} />
              <textarea name="message" required rows={6} placeholder="Message" aria-label="Message" className={`${input} sm:col-span-2`} />
            </div>
            <button type="submit" className="btn btn-lime mt-6 w-full sm:w-auto">Submit <Send size={16} /></button>
            <p className="mt-4 text-xs text-muted-foreground">
              {opened
                ? "Your email app should now be open with your message ready — press send there to reach us."
                : `Submitting opens your email app addressed to ${CONTACT.email}.`}
            </p>
          </form>
        </div>
      </section>
      <section className="container-x pb-16">
        <iframe title="HelloHire location map" src={CONTACT.mapEmbed} loading="lazy" className="h-[420px] w-full rounded-3xl border-0 grayscale" />
      </section>
      <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-lime text-ink shadow-xl transition hover:scale-110">
        <MessageCircle size={24} />
      </a>
    </>
  );
}

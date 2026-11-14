import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV, SPECIALISATIONS } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.3fr]">
        <div>
          <Logo className="h-14" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            Smart Hiring, Seamless Staffing, Faster Growth. HelloHire connects businesses with top talent through
            efficient, AI-powered staffing solutions.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-ink-foreground/70 hover:text-lime transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SPECIALISATIONS.map((s) => (
              <li key={s.slug}>
                <Link to="/recruitment" hash={s.slug} className="text-ink-foreground/70 hover:text-lime transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/70">
            <li><a href={CONTACT.phoneHref} className="flex gap-3 hover:text-lime"><Phone size={18} className="shrink-0 text-lime" />{CONTACT.phone}</a></li>
            <li><a href={CONTACT.emailHref} className="flex gap-3 hover:text-lime"><Mail size={18} className="shrink-0 text-lime" />{CONTACT.email}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-lime" />{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} HelloHire. All Rights Reserved.</p>
          <p>Developed By: Hosting Baba</p>
        </div>
      </div>
    </footer>
  );
}

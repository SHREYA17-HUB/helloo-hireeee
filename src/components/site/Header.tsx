import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, NAV } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-xl shadow-lg" : "bg-ink"
      }`}
    >
      <div className={`container-x flex items-center justify-between gap-4 transition-all ${scrolled ? "h-16" : "h-20"}`}>
        <Logo className="h-12" />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-3 py-2 text-sm font-semibold text-ink-foreground/70 transition-colors hover:text-lime data-[status=active]:text-lime"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={CONTACT.loginHref} className="btn btn-ghost-light !py-2.5 text-sm">Login</a>
          <Link to="/contact" className="btn btn-lime !py-2.5 text-sm">Get Started</Link>
        </div>
        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-foreground/10 bg-ink">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="py-3 text-lg font-semibold text-ink-foreground/80 border-b border-ink-foreground/10 data-[status=active]:text-lime"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href={CONTACT.loginHref} className="btn btn-ghost-light">Login</a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-lime">Get Started</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

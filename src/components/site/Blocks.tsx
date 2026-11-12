import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import type { ReactNode } from "react";
import { PILLARS, TESTIMONIALS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/20 blur-3xl" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow text-lime">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-ink-foreground/70">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function Pillars() {
  return (
    <section className="py-24 bg-paper">
      <div className="container-x">
        <SectionHead eyebrow="Why choose HelloHire" title={<>Why Partner with <span className="hl">Hello Hire?</span></>} />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card-lux h-full p-8">
                <span className="font-display text-sm font-extrabold text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-lime decoration-2 underline-offset-4">
                  Hire top talents <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl text-center text-xl font-semibold leading-relaxed">
            At Hello Hire, we are committed to reshaping the future of recruitment by offering transparent, data-driven,
            and result-oriented hiring solutions that drive business success and career growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Testimonials" title="See What Our Clients Are Saying" />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className={`h-full rounded-3xl p-8 ${i % 3 === 0 ? "bg-ink text-ink-foreground" : "card-lux"}`}>
                <Quote className="text-lime" size={32} />
                <blockquote className="mt-5 text-lg leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime font-display font-extrabold text-ink">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-bold">{t.name}</span>
                    <span className={`block text-sm ${i % 3 === 0 ? "text-ink-foreground/60" : "text-muted-foreground"}`}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DualCta() {
  return (
    <section className="py-24">
      <div className="container-x grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-3xl bg-ink p-10 text-ink-foreground md:p-14">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-lime/25 blur-3xl" aria-hidden />
            <p className="eyebrow text-lime">For Employers</p>
            <h3 className="mt-5 text-3xl font-extrabold md:text-4xl">Looking to Hire Top Talent?</h3>
            <p className="mt-4 text-ink-foreground/70">Find the right people to build stronger teams. Post your requirements with us today!</p>
            <Link to="/contact" search={{ type: "employer" }} className="btn btn-lime mt-8">Post Your Requirements <ArrowRight size={18} /></Link>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative h-full overflow-hidden rounded-3xl bg-lime p-10 text-ink md:p-14">
            <p className="eyebrow">For Job Seekers</p>
            <h3 className="mt-5 text-3xl font-extrabold md:text-4xl">Your Next Opportunity Starts Here.</h3>
            <p className="mt-4 text-ink/70">Discover opportunities that match your skills and career aspirations. Apply now and take your career to new heights!</p>
            <Link to="/contact" search={{ type: "jobseeker" }} className="btn btn-ink mt-8">Explore Opportunities <ArrowRight size={18} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

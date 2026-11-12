import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { DualCta, PageHero, Pillars } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services – HelloHire" },
      { name: "description", content: "Tailored recruitment, AI-powered talent matching, wide industry coverage, career support for job seekers and a seamless hiring process." },
      { property: "og:title", content: "HelloHire Services" },
      { property: "og:description", content: "Recruitment and staffing services for businesses and job seekers." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title={<>Join the Future of Hiring with <span className="text-lime">Hello Hire.</span></>}>
        For businesses, we make hiring effortless, efficient, and results-driven. For job seekers, we provide the best career opportunities.
      </PageHero>
      <section className="py-24">
        <div className="container-x space-y-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title}>
              <article className="card-lux grid gap-8 p-8 md:grid-cols-[auto_1fr_1fr] md:p-12">
                <span className="font-display text-6xl font-extrabold text-lime [-webkit-text-stroke:1.5px_var(--ink)]">0{i + 1}</span>
                <div>
                  <h2 className="text-2xl font-extrabold md:text-3xl">{s.title}</h2>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">{s.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2">
                  {s.points.map((p) => <li key={p} className="flex items-center gap-2 font-semibold"><Check size={18} className="shrink-0 rounded-full bg-lime p-0.5" />{p}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
          <div className="pt-6 text-center">
            <Link to="/contact" className="btn btn-ink">Let's redefine recruitment — Get in touch <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <Pillars />
      <DualCta />
    </>
  );
}

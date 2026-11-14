import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import team from "@/assets/team-office.jpg";
import { DualCta, PageHero, Pillars, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { EXPERTISE, INTRO, JOB_FIGURES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us – HelloHire Recruitment & Staffing" },
      { name: "description", content: "Learn how HelloHire helps businesses build high-performing teams and job seekers fulfil their career aspirations." },
      { property: "og:title", content: "About HelloHire" },
      { property: "og:description", content: "Bridging top talent with optimal opportunities through tailored recruitment and staffing." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Bridging Top Talent with <span className="text-lime">Optimal Opportunities.</span></>}>
        The right individuals can revolutionize organizations, and the right opportunities can define careers.
      </PageHero>
      <section className="py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our story" title="Connecting Exceptional Talent with Limitless Opportunities." />
            <Reveal>{INTRO.map((p) => <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-muted-foreground">{p}</p>)}</Reveal>
          </div>
          <Reveal><img src={team} alt="HelloHire team" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-[2rem] object-cover" /></Reveal>
        </div>
      </section>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="container-x">
          <p className="eyebrow text-lime">Job offers by category</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {JOB_FIGURES.map((f) => (
              <div key={f.label} className="border-l-2 border-lime pl-6">
                <p className="font-display text-6xl font-extrabold">{f.value}</p>
                <p className="mt-2 text-ink-foreground/70">{f.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-ink-foreground/40">Figures as listed on the current HelloHire website.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-x">
          <SectionHead eyebrow="What we do" title="Recruitment and career growth, together." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((e) => (
              <div key={e.title} className="card-lux p-8"><h3 className="text-xl font-extrabold">{e.title}</h3><p className="mt-3 text-muted-foreground">{e.body}</p></div>
            ))}
            <div className="rounded-3xl bg-lime p-8">
              <h3 className="text-xl font-extrabold">Join Us & Find Your Perfect Match!</h3>
              <p className="mt-3 text-ink/70">Contact us today and let's build a brighter future together!</p>
              <Link to="/contact" className="btn btn-ink mt-6">Contact Us <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
      <Pillars />
      <DualCta />
    </>
  );
}

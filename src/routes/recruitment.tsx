import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import hero from "@/assets/hero-talent.jpg";
import interview from "@/assets/interview.jpg";
import team from "@/assets/team-office.jpg";
import { DualCta, PageHero, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { BENEFITS, PROCESS, SPECIALISATIONS } from "@/lib/site";

const imgs = [interview, team, hero];

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment – Staffing Specialisations | HelloHire" },
      { name: "description", content: "Technical support, project management, automotive, web development, creative and HR staffing — screened candidates, pay only on joining." },
      { property: "og:title", content: "Recruitment at HelloHire" },
      { property: "og:description", content: "Six staffing specialisations with screened applications, faster fulfilment and free replacement." },
    ],
  }),
  component: Recruitment,
});

function Recruitment() {
  return (
    <>
      <PageHero eyebrow="Recruitment" title={<>How do we solve your <span className="text-lime">hiring problems?</span></>}>
        Post requirements, sit back and relax while our recruiter chain manages your hiring hassles.
      </PageHero>
      <section className="py-20">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card-lux p-7"><Check className="rounded-full bg-lime p-1" size={28} /><h3 className="mt-4 text-lg font-extrabold">{b.title}</h3><p className="mt-2 text-sm text-muted-foreground">{b.body}</p></div>
          ))}
        </div>
      </section>
      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHead eyebrow="Process" title="How We Make Hiring Effortless." />
          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-card p-6 shadow-sm">
                <span className="font-display text-3xl font-extrabold text-lime [-webkit-text-stroke:1px_var(--ink)]">0{i + 1}</span>
                <h3 className="mt-3 font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-24">
        <div className="container-x">
          <SectionHead eyebrow="Specialisations" title="Our staffing categories" />
          <div className="mt-16 space-y-20">
            {SPECIALISATIONS.map((s, i) => (
              <Reveal key={s.slug}>
                <article id={s.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
                  <img src={imgs[i % 3]} alt="" loading="lazy" width={1280} height={960} className={`aspect-[16/11] w-full rounded-[2rem] object-cover ${i % 2 ? "lg:order-2" : ""}`} />
                  <div>
                    <span className="font-display text-sm font-extrabold text-muted-foreground">0{i + 1} / 06</span>
                    <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">{s.title}</h3>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{s.body}</p>
                    <Link to="/contact" search={{ type: "employer" }} className="btn btn-lime mt-8">Enquire Now <ArrowRight size={18} /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DualCta />
    </>
  );
}

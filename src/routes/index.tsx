import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Briefcase, Check, Sparkles } from "lucide-react";
import hero from "@/assets/hero-talent.jpg";
import team from "@/assets/team-office.jpg";
import { DualCta, Pillars, SectionHead, Testimonials } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { BENEFITS, EXPERTISE, INTRO, PROCESS, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HelloHire – Smart Hiring, Seamless Staffing, Faster Growth" },
      { name: "description", content: "The right talent, the right opportunity, the right connection. Recruitment and staffing solutions for businesses and job seekers." },
      { property: "og:title", content: "HelloHire – Smart Hiring, Seamless Staffing, Faster Growth" },
      { property: "og:description", content: "Recruitment and staffing solutions connecting ambitious businesses with exceptional talent." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="absolute left-1/3 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-lime/10 blur-3xl" aria-hidden />
        <div className="container-x relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow text-lime">Smart Hiring · Seamless Staffing · Faster Growth</p>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl">
              THE RIGHT <span className="text-lime">TALENT.</span>
              <br />THE RIGHT <span className="text-lime">OPPORTUNITY.</span>
              <br />THE RIGHT CONNECTION.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-foreground/70">
              HelloHire connects ambitious businesses with exceptional talent through smarter recruitment, efficient
              staffing and personalised career opportunities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" search={{ type: "employer" }} className="btn btn-lime">I'm Looking to Hire <ArrowRight size={18} /></Link>
              <Link to="/contact" search={{ type: "jobseeker" }} className="btn btn-ghost-light">I'm Looking for a Job</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-foreground/60">
              {["Screened applications", "Pay only on joining", "Free replacement"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2"><Check size={16} className="text-lime" />{t}</span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-ink-foreground/10">
              <img src={hero} alt="Recruiter reviewing matched candidate profiles" width={1024} height={1280} className="h-[520px] w-full object-cover lg:h-[600px]" />
            </div>
            <div className="animate-float absolute -left-4 bottom-10 rounded-2xl bg-lime p-5 text-ink shadow-2xl sm:-left-10">
              <p className="font-display text-4xl font-extrabold">100+</p>
              <p className="text-sm font-semibold">Live Jobs</p>
            </div>
            <div className="animate-float absolute -right-2 top-8 flex items-center gap-3 rounded-2xl border border-ink-foreground/10 bg-ink-2/90 p-4 backdrop-blur sm:-right-6" style={{ animationDelay: "1.5s" }}>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink"><BadgeCheck size={20} /></span>
              <span className="text-sm"><span className="block font-bold">Within 3 days</span><span className="text-ink-foreground/60">Faster fulfilment</span></span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-ink-foreground/10 py-5">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-lg font-bold text-ink-foreground/40">
            {[...Array(2)].flatMap((_, k) =>
              ["IT", "Healthcare", "Finance", "Marketing", "Engineering", "Retail", "Automotive", "Creative", "Human Resources"].map((x) => (
                <span key={k + x} className="inline-flex items-center gap-12">{x}<Sparkles size={16} className="text-lime" /></span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={team} alt="HelloHire team collaborating" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-ink px-6 py-4 text-ink-foreground shadow-xl">
              <p className="text-xs uppercase tracking-widest text-lime">Since day one</p>
              <p className="font-display font-bold">Talent · Workforce · Specialised hiring</p>
            </div>
          </Reveal>
          <div>
            <SectionHead
              eyebrow="About HelloHire"
              title={<>Connecting Exceptional Talent with <span className="hl">Limitless Opportunities.</span></>}
            />
            <Reveal>
              {INTRO.map((p) => <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-muted-foreground">{p}</p>)}
              <Link to="/about" className="btn btn-ink mt-8">Know More <ArrowRight size={18} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-16">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Our Services" title="Everything you need to hire — and get hired." />
            <Link to="/services" className="btn btn-ghost-dark self-start md:self-auto">All Services <ArrowRight size={18} /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className={i === 0 ? "lg:row-span-2" : ""}>
                <article className={`group h-full p-8 ${i === 0 ? "rounded-3xl bg-ink text-ink-foreground" : "card-lux"}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${i === 0 ? "bg-lime text-ink" : "bg-lime-soft"}`}><Briefcase size={22} /></span>
                  <h3 className="mt-6 text-2xl font-extrabold">{s.title}</h3>
                  <p className={`mt-3 leading-relaxed ${i === 0 ? "text-ink-foreground/70" : "text-muted-foreground"}`}>{s.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className={`rounded-full border px-3 py-1 text-xs font-semibold ${i === 0 ? "border-lime/40 text-lime" : "border-border"}`}>{p}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container-x">
          <SectionHead eyebrow="Recruitment process" title={<>How We Make Hiring <span className="hl">Effortless.</span></>} sub="Post requirements, sit back and relax while our recruiter chain manages your hiring hassles." />
          <ol className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-5">
            <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-0 lg:top-6 lg:h-px lg:w-full" aria-hidden />
            {PROCESS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="relative pl-16 lg:pl-0">
                  <span className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full bg-lime font-display font-extrabold ring-8 ring-background lg:relative">0{i + 1}</span>
                  <h3 className="mt-0 text-lg font-extrabold lg:mt-6">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl bg-lime-soft p-6">
                <Check className="rounded-full bg-ink p-1 text-lime" size={26} />
                <h4 className="mt-4 font-display font-extrabold">{b.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-lime">Our expertise</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Specialist hiring for every stage of growth.</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-ink-foreground/10 md:grid-cols-2 lg:grid-cols-5">
            {EXPERTISE.map((e, i) => (
              <div key={e.title} className="group bg-ink p-8 transition-colors hover:bg-ink-2">
                <span className="font-display text-5xl font-extrabold text-ink-foreground/15 transition-colors group-hover:text-lime">0{i + 1}</span>
                <h3 className="mt-6 text-lg font-extrabold">{e.title}</h3>
                <p className="mt-3 text-sm text-ink-foreground/60">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pillars />
      <Testimonials />

      {/* Highlight */}
      <section className="container-x">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border-2 border-lime bg-lime-soft p-10 md:flex-row md:items-center md:p-14">
            <div>
              <p className="font-display text-6xl font-extrabold md:text-7xl">100+</p>
              <p className="mt-2 text-xl font-bold">We Have 100+ Live Jobs</p>
              <p className="mt-2 max-w-lg text-muted-foreground">Join the future of hiring with Hello Hire. For job seekers, we offer premier career opportunities, paving the way for a brighter and more fulfilling future.</p>
            </div>
            <Link to="/contact" search={{ type: "jobseeker" }} className="btn btn-ink">Apply Now <ArrowRight size={18} /></Link>
          </div>
        </Reveal>
      </section>

      <DualCta />
    </>
  );
}

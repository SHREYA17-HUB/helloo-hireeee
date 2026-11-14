import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, User } from "lucide-react";
import team from "@/assets/team-office.jpg";
import { PageHero } from "@/components/site/Blocks";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs – HelloHire Recruitment News" },
      { name: "description", content: "Reliable & cost efficient recruitment news and career insights from HelloHire." },
      { property: "og:title", content: "HelloHire Blogs" },
      { property: "og:description", content: "Recruitment news and career insights." },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <>
      <PageHero eyebrow="Blogs" title={<>Reliable & Cost Efficient <span className="text-lime">Recruitment News.</span></>} />
      <section className="py-16">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.slug} to="/blogs/$slug" params={{ slug: p.slug }} className="card-lux group overflow-hidden">
              <img src={team} alt="" loading="lazy" width={1280} height={960} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-7">
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar size={14} />{p.posted}</span>
                  <span className="inline-flex items-center gap-1"><User size={14} />{p.author}</span>
                </div>
                <h2 className="mt-4 text-xl font-extrabold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-lime decoration-2 underline-offset-4">Read More <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

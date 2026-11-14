import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import team from "@/assets/team-office.jpg";
import { DualCta } from "@/components/site/Blocks";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} – HelloHire` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article not found – HelloHire" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="text-3xl font-extrabold">Article not found</h1>
      <Link to="/blogs" className="btn btn-lime mt-6">Back to Blogs</Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <article className="container-x max-w-3xl py-14">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={16} />All Blogs</Link>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Posted on {post.posted} · Updated {post.updated} · By {post.author}
        </p>
        <img src={team} alt="" width={1280} height={960} className="mt-10 aspect-[16/9] w-full rounded-[2rem] object-cover" />
        <p className="mt-10 text-xl leading-relaxed">{post.excerpt}</p>
      </article>
      <DualCta />
    </>
  );
}

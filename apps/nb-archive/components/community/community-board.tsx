"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ImagePlus, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CommunityPost } from "@/lib/community-schema";
import type { ArchiveSneaker } from "@/types/archive";

export function CommunityBoard({ sneakers, initialSlug }: { sneakers: ArchiveSneaker[]; initialSlug: string }) {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [filter, setFilter] = useState<"all" | "outfit" | "collection">("all");
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>( {} );
  const [commentNames, setCommentNames] = useState<Record<string, string>>( {} );
  const bySlug = useMemo(() => new Map(sneakers.map(item => [item.slug, item])), [sneakers]);
  const visible = posts.filter(post => filter === "all" || post.kind === filter);

  useEffect(() => {
    fetch("/api/community", { cache: "no-store" }).then(async response => {
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "Community unavailable.");
      setPosts(body);
    }).catch(cause => setError(cause instanceof Error ? cause.message : "Community unavailable."))
      .finally(() => setLoading(false));
  }, []);

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/community", { method: "POST", body: new FormData(form) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "Upload failed.");
      setPosts(current => [body as CommunityPost, ...current]);
      form.reset();
      setSelectedSlug("");
      setFilter("all");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  async function comment(event: React.FormEvent<HTMLFormElement>, postId: string) {
    event.preventDefault();
    const nickname = commentNames[postId]?.trim() ?? "";
    const body = commentDrafts[postId]?.trim() ?? "";
    if (!nickname || !body) return;
    try {
      const response = await fetch(`/api/community/${postId}/comments`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nickname, body }) });
      const updated = await response.json();
      if (!response.ok) throw new Error(updated.error ?? "Could not post comment.");
      setPosts(current => current.map(post => post.id === postId ? updated : post));
      setCommentDrafts(current => ({ ...current, [postId]: "" }));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not post comment.");
    }
  }

  return <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
    <aside>
      <form onSubmit={publish} className="space-y-4 border-t-2 border-archive-ink pt-5 lg:sticky lg:top-24">
        <div className="flex items-center gap-2"><ImagePlus className="h-4 w-4 text-archive-red" /><h2 className="text-sm font-semibold uppercase tracking-widest">New post</h2></div>
        <Field label="Your name"><input className="field-select" name="nickname" required minLength={2} maxLength={32} placeholder="Display name" /></Field>
        <Field label="Post type"><select name="kind" className="field-select"><option value="outfit">Outfit</option><option value="collection">Collection</option></select></Field>
        <Field label="Sneaker"><select name="sneakerSlug" required value={selectedSlug} onChange={event => setSelectedSlug(event.target.value)} className="field-select"><option value="">Choose a pair</option>{sneakers.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></Field>
        <Field label="Photo"><input name="photo" type="file" accept="image/jpeg,image/png,image/webp" required className="block w-full text-sm file:mr-3 file:border-0 file:bg-archive-ink file:px-3 file:py-2 file:text-white" /></Field>
        <Field label="Story"><textarea name="caption" required minLength={3} maxLength={500} rows={4} placeholder="What makes this pair part of your rotation?" className="field-select h-auto py-3" /></Field>
        <label className="flex items-start gap-3 text-xs leading-5 text-archive-graphite"><input type="checkbox" name="rights" value="yes" required className="mt-1 accent-archive-red" />I took this photo or have permission to share it.</label>
        <Button type="submit" variant="red" className="w-full" disabled={busy}>{busy ? "Publishing..." : "Publish post"} <Send className="h-4 w-4" /></Button>
        <p className="text-xs leading-5 text-archive-graphite">Local preview. Posts and comments are visible to browsers on this computer; public accounts and moderation are not enabled.</p>
      </form>
    </aside>
    <section>
      <div className="flex gap-2 border-b border-archive-ink/15 pb-4">{(["all", "outfit", "collection"] as const).map(kind => <button key={kind} onClick={() => setFilter(kind)} className={`border-b-2 px-3 py-2 text-sm capitalize ${filter === kind ? "border-archive-red" : "border-transparent text-archive-graphite"}`}>{kind}</button>)}</div>
      {error ? <p role="alert" className="my-5 border-l-2 border-archive-red bg-red-50 p-4 text-sm text-archive-red">{error}</p> : null}
      {loading ? <div className="mt-6 grid gap-5 sm:grid-cols-2">{[0, 1].map(index => <div key={index} className="animate-pulse"><div className="aspect-[4/5] bg-archive-mist" /><div className="mt-4 h-4 w-2/3 bg-archive-mist" /></div>)}</div> : visible.length ? <div className="mt-6 grid items-start gap-6 sm:grid-cols-2">{visible.map(post => {
        const sneaker = bySlug.get(post.sneakerSlug);
        return <article key={post.id} className="border border-archive-ink/10 bg-white">
          <div className="aspect-[4/5] overflow-hidden bg-archive-mist"><img src={post.imageUrl} alt={`${post.nickname}'s ${post.kind} featuring ${sneaker?.name ?? "New Balance"}`} className="h-full w-full object-cover" loading="lazy" /></div>
          <div className="p-4"><div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-widest text-archive-graphite"><span className="text-archive-red">{post.kind}</span><time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleDateString()}</time></div><p className="mt-3 text-sm font-medium">{post.nickname}</p><p className="mt-2 text-sm leading-6 text-archive-graphite">{post.caption}</p>{sneaker ? <Link href={`/sneakers/${sneaker.slug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-archive-red">{sneaker.name} <ArrowUpRight className="h-3 w-3" /></Link> : null}
            <div className="mt-5 border-t border-archive-ink/10 pt-4"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"><MessageCircle className="h-3.5 w-3.5" /> Conversation {post.comments.length}</p>{post.comments.length ? <div className="mt-3 max-h-44 space-y-3 overflow-y-auto">{post.comments.map(reply => <p key={reply.id} className="text-xs leading-5"><strong>{reply.nickname}</strong> <span className="text-archive-graphite">{reply.body}</span></p>)}</div> : null}<form onSubmit={event => comment(event, post.id)} className="mt-4 grid grid-cols-[1fr_auto] gap-2"><input aria-label="Your name" placeholder="Name" maxLength={32} required value={commentNames[post.id] ?? ""} onChange={event => setCommentNames(current => ({ ...current, [post.id]: event.target.value }))} className="field-select col-span-2" /><input aria-label="Comment" placeholder="Add a comment" maxLength={280} required value={commentDrafts[post.id] ?? ""} onChange={event => setCommentDrafts(current => ({ ...current, [post.id]: event.target.value }))} className="field-select min-w-0" /><button type="submit" aria-label="Post comment" title="Post comment" className="h-11 w-11 bg-archive-ink text-white hover:bg-archive-red"><Send className="mx-auto h-4 w-4" /></button></form></div>
          </div>
        </article>;
      })}</div> : <div className="py-20 text-center"><p className="font-editorial text-3xl">{posts.length ? "Nothing in this view" : "The first photo is yours"}</p><p className="mt-3 text-sm text-archive-graphite">{posts.length ? "Choose another feed." : "Share a rotation or a pair from your collection."}</p></div>}
    </section>
  </div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs uppercase tracking-widest text-archive-graphite">{label}</span>{children}</label>;
}

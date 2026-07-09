"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save } from "lucide-react";
import type { CmsPage, CmsPost, CmsProgram, CmsSettings, GalleryAlbum } from "@/lib/cms";

type SaveState = "idle" | "saving" | "error";

function fieldClass() {
  return "min-h-11 rounded-md border border-[#d9ccd0] bg-white px-3 text-base font-medium text-[#2a1b22] outline-none focus:border-[#9f0038] focus:ring-2 focus:ring-[#9f0038]/15";
}

function labelClass() {
  return "grid gap-2 text-sm font-black text-[#2a1b22]";
}

function splitLines(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitParagraphs(value: FormDataEntryValue | null) {
  return String(value || "")
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function SubmitButton({ state }: { state: SaveState }) {
  return (
    <button
      type="submit"
      disabled={state === "saving"}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#9f0038] px-5 py-3 text-sm font-black text-white transition hover:bg-[#7e002c] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Save aria-hidden="true" size={16} />
      {state === "saving" ? "Saving..." : "Save changes"}
    </button>
  );
}

export function PostForm({ post }: { post?: CmsPost | null }) {
  const router = useRouter();
  const [state, setState] = useState<SaveState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const body = {
      id: post?.id,
      title: form.get("title"),
      slug: form.get("slug"),
      category: form.get("category"),
      status: form.get("status"),
      summary: form.get("summary"),
      body: splitParagraphs(form.get("body")),
      image: form.get("image"),
      imageAlt: form.get("imageAlt"),
      publishedAt: form.get("publishedAt"),
    };
    const response = await fetch(post ? `/api/admin/posts/${post.id}` : "/api/admin/posts", {
      method: post ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setState("error");
      return;
    }

    router.push("/admin/posts");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#e4d9dc] bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Update title
          <input name="title" required defaultValue={post?.title} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          URL slug
          <input name="slug" defaultValue={post?.slug} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Category
          <select name="category" defaultValue={post?.category || "announcement"} className={fieldClass()}>
            <option value="announcement">Announcement</option>
            <option value="textbook">Textbook</option>
            <option value="program">Program</option>
            <option value="event">Event</option>
            <option value="blog">Blog</option>
          </select>
        </label>
        <label className={labelClass()}>
          Status
          <select name="status" defaultValue={post?.status || "draft"} className={fieldClass()}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label className={labelClass()}>
          Publish date
          <input name="publishedAt" type="datetime-local" defaultValue={post?.publishedAt?.slice(0, 16)} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Image path or URL
          <input name="image" defaultValue={post?.image || "/images/skypa-hero-classroom.png"} className={fieldClass()} />
        </label>
      </div>
      <label className={labelClass()}>
        Summary
        <textarea name="summary" required rows={3} defaultValue={post?.summary} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        Body paragraphs
        <textarea name="body" rows={10} defaultValue={post?.body?.join("\n\n")} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        Image alt text
        <input name="imageAlt" defaultValue={post?.imageAlt} className={fieldClass()} />
      </label>
      <div className="flex items-center gap-3">
        <SubmitButton state={state} />
        {state === "error" ? <p className="text-sm font-bold text-[#9f1239]">Save failed.</p> : null}
      </div>
    </form>
  );
}

export function PageForm({ page }: { page: CmsPage }) {
  const router = useRouter();
  const [state, setState] = useState<SaveState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch(`/api/admin/pages/${page.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: page.id,
        slug: form.get("slug"),
        title: form.get("title"),
        summary: form.get("summary"),
        description: form.get("description"),
        status: form.get("status"),
      }),
    });

    if (!response.ok) {
      setState("error");
      return;
    }

    router.push("/admin/pages");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#e4d9dc] bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Page title
          <input name="title" required defaultValue={page.title} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          URL slug
          <input name="slug" required defaultValue={page.slug} className={fieldClass()} />
        </label>
      </div>
      <label className={labelClass()}>
        Short summary
        <textarea name="summary" rows={4} required defaultValue={page.summary} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        SEO description
        <textarea name="description" rows={4} required defaultValue={page.description} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        Status
        <select name="status" defaultValue={page.status} className={fieldClass()}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </label>
      <SubmitButton state={state} />
      {state === "error" ? <p className="text-sm font-bold text-[#9f1239]">Save failed.</p> : null}
    </form>
  );
}

export function ProgramForm({ program }: { program: CmsProgram }) {
  const router = useRouter();
  const [state, setState] = useState<SaveState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch(`/api/admin/programs/${program.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: program.id,
        slug: form.get("slug"),
        title: form.get("title"),
        summary: form.get("summary"),
        description: form.get("description"),
        audience: form.get("audience"),
        length: form.get("length"),
        outcomes: splitLines(form.get("outcomes")),
        modules: splitLines(form.get("modules")),
        status: form.get("status"),
      }),
    });

    if (!response.ok) {
      setState("error");
      return;
    }

    router.push("/admin/programs");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#e4d9dc] bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Program title
          <input name="title" required defaultValue={program.title} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          URL slug
          <input name="slug" required defaultValue={program.slug} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Audience
          <input name="audience" defaultValue={program.audience} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Length or format
          <input name="length" defaultValue={program.length} className={fieldClass()} />
        </label>
      </div>
      <label className={labelClass()}>
        Summary
        <textarea name="summary" rows={4} required defaultValue={program.summary} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        Description
        <textarea name="description" rows={4} required defaultValue={program.description} className={`${fieldClass()} py-3`} />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Outcomes, one per line
          <textarea name="outcomes" rows={6} defaultValue={program.outcomes.join("\n")} className={`${fieldClass()} py-3`} />
        </label>
        <label className={labelClass()}>
          Modules, one per line
          <textarea name="modules" rows={6} defaultValue={program.modules.join("\n")} className={`${fieldClass()} py-3`} />
        </label>
      </div>
      <label className={labelClass()}>
        Status
        <select name="status" defaultValue={program.status} className={fieldClass()}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </label>
      <SubmitButton state={state} />
      {state === "error" ? <p className="text-sm font-bold text-[#9f1239]">Save failed.</p> : null}
    </form>
  );
}

export function GalleryAlbumForm({ album }: { album?: GalleryAlbum | null }) {
  const router = useRouter();
  const [state, setState] = useState<SaveState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch(album ? `/api/admin/gallery/${album.id}` : "/api/admin/gallery", {
      method: album ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: album?.id,
        title: form.get("title"),
        description: form.get("description"),
        coverImage: form.get("coverImage"),
        images: splitLines(form.get("images")),
        status: form.get("status"),
      }),
    });

    if (!response.ok) {
      setState("error");
      return;
    }

    router.push("/admin/gallery");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#e4d9dc] bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Album title
          <input name="title" required defaultValue={album?.title} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Status
          <select name="status" defaultValue={album?.status || "draft"} className={fieldClass()}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>
      <label className={labelClass()}>
        Description
        <textarea name="description" rows={4} defaultValue={album?.description} className={`${fieldClass()} py-3`} />
      </label>
      <label className={labelClass()}>
        Cover image path or URL
        <input name="coverImage" defaultValue={album?.coverImage} className={fieldClass()} />
      </label>
      <label className={labelClass()}>
        Gallery image paths or URLs, one per line
        <textarea name="images" rows={8} defaultValue={album?.images.join("\n")} className={`${fieldClass()} py-3`} />
      </label>
      <SubmitButton state={state} />
      {state === "error" ? <p className="text-sm font-bold text-[#9f1239]">Save failed.</p> : null}
    </form>
  );
}

export function SettingsForm({ settings }: { settings: CmsSettings }) {
  const router = useRouter();
  const [state, setState] = useState<SaveState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteName: form.get("siteName"),
        tagline: form.get("tagline"),
        contactEmail: form.get("contactEmail"),
        announcement: form.get("announcement"),
        primaryCtaLabel: form.get("primaryCtaLabel"),
        primaryCtaHref: form.get("primaryCtaHref"),
      }),
    });

    if (!response.ok) {
      setState("error");
      return;
    }

    router.refresh();
    setState("idle");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md border border-[#e4d9dc] bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass()}>
          Site name
          <input name="siteName" required defaultValue={settings.siteName} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Tagline
          <input name="tagline" required defaultValue={settings.tagline} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Contact email
          <input name="contactEmail" type="email" required defaultValue={settings.contactEmail} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Primary CTA link
          <input name="primaryCtaHref" required defaultValue={settings.primaryCtaHref} className={fieldClass()} />
        </label>
        <label className={labelClass()}>
          Primary CTA label
          <input name="primaryCtaLabel" required defaultValue={settings.primaryCtaLabel} className={fieldClass()} />
        </label>
      </div>
      <label className={labelClass()}>
        Site announcement
        <textarea name="announcement" rows={4} defaultValue={settings.announcement} className={`${fieldClass()} py-3`} />
      </label>
      <SubmitButton state={state} />
      {state === "error" ? <p className="text-sm font-bold text-[#9f1239]">Save failed.</p> : null}
    </form>
  );
}

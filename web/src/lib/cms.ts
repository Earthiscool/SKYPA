import { Redis } from "@upstash/redis";
import { fallbackSiteContent, type EditableSiteContent } from "@/content/editable-site";
import { corePages, programs, siteConfig, updates, type PageSection, type Program, type SitePage, type Update } from "@/content/site";

export type CmsStatus = "draft" | "published";

export type CmsPost = Update & {
  id: string;
  status: CmsStatus;
  author?: string;
  updatedAt: string;
  notificationStatus?: "not-sent" | "sent" | "failed";
};

export type CmsPage = SitePage & {
  id: string;
  status: CmsStatus;
  updatedAt: string;
};

export type CmsProgram = Pick<Program, "slug" | "title" | "summary" | "description" | "audience" | "length" | "outcomes" | "modules"> & {
  id: string;
  status: CmsStatus;
  updatedAt: string;
};

export type GalleryAlbum = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  status: CmsStatus;
  updatedAt: string;
};

export type CmsSettings = {
  siteName: string;
  tagline: string;
  contactEmail: string;
  announcement: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  updatedAt: string;
};

export type CmsSubmission = {
  id: string;
  formType: string;
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type CmsSubscriber = {
  id: string;
  email: string;
  name: string;
  source: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CmsMediaUpload = {
  id: string;
  filename: string;
  contentType: string;
  size: number;
  alt: string;
  data: string;
  createdAt: string;
};

const keys = {
  posts: "skypa:cms:posts",
  pages: "skypa:cms:pages",
  programs: "skypa:cms:programs",
  gallery: "skypa:cms:gallery",
  settings: "skypa:cms:settings",
  siteContent: "skypa:cms:site-content",
  media: "skypa:cms:media:",
  submissions: "skypa:cms:submissions",
  subscribers: "skypa:cms:subscribers",
};

function redis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  return new Redis({ url, token });
}

function parseStored<T>(value: unknown): T | null {
  if (!value) return null;
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }
  return value as T;
}

async function readValue<T>(key: string): Promise<T | null> {
  const client = redis();
  if (!client) return null;

  try {
    return parseStored<T>(await client.get(key));
  } catch {
    return null;
  }
}

async function writeValue<T>(key: string, value: T) {
  const client = redis();
  if (!client) {
    throw new Error("Upstash is not configured.");
  }

  await client.set(key, value);
}

function now() {
  return new Date().toISOString();
}

function idFromSlug(prefix: string, slug: string) {
  return `${prefix}-${slug}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function fallbackPosts(): CmsPost[] {
  return updates.map((update) => ({
    ...update,
    id: idFromSlug("post", update.slug),
    status: "published",
    updatedAt: update.publishedAt,
    notificationStatus: "not-sent",
  }));
}

function fallbackPages(): CmsPage[] {
  return corePages.map((page) => ({
    ...page,
    id: idFromSlug("page", page.slug),
    status: "published",
    updatedAt: now(),
  }));
}

function fallbackPrograms(): CmsProgram[] {
  return programs.map((program) => ({
    id: idFromSlug("program", program.slug),
    slug: program.slug,
    title: program.title,
    summary: program.summary,
    description: program.description,
    audience: program.audience,
    length: program.length,
    outcomes: program.outcomes,
    modules: program.modules,
    status: "published",
    updatedAt: now(),
  }));
}

export const fallbackSettings: CmsSettings = {
  siteName: siteConfig.name,
  tagline: siteConfig.tagline,
  contactEmail: siteConfig.email,
  announcement: "AI literacy programs, textbook partnerships, and volunteer opportunities are open.",
  primaryCtaLabel: "Start a partnership",
  primaryCtaHref: "/contact",
  updatedAt: now(),
};

async function readCollection<T>(key: string, fallback: T[]) {
  const stored = await readValue<T[]>(key);
  return stored?.length ? stored : fallback;
}

async function writeCollection<T extends { id: string }>(key: string, items: T[]) {
  await writeValue(key, items);
}

export async function getPosts() {
  return readCollection<CmsPost>(keys.posts, fallbackPosts());
}

export async function getStoredPosts() {
  return readValue<CmsPost[]>(keys.posts);
}

export async function getPublishedPosts() {
  const stored = await getStoredPosts();
  return stored?.filter((post) => post.status === "published") || null;
}

export async function getPost(idOrSlug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.id === idOrSlug || post.slug === idOrSlug) || null;
}

export async function savePost(input: Partial<CmsPost>) {
  const posts = await getPosts();
  const slug = slugify(input.slug || input.title || "update");
  const id = input.id || crypto.randomUUID();
  const post: CmsPost = {
    id,
    slug,
    title: input.title || "Untitled update",
    category: input.category || "announcement",
    summary: input.summary || "",
    publishedAt: input.publishedAt || now(),
    body: Array.isArray(input.body) ? input.body : [],
    image: input.image || "/images/skypa-hero-classroom.png",
    imageAlt: input.imageAlt || input.title || "SetuAI.org update",
    status: input.status || "draft",
    author: input.author || "SetuAI.org",
    updatedAt: now(),
    notificationStatus: input.notificationStatus || "not-sent",
  };
  const nextPosts = [post, ...posts.filter((item) => item.id !== id)];
  await writeCollection(keys.posts, nextPosts);
  return post;
}

export async function deletePost(id: string) {
  const posts = await getPosts();
  await writeCollection(keys.posts, posts.filter((post) => post.id !== id));
}

export async function getPages() {
  return readCollection<CmsPage>(keys.pages, fallbackPages());
}

export async function getPage(idOrSlug: string) {
  const pages = await getPages();
  return pages.find((page) => page.id === idOrSlug || page.slug === idOrSlug) || null;
}

export async function savePage(input: Partial<CmsPage>) {
  const pages = await getPages();
  const existing = input.id ? pages.find((item) => item.id === input.id) : undefined;
  const slug = slugify(input.slug || existing?.slug || input.title || "page");
  const id = input.id || idFromSlug("page", slug);
  const page: CmsPage = {
    id,
    slug,
    title: input.title || "Untitled page",
    eyebrow: input.eyebrow || existing?.eyebrow || "SetuAI.org",
    summary: input.summary || "",
    description: input.description || input.summary || "",
    image: input.image || existing?.image,
    imageAlt: input.imageAlt || existing?.imageAlt,
    cta: input.cta || existing?.cta,
    secondaryCta: input.secondaryCta || existing?.secondaryCta,
    sections: Array.isArray(input.sections) ? (input.sections as PageSection[]) : existing?.sections || [],
    status: input.status || "published",
    updatedAt: now(),
  };
  await writeCollection(keys.pages, [page, ...pages.filter((item) => item.id !== id)]);
  return page;
}

export async function getPrograms() {
  return readCollection<CmsProgram>(keys.programs, fallbackPrograms());
}

export async function getProgramEntry(idOrSlug: string) {
  const entries = await getPrograms();
  return entries.find((program) => program.id === idOrSlug || program.slug === idOrSlug) || null;
}

export async function saveProgram(input: Partial<CmsProgram>) {
  const entries = await getPrograms();
  const slug = slugify(input.slug || input.title || "program");
  const id = input.id || idFromSlug("program", slug);
  const entry: CmsProgram = {
    id,
    slug,
    title: input.title || "Untitled program",
    summary: input.summary || "",
    description: input.description || input.summary || "",
    audience: input.audience || "",
    length: input.length || "",
    outcomes: input.outcomes || [],
    modules: input.modules || [],
    status: input.status || "published",
    updatedAt: now(),
  };
  await writeCollection(keys.programs, [entry, ...entries.filter((item) => item.id !== id)]);
  return entry;
}

export async function getGalleryAlbums() {
  return readCollection<GalleryAlbum>(keys.gallery, []);
}

export async function getGalleryAlbum(id: string) {
  const albums = await getGalleryAlbums();
  return albums.find((album) => album.id === id) || null;
}

export async function saveGalleryAlbum(input: Partial<GalleryAlbum>) {
  const albums = await getGalleryAlbums();
  const id = input.id || crypto.randomUUID();
  const album: GalleryAlbum = {
    id,
    title: input.title || "Untitled album",
    description: input.description || "",
    coverImage: input.coverImage || "",
    images: input.images || [],
    status: input.status || "draft",
    updatedAt: now(),
  };
  await writeCollection(keys.gallery, [album, ...albums.filter((item) => item.id !== id)]);
  return album;
}

export async function deleteGalleryAlbum(id: string) {
  const albums = await getGalleryAlbums();
  await writeCollection(keys.gallery, albums.filter((album) => album.id !== id));
}

export async function getSettings() {
  return (await readValue<CmsSettings>(keys.settings)) || fallbackSettings;
}

export async function saveSettings(input: Partial<CmsSettings>) {
  const settings: CmsSettings = {
    ...(await getSettings()),
    ...input,
    updatedAt: now(),
  };
  await writeValue(keys.settings, settings);
  return settings;
}

function mergeSiteContent(input: Partial<EditableSiteContent> | null): EditableSiteContent {
  const migratedInput = migrateLegacySiteContent(input);
  const home = (migratedInput?.home || {}) as Partial<EditableSiteContent["home"]>;

  return {
    global: {
      ...fallbackSiteContent.global,
      ...migratedInput?.global,
      logo: {
        ...fallbackSiteContent.global.logo,
        ...migratedInput?.global?.logo,
      },
      navCta: {
        ...fallbackSiteContent.global.navCta,
        ...migratedInput?.global?.navCta,
      },
      navigation: migratedInput?.global?.navigation || fallbackSiteContent.global.navigation,
      footerColumns: migratedInput?.global?.footerColumns || fallbackSiteContent.global.footerColumns,
      footerUtilityLinks: migratedInput?.global?.footerUtilityLinks || fallbackSiteContent.global.footerUtilityLinks,
    },
    seo: {
      ...fallbackSiteContent.seo,
      ...migratedInput?.seo,
    },
    home: {
      ...fallbackSiteContent.home,
      ...home,
      hero: {
        ...fallbackSiteContent.home.hero,
        ...home.hero,
        image: {
          ...fallbackSiteContent.home.hero.image,
          ...home.hero?.image,
        },
        primaryCta: {
          ...fallbackSiteContent.home.hero.primaryCta,
          ...home.hero?.primaryCta,
        },
        secondaryCta: {
          ...fallbackSiteContent.home.hero.secondaryCta,
          ...home.hero?.secondaryCta,
        },
      },
      intro: {
        ...fallbackSiteContent.home.intro,
        ...home.intro,
        body: home.intro?.body || fallbackSiteContent.home.intro.body,
      },
      stats: home.stats || fallbackSiteContent.home.stats,
      learning: {
        ...fallbackSiteContent.home.learning,
        ...home.learning,
        cards: home.learning?.cards || fallbackSiteContent.home.learning.cards,
      },
      heartbeat: {
        ...fallbackSiteContent.home.heartbeat,
        ...home.heartbeat,
        image: {
          ...fallbackSiteContent.home.heartbeat.image,
          ...home.heartbeat?.image,
        },
        pulses: home.heartbeat?.pulses || fallbackSiteContent.home.heartbeat.pulses,
      },
      textbook: {
        ...fallbackSiteContent.home.textbook,
        ...home.textbook,
        image: {
          ...fallbackSiteContent.home.textbook.image,
          ...home.textbook?.image,
        },
        bullets: home.textbook?.bullets || fallbackSiteContent.home.textbook.bullets,
        primaryCta: {
          ...fallbackSiteContent.home.textbook.primaryCta,
          ...home.textbook?.primaryCta,
        },
        secondaryCta: {
          ...fallbackSiteContent.home.textbook.secondaryCta,
          ...home.textbook?.secondaryCta,
        },
      },
      audience: {
        ...fallbackSiteContent.home.audience,
        ...home.audience,
        cards: home.audience?.cards || fallbackSiteContent.home.audience.cards,
      },
      process: {
        ...fallbackSiteContent.home.process,
        ...home.process,
        steps: home.process?.steps || fallbackSiteContent.home.process.steps,
      },
      closingCta: {
        ...fallbackSiteContent.home.closingCta,
        ...home.closingCta,
        primaryCta: {
          ...fallbackSiteContent.home.closingCta.primaryCta,
          ...home.closingCta?.primaryCta,
        },
        secondaryCta: {
          ...fallbackSiteContent.home.closingCta.secondaryCta,
          ...home.closingCta?.secondaryCta,
        },
      },
    },
    visuals: {
      ...fallbackSiteContent.visuals,
      ...migratedInput?.visuals,
    },
    updatedAt: migratedInput?.updatedAt || fallbackSiteContent.updatedAt,
  };
}

function migrateLegacySiteContent(input: Partial<EditableSiteContent> | null) {
  if (!input) return input;

  const editableText = JSON.stringify({
    global: input.global,
    seo: input.seo,
    home: input.home,
  });

  if (!editableText.includes("SKYPA") && !editableText.includes("skypafoundation.org")) {
    return input;
  }

  return {
    ...input,
    global: fallbackSiteContent.global,
    seo: fallbackSiteContent.seo,
    home: fallbackSiteContent.home,
  };
}


export async function getSiteContent() {
  return mergeSiteContent(await readValue<EditableSiteContent>(keys.siteContent));
}

export async function saveSiteContent(input: Partial<EditableSiteContent>) {
  const existing = await getSiteContent();
  const siteContent: EditableSiteContent = {
    global: {
      ...existing.global,
      ...input.global,
    },
    seo: {
      ...existing.seo,
      ...input.seo,
    },
    home: {
      ...existing.home,
      ...input.home,
    },
    visuals: {
      ...existing.visuals,
      ...input.visuals,
    },
    updatedAt: now(),
  };
  await writeValue(keys.siteContent, siteContent);
  return siteContent;
}

export async function saveMediaUpload(input: Omit<CmsMediaUpload, "createdAt">) {
  const media: CmsMediaUpload = {
    ...input,
    createdAt: now(),
  };
  await writeValue(`${keys.media}${media.id}`, media);
  return media;
}

export async function getMediaUpload(id: string) {
  return readValue<CmsMediaUpload>(`${keys.media}${id}`);
}

export async function getSubmissions() {
  return readCollection<CmsSubmission>(keys.submissions, []);
}

export async function saveSubmission(input: Omit<CmsSubmission, "id" | "createdAt" | "read">) {
  const submissions = await getSubmissions();
  const submission: CmsSubmission = {
    id: crypto.randomUUID(),
    ...input,
    createdAt: now(),
    read: false,
  };
  await writeCollection(keys.submissions, [submission, ...submissions]);
  return submission;
}

export async function markSubmissionRead(id: string) {
  const submissions = await getSubmissions();
  await writeCollection(
    keys.submissions,
    submissions.map((submission) => (submission.id === id ? { ...submission, read: true } : submission)),
  );
}

export async function getSubscribers() {
  return readCollection<CmsSubscriber>(keys.subscribers, []);
}

export async function saveSubscriber(input: Omit<CmsSubscriber, "id" | "createdAt" | "updatedAt" | "active"> & { active?: boolean }) {
  const subscribers = await getSubscribers();
  const normalizedEmail = input.email.trim().toLowerCase();
  const existing = subscribers.find((subscriber) => subscriber.email === normalizedEmail);
  const subscriber: CmsSubscriber = {
    id: existing?.id || crypto.randomUUID(),
    email: normalizedEmail,
    name: input.name || existing?.name || "",
    source: input.source || existing?.source || "updates-page",
    active: input.active ?? true,
    createdAt: existing?.createdAt || now(),
    updatedAt: now(),
  };
  await writeCollection(keys.subscribers, [subscriber, ...subscribers.filter((item) => item.id !== subscriber.id)]);
  return subscriber;
}

export async function getDashboardSummary() {
  const [posts, pages, programEntries, albums, submissions, subscribers] = await Promise.all([
    getPosts(),
    getPages(),
    getPrograms(),
    getGalleryAlbums(),
    getSubmissions(),
    getSubscribers(),
  ]);

  return {
    posts,
    pages,
    programs: programEntries,
    albums,
    submissions,
    subscribers,
    stats: {
      publishedPosts: posts.filter((post) => post.status === "published").length,
      drafts: posts.filter((post) => post.status === "draft").length,
      pages: pages.length,
      programs: programEntries.length,
      albums: albums.length,
      unreadMessages: submissions.filter((submission) => !submission.read).length,
      subscribers: subscribers.filter((subscriber) => subscriber.active).length,
    },
  };
}

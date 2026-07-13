export type LinkItem = {
  label: string;
  href: string;
  description?: string;
  children?: LinkItem[];
};

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light";
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Card = {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  icon?: string;
};

export type Step = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type PageSection =
  | { type: "text"; eyebrow?: string; title: string; body: string[]; cta?: Cta }
  | { type: "cards"; eyebrow?: string; title: string; body?: string; cards: Card[] }
  | { type: "steps"; eyebrow?: string; title: string; body?: string; steps: Step[] }
  | { type: "image"; eyebrow?: string; title: string; body: string; image: string; imageAlt: string; cta?: Cta }
  | { type: "faq"; eyebrow?: string; title: string; faqs: Faq[] }
  | { type: "cta"; eyebrow?: string; title: string; body: string; ctas: Cta[] };

export type SitePage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image?: string;
  imageAlt?: string;
  cta?: Cta;
  secondaryCta?: Cta;
  sections: PageSection[];
};

export type Program = SitePage & {
  audience: string;
  length: string;
  outcomes: string[];
  modules: string[];
};

export type Story = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  tags: string[];
};

export type Resource = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  audience: string;
  minutes: string;
  body: string[];
};

export type Update = {
  slug: string;
  title: string;
  category: "blog" | "event" | "announcement" | "textbook" | "program";
  summary: string;
  publishedAt: string;
  body: string[];
  image?: string;
  imageAlt?: string;
};

export type Initiative = SitePage & {
  region?: string;
  focus: string;
};

export const siteConfig = {
  name: "SetuAI",
  shortName: "SetuAI",
  tagline: "Practical AI literacy for schools and communities.",
  description:
    "SetuAI is a pre-registration AI literacy initiative convened by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation. It is building practical, responsible AI learning pathways with schools, education nonprofits, and prospective sponsors.",
  url: "https://setuai.org",
  email: "hello@setuai.org",
  image: "/images/skypa-hero-classroom.png",
};

export const foundingPartners = [
  {
    name: "Summit Intelligent Systems",
    href: "https://summitintelligentsystems.com/",
    role: "Technology and implementation partner",
    body: "Summit contributes product, systems, and implementation experience to the founding collaboration.",
  },
  {
    name: "Shikivaa Foundation",
    href: "https://www.shikvaafoundation.org/",
    role: "Education and community access partner",
    body: "Shikivaa contributes an education-first perspective and community access experience to the founding collaboration.",
  },
  {
    name: "SKYPA Foundation",
    href: "/about#founding-partners",
    role: "AI literacy initiative partner",
    body: "SKYPA contributes the originating AI literacy, textbook, school outreach, and volunteer vision behind SetuAI.",
  },
] as const;

export const headerNav: LinkItem[] = [
  { label: "About", href: "/about" },
  {
    label: "For partners",
    href: "/partners",
    children: [
      { label: "Schools", href: "/schools", description: "Start a careful discovery conversation." },
      { label: "Education nonprofits", href: "/partners", description: "Explore a community learning collaboration." },
      { label: "Sponsors", href: "/contact?interest=sponsor", description: "Discuss future material and pilot support." },
    ],
  },
  { label: "Textbook", href: "/textbook" },
  { label: "Updates", href: "/updates" },
  { label: "Get involved", href: "/get-involved" },
];

export const footerColumns: { title: string; links: LinkItem[] }[] = [
  {
    title: "SetuAI",
    links: [
      { label: "About", href: "/about" },
      { label: "How we measure", href: "/impact" },
      { label: "Textbook initiative", href: "/textbook" },
      { label: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { label: "For schools", href: "/schools" },
      { label: "For education nonprofits", href: "/partners" },
      { label: "Sponsor interest", href: "/contact?interest=sponsor" },
      { label: "Volunteer interest", href: "/contact?interest=volunteer" },
    ],
  },
  {
    title: "Care and trust",
    links: [
      { label: "Privacy and data use", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Safeguarding approach", href: "/safeguarding" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const impactStats: Stat[] = [
  {
    value: "In formation",
    label: "Organization status",
    detail: "SetuAI is being prepared as an independent organization; registration, governance, and operating details are still being established.",
  },
  {
    value: "In development",
    label: "Textbook and learning materials",
    detail: "The student-facing AI textbook and supporting materials are being shaped before any public distribution commitment.",
  },
  {
    value: "Partner-led",
    label: "Early conversations",
    detail: "The next step is listening to schools, education nonprofits, and prospective sponsors before announcing delivery dates or outcomes.",
  },
  {
    value: "Access-first",
    label: "Design principle",
    detail: "Clear language, responsible use, adult support, and practical learning are the standard for everything SetuAI builds.",
  },
];

export const homePillars: Card[] = [
  {
    title: "Build understanding before dependence",
    body: "Young people deserve plain-language ways to understand what AI does, where it appears, and when to question it.",
    href: "/about",
    icon: "lightbulb",
  },
  {
    title: "Design with schools, not around them",
    body: "Any future program should fit real school schedules, adult supervision, local policy, and family communication.",
    href: "/schools",
    icon: "school",
  },
  {
    title: "Make durable materials",
    body: "The textbook initiative is being developed as a useful, reviewable learning resource rather than a one-time campaign asset.",
    href: "/textbook",
    icon: "book",
  },
];

const corePagesBase: SitePage[] = [
  {
    slug: "about",
    title: "About SetuAI",
    eyebrow: "Pre-registration initiative",
    summary: "SetuAI is being organized as an independent AI literacy initiative before formal registration.",
    description: "Learn about SetuAI, a pre-registration AI literacy initiative being convened by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation.",
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Concept image representing a collaborative AI learning workshop.",
    cta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "Meet the founding partners", href: "/partners", variant: "secondary" },
    sections: [
      {
        type: "text",
        title: "A bridge into practical AI literacy.",
        body: [
          "SetuAI is a new, independent initiative in formation. It was convened by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation around a shared question: how can schools and communities help young people understand AI before it becomes invisible in their daily lives?",
          "The organization is not yet registered. Its legal structure, governance, tax status, operating geography, and formal program commitments are still being established. This site is designed to make that early work transparent, invite the right conversations, and document progress carefully.",
        ],
      },
      {
        type: "cards",
        title: "What SetuAI is building toward.",
        body: "The focus is practical learning, not inflated promises. Every future offer should be reviewed, age-appropriate, and clear about its status.",
        cards: [
          { title: "AI literacy", body: "Plain-language learning about AI systems, outputs, privacy, bias, verification, and human judgment.", icon: "lightbulb" },
          { title: "School collaboration", body: "Discovery with educators and youth-serving organizations before naming a program, cohort, or delivery date.", icon: "school" },
          { title: "Student materials", body: "A developing textbook and supporting resources that can be reviewed, improved, and made useful over time.", icon: "book" },
        ],
      },
      {
        type: "text",
        eyebrow: "Founding collaboration",
        title: "Three partners, one shared starting point.",
        body: [
          "Summit Intelligent Systems contributes technology and implementation experience. Shikivaa Foundation contributes an education-first and community-access perspective. SKYPA Foundation contributes the originating AI literacy, textbook, school outreach, and volunteer vision.",
          "Founding partners support the initiative; they do not replace the independent organization SetuAI is working to become. Names, roles, governance, and public claims will be updated as they are formally confirmed.",
        ],
      },
    ],
  },
  {
    slug: "textbook",
    title: "The SetuAI Textbook Initiative",
    eyebrow: "In development",
    summary: "SetuAI is developing a student-friendly AI literacy textbook before setting distribution commitments.",
    description: "Explore SetuAI's developing AI literacy textbook initiative and the questions that must be resolved before pilot or distribution plans are announced.",
    image: "/images/skypa-ai-textbook.png",
    imageAlt: "Concept image of AI literacy workbook materials.",
    cta: { label: "Discuss textbook support", href: "/contact?interest=sponsor" },
    secondaryCta: { label: "See the approach", href: "/about", variant: "secondary" },
    sections: [
      {
        type: "image",
        title: "A durable learning resource, built carefully.",
        body: "The textbook is a development initiative, not a published or distributed product yet. Before a pilot, SetuAI needs a clear manuscript, educator review, age guidance, accessibility review, source and image rights, a correction process, and a transparent plan for feedback.",
        image: "/images/skypa-ai-textbook.png",
        imageAlt: "Concept image of a student-facing AI literacy workbook.",
        cta: { label: "Ask about the initiative", href: "/contact" },
      },
      {
        type: "cards",
        title: "Topics under consideration.",
        body: "These are learning themes in development, not a final table of contents or a promise of delivery.",
        cards: [
          { title: "How AI works", body: "Simple models for data, patterns, outputs, and the limits of automated systems.", icon: "book" },
          { title: "Using AI thoughtfully", body: "Prompts, verification, attribution, creativity, and keeping a learner's own thinking visible.", icon: "lightbulb" },
          { title: "Safety and judgment", body: "Privacy, bias, synthetic media, misinformation, adult support, and knowing when to pause.", icon: "shield" },
        ],
      },
      {
        type: "steps",
        title: "What must happen before any public distribution.",
        steps: [
          { title: "Editorial scope", body: "Confirm age bands, learning goals, authorship, sources, and the practical format with qualified reviewers." },
          { title: "Review and testing", body: "Run educator, accessibility, safeguarding, and factual review before describing the materials as school-ready." },
          { title: "Pilot agreement", body: "Agree on permissions, logistics, supervision, feedback, and the exact role of each participating organization." },
          { title: "Transparent release", body: "Publish the version, date, review approach, updates, and access terms alongside any released materials." },
        ],
      },
    ],
  },
  {
    slug: "schools",
    title: "For Schools and Education Partners",
    eyebrow: "Discovery first",
    summary: "SetuAI is inviting careful discovery conversations with schools and education nonprofits; no delivery dates are publicly committed.",
    description: "Start an early conversation with SetuAI about a future AI literacy collaboration for a school or education nonprofit.",
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Concept image representing educators and students collaborating.",
    cta: { label: "Start a school conversation", href: "/contact?interest=school" },
    secondaryCta: { label: "Read the safeguarding approach", href: "/safeguarding", variant: "secondary" },
    sections: [
      {
        type: "text",
        title: "A useful first conversation starts with context.",
        body: [
          "SetuAI is not publishing a catalogue of confirmed workshops yet. The first step is learning from educators and youth-serving organizations about grade levels, local policy, family communication, device access, timing, supervision, and the questions students already have.",
          "That discovery work helps determine whether an AI literacy collaboration is appropriate, what safeguards it would require, and whether the material should be adapted or paused.",
        ],
      },
      {
        type: "steps",
        title: "A responsible pathway from interest to a possible pilot.",
        steps: [
          { title: "Share the setting", body: "Tell us who you serve, what your students need, and the constraints educators need us to respect." },
          { title: "Review fit and safeguards", body: "Clarify adult supervision, privacy, consent, accessibility, school policy, and the type of support that might be appropriate." },
          { title: "Define a small next step", body: "If there is a fit, agree on a documented pilot scope rather than implying a finished program exists." },
          { title: "Learn before expanding", body: "Use feedback and documented outcomes to decide whether a future collaboration should continue, change, or stop." },
        ],
      },
      {
        type: "cta",
        title: "Bring the realities of your setting.",
        body: "Include age group, location, educational context, timeline, existing AI guidance, accessibility needs, and the kind of conversation you hope to have. SetuAI will not promise a format before that context is understood.",
        ctas: [{ label: "Contact SetuAI", href: "/contact?interest=school" }],
      },
    ],
  },
  {
    slug: "impact",
    title: "How SetuAI Will Measure Responsibly",
    eyebrow: "Measurement in design",
    summary: "SetuAI has no verified impact figures to report yet. It is building a transparent measurement approach before public outcomes are claimed.",
    description: "Read how SetuAI plans to document future AI literacy work responsibly before publishing participant, partner, or learning impact claims.",
    cta: { label: "Share a measurement perspective", href: "/contact" },
    sections: [
      {
        type: "text",
        title: "No impact numbers before there is evidence.",
        body: [
          "SetuAI will not treat projected seats, informal conversations, or proposed learning tracks as completed impact. The site currently reports no verified learner, school, distribution, fundraising, or program outcomes.",
          "Before publishing metrics, the organization needs a consistent definition, collection method, review owner, reporting date, and clear distinction between activity, output, feedback, and outcome.",
        ],
      },
      {
        type: "cards",
        title: "A future public report should make four things visible.",
        cards: [
          { title: "What happened", body: "The date, setting, activity, partner role, and participant count, with the source of the record.", icon: "school" },
          { title: "What was learned", body: "Feedback and evidence presented with limitations, not converted into broad claims without support.", icon: "lightbulb" },
          { title: "What changed", body: "The edits made after review, including material corrections, access improvements, and safeguards.", icon: "check" },
          { title: "What remains unknown", body: "Open questions and missing evidence stated plainly so visitors can judge the work fairly.", icon: "message" },
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy and Data Use",
    eyebrow: "Working notice",
    summary: "This working privacy notice explains how the pre-registration site handles messages and update subscriptions while the legal entity is being established.",
    description: "Read SetuAI's working privacy and data-use notice for site inquiries, image uploads, and update subscriptions.",
    sections: [
      {
        type: "text",
        title: "What this site collects.",
        body: [
          "When a visitor sends an inquiry, the site collects the information entered in the form, including name, email address, organization, selected interest, and message. When a visitor subscribes to updates, the site collects the name and email address provided for that purpose.",
          "The site does not ask for payment details, student records, health information, or sensitive personal information. Do not submit those details through public forms.",
          "This is a working operational notice for an organization in formation. It must be reviewed and replaced by the eventual legal operator with jurisdiction-appropriate details before formal public operations begin.",
        ],
      },
      {
        type: "cards",
        title: "How information is used.",
        cards: [
          { title: "Respond to the message", body: "Inquiry details are used to understand and reply to the requested conversation." },
          { title: "Send requested updates", body: "Update subscriptions are separate from inquiries and should only be used for the updates a visitor explicitly requested." },
          { title: "Protect the service", body: "Limited technical information may be used for fraud prevention, rate limiting, and maintaining the site." },
        ],
      },
      {
        type: "cta",
        title: "Questions or deletion requests.",
        body: "Until a formal privacy contact is named, use the public contact form and choose a general question. Do not include sensitive information in the request.",
        ctas: [{ label: "Contact SetuAI", href: "/contact" }],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Commitment",
    eyebrow: "Working commitment",
    summary: "SetuAI is building its public materials and website around clear language, keyboard access, reduced motion, and an open feedback route.",
    description: "Read SetuAI's working accessibility commitment and report a barrier on the pre-registration website.",
    sections: [
      {
        type: "text",
        title: "Accessibility is part of the learning design.",
        body: [
          "SetuAI aims to make its website, materials, and future learning experiences usable by people with different access needs. Current site work includes semantic structure, visible keyboard focus, responsive layouts, text alternatives for images, and reduced-motion support.",
          "Accessibility is ongoing work, not a completed claim. Report a barrier, missing alternative format, or unclear page through the contact form so it can be reviewed and tracked.",
        ],
      },
      {
        type: "cta",
        title: "Report an access barrier.",
        body: "Tell us which page or material you used, what happened, your browser or device if relevant, and a safe way to follow up. Do not share sensitive personal information.",
        ctas: [{ label: "Report a barrier", href: "/contact" }],
      },
    ],
  },
  {
    slug: "safeguarding",
    title: "Safeguarding Approach",
    eyebrow: "Before any student-facing delivery",
    summary: "SetuAI will not begin student-facing activities without partner-specific safeguarding, supervision, privacy, and escalation arrangements.",
    description: "Read SetuAI's working safeguarding approach for any future AI literacy activity involving young people.",
    sections: [
      {
        type: "text",
        title: "No public program delivery before safeguards are agreed.",
        body: [
          "SetuAI is not currently advertising a confirmed student-facing program schedule. Before any activity involving young people, the eventual operating organization and host partner must agree on appropriate adult supervision, screening requirements, consent, photography rules, data handling, accessibility, tool access, incident reporting, and escalation contacts.",
          "A website statement cannot replace a host school's or youth-serving organization's safeguarding policy. SetuAI will work within the applicable partner requirements and pause activity where the necessary protections are not in place.",
        ],
      },
      {
        type: "cards",
        title: "Minimum conditions for a future activity.",
        cards: [
          { title: "Named adults and escalation", body: "Clear accountable contacts, supervision expectations, and a documented route for raising concerns." },
          { title: "Privacy-aware tools", body: "Approved tools, appropriate account handling, and no request for unnecessary student personal data." },
          { title: "Age-appropriate learning", body: "Materials, examples, permissions, and activities reviewed for the intended group and setting." },
          { title: "Partner agreement", body: "A written shared understanding of roles, limits, feedback, and what happens if a concern is raised." },
        ],
      },
    ],
  },
];

export const corePages: SitePage[] = corePagesBase;

// There are no confirmed public programs, stories, resources, or initiatives at launch.
// The custom CMS can create and publish them once they have factual content and approval.
export const programs: Program[] = [];
export const stories: Story[] = [];
export const resources: Resource[] = [];
export const updates: Update[] = [];
export const initiatives: Initiative[] = [];

export function getCorePage(slug: string) {
  return corePages.find((page) => page.slug === slug);
}

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getUpdate(slug: string) {
  return updates.find((update) => update.slug === slug);
}

export function getInitiative(slug: string) {
  return initiatives.find((initiative) => initiative.slug === slug);
}

export const allStaticPaths = [
  "/",
  ...corePages.map((page) => `/${page.slug}`),
  "/programs",
  "/updates",
  "/partners",
  "/get-involved",
  "/contact",
];

export const chatbotKnowledge = [
  "SetuAI is a pre-registration AI literacy initiative being convened by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation.",
  "SetuAI is not yet a registered organization and does not claim verified program outcomes, confirmed school partnerships, or a public distribution schedule.",
  "The initiative is developing practical AI literacy materials, including a student-facing textbook concept, before any public pilot or distribution commitment.",
  "Schools, education nonprofits, and prospective sponsors can use the contact form to begin a discovery conversation. The form is not a booking or donation flow.",
  "Visitors can subscribe to updates only if they want emailed progress notices. Inquiries should not automatically subscribe someone to updates.",
  "Do not invent confirmed partner names, school names, program dates, student counts, tax status, legal status, or impact numbers.",
];

import {
  footerColumns,
  foundingPartners,
  headerNav,
  impactStats,
  siteConfig,
  type Cta,
  type LinkItem,
  type Stat,
} from "@/content/site";

export type EditableCard = {
  title: string;
  body: string;
  href?: string;
  icon?: string;
};

export type EditableImage = {
  src: string;
  alt: string;
};

export type EditableHomeContent = {
  hero: {
    kicker: string;
    title: string;
    body: string;
    image: EditableImage;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  intro: {
    kicker: string;
    title: string;
    featuredStatement: string;
    body: string[];
  };
  stats: Stat[];
  learning: {
    title: string;
    body: string;
    cards: EditableCard[];
  };
  heartbeat: {
    kicker: string;
    title: string;
    body: string;
    image: EditableImage;
    pulses: string[];
  };
  textbook: {
    kicker: string;
    title: string;
    body: string;
    image: EditableImage;
    calloutLabel: string;
    calloutTitle: string;
    bullets: string[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  audience: {
    title: string;
    body: string;
    cards: EditableCard[];
  };
  process: {
    kicker: string;
    title: string;
    body: string;
    steps: string[];
  };
  closingCta: {
    title: string;
    body: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
};

export type EditableGlobalContent = {
  siteName: string;
  shortName: string;
  tagline: string;
  description: string;
  email: string;
  logo: EditableImage;
  navCta: Cta;
  navigation: LinkItem[];
  footerColumns: { title: string; links: LinkItem[] }[];
  footerUtilityLinks: LinkItem[];
  foundingPartners: EditableFoundingPartner[];
  serviceArea: string;
  copyrightLine: string;
};

export type EditableFoundingPartner = {
  name: string;
  href: string;
  role: string;
  body: string;
};

export type EditableSeoContent = {
  homeTitle: string;
  homeDescription: string;
  homeImage: string;
};

export type EditableVisualSettings = {
  hero3dEnabled: boolean;
  hero3dLabel: string;
  heartbeat3dEnabled: boolean;
  heartbeat3dLabel: string;
  motionEnabled: boolean;
  visualDensity: "calm" | "active" | "immersive";
};

export type EditableSiteContent = {
  contentVersion: string;
  global: EditableGlobalContent;
  seo: EditableSeoContent;
  home: EditableHomeContent;
  visuals: EditableVisualSettings;
  updatedAt: string;
};

export const siteContentSchemaVersion = "pre-registration-2026-07";

export const fallbackSiteContent: EditableSiteContent = {
  contentVersion: siteContentSchemaVersion,
  global: {
    siteName: siteConfig.name,
    shortName: siteConfig.shortName,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    logo: {
      src: "",
      alt: "SetuAI wordmark",
    },
    navCta: {
      label: "Start a conversation",
      href: "/contact",
    },
    navigation: headerNav,
    footerColumns,
    foundingPartners: foundingPartners.map((partner) => ({ ...partner })),
    footerUtilityLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Contact", href: "/contact" },
    ],
    serviceArea: "An independent initiative in formation",
    copyrightLine: "SetuAI. Pre-registration initiative.",
  },
  seo: {
    homeTitle: "SetuAI | Practical AI Literacy in Formation",
    homeDescription: siteConfig.description,
    homeImage: "/images/skypa-hero-classroom.png",
  },
  home: {
    hero: {
      kicker: "An initiative in formation",
      title: "SetuAI",
      body: "A pre-registration AI literacy initiative being convened by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation. We are building the foundations for practical, responsible AI learning with schools and communities.",
      image: {
        src: "/images/skypa-hero-classroom.png",
        alt: "Students learning AI literacy with a teacher in a bright classroom.",
      },
      primaryCta: {
        label: "Start a conversation",
        href: "/contact",
        variant: "light",
      },
      secondaryCta: {
        label: "See what is being built",
        href: "/about",
        variant: "secondary",
      },
    },
    intro: {
      kicker: "Why this work matters",
      title: "AI is becoming part of childhood. Young people deserve a trusted way to understand it.",
      featuredStatement:
        "SetuAI is being built to turn AI from a confusing buzzword into something students can understand, question, and use with judgment.",
      body: [
        "SetuAI is a collaborative initiative with its own identity in formation. Summit Intelligent Systems contributes technology and implementation experience, Shikivaa Foundation contributes an education-first and community-access perspective, and SKYPA Foundation contributes the originating AI literacy and textbook vision.",
        "The next work is deliberate: listen to schools and education nonprofits, develop reviewable learning materials, establish safeguards, and only then describe specific delivery plans or outcomes publicly.",
      ],
    },
    stats: impactStats,
    learning: {
      title: "A learning approach built for classrooms, not hype cycles.",
      body: "The developing approach is designed around clear language, adult-supported practice, and materials that educators can review before anything is presented as school-ready.",
      cards: [
        {
          title: "Explain the systems around them",
          body: "Future materials will use simple mental models for prompts, training data, outputs, bias, privacy, and human judgment.",
          icon: "lightbulb",
        },
        {
          title: "Practice with responsible tools",
          body: "Any future activity should make verification, attribution, reflection, and adult-supported practice visible.",
          icon: "sparkles",
        },
        {
          title: "Carry the learning home",
          body: "The textbook initiative is being developed as a durable resource students and educators can revisit and improve over time.",
          icon: "book",
        },
      ],
    },
    heartbeat: {
      kicker: "The principle underneath the work",
      title: "The point is not more AI. It is better judgment, shared access, and clearer choices.",
      body: "SetuAI is being designed around a simple belief: AI literacy should help students ask better questions, help adults guide responsibly, and help communities decide what deserves their trust.",
      image: {
        src: "/images/skypa-partnership-workshop.png",
        alt: "Concept image of educators and students collaborating around learning materials.",
      },
      pulses: [
        "Human judgment before automation",
        "Clear language before technical jargon",
        "Community access before private advantage",
      ],
    },
    textbook: {
      kicker: "Textbook initiative in development",
      title: "A textbook students can hold, revisit, and question.",
      body: "SetuAI is developing a student-facing AI literacy textbook. It is not yet published, piloted, or scheduled for distribution. The priority is to make it accurate, age-appropriate, accessible, and reviewable first.",
      image: {
        src: "/images/skypa-ai-textbook.png",
        alt: "AI literacy textbook and classroom workbook materials.",
      },
      calloutLabel: "Development status",
      calloutTitle: "No distribution claim before review and pilot planning.",
      bullets: [
        "Plain-language AI concepts",
        "Thoughtful prompting and verification",
        "Safety, bias, privacy, and human judgment",
      ],
      primaryCta: {
        label: "Explore the textbook initiative",
        href: "/textbook",
        variant: "light",
      },
      secondaryCta: {
        label: "Discuss future support",
        href: "/contact?interest=sponsor",
        variant: "secondary",
      },
    },
    audience: {
      title: "Clear, low-pressure next steps for every kind of partner.",
      body: "SetuAI is still in its discovery phase. A school, education nonprofit, prospective sponsor, volunteer, or family can share context without being promised a program that has not been designed or approved.",
      cards: [
        {
          title: "Schools",
          body: "Share your educational context, questions, and constraints for a future AI literacy conversation.",
          href: "/schools",
          icon: "school",
        },
        {
          title: "Education nonprofits",
          body: "Explore how local knowledge and community access could shape a responsible future collaboration.",
          href: "/partners",
          icon: "users",
        },
        {
          title: "Companies",
          body: "Discuss prospective support without a donation, tax-receipt, or program-delivery promise on this site.",
          href: "/contact?interest=sponsor",
          icon: "building",
        },
        {
          title: "Volunteers",
          body: "Register interest in future, appropriately screened roles such as review, outreach, operations, or approved facilitation support.",
          href: "/contact?interest=volunteer",
          icon: "heart",
        },
        {
          title: "Families",
          body: "Share the questions families need answered as SetuAI develops clear, accessible learning materials.",
          href: "/contact",
          icon: "users",
        },
      ],
    },
    process: {
      kicker: "A responsible partnership path",
      title: "From a first conversation to a possible, safeguarded pilot.",
      body: "The early process is intentionally careful. A form submission opens a conversation; it does not confirm a workshop, a sponsorship, or a student-facing activity.",
      steps: [
        "Understand the setting and intended audience",
        "Review safeguards, capacity, and material readiness",
        "Define a small documented next step if there is a fit",
        "Learn, review, and communicate the outcome honestly",
      ],
    },
    closingCta: {
      title: "Help build an AI literacy initiative worth trusting.",
      body: "Bring a school's perspective, a community need, a review skill, or an interest in future support. SetuAI will be clear about what is known, what is in development, and what needs to be decided together.",
      primaryCta: {
        label: "Start a conversation",
        href: "/contact",
        variant: "light",
      },
      secondaryCta: {
        label: "Get involved",
        href: "/get-involved",
        variant: "secondary",
      },
    },
  },
  visuals: {
    hero3dEnabled: true,
    hero3dLabel: "Interactive AI learning lattice",
    heartbeat3dEnabled: true,
    heartbeat3dLabel: "Pulsing mission heart built from learning signals",
    motionEnabled: true,
    visualDensity: "calm",
  },
  updatedAt: "2026-07-12T00:00:00.000Z",
};

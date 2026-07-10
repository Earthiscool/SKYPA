import {
  footerColumns,
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
  serviceArea: string;
  copyrightLine: string;
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
  global: EditableGlobalContent;
  seo: EditableSeoContent;
  home: EditableHomeContent;
  visuals: EditableVisualSettings;
  updatedAt: string;
};

export const fallbackSiteContent: EditableSiteContent = {
  global: {
    siteName: siteConfig.name,
    shortName: siteConfig.shortName,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    logo: {
      src: "",
      alt: "SetuAI.org temporary wordmark",
    },
    navCta: {
      label: "Start a partnership",
      href: "/contact",
    },
    navigation: headerNav,
    footerColumns,
    footerUtilityLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    serviceArea: "Serving schools, education nonprofits, and sponsor partners",
    copyrightLine: "SetuAI.org. All rights reserved.",
  },
  seo: {
    homeTitle: "SetuAI.org | AI Literacy for Schools and Communities",
    homeDescription: siteConfig.description,
    homeImage: "/images/skypa-hero-classroom.png",
  },
  home: {
    hero: {
      kicker: "A bridge into responsible AI",
      title: "SetuAI.org",
      body: "A new independent AI literacy initiative built by Summit Intelligent Systems, Shikivaa Foundation, and SKYPA Foundation to bring practical AI education into schools and communities.",
      image: {
        src: "/images/skypa-hero-classroom.png",
        alt: "Students learning AI literacy with a teacher in a bright classroom.",
      },
      primaryCta: {
        label: "Start a partnership",
        href: "/contact",
        variant: "light",
      },
      secondaryCta: {
        label: "Explore programs",
        href: "/programs",
        variant: "secondary",
      },
    },
    intro: {
      kicker: "Why this work matters",
      title: "AI is becoming part of childhood. SetuAI gives students a trusted way in.",
      featuredStatement:
        "SetuAI turns AI from a confusing buzzword into something students can understand, question, and use responsibly.",
      body: [
        "SetuAI.org is a collaborative initiative with its own identity: Summit Intelligent Systems contributes technology and implementation, Shikivaa Foundation contributes education and community access, and SKYPA Foundation contributes student-centered AI literacy programming.",
        "The work is practical by design: workshops, educator support, a growing textbook, and partnerships with schools, education nonprofits, and companies that want to sponsor access.",
      ],
    },
    stats: impactStats,
    learning: {
      title: "A learning model built for classrooms, not hype cycles.",
      body: "Every SetuAI program is designed to lower the barrier: clear language, adult-supported practice, and materials a school or youth-serving nonprofit can actually use.",
      cards: [
        {
          title: "Explain the systems around them",
          body: "Students learn simple mental models for prompts, training data, outputs, bias, privacy, and human judgment.",
          icon: "lightbulb",
        },
        {
          title: "Practice with responsible tools",
          body: "Workshops turn AI into supervised activities: compare answers, cite sources, revise prompts, and reflect.",
          icon: "sparkles",
        },
        {
          title: "Carry the learning home",
          body: "Textbook pages and classroom-ready materials give students something durable to revisit after the session.",
          icon: "book",
        },
      ],
    },
    heartbeat: {
      kicker: "Living mission",
      title: "A website that feels like the work: curious, careful, and alive.",
      body: "The heart of SetuAI is not AI by itself. It is students learning to ask better questions, teachers getting practical support, and communities choosing access before advantage.",
      image: {
        src: "/images/skypa-higgsfield-heart.png",
        alt: "An open book shaped like a heart surrounded by students writing.",
      },
      pulses: [
        "Human judgment before automation",
        "Clear language before technical jargon",
        "Community access before private advantage",
      ],
    },
    textbook: {
      kicker: "Textbook initiative",
      title: "A textbook students can hold, revisit, and share.",
      body: "SetuAI is developing an AI literacy textbook for kids, designed for distribution through schools, local partners, and education nonprofits. Sponsors can help turn the material into printed access.",
      image: {
        src: "/images/skypa-ai-textbook.png",
        alt: "AI literacy textbook and classroom workbook materials.",
      },
      calloutLabel: "Current initiative",
      calloutTitle: "Textbook access students can keep in hand.",
      bullets: [
        "AI basics in student language",
        "Prompt practice and creative projects",
        "Safety, bias, privacy, and human judgment",
      ],
      primaryCta: {
        label: "Explore the textbook",
        href: "/textbook",
        variant: "light",
      },
      secondaryCta: {
        label: "Sponsor copies",
        href: "/donate",
        variant: "secondary",
      },
    },
    audience: {
      title: "Clear next steps for every kind of partner.",
      body: "SetuAI is an outreach engine as much as an education program. The site should help a school, education nonprofit, sponsor, volunteer, or family immediately understand where they fit.",
      cards: [
        {
          title: "Schools",
          body: "Bring SetuAI into assemblies, classroom workshops, textbook pilots, and teacher support sessions.",
          href: "/schools",
          icon: "school",
        },
        {
          title: "Education nonprofits",
          body: "Collaborate on community programs, resource distribution, parent sessions, and local youth learning events.",
          href: "/partners",
          icon: "users",
        },
        {
          title: "Companies",
          body: "Sponsor textbook access, fund a school cohort, or organize skilled volunteers around a clear education goal.",
          href: "/corporate-partners",
          icon: "building",
        },
        {
          title: "Volunteers",
          body: "Help with facilitation, curriculum feedback, outreach, logistics, and student-friendly learning materials.",
          href: "/volunteer",
          icon: "heart",
        },
        {
          title: "Families",
          body: "Understand what students are learning and how to talk about safety, creativity, and AI at home.",
          href: "/parents",
          icon: "users",
        },
      ],
    },
    process: {
      kicker: "School partnership path",
      title: "From first conversation to classroom delivery.",
      body: "The process is intentionally simple so schools, nonprofits, and sponsors can move from interest to a pilot without guessing what SetuAI needs from them.",
      steps: [
        "Discovery call with school leaders",
        "Workshop or textbook pilot design",
        "Student session with guided activities",
        "Reflection, resources, and next steps",
      ],
    },
    closingCta: {
      title: "Help more students meet AI with confidence, not confusion.",
      body: "Start a school partnership, sponsor textbook access, or bring volunteer support to the next SetuAI initiative.",
      primaryCta: {
        label: "Start a partnership",
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
    visualDensity: "active",
  },
  updatedAt: "2026-07-09T00:00:00.000Z",
};

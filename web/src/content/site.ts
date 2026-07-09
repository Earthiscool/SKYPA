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
  | {
      type: "text";
      eyebrow?: string;
      title: string;
      body: string[];
      cta?: Cta;
    }
  | {
      type: "cards";
      eyebrow?: string;
      title: string;
      body?: string;
      cards: Card[];
    }
  | {
      type: "steps";
      eyebrow?: string;
      title: string;
      body?: string;
      steps: Step[];
    }
  | {
      type: "image";
      eyebrow?: string;
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      cta?: Cta;
    }
  | {
      type: "faq";
      eyebrow?: string;
      title: string;
      faqs: Faq[];
    }
  | {
      type: "cta";
      eyebrow?: string;
      title: string;
      body: string;
      ctas: Cta[];
    };

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
  name: "SKYPA Foundation",
  shortName: "SKYPA",
  tagline: "AI literacy for every curious student.",
  description:
    "SKYPA Foundation helps schools, families, and community partners bring practical AI literacy education to children through workshops, curriculum, textbooks, and partnerships.",
  url: "https://skypafoundation.org",
  email: "hello@skypafoundation.org",
  image: "/images/skypa-hero-classroom.png",
};

export const headerNav: LinkItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Mission",
        href: "/mission",
        description: "Why AI literacy belongs in every community.",
      },
      {
        label: "Impact",
        href: "/impact",
        description: "Signals, outcomes, and the roadmap ahead.",
      },
      {
        label: "Team",
        href: "/team",
        description: "The people building the foundation.",
      },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "AI Literacy",
        href: "/programs/ai-literacy",
        description: "A practical introduction to AI for students.",
      },
      {
        label: "School Partnerships",
        href: "/programs/school-partnerships",
        description: "Bring SKYPA workshops to your school.",
      },
      {
        label: "AI Textbook",
        href: "/textbook",
        description: "A student-friendly textbook built for access.",
      },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Stories", href: "/stories" },
  { label: "Updates", href: "/updates" },
  { label: "Resources", href: "/resources" },
  { label: "Get Involved", href: "/get-involved" },
];

export const footerColumns: { title: string; links: LinkItem[] }[] = [
  {
    title: "Organization",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/mission" },
      { label: "Impact", href: "/impact" },
      { label: "Stories", href: "/stories" },
      { label: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "AI Literacy", href: "/programs/ai-literacy" },
      { label: "School Partnerships", href: "/programs/school-partnerships" },
      { label: "Textbook Initiative", href: "/textbook" },
      { label: "Teacher Training", href: "/programs/teacher-bootcamps" },
      { label: "Latest Updates", href: "/updates" },
    ],
  },
  {
    title: "Take Action",
    links: [
      { label: "Partner with SKYPA", href: "/partners" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Sponsor", href: "/donate" },
      { label: "Get Updates", href: "/updates" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For Audiences",
    links: [
      { label: "Schools", href: "/schools" },
      { label: "Students", href: "/students" },
      { label: "Parents", href: "/parents" },
      { label: "Corporate Partners", href: "/corporate-partners" },
    ],
  },
];

export const impactStats: Stat[] = [
  {
    value: "1,000+",
    label: "student seats planned",
    detail: "Initial outreach target for workshops, classroom pilots, and textbook distribution.",
  },
  {
    value: "25+",
    label: "school conversations",
    detail: "A partnership pipeline for AI literacy pilots, educator support, and community events.",
  },
  {
    value: "6",
    label: "learning tracks",
    detail: "From AI basics and prompt skills to ethics, creativity, safety, and future careers.",
  },
  {
    value: "100%",
    label: "access-first design",
    detail: "Built around low-barrier materials, approachable language, and school-ready delivery.",
  },
];

export const homePillars: Card[] = [
  {
    eyebrow: "Classroom programs",
    title: "AI literacy that feels understandable",
    body: "Students learn what AI is, where it appears in daily life, how to question outputs, and how to use tools responsibly.",
    href: "/programs/ai-literacy",
    icon: "sparkles",
  },
  {
    eyebrow: "School partnerships",
    title: "A partner schools can actually run",
    body: "SKYPA supports assemblies, workshops, teacher sessions, and custom pilots that fit school schedules.",
    href: "/programs/school-partnerships",
    icon: "school",
  },
  {
    eyebrow: "Textbook initiative",
    title: "A practical AI book for local students",
    body: "The foundation is developing an accessible AI textbook to distribute through school and community partners.",
    href: "/textbook",
    icon: "book",
  },
  {
    eyebrow: "Community action",
    title: "Volunteers, sponsors, and mentors",
    body: "The website turns interest from families, educators, students, and companies into organized next steps.",
    href: "/get-involved",
    icon: "heart",
  },
];

const corePagesBase: SitePage[] = [
  {
    slug: "about",
    title: "About SKYPA Foundation",
    eyebrow: "Who we are",
    summary:
      "SKYPA Foundation is building practical AI literacy pathways for children, schools, and communities.",
    description:
      "Learn about SKYPA Foundation, an AI literacy nonprofit helping students understand, question, and use AI responsibly.",
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Students, teachers, and volunteers collaborating during an AI literacy workshop.",
    cta: { label: "Partner with us", href: "/partners" },
    secondaryCta: { label: "See programs", href: "/programs", variant: "secondary" },
    sections: [
      {
        type: "text",
        eyebrow: "Our role",
        title: "We translate AI into learning children can use.",
        body: [
          "AI is already shaping homework, creativity, search, media, future careers, and community life. SKYPA Foundation exists so students are not left to figure it out alone.",
          "The foundation works with schools and partners to deliver age-aware AI education: clear concepts, hands-on activities, safety habits, and the confidence to ask better questions.",
        ],
      },
      {
        type: "cards",
        eyebrow: "What makes SKYPA different",
        title: "Practical, responsible, and built with schools in mind.",
        cards: [
          {
            title: "Student-first language",
            body: "Lessons avoid jargon and focus on examples children can see in school, home, and online life.",
            icon: "students",
          },
          {
            title: "Partnership model",
            body: "Schools, sponsors, volunteers, and community organizations can each plug into a clear role.",
            icon: "building",
          },
          {
            title: "Resource creation",
            body: "The textbook initiative turns one-time workshops into repeatable learning students can revisit.",
            icon: "book",
          },
        ],
      },
    ],
  },
  {
    slug: "mission",
    title: "AI Literacy Should Be a Public Good",
    eyebrow: "Mission",
    summary:
      "SKYPA Foundation helps students build the language, judgment, and confidence to participate in an AI-shaped world.",
    description:
      "Explore SKYPA Foundation's mission to make AI literacy accessible through schools, textbooks, workshops, and community partnerships.",
    cta: { label: "Join the mission", href: "/get-involved" },
    sections: [
      {
        type: "text",
        title: "The mission is simple: make AI understandable before it becomes invisible.",
        body: [
          "Children are encountering AI through search, writing tools, recommendation systems, images, chatbots, and learning platforms. Understanding these systems is becoming a basic literacy skill.",
          "SKYPA Foundation teaches students how AI works at a high level, how to use it productively, how to recognize limitations, and how to make ethical choices.",
        ],
      },
      {
        type: "steps",
        eyebrow: "Our learning promise",
        title: "Every SKYPA experience should help students do four things.",
        steps: [
          {
            title: "Name what AI is",
            body: "Students learn simple mental models for data, models, patterns, predictions, and outputs.",
          },
          {
            title: "Use AI thoughtfully",
            body: "They practice asking better questions, revising prompts, checking outputs, and documenting their process.",
          },
          {
            title: "Spot risks",
            body: "Students discuss bias, privacy, misinformation, overreliance, and the importance of human judgment.",
          },
          {
            title: "Imagine futures",
            body: "They connect AI literacy to careers, creativity, service, entrepreneurship, and community problem solving.",
          },
        ],
      },
    ],
  },
  {
    slug: "impact",
    title: "Impact Built One Classroom at a Time",
    eyebrow: "Impact",
    summary:
      "Track the foundation's education model, partnership pipeline, and measurable outcomes as programs expand.",
    description:
      "View SKYPA Foundation's impact goals, student learning outcomes, and school partnership roadmap.",
    cta: { label: "Support expansion", href: "/donate" },
    sections: [
      {
        type: "cards",
        eyebrow: "Measurement",
        title: "SKYPA measures what schools and families actually care about.",
        cards: [
          {
            title: "Student confidence",
            body: "Pre- and post-session reflection prompts track whether students can explain AI in their own words.",
            icon: "sparkles",
          },
          {
            title: "Responsible use",
            body: "Activities ask students to identify when an output needs fact-checking, attribution, or adult support.",
            icon: "shield",
          },
          {
            title: "Partner readiness",
            body: "Schools receive clear materials, facilitation notes, and follow-up options so programs can repeat.",
            icon: "school",
          },
        ],
      },
      {
        type: "cta",
        title: "Help SKYPA turn early momentum into durable access.",
        body: "Sponsors and school partners can fund workshops, textbook printing, educator training, and local distribution.",
        ctas: [
          { label: "Become a sponsor", href: "/donate" },
          { label: "Start a school pilot", href: "/schools", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "textbook",
    title: "The SKYPA AI Textbook Initiative",
    eyebrow: "Current initiative",
    summary:
      "A student-friendly AI literacy textbook designed for local distribution through schools and community partners.",
    description:
      "Learn about SKYPA Foundation's AI textbook initiative for children, including planned modules, distribution, and sponsorship opportunities.",
    image: "/images/skypa-ai-textbook.png",
    imageAlt: "AI literacy workbooks and classroom materials on a student desk.",
    cta: { label: "Sponsor textbooks", href: "/donate" },
    secondaryCta: { label: "Request updates", href: "/contact", variant: "secondary" },
    sections: [
      {
        type: "image",
        eyebrow: "Why a textbook",
        title: "Workshops spark curiosity. A textbook helps it last.",
        body: "The textbook gives students and teachers a durable reference for AI basics, safety, prompts, ethics, creative projects, and future careers.",
        image: "/images/skypa-ai-textbook.png",
        imageAlt: "Open AI literacy textbook pages with student activity materials.",
        cta: { label: "Help distribute copies", href: "/donate" },
      },
      {
        type: "cards",
        title: "Planned textbook modules",
        cards: [
          {
            title: "What AI is",
            body: "Friendly explanations of data, patterns, models, and predictions.",
            icon: "book",
          },
          {
            title: "Prompting and creativity",
            body: "Exercises for brainstorming, writing, design, and reflection.",
            icon: "lightbulb",
          },
          {
            title: "Safety and ethics",
            body: "Bias, privacy, plagiarism, misinformation, and human responsibility.",
            icon: "shield",
          },
          {
            title: "Projects for impact",
            body: "Activities that help students imagine AI for community problem solving.",
            icon: "map",
          },
        ],
      },
    ],
  },
  {
    slug: "schools",
    title: "Bring AI Literacy to Your School",
    eyebrow: "For schools",
    summary:
      "SKYPA partners with schools to run workshops, pilots, assemblies, and curriculum-supported AI literacy programs.",
    description:
      "School leaders can partner with SKYPA Foundation for AI literacy workshops, textbook pilots, and teacher support.",
    cta: { label: "Start a school inquiry", href: "/contact" },
    sections: [
      {
        type: "steps",
        title: "A simple partnership path",
        steps: [
          {
            title: "Discovery call",
            body: "Share grade levels, schedule constraints, goals, and current AI policies.",
          },
          {
            title: "Pilot design",
            body: "Choose a workshop, assembly, textbook pilot, or teacher training session.",
          },
          {
            title: "Delivery",
            body: "SKYPA prepares student-facing materials and coordinates volunteers where useful.",
          },
          {
            title: "Follow-up",
            body: "Schools receive survey prompts, next-step resources, and expansion options.",
          },
        ],
      },
    ],
  },
  {
    slug: "students",
    title: "AI Learning for Students",
    eyebrow: "For students",
    summary:
      "Explore AI basics, creativity, safety, and future careers through projects that are approachable and hands-on.",
    description:
      "Student-facing AI literacy resources from SKYPA Foundation for learning, creativity, responsible use, and future readiness.",
    cta: { label: "Browse resources", href: "/resources" },
    sections: [
      {
        type: "cards",
        title: "What students learn",
        cards: [
          {
            title: "Ask better questions",
            body: "Use prompts to explore ideas while staying clear about what AI can and cannot do.",
            icon: "message",
          },
          {
            title: "Create responsibly",
            body: "Brainstorm, draft, revise, and cite support without replacing your own thinking.",
            icon: "lightbulb",
          },
          {
            title: "Check the answer",
            body: "Practice fact-checking, bias spotting, source tracing, and healthy skepticism.",
            icon: "shield",
          },
        ],
      },
    ],
  },
  {
    slug: "parents",
    title: "A Parent Guide to AI Literacy",
    eyebrow: "For parents",
    summary:
      "Straightforward guidance for families navigating AI tools, school expectations, and online safety.",
    description:
      "Parent resources from SKYPA Foundation for supporting children with AI literacy, responsible tool use, and school conversations.",
    cta: { label: "Ask a question", href: "/contact" },
    sections: [
      {
        type: "faq",
        title: "Common parent questions",
        faqs: [
          {
            question: "Is AI literacy the same as teaching children to depend on AI?",
            answer:
              "No. SKYPA teaches students to understand and question AI, use it with judgment, and keep their own reasoning visible.",
          },
          {
            question: "What ages can participate?",
            answer:
              "Programs are adaptable, with different activities for elementary, middle, and high school students.",
          },
          {
            question: "Can parents request a session?",
            answer:
              "Yes. Parents can introduce SKYPA to a school, PTA, library, or community group through the contact form.",
          },
        ],
      },
    ],
  },
  {
    slug: "corporate-partners",
    title: "Corporate Partnerships for AI Education",
    eyebrow: "For companies",
    summary:
      "Companies can support textbook distribution, volunteer programs, school pilots, and equitable AI readiness.",
    description:
      "Corporate partnership opportunities with SKYPA Foundation, including sponsorships, volunteer days, school pilots, and textbook funding.",
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Corporate volunteers and educators supporting students in a workshop.",
    cta: { label: "Discuss sponsorship", href: "/contact" },
    sections: [
      {
        type: "cards",
        title: "Ways companies can help",
        cards: [
          {
            title: "Sponsor a classroom",
            body: "Fund workshops, printed textbooks, and student project materials.",
            icon: "heart",
          },
          {
            title: "Volunteer expertise",
            body: "Support safe, school-approved sessions as mentors and activity helpers.",
            icon: "users",
          },
          {
            title: "Scale a local pilot",
            body: "Help SKYPA expand from individual classrooms to district-level programming.",
            icon: "building",
          },
        ],
      },
    ],
  },
  {
    slug: "volunteer",
    title: "Volunteer with SKYPA",
    eyebrow: "Get involved",
    summary:
      "Help facilitate workshops, prepare materials, mentor students, translate resources, or support operations.",
    description:
      "Volunteer with SKYPA Foundation to support AI literacy workshops, content creation, school outreach, and operations.",
    cta: { label: "Apply to volunteer", href: "/contact" },
    sections: [
      {
        type: "cards",
        title: "Volunteer roles",
        cards: [
          {
            title: "Workshop facilitator",
            body: "Help students complete activities and feel comfortable asking questions.",
            icon: "students",
          },
          {
            title: "Curriculum reviewer",
            body: "Improve lesson clarity, examples, accessibility, and age fit.",
            icon: "book",
          },
          {
            title: "School outreach",
            body: "Introduce SKYPA to educators, parent groups, and local organizations.",
            icon: "school",
          },
        ],
      },
    ],
  },
  {
    slug: "donate",
    title: "Sponsor AI Literacy Access",
    eyebrow: "Support",
    summary:
      "SKYPA is currently collecting sponsorship and donation interest through forms while operations scale.",
    description:
      "Support SKYPA Foundation through sponsorship interest for AI literacy workshops, textbook distribution, and school partnerships.",
    cta: { label: "Submit sponsor interest", href: "/contact" },
    sections: [
      {
        type: "cards",
        title: "What support funds",
        cards: [
          {
            title: "Textbook printing",
            body: "Printed AI literacy materials for students who benefit from a physical resource.",
            icon: "book",
          },
          {
            title: "School pilots",
            body: "Workshop planning, supplies, educator coordination, and student activities.",
            icon: "school",
          },
          {
            title: "Program growth",
            body: "Content systems, volunteer training, evaluation, and partner outreach.",
            icon: "sparkles",
          },
        ],
      },
    ],
  },
  {
    slug: "team",
    title: "The Team Growing SKYPA",
    eyebrow: "People",
    summary:
      "SKYPA is founder-led and expanding through volunteers, educators, mentors, and partner organizations.",
    description:
      "Meet the growing team and volunteer network behind SKYPA Foundation's AI literacy programs.",
    cta: { label: "Join the team", href: "/volunteer" },
    sections: [
      {
        type: "text",
        title: "A growing foundation needs builders.",
        body: [
          "SKYPA is expanding from early AI literacy initiatives into a more formal nonprofit platform with programs, resources, partnerships, and a textbook initiative.",
          "As the foundation grows, the website and Sanity dashboard are designed so new team members can update content, publish stories, and manage outreach without touching code.",
        ],
      },
    ],
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    eyebrow: "FAQ",
    summary:
      "Answers for schools, families, sponsors, volunteers, and students interested in SKYPA Foundation.",
    description:
      "Frequently asked questions about SKYPA Foundation, AI literacy programs, textbook distribution, school partnerships, and volunteering.",
    cta: { label: "Contact SKYPA", href: "/contact" },
    sections: [
      {
        type: "faq",
        title: "Program questions",
        faqs: [
          {
            question: "Can a school request a custom program?",
            answer:
              "Yes. SKYPA can adapt workshop length, grade range, activities, and follow-up based on school needs.",
          },
          {
            question: "Is the AI textbook available yet?",
            answer:
              "It is currently an active initiative. The site is built to share updates, recruit sponsors, and coordinate distribution interest.",
          },
          {
            question: "Does SKYPA collect donations on the site?",
            answer:
              "The current version uses forms for sponsor and donor interest. Payment processing can be added later.",
          },
        ],
      },
    ],
  },
];

function sharedAudienceSections(page: SitePage): PageSection[] {
  return [
    {
      type: "cards",
      eyebrow: "Audience guide",
      title: `How different visitors can use ${page.title}.`,
      body:
        "SKYPA pages are written for school leaders, families, students, sponsors, and volunteers. Each audience can find a practical next step without needing technical background.",
      cards: [
        {
          title: "For schools and educators",
          body:
            "Use the page to understand the program fit, gather grade-level details, and decide whether a workshop, assembly, pilot, or textbook pathway makes sense.",
          href: "/schools",
          icon: "school",
        },
        {
          title: "For families and students",
          body:
            "Look for plain-language explanations, safety habits, and ways students can build confidence without feeling overwhelmed by new technology.",
          href: "/parents",
          icon: "students",
        },
        {
          title: "For sponsors and volunteers",
          body:
            "Use the content to see what kind of support is needed, what a local partnership could fund, and how your time or resources can translate into access.",
          href: "/get-involved",
          icon: "heart",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "Clear next steps",
      title: "Move from interest to a useful conversation.",
      body:
        "The goal is to make outreach easy even if you are not sure which program or role fits yet.",
      steps: [
        {
          title: "Name the audience",
          body:
            "Share whether you are thinking about elementary students, middle schoolers, high school students, families, teachers, or a community group.",
        },
        {
          title: "Share the setting",
          body:
            "Include school type, grade levels, location, timing, existing AI policies, and whether the need is a one-time session or a longer pilot.",
        },
        {
          title: "Choose the support path",
          body:
            "SKYPA can recommend workshops, textbook distribution, teacher support, parent nights, volunteer roles, or sponsorship options based on your goals.",
        },
        {
          title: "Plan a small start",
          body:
            "A good first step can be a discovery call, a single workshop, a classroom pilot, a sponsor-funded textbook batch, or a community information session.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Accessibility",
      title: "Common questions before reaching out.",
      faqs: [
        {
          question: "Do visitors need technical AI experience to understand the site?",
          answer:
            "No. SKYPA uses plain language and practical examples so educators, parents, students, sponsors, and volunteers can understand the work without technical training.",
        },
        {
          question: "Can SKYPA adapt content for different ages?",
          answer:
            "Yes. The same core ideas can be adapted for younger students, middle school students, high school students, families, or educators.",
        },
        {
          question: "What should someone include in a first message?",
          answer:
            "The most useful details are audience, grade level, organization name, timeline, location, goals, and whether you are interested in learning, hosting, volunteering, or sponsoring.",
        },
      ],
    },
  ];
}

const corePageSpecificSections: Record<string, PageSection[]> = {
  schools: [
    {
      type: "cards",
      eyebrow: "School-ready support",
      title: "What a school can expect from SKYPA.",
      cards: [
        {
          title: "Planning that respects schedules",
          body: "Programs can be shaped around assemblies, enrichment blocks, class visits, advisory periods, clubs, or pilot cohorts.",
          icon: "school",
        },
        {
          title: "Materials students can revisit",
          body: "Workshops can connect to handouts, reflection prompts, activities, or the textbook initiative so learning does not end when the session ends.",
          icon: "book",
        },
        {
          title: "Responsible AI habits",
          body: "Students practice checking outputs, protecting privacy, naming sources, and keeping their own thinking visible.",
          icon: "shield",
        },
      ],
    },
  ],
  students: [
    {
      type: "steps",
      eyebrow: "Student path",
      title: "A friendly way for students to build AI confidence.",
      steps: [
        {
          title: "Understand the basics",
          body: "Start with simple explanations of data, patterns, models, prompts, and why AI can be useful but imperfect.",
        },
        {
          title: "Practice with purpose",
          body: "Use AI to brainstorm, outline, compare ideas, and reflect while keeping your own voice and judgment at the center.",
        },
        {
          title: "Check before trusting",
          body: "Look for mistakes, bias, missing context, privacy risks, and places where a human source or teacher guidance matters.",
        },
        {
          title: "Create something useful",
          body: "Turn learning into a small project, presentation, story, community idea, or classroom discussion.",
        },
      ],
    },
  ],
  parents: [
    {
      type: "cards",
      eyebrow: "Family support",
      title: "What parents can talk about at home.",
      cards: [
        {
          title: "Ask what the tool did",
          body: "Invite children to explain whether AI helped brainstorm, draft, organize, summarize, or check an idea.",
          icon: "message",
        },
        {
          title: "Ask what stayed human",
          body: "The important learning question is what choices, reasoning, sources, and revisions came from the student.",
          icon: "students",
        },
        {
          title: "Set safe boundaries",
          body: "Discuss privacy, school rules, source checking, and when a trusted adult should be involved.",
          icon: "shield",
        },
      ],
    },
  ],
  textbook: [
    {
      type: "steps",
      eyebrow: "Textbook pathway",
      title: "How the textbook initiative moves from idea to access.",
      steps: [
        {
          title: "Design student-friendly modules",
          body: "Content is organized around AI basics, prompting, safety, ethics, creativity, careers, and practical projects.",
        },
        {
          title: "Pilot with educators",
          body: "Feedback from school partners helps refine clarity, reading level, activity flow, and classroom usefulness.",
        },
        {
          title: "Fund printing and distribution",
          body: "Sponsors can support batches of books, classroom sets, or community distribution through schools and partner organizations.",
        },
        {
          title: "Collect learning feedback",
          body: "Student and educator feedback can guide future editions and related workshop materials.",
        },
      ],
    },
  ],
  "corporate-partners": [
    {
      type: "steps",
      eyebrow: "Partnership model",
      title: "How companies can support responsibly.",
      steps: [
        {
          title: "Choose the access goal",
          body: "A company can fund a classroom, sponsor textbook copies, support a pilot cohort, or help bring AI literacy to a community setting.",
        },
        {
          title: "Define volunteer boundaries",
          body: "Volunteer involvement should be school-approved, student-safe, age-aware, and focused on mentorship or facilitation support.",
        },
        {
          title: "Support implementation",
          body: "Useful support can include materials, printing, educator coordination, workshop preparation, and follow-up resources.",
        },
        {
          title: "Share outcomes carefully",
          body: "Partnership stories should highlight student access and learning without overstating results or inventing impact claims.",
        },
      ],
    },
  ],
  volunteer: [
    {
      type: "faq",
      eyebrow: "Volunteer fit",
      title: "Questions volunteers often ask.",
      faqs: [
        {
          question: "Do volunteers need to be AI experts?",
          answer:
            "No. Some roles need technical comfort, but many helpful roles involve facilitation, editing, outreach, event support, translation, operations, or mentoring.",
        },
        {
          question: "Can students volunteer?",
          answer:
            "Student volunteers can often help with outreach, peer learning, content review, and events when roles are age-appropriate and supervised.",
        },
        {
          question: "What makes a strong volunteer application?",
          answer:
            "Share your skills, availability, location, school/community connections, languages, and whether you prefer direct student support or behind-the-scenes work.",
        },
      ],
    },
  ],
  donate: [
    {
      type: "faq",
      eyebrow: "Sponsor clarity",
      title: "What supporters should know.",
      faqs: [
        {
          question: "Can support be directed toward textbooks?",
          answer:
            "Yes. The textbook initiative is one of the clearest places for sponsors to fund tangible student access.",
        },
        {
          question: "Can a company sponsor a specific school or cohort?",
          answer:
            "A sponsor can express that interest, and SKYPA can discuss a responsible path based on school needs, timelines, and local fit.",
        },
        {
          question: "Is online payment processing active?",
          answer:
            "The current site collects sponsor and donor interest through forms. Payment processing can be added once operations and compliance needs are finalized.",
        },
      ],
    },
  ],
};

export const corePages: SitePage[] = corePagesBase.map((page) => ({
  ...page,
  sections: [
    ...page.sections,
    ...(corePageSpecificSections[page.slug] || []),
    ...sharedAudienceSections(page),
  ],
}));

const programBaseSections: PageSection[] = [
  {
    type: "cards",
    eyebrow: "Program experience",
    title: "What this program includes beyond a one-time presentation.",
    body:
      "SKYPA programs are designed to be approachable for students and manageable for schools, with clear preparation, delivery, and follow-up.",
    cards: [
      {
        title: "Age-aware explanations",
        body: "Concepts are translated into classroom language using examples students can recognize from school, media, creativity, and daily life.",
        icon: "students",
      },
      {
        title: "Hands-on practice",
        body: "Sessions can include prompts, group activities, reflection questions, safety scenarios, and short projects rather than passive lectures.",
        icon: "lightbulb",
      },
      {
        title: "School follow-through",
        body: "Educators can receive discussion prompts, activity ideas, and next-step options so the learning can continue after delivery.",
        icon: "school",
      },
    ],
  },
  {
    type: "steps",
    eyebrow: "Delivery plan",
    title: "How a program moves from request to classroom.",
    body:
      "The process is intentionally simple so a school, sponsor, or community group can start small and expand later.",
    steps: [
      {
        title: "Discovery",
        body: "Share audience, grade levels, timing, location, current AI questions, and the kind of support you want.",
      },
      {
        title: "Design",
        body: "SKYPA recommends a workshop, pilot, assembly, textbook connection, teacher session, or community format.",
      },
      {
        title: "Delivery",
        body: "Students engage with practical AI concepts, responsible use, guided activities, and opportunities to ask questions.",
      },
      {
        title: "Follow-up",
        body: "The partner can receive reflection prompts, resource links, survey ideas, and possible next steps for expansion.",
      },
    ],
  },
  {
    type: "faq",
    eyebrow: "Program questions",
    title: "What partners usually want to know first.",
    faqs: [
      {
        question: "Can a program be customized for different grade levels?",
        answer:
          "Yes. A younger group may focus on basic concepts and safe examples, while older students can go deeper into prompting, bias, careers, projects, and ethics.",
      },
      {
        question: "Can this connect to the textbook initiative?",
        answer:
          "Yes. Workshops can introduce concepts that later appear in printed or downloadable materials so students have something to revisit.",
      },
      {
        question: "What does SKYPA need from a host organization?",
        answer:
          "The most useful details are audience size, age range, schedule, room or technology setup, student needs, and any school policies around AI tools.",
      },
    ],
  },
  {
    type: "cta",
    title: "Ready to bring this program to students?",
    body: "Tell SKYPA about your school, organization, grade levels, and timeline. The team will follow up with the best-fit path.",
    ctas: [
      { label: "Start an inquiry", href: "/contact" },
      { label: "See all programs", href: "/programs", variant: "secondary" },
    ],
  },
];

export const programs: Program[] = [
  {
    slug: "ai-literacy",
    title: "AI Literacy Foundations",
    eyebrow: "Core program",
    summary:
      "A clear, hands-on introduction to how AI works, where students encounter it, and how to use it responsibly.",
    description:
      "A core SKYPA Foundation program teaching students AI basics, responsible use, prompt skills, and critical thinking.",
    image: "/images/skypa-hero-classroom.png",
    imageAlt: "Students learning with tablets and classroom materials.",
    audience: "Grades 5-10",
    length: "45-90 minute workshop or multi-session pilot",
    outcomes: [
      "Explain AI in age-appropriate language",
      "Identify common AI tools and limitations",
      "Practice responsible prompting and output checking",
    ],
    modules: ["What AI is", "Prompt practice", "Bias and privacy", "Creative project"],
    cta: { label: "Request this program", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "school-partnerships",
    title: "School Partnership Pilots",
    eyebrow: "Partnership program",
    summary:
      "Structured pilots for schools that want AI literacy support without building a full curriculum from scratch.",
    description:
      "Partner with SKYPA Foundation to run AI literacy pilots, assemblies, textbook distribution, and teacher support in schools.",
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Educators and students working together around a classroom activity.",
    audience: "School leaders, PTAs, departments, and enrichment teams",
    length: "Pilot blocks from 2 weeks to 1 semester",
    outcomes: [
      "Launch a school-ready AI literacy experience",
      "Gather student and educator feedback",
      "Create a repeatable plan for future sessions",
    ],
    modules: ["Needs assessment", "Pilot design", "Student sessions", "Outcome review"],
    cta: { label: "Plan a pilot", href: "/schools" },
    sections: programBaseSections,
  },
  {
    slug: "workshops",
    title: "AI Creativity Workshops",
    eyebrow: "Hands-on learning",
    summary:
      "Project-based sessions where students use AI tools for brainstorming, storytelling, design, and reflection.",
    description:
      "AI creativity workshops from SKYPA Foundation help students use AI for projects while preserving their own voice and judgment.",
    audience: "Grades 4-12",
    length: "60-120 minutes",
    outcomes: [
      "Use AI for brainstorming without copying",
      "Compare drafts and improve ideas",
      "Reflect on originality, attribution, and process",
    ],
    modules: ["Brainstorming", "Prompt iteration", "Revision", "Reflection"],
    cta: { label: "Request a workshop", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "textbook-distribution",
    title: "Textbook Distribution",
    eyebrow: "Current initiative",
    summary:
      "A distribution program for getting the SKYPA AI textbook into classrooms and student communities.",
    description:
      "Support or request SKYPA Foundation's AI textbook distribution initiative for schools and community learning programs.",
    image: "/images/skypa-ai-textbook.png",
    imageAlt: "AI literacy textbook materials on a classroom desk.",
    audience: "Schools, libraries, sponsors, and community centers",
    length: "Distribution plus optional orientation session",
    outcomes: [
      "Place student-friendly AI materials in local hands",
      "Support teachers with accessible lesson prompts",
      "Create a foundation for repeatable AI literacy learning",
    ],
    modules: ["Print sponsorship", "School coordination", "Student distribution", "Feedback collection"],
    cta: { label: "Sponsor copies", href: "/donate" },
    sections: programBaseSections,
  },
  {
    slug: "teacher-bootcamps",
    title: "Teacher AI Readiness Bootcamps",
    eyebrow: "Educator support",
    summary:
      "Practical training sessions for teachers who want to understand AI tools, policies, and classroom use cases.",
    description:
      "Teacher AI readiness sessions from SKYPA Foundation help educators discuss AI literacy, safety, and classroom activities.",
    audience: "Teachers, counselors, and enrichment coordinators",
    length: "Half-day session or two-part virtual series",
    outcomes: [
      "Understand AI basics and classroom risks",
      "Use sample activities safely",
      "Discuss policy and parent communication",
    ],
    modules: ["AI basics", "Classroom scenarios", "Policy discussion", "Activity toolkit"],
    cta: { label: "Train educators", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "ai-safety",
    title: "AI Safety and Digital Judgment",
    eyebrow: "Responsible use",
    summary:
      "A focused program on misinformation, bias, privacy, academic integrity, and healthy technology boundaries.",
    description:
      "AI safety education from SKYPA Foundation teaches students to question outputs, protect privacy, and use AI responsibly.",
    audience: "Grades 6-12",
    length: "45-75 minutes",
    outcomes: [
      "Identify high-risk AI use cases",
      "Practice fact-checking and source awareness",
      "Discuss privacy and personal data",
    ],
    modules: ["Misinformation", "Bias", "Privacy", "Academic integrity"],
    cta: { label: "Bring safety training", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "girls-in-ai",
    title: "Girls in AI Pathways",
    eyebrow: "Equity initiative",
    summary:
      "Confidence-building AI learning experiences designed to help girls see themselves as future builders and decision-makers.",
    description:
      "SKYPA Foundation's Girls in AI Pathways initiative supports inclusive AI literacy, mentorship, and future career imagination.",
    audience: "Girls and gender-expansive students in grades 5-12",
    length: "Workshop, club session, or mentorship series",
    outcomes: [
      "Increase confidence in technical conversations",
      "Highlight diverse AI role models",
      "Build a small creative or community project",
    ],
    modules: ["Role models", "AI basics", "Project lab", "Career mapping"],
    cta: { label: "Support this pathway", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "community-ai-labs",
    title: "Community AI Labs",
    eyebrow: "Community program",
    summary:
      "Pop-up learning sessions hosted with libraries, youth groups, nonprofits, and local partners.",
    description:
      "Community AI Labs from SKYPA Foundation bring accessible AI literacy beyond the school day through local partnerships.",
    audience: "Libraries, youth groups, nonprofits, and families",
    length: "Single-day pop-up or recurring club",
    outcomes: [
      "Reach students outside traditional classroom settings",
      "Connect families to practical AI guidance",
      "Build community interest in responsible technology",
    ],
    modules: ["Family intro", "Student lab", "Safety discussion", "Project showcase"],
    cta: { label: "Host a lab", href: "/contact" },
    sections: programBaseSections,
  },
  {
    slug: "summer-ai-academy",
    title: "Summer AI Academy",
    eyebrow: "Seasonal program",
    summary:
      "A deeper multi-day experience for students to learn AI concepts, build projects, and present what they create.",
    description:
      "SKYPA Foundation's Summer AI Academy is a multi-day AI literacy and project-building experience for students.",
    audience: "Middle and high school students",
    length: "3-5 day academy",
    outcomes: [
      "Build an AI-assisted project",
      "Practice ethical design decisions",
      "Present work to peers and community members",
    ],
    modules: ["Foundations", "Design sprint", "Build sessions", "Showcase"],
    cta: { label: "Explore summer options", href: "/contact" },
    sections: programBaseSections,
  },
];

export const stories: Story[] = [
  {
    slug: "making-ai-feel-less-mysterious",
    title: "Making AI Feel Less Mysterious",
    eyebrow: "Student learning",
    summary:
      "How a simple classroom activity can help students move from intimidation to curiosity.",
    body: [
      "The strongest AI literacy moments often begin with plain language. Students do not need to start with advanced math to understand that AI systems make predictions from patterns.",
      "SKYPA sessions are designed to make that first step approachable, then layer in judgment, safety, and creativity.",
      "A simple activity might ask students to compare a human answer and an AI-generated answer, identify what sounds confident, and then ask what still needs evidence. That turns a mysterious tool into something they can question.",
      "The goal is not to make every student a machine learning engineer. The goal is to help students build enough vocabulary, confidence, and skepticism to participate in school and life as AI becomes more common.",
    ],
    image: "/images/skypa-hero-classroom.png",
    imageAlt: "Students gathered around a classroom table.",
    tags: ["AI basics", "Workshops"],
  },
  {
    slug: "why-textbooks-still-matter",
    title: "Why Textbooks Still Matter in AI Education",
    eyebrow: "Textbook initiative",
    summary:
      "Printed materials can make AI literacy easier to revisit, share, and teach across unequal access contexts.",
    body: [
      "Not every student has the same device access, internet consistency, or adult support at home. A printed resource can travel with the student and make learning visible.",
      "The SKYPA textbook initiative is designed to support both classroom instruction and independent curiosity.",
      "A physical textbook also helps teachers and families see what students are learning. It can include vocabulary, reflection prompts, safe-use reminders, project ideas, and examples that do not require every student to be online at the same time.",
      "For sponsors, textbook access is one of the most concrete ways to support AI literacy. Funding can translate into classroom sets, student copies, or community distribution through schools and youth-serving organizations.",
    ],
    image: "/images/skypa-ai-textbook.png",
    imageAlt: "Open AI textbook pages and student supplies.",
    tags: ["Textbook", "Access"],
  },
  {
    slug: "building-trust-with-schools",
    title: "Building Trust with Schools",
    eyebrow: "Partnerships",
    summary:
      "School partnerships work best when programs respect schedules, policies, families, and teacher realities.",
    body: [
      "AI education can be exciting, but schools need clarity. SKYPA's partnership approach starts with listening to what the school already needs.",
      "That makes it easier to choose the right format, from a single workshop to a larger pilot.",
      "A school may need parent communication, teacher readiness, student safety guidance, or a program that fits into an existing enrichment block. Starting with those realities makes the work more usable.",
      "Trust also comes from being careful about claims. SKYPA should not promise magic outcomes; it should offer thoughtful programs, clear materials, honest feedback loops, and practical next steps.",
    ],
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Teachers and students collaborating in a workshop.",
    tags: ["Schools", "Partnerships"],
  },
];

export const resources: Resource[] = [
  {
    slug: "ai-literacy-glossary",
    title: "AI Literacy Glossary for Students",
    type: "Guide",
    summary:
      "Plain-language definitions for model, data, prompt, bias, hallucination, privacy, and more.",
    audience: "Students and families",
    minutes: "8 min",
    body: [
      "Use this glossary as a starter reference when introducing AI vocabulary to students.",
      "Each term should be paired with a classroom example so students can connect the idea to daily life.",
      "Useful terms include model, data, prompt, output, bias, hallucination, privacy, source, attribution, synthetic media, and human judgment.",
      "For younger students, definitions should stay concrete. For older students, each term can include a question: What could go wrong? What should I verify? What decision still belongs to me?",
      "Teachers and families can use the glossary as a shared language tool before discussing rules, homework expectations, or creative projects.",
    ],
  },
  {
    slug: "school-ai-readiness-checklist",
    title: "School AI Readiness Checklist",
    type: "Checklist",
    summary:
      "A planning checklist for school leaders considering AI literacy programming.",
    audience: "School leaders",
    minutes: "10 min",
    body: [
      "Before launching a program, identify grade levels, current policies, family communication needs, and teacher support.",
      "The checklist helps schools choose a pilot size that is useful without being overwhelming.",
      "A strong readiness conversation includes classroom goals, device access, supervision needs, acceptable tool use, privacy expectations, and how students will document their own thinking.",
      "Schools should also decide what success looks like. That may include student confidence, safer use habits, teacher comfort, parent understanding, or a repeatable plan for future sessions.",
      "Starting small is often wise. A single workshop or short pilot can reveal what students already know and what educators need before a broader rollout.",
    ],
  },
  {
    slug: "responsible-prompting-student-sheet",
    title: "Responsible Prompting Student Sheet",
    type: "Worksheet",
    summary:
      "A student-facing activity sheet for asking clearer prompts and checking AI outputs.",
    audience: "Students",
    minutes: "15 min",
    body: [
      "Good prompts include context, task, audience, and constraints.",
      "Students should always ask: What should I verify? What should remain my own thinking?",
      "A responsible prompting sheet can ask students to write their original idea first, then describe how AI helped, what changed, and what they checked afterward.",
      "Students should practice comparing outputs, asking follow-up questions, spotting generic answers, and improving prompts without copying blindly.",
      "The sheet should make process visible. That helps teachers see learning, not just a final product.",
    ],
  },
  {
    slug: "parent-conversation-guide",
    title: "Parent Conversation Guide",
    type: "Guide",
    summary:
      "Questions families can use to discuss AI use, homework, creativity, and safety.",
    audience: "Parents",
    minutes: "7 min",
    body: [
      "Families can ask children to explain what an AI tool helped with and what choices the student made independently.",
      "The goal is not fear. The goal is visible judgment.",
      "A useful conversation starts with curiosity: What did you ask? Why did you ask it that way? What did the tool get wrong? What did you change?",
      "Parents can also set simple boundaries around personal information, school rules, citations, images, and when a trusted adult should be involved.",
      "The best family guidance treats AI as something to understand together, not something to ignore until a problem appears.",
    ],
  },
  {
    slug: "ai-ethics-classroom-debate",
    title: "AI Ethics Classroom Debate",
    type: "Activity",
    summary:
      "A structured debate activity about bias, privacy, fairness, and accountability.",
    audience: "Teachers",
    minutes: "30 min",
    body: [
      "Students learn ethics by practicing tradeoff thinking, not memorizing abstract rules.",
      "This activity gives each group a role and asks them to defend a decision.",
      "Example roles might include a student, teacher, parent, school leader, tool designer, and community member. Each role notices different risks and benefits.",
      "Students can debate fairness, privacy, accuracy, access, and accountability using realistic classroom scenarios.",
      "The activity should end with reflection: What decision would you make, what evidence would you need, and who should be included in the conversation?",
    ],
  },
  {
    slug: "textbook-sponsorship-brief",
    title: "Textbook Sponsorship Brief",
    type: "Brief",
    summary:
      "A short overview for sponsors interested in funding printed AI literacy materials.",
    audience: "Sponsors",
    minutes: "5 min",
    body: [
      "Textbook sponsorship supports printing, distribution, activity design, and feedback collection.",
      "Sponsors can fund a classroom, school cohort, or broader local distribution effort.",
      "A useful sponsorship brief should explain the audience served, estimated number of students reached, printing or material needs, and how SKYPA will gather feedback.",
      "Sponsors may also support teacher guides, student worksheets, family conversation inserts, or community launch events connected to textbook distribution.",
      "Clear sponsorship language helps companies and donors understand exactly how their support turns into student access.",
    ],
  },
];

export const updates: Update[] = [
  {
    slug: "ai-textbook-distribution-roadmap",
    title: "AI Textbook Distribution Roadmap",
    category: "textbook",
    summary:
      "SKYPA is organizing school and sponsor conversations around the first student-friendly AI textbook distribution push.",
    publishedAt: "2026-07-08T12:00:00.000Z",
    body: [
      "The textbook initiative is designed to give students a practical reference they can revisit after a workshop ends.",
      "The next operating priority is coordinating interested schools, sponsors, and volunteers so printing and distribution can happen with clear local demand.",
      "The roadmap includes refining student-facing modules, gathering educator feedback, preparing sponsor briefs, and identifying the first distribution partners.",
      "Schools and community partners can help by sharing grade levels, expected student counts, preferred timelines, and whether they need a workshop alongside the books.",
      "Sponsors can help turn the roadmap into physical access by funding classroom sets, pilot cohorts, or wider community distribution.",
    ],
    image: "/images/skypa-ai-textbook.png",
    imageAlt: "AI literacy textbook materials prepared for classroom distribution.",
  },
  {
    slug: "school-partnerships-now-open",
    title: "School Partnership Conversations Are Open",
    category: "announcement",
    summary:
      "Schools can now use the website to request workshops, textbook pilots, teacher support, and parent-facing AI literacy sessions.",
    publishedAt: "2026-07-01T12:00:00.000Z",
    body: [
      "SKYPA is building a partner pipeline for school leaders, PTAs, teachers, and community organizations interested in practical AI literacy.",
      "The strongest fit is a school or youth-serving group that wants responsible, age-aware AI education without having to build everything from scratch.",
      "A first conversation can cover grade levels, schedule, existing AI policies, family communication needs, and whether the school wants a one-time workshop or a longer pilot.",
      "SKYPA can then recommend a format that fits the school: a classroom session, assembly, teacher support session, textbook pilot, or parent-facing introduction.",
      "The goal is to make AI literacy easier to start while still respecting student safety, educator workload, and school context.",
    ],
    image: "/images/skypa-partnership-workshop.png",
    imageAlt: "Students and educators collaborating during an AI literacy workshop.",
  },
  {
    slug: "volunteers-needed-for-ai-literacy-growth",
    title: "Volunteers Needed for AI Literacy Growth",
    category: "program",
    summary:
      "SKYPA is recruiting support for facilitation, outreach, curriculum review, school coordination, and operations.",
    publishedAt: "2026-06-24T12:00:00.000Z",
    body: [
      "As the foundation grows, volunteers can help turn early momentum into repeatable education programs.",
      "Helpful roles include classroom support, curriculum feedback, partner introductions, content operations, and event coordination.",
      "Volunteers do not all need to be technical experts. Strong support can come from educators, writers, organizers, students, designers, mentors, translators, and people with school or community relationships.",
      "The best volunteer match depends on availability, comfort with students, location, and whether someone prefers direct facilitation or behind-the-scenes work.",
      "A clear volunteer pipeline helps SKYPA grow without making the founder carry every task alone.",
    ],
    image: "/images/skypa-hero-classroom.png",
    imageAlt: "Students learning AI literacy in a bright classroom.",
  },
];

const initiativeTopics = [
  ["elementary-ai-basics", "Elementary AI Basics", "Elementary schools", "Age-aware AI introductions for younger students."],
  ["middle-school-ai-readiness", "Middle School AI Readiness", "Middle schools", "Hands-on activities for the grades where AI curiosity accelerates."],
  ["high-school-ai-careers", "High School AI Careers", "High schools", "Career and project pathways for older students."],
  ["library-ai-labs", "Library AI Labs", "Libraries", "Community sessions for students and families beyond the school day."],
  ["pta-ai-night", "PTA AI Night", "Parent groups", "A family-friendly introduction to AI, safety, and school expectations."],
  ["ai-and-homework", "AI and Homework", "Students and families", "Guidance on using AI support without hiding the learning process."],
  ["ai-and-creativity", "AI and Creativity", "Students", "Creative exercises that keep the student voice at the center."],
  ["ai-and-media-literacy", "AI and Media Literacy", "Schools", "Misinformation, synthetic media, source checking, and skepticism."],
  ["ai-career-exploration", "AI Career Exploration", "Students", "Activities connecting AI literacy to future roles and skills."],
  ["community-sponsor-program", "Community Sponsor Program", "Sponsors", "A repeatable sponsorship path for local AI literacy access."],
  ["volunteer-facilitator-training", "Volunteer Facilitator Training", "Volunteers", "Training helpers to support students safely and consistently."],
  ["student-ai-showcase", "Student AI Showcase", "Schools", "A public-facing celebration of responsible AI-assisted student projects."],
  ["teacher-resource-hub", "Teacher Resource Hub", "Educators", "Support materials for teachers introducing AI concepts."],
  ["ai-literacy-for-nonprofits", "AI Literacy for Nonprofits", "Community organizations", "Partner sessions for youth-serving nonprofits."],
  ["safe-ai-club-starter", "Safe AI Club Starter", "Student clubs", "A framework for student-led clubs with adult guidance."],
  ["rural-ai-access", "Rural AI Access", "Underserved communities", "Flexible programming for communities with fewer technology resources."],
  ["girls-ai-leadership", "Girls AI Leadership", "Girls in AI", "A confidence-building path for girls exploring AI and technology leadership."],
  ["ai-textbook-pilot-schools", "AI Textbook Pilot Schools", "Pilot schools", "A pilot path for schools using the SKYPA AI textbook."],
] as const;

export const initiatives: Initiative[] = initiativeTopics.map(
  ([slug, title, focus, summary]) => ({
    slug,
    title,
    focus,
    eyebrow: "Initiative",
    summary,
    description: `${summary} Learn how SKYPA Foundation can adapt AI literacy education for ${focus.toLowerCase()}.`,
    cta: { label: "Start a conversation", href: "/contact" },
    sections: [
      {
        type: "text",
        title: "A focused pathway inside the larger SKYPA model.",
        body: [
          "Each initiative is a focused way to bring AI literacy to a specific audience or setting. It can start as a small conversation, grow into a workshop or pilot, and eventually connect to resources, textbook distribution, or a repeatable program.",
          `For ${focus.toLowerCase()}, SKYPA can adapt language, examples, activities, and follow-up materials so the experience feels useful instead of generic.`,
        ],
      },
      {
        type: "cards",
        eyebrow: "Initiative fit",
        title: "Who this pathway is designed to help.",
        body:
          "The details can change by partner, but each initiative should make the audience, delivery format, and support needs easy to understand.",
        cards: [
          {
            title: `Best fit for ${focus.toLowerCase()}`,
            body:
              "This pathway is useful when a school, family group, sponsor, or community organization wants AI literacy support for a clearly defined audience.",
            icon: "students",
          },
          {
            title: "Flexible delivery",
            body:
              "The format can be a short workshop, school pilot, parent night, student club session, textbook connection, or community learning event.",
            icon: "school",
          },
          {
            title: "Practical outcomes",
            body:
              "Participants should leave with clearer language, safer habits, useful questions, and a better understanding of how AI affects learning and daily life.",
            icon: "check",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "How it can launch",
        title: "A simple path from idea to local action.",
        steps: [
          {
            title: "Clarify the need",
            body:
              "Identify who the initiative should serve, what questions they have about AI, and what a useful first session would accomplish.",
          },
          {
            title: "Choose the format",
            body:
              "Pick a realistic starting point: a classroom visit, assembly, club session, educator conversation, family night, or sponsor-supported pilot.",
          },
          {
            title: "Prepare materials",
            body:
              "SKYPA can align examples, vocabulary, activity prompts, safety guidance, and follow-up resources with the audience.",
          },
          {
            title: "Review and expand",
            body:
              "After the first session, feedback can shape future workshops, textbook materials, volunteer roles, and sponsor needs.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Planning questions",
        title: "Questions to answer before starting.",
        faqs: [
          {
            question: "How much time does this initiative need?",
            answer:
              "It can begin with a single conversation or workshop. A longer pilot can be planned once audience, schedule, and partner capacity are clear.",
          },
          {
            question: "Does every participant need a device?",
            answer:
              "No. Many AI literacy activities can use discussion, printed examples, group prompts, reflection questions, and teacher-led demonstrations.",
          },
          {
            question: "Can sponsors support this initiative?",
            answer:
              "Yes. Sponsors can help fund materials, textbook distribution, workshop preparation, educator support, or access for a specific community.",
          },
        ],
      },
      {
        type: "cta",
        title: "Want this initiative in your community?",
        body: "Share your school, organization, audience, and timeline. SKYPA can recommend the right workshop, pilot, or resource path.",
        ctas: [{ label: "Contact SKYPA", href: "/contact" }],
      },
    ],
  }),
);

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
  ...programs.map((program) => `/programs/${program.slug}`),
  "/stories",
  ...stories.map((story) => `/stories/${story.slug}`),
  "/updates",
  ...updates.map((update) => `/updates/${update.slug}`),
  "/resources",
  ...resources.map((resource) => `/resources/${resource.slug}`),
  "/initiatives",
  ...initiatives.map((initiative) => `/initiatives/${initiative.slug}`),
  "/partners",
  "/get-involved",
  "/contact",
];

export const chatbotKnowledge = [
  "SKYPA Foundation is an AI literacy nonprofit focused on practical AI education for children.",
  "The foundation partners with schools to run workshops, pilots, assemblies, textbook distribution, and teacher support.",
  "SKYPA is developing an AI textbook for local distribution to students through schools and community partners.",
  "The website uses forms for school partnerships, volunteers, corporate sponsors, donations or sponsorship interest, and general contact.",
  "The Updates page shares blog posts, events, announcements, textbook milestones, and program updates. Visitors can subscribe to receive email notifications.",
  "Current program areas include AI Literacy Foundations, School Partnership Pilots, AI Creativity Workshops, Textbook Distribution, Teacher Bootcamps, AI Safety, Girls in AI Pathways, Community AI Labs, and Summer AI Academy.",
  "Do not invent confirmed partner names, school names, donation tax details, or impact numbers beyond what the website states.",
];

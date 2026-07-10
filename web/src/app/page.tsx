import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  HandHeart,
  Lightbulb,
  School,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AiLearningLattice } from "@/components/ai-learning-lattice";
import { AnimatedStatValue } from "@/components/animated-stat-value";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { LocalizedText } from "@/components/localized-text";
import { MissionHeartbeat } from "@/components/mission-heartbeat";
import type { EditableCard } from "@/content/editable-site";
import { foundingPartners, siteConfig } from "@/content/site";
import { getSiteContent } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  building: Building2,
  heart: HandHeart,
  lightbulb: Lightbulb,
  school: School,
  sparkles: Sparkles,
  users: Users,
};

const hiHome = {
  hero: {
    kicker: "जिम्मेदार AI तक पहुंच का पुल",
    title: "SetuAI.org",
    body: "Summit Intelligent Systems, Shikivaa Foundation और SKYPA Foundation द्वारा बनाई गई एक नई स्वतंत्र AI साक्षरता पहल, जो स्कूलों और समुदायों तक व्यावहारिक AI शिक्षा पहुंचाती है।",
  },
  intro: {
    kicker: "यह काम क्यों जरूरी है",
    title: "AI अब बचपन का हिस्सा बन रहा है। SetuAI छात्रों को भरोसेमंद रास्ता देता है।",
    featuredStatement:
      "SetuAI, AI को एक उलझे हुए buzzword से बदलकर ऐसी चीज बनाता है जिसे छात्र समझ सकें, सवाल कर सकें और जिम्मेदारी से इस्तेमाल कर सकें।",
    body: [
      "SetuAI.org अपनी अलग पहचान वाली सहयोगी पहल है: Summit Intelligent Systems तकनीक और कार्यान्वयन लाता है, Shikivaa Foundation शिक्षा और सामुदायिक पहुंच लाता है, और SKYPA Foundation छात्र-केंद्रित AI साक्षरता कार्यक्रम लाता है।",
      "काम जानबूझकर व्यावहारिक रखा गया है: वर्कशॉप, शिक्षक सहायता, बढ़ती हुई पाठ्यपुस्तक, और स्कूलों, शिक्षा गैर-लाभकारी संस्थाओं व कंपनियों के साथ साझेदारी जो पहुंच को स्पॉन्सर करना चाहती हैं।",
    ],
  },
  stats: [
    {
      label: "योजनाबद्ध छात्र सीटें",
      detail: "वर्कशॉप, कक्षा पायलट और पाठ्यपुस्तक वितरण के लिए शुरुआती आउटरीच लक्ष्य।",
    },
    {
      label: "पार्टनर बातचीत",
      detail: "स्कूलों, शिक्षा गैर-लाभकारी संस्थाओं और पहुंच स्पॉन्सर करने वाली कंपनियों के लिए पाइपलाइन।",
    },
    {
      label: "सीखने के ट्रैक",
      detail: "AI basics और prompt skills से लेकर ethics, creativity, safety और future careers तक।",
    },
    {
      label: "पहुंच पर केंद्रित",
      detail: "हर कार्यक्रम साफ भाषा, स्कूल-तैयार सामग्री और जिम्मेदार इस्तेमाल पर केंद्रित है।",
    },
  ],
  founding: {
    kicker: "संस्थापक सहयोग",
    title: "तीन संगठन, एक साफ मिशन: AI literacy को पहुंच योग्य बनाना।",
    body: "SetuAI.org एक स्वतंत्र पहल है, लेकिन इसकी ताकत उन संस्थापक पार्टनरों से आती है जो शिक्षा, तकनीक और समुदाय को एक साथ लाते हैं।",
    partners: [
      {
        role: "तकनीक और कार्यान्वयन पार्टनर",
        body: "Summit AI systems, automation और web engineering अनुभव लाता है ताकि literacy goals भरोसेमंद digital tools और school-ready workflows में बदल सकें।",
      },
      {
        role: "शिक्षा और सामुदायिक पहुंच पार्टनर",
        body: "Shikivaa शिक्षा-first nonprofit दृष्टिकोण लाता है, जिससे पहल access, trust और learner-centered programs में grounded रहती है।",
      },
      {
        role: "AI literacy initiative partner",
        body: "SKYPA student-centered AI literacy, textbook initiative, school outreach और volunteer energy लाता है जिसने SetuAI की शुरुआत को गति दी।",
      },
    ],
  },
  learning: {
    title: "कक्षाओं के लिए बना learning model, hype cycles के लिए नहीं।",
    body: "हर SetuAI कार्यक्रम barrier कम करने के लिए बनाया गया है: साफ भाषा, adult-supported practice और ऐसी सामग्री जिसे स्कूल या youth-serving nonprofit सच में इस्तेमाल कर सके।",
    cards: [
      {
        title: "अपने आसपास के systems समझना",
        body: "छात्र prompts, training data, outputs, bias, privacy और human judgment के सरल mental models सीखते हैं।",
      },
      {
        title: "जिम्मेदार tools के साथ अभ्यास",
        body: "वर्कशॉप AI को supervised activities में बदलते हैं: answers compare करना, sources cite करना, prompts revise करना और reflect करना।",
      },
      {
        title: "सीख को घर तक ले जाना",
        body: "Textbook pages और classroom-ready materials छात्रों को session के बाद भी revisit करने के लिए durable resource देते हैं।",
      },
    ],
  },
  heartbeat: {
    kicker: "जीवित मिशन",
    title: "यह काम AI से बड़ा है। यह access, judgment और confidence के बारे में है।",
    body: "SetuAI का दिल केवल AI नहीं है। यह छात्रों को बेहतर सवाल पूछना सिखाने, शिक्षकों को practical support देने और communities को access-first choices देने के बारे में है।",
    pulses: [
      "Automation से पहले human judgment",
      "Technical jargon से पहले clear language",
      "Private advantage से पहले community access",
    ],
  },
  textbook: {
    kicker: "पाठ्यपुस्तक पहल",
    title: "एक ऐसी पाठ्यपुस्तक जिसे छात्र पकड़ सकें, दोबारा पढ़ सकें और साझा कर सकें।",
    body: "SetuAI बच्चों के लिए AI literacy textbook बना रहा है, जिसे स्कूलों, local partners और education nonprofits के माध्यम से बांटा जा सके। Sponsors printed access को संभव बना सकते हैं।",
    calloutLabel: "वर्तमान पहल",
    calloutTitle: "ऐसी textbook access जिसे छात्र अपने पास रख सकें।",
    bullets: [
      "छात्रों की भाषा में AI basics",
      "Prompt practice और creative projects",
      "Safety, bias, privacy और human judgment",
    ],
  },
  audience: {
    title: "हर तरह के पार्टनर के लिए साफ अगला कदम।",
    body: "SetuAI एक outreach engine भी है और education program भी। स्कूल, education nonprofits, sponsors, volunteers और families तुरंत समझ सकें कि वे कहां फिट होते हैं।",
    cards: [
      {
        title: "स्कूल",
        body: "SetuAI को assemblies, classroom workshops, textbook pilots और teacher support sessions में लाएं।",
      },
      {
        title: "शिक्षा गैर-लाभकारी संस्थाएं",
        body: "Community programs, resource distribution, parent sessions और youth learning events पर collaboration करें।",
      },
      {
        title: "कंपनियां",
        body: "Textbook access sponsor करें, school cohort fund करें या skilled volunteers को clear education goal के साथ organize करें।",
      },
      {
        title: "स्वयंसेवक",
        body: "Facilitation, curriculum feedback, outreach, logistics और student-friendly materials में मदद करें।",
      },
      {
        title: "परिवार",
        body: "समझें कि छात्र क्या सीख रहे हैं और घर पर safety, creativity और AI के बारे में कैसे बात करें।",
      },
    ],
  },
  process: {
    kicker: "स्कूल पार्टनरशिप मार्ग",
    title: "पहली बातचीत से classroom delivery तक।",
    body: "प्रक्रिया जानबूझकर सरल है ताकि schools, nonprofits और sponsors interest से pilot तक बिना confusion के पहुंच सकें।",
    steps: [
      "School leaders के साथ discovery call",
      "Workshop या textbook pilot design",
      "Guided activities के साथ student session",
      "Reflection, resources और next steps",
    ],
  },
  closingCta: {
    title: "ज्यादा छात्रों को भ्रम नहीं, आत्मविश्वास के साथ AI से मिलाएं।",
    body: "School partnership शुरू करें, textbook access sponsor करें या अगले SetuAI initiative में volunteer support लाएं।",
  },
};

function iconFor(card: EditableCard) {
  return iconMap[card.icon || ""] || Sparkles;
}

export async function generateMetadata() {
  const content = await getSiteContent();

  return createMetadata({
    title: content.seo.homeTitle,
    description: content.seo.homeDescription,
    path: "/",
    image: content.seo.homeImage,
  });
}

export default async function Home() {
  const content = await getSiteContent();
  const { global, home, visuals } = content;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: global.siteName || siteConfig.name,
          url: absoluteUrl("/"),
          description: global.description,
        }}
      />

      <section className="relative min-h-[min(820px,calc(88dvh-76px))] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-deep)] text-stone-50">
        <Image
          src={home.hero.image.src}
          alt={home.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="kinetic-image object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(28_25_23/0.96)_0%,rgb(28_25_23/0.78)_48%,rgb(28_25_23/0.18)_100%)]" />
        {visuals.hero3dEnabled ? (
          <div className="absolute inset-y-8 right-0 hidden w-[48vw] lg:block">
            <AiLearningLattice label={visuals.hero3dLabel} density={visuals.visualDensity} />
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,var(--background))]" />
        <div className="relative mx-auto grid min-h-[min(820px,calc(88dvh-76px))] w-full max-w-6xl grid-cols-12 items-center px-4 py-16 md:px-8">
          <div className={["col-span-12 max-w-[60ch] motion-reveal lg:col-span-7", visuals.motionEnabled ? "motion-rise" : ""].join(" ")} data-animate>
            <p className="section-kicker text-[var(--color-coral)]">
              <LocalizedText en={home.hero.kicker} hi={hiHome.hero.kicker} />
            </p>
            <h1 className="balance mt-6 max-w-4xl text-[clamp(3.25rem,8vw,5.8rem)] font-light leading-none tracking-tight">
              <LocalizedText en={home.hero.title} hi={hiHome.hero.title} />
            </h1>
            <p className="pretty mt-6 max-w-[58ch] text-lg leading-8 text-stone-50/78 sm:text-xl">
              <LocalizedText en={home.hero.body} hi={hiHome.hero.body} />
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink {...home.hero.primaryCta} />
              <ButtonLink
                {...home.hero.secondaryCta}
                className="border-stone-50/65 text-stone-50 hover:border-stone-50 hover:bg-stone-50 hover:text-[var(--color-ink)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] py-8">
        <div className="section-shell">
          <dl className="grid border border-[var(--color-line)] bg-[var(--background)] md:grid-cols-4">
            {home.stats.map((stat, index) => (
              <div key={stat.label} className="kinetic-card motion-reveal border-b border-[var(--color-line)] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0" data-animate data-tilt>
                <dt className="text-sm font-medium text-[var(--color-ink-soft)]">
                  <LocalizedText en={stat.label} hi={hiHome.stats[index]?.label} />
                </dt>
                <dd className="mt-2 text-4xl font-light tracking-tight text-[var(--color-deep)]">
                  <AnimatedStatValue value={stat.value} />
                </dd>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  <LocalizedText en={stat.detail} hi={hiHome.stats[index]?.detail} />
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="motion-reveal lg:sticky lg:top-28" data-animate>
            <p className="section-kicker">
              <LocalizedText en={home.intro.kicker} hi={hiHome.intro.kicker} />
            </p>
            <h2 className="balance mt-5 text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
              <LocalizedText en={home.intro.title} hi={hiHome.intro.title} />
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[var(--color-muted)]">
            <div className="kinetic-card motion-reveal soft-card p-6 sm:p-8" data-animate data-tilt>
              <p className="pretty text-xl font-normal leading-9 text-[var(--color-ink)]">
                <LocalizedText en={home.intro.featuredStatement} hi={hiHome.intro.featuredStatement} />
              </p>
            </div>
            {home.intro.body.map((paragraph, index) => (
              <p key={paragraph} className="motion-reveal" data-animate>
                <LocalizedText en={paragraph} hi={hiHome.intro.body[index]} />
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="section-shell">
          <div className="motion-reveal grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end" data-animate>
            <div>
              <p className="section-kicker">
                <LocalizedText en="Founding collaboration" hi={hiHome.founding.kicker} />
              </p>
              <h2 className="balance mt-5 text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
                <LocalizedText
                  en="Three organizations, one clear mission: make AI literacy reachable."
                  hi={hiHome.founding.title}
                />
              </h2>
            </div>
            <p className="pretty text-lg leading-8 text-[var(--color-muted)]">
              <LocalizedText
                en="SetuAI.org is an independent initiative, but its strength comes from founding partners that bring education, technology, and community access into the same room."
                hi={hiHome.founding.body}
              />
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[var(--color-line)] lg:grid-cols-3">
            {foundingPartners.map((partner, index) => {
              const external = partner.href.startsWith("http");
              const contentNode = (
                <>
                  <span className="flex items-start justify-between gap-5">
                    <span>
                      <span className="block text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-coral)]">
                        <LocalizedText en={partner.role} hi={hiHome.founding.partners[index]?.role} />
                      </span>
                      <span className="mt-4 block text-2xl font-normal leading-8 tracking-tight text-[var(--color-ink)]">
                        {partner.name}
                      </span>
                    </span>
                    {external ? <ExternalLink aria-hidden="true" size={18} className="mt-1 text-[var(--color-muted)]" /> : <ArrowRight aria-hidden="true" size={18} className="mt-1 text-[var(--color-muted)]" />}
                  </span>
                  <span className="pretty mt-6 block text-base leading-7 text-[var(--color-muted)]">
                    <LocalizedText en={partner.body} hi={hiHome.founding.partners[index]?.body} />
                  </span>
                </>
              );

              if (external) {
                return (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="kinetic-card motion-reveal bg-[var(--background)] p-7 transition-colors hover:bg-white sm:p-8"
                    data-animate
                    data-tilt
                  >
                    {contentNode}
                  </a>
                );
              }

              return (
                <Link
                  key={partner.name}
                  href={partner.href}
                  className="kinetic-card motion-reveal bg-[var(--background)] p-7 transition-colors hover:bg-white sm:p-8"
                  data-animate
                  data-tilt
                >
                  {contentNode}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-deep)] py-20 text-stone-50 sm:py-24">
        <Image
          src={home.heartbeat.image.src}
          alt=""
          fill
          sizes="100vw"
          className="kinetic-image object-cover object-center opacity-[0.34] saturate-90"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(28_25_23/0.97),rgb(28_25_23/0.88)_46%,rgb(28_25_23/0.58))]" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className={["motion-reveal", visuals.motionEnabled ? "motion-rise" : ""].join(" ")} data-animate>
            <p className="section-kicker text-[var(--color-coral)]">
              <LocalizedText en={home.heartbeat.kicker} hi={hiHome.heartbeat.kicker} />
            </p>
            <h2 className="balance mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              <LocalizedText en={home.heartbeat.title} hi={hiHome.heartbeat.title} />
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-stone-50/78">
              <LocalizedText en={home.heartbeat.body} hi={hiHome.heartbeat.body} />
            </p>
            <div className="mt-8 grid gap-3">
              {home.heartbeat.pulses.map((pulse, index) => (
                <div
                  key={pulse}
                  className="kinetic-card mission-pulse-line min-w-0 border border-stone-50/15 bg-stone-50/[0.075] py-4 pl-7 pr-4"
                  data-tilt
                >
                  <span className="text-xs font-medium text-[var(--color-coral)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 break-words text-sm font-medium leading-6 text-stone-50/90 sm:text-base sm:leading-7">
                    <LocalizedText en={pulse} hi={hiHome.heartbeat.pulses[index]} />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="motion-reveal relative min-h-[25rem] min-w-0 lg:min-h-[34rem]" data-animate>
            {visuals.heartbeat3dEnabled ? (
              <MissionHeartbeat
                label={visuals.heartbeat3dLabel}
                density={visuals.visualDensity}
                enabled={visuals.motionEnabled}
              />
            ) : (
              <Image
                src={home.heartbeat.image.src}
                alt={home.heartbeat.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-contain"
              />
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell">
          <div className="motion-reveal max-w-3xl" data-animate>
            <h2 className="balance text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
              <LocalizedText en={home.learning.title} hi={hiHome.learning.title} />
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-muted)]">
              <LocalizedText en={home.learning.body} hi={hiHome.learning.body} />
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-[var(--color-line)] lg:grid-cols-3">
            {home.learning.cards.map((item, index) => {
              const Icon = iconFor(item);

              return (
              <article key={item.title} className="kinetic-card motion-reveal bg-[var(--background)] p-7 sm:p-8" data-animate data-tilt>
                <Icon aria-hidden="true" className="text-[var(--color-coral)]" size={30} strokeWidth={2.1} />
                <h3 className="mt-8 text-2xl font-normal leading-8 tracking-tight text-[var(--color-ink)]">
                  <LocalizedText en={item.title} hi={hiHome.learning.cards[index]?.title} />
                </h3>
                <p className="pretty mt-4 text-base leading-7 text-[var(--color-muted)]">
                  <LocalizedText en={item.body} hi={hiHome.learning.cards[index]?.body} />
                </p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-deep)] text-stone-50">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="kinetic-card motion-reveal relative min-h-[360px] overflow-hidden sm:min-h-[500px]" data-animate data-tilt>
            <Image
              src={home.textbook.image.src}
              alt={home.textbook.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="kinetic-image object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 border border-[var(--color-line)] bg-[var(--background)] p-5 text-[var(--color-ink)] sm:inset-x-8 sm:bottom-8">
              <p className="text-sm font-medium text-[var(--color-muted)]">
                <LocalizedText en={home.textbook.calloutLabel} hi={hiHome.textbook.calloutLabel} />
              </p>
              <p className="mt-1 text-xl font-normal tracking-tight">
                <LocalizedText en={home.textbook.calloutTitle} hi={hiHome.textbook.calloutTitle} />
              </p>
            </div>
          </div>
          <div className="motion-reveal flex flex-col justify-center" data-animate>
            <p className="section-kicker text-[var(--color-coral)]">
              <LocalizedText en={home.textbook.kicker} hi={hiHome.textbook.kicker} />
            </p>
            <h2 className="balance mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              <LocalizedText en={home.textbook.title} hi={hiHome.textbook.title} />
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-stone-50/76">
              <LocalizedText en={home.textbook.body} hi={hiHome.textbook.body} />
            </p>
            <div className="mt-8 grid gap-3">
              {home.textbook.bullets.map((item, index) => (
                <div key={item} className="motion-reveal flex items-start gap-3" data-animate>
                  <CheckCircle2 aria-hidden="true" className="mt-1 text-[var(--color-coral)]" size={20} />
                  <span className="text-base font-medium text-stone-50/88">
                    <LocalizedText en={item} hi={hiHome.textbook.bullets[index]} />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink {...home.textbook.primaryCta} />
              <ButtonLink
                {...home.textbook.secondaryCta}
                className="border-stone-50/65 text-stone-50 hover:border-stone-50 hover:bg-stone-50 hover:text-[var(--color-ink)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="section-shell">
          <div className="motion-reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end" data-animate>
            <div>
              <h2 className="balance text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
                <LocalizedText en={home.audience.title} hi={hiHome.audience.title} />
              </h2>
            </div>
            <p className="pretty text-lg leading-8 text-[var(--color-muted)]">
              <LocalizedText en={home.audience.body} hi={hiHome.audience.body} />
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {home.audience.cards.map((item, index) => {
              const Icon = iconFor(item);

              return (
              <Link
                href={item.href || "/contact"}
                key={item.title}
                className={[
                  "kinetic-card motion-reveal group flex min-h-[230px] flex-col border border-[var(--color-line)] p-6 transition-transform duration-150",
                  index === 0
                    ? "bg-[var(--color-deep)] text-stone-50 lg:col-span-2 lg:row-span-2 lg:min-h-[430px] lg:p-8"
                    : "bg-[var(--background)] text-[var(--color-ink)]",
                ].join(" ")}
                data-animate
                data-tilt
              >
                <Icon
                  aria-hidden="true"
                  className="text-[var(--color-coral)]"
                  size={index === 0 ? 36 : 28}
                  strokeWidth={2.1}
                />
                <h3 className="mt-6 text-2xl font-normal tracking-tight">
                  <LocalizedText en={item.title} hi={hiHome.audience.cards[index]?.title} />
                </h3>
                <p className={["pretty mt-4 flex-1 text-base leading-7", index === 0 ? "text-stone-50/76" : "text-[var(--color-muted)]"].join(" ")}>
                  <LocalizedText en={item.body} hi={hiHome.audience.cards[index]?.body} />
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-coral)]">
                  <LocalizedText en="Learn more" />
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="motion-reveal" data-animate>
            <p className="section-kicker">
              <LocalizedText en={home.process.kicker} hi={hiHome.process.kicker} />
            </p>
            <h2 className="balance mt-5 text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
              <LocalizedText en={home.process.title} hi={hiHome.process.title} />
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-muted)]">
              <LocalizedText en={home.process.body} hi={hiHome.process.body} />
            </p>
          </div>
          <ol className="grid gap-4">
            {home.process.steps.map((step, index) => (
              <li key={step} className="kinetic-card motion-reveal soft-card grid grid-cols-[auto_1fr] items-center gap-5 p-5" data-animate data-tilt>
                <span className="grid h-12 w-12 place-items-center border border-[var(--color-coral)] bg-[var(--color-teal-soft)] text-sm font-medium text-[var(--color-deep)]">
                  {index + 1}
                </span>
                <span className="text-lg font-normal tracking-tight text-[var(--color-ink)]">
                  <LocalizedText en={step} hi={hiHome.process.steps[index]} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--color-coral)] py-16 text-white">
        <div className="motion-reveal section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between" data-animate>
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              <LocalizedText en={home.closingCta.title} hi={hiHome.closingCta.title} />
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-white/86">
              <LocalizedText en={home.closingCta.body} hi={hiHome.closingCta.body} />
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink {...home.closingCta.primaryCta} />
            <ButtonLink {...home.closingCta.secondaryCta} />
          </div>
        </div>
      </section>
    </>
  );
}

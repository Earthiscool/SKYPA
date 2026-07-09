import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { PageSections } from "@/components/page-sections";
import { getInitiative, initiatives } from "@/content/site";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return initiatives.map((initiative) => ({ slug: initiative.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const initiative = getInitiative(slug);

  if (!initiative) return {};

  return createMetadata({
    title: initiative.title,
    description: initiative.description,
    path: `/initiatives/${initiative.slug}`,
  });
}

export default async function InitiativePage({ params }: Props) {
  const { slug } = await params;
  const initiative = getInitiative(slug);

  if (!initiative) notFound();

  return (
    <>
      <PageHero page={initiative} />
      <PageSections sections={initiative.sections} />
    </>
  );
}

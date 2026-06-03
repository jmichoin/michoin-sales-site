import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { OffersSection } from "@/components/sections/OffersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { locales } from "@/lib/content";

export const metadata: Metadata = {
  title: locales.cs.meta.title,
  description: locales.cs.meta.description,
  alternates: {
    canonical: "/cs",
    languages: {
      en: "/",
      cs: "/cs",
    },
  },
  openGraph: {
    title: locales.cs.meta.title,
    description: locales.cs.meta.description,
    url: "/cs",
  },
};

export default function CzechHome() {
  const content = locales.cs;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader content={content} />
      <div className="flex w-full flex-col gap-[130px] px-5 pb-[140px] md:gap-[248px] md:px-[30px] md:pb-[160px]">
        <Hero content={content.hero} />
        <WorkSection content={content.work} />
        <ApproachSection content={content.approach} />
        <ProcessSection content={content.process} />
        <TrustSection content={content.trust} />
        <OffersSection content={content.offers} />
        <ContactSection content={content.contact} />
      </div>
    </main>
  );
}

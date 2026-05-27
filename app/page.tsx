import { SiteHeader } from "@/components/layout/SiteHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { OffersSection } from "@/components/sections/OffersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <div className="flex w-full flex-col gap-[130px] px-5 pb-[140px] md:gap-[248px] md:px-[30px] md:pb-[160px]">
        <Hero />
        <WorkSection />
        <ApproachSection />
        <ProcessSection />
        <TrustSection />
        <OffersSection />
        <ContactSection />
      </div>
    </main>
  );
}

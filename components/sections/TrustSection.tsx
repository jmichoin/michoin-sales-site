import { assets, trustItems } from "@/lib/content";
import { HighlightedHeading } from "@/components/ui/HighlightedHeading";

export function TrustSection() {
  return (
    <section className="section-rule scroll-mt-28 space-y-[60px] pt-5" id="about">
      <div className="space-y-5">
        <HighlightedHeading>Why clients work with me</HighlightedHeading>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,696px)_515px] md:justify-between">
          <ul className="text-[16px] font-normal leading-[1.5] md:text-[30px]">
            {trustItems.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <div className="relative h-[430px] overflow-hidden md:h-[565px]">
            <img alt="Portrait of Jan Michoin" className="h-full w-full object-cover" src={assets.profile} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-6 opacity-65 mix-blend-luminosity md:grid-cols-4 md:gap-x-8 md:gap-y-8 lg:grid-cols-8">
        {assets.logos.map((logo) => (
          <div className="flex h-12 items-center justify-center md:h-14" key={logo.src}>
            <img
              alt={logo.alt}
              decoding="async"
              loading="lazy"
              className={`w-auto object-contain ${logo.className}`}
              src={logo.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

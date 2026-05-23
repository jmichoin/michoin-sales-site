import { ArrowButton } from "@/components/ui/ArrowButton";
import { AutoCarousel } from "@/components/ui/AutoCarousel";
import { HighlightedHeading } from "@/components/ui/HighlightedHeading";
import { assets, serviceOffers } from "@/lib/content";

function OfferGlyph({ variant }: { variant: "product" | "brand" }) {
  const icon = variant === "product" ? assets.offerIcons.ux : assets.offerIcons.brand;
  return (
    <div aria-hidden="true" className="relative w-full max-w-full">
      <picture>
        <source media="(min-width: 768px)" srcSet={icon.desktop} />
        <img alt="" className="h-auto w-full max-w-[220px] object-contain md:max-w-[385px]" decoding="async" loading="lazy" src={icon.mobile} />
      </picture>
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="scroll-mt-28 space-y-[88px] md:space-y-[72px]" id="work">
      <div className="section-rule pt-5">
        <HighlightedHeading>You will get</HighlightedHeading>
        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-[117px]">
          {serviceOffers.map((offer, index) => (
            <article className="max-w-[618px]" key={offer.title}>
              <OfferGlyph variant={index === 0 ? "product" : "brand"} />
              <div className="mt-6 space-y-5">
                <h3 className="text-[28px] font-medium leading-[1.3] md:text-[30px]">{offer.title}</h3>
                <ul className="list-disc pl-5 text-[14px] uppercase leading-[2.2] tracking-[0.08em] text-[#1e1e1e]">
                  {offer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ArrowButton href={offer.href}>
                  {offer.cta}
                </ArrowButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="-mx-5 md:-mx-[30px]" aria-label="Selected work preview">
        <AutoCarousel images={assets.work} />
      </div>
    </section>
  );
}

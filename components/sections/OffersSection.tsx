import { SectionBlock } from "@/components/ui/SectionBlock";
import { offers } from "@/lib/content";

export function OffersSection() {
  return (
    <SectionBlock id="offers" title="Offers">
      <div className="grid gap-10 md:grid-cols-3 md:gap-[78px]">
        {offers.map((offer) => (
          <article className="space-y-5" key={offer.title}>
            <h3 className="text-[28px] font-medium leading-[1.3] md:text-[30px]">{offer.title}</h3>
            <div className="space-y-0 text-[16px] font-medium leading-[1.5] text-[#1e1e1e]">
              <p className="font-bold">{offer.duration}</p>
              {offer.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
              <p className="pt-6 font-bold">Ideal for</p>
              <p>{offer.idealFor}</p>
            </div>
            <p className="text-[14px] uppercase leading-[1.5] tracking-[0.08em] text-[var(--foreground)]">
              <span className="inline bg-[var(--accent)] px-1 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                {offer.price}
              </span>
            </p>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

import { HighlightedHeading } from "@/components/ui/HighlightedHeading";
import { SectionBlock } from "@/components/ui/SectionBlock";
import { issues } from "@/lib/content";

export function ApproachSection() {
  return (
    <div className="space-y-[130px]" id="approach">
      <SectionBlock title="Why companies struggle with design collaboration">
        <div className="grid gap-10 md:grid-cols-3 md:gap-[78px]">
          {issues.map((issue) => (
            <article className="space-y-5" key={issue.title}>
              <h3 className="text-[28px] font-medium leading-[1.3] md:text-[30px]">{issue.title}</h3>
              <p className="max-w-[321px] text-[16px] leading-[1.5] text-[#1e1e1e]">{issue.body}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <section className="section-rule pt-5">
        <HighlightedHeading>One senior partner across strategy, UX and visual execution.</HighlightedHeading>
        <div className="mt-3 flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="text-[26px] font-normal leading-[1.5] md:text-[30px] md:leading-[2.5]">
            <p>— Less overhead</p>
            <p>— Faster iterations</p>
            <p>— Better consistency</p>
            <p>— Stronger outcomes</p>
          </div>
          <p className="text-left text-[14px] uppercase leading-[2.2] tracking-[0.08em] text-[var(--muted)] md:h-[300px] md:w-[124px] md:text-right">
            understand
            <br />
            ↓
            <br />
            define
            <br />
            ↓
            <br />
            design
            <br />
            ↓
            <br />
            test & refine
            <br />
            ↓
            <br />
            ship
          </p>
        </div>
      </section>
    </div>
  );
}

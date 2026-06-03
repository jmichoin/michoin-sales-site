import { HighlightedHeading } from "@/components/ui/HighlightedHeading";
import { SectionBlock } from "@/components/ui/SectionBlock";

type ApproachContent = {
  struggleTitle: string;
  issues: readonly {
    title: string;
    body: string;
  }[];
  partnerTitle: string;
  outcomes: readonly string[];
  flow: readonly string[];
};

export function ApproachSection({ content }: { content: ApproachContent }) {
  return (
    <div className="space-y-[130px]" id="approach">
      <SectionBlock title={content.struggleTitle}>
        <div className="grid gap-10 md:grid-cols-3 md:gap-[78px]">
          {content.issues.map((issue) => (
            <article className="space-y-5" key={issue.title}>
              <h3 className="text-[28px] font-medium leading-[1.3] md:text-[30px]">{issue.title}</h3>
              <p className="max-w-[321px] text-[16px] leading-[1.5] text-[#1e1e1e]">{issue.body}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <section className="section-rule pt-5">
        <HighlightedHeading>{content.partnerTitle}</HighlightedHeading>
        <div className="mt-3 flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="text-[26px] font-normal leading-[1.5] md:text-[30px] md:leading-[2.5]">
            {content.outcomes.map((outcome) => (
              <p key={outcome}>— {outcome}</p>
            ))}
          </div>
          <p className="text-left text-[14px] uppercase leading-[2.2] tracking-[0.08em] text-[var(--muted)] md:h-[300px] md:w-[124px] md:text-right">
            {content.flow.map((step, index) => (
              <span key={step}>
                {step}
                {index < content.flow.length - 1 ? (
                  <>
                    <br />
                    ↓
                    <br />
                  </>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}

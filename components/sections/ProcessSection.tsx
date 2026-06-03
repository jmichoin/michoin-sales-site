import { SectionBlock } from "@/components/ui/SectionBlock";

type ProcessContent = {
  title: string;
  workWithTitle: string;
  workWith: readonly string[];
  availabilityTitle: string;
  availability: readonly string[];
};

export function ProcessSection({ content }: { content: ProcessContent }) {
  return (
    <SectionBlock title={content.title}>
      <div className="grid gap-12 md:grid-cols-2 md:gap-[159px]">
        <DetailList items={content.workWith} title={content.workWithTitle} />
        <DetailList items={content.availability} title={content.availabilityTitle} />
      </div>
    </SectionBlock>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="space-y-5">
      <h3 className="text-[28px] font-medium leading-[1.3] md:text-[30px]">{title}</h3>
      <ul className="list-disc pl-5 text-[14px] uppercase leading-[2.2] tracking-[0.08em] text-[#1e1e1e]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

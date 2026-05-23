import { SectionBlock } from "@/components/ui/SectionBlock";

const workWith = [
  "SaaS & digital products",
  "Technology companies",
  "Design-driven brands",
  "Cultural & creative projects",
  "Growing teams needing senior design support",
];

const availability = [
  "Focused design sprints",
  "Project-based collaborations",
  "Long-term product support",
  "Senior freelance partnerships",
  "Remote design direction",
];

export function ProcessSection() {
  return (
    <SectionBlock title="How I work">
      <div className="grid gap-12 md:grid-cols-2 md:gap-[159px]">
        <DetailList items={workWith} title="I typically work with" />
        <DetailList items={availability} title="Available for" />
      </div>
    </SectionBlock>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
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

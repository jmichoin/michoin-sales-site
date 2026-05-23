import { HighlightedHeading } from "@/components/ui/HighlightedHeading";

type SectionBlockProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionBlock({ id, title, children, className = "" }: SectionBlockProps) {
  return (
    <section id={id} className={`section-rule scroll-mt-28 pt-5 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[minmax(220px,284px)_1fr] lg:gap-[162px]">
        <HighlightedHeading className="max-w-[534px]">{title}</HighlightedHeading>
        {children}
      </div>
    </section>
  );
}

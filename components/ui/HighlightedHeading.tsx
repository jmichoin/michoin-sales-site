type HighlightedHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function HighlightedHeading({ children, className = "" }: HighlightedHeadingProps) {
  return (
    <h2 className={`max-w-[1056px] text-[32px] font-medium leading-[1.35] text-[var(--foreground)] md:text-[40px] md:leading-[1.4] ${className}`}>
      <span className="inline bg-[var(--accent)] px-2 py-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
        {children}
      </span>
    </h2>
  );
}

type ArrowButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

export function ArrowButton({
  children,
  href,
  type = "button",
  className = "",
}: ArrowButtonProps) {
  const classes = `inline-flex h-11 items-center justify-center gap-2 rounded-[9px] bg-[var(--accent)] px-3 text-[14px] font-medium leading-none whitespace-nowrap text-[var(--foreground)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:h-[60px] md:gap-3 md:px-5 md:text-[24px] ${className}`;
  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <span aria-hidden="true" className="relative h-px w-5 shrink-0 bg-[var(--foreground)] md:w-[30px]">
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-[var(--foreground)] md:h-2 md:w-2" />
      </span>
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
}

import { ArrowButton } from "@/components/ui/ArrowButton";

export function StickyCta() {
  return (
    <aside className="sticky bottom-0 z-30 flex flex-col gap-3 bg-black px-4 py-3 text-[var(--background)] md:flex-row md:items-center md:justify-between md:px-[24px] md:py-3">
      <p className="max-w-[760px] text-[14px] font-medium leading-[1.4] md:text-[18px] md:leading-[1.4]">
        Building something complex that needs both strategy and strong execution?
      </p>
      <ArrowButton className="!h-9 self-start !gap-2 !px-3 !text-[12px] !font-medium md:!h-11 md:!gap-3 md:!px-4 md:!text-[16px]" href="#contact">
        Discuss your project
      </ArrowButton>
    </aside>
  );
}

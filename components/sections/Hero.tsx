import { assets } from "@/lib/content";

export function Hero() {
  return (
    <section className="pt-28 md:pt-[350px]" id="top">
      <div className="space-y-5">
        <h1 className="text-[38px] font-medium leading-[1.15] text-[var(--foreground)] md:text-[60px] md:leading-[1.4]">
          Bridging strategy, UX and visual design
        </h1>
        <div className="grid overflow-hidden md:hidden">
          {assets.heroMobile.map((src, index) => (
            <div className="relative h-[330px] overflow-hidden" key={src}>
              <img
                alt=""
                className="h-full w-full object-cover"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                src={src}
              />
            </div>
          ))}
        </div>
        <div className="hidden overflow-hidden md:grid md:grid-cols-3">
          {assets.heroDesktop.map((src, index) => (
            <div className="relative h-[525px] overflow-hidden" key={src}>
              <img
                alt=""
                className={`h-full w-full object-cover ${
                  index === 0 ? "object-[36%_50%]" : index === 1 ? "object-[50%_42%]" : "object-[62%_50%]"
                }`}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                src={src}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section-rule mt-5 flex flex-col gap-8 pt-5 md:flex-row md:items-start md:justify-between">
        <p className="max-w-[739px] text-[26px] font-medium leading-[1.35] md:text-[30px] md:leading-[1.5]">
          Branding, UX/UI and digital products <br />
          - without agency overhead or unnecessary complexity.
        </p>
        <ul className="space-y-7 text-left text-[14px] uppercase leading-[1.5] tracking-[0.08em] text-[var(--muted)] md:text-right">
          <li>UX/UI</li>
          <li>Brand Strategy</li>
          <li>Digital Products</li>
          <li>Visual Systems</li>
        </ul>
      </div>
    </section>
  );
}

import type { PageContent } from "@/lib/content";

const headerBehaviorScript = `
(() => {
  const header = document.getElementById('site-header');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let hasInitialized = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;

    if (!hasInitialized) {
      header.classList.remove('header-hidden');
      lastScrollY = currentScrollY;
      hasInitialized = true;
      return;
    }

    const scrollDelta = currentScrollY - lastScrollY;

    if (currentScrollY <= 24 || scrollDelta < -6) {
      header.classList.remove('header-hidden');
    } else if (scrollDelta > 6) {
      header.classList.add('header-hidden');
    }

    lastScrollY = currentScrollY;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateHeader();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateHeader();

  if (mobileMenu instanceof HTMLDetailsElement) {
    const closeMobileMenu = () => {
      mobileMenu.open = false;
    };

    mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('hashchange', closeMobileMenu);
  }
})();
`;

export function SiteHeader({ content }: { content: PageContent }) {
  return (
    <>
      <header
        className="site-header sticky top-0 z-40 bg-[var(--background)]/92 px-5 py-3 backdrop-blur transition-transform duration-300 md:px-[30px] md:py-[10px]"
        id="site-header"
      >
        <div className="flex w-full items-center justify-between">
          <a
            className="rounded-lg bg-[var(--foreground)] px-5 py-2 text-[18px] font-bold leading-[1.5] text-[var(--background)] transition hover:bg-[#3a3a3b] md:text-[20px]"
            href="#top"
          >
            Jan Michoin
          </a>

          <nav className="hidden items-center gap-20 md:flex" aria-label={content.nav.ariaLabel}>
            <div className="flex items-center gap-[30px] text-[20px] leading-[1.5]">
              {content.nav.items.map((item) => (
                <a className="transition hover:text-[var(--muted)]" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                className="rounded-lg bg-[var(--foreground)] px-4 py-2 text-[20px] leading-[1.5] text-[var(--background)] transition hover:bg-[#3a3a3b]"
                href="#contact"
              >
                {content.nav.contact}
              </a>
              <a className="text-[16px] font-bold leading-[1.5] transition hover:text-[var(--muted)]" href={content.alternatePath} hrefLang={content.locale === "en" ? "cs" : "en"}>
                {content.languageLabel}
              </a>
            </div>
          </nav>

          <details className="group md:hidden" id="mobile-menu">
            <summary
              aria-controls="mobile-navigation"
              aria-label={content.nav.toggleLabel}
              className="relative block size-10 list-none [&::-webkit-details-marker]:hidden"
            >
              <span className="absolute left-1/2 top-1/2 h-1 w-12 -translate-x-1/2 -translate-y-2 rounded-full bg-[var(--foreground)] transition group-open:translate-y-0 group-open:rotate-45" />
              <span className="absolute left-1/2 top-1/2 h-1 w-12 -translate-x-1/2 translate-y-2 rounded-full bg-[var(--foreground)] transition group-open:translate-y-0 group-open:-rotate-45" />
            </summary>

            <nav
              aria-label={content.nav.mobileAriaLabel}
              className="fixed inset-x-0 top-[70px] z-50 bg-[var(--background)] px-5 pb-6"
              id="mobile-navigation"
            >
              <div className="mx-auto max-w-[390px] border-t border-[var(--rule)]">
                {content.nav.items.map((item) => (
                  <a className="block border-b border-[var(--rule)] py-5 text-[32px] font-medium leading-[1.4]" href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
                <div className="mt-5 flex items-center gap-5">
                  <a
                    className="inline-flex rounded-lg bg-[var(--foreground)] px-4 py-2 text-[32px] leading-[1.4] text-[var(--background)] transition hover:bg-[#3a3a3b]"
                    href="#contact"
                  >
                    {content.nav.contact}
                  </a>
                  <a className="text-[24px] font-bold leading-[1.4]" href={content.alternatePath} hrefLang={content.locale === "en" ? "cs" : "en"}>
                    {content.languageLabel}
                  </a>
                </div>
                <div className="mt-5 border-b border-[var(--rule)]" />
              </div>
            </nav>
          </details>
        </div>
      </header>
      <script dangerouslySetInnerHTML={{ __html: headerBehaviorScript }} />
    </>
  );
}

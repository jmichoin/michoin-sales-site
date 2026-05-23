export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-5 text-[var(--foreground)]">
      <div className="text-center">
        <h1 className="text-[32px] font-medium leading-[1.2] md:text-[48px]">Page not found</h1>
        <p className="mt-3 text-[16px] leading-[1.5] text-[var(--muted)] md:text-[18px]">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}

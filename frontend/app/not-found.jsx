import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      <header className="bg-surface border-b border-outline-variant shadow-sm w-full">
        <div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto">
          <Link href="/" className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity">Mentor.me</Link>
          <div className="flex items-center gap-sm">
            <Link href="/login" className="px-md py-sm rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors">Log in</Link>
            <Link href="/register" className="px-md py-sm rounded-lg bg-primary text-on-primary hover:bg-primary/90 font-label text-label transition-colors shadow-sm">Sign up</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-md py-xl">
        <div className="w-24 h-24 rounded-full bg-primary-fixed flex items-center justify-center mb-lg">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: "48px" }}>search_off</span>
        </div>
        <span className="inline-block bg-primary-container text-on-primary text-label font-label px-sm py-xs rounded-full mb-md">404</span>
        <h1 className="font-page-title text-page-title text-on-surface mb-sm">Page not found</h1>
        <p className="font-body text-body text-on-surface-variant max-w-[420px] mb-lg">
          The page you&apos;re looking for might have been moved, deleted, or never existed in the first place.
        </p>
        <div className="flex flex-col sm:flex-row gap-md">
          <Link href="/dashboard" className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-primary-container text-on-primary font-card-title text-card-title hover:bg-primary transition-colors shadow-sm">Go to dashboard</Link>
          <Link href="/" className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-surface-container-lowest text-on-surface font-card-title text-card-title border border-outline-variant hover:bg-surface-container-low transition-colors shadow-sm">Back home</Link>
        </div>
      </main>
    </div>
  );
}

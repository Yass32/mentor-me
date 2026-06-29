"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen overflow-x-hidden flex flex-col">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors" href="/register">Sign up</a></div></div></header>


<main className="flex-grow flex items-center justify-center p-lg relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-fixed opacity-20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
</div>

<div className="error-stage active flex-col items-center text-center max-w-md w-full px-md" id="error-404">
<div className="mb-xl relative">
<div className="w-48 h-48 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[80px]" data-icon="search_off">search_off</span>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary text-on-primary text-label font-label px-md py-xs rounded-full shadow-md">
                    404
                </div>
</div>
<h1 className="font-section-heading text-[24px] mb-sm text-on-surface">Page Not Found</h1>
<p className="font-muted text-muted mb-xl">The page you're looking for might have been moved, deleted, or never existed in the first place.</p>
<div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
<button className="px-xl py-md bg-primary text-on-primary rounded-lg font-label text-label hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    Go to Dashboard
                </button>
<button className="px-xl py-md bg-surface text-secondary border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container transition-all active:scale-95">
                    Go Back
                </button>
</div>
</div>

<div className="error-stage flex-col items-center text-center max-w-md w-full px-md" id="error-403">
<div className="mb-xl relative">
<div className="w-48 h-48 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-tertiary text-[80px]" data-icon="lock_person">lock_person</span>
</div>
<div className="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary text-label font-label px-md py-xs rounded-full shadow-md">
                    403
                </div>
</div>
<h1 className="font-section-heading text-[24px] mb-sm text-on-surface">Access Denied</h1>
<p className="font-muted text-muted mb-xl">You don't have permission to access this resource. Please contact your administrator if you believe this is an error.</p>
<div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
<button className="px-xl py-md bg-primary text-on-primary rounded-lg font-label text-label hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    Go to Dashboard
                </button>
<button className="px-xl py-md bg-surface text-secondary border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container transition-all active:scale-95">
                    Contact Support
                </button>
</div>
</div>

<div className="error-stage flex-col items-center text-center max-w-md w-full px-md" id="error-500">
<div className="mb-xl relative">
<div className="w-48 h-48 rounded-full bg-error-container flex items-center justify-center border border-error">
<span className="material-symbols-outlined text-on-error-container text-[80px]" data-icon="electrical_services">electrical_services</span>
</div>
<div className="absolute -bottom-2 -right-2 bg-error text-on-error text-label font-label px-md py-xs rounded-full shadow-md">
                    500
                </div>
</div>
<h1 className="font-section-heading text-[24px] mb-sm text-on-surface">Something Went Wrong</h1>
<p className="font-muted text-muted mb-xl">Our servers are having a momentary lapse in judgment. We're working hard to get things back on track.</p>
<div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
<button className="px-xl py-md bg-primary text-on-primary rounded-lg font-label text-label hover:opacity-90 transition-all active:scale-95 shadow-sm flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[18px]" data-icon="refresh">refresh</span>
                    Retry
                </button>
<button className="px-xl py-md bg-surface text-secondary border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container transition-all active:scale-95">
                    Go to Dashboard
                </button>
</div>
</div>
</main>

<footer className="w-full py-lg px-xl flex flex-col md:flex-row justify-center items-center max-w-container-max mx-auto gap-md">
<p className="font-muted text-muted text-xs opacity-60">© 2024 Mentor.me. Bridging the gap in career growth.</p>
<div className="flex gap-md">
<a className="font-muted text-muted text-xs hover:text-primary transition-all underline decoration-outline-variant underline-offset-4" href="#">Privacy Policy</a>
<a className="font-muted text-muted text-xs hover:text-primary transition-all underline decoration-outline-variant underline-offset-4" href="#">Support</a>
</div>
</footer>

<div className="fixed bottom-lg right-lg glass-panel p-sm rounded-xl flex gap-xs shadow-lg z-50">
<button className="w-10 h-10 rounded-lg flex items-center justify-center font-label text-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container transition-colors">404</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center font-label text-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container transition-colors">403</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center font-label text-xs bg-surface-container hover:bg-primary-container hover:text-on-primary-container transition-colors">500</button>
</div>


    </div>
  );
}

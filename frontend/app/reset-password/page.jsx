"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body text-body text-on-surface">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors" href="/register">Sign up</a></div></div></header>


<main className="flex-grow flex items-center justify-center p-md bg-pattern">
<div className="w-full max-w-[400px] bg-surface-container-lowest rounded-[10px] custom-shadow p-lg md:p-[32px] custom-shadow-hover transition-all duration-150 relative overflow-hidden">

<div className="flex flex-col gap-lg" id="state-form">
<div className="text-center">
<h1 className="font-section-heading text-section-heading text-on-surface mb-xs">Set a new password</h1>
<p className="font-muted text-muted text-on-surface-variant">Enter your new password below.</p>
</div>
<form className="flex flex-col gap-md">

<div className="flex flex-col gap-xs relative">
<label className="font-label text-label text-on-surface" htmlFor="new-password">New Password</label>
<div className="relative">
<input className="input-field pr-10" id="new-password" placeholder="••••••••" required type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none" type="button">
<span className="material-symbols-outlined text-[20px]" id="icon-new-password">visibility_off</span>
</button>
</div>

<div className="flex gap-1 mt-1">
<div className="h-1 flex-1 bg-surface-variant rounded-full overflow-hidden"><div className="h-full bg-primary w-0"></div></div>
<div className="h-1 flex-1 bg-surface-variant rounded-full overflow-hidden"></div>
<div className="h-1 flex-1 bg-surface-variant rounded-full overflow-hidden"></div>
<div className="h-1 flex-1 bg-surface-variant rounded-full overflow-hidden"></div>
</div>

</div>

<div className="flex flex-col gap-xs relative">
<label className="font-label text-label text-on-surface" htmlFor="confirm-password">Confirm Password</label>
<div className="relative">
<input className="input-field pr-10" id="confirm-password" placeholder="••••••••" required type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none" type="button">
<span className="material-symbols-outlined text-[20px]" id="icon-confirm-password">visibility_off</span>
</button>
</div>


</div>
<button className="btn-primary w-full mt-sm flex justify-center items-center gap-2" type="submit">
                        Reset password
                    </button>
</form>
</div>

<div className="hidden flex flex-col items-center justify-center py-xl gap-md text-center" id="state-loading">
<div className="w-12 h-12 rounded-full border-4 border-surface-variant border-t-primary animate-spin"></div>
<p className="font-section-heading text-card-title text-on-surface">Checking your reset link...</p>
<p className="font-muted text-muted text-on-surface-variant">This should only take a moment.</p>
<button className="text-primary mt-lg font-label text-label" type="button">Cancel (Dev)</button>
</div>

<div className="hidden flex flex-col items-center justify-center py-md gap-lg text-center" id="state-success">
<div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[32px]">check_circle</span>
</div>
<div>
<h2 className="font-section-heading text-section-heading text-on-surface mb-xs">Password updated!</h2>
<p className="font-muted text-muted text-on-surface-variant">Your password has been successfully changed. You can now log in with your new credentials.</p>
</div>
<button className="btn-primary w-full" type="button">
                    Go to Log in
                </button>
</div>

<div className="hidden flex flex-col items-center justify-center py-md gap-lg text-center" id="state-invalid">
<div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[32px]">warning</span>
</div>
<div>
<h2 className="font-section-heading text-section-heading text-on-surface mb-xs">Link expired</h2>
<p className="font-muted text-muted text-on-surface-variant">This password reset link is invalid or has expired for your security. Please request a new one.</p>
</div>
<div className="flex flex-col gap-sm w-full">
<a className="btn-primary w-full text-center inline-block" href="/forgot-password">
                        Request a new link
                    </a>
<button className="btn-secondary w-full" type="button">
                        Back to Log in (Dev)
                    </button>
</div>
</div>
</div>
</main>

<footer className="bg-surface dark:bg-background border-t border-outline-variant full-width">
<div className="flex flex-col md:flex-row justify-between items-center py-lg px-lg max-w-container-max mx-auto w-full gap-md">
<span className="font-label text-label font-bold text-on-surface">Mentor.me</span>
<p className="font-muted text-muted text-secondary dark:text-secondary-fixed text-center">© 2024 Mentor.me Professional Network</p>
<div className="flex gap-md">
<a className="font-muted text-muted text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-all" href="#">Terms</a>
<a className="font-muted text-muted text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-all" href="#">Privacy</a>
<a className="font-muted text-muted text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-all" href="#">Support</a>
</div>
</div>
</footer>


    </div>
  );
}

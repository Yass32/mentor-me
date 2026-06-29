"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface h-full flex flex-col font-body text-body text-on-surface antialiased">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors" href="/register">Sign up</a></div></div></header>


<main className="flex-grow flex items-center justify-center p-md sm:p-lg">
<div className="w-full max-w-[400px]">

<div className="bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-lg sm:p-xl transition-all duration-150" id="state-default">
<div className="text-center mb-lg">
<span className="material-symbols-outlined text-primary-container text-4xl mb-sm" data-icon="lock_reset" style={{'fontVariationSettings':'\'FILL\' 0'}}>lock_reset</span>
<h1 className="font-section-heading text-section-heading text-on-surface mb-xs">Forgot your password?</h1>
<p className="font-muted text-muted text-on-surface-variant">Enter your email address and we'll send you a reset link.</p>
</div>

<div className="state-hidden bg-[#fffbeb] border border-[#fcd34d] text-[#b45309] rounded-lg p-md mb-lg flex items-start gap-sm" id="alert-rate-limit">
<span className="material-symbols-outlined shrink-0" data-icon="warning" style={{'fontVariationSettings':'\'FILL\' 1'}}>warning</span>
<span className="font-label text-label mt-1">Too many requests. Please wait a few minutes before trying again.</span>
</div>
<form className="space-y-md" id="reset-form">
<div>
<label className="block font-label text-label text-on-surface mb-xs" htmlFor="email">Email address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-[14px] py-[10px] font-body text-body text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:border-primary-container transition-shadow" id="email" placeholder="you@example.com" required type="email" />
</div>

<div className="state-hidden text-error font-label text-label flex items-center gap-xs" id="alert-error">
<span className="material-symbols-outlined text-sm" data-icon="error" style={{'fontVariationSettings':'\'FILL\' 1'}}>error</span>
<span>We couldn't find an account with that email.</span>
</div>
<button className="w-full flex justify-center items-center gap-2 bg-primary-container text-on-primary hover:bg-primary-container/90 active:scale-[0.98] transition-all py-[10px] px-lg rounded-lg font-label text-label shadow-sm" id="btn-submit" type="submit">
<span id="btn-text">Send reset link</span>
<span className="material-symbols-outlined spin state-hidden text-lg" data-icon="progress_activity" id="btn-spinner">progress_activity</span>
</button>
</form>
<div className="mt-lg text-center">
<a className="font-label text-label text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-xs" href="/login">
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
                        Back to Log in
                    </a>
</div>
</div>

<div className="state-hidden bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-lg sm:p-xl text-center" id="state-success">
<div className="w-16 h-16 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-lg">
<span className="material-symbols-outlined text-[#059669] text-3xl" data-icon="mark_email_unread" style={{'fontVariationSettings':'\'FILL\' 1'}}>mark_email_unread</span>
</div>
<h2 className="font-section-heading text-section-heading text-on-surface mb-sm">Check your inbox</h2>
<p className="font-muted text-muted text-on-surface-variant mb-lg">If that email is registered, we've sent you instructions to reset your password.</p>
<div className="space-y-md">
<button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low active:scale-[0.98] transition-all py-[10px] px-lg rounded-lg font-label text-label shadow-sm">
                        Back to Log in
                    </button>
<p className="font-label text-label text-on-surface-variant">
                        Didn't receive the email? <button className="text-primary hover:underline font-bold">Click to resend</button>
</p>
</div>
</div>
</div>
</main>

<footer className="bg-surface dark:bg-background border-t border-outline-variant w-full mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center py-lg px-lg max-w-container-max mx-auto w-full gap-md">
<div className="text-label font-label font-bold text-on-surface">
                © 2024 Mentor.me Professional Network
            </div>
<div className="flex gap-lg font-muted text-muted">
<a className="text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
<a className="text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
<a className="text-on-surface-variant hover:text-primary underline opacity-80 hover:opacity-100 transition-opacity" href="#">Support</a>
</div>
</div>
</footer>


    </div>
  );
}

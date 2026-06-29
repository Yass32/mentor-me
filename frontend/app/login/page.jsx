"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="auth-bg text-on-surface font-body min-h-screen flex flex-col items-center justify-center p-md md:p-lg antialiased relative overflow-hidden">

{/* Floating decorative elements */}
<div className="floating-blob w-[250px] h-[250px] bg-primary/8 top-10 right-[10%] animate-float-slow" aria-hidden="true"></div>
<div className="floating-blob w-[180px] h-[180px] bg-primary-fixed/20 bottom-20 left-[5%] animate-float animation-delay-200" aria-hidden="true"></div>

<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full absolute top-0 left-0"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm nav-link-animated" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors nav-link-animated" href="/register">Sign up</a></div></div></header>

<main className="w-full max-w-[400px] flex flex-col gap-lg">

<div className="hidden w-full bg-secondary-container text-on-secondary-container p-md rounded-lg flex items-start gap-sm border border-secondary-fixed shadow-sm transition-all duration-300" id="banner-expired">
<span className="material-symbols-outlined text-secondary mt-xs">info</span>
<div className="flex-1">
<p className="font-card-title text-card-title text-on-surface">Session Expired</p>
<p className="font-muted text-muted mt-xs">For your security, you've been logged out due to inactivity. Please log in again.</p>
</div>
<button aria-label="Dismiss" className="text-secondary hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>

<div className="bg-surface-container-lowest/80 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated p-lg flex flex-col gap-lg relative overflow-hidden animate-scale-in card-border-animated">

{/* Subtle gradient accent at top of card */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

<div className="text-center flex flex-col items-center gap-xs">
<div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-sm shadow-sm animate-glow-pulse">
<span className="material-symbols-outlined text-[28px] filled">auto_awesome</span>
</div>
<h1 className="font-page-title text-page-title text-on-surface">Welcome back</h1>
<p className="font-muted text-muted text-on-surface-variant">Log in to continue to Mentor.me</p>
</div>

<div className="hidden bg-error-container text-on-error-container p-sm rounded-lg flex items-center gap-sm border border-[#ffb4ab]" id="error-inline">
<span className="material-symbols-outlined text-error">error</span>
<p className="font-muted text-muted">Incorrect email or password. Please try again.</p>
</div>

<form className="flex flex-col gap-md" id="login-form">

<div className="flex flex-col gap-xs relative group">
<label className="font-label text-label text-on-surface-variant ml-xs transition-colors group-focus-within:text-primary" htmlFor="email">Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors duration-200">mail</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body text-body rounded-lg pl-10 pr-sm py-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:border-transparent transition-all duration-200 placeholder:text-outline-variant hover:border-primary/30" id="email" name="email" placeholder="name@company.com" required type="email" />
</div>
</div>

<div className="flex flex-col gap-xs relative group">
<div className="flex justify-between items-center ml-xs">
<label className="font-label text-label text-on-surface-variant transition-colors group-focus-within:text-primary" htmlFor="password">Password</label>
<a className="font-label text-label text-primary hover:text-primary-fixed-dim transition-colors" href="/forgot-password">Forgot password?</a>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors duration-200">lock</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body text-body rounded-lg pl-10 pr-10 py-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-lowest focus:border-transparent transition-all duration-200 placeholder:text-outline-variant hover:border-primary/30" id="password" name="password" placeholder="••••••••" required type="password" />
<button aria-label="Toggle password visibility" className="absolute right-sm top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors" id="toggle-password" type="button">
<span className="material-symbols-outlined" id="toggle-icon">visibility</span>
</button>
</div>
</div>

<button className="w-full bg-primary-container text-on-primary-container font-card-title text-card-title py-[10px] px-lg rounded-lg shadow-sm hover:shadow-glow-primary hover:-translate-y-[1px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-sm mt-sm relative overflow-hidden btn-shimmer" id="submit-btn" type="submit">
<span id="btn-text">Log in</span>
<div className="hidden absolute inset-0 flex items-center justify-center bg-primary-container" id="btn-spinner">
<svg className="animate-spin h-5 w-5 text-on-primary-container" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
</button>
</form>

<div className="hidden bg-[#fff8e1] text-[#795548] p-sm rounded-lg flex items-start gap-sm border border-[#ffe082]" id="warning-rate-limit">
<span className="material-symbols-outlined text-[#ffb300] mt-xs">warning</span>
<div>
<p className="font-card-title text-card-title">Too many attempts</p>
<p className="font-muted text-muted mt-xs">Please wait 5 minutes before trying again.</p>
</div>
</div>
</div>

<div className="text-center">
<p className="font-muted text-muted text-on-surface-variant">
                Don't have an account? <a className="text-primary font-semibold hover:text-primary-fixed-dim transition-colors" href="/register">Sign up</a>
</p>
</div>

</main>


    </div>
  );
}

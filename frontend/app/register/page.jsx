"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="auth-bg text-on-surface font-body min-h-screen flex flex-col items-center justify-center p-md relative overflow-hidden">

{/* Floating decorative elements */}
<div className="floating-blob w-[280px] h-[280px] bg-primary/8 -top-10 left-[15%] animate-float-slow" aria-hidden="true"></div>
<div className="floating-blob w-[200px] h-[200px] bg-primary-fixed/20 bottom-10 right-[10%] animate-float animation-delay-400" aria-hidden="true"></div>

<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full absolute top-0 left-0"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm nav-link-animated" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors nav-link-animated" href="/register">Sign up</a></div></div></header>

<div className="absolute top-0 left-0 w-full bg-error text-on-error py-sm px-lg flex items-center justify-center gap-sm transform -translate-y-full transition-transform duration-300 z-50 shadow-md" id="server-error-banner">
<span className="material-symbols-outlined" style={{'fontVariationSettings':'\'FILL\' 1'}}>error</span>
<span className="text-body font-body font-medium">An unexpected error occurred on the server. Please try again later.</span>
<button className="ml-auto text-on-error hover:opacity-80 transition-opacity" id="close-server-error">
<span className="material-symbols-outlined">close</span>
</button>
</div>

<div className="w-full max-w-[440px] relative">

<div className="bg-surface-container-lowest/80 backdrop-blur-lg rounded-xl shadow-card-elevated border border-outline-variant/50 p-lg md:p-[32px] w-full transition-all duration-300 animate-scale-in card-border-animated relative overflow-hidden" id="register-card">

{/* Subtle gradient accent at top of card */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

<div className="text-center mb-lg">
<div className="text-primary font-section-heading font-bold mb-xs flex items-center justify-center gap-xs">
<span className="material-symbols-outlined animate-glow-pulse" style={{'fontVariationSettings':'\'FILL\' 1'}}>terminal</span>
                    Mentor.me
                </div>
<h1 className="text-page-title font-page-title text-on-surface mb-xs">Create your account</h1>
<p className="text-body font-body text-on-surface-variant">Join our community to start connecting.</p>
</div>
<form className="space-y-lg" id="register-form">

<div className="space-y-sm">
<label className="block text-label font-label text-on-surface-variant uppercase tracking-wider">I am joining as a</label>
<div className="grid grid-cols-2 gap-sm">

<button className="role-btn active flex items-center justify-center gap-xs p-sm rounded-lg border-2 border-primary bg-surface-container-low text-primary transition-all duration-200 hover:shadow-glow-soft hover:scale-[1.02]" data-role="mentee" type="button">
<span className="material-symbols-outlined text-[20px]" style={{'fontVariationSettings':'\'FILL\' 1'}}>person</span>
<span className="text-card-title font-card-title text-[14px]">Mentee</span>
</button>

<button className="role-btn flex items-center justify-center gap-xs p-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:border-primary/30 transition-all duration-200 hover:scale-[1.02]" data-role="mentor" type="button">
<span className="material-symbols-outlined text-[20px]">school</span>
<span className="text-card-title font-card-title text-[14px]">Mentor</span>
</button>
</div>
<input id="selected-role" type="hidden" defaultValue="mentee" />
</div>

<div className="space-y-xs group">
<label className="block text-label font-label text-on-surface-variant transition-colors group-focus-within:text-primary" htmlFor="fullName">Full Name</label>
<input className="w-full border border-outline-variant rounded-lg px-md py-[10px] text-body font-body bg-surface-container-lowest text-on-surface placeholder:text-outline outline-none transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/30" id="fullName" placeholder="Jane Doe" required type="text" />
</div>

<div className="space-y-xs group">
<label className="block text-label font-label text-on-surface-variant transition-colors group-focus-within:text-primary" htmlFor="email">Email Address</label>
<input className="w-full border border-outline-variant rounded-lg px-md py-[10px] text-body font-body bg-surface-container-lowest text-on-surface placeholder:text-outline outline-none transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/30" id="email" placeholder="jane@example.com" required type="email" />

<p className="hidden text-label font-label text-error flex items-center gap-[4px] mt-xs" id="email-error">
<span className="material-symbols-outlined text-[14px]">error</span>
                        This email is already registered.
                    </p>
</div>

<div className="space-y-xs group">
<label className="block text-label font-label text-on-surface-variant transition-colors group-focus-within:text-primary" htmlFor="password">Password</label>
<input className="w-full border border-outline-variant rounded-lg px-md py-[10px] text-body font-body bg-surface-container-lowest text-on-surface placeholder:text-outline outline-none transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/30" id="password" placeholder="••••••••" required type="password" />

<div className="flex gap-[4px] mt-sm h-[4px] w-full rounded-full overflow-hidden bg-surface-container-highest">
<div className="h-full w-1/3 transition-colors duration-300" id="strength-1"></div>
<div className="h-full w-1/3 transition-colors duration-300" id="strength-2"></div>
<div className="h-full w-1/3 transition-colors duration-300" id="strength-3"></div>
</div>

<p className="hidden text-label font-label text-error flex items-center gap-[4px] mt-xs" id="password-error">
<span className="material-symbols-outlined text-[14px]">error</span>
                        Password must be at least 8 characters long.
                    </p>
</div>

<div className="pt-sm">
<button className="w-full bg-primary text-on-primary rounded-lg py-[12px] px-md text-card-title font-card-title flex items-center justify-center gap-sm hover:shadow-glow-primary hover:-translate-y-[1px] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-fixed-dim btn-shimmer" id="submit-btn" type="submit">
<span id="submit-text">Create Account</span>

<svg className="spinner hidden w-[20px] h-[20px]" id="submit-spinner" viewBox="0 0 50 50">
<circle className="path" cx="25" cy="25" fill="none" r="20" strokeWidth="4"></circle>
</svg>
</button>
</div>

<p className="text-center text-muted font-muted text-on-surface-variant mt-md">
                    Already have an account? <a className="text-primary hover:underline font-medium transition-colors" href="/login">Log in</a>
</p>
</form>
</div>

<div className="hidden bg-surface-container-lowest/80 backdrop-blur-lg rounded-xl shadow-card-elevated border border-outline-variant/50 p-lg md:p-[32px] w-full text-center flex flex-col items-center justify-center min-h-[400px] animate-scale-in" id="success-card">
<div className="w-[64px] h-[64px] rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-lg animate-glow-pulse">
<span className="material-symbols-outlined text-[32px]" style={{'fontVariationSettings':'\'FILL\' 1'}}>check_circle</span>
</div>
<h2 className="text-section-heading font-section-heading text-on-surface mb-sm">Check your inbox</h2>
<p className="text-body font-body text-on-surface-variant mb-lg">We've sent a verification link to <br /><span className="font-medium text-on-surface" id="success-email">your email</span>.</p>
<button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg py-[10px] px-md text-card-title font-card-title hover:bg-surface-container hover:border-primary/30 transition-all duration-200">
                Back to start
            </button>
</div>
</div>



    </div>
  );
}

"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<div className="flex-1 flex max-w-container-max mx-auto w-full">


<main className="flex-1 p-lg md:p-xl">
<div className="max-w-3xl mx-auto space-y-xl stagger-children">
<div className="mb-xl opacity-0 animate-fade-in-up">
<h1 className="font-page-title text-page-title text-on-background">Account Settings</h1>
<p className="font-body text-body text-secondary mt-xs">Manage your security and account preferences.</p>
</div>

<section data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl overflow-hidden shadow-sm hover:shadow-card-elevated transition-shadow duration-300 card-border-animated animation-delay-100">
<div className="p-lg">
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-card-title text-card-title text-on-surface">Email Address</h3>
<p className="font-muted text-muted text-secondary">Your current email for login and notifications.</p>
</div>
<button className="bg-surface border border-outline-variant text-on-surface px-md py-sm rounded-lg font-label text-label hover:bg-surface-container hover:border-primary/30 transition-all duration-200 shadow-sm" id="toggle-email-form">
                                Change email
                            </button>
</div>
<div className="flex items-center gap-md p-md bg-surface-container-low rounded-lg border border-outline-variant/50 transition-colors hover:border-primary/30" id="email-display">
<span className="material-symbols-outlined text-primary">mail</span>
<span className="font-body text-body text-on-surface">alex.dev@mentorme.com</span>
</div>

<div className="hidden mt-lg pt-lg border-t border-outline-variant/50 animate-fade-in-up" id="email-form">
<form className="space-y-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-md group">
<div className="space-y-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">New Email</label>
<input className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent p-md font-body text-body text-on-surface transition-all duration-200 hover:border-primary/30" placeholder="new.email@example.com" type="email" />
</div>
<div className="space-y-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">Confirm Password</label>
<input className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent p-md font-body text-body text-on-surface transition-all duration-200 hover:border-primary/30" placeholder="••••••••" type="password" />
</div>
</div>
<div className="flex justify-end gap-sm pt-sm">
<button className="px-md py-sm text-secondary font-label text-label hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors" type="button">Cancel</button>
<button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label text-label hover:shadow-glow-primary hover:-translate-y-[1px] transition-all duration-200 shadow-sm btn-shimmer" type="submit">Update Email</button>
</div>
</form>
</div>
</div>
</section>

<section data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl overflow-hidden shadow-sm hover:shadow-card-elevated transition-shadow duration-300 card-border-animated animation-delay-200">
<div className="p-lg">
<div className="mb-lg">
<h3 className="font-card-title text-card-title text-on-surface">Password</h3>
<p className="font-muted text-muted text-secondary">Ensure your account is using a long, random password to stay secure.</p>
</div>
<form className="space-y-lg group">
<div className="space-y-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">Current Password</label>
<input className="w-full md:w-2/3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent p-md font-body text-body text-on-surface transition-all duration-200 hover:border-primary/30" type="password" />
</div>
<div className="space-y-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">New Password</label>
<div className="relative w-full md:w-2/3">
<input className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent p-md font-body text-body text-on-surface pr-10 transition-all duration-200 hover:border-primary/30" id="new-password" type="password" />
<span className="material-symbols-outlined absolute right-3 top-[14px] text-outline cursor-pointer hover:text-primary transition-colors">visibility</span>
</div>
<div className="mt-sm w-full md:w-2/3">
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-error w-1/4 transition-all duration-300" id="strength-fill"></div>
</div>
<div className="mt-xs font-label text-label text-secondary opacity-60 transition-colors" id="strength-label">Security: Weak</div>
</div>
</div>
<div className="space-y-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">Confirm New Password</label>
<input className="w-full md:w-2/3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent p-md font-body text-body text-on-surface transition-all duration-200 hover:border-primary/30" type="password" />
</div>
<div className="pt-md border-t border-outline-variant/50 flex justify-end">
<button className="bg-primary text-on-primary px-xl py-sm rounded-lg font-label text-label hover:shadow-glow-primary hover:-translate-y-[1px] shadow-sm transition-all duration-200 btn-shimmer" type="submit">Update Password</button>
</div>
</form>
</div>
</section>

<section data-animate className="bg-error-container/20 border border-error/30 rounded-xl overflow-hidden hover:border-error/50 transition-colors duration-300 animation-delay-300">
<div className="p-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-lg">
<div className="space-y-xs">
<h3 className="font-card-title text-card-title text-error flex items-center gap-sm">
<span className="material-symbols-outlined animate-pulse-soft" data-weight="fill">warning</span>
                                    Danger Zone
                                </h3>
<p className="font-muted text-muted text-on-error-container/80">Permanently delete your account and all associated data. This action cannot be undone.</p>
</div>
<button className="bg-error text-on-error px-xl py-sm rounded-lg font-label text-label hover:bg-error/90 hover:shadow-[0_0_15px_rgba(186,26,26,0.4)] transition-all duration-200 shadow-sm active:scale-95">
                                Delete my account
                            </button>
</div>
</div>
</section>
</div>
</main>
</div>

<footer className="bg-surface-container-low border-t border-outline-variant/50 w-full mt-auto">
<div className="w-full py-xl px-lg flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto">
<span className="font-muted text-muted text-secondary">© 2024 Mentor.me. All rights reserved.</span>
<div className="flex gap-md items-center">
<a className="font-label text-label text-on-surface-variant hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Terms of Service</a>
<a className="font-label text-label text-on-surface-variant hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Privacy Policy</a>
<a className="font-label text-label text-on-surface-variant hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Support</a>
</div>
</div>
</footer>

    </div>
  );
}

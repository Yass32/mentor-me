"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.getElementById("skeleton-state")?.classList.add("hidden");
    document.getElementById("content-state")?.classList.remove("hidden");
  }, []);
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<div className="flex flex-1">
<main className="flex-1 max-w-4xl mx-auto w-full px-md md:px-xl py-xl">

<div className="space-y-xl animate-pulse" id="skeleton-state">
<div className="flex items-center gap-lg">
<div className="w-20 h-20 rounded-full shimmer"></div>
<div className="space-y-sm flex-1">
<div className="h-6 w-1/4 shimmer rounded"></div>
<div className="h-4 w-1/6 shimmer rounded"></div>
</div>
</div>
<div className="space-y-lg border-t border-outline-variant pt-xl">
<div className="space-y-sm">
<div className="h-4 w-20 shimmer rounded"></div>
<div className="h-12 w-full shimmer rounded-lg"></div>
</div>
<div className="space-y-sm">
<div className="h-4 w-16 shimmer rounded"></div>
<div className="h-32 w-full shimmer rounded-lg"></div>
</div>
</div>
</div>

<div className="hidden animate-fade-in-up" id="content-state">
<div className="mb-xl">
<h1 className="text-page-title font-page-title text-on-background mb-xs">My Profile</h1>
<p className="text-muted font-muted text-secondary">Manage your public presence and career details.</p>
</div>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/50 p-lg md:p-xl shadow-card-float card-border-animated relative overflow-hidden transition-all duration-300">
<form className="space-y-xl relative z-10" id="profile-form">

<div className="flex flex-col md:flex-row items-center gap-lg stagger-children opacity-0 animate-fade-in-up">
<div className="relative group">
<img alt="Mentor Avatar" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-surface-container shadow-sm group-hover:shadow-glow-soft transition-all duration-300 avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy7iJErHshENMs_EGA-kRRoG6xHmDSx890pj8Gwp5FP7C2ia-Nz4ZKRDPra4qWSVKDhIQZ8AZ3BTj7WqSF-fbLs4HXguYSCzf9xFXo8bcGzcM1cStni9QpDKs9EkezOiZuXRvzv-zaFos3UBs_4Qq0861waFE5lZdT2YFvYv91OjOmWxKKOyKABGSkCLg6o2B2xfL4gB9B7erUyMm89sVU3_F3_BmzQBuV3fk0Ndyr5x21Nnf6njAMpXNrhnqjl-TvdQ9-RLpU2ow" />
<div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
<span className="material-symbols-outlined text-white">photo_camera</span>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="font-card-title text-card-title mb-xs text-on-surface">Profile Picture</h3>
<button className="text-primary hover:text-primary-fixed-dim font-label text-label hover:underline transition-colors" type="button">Change photo</button>
<p className="text-muted text-xs text-secondary mt-1">JPG, GIF or PNG. 1MB max.</p>
</div>
</div>

<div className="grid grid-cols-1 gap-lg border-t border-outline-variant/50 pt-lg opacity-0 animate-fade-in-up animation-delay-100">

<div className="flex flex-col gap-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors" htmlFor="full-name">Full Name</label>
<input className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring transition-all duration-200 hover:border-primary/30 text-on-surface font-body" id="full-name" placeholder="Enter your full name" type="text" defaultValue="Julian Devlin" />
</div>

<div className="flex flex-col gap-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors" htmlFor="bio">Biography</label>
<textarea className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg focus-ring transition-all duration-200 hover:border-primary/30 text-on-surface font-body resize-none" id="bio" placeholder="Write a short professional bio..." rows="4" defaultValue="Senior Software Architect with 12+ years of experience in distributed systems. Passionate about helping junior developers navigate the transition from academic theory to professional engineering excellence."></textarea>
</div>

<div className="flex flex-col gap-xs group/input">
<label className="font-label text-label text-secondary uppercase tracking-wider group-focus-within/input:text-primary transition-colors">Expertise & Skills</label>
<div className="flex flex-wrap gap-sm p-sm bg-surface-container-lowest border border-outline-variant rounded-lg min-h-[48px] focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all duration-200 hover:border-primary/30">
<span className="inline-flex items-center gap-xs px-sm py-1 bg-primary/10 text-primary rounded-md text-label font-label skill-chip border border-primary/20">
                                        Node.js <button className="material-symbols-outlined text-[14px] hover:text-error transition-colors" type="button">close</button>
</span>
<span className="inline-flex items-center gap-xs px-sm py-1 bg-primary/10 text-primary rounded-md text-label font-label skill-chip border border-primary/20">
                                        System Design <button className="material-symbols-outlined text-[14px] hover:text-error transition-colors" type="button">close</button>
</span>
<span className="inline-flex items-center gap-xs px-sm py-1 bg-primary/10 text-primary rounded-md text-label font-label skill-chip border border-primary/20">
                                        React <button className="material-symbols-outlined text-[14px] hover:text-error transition-colors" type="button">close</button>
</span>
<input className="flex-1 min-w-[120px] bg-transparent border-none focus:ring-0 text-body p-1 text-on-surface placeholder-secondary" placeholder="Add skill..." type="text" />
</div>
</div>
</div>

<div className="flex justify-end gap-md pt-md border-t border-outline-variant/50 opacity-0 animate-fade-in-up animation-delay-200">
<button className="px-xl py-sm border border-outline-variant text-secondary rounded-lg font-label text-label hover:bg-surface-container-high transition-all duration-200" type="button">
                                Cancel
                            </button>
<button className="relative px-xl py-sm bg-primary text-on-primary rounded-lg font-label text-label hover:shadow-glow-primary hover:-translate-y-[1px] transition-all flex items-center justify-center min-w-[140px] shadow-sm btn-shimmer" id="save-button" type="submit">
<span id="button-text">Save changes</span>
<div className="hidden absolute flex items-center gap-sm" id="loading-spinner">
<svg className="animate-spin h-5 w-5 text-on-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
</button>
</div>
</form>
</div>
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

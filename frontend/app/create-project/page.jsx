"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Basic setup logic for animations if needed
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center py-xl px-md sm:px-lg relative antialiased">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary-container/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full absolute left-0"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<div className="fixed top-xl left-1/2 -translate-x-1/2 bg-surface-container-highest/90 backdrop-blur-md text-on-surface px-lg py-md rounded-lg shadow-card-elevated border border-outline-variant/50 flex items-center gap-sm opacity-0 pointer-events-none transition-all duration-300 z-50 translate-y-[-10px]" id="success-toast">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="font-body text-body">Project created successfully.</span>
</div>

<main className="w-full max-w-[640px] flex flex-col gap-lg relative z-10 pt-20">

<nav className="opacity-0 animate-fade-in-up">
<a className="inline-flex items-center gap-xs text-secondary hover:text-primary transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
<span className="font-label text-label">My Projects</span>
</a>
</nav>

<form className="bg-surface-container-lowest/80 backdrop-blur-md rounded-xl shadow-card-float border border-outline-variant/50 p-lg flex flex-col gap-lg card-border-animated opacity-0 animate-fade-in-up animation-delay-100 stagger-children" id="create-project-form" noValidate>

<div className="flex flex-col gap-xs relative opacity-0 animate-fade-in-up animation-delay-200 group/input">
<label className="font-label text-label text-on-surface group-focus-within/input:text-primary transition-colors" htmlFor="project-title">Title <span className="text-error">*</span></label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-[14px] py-[10px] font-body text-body text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary transition-all duration-200 hover:border-primary/30 shadow-sm" id="project-title" name="title" placeholder="e.g. React Native E-commerce App" required type="text" />
<p className="font-muted text-muted text-error hidden absolute -bottom-[22px] left-0" id="title-error">This field is required.</p>
</div>

<div className="flex flex-col gap-xs mt-sm opacity-0 animate-fade-in-up animation-delay-300 group/input">
<label className="font-label text-label text-on-surface group-focus-within/input:text-primary transition-colors" htmlFor="project-description">Description</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-[14px] py-[10px] font-body text-body text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary transition-all duration-200 hover:border-primary/30 resize-y shadow-sm" id="project-description" name="description" placeholder="Briefly describe what this project is about..." rows="4"></textarea>
</div>

<div className="flex flex-col gap-xs opacity-0 animate-fade-in-up animation-delay-400 group/input">
<label className="font-label text-label text-on-surface group-focus-within/input:text-primary transition-colors" htmlFor="project-skills">Skills required</label>
<div className="w-full min-h-[44px] bg-surface-container-lowest border border-outline-variant rounded-lg p-xs flex flex-wrap gap-xs focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-200 hover:border-primary/30 cursor-text shadow-sm" id="skills-container">

<span className="inline-flex items-center gap-xs bg-primary/10 border border-primary/20 text-primary px-sm py-[2px] rounded-md font-label text-label h-[28px] skill-chip group/chip">
                        React
                        <button className="text-primary/60 hover:text-error hover:scale-110 transition-all flex items-center justify-center" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="inline-flex items-center gap-xs bg-primary/10 border border-primary/20 text-primary px-sm py-[2px] rounded-md font-label text-label h-[28px] skill-chip group/chip">
                        TypeScript
                        <button className="text-primary/60 hover:text-error hover:scale-110 transition-all flex items-center justify-center" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<input className="flex-1 bg-transparent border-none outline-none font-body text-body text-on-surface min-w-[150px] p-[4px] focus:ring-0 placeholder:text-outline-variant" id="project-skills" placeholder="Type and press enter..." type="text" />
</div>
</div>

<div className="flex flex-col gap-xs opacity-0 animate-fade-in-up animation-delay-500 group/input">
<label className="font-label text-label text-on-surface group-focus-within/input:text-primary transition-colors" htmlFor="project-duration">Estimated duration</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-[14px] py-[10px] font-body text-body text-on-surface appearance-none focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary transition-all duration-200 hover:border-primary/30 shadow-sm" id="project-duration" name="duration" defaultValue="">
<option disabled value="">Select duration</option>
<option value="1w">1 week</option>
<option value="2w">2 weeks</option>
<option value="1m">1 month</option>
<option value="2m">2 months</option>
<option value="3m+">3+ months</option>
</select>
<span className="material-symbols-outlined absolute right-[14px] top-[10px] pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>

<div className="bg-primary-container/20 p-md rounded-lg flex items-start gap-md mt-sm border border-primary/20 shadow-sm opacity-0 animate-fade-in-up animation-delay-600 transition-colors hover:border-primary/40 hover:bg-primary-container/30">
<span className="material-symbols-outlined text-primary mt-[2px] animate-pulse-soft">info</span>
<p className="font-body text-body text-on-surface m-0">Your project will be published as OPEN. Mentees can discover it and apply to work with you.</p>
</div>

<div className="flex items-center justify-end gap-md pt-sm border-t border-outline-variant/50 mt-sm opacity-0 animate-fade-in-up animation-delay-700">
<button className="px-lg py-[10px] bg-surface-container-low text-on-surface rounded-lg font-label text-label hover:bg-surface-container hover:text-primary transition-colors duration-200 shadow-sm" type="button">
                    Cancel
                </button>
<button className="relative px-lg py-[10px] bg-primary text-on-primary rounded-lg font-label text-label hover:shadow-glow-primary hover:-translate-y-[1px] transition-all duration-200 flex items-center justify-center gap-sm min-w-[160px] shadow-sm btn-shimmer" id="submit-btn" type="submit">
<span id="submit-text">Create Project</span>
<span className="material-symbols-outlined animate-spin hidden" id="submit-spinner">progress_activity</span>
</button>
</div>
</form>
</main>
    </div>
  );
}

"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body text-body h-full flex-col antialiased">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>


<div className="flex-1 flex w-full max-w-container-max mx-auto relative overflow-hidden">


<main className="flex-1 overflow-y-auto relative pb-24 md:pb-0 bg-background">

<div className="hidden bg-error-container text-on-error-container px-lg py-sm flex items-center justify-between border-b border-[#ffb4ab]" id="error-banner">
<div className="flex items-center gap-sm font-body text-body">
<span className="material-symbols-outlined">error</span>
                    Couldn't save changes. Please try again.
                </div>
<button className="text-on-error-container hover:opacity-70">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-md md:p-lg max-w-3xl mx-auto">

<div className="mb-lg">
<a className="inline-flex items-center gap-xs text-secondary hover:text-primary transition-colors font-body text-body mb-sm" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        E-commerce React Migration
                    </a>
<h1 className="text-page-title font-page-title text-on-background">Edit project</h1>
</div>

<div className="hidden space-y-lg bg-surface p-lg rounded-xl shadow-sm border border-outline-variant" id="loading-state">
<div className="space-y-sm">
<div className="h-4 w-32 rounded bg-surface-variant shimmer"></div>
<div className="h-10 w-full rounded-lg bg-surface-variant shimmer"></div>
</div>
<div className="space-y-sm">
<div className="h-4 w-48 rounded bg-surface-variant shimmer"></div>
<div className="h-24 w-full rounded-lg bg-surface-variant shimmer"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-sm">
<div className="h-4 w-24 rounded bg-surface-variant shimmer"></div>
<div className="h-10 w-full rounded-lg bg-surface-variant shimmer"></div>
</div>
<div className="space-y-sm">
<div className="h-4 w-24 rounded bg-surface-variant shimmer"></div>
<div className="h-10 w-full rounded-lg bg-surface-variant shimmer"></div>
</div>
</div>
<div className="flex justify-end gap-md pt-md">
<div className="h-10 w-24 rounded-lg bg-surface-variant shimmer"></div>
<div className="h-10 w-32 rounded-lg bg-surface-variant shimmer"></div>
</div>
</div>

<form className="space-y-lg bg-surface p-lg rounded-xl shadow-sm border border-outline-variant" id="edit-form">

<div className="space-y-xs">
<label className="block font-card-title text-card-title text-on-surface" htmlFor="project-title">Project Title <span className="text-error">*</span></label>
<input className="w-full px-[14px] py-[10px] rounded-lg border border-outline-variant bg-surface text-on-surface font-body text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="project-title" required type="text" defaultValue="E-commerce React Migration" />
</div>

<div className="space-y-xs">
<label className="block font-card-title text-card-title text-on-surface" htmlFor="project-desc">Description <span className="text-error">*</span></label>
<p className="font-muted text-muted text-on-surface-variant mb-xs">Provide a detailed overview of the goals and technical requirements.</p>
<textarea className="w-full px-[14px] py-[10px] rounded-lg border border-outline-variant bg-surface text-on-surface font-body text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-y" id="project-desc" required rows="4">Migrating our legacy e-commerce frontend to a modern React architecture. We need a mentor experienced in component-driven design, state management (Redux/Zustand), and performance optimization to guide our junior team through the transition. Key deliverables include setting up the initial boilerplate, defining the routing strategy, and implementing the core product listing page.</textarea>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="space-y-xs">
<label className="block font-card-title text-card-title text-on-surface" htmlFor="tech-stack">Primary Technology</label>
<select className="w-full px-[14px] py-[10px] rounded-lg border border-outline-variant bg-surface text-on-surface font-body text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow appearance-none" id="tech-stack">
<option selected value="react">React / Next.js</option>
<option value="vue">Vue / Nuxt</option>
<option value="angular">Angular</option>
<option value="node">Node.js / Express</option>
<option value="python">Python / Django</option>
</select>
</div>

<div className="space-y-xs">
<label className="block font-card-title text-card-title text-on-surface" htmlFor="duration">Estimated Duration</label>
<select className="w-full px-[14px] py-[10px] rounded-lg border border-outline-variant bg-surface text-on-surface font-body text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow appearance-none" id="duration">
<option value="1-2">1-2 weeks</option>
<option value="2-4">2-4 weeks</option>
<option selected value="1-3m">1-3 months</option>
<option value="3m+">3+ months</option>
</select>
</div>
</div>

<div className="space-y-sm">
<label className="block font-card-title text-card-title text-on-surface">Required Skills</label>
<div className="flex flex-wrap gap-sm" id="skill-container">
<span className="inline-flex items-center gap-xs bg-surface-container-highest text-primary px-sm py-xs rounded-md font-label text-label">
                                React
                                <button className="hover:text-error transition-colors" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="inline-flex items-center gap-xs bg-surface-container-highest text-primary px-sm py-xs rounded-md font-label text-label">
                                State Management
                                <button className="hover:text-error transition-colors" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="inline-flex items-center gap-xs bg-surface-container-highest text-primary px-sm py-xs rounded-md font-label text-label">
                                Performance
                                <button className="hover:text-error transition-colors" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<button className="inline-flex items-center gap-xs border border-dashed border-outline text-secondary px-sm py-xs rounded-md font-label text-label hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[14px]">add</span> Add Skill
                            </button>
</div>
</div>

<div className="pt-md border-t border-outline-variant flex justify-end gap-md items-center">
<a className="px-lg py-[10px] rounded-lg bg-surface text-on-surface border border-outline-variant hover:bg-surface-container-lowest transition-colors font-card-title text-card-title inline-flex items-center justify-center" href="/my-projects/1">
                            Cancel
                        </a>
<button className="px-lg py-[10px] rounded-lg bg-primary text-on-primary font-card-title text-card-title disabled:opacity-40 disabled:pointer-events-none hover:bg-[#2c1ea3] transition-colors flex items-center justify-center gap-sm min-w-[140px]" disabled id="save-btn" type="submit">
<span id="btn-text">Save changes</span>
<div className="spinner hidden" id="btn-spinner"></div>
</button>
</div>
</form>
</div>
</main>
</div>


<div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-surface-container-highest text-on-surface px-lg py-sm rounded-lg shadow-lg border border-outline-variant flex items-center gap-sm font-card-title text-card-title z-50 transition-opacity duration-300 opacity-0 pointer-events-none" id="success-toast">
<span className="material-symbols-outlined text-primary">check_circle</span>
        Project updated.
    </div>


    </div>
  );
}

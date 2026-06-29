"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.getElementById("skeleton-view")?.classList.add("hidden");
    const c = document.getElementById("content-view");
    if (c) { c.classList.remove("hidden"); c.classList.remove("opacity-0"); }
  }, []);
  return (
    <div className="bg-background text-on-background font-body text-body antialiased min-h-screen flex-col">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>


<div className="flex-1 flex flex-col relative">

<main className="flex-1 overflow-y-auto p-md md:p-xl relative z-0">
<div className="max-w-container-max mx-auto">

<a className="inline-flex items-center text-on-surface-variant font-muted text-muted hover:text-primary transition-colors mb-lg group" href="#">
<span className="material-symbols-outlined text-[18px] mr-xs group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back to Active Projects
                </a>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl" id="skeleton-view">
<div className="lg:col-span-8 flex flex-col gap-md">
<div className="flex gap-sm items-center"><div className="skeleton-shimmer h-10 w-3/4 rounded-lg"></div><div className="skeleton-shimmer h-8 w-20 rounded-lg"></div></div>
<div className="skeleton-shimmer h-6 w-1/3 rounded-lg mt-sm"></div>
<div className="flex gap-sm mt-md"><div className="skeleton-shimmer h-8 w-24 rounded-lg"></div><div className="skeleton-shimmer h-8 w-24 rounded-lg"></div></div>
<div className="mt-lg flex flex-col gap-sm">
<div className="skeleton-shimmer h-4 w-full rounded"></div>
<div className="skeleton-shimmer h-4 w-full rounded"></div>
<div className="skeleton-shimmer h-4 w-5/6 rounded"></div>
<div className="skeleton-shimmer h-4 w-full rounded mt-md"></div>
<div className="skeleton-shimmer h-4 w-4/5 rounded"></div>
</div>
</div>
<div className="lg:col-span-4">
<div className="skeleton-shimmer h-64 w-full rounded-xl"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl hidden opacity-0 transition-opacity duration-500" id="content-view">

<div className="lg:col-span-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
<h1 className="font-page-title text-page-title text-on-surface leading-tight">E-commerce React Migration</h1>
<span className="inline-flex items-center px-sm py-xs rounded-lg bg-primary-fixed text-primary font-label text-label uppercase tracking-wider shadow-sm shrink-0">
<span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span> Open
                            </span>
</div>
<div className="flex items-center gap-md font-muted text-muted text-on-surface-variant mb-lg border-b border-outline-variant pb-md">
<div className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">schedule</span> 3 months duration</div>
<div className="w-1 h-1 rounded-full bg-outline"></div>
<div className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">group</span> Intermediate Level</div>
</div>
<div className="mb-lg">
<h3 className="font-card-title text-card-title text-on-surface mb-sm">Required Skills</h3>
<div className="flex flex-wrap gap-sm">
<span className="px-md py-xs bg-surface-container text-primary rounded-lg font-label text-label shadow-sm border border-transparent hover:border-primary-fixed transition-colors cursor-default">React</span>
<span className="px-md py-xs bg-surface-container text-primary rounded-lg font-label text-label shadow-sm border border-transparent hover:border-primary-fixed transition-colors cursor-default">Next.js</span>
<span className="px-md py-xs bg-surface-container text-primary rounded-lg font-label text-label shadow-sm border border-transparent hover:border-primary-fixed transition-colors cursor-default">TypeScript</span>
<span className="px-md py-xs bg-surface-container text-primary rounded-lg font-label text-label shadow-sm border border-transparent hover:border-primary-fixed transition-colors cursor-default">Tailwind CSS</span>
</div>
</div>
<article className="prose max-w-none text-on-surface-variant font-body text-body space-y-md">
<h3 className="font-section-heading text-section-heading text-on-surface mb-sm">Project Overview</h3>
<p>We are looking for a dedicated mentee to assist in migrating a legacy monolithic e-commerce front-end to a modern React/Next.js stack. This project provides hands-on experience with modern component architecture, state management, and performance optimization techniques.</p>
<h3 className="font-section-heading text-section-heading text-on-surface mt-lg mb-sm">Key Responsibilities</h3>
<ul className="list-disc pl-lg space-y-sm">
<li>Deconstruct existing UI into reusable React components.</li>
<li>Implement strict TypeScript interfaces for API payloads.</li>
<li>Collaborate on weekly code reviews and architecture planning.</li>
<li>Refactor CSS to utilize Tailwind utility classes efficiently.</li>
</ul>
<div className="mt-xl p-md bg-surface-container-low rounded-xl border border-outline-variant">
<h4 className="font-card-title text-card-title text-on-surface mb-xs flex items-center gap-xs"><span className="material-symbols-outlined text-primary text-[20px]">lightbulb</span> Mentor Notes</h4>
<p className="text-sm font-muted text-muted">This is a high-impact project. I'm looking for someone who communicates clearly and isn't afraid to ask questions. Expect 5-10 hours of commitment per week.</p>
</div>
</article>
</div>

<div className="lg:col-span-4">
<aside className="sticky top-lg p-lg glass-card border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="font-section-heading text-section-heading text-on-surface mb-md pb-xs border-b border-outline-variant">Management Actions</h3>
<div className="flex flex-col gap-sm">
<a className="w-full bg-primary-container text-on-primary py-[10px] px-md rounded-lg font-card-title text-card-title hover:opacity-90 transition-opacity flex justify-center items-center gap-sm shadow-sm group" href="/my-projects/1/applicants">
<span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">group</span>
                                    View Applicants (12)
                                </a>
<a className="w-full bg-surface border border-outline-variant text-on-surface py-[10px] px-md rounded-lg font-card-title text-card-title hover:bg-surface-variant transition-colors flex justify-center items-center gap-sm mt-xs" href="/my-projects/1/edit">
<span className="material-symbols-outlined text-[18px]">edit</span> Edit Project
                                </a>
<button className="w-full bg-surface border border-outline-variant text-on-surface py-[10px] px-md rounded-lg font-card-title text-card-title hover:bg-surface-variant transition-colors flex justify-center items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">lock</span> Close Applications
                                </button>
</div>
<div className="mt-xl pt-md border-t border-outline-variant">
<p className="font-muted text-[12px] text-on-surface-variant mb-sm text-center">Danger Zone</p>
<button className="w-full bg-surface border border-error text-error py-[10px] px-md rounded-lg font-card-title text-card-title hover:bg-error-container hover:text-on-error-container transition-colors flex justify-center items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">delete</span> Delete Project
                                </button>
</div>
</aside>
</div>
</div>
</div>
</main>
</div>


    </div>
  );
}

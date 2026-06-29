"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col pt-16">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>




<main className="flex-grow w-full max-w-container-max mx-auto px-md md:px-lg py-lg md:py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl">

<div className="lg:col-span-8 space-y-xl">

<a className="inline-flex items-center text-secondary hover:text-primary transition-colors text-muted font-muted" href="/projects">
<span className="material-symbols-outlined mr-xs text-[18px]">arrow_back</span>
                Browse Projects
            </a>

<div className="space-y-md border-b border-outline-variant pb-lg">
<div className="flex flex-wrap items-center justify-between gap-md">
<h1 className="text-page-title font-page-title text-on-background">React Native Mobile App Re-architecture</h1>
<span className="px-sm py-xs rounded-full bg-secondary-container text-on-secondary-container text-label font-label uppercase tracking-widest">Open for Applications</span>
</div>
<div className="flex flex-wrap items-center gap-md">
<div className="flex flex-wrap gap-xs">
<span className="px-sm py-xs rounded-[6px] bg-[#EEF2FF] text-primary text-label font-label">React Native</span>
<span className="px-sm py-xs rounded-[6px] bg-[#EEF2FF] text-primary text-label font-label">TypeScript</span>
<span className="px-sm py-xs rounded-[6px] bg-[#EEF2FF] text-primary text-label font-label">Redux</span>
</div>
<div className="flex items-center text-muted font-muted text-secondary gap-xs border-l border-outline-variant pl-md ml-md">
<span className="material-symbols-outlined text-[18px]">schedule</span>
                        3 Months (Est. 10hrs/week)
                    </div>
</div>

<div className="flex items-center gap-md pt-sm">
<div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white font-card-title text-card-title">
                        SJ
                    </div>
<div>
<p className="text-label font-label text-secondary uppercase tracking-wider mb-[2px]">Mentor</p>
<a className="text-card-title font-card-title text-primary hover:underline" href="#">Sarah Jenkins</a>
<p className="text-muted font-muted text-secondary">Senior Mobile Engineer @ TechCorp</p>
</div>
</div>
</div>

<div className="space-y-md text-body font-body text-on-surface-variant leading-relaxed">
<h2 className="text-section-heading font-section-heading text-on-background mb-sm">Project Overview</h2>
<p>
                    We are looking for an enthusiastic mentee to help re-architect a legacy React Native application. The current application suffers from performance bottlenecks and technical debt due to outdated state management practices and deeply nested component trees.
                </p>
<p>
                    In this project, you will work closely with me to migrate the state management to Redux Toolkit, implement modern React Hooks patterns, and introduce a more robust testing suite using Jest and React Native Testing Library. This is a hands-on learning experience where you will tackle real-world engineering challenges.
                </p>
<h3 className="text-card-title font-card-title text-on-background mt-lg mb-sm">Key Learning Outcomes</h3>
<ul className="list-disc pl-md space-y-sm text-on-surface-variant">
<li>Deep understanding of React Native performance optimization techniques.</li>
<li>Mastery of modern state management with Redux Toolkit.</li>
<li>Experience in writing comprehensive unit and integration tests.</li>
<li>Exposure to a professional code review process and agile workflow.</li>
</ul>
</div>
</div>

<div className="lg:col-span-4">

<div className="sticky top-24 bg-surface border border-outline-variant rounded-xl shadow-sm hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow duration-150 p-lg space-y-md">
<h2 className="text-section-heading font-section-heading text-on-background border-b border-outline-variant pb-sm">Apply for this project</h2>

<div className="space-y-md pt-sm" id="apply-state-6">
<p className="text-muted font-muted text-secondary">You meet all basic requirements for this project.</p>
<form className="space-y-md">
<div className="space-y-xs">
<label className="text-label font-label text-on-surface" htmlFor="cover-letter">Message to Mentor <span className="text-error">*</span></label>
<textarea className="w-full rounded-lg border border-outline-variant px-[14px] py-[10px] text-body font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface placeholder-secondary" id="cover-letter" placeholder="Briefly explain why you're interested and what you hope to learn..." rows="5"></textarea>
<div className="flex justify-end text-label font-label text-secondary">
                                0 / 500
                            </div>
</div>
<div className="space-y-xs">
<label className="text-label font-label text-on-surface">Resume / CV (Optional)</label>
<div className="border-2 border-dashed border-outline-variant rounded-lg p-md text-center hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="material-symbols-outlined text-secondary mb-xs">upload_file</span>
<p className="text-muted font-muted text-on-surface-variant">Click to upload or drag and drop</p>
<p className="text-label font-label text-secondary mt-xs">PDF or DOCX (Max 5MB)</p>
</div>
</div>
<div className="flex flex-col gap-sm pt-sm border-t border-outline-variant">
<button className="w-full bg-[#4F46E5] text-white rounded-[8px] py-2 px-4 font-card-title text-card-title hover:bg-primary transition-colors disabled:opacity-40 disabled:pointer-events-none" type="submit">
                                Submit Application
                            </button>
<button className="w-full bg-white text-on-surface border border-[#E5E7EB] rounded-[8px] py-2 px-4 font-card-title text-card-title hover:bg-surface-container-low transition-colors" type="button">
                                Cancel
                            </button>
</div>
</form>
</div>


<div className="hidden space-y-md pt-sm" id="apply-state-1">
<p className="text-muted font-muted text-secondary">You must be signed in to apply for projects.</p>
<button className="w-full bg-[#4F46E5] text-white rounded-[8px] py-2 px-4 font-card-title text-card-title hover:bg-primary transition-colors">
                        Sign In to Apply
                    </button>
</div>

<div className="hidden pt-sm" id="apply-state-2">
<div className="bg-surface-container-high rounded-lg p-md text-center">
<span className="material-symbols-outlined text-secondary mb-xs">lock</span>
<p className="text-muted font-muted text-on-surface-variant">Applications are currently closed for this project.</p>
</div>
</div>

<div className="hidden space-y-md pt-sm" id="apply-state-3">
<div className="bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg p-md flex items-start gap-sm">
<span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
<div>
<p className="font-card-title text-card-title">Application Pending</p>
<p className="text-muted font-muted mt-xs">Applied on Oct 24, 2024</p>
</div>
</div>
<button className="w-full bg-white text-error border border-[#E5E7EB] rounded-[8px] py-2 px-4 font-card-title text-card-title hover:bg-error-container transition-colors">
                        Withdraw Application
                    </button>
</div>

<div className="hidden space-y-md pt-sm" id="apply-state-4">
<div className="bg-[#d1fae5] text-[#065f46] rounded-lg p-md flex items-start gap-sm">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<div>
<p className="font-card-title text-card-title">Application Accepted!</p>
<p className="text-muted font-muted mt-xs">The mentor has approved your application.</p>
</div>
</div>
<button className="w-full bg-[#4F46E5] text-white rounded-[8px] py-2 px-4 font-card-title text-card-title hover:bg-primary transition-colors flex justify-center items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">chat</span>
                        Go to Chat
                    </button>
</div>
</div>
</div>
</main>

<footer className="w-full py-xl px-lg flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline mt-auto">
<div className="text-label font-label text-on-surface-variant">© 2024 Mentor.me. All rights reserved.</div>
<div className="flex items-center gap-md">
<a className="text-on-surface-variant font-muted text-muted hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Terms of Service</a>
<a className="text-on-surface-variant font-muted text-muted hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Privacy Policy</a>
<a className="text-on-surface-variant font-muted text-muted hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Support</a>
</div>
</footer>

<div className="hidden fixed inset-0 z-[100] bg-background pt-20 px-md md:px-lg overflow-hidden" id="loading-skeleton">
<div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl h-full">
<div className="lg:col-span-8 space-y-lg">
<div className="w-32 h-4 rounded skeleton-shimmer mb-lg"></div>
<div className="w-3/4 h-10 rounded skeleton-shimmer"></div>
<div className="flex gap-sm">
<div className="w-20 h-6 rounded skeleton-shimmer"></div>
<div className="w-20 h-6 rounded skeleton-shimmer"></div>
</div>
<div className="flex items-center gap-md mt-lg">
<div className="w-10 h-10 rounded-full skeleton-shimmer"></div>
<div className="space-y-xs">
<div className="w-24 h-3 rounded skeleton-shimmer"></div>
<div className="w-40 h-4 rounded skeleton-shimmer"></div>
</div>
</div>
<div className="space-y-sm mt-xl">
<div className="w-full h-4 rounded skeleton-shimmer"></div>
<div className="w-full h-4 rounded skeleton-shimmer"></div>
<div className="w-5/6 h-4 rounded skeleton-shimmer"></div>
</div>
</div>
<div className="lg:col-span-4">
<div className="w-full h-96 rounded-xl skeleton-shimmer"></div>
</div>
</div>
</div>

    </div>
  );
}

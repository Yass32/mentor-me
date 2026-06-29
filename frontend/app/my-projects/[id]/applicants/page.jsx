"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface-container-low text-on-surface font-body min-h-screen pb-xl">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><header className="bg-surface-container-lowest border-b border-outline-variant px-md md:px-lg py-md sticky top-16 z-40 shadow-sm">
<div className="max-w-container-max mx-auto flex items-center gap-md">
<a aria-label="Back to project" className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors group" href="/my-projects/1">
<span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
</a>
<div className="flex flex-col">
<span className="font-muted text-muted text-on-surface-variant">Project Detail</span>
<h1 className="font-section-heading text-section-heading text-on-surface line-clamp-1">E-commerce React Migration</h1>
</div>
</div>
</header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<main className="max-w-4xl mx-auto px-md md:px-lg py-xl flex flex-col gap-xl">

<section className="flex flex-col gap-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 className="font-page-title text-page-title text-on-surface">Applicants</h2>
<p className="font-muted text-muted text-on-surface-variant mt-sm">Review and manage candidates for this project.</p>
</div>
</div>

<div className="flex flex-wrap gap-sm">
<button className="px-md py-sm rounded-full font-label text-label bg-surface-variant text-on-surface-variant hover:bg-surface-dim transition-colors">All</button>
<button className="px-md py-sm rounded-full font-label text-label bg-primary text-on-primary shadow-sm ring-1 ring-primary-container">Pending</button>
<button className="px-md py-sm rounded-full font-label text-label bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors">Accepted</button>
<button className="px-md py-sm rounded-full font-label text-label bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors">Rejected</button>
<button className="px-md py-sm rounded-full font-label text-label bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors">Withdrawn</button>
</div>
</section>

<section className="flex flex-col gap-md">

<article className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md md:p-lg flex flex-col gap-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-md min-w-0">
<div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-card-title text-card-title shrink-0">PM</div>
<div className="min-w-0">
<div className="flex items-center gap-sm flex-wrap">
<span className="font-card-title text-card-title text-on-surface">Priya Mehta</span>
<span className="px-2 py-0.5 rounded-full font-label text-label uppercase bg-[#D1FAE5] text-[#065F46]">Accepted</span>
<span className="px-2 py-0.5 rounded-full font-label text-label uppercase bg-[#FEF3C7] text-[#92400E]">Submitted</span>
</div>
<p className="font-muted text-muted text-on-surface-variant mt-xs">Applied on 12 Jan 2025</p>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-xs px-md py-sm rounded-lg bg-primary text-on-primary font-label text-label hover:opacity-90 transition-opacity shrink-0" href="/submission-review">
Review Submission
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</a>
</div>
<a className="sm:hidden inline-flex items-center justify-center gap-xs px-md py-sm rounded-lg bg-primary text-on-primary font-label text-label hover:opacity-90 transition-opacity w-full" href="/submission-review">
Review Submission
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</a>
</article><article className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md md:p-lg card-hover flex flex-col gap-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-md">

<div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-card-title text-card-title uppercase ring-2 ring-surface-container-lowest">
                            AC
                        </div>
<div>
<div className="flex items-center gap-sm">
<h3 className="font-card-title text-card-title text-on-surface">Alex Chen</h3>
<span className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-sm py-[2px] rounded-sm font-label text-label uppercase tracking-wider">Pending</span>
</div>
<p className="font-label text-label text-on-surface-variant mt-xs">Applied Oct 24, 2023</p>
</div>
</div>

<div className="hidden sm:flex items-center gap-sm">
<button className="px-md py-sm rounded-lg font-label text-label border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">Reject</button>
<button className="px-md py-sm rounded-lg font-label text-label bg-primary-container text-on-primary hover:bg-surface-tint transition-colors shadow-sm">Accept</button>
</div>
</div>
<div className="pl-0 sm:pl-[64px]">
<p className="font-body text-body text-on-surface line-clamp-2">
                        Hi, I have 3 years of experience with React and Redux, and I've recently completed a similar migration for a local retail client. I'm highly motivated to learn more about advanced performance optimization during this project.
                    </p>
<button className="font-label text-label text-primary mt-sm hover:underline focus:outline-none">Show more</button>
</div>

<div className="flex sm:hidden items-center gap-sm pt-sm border-t border-outline-variant/50">
<button className="flex-1 px-md py-sm rounded-lg font-label text-label border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">Reject</button>
<button className="flex-1 px-md py-sm rounded-lg font-label text-label bg-primary-container text-on-primary hover:bg-surface-tint transition-colors shadow-sm">Accept</button>
</div>

<div className="hidden mt-md pl-0 sm:pl-[64px] pt-md border-t border-error-container/30" id="reject-form-ac">
<div className="bg-error-container/10 rounded-lg p-md border border-error-container/50 flex flex-col gap-sm">
<label className="font-label text-label text-on-surface" htmlFor="reject-reason-ac">Reason for rejection (Optional - Only visible to you)</label>
<textarea className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface focus:border-error focus:ring-1 focus:ring-error outline-none resize-none" id="reject-reason-ac" placeholder="e.g., Lacks required testing experience..." rows="2"></textarea>
<div className="flex justify-end gap-sm mt-xs">
<button className="px-md py-sm rounded-lg font-label text-label text-on-surface-variant hover:bg-surface-variant transition-colors">Cancel</button>
<button className="px-md py-sm rounded-lg font-label text-label bg-error text-on-error hover:opacity-90 transition-opacity flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">block</span>
                                Confirm Rejection
                            </button>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md md:p-lg card-hover flex flex-col gap-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-card-title text-card-title uppercase ring-2 ring-surface-container-lowest">
                            SJ
                        </div>
<div>
<div className="flex items-center gap-sm">
<h3 className="font-card-title text-card-title text-on-surface">Sarah Jenkins</h3>
<span className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-sm py-[2px] rounded-sm font-label text-label uppercase tracking-wider">Pending</span>
</div>
<p className="font-label text-label text-on-surface-variant mt-xs">Applied Oct 23, 2023</p>
</div>
</div>

<div className="hidden sm:flex items-center gap-sm opacity-50 pointer-events-none">
<button className="px-md py-sm rounded-lg font-label text-label border border-outline-variant bg-surface-container-lowest text-on-surface">Reject</button>
<button className="px-md py-sm rounded-lg font-label text-label bg-primary-container text-on-primary">Accept</button>
</div>
</div>
<div className="pl-0 sm:pl-[64px]">
<p className="font-body text-body text-on-surface">
                        I'm a bootcamp grad looking to get my first real-world project under my belt. I know basic React hooks but haven't worked with complex state management yet. Eager to learn!
                    </p>
</div>

<div className="mt-md pl-0 sm:pl-[64px] pt-md border-t border-error-container/30">
<div className="bg-surface-container rounded-lg p-md border border-outline-variant flex flex-col gap-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
<div className="flex items-center gap-xs text-error mb-xs">
<span className="material-symbols-outlined text-[18px]">warning</span>
<span className="font-card-title text-card-title">Rejecting Candidate</span>
</div>
<label className="font-label text-label text-on-surface" htmlFor="reject-reason-sj">Reason for rejection (Optional - Only visible to you)</label>
<textarea className="w-full p-sm bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface focus:border-error focus:ring-1 focus:ring-error outline-none resize-none" id="reject-reason-sj" rows="2">Needs more foundation in state management before tackling this migration.</textarea>
<div className="flex justify-end gap-sm mt-xs">
<button className="px-md py-sm rounded-lg font-label text-label text-on-surface-variant hover:bg-surface-variant transition-colors">Cancel</button>
<button className="px-md py-sm rounded-lg font-label text-label bg-error text-on-error hover:opacity-90 transition-opacity shadow-sm">
                                Confirm Rejection
                            </button>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest/60 border border-outline-variant/50 rounded-xl p-md md:p-lg flex flex-col gap-md opacity-75">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-card-title text-card-title uppercase">
                            MK
                        </div>
<div>
<div className="flex items-center gap-sm">
<h3 className="font-card-title text-card-title text-on-surface-variant">Marcus Kim</h3>
<span className="bg-surface-variant text-on-surface-variant px-sm py-[2px] rounded-sm font-label text-label uppercase tracking-wider border border-outline-variant/30">Rejected</span>
</div>
<p className="font-label text-label text-on-surface-variant mt-xs">Reviewed Oct 22, 2023</p>
</div>
</div>
</div>
<div className="pl-0 sm:pl-[64px]">
<p className="font-body text-body text-on-surface-variant italic line-clamp-1">
                        Solid backend skills, but insufficient frontend experience for this specific role.
                    </p>
</div>
</article>
</section>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-md bg-on-surface/40 backdrop-blur-[2px] transition-opacity" id="accept-modal">

<div className="bg-surface-container-lowest rounded-xl shadow-lg w-full max-w-md overflow-hidden flex flex-col animate-[fadeIn_150ms_ease-out]">

<div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
</div>
<h3 className="font-section-heading text-section-heading text-on-surface">Accept Applicant?</h3>
</div>
<button className="text-on-surface-variant hover:bg-surface-variant p-xs rounded-full transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>

<div className="p-lg flex flex-col gap-md">
<p className="font-body text-body text-on-surface">
                    You are about to accept <strong className="font-card-title">Alex Chen</strong> for the <span className="font-medium text-primary">E-commerce React Migration</span> project.
                </p>
<div className="bg-tertiary-fixed border border-tertiary-fixed-dim rounded-lg p-md flex gap-sm items-start">
<span className="material-symbols-outlined text-tertiary mt-[2px]">info</span>
<div className="flex flex-col">
<span className="font-card-title text-card-title text-on-tertiary-fixed">Important Action</span>
<span className="font-muted text-muted text-on-tertiary-fixed-variant mt-xs">Accepting this candidate will automatically mark all other pending applicants as <strong className="uppercase text-[11px] bg-on-surface/10 px-[4px] rounded">Rejected</strong> and move the project status to <strong>Active</strong>.</span>
</div>
</div>
</div>

<div className="p-md md:p-lg border-t border-outline-variant flex justify-end gap-md bg-surface">
<button className="px-md py-sm rounded-lg font-label text-label text-on-surface hover:bg-surface-variant transition-colors border border-transparent">Cancel</button>
<button className="px-lg py-sm rounded-lg font-label text-label bg-primary-container text-on-primary hover:bg-surface-tint transition-colors shadow-sm flex items-center gap-sm">
                    Confirm Acceptance
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
</button>
</div>
</div>
</div>


    </div>
  );
}

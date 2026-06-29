"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body text-body min-h-screen flex flex-col">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>


<main className="flex-1 w-full max-w-container-max mx-auto px-gutter md:px-lg pt-[96px] md:pt-[104px] pb-[88px] md:pb-lg flex flex-col gap-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h1 className="font-page-title text-page-title text-on-surface">My Projects</h1>
<p className="font-muted text-muted text-on-surface-variant mt-xs">Manage your active mentoring projects and applicant reviews.</p>
</div>
<div className="flex flex-col sm:flex-row gap-md items-center">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none font-body text-body text-on-surface placeholder:text-outline-variant" placeholder="Search projects..." type="text" />
</div>
<select className="w-full sm:w-auto px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none font-body text-body text-on-surface appearance-none cursor-pointer">
<option value="ALL">All Statuses</option>
<option value="OPEN">Open</option>
<option value="CLOSED">Closed</option>
<option value="COMPLETED">Completed</option>
</select>

<a className="md:hidden w-full bg-primary-container text-on-primary-container font-label text-label px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-xs" href="/create-project">
<span className="material-symbols-outlined" style={{'fontSize':'18px'}}>add</span> Create Project
                </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">

<div className="bg-surface rounded-lg border border-outline-variant shadow-sm p-lg flex flex-col gap-md card-hover transition-all duration-150">
<div className="flex justify-between items-start gap-md">
<h3 className="font-card-title text-card-title text-on-surface line-clamp-2">React Native E-commerce App Mentorship</h3>
<span className="px-2 py-1 bg-surface-container-high text-primary font-label text-label rounded uppercase shrink-0">OPEN</span>
</div>
<div className="flex flex-col gap-xs font-muted text-muted text-on-surface-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">group</span>
<span>12 applicants</span>
</div>
<div className="flex items-center gap-sm mt-1">
<span className="px-2 py-1 bg-surface-container text-on-surface font-label text-[10px] rounded uppercase border border-outline-variant">Reviewing</span>
</div>
</div>
<div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-outline-variant">
<a className="px-3 py-1.5 bg-surface text-primary border border-primary rounded-lg font-label text-label hover:bg-surface-container-low transition-colors" href="/my-projects/1/applicants">
                        View Applicants (12)
                    </a>
<a className="px-3 py-1.5 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors" href="/my-projects/1/edit">
                        Edit
                    </a>
<button className="px-3 py-1.5 bg-surface text-error border border-error-container rounded-lg font-label text-label hover:bg-error-container transition-colors ml-auto">
                        Close
                    </button>
</div>
</div>

<div className="bg-surface rounded-lg border border-outline-variant shadow-sm p-lg flex flex-col gap-md card-hover transition-all duration-150">
<div className="flex justify-between items-start gap-md">
<h3 className="font-card-title text-card-title text-on-surface line-clamp-2">Backend Go Microservices Migration</h3>
<span className="px-2 py-1 bg-surface-variant text-on-surface-variant font-label text-label rounded uppercase shrink-0">CLOSED</span>
</div>
<div className="flex flex-col gap-xs font-muted text-muted text-on-surface-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">group</span>
<span>1 selected mentee</span>
</div>
<div className="flex items-center gap-sm mt-1">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label text-[10px] rounded uppercase">In Progress</span>
</div>
</div>
<div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-outline-variant">
<a className="px-3 py-1.5 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors" href="/submission-review">
                        View Mentee
                    </a>
<a className="px-3 py-1.5 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors" href="/my-projects/1/edit">
                        Edit
                    </a>
</div>
</div>

<div className="bg-surface rounded-lg border border-outline-variant shadow-sm p-lg flex flex-col gap-md card-hover transition-all duration-150">
<div className="flex justify-between items-start gap-md">
<h3 className="font-card-title text-card-title text-on-surface line-clamp-2">Vue.js Dashboard Component Library</h3>
<span className="px-2 py-1 bg-surface-variant text-on-surface-variant font-label text-label rounded uppercase shrink-0">CLOSED</span>
</div>
<div className="flex flex-col gap-xs font-muted text-muted text-on-surface-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">group</span>
<span>1 selected mentee</span>
</div>
<div className="flex items-center gap-sm mt-1">
<span className="px-2 py-1 bg-[#dcfce7] text-[#166534] font-label text-[10px] rounded uppercase">UNDER_REVIEW</span>
</div>
</div>
<div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-outline-variant">
<button className="px-3 py-1.5 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors">
                        View Submission
                    </button>
<button className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg font-label text-label hover:opacity-90 transition-opacity ml-auto">
                        Mark Completed
                    </button>
</div>
</div>

<div className="bg-surface rounded-lg border border-outline-variant shadow-sm p-lg flex flex-col gap-md opacity-80 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start gap-md">
<h3 className="font-card-title text-card-title text-on-surface line-clamp-2">Python Data Pipeline Refactoring</h3>
<span className="px-2 py-1 bg-surface-container-low text-outline font-label text-label rounded uppercase shrink-0">COMPLETED</span>
</div>
<div className="flex flex-col gap-xs font-muted text-muted text-on-surface-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Successfully mentored</span>
</div>
</div>
<div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-outline-variant">
<button className="px-3 py-1.5 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors">
                        View Project History
                    </button>
</div>
</div>
</div>
</main>



<div className="hidden fixed inset-0 z-[100] flex items-center justify-center px-gutter" id="closeModal">
<div className="absolute inset-0 bg-[#000000] opacity-50 backdrop-blur-sm"></div>
<div className="relative bg-surface rounded-xl shadow-xl w-full max-w-md p-lg flex flex-col gap-md z-10 transform scale-95 opacity-0 transition-all duration-200" id="closeModalContent">
<div className="flex items-center gap-sm text-error">
<span className="material-symbols-outlined">warning</span>
<h3 className="font-section-heading text-section-heading">Close Project?</h3>
</div>
<p className="font-body text-body text-on-surface-variant">Are you sure you want to close this project? It will no longer accept new applicants, and current pending applications will be archived.</p>
<div className="flex justify-end gap-sm mt-md pt-md border-t border-outline-variant">
<button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors">Cancel</button>
<button className="px-4 py-2 bg-[#EF4444] text-white rounded-lg font-label text-label hover:bg-opacity-90 transition-opacity">Confirm Close</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center px-gutter" id="completeModal">
<div className="absolute inset-0 bg-[#000000] opacity-50 backdrop-blur-sm"></div>
<div className="relative bg-surface rounded-xl shadow-xl w-full max-w-md p-lg flex flex-col gap-md z-10 transform scale-95 opacity-0 transition-all duration-200" id="completeModalContent">
<div className="flex items-center gap-sm text-primary">
<span className="material-symbols-outlined text-[24px]">task_alt</span>
<h3 className="font-section-heading text-section-heading">Mark as Completed?</h3>
</div>
<p className="font-body text-body text-on-surface-variant">Are you ready to mark this mentorship project as completed? This will finalize the project and notify the mentee.</p>
<div className="flex justify-end gap-sm mt-md pt-md border-t border-outline-variant">
<button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg font-label text-label hover:bg-surface-container-highest transition-colors">Cancel</button>
<button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label text-label hover:opacity-90 transition-opacity">Mark Completed</button>
</div>
</div>
</div>


    </div>
  );
}

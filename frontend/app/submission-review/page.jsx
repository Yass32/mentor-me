"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body text-body antialiased min-h-screen flex-col">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<div className="flex-1 p-lg bg-surface-container-lowest h-screen overflow-y-auto">
<h1 className="font-page-title text-page-title text-primary mb-xl">Applicants</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md opacity-30 pointer-events-none">

<div className="bg-surface rounded-lg border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 rounded-full bg-secondary-container"></div>
<div>
<div className="font-card-title text-card-title text-on-surface">John Doe</div>
<div className="font-muted text-muted text-on-surface-variant">E-commerce API</div>
</div>
</div>
<div className="bg-surface-variant h-2 rounded-full w-3/4"></div>
</div>
<div className="bg-surface rounded-lg border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 rounded-full bg-secondary-container"></div>
<div>
<div className="font-card-title text-card-title text-on-surface">Alice Smith</div>
<div className="font-muted text-muted text-on-surface-variant">Task Manager React</div>
</div>
</div>
<div className="bg-surface-variant h-2 rounded-full w-1/2"></div>
</div>
<div className="bg-surface rounded-lg border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 rounded-full bg-secondary-container"></div>
<div>
<div className="font-card-title text-card-title text-on-surface">Robert Jones</div>
<div className="font-muted text-muted text-on-surface-variant">Python Data Scraper</div>
</div>
</div>
<div className="bg-surface-variant h-2 rounded-full w-full"></div>
</div>
</div>
</div>

<div aria-hidden="true" className="fixed inset-0 bg-on-surface/20 backdrop-blur z-40 transition-opacity"></div>

<div className="fixed inset-y-0 right-0 z-50 w-full md:w-[45%] lg:w-[40%] xl:w-[35%] max-w-2xl bg-surface shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)] flex flex-col transform transition-transform duration-300 ease-in-out border-l border-outline-variant">

<div className="flex items-center justify-between px-lg py-md border-b border-outline-variant bg-surface-container-low">
<div className="flex items-center gap-md">
<img alt="Sarah Jenkins profile" className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A close-up, well-lit professional portrait of a young woman with a warm expression, meant to serve as a user avatar. She has dark hair tied back. The lighting is soft and studio-like, fitting a modern corporate web application profile picture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6uU_iTlYiSsffx5BRpg0lFxK7X4qY-QjI-LwlbNEPXTrNhZ24BKuCGAzkOorld7eM9SF_p9pMxqR7n4iG3uFlS8XkdXXP6X0PO-1e43hC_0eRtgAhX4RrIlwGP8JtlvZR8Yvwtdvl3IQpjnjHqF-Fki_XwSKR8pEzolsw7sKFJjDCcAFb7YhLC3xmNTFMEV8bON_9Ob0dP3PmIdw1PyfnGfm2IHO5FY5FzF121q_WlT4NeXn76q-PkofKHiu5eYdZxajTJppgoO8" />
<div>
<h2 className="font-section-heading text-section-heading text-on-surface">Sarah Jenkins</h2>
<p className="font-muted text-muted text-on-surface-variant">Project: Full-Stack E-Commerce Platform</p>
</div>
</div>
<a aria-label="Close panel" className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant" href="/my-projects/1/applicants">
<span className="material-symbols-outlined text-[24px]">close</span>
</a>
</div>

<div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">

<section>
<div className="flex items-center justify-between mb-sm">
<h3 className="font-card-title text-card-title text-on-surface">Current Submission</h3>
<span className="bg-primary-container text-on-primary px-sm py-xs rounded text-[10px] uppercase font-bold tracking-wider">Submitted</span>
</div>
<div className="bg-surface-container rounded-lg p-md border border-outline-variant shadow-sm mb-lg">
<div className="flex items-center gap-sm mb-md text-on-surface">
<span className="material-symbols-outlined text-primary">code</span>
<a className="font-body text-body text-primary hover:underline flex items-center gap-xs" href="#">
                            github.com/sjenkins/ecommerce-platform
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
<p className="font-muted text-muted text-on-surface-variant">
                        "I've completed the integration of Stripe for payments and set up the Redux store for cart management. Looking forward to feedback on the API route structure."
                    </p>
</div>



<div className="bg-surface rounded-lg border-2 border-primary-container shadow-sm overflow-hidden">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-primary-container text-[20px]">rate_review</span>
<span className="font-card-title text-card-title text-on-surface">Request Revisions</span>
</div>
<div className="p-md">
<label className="sr-only" htmlFor="feedback">Provide Feedback</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-md p-sm font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" id="feedback" placeholder="Detail the revisions needed... (e.g., 'The API routes need better error handling...')" rows="4">The overall structure looks good, but the payment confirmation route lacks sufficient error handling. Please add try/catch blocks and ensure the user gets a friendly error message if the Stripe API fails.</textarea>
<div className="flex justify-end gap-md mt-md">
<button className="bg-surface text-on-surface-variant border border-outline-variant font-label text-label py-sm px-md rounded-lg hover:bg-surface-variant transition-colors">
                                Cancel
                            </button>
<button className="bg-primary-container text-on-primary font-label text-label py-sm px-md rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[16px]">send</span>
                                Send Feedback
                            </button>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-md">
<h3 className="font-card-title text-card-title text-on-surface mb-xs">Status Indicators</h3>

<div className="bg-surface-container-low border border-primary-fixed-dim rounded-lg p-sm flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">hourglass_empty</span>
</div>
<div>
<div className="font-label text-label text-on-surface uppercase tracking-wider mb-xs text-[10px]">Current Status</div>
<div className="font-body text-body text-on-surface">Under Review by Mentor</div>
</div>
</div>

<div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-sm flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-[#16a34a] flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined text-[18px]" data-weight="fill">check_circle</span>
</div>
<div>
<div className="font-label text-label text-[#166534] uppercase tracking-wider mb-xs text-[10px]">Status</div>
<div className="font-body text-body text-[#15803d]">Approved - Milestone Completed</div>
</div>
</div>
</section>
<hr className="border-outline-variant" />

<section>
<h3 className="font-card-title text-card-title text-on-surface mb-md">Submission History</h3>
<div className="relative border-l-2 border-surface-variant ml-sm space-y-lg pb-md">

<div className="relative pl-lg">
<div className="absolute w-3 h-3 bg-surface-variant rounded-full -left-[7.5px] top-1.5 border-2 border-surface"></div>
<div className="flex justify-between items-start mb-xs">
<span className="font-card-title text-card-title text-on-surface text-[14px]">Attempt #1</span>
<span className="font-muted text-muted text-on-surface-variant text-[12px]">Oct 12, 2023</span>
</div>
<div className="flex items-center gap-sm mb-sm">
<a className="font-muted text-muted text-primary hover:underline text-[13px] flex items-center gap-xs" href="#">
                                4f8a2b9 (Commit)
                                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>

<div className="bg-[#fffbeb] border border-[#fde68a] rounded-md p-sm mt-sm flex items-start gap-sm">
<span className="material-symbols-outlined text-[#d97706] text-[18px] mt-xs">forum</span>
<div>
<span className="font-label text-label text-[#92400e] block mb-xs">Mentor Feedback</span>
<p className="font-muted text-muted text-[#b45309] text-[13px]">
                                    "Good start, but missing authentication middleware on the protected routes. Please implement JWT validation before resubmitting."
                                </p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

    </div>
  );
}

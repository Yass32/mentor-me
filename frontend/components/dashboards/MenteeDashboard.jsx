"use client";
import Link from "next/link";
import { useEffect } from "react";
import ApplicationChart from "@/components/ApplicationChart";

export default function MenteeDashboard() {
  useEffect(() => {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.style.display = "none";
    const open = () => { modal.style.display = "flex"; };
    const close = () => { modal.style.display = "none"; };
    const openers = document.querySelectorAll("[data-open-modal]");
    const closers = document.querySelectorAll("[data-close-modal]");
    openers.forEach((el) => el.addEventListener("click", open));
    closers.forEach((el) => el.addEventListener("click", close));
    const onBackdrop = (e) => { if (e.target === modal) close(); };
    modal.addEventListener("click", onBackdrop);
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);

    const tabO = document.getElementById("tab-overview");
    const tabS = document.getElementById("tab-submission");
    const cO = document.getElementById("content-overview");
    const cS = document.getElementById("content-submission");
    const onA = ["border-primary", "text-primary", "font-bold"];
    const onI = ["text-secondary", "border-transparent", "hover:border-outline-variant", "hover:text-on-surface"];
    const show = (tab) => {
      if (!tabO || !tabS || !cO || !cS) return;
      const ov = tab === "overview";
      tabO.classList.toggle("border-primary", ov); tabO.classList.toggle("text-primary", ov); tabO.classList.toggle("font-bold", ov);
      tabS.classList.toggle("border-primary", !ov); tabS.classList.toggle("text-primary", !ov); tabS.classList.toggle("font-bold", !ov);
      onI.forEach((c) => tabO.classList.toggle(c, !ov));
      onI.forEach((c) => tabS.classList.toggle(c, ov));
      cO.classList.toggle("hidden", !ov); cO.classList.toggle("flex", ov);
      cS.classList.toggle("hidden", ov); cS.classList.toggle("flex", !ov);
    };
    const fO = () => show("overview");
    const fS = () => show("submission");
    tabO && tabO.addEventListener("click", fO);
    tabS && tabS.addEventListener("click", fS);

    const mobileOpen = document.querySelector('[aria-label="Open menu"]');
    const mobileNav = document.getElementById("mobile-nav");
    const mobileClose = document.querySelector('[aria-label="Close menu"]');
    const mOpen = () => mobileNav && mobileNav.classList.remove("-translate-x-full");
    const mClose = () => mobileNav && mobileNav.classList.add("-translate-x-full");
    mobileOpen && mobileOpen.addEventListener("click", mOpen);
    mobileClose && mobileClose.addEventListener("click", mClose);

    return () => {
      openers.forEach((el) => el.removeEventListener("click", open));
      closers.forEach((el) => el.removeEventListener("click", close));
      modal.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKey);
      tabO && tabO.removeEventListener("click", fO);
      tabS && tabS.removeEventListener("click", fS);
      mobileOpen && mobileOpen.removeEventListener("click", mOpen);
      mobileClose && mobileClose.removeEventListener("click", mClose);
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body text-body min-h-screen flex flex-col antialiased">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>



<main className="flex-grow w-full max-w-container-max mx-auto px-md md:px-lg py-xl flex flex-col gap-xl">



<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg stagger-children">

<div data-animate className="lg:col-span-1 bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl p-lg shadow-sm hover:shadow-card-elevated transition-shadow duration-200 flex flex-col card-tilt card-border-animated">
<h2 className="font-card-title text-card-title text-on-surface mb-md">Application Overview</h2>
<div className="flex-grow relative min-h-[200px] w-full flex items-center justify-center">
<ApplicationChart />
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-lg stagger-children">

<div data-animate className="bg-primary-fixed border border-primary-fixed-dim rounded-xl p-lg shadow-sm hover:shadow-card-elevated flex flex-col justify-between relative overflow-hidden group card-tilt card-border-animated animation-delay-100">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 animate-pulse-soft"></div>
<div>
<div className="flex items-center gap-sm text-on-primary-fixed mb-xs">
<span className="material-symbols-outlined animate-glow-pulse" style={{'fontVariationSettings':'\'FILL\' 1'}}>bolt</span>
<span className="font-label text-label uppercase">Action Required</span>
</div>
<h3 className="font-section-heading text-section-heading text-on-primary-fixed mt-sm">You have 1 project needing revision</h3>
</div>
<button className="mt-lg self-start bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-label text-label uppercase tracking-wider hover:bg-primary-fixed-dim hover:shadow-glow-primary transition-all duration-200 flex items-center gap-sm btn-shimmer hover:-translate-y-[1px]">
                        Review Feedback <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl p-lg shadow-sm hover:shadow-card-elevated flex flex-col justify-between card-tilt card-border-animated animation-delay-200">
<div>
<span className="font-label text-label text-secondary uppercase tracking-wider">Next Session</span>
<div className="mt-md flex items-start gap-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center border border-outline-variant text-on-surface">
<span className="font-label text-[10px] uppercase font-bold text-secondary">Oct</span>
<span className="font-section-heading text-section-heading leading-none">24</span>
</div>
<div>
<h4 className="font-card-title text-card-title text-on-surface">System Design Review</h4>
<p className="font-muted text-muted text-on-surface-variant flex items-center gap-xs mt-xs">
<span className="material-symbols-outlined text-[14px]">schedule</span> 14:00 - 15:00
                                </p>
</div>
</div>
</div>
<div className="mt-md pt-md border-t border-outline-variant flex items-center gap-sm">
<img alt="Mentor" className="w-6 h-6 rounded-full avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIOAXbCmqAPkK3HV3_ccIPHwmdZJ3uU2y_3sdYwHRe2pYZ2xqyqiiqHyp_WMiGS8mmmQyHvz_if8Y_1H4OpWAN8TCxNL8flvVd5EQcTMjtnWn42wi95rFsaswflRGZxHh4IuEAs-pk2pgcKhvNuLGIdVNSytzq6Ju8WiF9Zo04E0NweQE3f6VKenyfqzIjmkN1z7-K9uRhVICnjxl1OP0MpKjxf64SO2UO_90qaR_pdB3Muf-DDCboxh4rYkIJ0J514tlYK_XFy6Q" />
<span className="font-muted text-muted text-on-surface-variant">with Sarah J.</span>
</div>
</div>
</div>
</div>

<section className="flex flex-col gap-md">
<h2 className="font-section-heading text-section-heading text-on-surface opacity-0 animate-fade-in-up">Your Applications</h2>
<div className="bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/50 shadow-sm overflow-hidden opacity-0 animate-fade-in-up animation-delay-100">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-md px-lg font-label text-label text-secondary uppercase tracking-wider">Project Name</th>
<th className="py-md px-lg font-label text-label text-secondary uppercase tracking-wider">Status</th>
<th className="py-md px-lg font-label text-label text-secondary uppercase tracking-wider">Applied Date</th>
<th className="py-md px-lg font-label text-label text-secondary uppercase tracking-wider">Notes / Reason</th>
<th className="py-md px-lg w-12"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr data-open-modal className="hover:bg-primary-fixed/30 transition-colors duration-200 cursor-pointer group table-row-animated">
<td className="py-md px-lg font-body text-body font-medium text-on-surface group-hover:text-primary transition-colors">
                                    React Performance Optimization
                                </td>
<td className="py-md px-lg">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-surface-tint/10 text-surface-tint font-label text-[11px] uppercase font-bold tracking-wide border border-surface-tint/20 group-hover:bg-surface-tint/20 transition-colors">
                                        Accepted
                                    </span>
</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant">Oct 12, 2024</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant">—</td>
<td className="py-md px-lg text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
</td>
</tr>

<tr className="hover:bg-surface-container-high transition-colors duration-200 cursor-pointer group table-row-animated">
<td className="py-md px-lg font-body text-body font-medium text-on-surface group-hover:text-primary transition-colors">
                                    Go Microservices Foundation
                                </td>
<td className="py-md px-lg">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label text-[11px] uppercase font-bold tracking-wide border border-tertiary-fixed-dim/50 group-hover:bg-tertiary-fixed-dim transition-colors">
                                        Pending
                                    </span>
</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant">Oct 18, 2024</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant">Under review by mentor</td>
<td className="py-md px-lg text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">open_in_new</span>
</td>
</tr>

<tr className="hover:bg-surface-container-high transition-colors duration-200 cursor-pointer group table-row-animated">
<td className="py-md px-lg font-body text-body font-medium text-on-surface group-hover:text-primary transition-colors">
                                    Advanced GraphQL
                                </td>
<td className="py-md px-lg">
<span className="inline-flex items-center px-sm py-xs rounded-full bg-error-container text-on-error-container font-label text-[11px] uppercase font-bold tracking-wide border border-error/20 group-hover:bg-error-container/80 transition-colors">
                                        Rejected
                                    </span>
</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant">Sep 28, 2024</td>
<td className="py-md px-lg font-muted text-muted text-on-surface-variant truncate max-w-[200px]">Requires more frontend experience</td>
<td className="py-md px-lg text-right">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">open_in_new</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full py-xl mt-auto border-t border-outline-variant/50 dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-lg md:gap-0">
<div className="font-section-heading text-section-heading font-bold text-on-surface dark:text-inverse-on-surface">
                Mentor.me
            </div>
<div className="flex flex-wrap justify-center gap-md md:gap-lg font-muted text-muted text-on-secondary-fixed-variant dark:text-secondary-fixed-dim">
<a className="opacity-80 hover:opacity-100 transition-all duration-200 nav-link-animated" href="#">Privacy Policy</a>
<a className="opacity-80 hover:opacity-100 transition-all duration-200 nav-link-animated" href="#">Terms of Service</a>
<a className="opacity-80 hover:opacity-100 transition-all duration-200 nav-link-animated" href="#">Contact Support</a>
<a className="opacity-80 hover:opacity-100 transition-all duration-200 nav-link-animated" href="#">Community Guidelines</a>
</div>
<div className="font-muted text-muted text-on-secondary-fixed-variant dark:text-secondary-fixed-dim opacity-80">
                © 2024 Mentor.me. All rights reserved.
            </div>
</div>
</footer>


<div className="fixed inset-0 z-[100] flex items-center justify-center p-md sm:p-lg bg-on-background/40 backdrop-blur-sm transition-opacity duration-300" id="project-modal">

<div className="bg-surface/95 backdrop-blur-md rounded-xl w-full max-w-[680px] flex flex-col shadow-card-float border border-outline-variant/50 overflow-hidden relative max-h-[921px] animate-scale-in">

<div className="flex justify-between items-center p-lg border-b border-outline-variant bg-surface-bright/80 backdrop-blur-sm">
<h3 className="font-section-heading text-section-heading text-on-surface">Project Details</h3>
<button data-close-modal className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container hover:text-on-surface hover:rotate-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<div className="flex border-b border-outline-variant px-lg bg-surface-container-lowest/80 backdrop-blur-sm">
<button className="py-md px-sm mr-md font-label text-label uppercase tracking-wider font-bold border-b-2 border-primary text-primary transition-colors focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary" id="tab-overview">
                    Overview
                </button>
<button className="py-md px-sm font-label text-label uppercase tracking-wider text-secondary hover:text-on-surface border-b-2 border-transparent hover:border-outline-variant transition-colors focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-outline-variant hover:after:w-full after:transition-all after:duration-200" id="tab-submission">
                    Submission
                </button>
</div>

<div className="overflow-y-auto flex-grow p-lg">

<div className="flex flex-col gap-lg animate-fade-in" id="content-overview">

<div>
<div className="flex items-start justify-between gap-md mb-sm">
<h2 className="font-section-heading text-[20px] font-semibold text-on-surface leading-tight">React Performance Optimization</h2>
<span className="shrink-0 inline-flex items-center px-sm py-xs rounded-full bg-surface-tint/10 text-surface-tint font-label text-[11px] uppercase font-bold tracking-wide border border-surface-tint/20 animate-pulse-soft">
                                Active Project
                            </span>
</div>
<p className="font-body text-body text-on-surface-variant">Identify and resolve rendering bottlenecks in a complex React dashboard application using modern profiling tools.</p>
</div>

<div className="grid grid-cols-2 gap-md p-md bg-surface-container-low rounded-lg border border-outline-variant/50 hover:border-primary/20 transition-colors">
<div>
<span className="block font-label text-label text-secondary mb-xs uppercase">Duration</span>
<div className="flex items-center gap-xs font-body text-body text-on-surface font-medium">
<span className="material-symbols-outlined text-[18px] text-outline">schedule</span> 4 Weeks
                            </div>
</div>
<div>
<span className="block font-label text-label text-secondary mb-xs uppercase">Submission Status</span>
<span className="inline-flex items-center gap-xs font-body text-[13px] font-medium text-tertiary px-sm py-xs bg-tertiary-fixed rounded-md border border-tertiary-fixed-dim/50 hover:shadow-sm transition-shadow">
<span className="material-symbols-outlined text-[14px]" style={{'fontVariationSettings':'\'FILL\' 1'}}>error</span> Revision Requested
                            </span>
</div>
</div>

<div>
<span className="block font-label text-label text-secondary mb-sm uppercase">Required Skills</span>
<div className="flex flex-wrap gap-sm">
<span className="px-sm py-xs bg-[#EEF2FF] text-[#4F46E5] rounded-md font-label text-[12px] border border-[#4F46E5]/20 skill-chip">React</span>
<span className="px-sm py-xs bg-[#EEF2FF] text-[#4F46E5] rounded-md font-label text-[12px] border border-[#4F46E5]/20 skill-chip">Profiling</span>
<span className="px-sm py-xs bg-[#EEF2FF] text-[#4F46E5] rounded-md font-label text-[12px] border border-[#4F46E5]/20 skill-chip">TypeScript</span>
</div>
</div>

<div className="mt-sm pt-lg border-t border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-md">
<img alt="Mentor Sarah" className="w-10 h-10 rounded-full object-cover border border-outline-variant shadow-sm avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0YDBr7HFAVK4F4dXPq-da3Kvc9HXEFQVMa9vYMRd0yyn6Lw4MA38XqhsWeX9yA2ulbZhRBQelfvBHsueRF2EhDTXcZAsH3BNFWXxgBa7f0TWgWKyIx1RGYmMQYUa74wT7GDkGG_q2IZa52BguX66eVG7fdVTODRVW2S5yRkebmK5XMeaMV7lU-jeQSM7BoYFHhnew0yR3pk0mwaMP5umw-OvdIkP3NU0ytcWc4lu5RGEGU1dPZSv7BbegicUYXqBTw2BTitZz1dQ" />
<div>
<span className="block font-label text-label text-secondary uppercase mb-[2px]">Your Mentor</span>
<span className="block font-card-title text-card-title text-on-surface">Sarah Jenkins</span>
</div>
</div>
<button className="bg-primary-container text-on-primary-container hover:bg-surface-tint hover:text-white hover:shadow-glow-primary px-md py-sm rounded-lg font-label text-label uppercase tracking-wider transition-all duration-200 flex items-center gap-sm shadow-sm hover:-translate-y-[1px] btn-shimmer group">
<span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">chat</span> Go to Chat
                        </button>
</div>
</div>

<div className="hidden flex-col gap-lg animate-fade-in" id="content-submission">

<div className="bg-error-container text-on-error-container p-md rounded-lg flex items-start gap-md border border-error/20 hover:shadow-sm transition-shadow">
<span className="material-symbols-outlined shrink-0 mt-[2px] animate-pulse-soft" style={{'fontVariationSettings':'\'FILL\' 1'}}>warning</span>
<div>
<h4 className="font-card-title text-[15px] font-bold mb-xs">Revision Required</h4>
<p className="font-body text-[14px] opacity-90">Your previous submission needs a few adjustments before it can be approved. Please review the mentor's feedback below.</p>
</div>
</div>

<div className="bg-[#FFFBEB] text-[#92400E] p-md rounded-lg border border-[#FDE68A] relative hover:shadow-sm transition-shadow">
<div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-white border border-[#FDE68A] flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
<img alt="Mentor Sarah" className="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8pYqGlTE9Ie4r7pR8aBl6_08IFRQ5mtmcBQM-usfwvDrRO-22CF2eVDPKx_LhqC7ajqct3_l22Glqxy6xo6zTVvPeTk4KAtOK65Aqeu_tdKq2ANcfnlxEQ99wtFUj_-Jb2CqVVP03d-LbycPYBttMYTaelp2EOAI2uOW0LFVae4j1DqRcLu6yFonqnJBXuTj1tohzeN5oB-UgWK_pM8N9NRNt3AyLG-2rt-TgO7Ms9CKA_ovk15D5FYK1S1PufJxYTWvyAOMX6yY" />
</div>
<div className="ml-sm">
<span className="block font-label text-[11px] uppercase tracking-wider font-bold mb-xs opacity-70">Mentor Feedback - Oct 22</span>
<p className="font-body text-[14px] leading-relaxed">"Great job on identifying the re-renders in the main list component! However, the memoization strategy used in `ListItem.tsx` is actually causing a performance degradation due to shallow comparison of complex objects. Let's look at passing primitive IDs instead."</p>
</div>
</div>

<form className="flex flex-col gap-md mt-sm group">
<div>
<label className="block font-label text-label text-on-surface mb-xs font-semibold group-focus-within:text-primary transition-colors" htmlFor="github-url">Updated GitHub Pull Request URL</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px] pointer-events-none group-focus-within:text-primary transition-colors">link</span>
<input className="w-full pl-10 pr-10 py-[10px] bg-surface-container-lowest border border-outline-variant rounded-[8px] font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-primary/30 placeholder-outline" id="github-url" required type="url" defaultValue="https://github.com/user/repo/pull/42" />
<span className="material-symbols-outlined absolute right-3 text-[#10B981] text-[18px] pointer-events-none" title="Valid URL format">check_circle</span>
</div>
<p className="font-muted text-[12px] text-secondary mt-xs">Ensure your PR is public and specifically addresses the requested changes.</p>
</div>
<div className="flex justify-end pt-sm">
<button className="bg-primary text-white hover:shadow-glow-primary px-xl py-sm rounded-lg font-label text-label uppercase tracking-wider hover:bg-surface-tint transition-all duration-200 shadow-sm font-bold hover:-translate-y-[1px] btn-shimmer" type="submit">
                                Submit Revision
                            </button>
</div>
</form>

<div className="mt-lg pt-lg border-t border-outline-variant">
<h4 className="font-section-heading text-[16px] text-on-surface mb-md">Submission History</h4>
<div className="relative pl-sm border-l-2 border-surface-container-high space-y-md">
<div className="relative hover:-translate-y-[1px] transition-transform">
<div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-error border-[2px] border-surface shadow-[0_0_8px_rgba(186,26,26,0.3)]"></div>
<div className="pl-md">
<span className="block font-label text-[11px] text-secondary">Oct 22, 2024 - 14:30</span>
<p className="font-body text-[14px] text-on-surface font-medium">Attempt #1 - <span className="text-error">Revision Requested</span></p>
<a className="font-muted text-[13px] text-primary hover:text-primary-fixed-dim hover:underline flex items-center gap-xs mt-xs inline-flex transition-colors" href="#">
<span className="material-symbols-outlined text-[14px]">link</span> github.com/user/repo/pull/41
                                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </div>
  );
}

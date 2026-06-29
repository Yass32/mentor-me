"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<main className="flex-1 pt-24 pb-xl px-md md:px-xl max-w-container-max mx-auto w-full">

<div className="relative mb-xl opacity-0 animate-fade-in-up">
<div className="h-48 w-full rounded-xl bg-gradient-to-r from-primary to-primary-container overflow-hidden relative shadow-sm">
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{'backgroundImage':'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 'backgroundSize':'24px 24px'}}></div>
</div>
<div className="px-lg -mt-10 flex flex-col md:flex-row md:items-end gap-md">
<div className="relative group">
<img alt="Mentee Avatar" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-surface shadow-lg object-cover avatar-glow group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfF_ZH1WU0bfqKZzoHqQ4YxCVHLcYTSedwQGEIaSI_69ysF5CyeGzWMc17wAKiNJjRCmZao9GqPq36kxE3kWErBmGSA9SEZte3RYYc_96PQ2ONtIdVRc19NgAbFK-nTBSPOTbbuvHRJ1zitMZ8gl9xgZSDAQZrHnJTpGv_Hun2QROLcvJtNI-29aDWGH7HgVSnLmZofcuv2wmzaufkAtwTtoQue2CZLQmixaF9ZVfYbzXcAJbIYXWaCkTAS0ZKGand2DKEY2ttrcY" />
<div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-surface rounded-full animate-pulse-soft"></div>
</div>
<div className="flex-1 pb-1">
<div className="flex flex-wrap items-center gap-sm">
<h1 className="text-[24px] font-bold text-on-surface">Jordan Chen</h1>
<span className="px-sm py-1 bg-primary-container text-on-primary-container text-label font-label rounded-lg uppercase tracking-wider shadow-sm">Mentee</span>
</div>
<p className="text-muted font-muted text-secondary flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        Member since January 2024
                    </p>
</div>
<div className="flex gap-sm pb-1 mt-md md:mt-0">
<button className="px-md py-2 bg-primary text-on-primary rounded-lg font-label text-label hover:shadow-glow-primary hover:-translate-y-[1px] transition-all flex items-center gap-xs btn-shimmer shadow-sm">
<span className="material-symbols-outlined text-[18px]">mail</span> Message
                    </button>
<button className="px-md py-2 bg-surface-container-lowest border border-outline-variant text-secondary rounded-lg font-label text-label hover:bg-surface-container hover:border-primary/30 transition-all shadow-sm">
                        Follow
                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-xl stagger-children">

<div className="md:col-span-4 space-y-xl">

<section data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm p-lg rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-card-elevated transition-shadow duration-300 card-border-animated">
<h2 className="font-section-heading text-section-heading mb-md">About</h2>
<p className="text-body font-body text-secondary leading-relaxed">
                        Junior Frontend Developer passionate about creating accessible and performant user interfaces. Currently focusing on mastering React, Tailwind CSS, and Web Accessibility standards. Eager to bridge the gap between design and code.
                    </p>
</section>

<section data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm p-lg rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-card-elevated transition-shadow duration-300 card-border-animated animation-delay-100">
<h2 className="font-section-heading text-section-heading mb-md">Skills</h2>
<div className="flex flex-wrap gap-sm">
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">React</span>
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">TypeScript</span>
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">Tailwind CSS</span>
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">UI Design</span>
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">Git</span>
<span className="px-md py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-label font-label skill-chip">Figma</span>
</div>
</section>
</div>

<div className="md:col-span-8 space-y-xl stagger-children">

<section data-animate className="animation-delay-200">
<div className="flex justify-between items-center mb-md">
<h2 className="font-section-heading text-section-heading">Completed Projects</h2>
<a className="text-primary font-label text-label hover:underline hover:text-primary-fixed-dim transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-md stagger-children">

<div data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl overflow-hidden group hover:shadow-card-elevated transition-all duration-300 card-tilt card-border-animated animation-delay-300">
<div className="h-32 bg-surface-container-high relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
<img alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxzQs48xK0S_1nlb0QUT8zUO-chpFiCG52_GZfTmktdPGf-R_MHMNlybgQCSfnUMQCPBQMa35fCeoriAzDo23Pa0ut9SdPdOvxA9hIrFsZhU11lHuKxw-Ji7rOcSP8tfglgOEC-IM1IaV_sraEVvUaNV0jfA7C1Uuuox4Ep66yNNZj4cH4rL3OVL9d65wMJh94BjqKy-nWHCFaxV2kv6LPYiMERoYHdxDGgjCb4Zesdz5BOFlZMxnMaGYHhuQc0uKXj2AdcSPA2BU" />
</div>
<div className="p-md">
<h3 className="font-card-title text-card-title text-on-surface mb-xs group-hover:text-primary transition-colors duration-200">TaskFlow Pro Dashboard</h3>
<p className="text-muted font-muted text-secondary mb-md">Mentored by <span className="font-semibold text-primary">Sarah Miller</span></p>
<a className="flex items-center gap-xs text-primary font-label text-label group/link w-fit" href="https://github.com">
<span className="material-symbols-outlined text-[18px]">code</span>
                                    View on GitHub
                                    <span className="material-symbols-outlined text-[14px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">arrow_outward</span>
</a>
</div>
</div>

<div data-animate className="bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl overflow-hidden group hover:shadow-card-elevated transition-all duration-300 card-tilt card-border-animated animation-delay-400">
<div className="h-32 bg-surface-container-high relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-secondary-container/30 to-transparent z-10"></div>
<img alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM9ack7EI8vI4fWdWx-tO7Cz39t_FXsmqv2Qk7IOBC2Hhh5msszVVZMHQDqclm5lbLbdMtvvPNJ-JGqrPEQ9hMiXya3UXecFzhNqCODv8z1pdnlKJOLowrh0DgYJxWDUB6PL47HahurtlzfLeAiuuPr1Xr8-dqAYPL_9r9gDPevCq2_ERm7GldHQyEHK3q9hWAwQS2i36L9XQXHEfSsAW0FHlCTAyHtTj8Hn8lKsbisyUhD7KrbMOWI1inwXqzhTIUcaLmxle4QSA" />
</div>
<div className="p-md">
<h3 className="font-card-title text-card-title text-on-surface mb-xs group-hover:text-primary transition-colors duration-200">Echo Commerce Platform</h3>
<p className="text-muted font-muted text-secondary mb-md">Mentored by <span className="font-semibold text-primary">Alex Rivera</span></p>
<a className="flex items-center gap-xs text-primary font-label text-label group/link w-fit" href="https://github.com">
<span className="material-symbols-outlined text-[18px]">code</span>
                                    View on GitHub
                                    <span className="material-symbols-outlined text-[14px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">arrow_outward</span>
</a>
</div>
</div>

<div data-animate className="sm:col-span-2 bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl flex flex-col md:flex-row overflow-hidden group hover:shadow-card-elevated transition-all duration-300 card-tilt card-border-animated animation-delay-500">
<div className="md:w-1/3 h-48 md:h-auto bg-surface-container-high relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/30 to-transparent z-10"></div>
<img alt="Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtvLO_llLJqLVcnL99SAplCxjsDSBcQ0n8dHlpIFFyOyKQwzFpvTAs-KL_ntX0ItEVflTVGFSW4mTQSlOM2KbhbpyKAFsTRAfreodznL1Gi5qN_ZFuIWl_lCktlm0nMlsBlvFMQCengPLN6ERLtbTc_rQFrGhHUFKFg7xY1pZTaJygb-W-4le3UF8E4dy-UVVVQ5sM0tonjb2JeVKjPUh99o143crVCrq022yV_qD8pmbAFa8w6MxFnrQh8xcSVJP9pcLKbI0PVtc" />
</div>
<div className="p-lg flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start mb-sm">
<div>
<h3 className="font-card-title text-card-title text-on-surface group-hover:text-primary transition-colors duration-200">FinSight Analytics App</h3>
<p className="text-muted font-muted text-secondary">Mentored by <span className="font-semibold text-primary">David Chen</span></p>
</div>
<span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded uppercase shadow-sm">Featured</span>
</div>
<p className="text-body font-body text-secondary mb-md line-clamp-2">
                                    A full-stack financial dashboard designed to help users track investments and visualize market trends in real-time using D3.js and Firebase.
                                </p>
<a className="inline-flex items-center gap-xs text-primary font-label text-label group/link w-fit" href="https://github.com">
<span className="material-symbols-outlined text-[18px]">code</span>
                                    View on GitHub
                                    <span className="material-symbols-outlined text-[14px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">arrow_outward</span>
</a>
</div>
</div>
</div>
</section>

<section data-animate className="bg-surface-container-low/80 backdrop-blur-sm p-lg rounded-xl border border-outline-variant/50 shadow-sm animation-delay-300">
<h2 className="font-section-heading text-section-heading mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">timeline</span> Recent Activity
                    </h2>
<div className="space-y-lg relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant/50">
<div className="flex gap-md relative pl-8 hover:-translate-y-1 transition-transform duration-200 cursor-default">
<div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-low shadow-glow-primary"></div>
<div>
<p className="text-body font-body"><span className="font-semibold">Jordan</span> completed the module "Advanced CSS Patterns"</p>
<span className="text-muted font-muted text-secondary">2 days ago</span>
</div>
</div>
<div className="flex gap-md relative pl-8 hover:-translate-y-1 transition-transform duration-200 cursor-default">
<div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-surface-container-low"></div>
<div>
<p className="text-body font-body">Earned the <span className="font-semibold">"Early Bird"</span> badge for consistent morning reviews</p>
<span className="text-muted font-muted text-secondary">1 week ago</span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

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

"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>



<main className="flex-1 w-full max-w-container-max mx-auto px-md md:px-lg pt-24 pb-xl">

<div className="mb-lg opacity-0 animate-fade-in-up">
<h1 className="font-page-title text-page-title text-on-surface mb-xs">Browse Projects</h1>
<p className="font-body text-body text-on-surface-variant">Find and apply to mentorship projects to grow your skills.</p>
</div>

<div className="bg-surface/80 backdrop-blur-sm rounded-lg shadow-sm border border-outline-variant/50 p-md mb-md flex flex-col gap-md opacity-0 animate-fade-in-up animation-delay-100">

<div className="flex flex-col lg:flex-row gap-md items-start lg:items-center w-full">

<div className="relative w-full lg:flex-1 lg:max-w-md group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors duration-200">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/30" placeholder="Search projects..." type="text" />
</div>

<div className="flex flex-wrap items-center gap-sm w-full lg:w-auto">

<div className="relative flex-1 min-w-[140px] lg:min-w-[160px]">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer transition-all duration-200 hover:border-primary/30">
<option value="">All Skills</option>
<option value="react">React</option>
<option value="python">Python</option>
<option value="design">UI Design</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="relative flex-1 min-w-[140px] lg:min-w-[160px]">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer transition-all duration-200 hover:border-primary/30">
<option value="">Any Duration</option>
<option value="1w">1 week</option>
<option value="2w">2 weeks</option>
<option value="1m">1 month</option>
<option value="2m">2 months</option>
<option value="3m+">3+ months</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="relative flex-1 min-w-[140px] lg:min-w-[160px]">
<select className="appearance-none w-full px-3 py-2 pr-8 bg-surface-container-lowest border border-outline-variant rounded-md font-body text-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer transition-all duration-200 hover:border-primary/30">
<option selected value="open">OPEN</option>
<option value="closed">CLOSED</option>
<option value="completed">COMPLETED</option>
<option value="all">All</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-xs">
<span className="font-label text-label text-on-surface-variant mr-xs">Filters:</span>
<div className="flex items-center gap-xs bg-surface-container-high px-2 py-1 rounded-full border border-outline-variant hover:border-primary/30 transition-colors duration-200">
<span className="font-label text-label text-on-surface">Status: OPEN</span>
<button className="text-on-surface-variant hover:text-error flex items-center transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
</div>
<div className="flex items-center gap-xs bg-surface-container-high px-2 py-1 rounded-full border border-outline-variant hover:border-primary/30 transition-colors duration-200">
<span className="font-label text-label text-on-surface">Skill: React</span>
<button className="text-on-surface-variant hover:text-error flex items-center transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
</div>
<button className="font-label text-label text-primary hover:underline ml-xs transition-colors">Clear all</button>
</div>

<div className="flex justify-between items-center pt-sm border-t border-outline-variant">
<div className="font-body text-body text-on-surface-variant">Showing 24 projects</div>
<div className="flex items-center gap-sm">
<span className="font-label text-label text-on-surface-variant hidden sm:inline">Sort by:</span>
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1 bg-transparent border-none font-label text-label text-on-surface cursor-pointer focus:outline-none focus:ring-0 font-medium">
<option value="newest">Newest</option>
<option value="oldest">Oldest</option>
<option value="applicants">Most applicants</option>
</select>
<span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">sort</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg mb-xl stagger-children">

<a data-animate className="bg-surface rounded-lg border border-outline-variant/50 shadow-sm card-tilt card-border-animated flex flex-col p-md group cursor-pointer" href="/projects/1">
<div className="flex justify-between items-start mb-md">
<div className="bg-primary-container text-on-primary-container px-2 py-1 rounded font-label text-label uppercase">Open</div>
<div className="flex items-center gap-xs text-on-surface-variant font-muted text-muted">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                        2 weeks
                    </div>
</div>
<h3 className="font-card-title text-card-title text-on-surface mb-xs group-hover:text-primary transition-colors duration-200">E-commerce Frontend Rebuild</h3>
<p className="font-body text-body text-on-surface-variant line-clamp-2 mb-md flex-1">Help rebuild the frontend of a boutique e-commerce site using Next.js and Tailwind CSS. Focus on performance and accessibility.</p>
<div className="flex flex-wrap gap-xs mb-md">
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">React</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">Tailwind</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">Next.js</span>
<span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded-md font-label text-label">+2</span>
</div>
<div className="flex items-center justify-between pt-md border-t border-outline-variant mt-auto">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-dim flex items-center justify-center font-label text-label text-on-surface font-semibold border border-outline-variant avatar-glow">
                            JD
                        </div>
<span className="font-body text-body text-on-surface">Jane Doe</span>
</div>
<button className="bg-transparent border border-outline-variant hover:border-primary text-on-surface hover:text-primary hover:bg-primary/5 font-label text-label px-3 py-1.5 rounded transition-all duration-200">Apply</button>
</div>
</a>

<a data-animate className="bg-surface rounded-lg border border-outline-variant/50 shadow-sm card-tilt card-border-animated flex flex-col p-md group cursor-pointer" href="/projects/1">
<div className="flex justify-between items-start mb-md">
<div className="bg-primary-container text-on-primary-container px-2 py-1 rounded font-label text-label uppercase">Open</div>
<div className="flex items-center gap-xs text-on-surface-variant font-muted text-muted">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                        1 month
                    </div>
</div>
<h3 className="font-card-title text-card-title text-on-surface mb-xs group-hover:text-primary transition-colors duration-200">Data Analysis Dashboard</h3>
<p className="font-body text-body text-on-surface-variant line-clamp-2 mb-md flex-1">Build an internal dashboard for visualizing user engagement metrics using Python and a charting library of your choice.</p>
<div className="flex flex-wrap gap-xs mb-md">
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">Python</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">Pandas</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">D3.js</span>
</div>
<div className="flex items-center justify-between pt-md border-t border-outline-variant mt-auto">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label text-label font-semibold overflow-hidden border border-outline-variant avatar-glow">
<img alt="Mentor avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YW9BSjPbUdT2B85K5IytCIZqqxrtHMslq86cMIt1pjWLYTsetspt5RcUQG7stnajc6t2eZEQq2yoTAdQt0qSVkecpyUW4hoHHfWBTE6uCuqWKmGnjyvzHcsosPfAV_BlxVglDb7zrpxTUmkf02OPzrSrAeGCLRJp4r7LH7csFiNeBivxiAwAxCsAb7o_eke_0dsx3bAscHh7PcpBqAeSKfiI72bsvcqRFM3npW7bpqFGIkcdBRE6itQpbQGf4vgeJo1oXIKKCuc" />
</div>
<span className="font-body text-body text-on-surface">Dr. Smith</span>
</div>
<button className="bg-transparent border border-outline-variant hover:border-primary text-on-surface hover:text-primary hover:bg-primary/5 font-label text-label px-3 py-1.5 rounded transition-all duration-200">Apply</button>
</div>
</a>

<div data-animate className="bg-surface-container-lowest rounded-lg border border-outline-variant/50 shadow-sm opacity-75 flex flex-col p-md">
<div className="flex justify-between items-start mb-md">
<div className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded font-label text-label uppercase">Completed</div>
<div className="flex items-center gap-xs text-on-surface-variant font-muted text-muted">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                        3+ months
                    </div>
</div>
<h3 className="font-card-title text-card-title text-on-surface mb-xs">Mobile App Prototype</h3>
<p className="font-body text-body text-on-surface-variant line-clamp-2 mb-md flex-1">Design and prototype a health tracking mobile application using Figma. User research phase included.</p>
<div className="flex flex-wrap gap-xs mb-md grayscale opacity-80">
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label">Figma</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label">UX Research</span>
</div>
<div className="flex items-center justify-between pt-md border-t border-outline-variant mt-auto">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label text-label font-semibold border border-outline-variant">
                            AL
                        </div>
<span className="font-body text-body text-on-surface">Alex Lee</span>
</div>
<button className="bg-surface-variant text-on-surface-variant font-label text-label px-3 py-1.5 rounded cursor-not-allowed" disabled>View</button>
</div>
</div>

<a data-animate className="bg-surface rounded-lg border border-outline-variant/50 shadow-sm card-tilt card-border-animated flex flex-col p-md group cursor-pointer" href="/projects/1">
<div className="flex justify-between items-start mb-md">
<div className="bg-primary-container text-on-primary-container px-2 py-1 rounded font-label text-label uppercase">Open</div>
<div className="flex items-center gap-xs text-on-surface-variant font-muted text-muted">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                        1 week
                    </div>
</div>
<h3 className="font-card-title text-card-title text-on-surface mb-xs group-hover:text-primary transition-colors duration-200">API Documentation Overhaul</h3>
<p className="font-body text-body text-on-surface-variant line-clamp-2 mb-md flex-1">Review and improve the existing REST API documentation using Swagger/OpenAPI specifications.</p>
<div className="flex flex-wrap gap-xs mb-md">
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">API</span>
<span className="bg-inverse-on-surface text-primary px-2 py-1 rounded-md font-label text-label skill-chip">Technical Writing</span>
</div>
<div className="flex items-center justify-between pt-md border-t border-outline-variant mt-auto">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-dim flex items-center justify-center font-label text-label text-on-surface font-semibold border border-outline-variant avatar-glow">
                            MK
                        </div>
<span className="font-body text-body text-on-surface">Maria Kim</span>
</div>
<button className="bg-transparent border border-outline-variant hover:border-primary text-on-surface hover:text-primary hover:bg-primary/5 font-label text-label px-3 py-1.5 rounded transition-all duration-200">Apply</button>
</div>
</a>
</div>

<div className="flex justify-center items-center gap-sm" data-animate>
<button className="flex items-center gap-xs px-3 py-2 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
<span className="font-label text-label hidden sm:inline">Previous</span>
</button>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-on-primary font-label text-label shadow-glow-soft">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-on-surface hover:bg-surface-container-high font-label text-label transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-on-surface hover:bg-surface-container-high font-label text-label transition-colors">3</button>
<span className="text-on-surface-variant px-1">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-on-surface hover:bg-surface-container-high font-label text-label transition-colors">8</button>
</div>
<button className="flex items-center gap-xs px-3 py-2 border border-outline-variant rounded-md text-on-surface hover:bg-surface-container-high hover:border-primary/30 transition-all duration-200">
<span className="font-label text-label hidden sm:inline">Next</span>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
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

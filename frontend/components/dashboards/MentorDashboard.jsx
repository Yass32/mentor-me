"use client";
import Link from "next/link";

export default function MentorDashboard() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col antialiased">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/my-projects">My Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/my-projects"><span className="material-symbols-outlined text-[20px]">folder_shared</span>My Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<main className="flex-1 w-full max-w-container-max mx-auto px-md md:px-lg py-xl flex flex-col gap-xl">

<div className="flex items-center justify-between opacity-0 animate-fade-in-up">
  <h1 className="font-page-title text-page-title text-on-surface">Dashboard</h1>
  <a className="inline-flex items-center gap-2 px-md py-sm rounded-lg bg-primary text-on-primary font-card-title text-card-title hover:shadow-glow-primary hover:-translate-y-[1px] transition-all duration-200 shadow-sm btn-shimmer" href="/create-project">
    <span className="material-symbols-outlined text-[18px]">add</span>Create Project
  </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg stagger-children opacity-0 animate-fade-in-up animation-delay-100">
<div data-animate className="flex flex-col gap-2 rounded-xl p-lg border border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm hover:shadow-card-elevated card-tilt card-border-animated transition-all duration-200">
<p className="text-on-surface-variant text-body font-medium leading-normal">Total Projects Created</p>
<p className="text-on-surface tracking-tight text-[28px] font-bold leading-tight stat-number">5</p>
</div>
<div data-animate className="flex flex-col gap-2 rounded-xl p-lg border border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm hover:shadow-card-elevated card-tilt card-border-animated transition-all duration-200">
<p className="text-on-surface-variant text-body font-medium leading-normal">Total Applicants Received</p>
<p className="text-on-surface tracking-tight text-[28px] font-bold leading-tight stat-number">42</p>
</div>
<div data-animate className="flex flex-col gap-2 rounded-xl p-lg border border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm hover:shadow-card-elevated card-tilt card-border-animated transition-all duration-200">
<p className="text-on-surface-variant text-body font-medium leading-normal">Total Accepted Mentees</p>
<p className="text-on-surface tracking-tight text-[28px] font-bold leading-tight stat-number">3</p>
</div>
</div>

<div className="opacity-0 animate-fade-in-up animation-delay-200">
<div className="flex flex-1 flex-col items-start justify-between gap-md rounded-xl border border-tertiary-fixed bg-tertiary-fixed/30 p-lg shadow-sm hover:shadow-md transition-shadow duration-200 md:flex-row md:items-center group">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-sm animate-pulse-soft" style={{'fontVariationSettings':'\'FILL\' 1'}}>error</span>
<p className="text-on-tertiary-fixed text-base font-bold leading-tight">2 submissions awaiting your review</p>
</div>
<p className="text-on-tertiary-fixed-variant text-body font-normal leading-normal">E-commerce React Migration</p>
</div>
<a className="text-sm font-bold leading-normal tracking-[0.015em] flex items-center gap-2 text-primary hover:underline hover:text-primary-fixed-dim transition-colors group-hover:scale-105" href="/my-projects/1/applicants">
                                View Applicants
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-lg opacity-0 animate-fade-in-up animation-delay-300">
<div className="flex flex-col gap-lg rounded-xl border border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm p-lg shadow-sm hover:shadow-card-elevated transition-shadow duration-200">
<div className="flex justify-between items-center">
<div>
<h3 className="text-section-heading text-on-surface">Applicants per Project</h3>
<div className="flex gap-1 items-center">
<p className="text-on-surface-variant text-muted">All Time Performance</p>
<p className="text-[#078841] text-muted font-medium">+12% growth</p>
</div>
</div>
<div className="text-on-surface tracking-light text-[32px] font-bold leading-tight stat-number">42</div>
</div>

<div className="grid min-h-[180px] grid-flow-col gap-4 grid-rows-[1fr_auto] items-end justify-items-center pt-4 overflow-x-auto min-w-0 stagger-children">
<div data-animate className="relative group w-full h-full flex flex-col justify-end items-center">
<div className="bg-primary-container w-full max-w-[40px] rounded-t-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow-primary hover:-translate-y-1" style={{'height':'70%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded transition-opacity duration-200">15</div>
</div>
<p className="text-on-surface-variant text-[11px] font-bold leading-normal truncate w-16 text-center">E-comm...</p>
<div data-animate className="relative group w-full h-full flex flex-col justify-end items-center">
<div className="bg-primary-container w-full max-w-[40px] rounded-t-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow-primary hover:-translate-y-1" style={{'height':'35%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded transition-opacity duration-200">8</div>
</div>
<p className="text-on-surface-variant text-[11px] font-bold leading-normal truncate w-16 text-center">SaaS Pl...</p>
<div data-animate className="relative group w-full h-full flex flex-col justify-end items-center">
<div className="bg-primary-container w-full max-w-[40px] rounded-t-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow-primary hover:-translate-y-1" style={{'height':'90%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded transition-opacity duration-200">20</div>
</div>
<p className="text-on-surface-variant text-[11px] font-bold leading-normal truncate w-16 text-center">AI Tool</p>
<div data-animate className="relative group w-full h-full flex flex-col justify-end items-center">
<div className="bg-primary-container w-full max-w-[40px] rounded-t-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow-primary hover:-translate-y-1" style={{'height':'25%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded transition-opacity duration-200">5</div>
</div>
<p className="text-on-surface-variant text-[11px] font-bold leading-normal truncate w-16 text-center">Portf...</p>
<div data-animate className="relative group w-full h-full flex flex-col justify-end items-center">
<div className="bg-primary-container w-full max-w-[40px] rounded-t-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow-primary hover:-translate-y-1" style={{'height':'15%'}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded transition-opacity duration-200">3</div>
</div>
<p className="text-on-surface-variant text-[11px] font-bold leading-normal truncate w-16 text-center">Blog</p>
</div>
</div>

<div className="flex flex-col">
<div className="flex items-center justify-between pb-4">
<h2 className="text-on-surface text-section-heading font-bold">Recent Applicants</h2>
<button className="text-primary text-sm font-semibold hover:underline hover:text-primary-fixed-dim transition-colors">View All</button>
</div>
<div className="overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
<div className="flex flex-col divide-y divide-outline-variant">

<div className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors duration-200 cursor-pointer table-row-animated group">
<div className="size-10 rounded-full bg-center bg-cover border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow avatar-glow" style={{'backgroundImage':'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC2UkxqaaknNWiZTrY_7iA7MbxKk84PA4xHTxed_AfyDWKKLiUmQRp3zMn2XyJ3NN40UP4LNeYHLJh3yYC8hnvz-RjxnHy8W_tGt4O9XzwIarDGeUZWjm1ukySmlNDksGqs5IJZ5z-LfQja-UsdIaUR7H9lrylJORQT7ZfJmd8RbfDpt9z7s1bRze0J3phz13NfytOZWEQj2rstmPAh1eiWX1kxmhHB8s2JCMu7DXj8210ke13HDtLsSR8ha2dp2HctcvMZrijzjIs\')'}}></div>
<div className="flex-1">
<p className="text-on-surface font-semibold text-body group-hover:text-primary transition-colors">Alex Rivers</p>
<p className="text-on-surface-variant text-muted">E-commerce React Migration</p>
</div>
<span className="inline-flex items-center rounded-full bg-secondary-container px-2.5 py-0.5 text-label font-bold text-on-secondary-container group-hover:bg-secondary-fixed transition-colors">PENDING</span>
</div>

<div className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors duration-200 cursor-pointer table-row-animated group">
<div className="size-10 rounded-full bg-center bg-cover border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow avatar-glow" style={{'backgroundImage':'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCOQEAx-eRr9qLMVq2YfNQKRh3y_sm0C8nDQRjxvG33Xntsi6tlhshYqt06Cg7acavaLD63GpCkGQG1rjg6y2VaxEeP8h5uDSjUySI2l6kWEW5J_z_JTDjD0XB-oVggfopu6TybQEzZ47d-i7mg-OsMw0lDJyq5B-qB9EpcPA04XWG5tZHi3dwI4oY7E-m_Q5qYggxNyNnLlgO9W3DOg6KEI4SNhwUK5eTLK8daf0b1fVzAQ6bjBy_lIhFGaWKC9R9V5uPmRz56vRg\')'}}></div>
<div className="flex-1">
<p className="text-on-surface font-semibold text-body group-hover:text-primary transition-colors">Elena Kostic</p>
<p className="text-on-surface-variant text-muted">AI Tool Integration</p>
</div>
<span className="inline-flex items-center rounded-full bg-[#e7f5ed] px-2.5 py-0.5 text-label font-bold text-[#078841] group-hover:brightness-95 transition-all">ACCEPTED</span>
</div>

<div className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors duration-200 cursor-pointer table-row-animated group">
<div className="size-10 rounded-full bg-center bg-cover border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow avatar-glow" style={{'backgroundImage':'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuA0ug-79RwkMVIcQA46wRJsvSbiYWBgrb6iYy4-Mood5g979VmAPXpCapmBdLkKOs6qsiHVGIMbe-dcMgOjwTEukn4wx3MVnrDbm-OD7AbzF1Cx5tKU7VG-tVd98waPLAfg5rZX3c5wsdULYkq3d8SS8BKAoBp6f505EZCbBtQIxuSocZmg3DIIuIMbaffM5eEzbJSthH253Ljg2_ZwuDHWx7ep4hgTI-DR_M_BlRIZvRpaiAUAw96CqHKXRfksnu5s0_qQiTciQdk\')'}}></div>
<div className="flex-1">
<p className="text-on-surface font-semibold text-body group-hover:text-primary transition-colors">Marcus Thorne</p>
<p className="text-on-surface-variant text-muted">E-commerce React Migration</p>
</div>
<span className="inline-flex items-center rounded-full bg-secondary-container px-2.5 py-0.5 text-label font-bold text-on-secondary-container group-hover:bg-secondary-fixed transition-colors">PENDING</span>
</div>

<div className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors duration-200 cursor-pointer table-row-animated group">
<div className="size-10 rounded-full bg-center bg-cover border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow avatar-glow" style={{'backgroundImage':'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDipoVmWqwzHJwI1FsaIE31R1PGOmlzplIqOLggOx4kFy13C3sW1qhkduEFXFMBpx55S8tyoRlVwutDZYlTqWRR6YJynKGMVsif6omEA3kGXVDsvl53yHQ25o12GW4v24JUDk1XLlJcKuLV5vz9epk2G-KBUdi9PZ1HcE79IPjiSyVyuy2SYPe9wGFi7M7c2yqY0bMYPfynt_wwCaK1u7nZwE9WY_iB2LR1kUiyg1AC2t8gtKpRQaePU3hTGVBAhbwi8uHpmp4IHUc\')'}}></div>
<div className="flex-1">
<p className="text-on-surface font-semibold text-body group-hover:text-primary transition-colors">Sonia Gupta</p>
<p className="text-on-surface-variant text-muted">SaaS Platform Design</p>
</div>
<span className="inline-flex items-center rounded-full bg-[#fdf2f2] px-2.5 py-0.5 text-label font-bold text-[#ba1a1a] group-hover:brightness-95 transition-all">REJECTED</span>
</div>

<div className="flex items-center gap-4 p-4">
<div className="size-10 rounded-full skeleton"></div>
<div className="flex-1 flex flex-col gap-2">
<div className="h-4 w-32 skeleton rounded"></div>
<div className="h-3 w-48 skeleton rounded"></div>
</div>
<div className="h-6 w-16 skeleton rounded-full"></div>
</div>
</div>
</div>
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

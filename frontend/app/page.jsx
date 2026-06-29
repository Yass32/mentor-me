"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body text-body antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="px-md py-sm rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:border-primary/30 font-label text-label transition-all duration-200" href="/login">Log in</a><a className="px-md py-sm rounded-lg bg-primary text-on-primary hover:bg-primary/90 font-label text-label transition-all duration-200 shadow-sm hover:shadow-glow-primary btn-shimmer" href="/register">Sign up</a></div></div></header>

<main className="flex-grow">

<section className="w-full max-w-container-max mx-auto px-md md:px-lg py-xl md:py-[100px] flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">

{/* Floating decorative blobs */}
<div className="floating-blob w-[300px] h-[300px] bg-primary/10 -top-20 -left-20 animate-float-slow" aria-hidden="true"></div>
<div className="floating-blob w-[200px] h-[200px] bg-primary-fixed/30 bottom-10 right-10 animate-float animation-delay-300" aria-hidden="true"></div>
<div className="floating-blob w-[150px] h-[150px] bg-primary/5 top-1/2 left-1/3 animate-float animation-delay-500" aria-hidden="true"></div>

<div className="flex-1 flex flex-col gap-lg z-10">
<h1 className="text-page-title font-page-title text-on-surface md:text-[48px] md:leading-[1.1] md:tracking-tight max-w-[600px]">
  <span className="block opacity-0 animate-fade-in-up">Real projects.</span>
  <span className="block opacity-0 animate-fade-in-up animation-delay-100">Real mentors.</span>
  <span className="block opacity-0 animate-fade-in-up animation-delay-200 text-primary">Real experience.</span>
</h1>
<p className="text-body font-body text-on-surface-variant md:text-[18px] max-w-[500px] opacity-0 animate-fade-in-up animation-delay-300">
                    Connect with experienced mentors through real-world micro-projects and build the portfolio that gets you hired. Skip the tutorials, start building.
                </p>
<div className="flex flex-col sm:flex-row gap-md pt-sm opacity-0 animate-fade-in-up animation-delay-400">
<button className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-primary-container text-on-primary font-card-title text-card-title hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-glow-primary hover:-translate-y-[2px] btn-shimmer">
                        Join as a Mentee
                    </button>
<button className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-surface-container-lowest text-on-surface font-card-title text-card-title border border-outline-variant hover:bg-surface-container-low hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-card-elevated hover:-translate-y-[2px]">
                        Become a Mentor
                    </button>
</div>
<div className="flex items-center gap-sm mt-md opacity-0 animate-fade-in-up animation-delay-500">
<div className="flex -space-x-sm">
<img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLIWZYoNwwmkCfIKxuHhfefrf6KD9lMe5pdCDIpQdyz00gJtUn7oHHD67-DSXpHtbbrSZtUeAfuqPv1O5UzuPwWnNOpYvNRj9h5T_SsbPG1GgfmHH46aQoGGtj50nODXlNgW4X7MKVptt3qz18ZYMVvaij6WSVT-ybvTFKulQygpSeLEZ1CxGUzZ3bixzQWTaTL98vP9hjG4f44pgfmslph5F51gScWUuOlJzHsfq46bgbzTH5zU5s_4I6TlUWs4Zkbt1KaQro6_4" />
<img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjGBQbsen8uQhO2nWpxti2j-IjQKh_FbFdMTqynjJn49AMUCvFwxBeUQdlTtNDXRn43eDIhtre1H0wv0sD_ouAXFxj6gLS-JWWRfNKgHaZXW5Zywmj90F0a4j7AUAj7cRj_aVBtbzshXyWwoTD5sf_aEMFFO9Rsgc16lk5td5LVR7Hu-4adgP6GBmHUtYqhRHZmW-C4xhsCgpMmBUxYQLnMeKdobpkcxgQ9IjEo8kPSpmV8jVFABiiCZdBmsASCgLFqbh5Ll4ZGY" />
<img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArO0vBBiOBuNa3sKA5KUX2aEJXtWJ32T0PoHOYBYF8QgzJr8AIklqKdEsz-b0e7qgQMtXijygBkgYfyzZyWOCI4FZxS3_q4p1kZfwRj3ESRIHgbt2AwJszE9J1WP0TO2hJg59WeVMqup-YZx87kErofe2ekL8rTEGjJdctZv1AonWjXhqHofv6gqru3J-ZmaHeAjQHAsRPpAIF7zdesgDDpADLxMdiM-NW1R2g5kwO3bzvmaZhOxENTqjHrgU709aI6a_-dSkEYA0" />
</div>
<span className="text-muted font-muted text-on-surface-variant">Join <strong className="text-on-surface">5,000+</strong> builders</span>
</div>
</div>
<div className="flex-1 w-full max-w-[600px] relative opacity-0 animate-slide-in-right animation-delay-300">

<div className="absolute inset-0 bg-primary/5 rounded-[40px] -skew-y-6 transform-gpu animate-pulse-soft"></div>

<img alt="Diverse mentor and mentee collaborating on a software project" className="w-full h-auto rounded-xl shadow-card-float border border-outline-variant/50 img-glow relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmu2XNdekpwfwbpfpZaKDJIVVGQ54Zp_pFYnPpxnRsVwZvCsoyVXXorS_24jG50hdqpsjSH_ZoDJr5JXi4ewlwOoO5h-HXwQACQ-Q7Nro4PZdKwhT4VXJnocO-nRsZGyvlKVbFVPmXFCRLEN91a12X-2GRVZcDv1hHqS0f-iGNGMsf6YPYaDeWBCJokKPTp9fn8YdG5N_uH0KzJdoHFKYOSQgaGM-Cy8senYyjiTpQ-3tjwxQ9AuVQu3SgQDinNINLgM5B4nlnSM" />
</div>
</section>

<section className="w-full bg-surface-container-low py-xl md:py-[100px] border-y border-outline-variant/50 relative">
{/* Subtle pattern overlay */}
<div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none" aria-hidden="true"></div>
<div className="max-w-container-max mx-auto px-md md:px-lg relative">
<div className="text-center mb-xl" data-animate>
<h2 className="text-page-title font-page-title text-on-surface mb-sm">How it Works</h2>
<p className="text-body font-body text-on-surface-variant max-w-[600px] mx-auto">A systematic approach to building real skills through structured mentorship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg stagger-children">

<div data-animate className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/50 shadow-sm card-tilt card-border-animated relative overflow-hidden group">
<div className="absolute top-0 right-0 p-md text-[64px] font-bold text-surface-container leading-none pointer-events-none group-hover:text-primary-fixed transition-colors duration-300">1</div>
<div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-lg relative z-10 group-hover:shadow-glow-primary transition-shadow duration-300">
<span className="material-symbols-outlined" data-icon="search" data-weight="fill" style={{'fontVariationSettings':'"FILL" 1'}}>search</span>
</div>
<h3 className="text-section-heading font-section-heading text-on-surface mb-sm relative z-10">Browse Projects</h3>
<p className="text-muted font-muted text-on-surface-variant relative z-10">Explore curated, real-world micro-projects scoped by senior engineers at top tech companies.</p>
</div>

<div data-animate className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/50 shadow-sm card-tilt card-border-animated relative overflow-hidden group">
<div className="absolute top-0 right-0 p-md text-[64px] font-bold text-surface-container leading-none pointer-events-none group-hover:text-primary-fixed transition-colors duration-300">2</div>
<div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-lg relative z-10 group-hover:shadow-glow-primary transition-shadow duration-300">
<span className="material-symbols-outlined" data-icon="send" data-weight="fill" style={{'fontVariationSettings':'"FILL" 1'}}>send</span>
</div>
<h3 className="text-section-heading font-section-heading text-on-surface mb-sm relative z-10">Apply</h3>
<p className="text-muted font-muted text-on-surface-variant relative z-10">Submit a brief proposal outlining your approach. Connect directly with the mentor to confirm fit.</p>
</div>

<div data-animate className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/50 shadow-sm card-tilt card-border-animated relative overflow-hidden group">
<div className="absolute top-0 right-0 p-md text-[64px] font-bold text-surface-container leading-none pointer-events-none group-hover:text-primary-fixed transition-colors duration-300">3</div>
<div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center mb-lg relative z-10 group-hover:shadow-glow-primary transition-shadow duration-300">
<span className="material-symbols-outlined" data-icon="code" data-weight="fill" style={{'fontVariationSettings':'"FILL" 1'}}>code</span>
</div>
<h3 className="text-section-heading font-section-heading text-on-surface mb-sm relative z-10">Build & Submit</h3>
<p className="text-muted font-muted text-on-surface-variant relative z-10">Write the code, receive iterative feedback via pull requests, and complete the project for your portfolio.</p>
</div>
</div>
</div>
</section>

<section className="w-full cta-gradient py-xl md:py-[80px] relative overflow-hidden">
{/* Decorative floating elements in CTA */}
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float" aria-hidden="true"></div>
<div className="absolute bottom-0 left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float-slow" aria-hidden="true"></div>
<div className="max-w-container-max mx-auto px-md md:px-lg text-center flex flex-col items-center relative z-10">
<h2 className="text-page-title font-page-title text-on-primary mb-md" data-animate>Ready to get started?</h2>
<p className="text-body font-body text-on-primary-container max-w-[600px] mb-lg opacity-90" data-animate>Join the platform designed to accelerate technical careers through deliberate practice and expert guidance.</p>
<div className="flex flex-col sm:flex-row gap-md" data-animate>
<button className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-surface-container-lowest text-primary font-card-title text-card-title hover:bg-surface-container-low transition-all duration-200 shadow-sm hover:shadow-card-float hover:-translate-y-1 transform btn-shimmer">
                        Join as a Mentee
                    </button>
<button className="inline-flex items-center justify-center px-lg py-[12px] rounded-lg bg-transparent text-on-primary font-card-title text-card-title border border-on-primary/40 hover:bg-on-primary/10 hover:border-on-primary/70 transition-all duration-200">
                        Become a Mentor
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-low border-t border-outline-variant/50 w-full py-xl px-lg flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
<div className="mb-lg md:mb-0 text-center md:text-left flex flex-col gap-sm">
<span className="text-card-title font-card-title font-bold text-on-surface">Mentor.me</span>
<p className="text-muted font-muted text-primary">© 2024 Mentor.me. All rights reserved.</p>
</div>
<nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-lg">
<a className="text-on-surface-variant text-muted font-muted hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Privacy Policy</a>
<a className="text-on-surface-variant text-muted font-muted hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Terms of Service</a>
<a className="text-on-surface-variant text-muted font-muted hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Support</a>
<a className="text-on-surface-variant text-muted font-muted hover:text-primary transition-colors duration-200 nav-link-animated" href="#">Contact</a>
</nav>
</footer>

<div className="fixed bottom-md left-md right-md md:left-auto md:right-lg md:max-w-md bg-inverse-surface text-inverse-on-surface p-md rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.3)] z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md border border-outline animate-fade-in-up" id="cookie-banner">
<p className="text-muted font-muted flex-1 text-sm">
            Mentor.me uses cookies to improve your experience and analyze site traffic.
        </p>
<button className="whitespace-nowrap inline-flex items-center justify-center px-md py-sm rounded-lg bg-primary-container text-on-primary font-label text-label hover:bg-primary transition-all duration-200 w-full sm:w-auto btn-shimmer">
            Accept
        </button>
</div>

    </div>
  );
}

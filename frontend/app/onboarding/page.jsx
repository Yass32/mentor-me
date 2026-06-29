"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Basic setup logic for animations if needed
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col font-body text-body text-on-surface antialiased relative">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><a className="text-on-surface-variant hover:text-primary font-label text-label transition-colors nav-link-animated" href="/login">Log out</a></div></header>

<main className="flex-grow flex items-center justify-center p-md md:p-lg w-full relative z-10">

<div className="bg-surface-container-lowest/80 backdrop-blur-md w-full max-w-[560px] rounded-xl border border-outline-variant/50 shadow-card-float card-border-animated flex flex-col overflow-hidden transition-all duration-300 opacity-0 animate-fade-in-up">

<div className="px-lg py-lg md:px-xl md:pt-xl md:pb-md border-b border-outline-variant/30">
<h1 className="font-page-title text-page-title text-on-surface mb-xs">Set up your profile</h1>
<p className="font-muted text-muted text-on-surface-variant">Just a few details to get started.</p>
</div>

<form className="p-lg md:p-xl flex flex-col gap-lg stagger-children" id="onboarding-form">

<div className="flex items-center gap-md opacity-0 animate-fade-in-up animation-delay-100">

<div className="relative w-20 h-20 rounded-full border border-dashed border-outline-variant bg-surface-container-lowest flex items-center justify-center overflow-hidden cursor-pointer group transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 shadow-sm hover:shadow-glow-soft avatar-glow" id="avatar-container">

<div className="flex flex-col items-center justify-center text-secondary group-hover:text-primary transition-colors" id="avatar-default">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform duration-300" style={{'fontVariationSettings':'\'FILL\' 0'}}>photo_camera</span>
</div>

<div className="absolute inset-0 bg-surface/80 flex items-center justify-center hidden backdrop-blur-sm" id="avatar-uploading">
<span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
</div>

<img alt="Profile preview" className="absolute inset-0 w-full h-full object-cover hidden" id="avatar-preview" src="" />
</div>
<div className="flex flex-col">
<span className="font-label text-label text-on-surface uppercase mb-xs">Profile Picture</span>
<span className="font-muted text-muted text-on-surface-variant mb-sm">Optional. Max size 5MB.</span>
<div className="flex items-center gap-sm">
<button className="text-primary hover:text-primary-fixed-dim font-label text-label transition-colors hidden" id="btn-change-photo" type="button">Change photo</button>
<span className="text-error font-muted text-muted text-[13px] hidden" id="upload-error">File size too large.</span>
</div>
</div>
</div>

<div className="flex flex-col gap-xs opacity-0 animate-fade-in-up animation-delay-200 group/input">
<label className="font-label text-label text-on-surface uppercase group-focus-within/input:text-primary transition-colors" htmlFor="bio-input">Bio</label>
<textarea className="w-full min-h-[120px] bg-surface-container-lowest border border-outline-variant rounded-lg p-[10px] text-body font-body text-on-surface focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary transition-all duration-200 hover:border-primary/30 resize-y placeholder:text-on-surface-variant/50 shadow-sm" id="bio-input" placeholder="Tell us a bit about your professional journey..."></textarea>
</div>

<div className="flex flex-col gap-xs opacity-0 animate-fade-in-up animation-delay-300 group/input">
<label className="font-label text-label text-on-surface uppercase group-focus-within/input:text-primary transition-colors" htmlFor="skills-input">Skills</label>
<div className="w-full min-h-[44px] bg-surface-container-lowest border border-outline-variant rounded-lg p-[4px] flex flex-wrap items-center gap-[4px] focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-200 hover:border-primary/30 cursor-text shadow-sm">

<div className="flex flex-wrap items-center gap-[6px] pl-[6px]" id="chips-container">

<div className="inline-flex items-center gap-xs bg-primary/10 border border-primary/20 text-primary rounded-[6px] px-[8px] py-[4px] font-label text-label transition-all group skill-chip">
                                JavaScript
                                <button className="text-primary/60 hover:text-error hover:scale-110 transition-all focus:outline-none rounded-full" type="button">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</div>
</div>
<input className="flex-grow min-w-[120px] border-none bg-transparent focus:ring-0 text-body font-body text-on-surface p-[6px] placeholder:text-on-surface-variant/50" id="skills-input" placeholder="e.g. React, Node.js..." type="text" />
</div>
<span className="font-muted text-muted text-on-surface-variant text-[13px]">Press enter to add a skill.</span>
</div>

<div className="bg-tertiary-container/30 border border-tertiary/20 rounded-lg p-md flex items-start gap-sm transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-400 shadow-sm">
<span className="material-symbols-outlined text-tertiary animate-pulse-soft mt-[2px]" style={{'fontVariationSettings':'\'FILL\' 1'}}>lightbulb</span>
<p className="font-muted text-muted text-on-surface leading-snug">
<strong>Adding a bio and skills</strong> significantly increases your chances of finding the perfect mentorship match.
                    </p>
</div>

<div className="pt-sm border-t border-outline-variant/30 flex flex-col gap-sm opacity-0 animate-fade-in-up animation-delay-500">
<button className="relative w-full bg-primary hover:bg-primary/90 text-on-primary py-[12px] px-md rounded-lg font-label text-label uppercase transition-all duration-200 hover:shadow-glow-primary hover:-translate-y-[1px] shadow-sm flex items-center justify-center gap-sm btn-shimmer" id="submit-btn" type="submit">
<span id="submit-text">Save and continue</span>
<span className="material-symbols-outlined animate-spin hidden text-[18px]" id="submit-spinner">progress_activity</span>
</button>
<div className="hidden text-error bg-error-container/50 border border-error/20 p-sm rounded text-center font-muted text-muted text-[13px]" id="form-error">
                        Something went wrong. Please try again.
                    </div>
</div>
</form>
</div>
</main>
    </div>
  );
}

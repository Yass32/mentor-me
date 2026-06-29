"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center font-body text-on-surface">
<header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><a className="font-section-heading text-section-heading font-bold text-primary hover:opacity-80 transition-opacity" href="/">Mentor.me</a><div className="flex items-center gap-sm"><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors mr-sm" href="/login">Log in</a><a className="text-on-surface-variant hover:text-primary font-body text-body transition-colors" href="/register">Sign up</a></div></div></header>

<main className="w-full max-w-[440px] p-md mx-auto relative z-10">

<div className="text-center mb-xl">
<span className="text-section-heading font-section-heading font-bold text-primary">Mentor.me</span>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-outline-variant/30 p-lg sm:p-xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">

<div className="flex flex-col items-center justify-center py-lg animate-fade-in" id="state-loading">
<div className="relative w-16 h-16 mb-lg">
<svg className="w-16 h-16 text-primary animate-spin" fill="none" viewbox="0 0 24 24">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-section-heading font-section-heading text-on-surface mb-sm">Verifying...</h2>
<p className="text-body font-body text-on-surface-variant text-center">Please wait while we confirm your email address.</p>
</div>

<div className="hidden flex-col items-center justify-center py-lg animate-fade-in" id="state-success">
<div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-[32px] text-primary" data-icon="check_circle">check_circle</span>
</div>
<h2 className="text-section-heading font-section-heading text-on-surface mb-sm">Email verified!</h2>
<p className="text-body font-body text-on-surface-variant text-center mb-lg">Your email has been successfully verified. You can now access all features.</p>
<button className="w-full bg-primary-container text-on-primary font-label text-label py-md rounded-lg hover:opacity-90 transition-opacity">
                    Go to Dashboard
                </button>
</div>

<div className="hidden flex-col items-center justify-center py-lg animate-fade-in" id="state-invalid">
<div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-[32px] text-error" data-icon="cancel">cancel</span>
</div>
<h2 className="text-section-heading font-section-heading text-on-surface mb-sm">Link invalid</h2>
<p className="text-body font-body text-on-surface-variant text-center mb-lg">This verification link is invalid. Please request a new one.</p>
<div className="w-full space-y-sm">
<button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-label text-label py-md rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-xs" id="btn-resend-invalid">
<span className="material-symbols-outlined text-[18px]" data-icon="send">send</span>
<span>Resend Verification Email</span>
</button>
<button className="w-full text-primary font-label text-label py-md rounded-lg hover:bg-surface-container-low transition-colors">
                        Return to Login
                    </button>
</div>
</div>

<div className="hidden flex-col items-center justify-center py-lg animate-fade-in" id="state-expired">
<div className="w-16 h-16 rounded-full bg-[#FFF3E0] flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-[32px] text-[#E65100]" data-icon="timer_off">timer_off</span>
</div>
<h2 className="text-section-heading font-section-heading text-on-surface mb-sm">Link expired</h2>
<p className="text-body font-body text-on-surface-variant text-center mb-lg">This verification link has expired for your security.</p>
<div className="w-full space-y-sm">
<button className="w-full bg-primary-container text-on-primary font-label text-label py-md rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-xs" id="btn-resend-expired">
<span>Resend Verification Email</span>
</button>
<button className="w-full text-primary font-label text-label py-md rounded-lg hover:bg-surface-container-low transition-colors">
                        Return to Login
                    </button>
</div>
</div>
</div>

</main>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-surface-tint opacity-5 blur-[120px] rounded-full"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-primary opacity-5 blur-[120px] rounded-full"></div>
</div>


    </div>
  );
}

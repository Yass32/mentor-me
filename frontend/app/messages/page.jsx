"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const list = document.getElementById("conversation-list");
    const chat = document.getElementById("active-chat");
    const back = document.getElementById("back-to-list-btn");
    const close = document.getElementById("close-conversations-btn");
    if (!list || !chat) return;
    const showChat = () => { list.classList.add("m-hide-mobile"); chat.classList.remove("m-hide-mobile"); };
    const showList = () => { chat.classList.add("m-hide-mobile"); list.classList.remove("m-hide-mobile"); };
    const apply = (initial) => {
      if (window.innerWidth >= 768) {
        list.classList.remove("m-hide-mobile");
        chat.classList.remove("m-hide-mobile");
      } else if (initial) {
        showList();
      }
    };
    apply(true);
    const onResize = () => apply(false);
    const rows = Array.from(list.querySelectorAll(".cursor-pointer"));
    const onRow = () => { if (window.innerWidth < 768) showChat(); };
    rows.forEach((r) => r.addEventListener("click", onRow));
    back && back.addEventListener("click", showList);
    close && close.addEventListener("click", showChat);
    window.addEventListener("resize", onResize);
    return () => {
      rows.forEach((r) => r.removeEventListener("click", onRow));
      back && back.removeEventListener("click", showList);
      close && close.removeEventListener("click", showChat);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body text-body antialiased overflow-hidden h-screen flex flex-col">
<header className="header-glass border-b border-outline-variant/50 shadow-sm sticky top-0 z-50 w-full"><div className="flex justify-between items-center px-lg h-16 max-w-container-max mx-auto"><div className="flex items-center gap-lg h-full"><a className="font-section-heading text-section-heading font-bold text-primary mr-lg hover:opacity-80 transition-opacity" href="/dashboard">Mentor.me</a><nav className="hidden md:flex items-center gap-md h-full"><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/projects">Projects</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-on-surface-variant hover:text-primary transition-colors duration-150 nav-link-animated" href="/dashboard">Dashboard</a><a className="h-full flex items-center font-body text-body px-xs py-sm text-primary border-b-2 border-primary font-semibold" href="/messages">Messages</a></nav></div><div className="flex items-center gap-sm"><div className="hidden md:block"><div className="relative group"><button aria-label="Account menu" className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-card-title text-card-title hover:ring-2 hover:ring-primary transition-all cursor-pointer avatar-glow">JD</button><div className="absolute right-0 top-full mt-1 w-44 bg-surface/90 backdrop-blur-lg border border-outline-variant/50 rounded-xl shadow-card-elevated py-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50"><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/profile"><span className="material-symbols-outlined text-[18px]">person</span>Profile</a><a className="flex items-center gap-sm px-md py-sm text-on-surface-variant hover:bg-surface-container font-label text-label transition-colors" href="/settings"><span className="material-symbols-outlined text-[18px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-sm px-md py-sm text-error hover:bg-error-container font-label text-label transition-colors" href="/login"><span className="material-symbols-outlined text-[18px]">logout</span>Log out</a></div></div></div><button aria-label="Open menu" className="md:hidden p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">menu</span></button></div></div></header><div className="fixed inset-0 z-[60] flex flex-col p-lg md:hidden bg-surface shadow-xl transform -translate-x-full transition-transform duration-300" id="mobile-nav"><div className="flex justify-between items-center mb-xl"><span className="font-section-heading text-section-heading font-bold text-primary">Mentor.me</span><button aria-label="Close menu" className="p-sm text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">close</span></button></div><nav className="flex flex-col gap-xs"><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/projects"><span className="material-symbols-outlined text-[20px]">work</span>Projects</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/dashboard"><span className="material-symbols-outlined text-[20px]">dashboard</span>Dashboard</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/messages"><span className="material-symbols-outlined text-[20px]">forum</span>Messages</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/profile"><span className="material-symbols-outlined text-[20px]">person</span>Profile</a><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/settings"><span className="material-symbols-outlined text-[20px]">settings</span>Settings</a><div className="border-t border-outline-variant my-xs"></div><a className="flex items-center gap-md p-md font-label text-label text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="/login"><span className="material-symbols-outlined text-[20px]">logout</span>Log out</a></nav></div>

<main className="flex-1 flex overflow-hidden w-full relative">

<div className="flex w-full h-full pb-[72px] md:pb-0"> 

<div className="w-full md:w-[320px] flex-shrink-0 flex flex-col bg-surface-container-lowest/80 backdrop-blur-sm border-r border-outline-variant/50 h-full z-10 transition-transform duration-300 transform md:translate-x-0 absolute md:relative shadow-[1px_0_3px_rgba(0,0,0,0.05)]" id="conversation-list">

<div className="p-md border-b border-outline-variant/50 flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-sm z-10">
<h1 className="font-section-heading text-section-heading text-on-surface flex items-center gap-sm">
                        Messages
                        <span className="bg-error text-on-error text-[10px] font-bold px-2 py-0.5 rounded-full leading-tight animate-pulse-soft">3</span>
</h1>
<button className="p-sm text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors md:hidden" id="close-conversations-btn">
<span className="material-symbols-outlined">close</span>
</button>
<button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors hidden md:block group">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">edit_square</span>
</button>
</div>

<div className="p-sm border-b border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur-sm z-10">
<div className="relative group">
<span className="material-symbols-outlined absolute left-sm top-1/2 transform -translate-y-1/2 text-on-surface-variant text-sm group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-low border border-transparent rounded-lg py-xs pl-8 pr-sm text-sm focus:bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface placeholder:text-on-surface-variant hover:bg-surface-container-lowest" placeholder="Search messages..." type="text" />
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar pb-md stagger-children">

<div data-animate className="flex items-start gap-sm p-md cursor-pointer transition-colors bg-primary/5 border-l-4 border-primary hover:bg-primary/10 group">
<div className="relative flex-shrink-0">
<img alt="Sarah Jenkins" className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant shadow-sm avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDKHEdMOPbDmKmCAJwGKUpsTj7x7KrFzcmzygos1BL2O1QLbiDn6zQ-Ar4JK3n6R8lqAPJIDQL-Pqw3XJDuRb2AWVK7sV43nZaiYUw6q44KxlD3uZFOl2u-jpjqJwEjurcyxj_H6D8PMQNwoUQJ0fnlZGoTw34vCmS9s2_44EZZZCjIYZjd5Gis3JG2ZIhqniF-V0DBJvK5u8av4J12X0u58Vvpazz1r7W5eH2xHP6fpMOC8yi0egQjRJ5KO-Y-GvglNQwURrOnY" />
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-xs">
<h3 className="font-card-title text-card-title text-on-surface truncate pr-sm font-semibold group-hover:text-primary transition-colors">Sarah Jenkins</h3>
<span className="font-muted text-muted text-[11px] text-primary flex-shrink-0 font-medium">10:42 AM</span>
</div>
<p className="font-label text-label text-primary uppercase tracking-wider mb-1 truncate">React Native Migration</p>
<p className="font-body text-body text-on-surface text-sm truncate font-medium">I've pushed the latest changes to the staging branch. Can you review?</p>
</div>
<div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 animate-pulse-soft"></div>
</div>

<div data-animate className="flex items-start gap-sm p-md cursor-pointer transition-colors hover:bg-surface-container-low border-l-4 border-transparent group animation-delay-100">
<div className="relative flex-shrink-0">
<div className="w-[40px] h-[40px] rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-lg border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow">
                                MR
                            </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-xs">
<h3 className="font-card-title text-card-title text-on-surface truncate pr-sm group-hover:text-primary transition-colors">Marcus Rodriguez</h3>
<span className="font-muted text-muted text-[11px] text-on-surface-variant flex-shrink-0">Yesterday</span>
</div>
<p className="font-label text-label text-on-surface-variant uppercase tracking-wider mb-1 truncate">Database Architecture</p>
<p className="font-body text-body text-on-surface-variant text-sm truncate">Thanks for the feedback on the ERD. I'll make those updates.</p>
</div>
</div>

<div data-animate className="flex items-start gap-sm p-md cursor-pointer transition-colors hover:bg-surface-container-low border-l-4 border-transparent group animation-delay-200">
<div className="relative flex-shrink-0">
<img alt="David Chen" className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant shadow-sm group-hover:shadow-glow-soft transition-shadow avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZk3PrHdYaccHECknnY16m2L_ISeL-uH6TS00ak_SOvw34F13a-WAbf8vW7eUtLJtKDzrGbUxG0ZayYVqdQpygZs-8wOb1yndG7GW0wOG8RSql3fuTnYthK4oEl2GG1VjTm5RbgtIDyxkhyLlygi9Oxmk0CvujgSZfRHmZzVKUfAS7aRuszGx5LE1yWFlqVFPmxgHCQUV29rTgW-xbJuTfRMu_6xb7AxPHyWy4m0z6xBtZ7U3UdwqyjuFrRykbg9xIiI3n3YND6Nk" />
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-xs">
<h3 className="font-card-title text-card-title text-on-surface truncate pr-sm font-semibold group-hover:text-primary transition-colors">David Chen</h3>
<span className="font-muted text-muted text-[11px] text-primary flex-shrink-0 font-medium">Mon</span>
</div>
<p className="font-label text-label text-on-surface-variant uppercase tracking-wider mb-1 truncate">API Integration</p>
<p className="font-body text-body text-on-surface text-sm truncate font-medium">Are we still on for the sync at 2 PM?</p>
</div>
<div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
</div>

<div data-animate className="flex items-start gap-sm p-md cursor-pointer transition-colors hover:bg-surface-container-low border-l-4 border-transparent group animation-delay-300">
<div className="relative flex-shrink-0">
<img alt="Elena Rostova" className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant opacity-70 group-hover:opacity-100 transition-opacity avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3jSDoYEOUFbT07dLWUE_fNX8WCdCFKHBqbGgAD9G6D7MkQzwlVaC8291QN4Vo70A4FwcpDHKOb97ejuu-IgxK8hxaJEF1dEFsFmKQIbV9Ye8LrI3RHoSoaUnpRdijLUYiDQJ95XfhDFILvc0OyPckYRrAREKdKdy_3mkJyD3OqEhyq5POwYWmN4oRs45y0j7qcEaMhNmaxt5EIXsbApw5F9A_gt5mBxXktxkOkGeMGIHThTMYjO_5FPTUiGlVsev5tM2biRXxi4" />
</div>
<div className="flex-1 min-w-0 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex justify-between items-baseline mb-xs">
<h3 className="font-card-title text-card-title text-on-surface truncate pr-sm group-hover:text-primary transition-colors">Elena Rostova</h3>
<span className="font-muted text-muted text-[11px] text-on-surface-variant flex-shrink-0">Oct 12</span>
</div>
<p className="font-label text-label text-on-surface-variant uppercase tracking-wider mb-1 truncate">Career Mentorship</p>
<p className="font-body text-body text-on-surface-variant text-sm truncate">I accepted the offer! Thank you so much for your guidance.</p>
</div>
</div>

<div data-animate className="flex items-start gap-sm p-md cursor-pointer transition-colors hover:bg-surface-container-low border-l-4 border-transparent group animation-delay-400">
<div className="relative flex-shrink-0">
<div className="w-[40px] h-[40px] rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-lg border border-outline-variant opacity-70 group-hover:opacity-100 transition-opacity">
                                JL
                            </div>
</div>
<div className="flex-1 min-w-0 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex justify-between items-baseline mb-xs">
<h3 className="font-card-title text-card-title text-on-surface truncate pr-sm group-hover:text-primary transition-colors">James Lawson</h3>
<span className="font-muted text-muted text-[11px] text-on-surface-variant flex-shrink-0">Oct 05</span>
</div>
<p className="font-label text-label text-on-surface-variant uppercase tracking-wider mb-1 truncate">Frontend Basics</p>
<p className="font-body text-body text-on-surface-variant text-sm truncate">Great session today. I'll practice the flexbox exercises.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-surface h-full relative m-hide-mobile" id="active-chat">



<div className="p-md border-b border-outline-variant/50 flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-sm z-10 shadow-sm">
<div className="flex items-center gap-md">
<button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors md:hidden mr-xs" id="back-to-list-btn">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div className="relative flex-shrink-0">
<img alt="Sarah Jenkins" className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant shadow-sm avatar-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB1O7wvkylFvANigH3YTQiZ-2EKo0L_Zpew1QwN86Yg9SSzEYHL_eAxInaLQNj3oyp6AVXgM3SJFiUUKk-0gWw1CeSCaPOFUpToHYCvgclHzE9IvzJ9HHuFzSpc4Qv1GCBh5dqvCuacC22Q7_LNKCxVswa2OfKAFX2AMnYtyrOO3_vQp5kj4HQyyQ_n9I5Gu-oIPIoRfX32OWhnOFqACQWhHFfJPRelf6Wii73BGhQNt9VlsWrmIVnMxuWOti4skonJFVexAbovw8" />
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></div>
</div>
<div>
<h2 className="font-card-title text-card-title text-on-surface">Sarah Jenkins</h2>
<p className="font-muted text-muted text-[13px] text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary opacity-70 animate-pulse-soft"></span>
                                React Native Migration
                            </p>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors group" title="Video Call">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">videocam</span>
</button>
<button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors group" title="Project Details">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">info</span>
</button>
<button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors hidden sm:block group" title="More Options">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">more_vert</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-md flex flex-col gap-md bg-surface-bright relative">

<div className="flex justify-center my-sm opacity-0 animate-fade-in-up">
<span className="bg-surface-container-high text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider px-sm py-1 rounded-full shadow-sm">Yesterday</span>
</div>

<div className="flex flex-col items-start max-w-[85%] md:max-w-[70%] opacity-0 animate-slide-in-right animation-delay-100">
<div className="bg-surface-container-low text-on-surface p-sm md:p-md rounded-xl rounded-tl-sm border border-outline-variant/50 shadow-sm text-sm hover:shadow-md transition-shadow">
                            Hi! I'm struggling a bit with the navigation state management in the new React Native app. The context seems to be losing its state on unmount.
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 ml-1">4:15 PM</span>
</div>

<div className="flex flex-col items-end self-end max-w-[85%] md:max-w-[70%] opacity-0 animate-slide-in-right animation-delay-200">
<div className="bg-primary text-on-primary p-sm md:p-md rounded-xl rounded-tr-sm shadow-md text-sm hover:shadow-glow-primary transition-shadow">
                            Hey Sarah. That's a common issue with React Navigation. Are you using a Context Provider high enough in the component tree?
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 mr-1 flex items-center gap-1">
                            4:20 PM
                            <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
</span>
</div>

<div className="flex flex-col items-start max-w-[85%] md:max-w-[70%] opacity-0 animate-slide-in-right animation-delay-300">
<div className="bg-surface-container-low text-on-surface p-sm md:p-md rounded-xl rounded-tl-sm border border-outline-variant/50 shadow-sm text-sm hover:shadow-md transition-shadow">
                            I put it wrapping the root navigator. Let me send over a snippet.
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 ml-1">4:22 PM</span>
</div>

<div className="flex flex-col items-start max-w-[85%] md:max-w-[75%] mt-[-8px] opacity-0 animate-slide-in-right animation-delay-400">
<div className="bg-surface-container-highest text-on-surface p-sm md:p-md rounded-xl rounded-tl-sm shadow-sm text-sm font-mono overflow-x-auto w-full border border-outline-variant/50">
<pre className="text-xs"><code>export default function App() {'{'}
  return (
    &lt;NavigationContainer&gt;
      &lt;AuthProvider&gt;
        &lt;RootStack /&gt;
      &lt;/AuthProvider&gt;
    &lt;/NavigationContainer&gt;
  );
{'}'}</code></pre>
</div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 ml-1">4:23 PM</span>
</div>

<div className="flex justify-center my-sm opacity-0 animate-fade-in-up animation-delay-500">
<span className="bg-surface-container-high text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider px-sm py-1 rounded-full shadow-sm">Today</span>
</div>

<div className="flex flex-col items-end self-end max-w-[85%] md:max-w-[70%] opacity-0 animate-slide-in-right animation-delay-600">
<div className="bg-primary text-on-primary p-sm md:p-md rounded-xl rounded-tr-sm shadow-md text-sm hover:shadow-glow-primary transition-shadow">
                            Ah, I see it. You should wrap the `NavigationContainer` with your `AuthProvider`, not the other way around. The navigation state needs access to the auth context, but if the navigator unmounts, the provider inside it goes too.
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 mr-1 flex items-center gap-1">
                            10:15 AM
                            <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
</span>
</div>

<div className="flex flex-col items-start max-w-[85%] md:max-w-[70%] opacity-0 animate-slide-in-right animation-delay-700">
<div className="bg-surface-container-low text-on-surface p-sm md:p-md rounded-xl rounded-tl-sm border border-outline-variant/50 shadow-sm text-sm hover:shadow-md transition-shadow">
                            That makes total sense! Let me try flipping them.
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 ml-1">10:30 AM</span>
</div>

<div className="flex flex-col items-start max-w-[85%] md:max-w-[70%] mt-[-8px] opacity-0 animate-slide-in-right animation-delay-700">
<div className="bg-surface-container-low text-on-surface p-sm md:p-md rounded-xl rounded-tl-sm border border-outline-variant/50 shadow-sm text-sm relative hover:shadow-md transition-shadow">
                            I've pushed the latest changes to the staging branch. Can you review?
                        </div>
<span className="font-muted text-[11px] text-on-surface-variant mt-1 ml-1">10:42 AM</span>
</div>



<div className="h-4 w-full"></div>
</div>

<div className="p-md border-t border-outline-variant/50 bg-surface/90 backdrop-blur-sm z-10 shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
<div className="flex items-end gap-sm bg-surface-container-lowest border border-outline-variant/50 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition-all p-sm shadow-sm group">
<button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full transition-colors flex-shrink-0" title="Attach file">
<span className="material-symbols-outlined">attach_file</span>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-body font-body text-on-surface placeholder:text-on-surface-variant resize-none py-sm px-1 max-h-[120px] outline-none custom-scrollbar" placeholder="Type a message..." rows="1"></textarea>
<button className="p-sm text-white bg-primary hover:shadow-glow-primary hover:-translate-y-[1px] rounded-full transition-all flex-shrink-0 shadow-sm flex items-center justify-center w-10 h-10 self-end btn-shimmer" title="Send">
<span className="material-symbols-outlined text-[20px]" style={{'fontVariationSettings':'\'FILL\' 1'}}>send</span>
</button>
</div>
<div className="flex justify-between items-center mt-xs px-1">
<span className="text-[10px] text-on-surface-variant">Press Enter to send, Shift+Enter for new line</span>
<div className="flex gap-2">
<button className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110"><span className="material-symbols-outlined text-[16px]">sentiment_satisfied</span></button>
<button className="text-on-surface-variant hover:text-primary transition-colors hover:scale-110"><span className="material-symbols-outlined text-[16px]">code</span></button>
</div>
</div>
</div>


</div>
</div>
</main>


    </div>
  );
}

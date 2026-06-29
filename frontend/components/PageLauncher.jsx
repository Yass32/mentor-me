'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRole } from './Providers';

const GROUPS = [
  { label: 'Public', links: [
    ['Landing', '/'], ['Login', '/login'], ['Register', '/register'],
    ['Verify email', '/verify-email'], ['Forgot password', '/forgot-password'],
    ['Reset password', '/reset-password'],
  ]},
  { label: 'Onboarding', links: [['Onboarding', '/onboarding']] },
  { label: 'Mentee', links: [
    ['Browse projects', '/projects'], ['Project detail', '/projects/1'],
    ['Dashboard (role-aware)', '/dashboard'],
  ]},
  { label: 'Mentor', links: [
    ['My projects', '/my-projects'], ['Project detail', '/my-projects/1'],
    ['Applicants', '/my-projects/1/applicants'], ['Edit project', '/my-projects/1/edit'],
    ['Create project', '/create-project'], ['Submission review', '/submission-review'],
  ]},
  { label: 'Shared', links: [
    ['Messages', '/messages'], ['My profile', '/profile'],
    ['Public profile', '/profile/2'], ['Settings', '/settings'],
  ]},
  { label: 'System', links: [['Error pages', '/error-pages']] },
];

export default function PageLauncher() {
  const [open, setOpen] = useState(false);
  const { role, setRole } = useRole();

  return (
    <div className="fixed bottom-4 left-4 z-[200] print:hidden">
      {open && (
        <div className="mb-2 w-72 max-h-[70vh] overflow-y-auto rounded-xl border border-outline-variant bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.15)] p-3 text-on-surface">
          <div className="flex items-center justify-between mb-2">
            <span className="font-card-title text-card-title">Demo navigator</span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="text-secondary hover:text-on-surface">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mb-3">
            <span className="font-label text-label uppercase text-on-surface-variant">Active role</span>
            <div className="mt-1 grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
              {['mentee', 'mentor'].map((r) => (
                <button key={r} onClick={() => setRole(r)}
                  className={`rounded-md py-1 text-sm capitalize transition-colors ${role === r ? 'bg-primary-container text-white' : 'text-on-surface-variant hover:bg-white'}`}>
                  {r}
                </button>
              ))}
            </div>
          </div>
          {GROUPS.map((g) => (
            <div key={g.label} className="mb-2">
              <div className="font-label text-label uppercase text-on-surface-variant mb-1">{g.label}</div>
              <div className="flex flex-col">
                {g.links.map(([name, href]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-1.5 text-sm text-on-surface hover:bg-surface-container-low">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-primary-container px-4 py-3 text-white shadow-lg hover:bg-primary transition-colors">
        <span className="material-symbols-outlined">{open ? 'close' : 'apps'}</span>
        <span className="text-sm font-semibold pr-1">Pages</span>
      </button>
    </div>
  );
}

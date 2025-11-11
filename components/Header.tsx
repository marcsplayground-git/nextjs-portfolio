"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Route } from "next";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  // { href: "/contact", label: "Contact" }, On hold
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold">
          Marc Jason Yu
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a href="/Marc-Jason-Yu-CV.pdf" className="btn btn-primary">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

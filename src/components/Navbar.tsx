"use client";
import { useEffect, useState } from "react";
import { nav } from "@/data/content";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label="Sanat Kumar, home" className="border-2 border-fg px-2 text-xl font-extrabold tracking-wider">SK</a>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-b border-line bg-bg px-5 py-2 lg:static lg:flex lg:flex-row lg:border-0 lg:p-0`}>
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
              className={`block border-b-2 px-3 py-3 text-sm lg:py-2 ${active === n.toLowerCase() ? "border-acc text-fg" : "border-transparent text-mut hover:text-fg"}`}>{n}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/resume/Sanat_Kumar_Resume.pdf" download className="hidden min-h-11 items-center rounded-md border border-fg px-4 text-sm font-semibold hover:bg-acc hover:text-white sm:inline-flex">Download Resume</a>
          <button aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)} className="min-h-11 rounded-md border border-line px-3 lg:hidden">Menu</button>
        </div>
      </nav>
    </header>
  );
}

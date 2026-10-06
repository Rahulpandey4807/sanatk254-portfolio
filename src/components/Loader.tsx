"use client";
import { useEffect, useState } from "react";
export default function Loader() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setFade(true), 800);
    const b = setTimeout(() => setGone(true), 1250);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (gone) return null;
  return (
    <div aria-hidden className={`fixed inset-0 z-50 grid place-items-center bg-bg transition-opacity duration-500 ${fade ? "opacity-0 pointer-events-none" : ""}`}>
      <div className="text-center">
        <span className="border-2 border-fg px-4 py-1 text-3xl font-extrabold tracking-wider">SK</span>
        <i className="mx-auto mt-4 block h-0.5 w-40 overflow-hidden bg-line"><b className="block h-full bg-acc" style={{ animation: "bar .7s ease-out forwards" }} /></i>
      </div>
    </div>
  );
}

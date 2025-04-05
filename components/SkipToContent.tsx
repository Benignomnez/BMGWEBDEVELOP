"use client";

import { useState, useEffect } from "react";

export default function SkipToContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render on client side to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <a
      href="#main-content"
      className="fixed left-2 top-2 z-50 -translate-y-16 rounded bg-purple-600 px-4 py-2 text-white transition focus:translate-y-0 focus:outline-none"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("main-content")?.focus();
        document.getElementById("main-content")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Skip to content
    </a>
  );
}

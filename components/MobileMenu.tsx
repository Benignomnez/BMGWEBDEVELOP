"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mail, CircleUserRound, Phone } from "lucide-react";

interface MobileMenuProps {
  items: {
    name: string;
    path: string;
  }[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-4 flex items-center justify-between border-b">
          <div className="relative w-24 h-12">
            <Image
              src="/bmg-logo.png"
              alt="BMG Web Develop"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="p-4 overflow-y-auto">
          <nav className="space-y-4">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.path)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpen(false);
                }}
                className="block py-2 px-4 text-white font-medium text-lg rounded-md bg-purple-600/90 hover:bg-purple-700 transition-colors shadow-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3"
              onClick={() => {
                window.location.href = "#contact";
                setIsOpen(false);
              }}
            >
              Get Started
            </Button>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <a
                href="mailto:benignomnez@gmail.com"
                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              >
                <Mail className="h-6 w-6 text-purple-600 mb-1" />
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                  Email
                </span>
              </a>
              <a
                href="https://www.instagram.com/bmgwebdevelop_rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              >
                <CircleUserRound className="h-6 w-6 text-purple-600 mb-1" />
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                  Instagram
                </span>
              </a>
              <a
                href="https://wa.me/18499255780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 shadow-md rounded-lg"
              >
                <Phone className="h-6 w-6 text-purple-600 mb-1" />
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

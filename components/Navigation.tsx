"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const navItems = [
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/bmg-logo.png"
                alt="BMG Web Develop Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">BMG Web Develop</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={item.path}
                className="text-sm font-medium hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.path)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[120px]">
                <DropdownMenuItem className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => (window.location.href = "#contact")}>
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <MobileMenu items={navItems} />
        </div>
      </div>
    </motion.header>
  );
}

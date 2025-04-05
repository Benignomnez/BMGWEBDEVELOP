"use client";

import { motion } from "framer-motion";

import SkipToContent from "@/components/SkipToContent";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SkipToContent />
      <div className="flex min-h-screen flex-col">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main-content" tabIndex={-1} className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ServicesSection />

          {/* About Section */}
          <AboutSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer role="contentinfo" className="bg-gray-900 py-10 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-6 md:mb-0">
                <p className="text-sm">
                  © {new Date().getFullYear()} BMG Web Develop. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-purple-400">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-purple-400">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

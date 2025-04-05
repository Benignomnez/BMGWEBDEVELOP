"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900 py-20 text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-1/4 left-1/3 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-col items-start space-y-8"
          >
            <div className="rounded-full bg-indigo-600/20 px-4 py-1 text-sm font-medium text-indigo-200">
              Web Design & Digital Marketing
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              We build stunning websites that drive results
            </h1>
            <p className="text-lg text-indigo-100">
              Get a professional, mobile-friendly website that helps your
              business grow online. Our expert team delivers beautiful design
              and powerful marketing solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-indigo-100"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 hover:text-purple-600"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-2xl"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/hero-image.jpg"
                alt="Web Design Services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

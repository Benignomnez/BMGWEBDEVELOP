"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={aboutRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={
              aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                aboutInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              About Us
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Benigno Martinez
            </motion.h2>
            <motion.h3
              className="text-xl font-semibold text-purple-600 dark:text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Web Designer & Digital Marketer
            </motion.h3>
            <motion.p
              className="text-gray-500 md:text-xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With a passion for creating stunning digital experiences, I help
              brands stand out in the crowded online space. My approach combines
              creative design with strategic marketing to deliver results that
              exceed expectations.
            </motion.p>
            <motion.ul
              className="grid gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              {[
                "Years of industry experience",
                "Satisfied clients across various industries",
                "Custom solutions for unique business needs",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  variants={slideIn}
                >
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                  <span className="dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="mx-auto lg:ml-auto relative"
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 absolute inset-0 rounded-lg transform rotate-3 scale-105 opacity-20"
              animate={{ rotate: [3, 2, 3], scale: [1.05, 1.04, 1.05] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <div className="relative overflow-hidden rounded-lg bg-white p-2 shadow-xl dark:bg-gray-800">
              <Image
                src="/benigno.png"
                alt="Benigno Martinez - Web Designer & Digital Marketer"
                width={400}
                height={500}
                className="rounded-lg object-cover object-center"
                style={{
                  backgroundColor: "transparent",
                  maxHeight: "500px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

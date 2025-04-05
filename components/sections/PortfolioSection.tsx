"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: false, amount: 0.3 });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const portfolioItems = [
    {
      image: "/portfolio-1.jpg",
      title: "E-commerce Platform",
      description: "Custom online store with payment integration",
    },
    {
      image: "/portfolio-2.jpg",
      title: "Restaurant Website",
      description: "Responsive design with online ordering system",
    },
    {
      image: "/portfolio-3.jpg",
      title: "Social Media Campaign",
      description: "Brand awareness campaign with 200% ROI",
    },
    {
      image: "/portfolio-4.jpg",
      title: "Mobile App Design",
      description: "User-friendly interface with seamless UX",
    },
    {
      image: "/portfolio-5.jpg",
      title: "Corporate Website",
      description: "Professional design with content management",
    },
    {
      image: "/portfolio-6.jpg",
      title: "Marketing Campaign",
      description: "Integrated strategy with measurable results",
    },
  ];

  const instagramUrl = "https://www.instagram.com/bmgwebdevelop_rd/?hl=en";

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={
            portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                portfolioInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Our Work
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={
                portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={
                portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Check out some of our recent work and successful client projects
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={portfolioInView ? "visible" : "hidden"}
        >
          {portfolioItems.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                aria-label={`View ${project.title} on Instagram`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end pointer-events-none"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-200"
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={
            portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="mt-8 flex items-center gap-2"
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

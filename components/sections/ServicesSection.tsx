"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Globe, Laptop, Rocket } from "lucide-react";

export default function ServicesSection() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });

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

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-purple-600" />,
      title: "Web Design",
      description:
        "Beautiful, responsive websites that look amazing on all devices and help convert visitors into customers.",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-600" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies that deliver exceptional user experiences.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-600" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive more organic traffic to your website.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-purple-600" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to help your business reach and engage your target audience.",
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="bg-gray-50 py-20 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Services That Drive Your Business Forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            From beautiful web design to powerful digital marketing, we offer
            everything you need to succeed online.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

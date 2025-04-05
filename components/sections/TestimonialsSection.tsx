"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function TestimonialsSection() {
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: false,
    amount: 0.3,
  });

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

  const testimonials = [
    {
      image: "emily.jpg",
      name: "Emily Montero",
      role: "Owner, Luxxlashess",
      quote:
        "BMG Web Develop transformed our online presence completely. The website they created not only looks amazing but also performs exceptionally well.Implemented our booking system and helped us get more clients.",
    },
    {
      image: "/yessicamk.jpg",
      name: "Yessica Martinez",
      role: "Manager, NoriaRD",
      quote:
        "The social media strategy developed by Benigno helped us increase our customer engagement by 150%. Highly recommended!",
    },
    {
      image: "/testimonial-3.jpg",
      name: "Jennifer Lee",
      role: "Marketing Director, StyleHouse",
      quote:
        "Working with BMG Web Develop was a game-changer for our brand. Their attention to detail and creative approach exceeded our expectations.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={
            testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                testimonialsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Testimonials
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={
                testimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={
                testimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Don't just take our word for it - hear from some of our satisfied
              clients
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm dark:border-gray-700"
              variants={scaleIn}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  testimonialsInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
              <motion.p
                className="text-gray-500 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                "{testimonial.quote}"
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

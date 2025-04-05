"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, CircleUserRound, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 });

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
      id="contact"
      ref={contactRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={
              contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                contactInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Get In Touch
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="max-w-[600px] text-gray-200 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ready to take your online presence to the next level? Contact us
              today to discuss your project.
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  text: "benignomnez@gmail.com",
                  link: "mailto:benignomnez@gmail.com",
                },
                {
                  icon: <CircleUserRound className="h-5 w-5" />,
                  text: "@bmgwebdevelop_rd",
                  link: "https://www.instagram.com/bmgwebdevelop_rd/",
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  text: "WhatsApp: 1849-925-5780",
                  link: "https://wa.me/18499255780",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  variants={slideIn}
                >
                  {item.icon}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-white"
                  >
                    {item.text}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-lg border bg-white p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={
              contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

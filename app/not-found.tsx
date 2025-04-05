"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900 py-24 text-white md:py-32 lg:py-40">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-1/4 left-1/3 h-1/2 w-1/2 rounded-full bg-white/30 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-2 text-7xl font-bold md:text-8xl lg:text-9xl">
                404
              </h1>
              <h2 className="mb-6 text-2xl font-medium md:text-3xl lg:text-4xl">
                Page Not Found
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-lg text-indigo-100">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-indigo-100"
                    asChild
                  >
                    <Link href="/">
                      <Home className="mr-2 h-5 w-5" />
                      Go Home
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Go Back
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="bg-gray-900 py-6 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} BMG Web Develop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

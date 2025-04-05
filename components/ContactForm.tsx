"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center space-y-8 text-center py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Contact Us Directly
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Click on one of our contact options below
        </p>
      </motion.div>

      <div className="w-full max-w-md space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={() => window.open("https://wa.me/18499255780", "_blank")}
            className="w-full text-lg py-7 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center gap-3 shadow-md rounded-xl"
          >
            <Phone className="h-6 w-6" />
            Chat on WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={() => window.open("sms:+18499255780", "_blank")}
            className="w-full text-lg py-7 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center gap-3 shadow-md rounded-xl"
          >
            <MessageCircle className="h-6 w-6" />
            Send a Text Message
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-md"
      >
        <p className="text-base text-gray-700 dark:text-gray-300 font-medium mb-2">
          We're available Monday-Friday
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We'll respond to your message as soon as possible!
        </p>
      </motion.div>
    </div>
  );
}

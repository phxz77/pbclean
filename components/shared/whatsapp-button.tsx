"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a PB Clean"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-medium transition-shadow hover:shadow-lg focus-ring md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}

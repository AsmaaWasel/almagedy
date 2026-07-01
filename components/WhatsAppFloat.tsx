"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/966507634181"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
      <MessageCircle size={24} className="relative" />
    </motion.a>
  );
}

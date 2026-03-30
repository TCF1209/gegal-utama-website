"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  { icon: Shield, titleKey: "trust.licensed", descKey: "trust.licensedDesc" },
  { icon: Zap, titleKey: "trust.fast", descKey: "trust.fastDesc" },
  { icon: Users, titleKey: "trust.friendly", descKey: "trust.friendlyDesc" },
  { icon: CheckCircle, titleKey: "trust.easy", descKey: "trust.easyDesc" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F7FF" }}>
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.titleKey}
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <item.icon className="w-8 h-8 text-[#1E88E5] mb-3" />
            <h3 className="text-sm font-semibold text-gray-900">{t(item.titleKey)}</h3>
            <p className="mt-1 text-xs text-gray-500">{t(item.descKey)}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

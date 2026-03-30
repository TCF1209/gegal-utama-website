"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const badges = [
  { icon: Shield, labelKey: "hero.badgeLicensed" },
  { icon: Zap, labelKey: "hero.badgeFast" },
  { icon: Users, labelKey: "hero.badgeTrusted" },
];

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Gegal Utama Sdn Bhd"
            width={240}
            height={240}
            className="h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56 object-contain"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("hero.headline")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-4 text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {t("hero.subheadline")}
        </motion.p>

        {/* Accepted Income Banner */}
        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F0F7FF] border border-[#1E88E5]/20 px-5 py-2.5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
        >
          <span className="text-[#1E88E5] text-lg">✓</span>
          <p className="text-sm sm:text-base text-gray-700">
            {t("hero.acceptedIncome")}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <button
            onClick={() => scrollTo("#apply")}
            className="w-full sm:w-auto px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#FF5722] to-[#FF6F00] shadow-md transition-transform duration-200 hover:scale-105"
          >
            {t("hero.cta")}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold border-2 border-[#1E88E5] text-[#1E88E5] transition-transform duration-200 hover:scale-105"
          >
            {t("hero.ctaSecondary")}
          </button>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.labelKey}
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.12, ease: "easeOut" }}
            >
              <badge.icon className="w-5 h-5 text-[#1E88E5]" />
              <span className="text-sm font-medium">{t(badge.labelKey)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

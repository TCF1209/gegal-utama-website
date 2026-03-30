"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "nav.services", href: "#services" },
  { key: "nav.requirements", href: "#requirements" },
  { key: "nav.faq", href: "#faq" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Gegal Utama Sdn Bhd"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold leading-tight">
              <span className="text-[#1E88E5]">GEGAL</span>{" "}
              <span className="text-[#FF6F00]">UTAMA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-[#1E88E5] transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#apply")}
              className="rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6F00] px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              {t("nav.apply")}
            </button>

            {/* Language toggle */}
            <div className="flex items-center gap-1 rounded-full border border-gray-200 px-1 py-0.5 text-sm">
              <button
                onClick={language === "en" ? toggleLanguage : undefined}
                className={`rounded-full px-3 py-1 font-medium transition-colors ${
                  language === "bm"
                    ? "bg-[#FF6F00] text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                BM
              </button>
              <button
                onClick={language === "bm" ? toggleLanguage : undefined}
                className={`rounded-full px-3 py-1 font-medium transition-colors ${
                  language === "en"
                    ? "bg-[#FF6F00] text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center gap-1 rounded-full border border-gray-200 px-1 py-0.5 text-xs">
              <button
                onClick={language === "en" ? toggleLanguage : undefined}
                className={`rounded-full px-2 py-0.5 font-medium transition-colors ${
                  language === "bm"
                    ? "bg-[#FF6F00] text-white"
                    : "text-gray-500"
                }`}
              >
                BM
              </button>
              <button
                onClick={language === "bm" ? toggleLanguage : undefined}
                className={`rounded-full px-2 py-0.5 font-medium transition-colors ${
                  language === "en"
                    ? "bg-[#FF6F00] text-white"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1E88E5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {t(link.key)}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#apply")}
                className="block w-full rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6F00] px-5 py-3 text-center text-base font-semibold text-white shadow-md"
              >
                {t("nav.apply")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

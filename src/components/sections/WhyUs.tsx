"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Banknote, Users, CheckCircle, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const reasons = [
  { icon: Shield, color: "#1E88E5", titleKey: "whyUs.r1Title", descKey: "whyUs.r1Desc" },
  { icon: Zap, color: "#FF6F00", titleKey: "whyUs.r2Title", descKey: "whyUs.r2Desc" },
  { icon: Banknote, color: "#1E88E5", titleKey: "whyUs.r3Title", descKey: "whyUs.r3Desc" },
  { icon: Users, color: "#FF6F00", titleKey: "whyUs.r4Title", descKey: "whyUs.r4Desc" },
  { icon: CheckCircle, color: "#1E88E5", titleKey: "whyUs.r5Title", descKey: "whyUs.r5Desc" },
  { icon: Briefcase, color: "#FF6F00", titleKey: "whyUs.r6Title", descKey: "whyUs.r6Desc" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          {t("whyUs.heading")}
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center
                  hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: reason.color }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

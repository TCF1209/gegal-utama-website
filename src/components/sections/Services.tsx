"use client";

import { motion } from "framer-motion";
import { Banknote, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: Banknote,
    titleKey: "services.card1Title",
    descKey: "services.card1Desc",
    accent: "#1E88E5",
  },
  {
    icon: Smartphone,
    titleKey: "services.card2Title",
    descKey: "services.card2Desc",
    accent: "#FF6F00",
  },
  {
    icon: Zap,
    titleKey: "services.card3Title",
    descKey: "services.card3Desc",
    accent: "#1E88E5",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("services.heading")}
        </motion.h2>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: service.accent }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FileText, Send, CheckCircle, DollarSign } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  { icon: FileText, titleKey: "steps.step1Title", descKey: "steps.step1Desc" },
  { icon: Send, titleKey: "steps.step2Title", descKey: "steps.step2Desc" },
  {
    icon: CheckCircle,
    titleKey: "steps.step3Title",
    descKey: "steps.step3Desc",
  },
  {
    icon: DollarSign,
    titleKey: "steps.step4Title",
    descKey: "steps.step4Desc",
  },
];

export default function Steps() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("steps.heading")}
        </motion.h2>

        {/* Steps */}
        <div className="mt-12 relative">
          {/* Connecting line - horizontal on desktop, vertical on mobile */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5"
            style={{ backgroundColor: "#1E88E5" }}
          />
          <div
            className="md:hidden absolute top-0 bottom-0 left-8 w-0.5"
            style={{ backgroundColor: "#1E88E5" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.titleKey}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* Number circle */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
                  style={{ backgroundColor: "#FF6F00" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.15 + 0.1,
                  }}
                >
                  {i + 1}
                </motion.div>

                {/* Content */}
                <div className="md:mt-5">
                  <step.icon
                    className="w-6 h-6 mx-auto mb-2 hidden md:block"
                    style={{ color: "#1E88E5" }}
                  />
                  <step.icon
                    className="w-6 h-6 mb-1 md:hidden"
                    style={{ color: "#1E88E5" }}
                  />
                  <h3 className="text-base font-semibold text-gray-900">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

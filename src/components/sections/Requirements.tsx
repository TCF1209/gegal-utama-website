"use client";

import { motion } from "framer-motion";
import { Shield, FileText, XCircle, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const eligibilityItems = [
  "requirements.el1",
  "requirements.el2",
  "requirements.el3",
  "requirements.el4",
  "requirements.el5",
];

const documentItems = [
  "requirements.doc1",
  "requirements.doc2",
  "requirements.doc3",
  "requirements.doc4",
];

const notAcceptedItems = [
  "requirements.na1",
  "requirements.na2",
  "requirements.na3",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Requirements() {
  const { t } = useLanguage();

  return (
    <section id="requirements" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          {t("requirements.heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Eligibility */}
          <motion.div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#F0F7FF" }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6" style={{ color: "#1E88E5" }} />
              <h3 className="text-xl font-semibold text-gray-900">
                {t("requirements.eligibility")}
              </h3>
            </div>
            <motion.ul
              className="space-y-4"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {eligibilityItems.map((key, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#1E88E5" }}
                  />
                  <span className="text-gray-700">{t(key)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Documents */}
          <motion.div
            className="bg-white rounded-xl shadow p-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6" style={{ color: "#1E88E5" }} />
              <h3 className="text-xl font-semibold text-gray-900">
                {t("requirements.documents")}
              </h3>
            </div>
            <motion.ul
              className="space-y-4"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {documentItems.map((key, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <FileText
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#1E88E5" }}
                  />
                  <span className="text-gray-700">{t(key)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Not Accepted */}
          <motion.div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#FFF3E0" }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6" style={{ color: "#FF6F00" }} />
              <h3 className="text-xl font-semibold text-gray-900">
                {t("requirements.notAccepted")}
              </h3>
            </div>
            <motion.ul
              className="space-y-4"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {notAcceptedItems.map((key, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <X
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#FF6F00" }}
                  />
                  <span className="text-gray-700">{t(key)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

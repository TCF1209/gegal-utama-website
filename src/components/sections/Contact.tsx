"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY, getWhatsAppUrl } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { language, t } = useLanguage();

  const whatsappMsg = language === "bm"
    ? "Saya berminat untuk tahu lebih lanjut tentang pinjaman peribadi."
    : "I am interested to know more about personal loans.";

  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: "#F0F7FF" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {t("contact.heading")}
        </h2>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          {t("contact.subheading")}
        </p>

        {/* WhatsApp - Full Width Top Card */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">{t("contact.whatsapp")}</h3>
              <p className="text-gray-500">{COMPANY.phone}</p>
            </div>
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              {t("contact.whatsappBtn")}
            </a>
          </div>
        </motion.div>

        {/* Grid of remaining contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{t("contact.call")}</h3>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{t("contact.email")}</h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {COMPANY.email}
                </a>
                <p className="text-sm text-gray-400 mt-1">{t("contact.emailResponse")}</p>
              </div>
            </div>
          </motion.div>

          {/* Office Address */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{t("contact.visit")}</h3>
                <p className="text-gray-500 text-sm mt-1">{COMPANY.address}</p>
                <div className="text-sm text-gray-400 mt-2 space-y-0.5">
                  <p>{t("contact.monFri")}</p>
                  <p>{t("contact.sat")}</p>
                  <p>{t("contact.sun")}</p>
                </div>
                <a
                  href={COMPANY.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold transition-transform hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("contact.directions")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

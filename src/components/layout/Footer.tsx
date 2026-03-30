"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, Shield, Zap, CheckCircle } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#FF6F00] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/logo.png"
                alt="Gegal Utama Sdn Bhd"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold">
                <span className="text-[#1E88E5]">GEGAL </span>
                <span className="text-[#FF6F00]">UTAMA</span>
              </h3>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-600">
              {COMPANY.name}
            </p>
            <p className="text-sm text-gray-500">{t("footer.companyDesc")}</p>
            <p className="mt-3 text-sm font-medium text-[#1E88E5]">
              &ldquo;{t("footer.tagline")}&rdquo;
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t("nav.services"), href: "#services" },
                { label: t("nav.requirements"), href: "#requirements" },
                { label: t("nav.faq"), href: "#faq" },
                { label: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-600 hover:text-[#FF6F00] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-[#1E88E5] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#FF6F00] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-[#1E88E5] shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-[#FF6F00] transition-colors"
                >
                  {COMPANY.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#1E88E5] shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
            <div className="mt-3 text-xs text-gray-500 space-y-1">
              <p>{t("contact.monFri")}</p>
              <p>{t("contact.sat")}</p>
              <p>{t("contact.sun")}</p>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">
              {t("footer.connect")}
            </h4>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#1877F2] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {t("footer.followUs")}
            </a>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield size={16} className="text-[#1E88E5]" />
                {t("footer.licensed")}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-[#1E88E5]" />
                {t("footer.trusted")}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap size={16} className="text-[#FF6F00]" />
                {t("footer.fast")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>
              &copy; 2025 {COMPANY.name}.{" "}
              {t("footer.copyright")}
            </p>
            <div className="flex gap-4">
              <span>{t("footer.terms")}</span>
              <span>{t("footer.privacy")}</span>
              <span>{t("footer.disclaimer")}</span>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-gray-400">
            {t("footer.warning")}
          </p>
        </div>
      </div>
    </footer>
  );
}

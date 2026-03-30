"use client";

import { createContext, useContext, useState, useCallback, useSyncExternalStore, ReactNode } from "react";

type Language = "bm" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "bm";
  const saved = localStorage.getItem("gegal-lang");
  return saved === "en" ? "en" : "bm";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const subscribe = useCallback((cb: () => void) => {
    window.addEventListener("storage", cb);
    return () => window.removeEventListener("storage", cb);
  }, []);
  const initialLang = useSyncExternalStore(subscribe, getStoredLanguage, () => "bm" as Language);
  const [language, setLanguage] = useState<Language>(initialLang);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "bm" ? "en" : "bm";
      localStorage.setItem("gegal-lang", next);
      return next;
    });
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// ─── Translations ────────────────────────────────────────────────

interface TranslationSet {
  [key: string]: string | TranslationSet;
}

const translations: Record<Language, TranslationSet> = {
  bm: {
    nav: {
      services: "Perkhidmatan",
      requirements: "Syarat",
      faq: "Soalan Lazim",
      contact: "Hubungi Kami",
      apply: "Mohon Sekarang",
    },
    hero: {
      headline: "Partner Kewangan Anda Yang Dipercayai",
      subheadline:
        "Pinjaman peribadi yang mudah, pantas dan selamat. Kami sedia membantu anda mencapai matlamat kewangan.",
      cta: "Mohon Sekarang",
      ctaSecondary: "Hubungi Kami",
      badgeLicensed: "Berlesen",
      badgeFast: "Kelulusan Pantas",
      badgeTrusted: "Partner Dipercayai",
      acceptedIncome:
        "Kami menerima pelbagai sumber pendapatan termasuk Zakat, JKM, Baitulmal, PERKESO, Pencen & Peruntukan",
    },
    trust: {
      licensed: "Berlesen & Dipercayai",
      licensedDesc: "Syarikat pinjaman berlesen",
      fast: "Kelulusan Pantas",
      fastDesc: "Kelulusan dalam 24 jam",
      friendly: "Perkhidmatan Mesra",
      friendlyDesc: "Kami sedia membantu anda",
      easy: "Proses Mudah",
      easyDesc: "Permohonan ringkas & cepat",
    },
    services: {
      heading: "Perkhidmatan Kami",
      card1Title: "Pembiayaan Peribadi",
      card1Desc:
        "Pinjaman peribadi untuk pelbagai keperluan dengan kadar berpatutan dan terma yang fleksibel.",
      card2Title: "Permohonan Mudah",
      card2Desc:
        "Proses permohonan yang ringkas dan pantas. Lengkapkan borang dalam 5 minit sahaja.",
      card3Title: "Kelulusan Cepat",
      card3Desc:
        "Kelulusan dalam masa 24 jam. Kami proses permohonan anda dengan segera.",
    },
    steps: {
      heading: "4 Langkah Mudah",
      step1Title: "Isi Borang Online",
      step1Desc: "Lengkapkan borang permohonan",
      step2Title: "Hantar Permohonan",
      step2Desc: "Submit aplikasi anda",
      step3Title: "Terima Kelulusan",
      step3Desc: "Kelulusan dalam 24 jam",
      step4Title: "Terima Wang",
      step4Desc: "Dana akan dikreditkan",
    },
    form: {
      heading: "Mohon Sekarang",
      subheading:
        "Isi borang di bawah dan kami akan hubungi anda dalam masa 24 jam",
      name: "Nama Penuh",
      namePlaceholder: "Masukkan nama penuh anda",
      phone: "No. Telefon",
      phonePlaceholder: "012-345 6789",
      employment: "Pekerjaan",
      employmentPlaceholder: "Pilih pekerjaan",
      state: "Negeri",
      statePlaceholder: "Pilih negeri",
      loanAmount: "Jumlah Pinjaman",
      loanAmountPlaceholder: "Pilih jumlah",
      submit: "Hantar Permohonan",
      submitting: "Menghantar...",
      employmentOptions: {
        government: "Pekerja Kerajaan",
        private: "Pekerja Swasta",
        pensioner: "Pencen",
        socso: "SOCSO (PERKESO)",
        zakat: "Penerima Zakat",
        jkm: "JKM (Kebajikan)",
      },
      errors: {
        nameRequired: "Sila masukkan nama penuh",
        nameMin: "Nama mestilah sekurang-kurangnya 3 aksara",
        phoneRequired: "Sila masukkan nombor telefon",
        phoneInvalid: "Format nombor telefon tidak sah",
        employmentRequired: "Sila pilih pekerjaan",
        stateRequired: "Sila pilih negeri",
        loanAmountRequired: "Sila pilih jumlah pinjaman",
      },
    },
    success: {
      title: "Permohonan Berjaya Dihantar!",
      message:
        "Terima kasih! Kami telah terima permohonan anda dan akan hubungi anda dalam masa 24 jam.",
      whatsapp: "Hantar via WhatsApp Juga",
      close: "Tutup",
    },
    requirements: {
      heading: "Syarat Permohonan",
      eligibility: "Kelayakan",
      documents: "Dokumen Diperlukan",
      notAccepted: "Tidak Diterima",
      el1: "Warganegara Malaysia",
      el2: "Berumur 18 hingga 75 tahun",
      el3: "Pendapatan bulanan minimum RM 1,500",
      el4: "Pekerja Kerajaan atau Swasta",
      doc1: "Kad Pengenalan Malaysia (MyKad)",
      doc2: "Slip gaji 3 bulan terkini",
      doc3: "Penyata bank 3 bulan terkini",
      doc4: "Bil utiliti terkini",
      na1: "Tunai Gaji / Cash Advance",
      na2: "Perniagaan",
      na3: "Pemberi Pinjaman Senarai Hitam",
    },
    whyUs: {
      heading: "Kenapa Pilih Gegal Utama?",
      r1Title: "Berlesen & Dipercayai",
      r1Desc: "Syarikat pinjaman wang berlesen yang sah dan dipercayai",
      r2Title: "Kelulusan Pantas",
      r2Desc: "Kelulusan dalam masa 24 jam, proses yang cepat dan efisyen",
      r3Title: "Kadar Berpatutan",
      r3Desc:
        "Kadar faedah yang kompetitif dan telus, tiada caj tersembunyi",
      r4Title: "Perkhidmatan Mesra",
      r4Desc: "Pasukan yang mesra dan sedia membantu anda",
      r5Title: "Proses Mudah",
      r5Desc: "Permohonan yang ringkas dan mudah difahami",
      r6Title: "Partner Anda",
      r6Desc:
        "Kami bukan sekadar pemberi pinjaman - kami partner kewangan anda",
    },
    faq: {
      heading: "Soalan Lazim",
      q1: "Berapa lama proses kelulusan?",
      a1: "Kelulusan biasanya mengambil masa 24 jam. Setelah dokumen lengkap, kami akan maklumkan keputusan kepada anda secepat mungkin.",
      q2: "Apa dokumen yang diperlukan?",
      a2: "MyKad, slip gaji 3 bulan, penyata bank 3 bulan, dan bil utiliti terkini.",
      q3: "Berapa jumlah pinjaman minimum dan maksimum?",
      a3: "Jumlah minimum RM 1,000 dan maksimum RM 30,000.",
      q4: "Berapa kadar faedah?",
      a4: "Kadar faedah bergantung kepada jumlah pinjaman dan tempoh bayaran. Hubungi kami untuk quotation penuh.",
      q5: "Bolehkah saya bayar awal?",
      a5: "Ya, anda boleh membuat bayaran awal tanpa penalti.",
    },
    contact: {
      heading: "Hubungi Kami",
      subheading: "Kami sedia membantu anda. Hubungi kami hari ini!",
      whatsapp: "WhatsApp Kami",
      whatsappBtn: "WhatsApp Sekarang",
      call: "Hubungi Kami",
      email: "Emel Kami",
      emailResponse: "Balasan dalam 24 jam",
      facebook: "Ikuti Kami di Facebook",
      facebookBtn: "Lawati Facebook",
      instagram: "Ikuti Kami di Instagram",
      instagramBtn: "Lawati Instagram",
      tiktok: "Ikuti Kami di TikTok",
      tiktokBtn: "Lawati TikTok",
      visit: "Lawati Pejabat Kami",
      hours: "Waktu Operasi",
      monFri: "Isnin - Jumaat: 9:00 AM - 5:30 PM",
      sat: "Sabtu: 9:00 AM - 2:30 PM",
      sun: "Ahad: TUTUP",
      directions: "Dapatkan Arah",
      formName: "Nama",
      formPhone: "Telefon",
      formEmail: "Emel",
      formMessage: "Mesej",
      formSubmit: "Hantar Mesej",
    },
    footer: {
      tagline: "Partner Kewangan Anda Yang Dipercayai",
      companyDesc: "Syarikat Pinjaman Wang Berlesen",
      quickLinks: "Pautan Pantas",
      contactInfo: "Maklumat Hubungi",
      connect: "Hubungi",
      followUs: "Ikuti Kami",
      licensed: "Berlesen",
      trusted: "Dipercayai",
      fast: "Pantas",
      copyright: "Hak Cipta Terpelihara.",
      terms: "Terma & Syarat",
      privacy: "Dasar Privasi",
      disclaimer: "Penafian",
      warning:
        "Amaran: Pemberi pinjaman wang berlesen tidak dibenarkan mengenakan caj bayaran pendahuluan.",
    },
    floating: {
      whatsapp: "WhatsApp Kami",
      facebook: "Ikuti Kami di Facebook",
      instagram: "Ikuti Kami di Instagram",
      tiktok: "Ikuti Kami di TikTok",
    },
  },
  en: {
    nav: {
      services: "Services",
      requirements: "Requirements",
      faq: "FAQ",
      contact: "Contact Us",
      apply: "Apply Now",
    },
    hero: {
      headline: "Your Trusted Financial Partner",
      subheadline:
        "Easy, fast and secure personal loans. We're here to help you achieve your financial goals.",
      cta: "Apply Now",
      ctaSecondary: "Contact Us",
      badgeLicensed: "Licensed",
      badgeFast: "Fast Approval",
      badgeTrusted: "Trusted Partner",
      acceptedIncome:
        "We accept various income sources including Zakat, JKM, Baitulmal, SOCSO, Pension & Allowances",
    },
    trust: {
      licensed: "Licensed & Trusted",
      licensedDesc: "Licensed lending company",
      fast: "Fast Approval",
      fastDesc: "Approval within 24 hours",
      friendly: "Friendly Service",
      friendlyDesc: "We're here to help you",
      easy: "Easy Process",
      easyDesc: "Simple & fast application",
    },
    services: {
      heading: "Our Services",
      card1Title: "Personal Financing",
      card1Desc:
        "Personal loans for various needs with reasonable rates and flexible terms.",
      card2Title: "Easy Application",
      card2Desc:
        "Simple and fast application process. Complete the form in just 5 minutes.",
      card3Title: "Fast Approval",
      card3Desc:
        "Approval within 24 hours. We process your application promptly.",
    },
    steps: {
      heading: "4 Easy Steps",
      step1Title: "Fill Online Form",
      step1Desc: "Complete the application form",
      step2Title: "Submit Application",
      step2Desc: "Submit your application",
      step3Title: "Get Approval",
      step3Desc: "Approval within 24 hours",
      step4Title: "Receive Money",
      step4Desc: "Funds will be credited",
    },
    form: {
      heading: "Apply Now",
      subheading:
        "Fill the form below and we'll contact you within 24 hours",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      phone: "Phone Number",
      phonePlaceholder: "012-345 6789",
      employment: "Employment Type",
      employmentPlaceholder: "Select employment type",
      state: "State",
      statePlaceholder: "Select state",
      loanAmount: "Loan Amount",
      loanAmountPlaceholder: "Select amount",
      submit: "Submit Application",
      submitting: "Submitting...",
      employmentOptions: {
        government: "Government Employee",
        private: "Private Employee",
        pensioner: "Pensioner",
        socso: "SOCSO (PERKESO)",
        zakat: "Zakat Recipient",
        jkm: "JKM (Welfare)",
      },
      errors: {
        nameRequired: "Please enter your full name",
        nameMin: "Name must be at least 3 characters",
        phoneRequired: "Please enter your phone number",
        phoneInvalid: "Invalid phone number format",
        employmentRequired: "Please select employment type",
        stateRequired: "Please select a state",
        loanAmountRequired: "Please select a loan amount",
      },
    },
    success: {
      title: "Application Successfully Submitted!",
      message:
        "Thank you! We have received your application and will contact you within 24 hours.",
      whatsapp: "Send via WhatsApp Too",
      close: "Close",
    },
    requirements: {
      heading: "Application Requirements",
      eligibility: "Eligibility",
      documents: "Required Documents",
      notAccepted: "Not Accepted",
      el1: "Malaysian Citizen",
      el2: "Age 18 to 75 years old",
      el3: "Minimum monthly income RM 1,500",
      el4: "Government or Private Employee",
      doc1: "Malaysian Identity Card (MyKad)",
      doc2: "Latest 3 months payslips",
      doc3: "Latest 3 months bank statements",
      doc4: "Latest utility bill",
      na1: "Cash Advance",
      na2: "Business Loans",
      na3: "Blacklisted Lenders",
    },
    whyUs: {
      heading: "Why Choose Gegal Utama?",
      r1Title: "Licensed & Trusted",
      r1Desc: "Legitimate and trusted licensed money lending company",
      r2Title: "Fast Approval",
      r2Desc: "Approval within 24 hours, fast and efficient process",
      r3Title: "Reasonable Rates",
      r3Desc:
        "Competitive and transparent interest rates, no hidden charges",
      r4Title: "Friendly Service",
      r4Desc: "Friendly team ready to help you",
      r5Title: "Easy Process",
      r5Desc: "Simple and easy-to-understand application",
      r6Title: "Your Partner",
      r6Desc:
        "We're not just a lender - we're your financial partner",
    },
    faq: {
      heading: "Frequently Asked Questions",
      q1: "How long does the approval process take?",
      a1: "Approval usually takes 24 hours. Once documents are complete, we will notify you of the decision as soon as possible.",
      q2: "What documents are required?",
      a2: "MyKad, 3 months payslips, 3 months bank statements, and latest utility bill.",
      q3: "What is the minimum and maximum loan amount?",
      a3: "Minimum amount RM 1,000 and maximum RM 30,000.",
      q4: "What is the interest rate?",
      a4: "Interest rate depends on loan amount and repayment period. Contact us for full quotation.",
      q5: "Can I make early payment?",
      a5: "Yes, you can make early payments without penalty.",
    },
    contact: {
      heading: "Contact Us",
      subheading: "We're here to help you. Contact us today!",
      whatsapp: "WhatsApp Us",
      whatsappBtn: "WhatsApp Now",
      call: "Call Us",
      email: "Email Us",
      emailResponse: "Response within 24 hours",
      facebook: "Follow Us on Facebook",
      facebookBtn: "Visit Facebook",
      instagram: "Follow Us on Instagram",
      instagramBtn: "Visit Instagram",
      tiktok: "Follow Us on TikTok",
      tiktokBtn: "Visit TikTok",
      visit: "Visit Our Office",
      hours: "Operating Hours",
      monFri: "Monday - Friday: 9:00 AM - 5:30 PM",
      sat: "Saturday: 9:00 AM - 2:30 PM",
      sun: "Sunday: CLOSED",
      directions: "Get Directions",
      formName: "Name",
      formPhone: "Phone",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
    footer: {
      tagline: "Your Trusted Financial Partner",
      companyDesc: "Licensed Money Lending Company",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      connect: "Connect",
      followUs: "Follow Us",
      licensed: "Licensed",
      trusted: "Trusted",
      fast: "Fast",
      copyright: "All Rights Reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      disclaimer: "Disclaimer",
      warning:
        "Warning: Licensed money lenders are not allowed to charge advance fees.",
    },
    floating: {
      whatsapp: "WhatsApp Us",
      facebook: "Follow Us on Facebook",
      instagram: "Follow Us on Instagram",
      tiktok: "Follow Us on TikTok",
    },
  },
};

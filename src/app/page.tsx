"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Steps from "@/components/sections/Steps";
import ApplicationForm from "@/components/forms/ApplicationForm";
import Requirements from "@/components/sections/Requirements";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Steps />
        <ApplicationForm />
        <Requirements />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  );
}

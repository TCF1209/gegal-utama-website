"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, CheckCircle, Monitor, MapPin, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function VideoSection() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const highlights =
    language === "bm"
      ? [
          { icon: Monitor, text: "Permohonan Online" },
          { icon: MapPin, text: "Walk-in di Pejabat" },
          { icon: Zap, text: "Hari Proses, Hari Dapat!" },
          { icon: CheckCircle, text: "Cepat Lulus" },
        ]
      : [
          { icon: Monitor, text: "Online Application" },
          { icon: MapPin, text: "Walk-in at Office" },
          { icon: Zap, text: "Same Day Processing!" },
          { icon: CheckCircle, text: "Fast Approval" },
        ];

  const heading =
    language === "bm"
      ? "Lihat Bagaimana Kami Membantu Anda"
      : "See How We Help You";

  const description =
    language === "bm"
      ? "Proses pinjaman yang mudah dan pantas. Mohon secara online atau datang terus ke pejabat kami di Ipoh."
      : "Easy and fast loan process. Apply online or visit our office in Ipoh directly.";

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Video - Phone frame style */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-[260px] sm:w-[280px] lg:w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-gray-800">
              {/* Phone notch decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-2xl z-20" />

              <video
                ref={videoRef}
                className="w-full aspect-[9/16] object-cover"
                poster="/images/video-poster.png"
                controls={isPlaying}
                playsInline
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/promo.mp4" type="video/mp4" />
              </video>

              {/* Play button overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/30"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6F00] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="w-full lg:w-7/12 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#1E88E5" : "#FF6F00",
                    }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => {
                const el = document.querySelector("#apply");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6F00] px-8 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            >
              {language === "bm" ? "Mohon Sekarang" : "Apply Now"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

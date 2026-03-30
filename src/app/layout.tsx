import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gegal-utama-website.vercel.app"),
  title: "Gegal Utama Sdn Bhd | Partner Kewangan Anda Yang Dipercayai",
  description:
    "Pinjaman peribadi yang mudah, pantas dan selamat. Syarikat pinjaman wang berlesen di Ipoh, Perak. Easy, fast and secure personal loans.",
  keywords: [
    "pinjaman peribadi",
    "personal loan",
    "pinjaman wang berlesen",
    "licensed money lender",
    "Ipoh",
    "Perak",
    "Gegal Utama",
  ],
  openGraph: {
    title: "Gegal Utama Sdn Bhd | Partner Kewangan Anda Yang Dipercayai",
    description:
      "Pinjaman peribadi yang mudah, pantas dan selamat. Syarikat pinjaman wang berlesen di Ipoh, Perak.",
    type: "website",
    locale: "ms_MY",
    alternateLocale: "en_MY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Gegal Utama Sdn Bhd",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${inter.variable} h-full antialiased font-sans`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gegal Utama Sdn Bhd",
              description:
                "Licensed money lending company providing personal loans in Ipoh, Perak.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "162A, Jalan Tasek Timur, Taman Tasek Indra",
                addressLocality: "Ipoh",
                addressRegion: "Perak",
                postalCode: "31400",
                addressCountry: "MY",
              },
              telephone: "+601153164241",
              email: "gegalutama@gmail.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:30",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/14YRfB9VnEf/",
                "https://www.instagram.com/sarah489547/",
                "https://www.tiktok.com/@ki225674xy0",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

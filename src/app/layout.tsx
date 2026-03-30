import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    <html lang="ms" className={`${inter.variable} h-full antialiased`}>
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
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

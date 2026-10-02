import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import LoginPromptModal from "@/components/LoginPromptModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "rzzxIT6bTvMvpV4t_jlY8_QPkig_PPjjckLIcDeIrko",
  },
  metadataBase: new URL("https://www.summercabs.lk"),
  title: "Summer Cabs | Premium Airport Transfers & Tours in Sri Lanka",
  description: "Book reliable, safe, and transparent airport transfers, taxi services, and island-wide tours in Sri Lanka. 24/7 Availability with zero hidden fees.",
  keywords: ["Summer Cabs", "Sri Lanka Taxi", "Airport Transfers Colombo", "Bandaranaike International Airport Taxi", "Sri Lanka Tours", "Colombo Cab Service"],
  openGraph: {
    title: "Summer Cabs | Premium Airport Transfers",
    description: "Your premium transport partner in Sri Lanka. Reliable, safe, and transparent airport transfers and tours.",
    url: "https://www.summercabs.lk",
    siteName: "Summer Cabs",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Summer Cabs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Cabs | Premium Airport Transfers",
    description: "Book reliable and safe airport transfers and island-wide tours in Sri Lanka.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  }
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <Script
          id="travel-payouts-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                  var script = document.createElement("script");
                  script.async = 1;
                  script.setAttribute("data-cmp-ab","2");
                  script.src = 'https://emrldco.com/NTgwNjI2.js?t=580626';
                  document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <AuthProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <LoginPromptModal />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://everward.ca"),
  title: "Everward | AI Receptionist for HVAC Companies",
  description: "Everward helps residential HVAC companies turn missed and after-hours calls into booked appointments with an AI voice receptionist.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Everward",
    title: "Everward | AI Receptionist for HVAC Companies",
    description: "Turn missed HVAC calls into booked appointments with answering, basic qualification, calendar booking and team notifications.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Everward — Turn missed HVAC calls into booked appointments." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everward | AI Receptionist for HVAC Companies",
    description: "Turn missed HVAC calls into booked appointments with an AI voice receptionist.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

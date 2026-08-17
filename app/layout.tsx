import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://everward.ca"),
  title: "Everward | HVAC Lead Generation & Growth Systems",
  description: "Everward helps residential HVAC companies generate, qualify and follow up with homeowners looking for heating and cooling replacement work.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Everward",
    title: "Everward | HVAC Lead Generation & Growth Systems",
    description: "More qualified HVAC replacement opportunities—from advertising through qualification, follow-up and booking.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Everward — More qualified HVAC replacement opportunities." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everward | HVAC Lead Generation & Growth Systems",
    description: "More qualified HVAC replacement opportunities—from advertising through qualification, follow-up and booking.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

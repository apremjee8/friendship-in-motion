import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { NavState } from "@/components/NavState";
import { style } from "@/lib/language";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "friendship in motion — field catalog",
    template: "%s — friendship in motion",
  },
  description: style.purpose,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable} h-full`}>
      <body className="min-h-full">
        <div className="shell">
          <NavState />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

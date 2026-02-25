import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Maroof Abdullah | AI Engineer",
  description:
    "Maroof Abdullah — AI Engineer specializing in Machine Learning, NLP, Computer Vision, and Generative AI. Building intelligent systems that transform ideas into impact.",
  keywords:
    "AI Engineer, Machine Learning, Deep Learning, NLP, Computer Vision, Maroof Abdullah, Portfolio",
  authors: [{ name: "Maroof Abdullah" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

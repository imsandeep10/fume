import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Navigation/Navbar";
import Providers from "./Provider";
import Footer from "../Navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barista Training & Coffee Courses | Your Coffee School",
  description:
    "Join the best coffee training school in Nepal! Learn barista skills, latte art, espresso making, and coffee brewing techniques from expert instructors.",
  keywords:
    "Coffee Training, Barista Training, Barista Courses, Coffee School, Latte Art Classes, Espresso Training, Coffee Workshops, Professional Barista, Coffee Making Course, Coffee Brewing Techniques, Coffee Education Nepal",
  authors: [{ name: "Your Coffee School", url: "https://fumecoffee.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
               <Footer/>
        </Providers>
      </body>
    </html>
  );
}

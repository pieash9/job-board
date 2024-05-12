import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Job Board",
    template: "%s | Job Board",
  },
  description: "Find your dream job, With Job Board.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-w-[350px]")}>
        <Toaster />
        <Navbar />
        <div className="min-h-[calc(100vh-217px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

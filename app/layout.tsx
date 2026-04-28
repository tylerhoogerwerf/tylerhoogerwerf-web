import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ttCommons = localFont({
  src: [
    { path: "./fonts/TT-Commons-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TT-Commons-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/TT-Commons-DemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/TT-Commons-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-tt-commons",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Tyler Hoogerwerf - Portfolio",
  description: "Portfolio of Tyler Hoogerwerf. Designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ttCommons.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
        {children}
      </body>
    </html>
  );
}

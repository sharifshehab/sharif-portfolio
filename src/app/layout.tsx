import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'], fallback: ['system-ui', 'arial'] })

export const metadata: Metadata = {
  title: {
    default: "Sharif S",
    template: "%s | Sharif S"
  },
  keywords: ["portfolio", "web developer", "fullstack developer", "React.js", "Next.js", "MongoDB", "PostgreSQL"],
  description: "Sharif Shehabuzzaman's portfolio - showcasing projects, skills, and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

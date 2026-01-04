import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SRABadge from '@/components/regulatory/SRABadge';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name | Solicitor in [Location]",
  description: "Professional legal services authorised and regulated by the Solicitors Regulation Authority (SRA).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* 1. Global Fix: Force light color scheme at the HTML level */
    <html lang="en-GB" className="light" style={{ colorScheme: 'light' }}>
      {/* 2. Global Fix: Explicitly set bg-white and text-slate-900 on the body to prevent mobile "Auto-Dark" */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white text-slate-900`}>
        
        <Navbar />
        
        {/* 3. Global Fix: Ensure the main container is explicitly white */}
        <main className="grow bg-white">
          {children}
        </main>

        {/* MANDATORY SRA COMPLIANT FOOTER */}
        {/* 4. Global Fix: Use bg-slate-50 to provide contrast while remaining in the light spectrum */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Your Name / Firm Name</h2>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Authorised and regulated by the Solicitors Regulation Authority (SRA Number: 123456). 
                  We are committed to providing transparent, high-quality legal advice.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 underline decoration-slate-300 underline-offset-4">
                  <Link href="/legal/complaints" className="hover:text-blue-600 transition-colors">Complaints Procedure</Link>
                  <Link href="/legal/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                  <Link href="/services" className="hover:text-blue-600 transition-colors">Fees & Services</Link>
                </div>
              </div>

              <div className="flex md:justify-end items-center">
                {/* This component will inject the Yoshki script and badge */}
                <SRABadge />
              </div>

            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 text-xs text-slate-400">
              <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
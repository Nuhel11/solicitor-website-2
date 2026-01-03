'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Gavel } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services & Fees', href: '/services/conveyancing' }, // Or a general services page
    { name: 'About', href: '/about' },
    { name: 'Complaints', href: '/legal/complaints' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-2 rounded text-white group-hover:bg-blue-600 transition-colors">
              <Gavel size={20} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-slate-900">
              Your Name <span className="font-light text-slate-500">Solicitors</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-600"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="block bg-slate-900 text-white px-4 py-3 rounded-lg text-center font-bold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
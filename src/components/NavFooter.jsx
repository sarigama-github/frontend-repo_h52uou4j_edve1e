import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#focus', label: 'Focus Areas' },
    { href: '#team', label: 'Team' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="sr-only">Arohan Partners</span>
            <span className="text-teal-700">AROHAN</span>
            <span className="text-gray-500">Partners</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-teal-600 text-white px-3 py-1.5 text-sm font-semibold hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">Work with us</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-2 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="px-2 py-2 rounded text-sm font-semibold bg-teal-600 text-white">Work with us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="text-sm text-gray-700">© {new Date().getFullYear()} AROHAN Partners. All rights reserved.</p>
          </div>
          <div className="flex gap-4 md:justify-center">
            <a href="mailto:hello@arohan.partners" aria-label="Email" className="text-gray-600 hover:text-gray-900"><Mail className="h-5 w-5" /></a>
            <a href="tel:+910000000000" aria-label="Phone" className="text-gray-600 hover:text-gray-900"><Phone className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          </div>
          <div className="md:text-right text-sm text-gray-600">Built with accessibility in mind (WCAG AA)</div>
        </div>
      </div>
    </footer>
  );
}

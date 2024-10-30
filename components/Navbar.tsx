"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, Cpu, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiHbo } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services'  },
    { name: 'Projects', href: '#projects' },
    // { name: 'Clients', href: '#clients'  },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#21295c] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* <SiHbo className="h-8 w-8" /> */}
              <span className="font-bold text-xl">Favlinksoftware</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#9ebc2f] transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="bg-[#1c7293] hover:bg-[#065a82] text-white"
                onClick={() => window.location.href = '#contact'}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-[#9ebc2f] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:bg-[#1b3b6f] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
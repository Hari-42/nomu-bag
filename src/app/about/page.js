"use client";

import Link from 'next/link';
import {useState} from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="flex flex-col min-h-screen font-sans bg-[#F1E5B1]">
        <header className="bg-[#F1E5B1] text-green-800 py-3">
          <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
            <div className="border-b-4 relative flex h-16 items-center justify-between w-full">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2 text-lg font-bold">
                  nomu
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-4">
                <Link href="/" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">
                  Home
                </Link>
                <Link href="/about"
                      className="inline-flex items-center text-sm font-bold h-10 px-4 py-2">
                  About
                </Link>
                <Link href="/products"
                      className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">
                  Products
                </Link>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-green-800 focus:outline-none"
                >
                  {/* Hamburger Icon */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                  <Link href="/" className="block text-sm font-bold py-2">Home</Link>
                  <Link href="/projects" className="block text-sm font-medium py-2">Projects</Link>
                  <Link href="/aboutme" className="block text-sm font-medium py-2">About Me</Link>
                  <Link href="/contact" className="block text-sm font-medium py-2">Contact</Link>
                </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center text-white px-8">
        </main>
      </div>
  );
}
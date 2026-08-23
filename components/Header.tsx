"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, List, ShoppingBag, X } from "@phosphor-icons/react";
import { useCart } from "@/lib/CartContext";
import { Button } from "./ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="italian-stripe w-full" />

      {/* Main Navigation (Uwahouse Grid Alignment) */}
      <div className="container mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-black md:hidden hover:text-primary focus:outline-none transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" weight="bold" /> : <List className="h-5 w-5" weight="bold" />}
          </button>
          
          <Link href="/" className="flex items-center">
            <Image
              src="/aprila-parts-logo.svg"
              alt="Aprilia Parts For Sale Logo"
              width={160}
              height={45}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center: Centered Tabs (Uwahouse Editorial style) */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-xs font-bold tracking-widest uppercase font-display">
          <Link href="#" className="text-primary hover:text-primary transition-opacity underline underline-offset-4 decoration-2">
            Home
          </Link>
          <Link href="#" className="text-black hover:text-primary transition-colors">
            OEM Spares
          </Link>
          <Link href="#" className="text-black hover:text-primary transition-colors">
            Performance Racing
          </Link>
          <Link href="#" className="text-black hover:text-primary transition-colors">
            Custom Orders
          </Link>
          <Link href="#" className="text-black hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Side: Currency, Search, and Cart */}
        <div className="flex items-center justify-end gap-3 sm:gap-4">
          
          {/* Currency Selector (Uwahouse style) */}
          <div className="hidden sm:block">
            <select
              aria-label="Display currency"
              className="flex h-8 w-20 items-center justify-between rounded-lg border border-black/20 bg-white px-2 text-[10px] font-bold tracking-wider uppercase outline-none cursor-pointer focus:border-primary"
            >
              <option value="GBP">GBP (£)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <button className="p-1 text-black hover:text-primary transition" aria-label="Search">
            <MagnifyingGlass className="h-5 w-5" weight="bold" />
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-1 text-black hover:text-primary transition outline-none cursor-pointer"
            aria-label="Bag"
          >
            <ShoppingBag className="h-5 w-5" weight="bold" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white leading-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-xs font-bold tracking-wider uppercase font-display">
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary hover:text-primary transition-colors py-2 border-b border-black/10"
            >
              Home
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-primary transition-colors py-2 border-b border-black/10"
            >
              OEM Spares
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-primary transition-colors py-2 border-b border-black/10"
            >
              Performance Racing
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-primary transition-colors py-2 border-b border-black/10"
            >
              Custom Orders
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

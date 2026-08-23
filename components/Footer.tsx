"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, MapPin, Clock, ArrowUpRight, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-black text-zinc-400">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/aprila-parts-logo.svg"
                alt="Aprilia Parts For Sale Logo"
                width={160}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed max-w-xs">
              Premium distributor of original OEM and high-performance aftermarket spare parts for Aprilia motorcycles. Fuelled by passion, engineered for performance.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="h-1 w-6 bg-[#009246]" />
              <span className="h-1 w-6 bg-white" />
              <span className="h-1 w-6 bg-primary" />
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-display">
              Popular Categories
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>Engine Components</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" weight="bold" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>Exhaust Systems</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" weight="bold" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>Carbon Fairings & Body</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" weight="bold" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>Suspension & Brakes</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" weight="bold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-display">
              Service Hours
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-500 font-semibold uppercase">Closed</span>
              </li>
              <li className="flex items-center gap-1.5 pt-2 text-primary font-bold">
                <Clock className="h-4 w-4" weight="bold" />
                <span>Orders Processed 24/7</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-display">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-white font-bold">+44 7529 654368</p>
                  <p className="text-[10px]">Call / WhatsApp Support</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple className="h-4 w-4 text-primary shrink-0 mt-0.5" weight="fill" />
                <div>
                  <a href="mailto:aprilliapartsforsale@gmail.com" className="text-white font-bold hover:text-primary transition-colors">
                    aprilliapartsforsale@gmail.com
                  </a>
                  <p className="text-[10px]">Email Enquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-white">London, United Kingdom</p>
                  <p className="text-[10px]">Worldwide Shipping Available</p>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Follow Us
              </h5>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/share/1Q9XQvyLHb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-800 hover:bg-primary text-white rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Facebook"
                >
                  <FacebookLogo className="h-5 w-5" weight="fill" />
                </a>
                <a 
                  href="https://tiktok.com/@aprilliapartsforsale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-800 hover:bg-primary text-white rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="TikTok"
                >
                  <TiktokLogo className="h-5 w-5" weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-[10px]">
          <p>
            &copy; {new Date().getFullYear()} Aprilia Parts For Sale. All rights reserved. This site is not affiliated with Piaggio Group or Aprilia brand owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

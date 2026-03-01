"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#111] text-gray-700 dark:text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              ShopLogo
            </h2>
            <p className="mt-4 text-sm">
              Your trusted online store for premium quality products. We provide
              the best deals and fast delivery service.
            </p>

            <div className="flex gap-4 mt-4">
              <Facebook className="hover:text-blue-500 cursor-pointer" />
              <Instagram className="hover:text-pink-500 cursor-pointer" />
              <Twitter className="hover:text-sky-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#e11d48] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e11d48] transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e11d48] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e11d48] transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Email: support@shop.com</li>
              <li>Phone: +880 1234 567 890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} ShopLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

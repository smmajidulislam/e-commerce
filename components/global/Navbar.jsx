"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Admin", path: "/users" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#222222] shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-[#111827] dark:text-white"
          >
            ShopZone
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative font-medium transition duration-300
                  ${isActive ? "text-[#e11d48]" : "text-[#111827] dark:text-white"}
                  hover:text-[#e11d48]
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:bg-[#e11d48] after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-3">
              <Link href="/login" className="px-4 py-2 hover:text-[#e11d48]">
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 bg-[#e11d48] text-white rounded-md hover:opacity-90"
              >
                Sign Up
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 bg-[#e11d48] text-white rounded-md"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md
                ${
                  pathname === item.path
                    ? "bg-[#e11d48] text-white"
                    : "hover:bg-[#e11d48] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

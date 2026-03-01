"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import { Menu } from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-[#111]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64">
        <AdminSidebar />
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-72 h-full bg-white dark:bg-[#222]">
            <AdminSidebar />
          </div>
        </div>
      )}

      {/* Main Content ⭐ FIX HERE */}
      <div className="flex-1 flex flex-col w-full">
        {/* Mobile Topbar */}
        <div className="h-16 flex items-center px-5 shadow bg-white dark:bg-[#222] md:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>

          <h2 className="ml-4 font-bold dark:text-white">Admin Panel</h2>
        </div>

        {/* Content */}
        <main className=" overflow-y-auto flex-1 w-full">{children}</main>
      </div>
    </div>
  );
}

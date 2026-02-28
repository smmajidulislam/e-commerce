"use client";

import Link from "next/link";
import { Home, Users, ShoppingBag, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menus = [
    { name: "Dashboard", path: "/admin", icon: Home },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Products", path: "/productslist", icon: ShoppingBag },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="h-full w-full bg-white dark:bg-[#222] border-r p-5">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">Admin</h1>

      <div className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = pathname === menu.path;

          return (
            <Link
              key={menu.name}
              href={menu.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition
              ${
                active
                  ? "bg-[#e11d48] text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
              }`}
            >
              <Icon size={18} />
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

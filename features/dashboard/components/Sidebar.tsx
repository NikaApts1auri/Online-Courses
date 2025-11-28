"use client";

import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "My Courses", href: "/dashboard" },
    { title: "Profile", href: "/dashboard/profile" },
    { title: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r shadow-md z-50">
      <div className="p-6 text-xl font-bold border-b">Dashboard</div>
      <nav className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-6 py-3 hover:bg-gray-100"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

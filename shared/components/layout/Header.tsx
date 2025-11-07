"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Header: React.FC = () => {
  //DRY- dont repeat yourself
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-orange-500 tracking-tight hover:text-orange-500 transition-colors"
        >
          E-Learn
        </Link>

        {/* Navigation-dry */}

        <nav className="hidden md:flex gap-6 items-center cursor-pointer">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-orange-500 transition-colors ${
                pathname === link.href
                  ? "font-semibold text-orange-500"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right: Auth buttons */}
      <div className="flex gap-3">
        <Link href="/register">
          <Button className="hidden sm:inline-flex cursor-pointer bg-orange-600 hover:bg-orange-700 text-white">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

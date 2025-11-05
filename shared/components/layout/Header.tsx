"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-orange-500 tracking-tight hover:text-orange-500 transition-colors"
        >
          E-Learn
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center cursor-pointer">
          <Link
            href="/"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/"
                ? "font-semibold text-orange-500"
                : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/courses"
                ? "font-semibold text-orange-500"
                : "text-gray-700"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/about"
                ? "font-semibold text-orange-500"
                : "text-gray-700"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/pricing"
                ? "font-semibold text-orange-500"
                : "text-gray-700"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/contact"
                ? "font-semibold text-orange-500"
                : "text-gray-700"
            }`}
          >
            Contact
          </Link>
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

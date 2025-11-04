"use client";

import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        E-Learn
      </Link>
      <nav className="flex gap-4 items-center">
        <Link href="/courses">Courses</Link>
        <Link href="/instructors">Instructors</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Button variant="primary" onClick={() => console.log("Login clicked")}>
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Header;

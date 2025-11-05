// components/Footer.jsx
"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand + Contact */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-orange-500 text-white font-bold rounded p-2 text-xl">
              E
            </div>
            <span className="ml-2 text-lg font-semibold">E-learn</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MdEmail className="text-orange-500 mr-2" />
              <a
                href="mailto:hello@E-learn.com"
                className="hover:text-orange-500 transition"
              >
                hello@E-learn.com
              </a>
            </li>
            <li className="flex items-center">
              <MdPhone className="text-orange-500 mr-2" />
              <a
                href="tel:+91918132309"
                className="hover:text-orange-500 transition"
              >
                +91 91813 23 2309
              </a>
            </li>
            <li className="flex items-center">
              <MdLocationOn className="text-orange-500 mr-2" />
              <a
                href="https://maps.google.com?q=Somewhere+in+the+World"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                Somewhere in the World
              </a>
            </li>
          </ul>
        </div>

        {/* Home */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Home</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Benefits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Our Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Our Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Our FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Achievements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Our Goals
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Social Profiles</h3>
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-md transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-md transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-md transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} E-learn. All rights reserved.
      </div>
    </footer>
  );
}

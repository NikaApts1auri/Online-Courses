import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()} E-Learn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

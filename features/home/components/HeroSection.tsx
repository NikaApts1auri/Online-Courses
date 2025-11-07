"use client";
import React from "react";
import Button from "../../../shared/components/ui/Button";

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl text-orange-500 font-bold mb-4">
        Learn From the Best
      </h1>
      <p className="text-gray-600 mb-6">
        Start your journey with our top online courses
      </p>
      <Button className="bg-orange-500 hover:cursor-pointer" variant="primary">
        Get Started
      </Button>
    </section>
  );
};

export default HeroSection;

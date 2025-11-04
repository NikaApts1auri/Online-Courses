"use client";
import React from "react";
import { Testimonial } from "../../../shared/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Students Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white shadow rounded">
            <p className="text-gray-700 mb-4">`{t.message}`</p>
            <p className="font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

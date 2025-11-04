"use client";
import React from "react";
import Image from "next/image";

interface PartnersProps {
  partners: string[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {partners.map((logo, i) => (
          <div key={i} className="relative w-32 h-12">
            <Image
              src={logo}
              alt={`Partner ${i}`}
              fill
              className="object-contain"
              priority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

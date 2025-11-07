"use client";

import { useState } from "react";

const faqs = [
  //for exaple and next by fecthing from api
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Yes, you can enroll in as many courses as you’d like simultaneously. Manage all from your dashboard.",
  },
  {
    question: "Do I get lifetime access to the courses?",
    answer:
      "Absolutely. Once you enroll, you’ll have lifetime access to the course materials and future updates.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "You can contact instructors directly or reach out to our support team for technical issues.",
  },
  {
    question: "Can I switch from Free to Pro anytime?",
    answer:
      "Yes, upgrading is simple. Your data and progress will remain intact during the transition.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex cursor-pointer justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-orange-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

"use client";

import { useState } from "react";
import Button from "../../../shared/components/ui/Button";

const plans = [
  //for exaple and next by fecthing from api
  {
    id: 1,
    title: "Free Plan",
    price: 0,
    features: [
      "Access to free courses",
      "Basic community support",
      "Limited downloadable content",
      "Monthly newsletters",
      "Access to discussion forums",
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    price: 79,
    features: [
      "Access to all premium courses",
      "Priority instructor support",
      "Full access to resources & templates",
      "Exclusive webinars & community events",
      "Offline access for all courses",
    ],
  },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {plan.title}
          </h3>
          <p className="text-4xl font-bold text-orange-500 mb-6">
            ${plan.price}
            <span className="text-gray-500 text-lg font-normal">/month</span>
          </p>

          <ul className="space-y-3 mb-8 text-gray-600">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            className={`w-full font-medium ${
              selectedPlan === plan.id
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
            disabled={selectedPlan === plan.id}
          >
            {selectedPlan === plan.id ? "Selected" : "Select Plan"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;

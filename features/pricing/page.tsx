import PricingPlans from "./components/PricingPlans";
import FAQSection from "./components/FAQSection";

const PricingPage = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Our Pricings
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your learning needs. Upgrade anytime to
            unlock more premium content and community features.
          </p>
        </div>

        {/* Pricing Plans */}
        <PricingPlans />

        {/* FAQ Section */}
        <div className="mt-24">
          <FAQSection />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;

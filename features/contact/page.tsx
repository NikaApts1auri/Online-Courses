import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-24">
      <section className="max-w-6xl mx-auto">
        <ContactHeader />

        <div className="grid md:grid-cols-2 gap-10 bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-100">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { ContactFormData } from "../contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-orange-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm  font-medium mb-1">First Name*</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter your subject"
          className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here..."
          className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
          rows={5}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full md:w-auto px-6 py-2 rounded-lg text-white font-medium transition-colors ${
          loading
            ? "bg-orange-300 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {loading ? "Sending..." : "Send Your Message"}
      </button>
    </form>
  );
}

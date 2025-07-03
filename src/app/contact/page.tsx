// src/app/contact/page.tsx

"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please complete the captcha.");
      return;
    }

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    const result = await res.json();

    if (result.success) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken(null);
    } else {
      setStatus(result.error || "Failed to send message.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#819A91]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#819A91]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#819A91]"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeGMHMrAAAAAIILjSWr68FGtFbU0Tr_QUP9pTJt"
          onChange={(token) => setCaptchaToken(token)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#819A91] text-white rounded-lg hover:bg-[#A7C1A8] transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

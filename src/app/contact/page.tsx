"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Verifying...");

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      setStatus("reCAPTCHA failed.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken: token }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(result.error || "Failed to send message.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Feel free to reach out for collaborations, opportunities, or just to say hi.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
            placeholder="Write your message here..."
          />
        </div>

        {/* Invisible reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LdRmH0rAAAAAJ-HV7kI61lFPmjd2VGUJLWMuv2y"
          size="invisible"
          ref={recaptchaRef}
        />

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-6 text-center text-sm font-medium">{status}</p>}
    </div>
  );
}

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
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          className="px-6 py-3 bg-[#819A91] text-white rounded-lg hover:bg-[#A7C1A8] transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

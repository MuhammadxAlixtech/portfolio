"use client";

import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-24 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg leading-relaxed">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
        <FaEnvelope className="text-gray-400" size={20} />
        <span className="font-mono text-lg text-gray-800 dark:text-gray-200">
          ali delhi india at gmail dot com
        </span>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        (Formatted to prevent spam bots)
      </p>
    </div>
  );
}

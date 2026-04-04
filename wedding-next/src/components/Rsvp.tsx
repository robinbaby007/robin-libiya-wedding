"use client";

import { useState } from "react";

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guestbook message submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-[var(--color-cream)] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold)] block mb-3">
            Share Your Love
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Guestbook
          </h2>
          <p className="font-[var(--font-heading)] text-[1.15rem] italic text-[var(--color-text-light)] max-w-[500px] mx-auto">
            Leave a message for the happy couple to cherish forever.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-[560px] mx-auto bg-white p-12 rounded-2xl shadow-[var(--shadow-soft)] border border-[rgba(201,169,110,0.15)] animate-on-scroll"
          >
            <div className="mb-7">
              <label
                htmlFor="name"
                className="block text-[0.85rem] font-medium tracking-[1px] uppercase text-[var(--color-brown-dark)] mb-[10px]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-[14px] px-[18px] border-[1.5px] border-[var(--color-beige)] rounded-lg font-[var(--font-body)] text-[0.95rem] text-[var(--color-text)] bg-[var(--color-cream)] transition-all duration-200 outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)]"
              />
            </div>

            <div className="mb-7">
              <label
                htmlFor="message"
                className="block text-[0.85rem] font-medium tracking-[1px] uppercase text-[var(--color-brown-dark)] mb-[10px]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your wishes for the couple..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-[14px] px-[18px] border-[1.5px] border-[var(--color-beige)] rounded-lg font-[var(--font-body)] text-[0.95rem] text-[var(--color-text)] bg-[var(--color-cream)] transition-all duration-200 outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(201,169,110,0.1)] resize-y min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 px-8 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-brown)] text-white border-none rounded-lg font-[var(--font-body)] text-[0.85rem] font-semibold tracking-[3px] uppercase cursor-pointer flex items-center justify-center gap-3 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,110,0.35)]"
            >
              <span>Send Message</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        ) : (
          <div className="max-w-[560px] mx-auto text-center p-12 bg-white rounded-2xl shadow-[var(--shadow-soft)] animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)] text-white flex items-center justify-center text-[2rem] mx-auto mb-5">
              &#10003;
            </div>
            <h3 className="font-[var(--font-heading)] text-[2rem] text-[var(--color-brown-dark)] mb-3">
              Thank You!
            </h3>
            <p className="text-[var(--color-text-light)]">
              Your message has been received. Robin & Libiya will cherish your
              kind words!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

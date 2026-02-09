"use client"

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [contactType, setContactType] = useState("hi");

  return (
    <section className="mx-4 md:mx-24 mb-8">
      <div className="mb-16">
        <h2 className="bg-[#B9FF66] px-6 py-3 rounded-xl text-3xl md:text-4xl font-bold w-64">
          Contact Us
        </h2>
      </div>

      <div className="rounded-3xl bg-[#F3F3F3] relative p-16">
        {/* Form */}
        <form className="max-w-[620px] space-y-6">
          {/* Toggle */}
          <div className="flex gap-8 mb-4">
            {/* Say Hi */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="hi"
                checked={contactType === "hi"}
                onChange={() => setContactType("hi")}
                className="hidden"
              />
              <span className="h-5 w-5 rounded-full border flex items-center justify-center">
                {contactType === "hi" && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B9FF66]" />
                )}
              </span>

              <span className="text-xl font-medium">Say Hi</span>
            </label>

            {/* Get a Quote */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="quote"
                checked={contactType === "quote"}
                onChange={() => setContactType("quote")}
                className="hidden"
              />

              <span className="h-5 w-5 rounded-full border flex items-center justify-center">
                {contactType === "quote" && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B9FF66]" />
                )}
              </span>

              <span className="text-xl font-medium">Get a Quote</span>
            </label>
          </div>

          {/* Inputs */}
          <div className="py-4">
            <label className="block mb-1 text-xl font-medium">Name</label>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Name" />
          </div>

          <div className="py-4">
            <label className="block mb-1 text-xl font-medium">Email *</label>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Email" />
          </div>

          <div className="py-4">
            <label className="block mb-1 text-xl font-medium">Message *</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Message"
            />
          </div>

          <button className="w-full rounded-xl bg-black py-4 text-xl font-medium text-white hover:bg-[#B9FF66]/70 hover:text-black transition-all duration-500 ease-in-out">
            Send Message
          </button>
        </form>

        {/* Illustration */}
        <div className="hidden md:block absolute -right-70 top-1/2 -translate-y-1/2">
          <Image
            src="/icon/icon-home-contact-2.svg"
            alt="Contact illustration"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}

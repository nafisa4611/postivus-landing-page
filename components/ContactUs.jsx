"use client"

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [contactType, setContactType] = useState("hi");

  return (
    <section className="mx-4 md:mx-24">
      <div className="mb-8">
        <h2 className="bg-[#B9FF66] px-4 py-2 rounded-xl text-3xl md:text-4xl font-bold w-56">
          Contact Us
        </h2>
      </div>

      <div className="rounded-3xl bg-[#F3F3F3] relative p-16 overflow-hidden">
        {/* Form */}
        <form className="max-w-[320px] space-y-6">
          {/* Toggle */}
          <div className="flex gap-8">
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

              <span className="font-medium">Say Hi</span>
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

              <span className="font-medium">Get a Quote</span>
            </label>
          </div>

          {/* Inputs */}
          <div className="">
            <label className="block font-medium">Name</label>
            <input className="w-full rounded-xl border px-4" placeholder="Name" />
          </div>

          <div className="">
            <label className="block font-medium">Email *</label>
            <input className="w-full rounded-xl border px-4" placeholder="Email" />
          </div>

          <div className="">
            <label className="block font-medium">Message *</label>
            <textarea
              rows={3}
              className="w-full rounded-xl border px-4"
              placeholder="Message"
            />
          </div>

          <button className="w-full rounded-xl bg-black py-2 font-medium text-white hover:bg-[#B9FF66]/70 hover:text-black transition-all duration-500 ease-in-out">
            Send Message
          </button>
        </form>

        {/* Illustration */}
        <div className="hidden md:block absolute right-[-190px] top-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/icon/icon-home-contact-2.svg"
            alt="Contact illustration"
            width={400}
            height={400}
            priority
          />
        </div>

      </div>
    </section>
  );
}

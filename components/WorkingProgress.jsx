"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content:
      "We conduct thorough research on your industry, competitors, and target market to develop a comprehensive strategy that aligns with your business objectives and maximizes your marketing ROI.",
  },
  {
    id: 3,
    title: "Implementation",
    content:
      "Our team executes the developed strategy, implementing all marketing initiatives across various channels while ensuring consistency and quality in every aspect of the campaign.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor campaign performance, analyze data, and make data-driven optimizations to improve results and ensure your marketing efforts are delivering the best possible outcomes.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content:
      "Regular reporting and transparent communication keep you informed about campaign progress, key metrics, and insights, ensuring you're always aware of how your marketing investments are performing.",
  },
  {
    id: 6,
    title: "Continuous Improvement",
    content:
      "We believe in continuous improvement, regularly reviewing and refining our strategies based on performance data and market changes to ensure long-term success and growth for your business.",
  },
];

export default function WorkingProcess() {
  const [active, setActive] = useState(1);

  return (
    <section className="mx-4 md:mx-24 my-16 md:my-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 md:mb-16">
        <h2 className="bg-[#B9FF66] px-5 py-3 rounded-xl text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Working Process
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4 md:space-y-6">
        {steps.map((step) => (
          <AccordionItem
            key={step.id}
            step={step}
            isOpen={active === step.id}
            onClick={() =>
              setActive(active === step.id ? null : step.id)
            }
          />
        ))}
      </div>
    </section>
  );
}

export function AccordionItem({ step, isOpen, onClick }) {
  return (
    <div
      className={`
        relative rounded-3xl border-2 border-black
        transition-all duration-500  shadow-gray-500 shadow-2xl
        ${isOpen ? "bg-[#B9FF66]" : "bg-white"}
      `}
    >
      {/* Header */}
      <button
        onClick={onClick}
        className="flex w-full items-start sm:items-center justify-between px-5 sm:px-12 py-5 sm:py-8 text-left gap-4"
      >
        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
          <span className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none">
            {step.id}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            {step.title}
          </h3>
        </div>

        <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-black text-2xl sm:text-3xl font-bold shrink-0">
          {isOpen ? "−" : "+"}
        </div>
      </button>


      {/* Content */}
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden px-8 pb-8">
          <div className="h-px bg-black mb-6" />
          <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
            {step.content}
          </p>
        </div>
      </div>

      {/* Shadow border effect */}
      <div className="absolute -bottom-2 -right-2 h-full w-full rounded-3xl border-2 border-black -z-10" />
    </div>
  );
}

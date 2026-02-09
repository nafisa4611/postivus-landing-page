"use client";

import { useState } from "react";
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
    const testimonials = [
        {
            text:
                "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role: "Marketing Director at XYZ Corp",
        },
        {
            text:
                "Their team is professional, responsive, and truly cares about the success of our business. We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "Sarah Lee",
            role: "Founder at StartupHub",
        },
        {
            text:
                "We highly recommend Positivus to any company looking to grow their online presence. We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "David Kim",
            role: "CEO at Growthify",
        },
        {
            text:
                "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role: "Marketing Director at XYZ Corp",
        },
        {
            text:
                "Their team is professional, responsive, and truly cares about the success of our business.We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "Sarah Lee",
            role: "Founder at StartupHub",
        },
        {
            text:
                "We highly recommend Positivus to any company looking to grow their online presence.We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "David Kim",
            role: "CEO at Growthify",
        },
    ];

    const [index, setIndex] = useState(0);
    
    const prev = () =>
        setIndex((index - 1 + testimonials.length) % testimonials.length);

    const next = () =>
        setIndex((index + 1) % testimonials.length);
    
    return (
        <section className="mx-4 md:mx-24 my-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
                <h2 className="bg-[#B9FF66] px-6 py-3 rounded-xl text-3xl md:text-4xl font-bold">
                    Testimonials
                </h2>
                <p className="text-xl">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>
            </div>


            <div className="mx-auto my-12 max-w-7xl rounded-[40px] bg-[#0B0E1A] py-16 shadow-2xl shadow-gray-400 hover:shadow-gray-700">
                <div className="w-full overflow-hidden">
                    {/* Slider */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {testimonials.map((item, i) => (
                            <div key={i} className="min-w-full flex justify-center">
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-8">
                        {/* Left Arrow */}
                        <button
                            onClick={prev}
                            className="text-4xl text-[#B9FF66] hover:scale-110 transition"
                        >
                            ←
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-3 w-3 cursor-pointer rounded-full transition ${i === index ? "bg-[#B9FF66]" : "bg-gray-600"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={next}
                            className="text-4xl text-[#B9FF66] hover:scale-110 transition"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

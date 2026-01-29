"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pl-4 md:pl-16 pr-8 py-4 flex justify-between items-center bg-white transition-all">
      {/* LOGO */}
      <div>
        <Image 
          src="/logo/logo-dark-2.svg" 
          alt="Logo" 
          width={250} 
          height={80} 
          className="w-48 md:w-[350px] h-auto"
        />
      </div>

      {/* DESKTOP MENU - Hidden on Mobile, Flex on Desktop */}
      <div className="hidden lg:flex text-2xl xl:text-3xl space-x-8 xl:space-x-12 px-10 items-center">
        <Link href="/about" className="hover:text-[#b9ff66] transition-colors">About</Link>
        <Link href="/services" className="hover:text-[#b9ff66] transition-colors">Services</Link>
        <Link href="/use-cases" className="hover:text-[#b9ff66] transition-colors">Use Cases</Link>
        <Link href="/pricing" className="hover:text-[#b9ff66] transition-colors">Pricing</Link>
        <Link href="/blog" className="hover:text-[#b9ff66] transition-colors">Blog</Link>
        <Button className="w-56 h-16 border-2 text-xl hover:bg-[#b9ff66] hover:text-black cursor-pointer transition-all">
          Request a Quote
        </Button>
      </div>

      {/* HAMBURGER BUTTON - Visible only on Mobile/Tablet */}
      <div className="lg:hidden z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`h-1 w-8 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1 w-8 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-1 w-8 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-3xl font-bold transition-transform duration-500 ease-in-out z-40 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/use-cases" onClick={() => setIsOpen(false)}>Use Cases</Link>
        <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Button className="w-64 h-20 border-2 text-2xl hover:bg-[#b9ff66] hover:text-black cursor-pointer">
          Request a Quote
        </Button>
      </div>
    </nav>
  );
}
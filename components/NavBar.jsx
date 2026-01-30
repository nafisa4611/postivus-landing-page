"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg px-16 py-4">
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div>
          <Image src="/logo/logo-dark-2.svg" alt="logo" width={250} height={150} />
        </div>
        <div className='hidden md:block'>
          {/* nav items */}
          <Link href="/about" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66]">About</Link>
          <Link href="/features" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66]">Features</Link>
          <Link href="/pricing" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66]">Pricing</Link>
          <Link href="/contact" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66]">Contact</Link>
          <Button variant="outline" className=" bg-black text-white shadow-lg shadow-gray-400 rounded-xl hover:bg-[#b9ff66] hover:text-white text-xl p-4"> Get Started </Button>
        </div>
        {/* hamburger menu */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 10-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 101.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />  
               
              )}
               </svg>
          </button>
        </div>
        </div>


        {/* Mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'}`} >
          {/* nav items */}
          <Link href="/about" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66] block py-2">About</Link>
          <Link href="/features" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66] block py-2">Features</Link>
          <Link href="/pricing" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66] block py-2">Pricing</Link>
          <Link href="/contact" className="text-gray-700 px-4 text-xl hover:text-[#b9ff66] block py-2">Contact</Link>
          <Button className="text-xl bg-emerald-700 text-white hover:bg-[#b9ff66] hover:text-black ">Get Started</Button>
        </div>


      </nav>
    );
  }
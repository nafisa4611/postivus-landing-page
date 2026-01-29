import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-10 px-6 md:px-12 lg:px-20 bg-bg transition-colors duration-300 gap-10">
      {/* TEXT CONTENT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl sm:text-justify md:text-justify leading-tight text-black max-w-2xl">
          Navigating the digital landscape for success
        </h1>
        
        <p className="font-normal text-lg sm:text-xl sm:text-justify md:text-justify md:text-2xl mt-6 text-muted max-w-xl leading-relaxed">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        
        <Button className="w-full sm:w-64 h-16 sm:h-20 mt-10 text-xl bg-black hover:bg-[#b9ff66] hover:text-black cursor-pointer text-white rounded-2xl transition-all duration-300">
          Book a Consultation
        </Button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-1/2 flex justify-center items-center sm:p-4 md:p-4">
        <div className="relative w-full max-w-[600px]">
          <Image 
            src="/icon/icon-home-hero.svg" 
            alt="Hero Home" 
            width={800} 
            height={600} 
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import HeroHome from "../public/icon/icon-home-hero.svg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-10 bg-bg transition-colors duration-300">
      <div className="">
        <h1 className="font-medium text-6xl leading-tight">
          Navigating the <br/>digital landscape <br/>  for success
        </h1>
        <p className="font-normal text-2xl mt-6 leading-relaxed">
          Our digital marketing agency helps businesses grow and <br/>succeed online
          through a range of services including SEO, PPC, <br/> social media
          marketing, and content creation.
        </p>
        <Button className="w-56 h-20 px-20 mt-10 border-2 text-xl bg-black hover:bg-[#b9ff66] cursor-pointer text-white rounded-2xl ">Book a Consultation</Button>
      </div>
      <div className="mr-6">
        <Image src={HeroHome} alt="Hero Home" width={800} height={480}/>
      </div>
    </div>
  );
}

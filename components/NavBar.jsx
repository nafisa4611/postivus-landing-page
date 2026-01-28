import Image from "next/image";
import Logo from "../public/logo/logo-dark-2.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <Image src={Logo} alt="Logo" width={350} height={100} />
      </div>
      <div className="text-3xl space-x-12 px-10 flex items-center">
        <Link href="/about" className="hover:text-[#b9ff66]">
          About
        </Link>
        <Link href="/services" className="hover:text-[#b9ff66]">
          Services
        </Link>
        <Link href="/use-cases" className="hover:text-[#b9ff66]">
          Use Cases
        </Link>
        <Link href="/pricing" className="hover:text-[#b9ff66]">
          Pricing
        </Link>
        <Link href="/blog" className="hover:text-[#b9ff66]">
          Blog
        </Link>
        <Button className="w-56 h-20 px-20 border-2 text-2xl hover:bg-[#b9ff66] cursor-pointer">
          Request a Quote
        </Button>
      </div>
    </div>
  );
}

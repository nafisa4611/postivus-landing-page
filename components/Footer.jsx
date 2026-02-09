import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0f1117] text-white rounded-t-[40px] mx-4 md:mx-24 mt-12 mb-2 shadow-2xl shadow-gray-700">

            {/* top section */}
            <div className="p-8 flex items-center justify-between gap-10">
                {/* image */}
                <div className="">
                    <Image src="/logo/logo-white-2.svg" width={120} height={120} alt="logo" />
                </div>

                {/* Center links */}
                <nav className="flex gap-6">
                    <a href="#" className="hover:text-[#b9ff66]">About</a>
                    <a href="#" className="hover:text-[#b9ff66]">Services</a>
                    <a href="#" className="hover:text-[#b9ff66]">Use Cases</a>
                    <a href="#" className="hover:text-[#b9ff66]">Pricing</a>
                    <a href="#" className="hover:text-[#b9ff66]">Blog</a>
                </nav>

                {/* Social icons */}
                <div className="flex gap-3">
                    <a className="bg-white text-black p-2 rounded-full" href="#">
                        <FaLinkedinIn />
                    </a>
                    <a className="bg-white text-black p-2 rounded-full" href="#">
                        <FaFacebookF />
                    </a>
                    <a className="bg-white text-black p-2 rounded-full" href="#">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex justify-between items-center p-8">
                <div className=" w-1/2">
                    <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md mb-6">
                        Contact Us
                    </button>

                    <p className="mb-2">Email: info@positivus.com</p>
                    <p className="mb-2">Phone: 555-567-8901</p>
                    <p>
                        Address: 1234 Main St Moonstone City,
                        <br />
                        Stardust State 12345
                    </p>
                </div>

                {/* Newsletter */}
                <div className="bg-[#1a1d25] p-12 rounded-xl flex flex-col gap-4 w-1/2">
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent border border-white/40 rounded-lg px-4 py-3 outline-none"
                    />
                    <button className="bg-lime-400 text-black font-semibold py-3 rounded-lg">
                        Subscribe to news
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-white/20 p-4 flex flex-col md:flex-row justify-around items-center text-sm">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <a href="#" className="hover:underline mt-2 md:mt-0">
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}

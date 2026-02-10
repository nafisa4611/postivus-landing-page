import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-white rounded-t-[40px] mx-4 md:mx-24 mt-12 shadow-2xl shadow-gray-700">

      {/* Top Section */}
      <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <Image
          src="/logo/logo-white-2.svg"
          width={120}
          height={120}
          alt="logo"
        />

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {["About", "Services", "Use Cases", "Pricing", "Blog"].map(item => (
            <a key={item} href="#" className="hover:text-[#b9ff66]">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {[FaLinkedinIn, FaFacebookF, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-white text-black p-2 rounded-full hover:bg-[#b9ff66] transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="px-8 py-10 flex flex-col md:flex-row gap-10 md:gap-20">
        
        {/* Contact Info */}
        <div className="flex-1">
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
        <div className="bg-[#1a1d25] rounded-xl p-8 w-full md:max-w-md">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white/40 rounded-lg px-4 py-3 outline-none focus:border-[#b9ff66]"
            />
            <button className="bg-lime-400 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:underline mt-2 md:mt-0">
          Privacy Policy
        </a>
      </div>

    </footer>
  );
}

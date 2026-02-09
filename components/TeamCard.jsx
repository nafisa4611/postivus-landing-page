import { Linkedin } from "lucide-react";
export default function TeamCard({ name, role, experience, skills, imageUrl }) {
  return (
    <div className="bg-white border-2 border-black border-b-[6px] rounded-[45px] p-10 max-w-sm shadow-2xl shadow-gray-500 transition-transform hover:translate-y-[-4px] cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between relative mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 bg-[#B9FF66] rounded-full overflow-hidden flex items-center justify-center">
             <img src={imageUrl} alt={name} className="object-cover w-full h-full grayscale"/>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-600 font-semibold">{role}</p>
          </div>
        </div>
        <a href="#" className="bg-black text-[#B9FF66] p-1 rounded-full">
          <Linkedin size={20} fill="currentColor" />
        </a>
      </div>

      <hr className="border-black mb-6" />

      {/* Bio Section */}
      <div className="text-gray-800">
        <p className="mb-2">{experience}</p>
        <p>{skills}</p>
      </div>
    </div>
  );
}
import Image from "next/image";


export default function ServiceCard({ 
  titleLine1, 
  titleLine2, 
  bgColor, 
  labelBg, 
  textColor, 
  image, 
  iconBg, 
  arrowColor 
}) {
  return (
    <div className={`p-10 rounded-[45px] border-b-6 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-500 ${bgColor}`}>
      
      {/* Title Section */}
      <div className="flex flex-col items-start z-10">
        <span className={`px-2 py-1 rounded-md text-2xl md:text-3xl font-medium inline-block ${textColor}`}>
          {titleLine1}
        </span>
        <span className={`px-2 py-1 rounded-md text-2xl md:text-3xl font-medium inline-block mt-1 ${textColor}`}>
          {titleLine2}
        </span>
      </div>

      {/* Footer Section */}
      <div className="mt-24 flex items-center gap-4 z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:rotate-45 ${iconBg}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 13.5L13.5 4.5M13.5 4.5H5.625M13.5 4.5V12.375" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className={`text-xl font-medium hidden md:block ${textColor}`}>Learn More</span>
      </div>

      {/* Image */}
      <div className="absolute bottom-6 right-6 w-[40%] h-[40%] md:w-1/2 md:h-1/2 flex items-end justify-end">
        <Image 
          src={image} 
          alt="service illustration" 
          width={210} 
          height={170} 
          className="object-contain" 
        />
      </div>
    </div>
  );
};

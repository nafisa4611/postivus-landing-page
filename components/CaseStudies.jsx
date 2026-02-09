import Image from "next/image";

export default function CaseStudies() {
  return (
    <div className="mt-12 lg:my-16 mx-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 sm:mb-4 mx-4 sm:mx-24 p-4 ">
        <h1 className="text-2xl sm:text-4xl font-bold text-center rounded-3xl text-black bg-[#B9FF66] w-full md:w-64 p-4">
          Case Studies
        </h1>

        <p className="text-base sm:text-xl p-2 rounded-2xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 sm:mx-24 mb-12 p-6 sm:p-12 bg-black rounded-2xl shadow-2xl shadow-gray-700">
        
        {/* Card 1 */}
        <div className="border-b md:border-b-0 md:border-r-2 border-white pb-6 md:pb-0">
          <p className="text-white text-lg sm:text-2xl">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>

          <button className="text-[#B9FF66] font-bold text-lg sm:text-2xl py-2 pr-4 mt-6 flex items-center gap-2">
            <span className="hover:bg-white hover:text-black hover:px-2 hover:rounded transition-all">
              Learn
            </span>{" "}
            More
            <Image src="/icon/icon-arrow-link-nude.svg" alt="Arrow Right" width={16} height={16} className="mt-2" />
          </button>

        </div>

        {/* Card 2 */}
        <div className="border-b md:border-b-0 md:border-r-2 border-white pb-6 md:pb-0">
          <p className="text-white text-lg sm:text-2xl">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>

          <button className="text-[#B9FF66] font-bold text-lg sm:text-2xl py-2 pr-4 mt-6 flex items-center gap-2">
            <span className="hover:bg-white hover:text-black hover:px-2 hover:rounded transition-all">
              Learn
            </span>{" "}
            More
            <Image src="/icon/icon-arrow-link-nude.svg" alt="Arrow Right" width={16} height={16} className="mt-2" />
          </button>
        </div>

        {/* Card 3 */}
        <div>
          <p className="text-white text-lg sm:text-2xl">
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>

          <button className="text-[#B9FF66] font-bold text-lg sm:text-2xl py-2 pr-4 mt-6 flex items-center gap-2">
            <span className="hover:bg-white hover:text-black hover:px-2 hover:rounded transition-all">
              Learn
            </span>{" "}
            More
            <Image src="/icon/icon-arrow-link-nude.svg" alt="Arrow Right" width={16} height={16} className="mt-2" />
          </button>
        </div>

      </div>
    </div>
  );
}

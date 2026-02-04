import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="pb-64 md:pb-0 px-4 md:px-24">
      <div className="md:mx-24 sm:mx-0 group relative h-[350px] rounded-3xl bg-neutral-100 shadow-2xl shadow-gray-400">

        {/* Green circle */}
        <div
          className="
            pointer-events-none
            absolute
            left-[48%] top-1/2
            h-[260px] w-[260px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#b9ff66]
            opacity-0
            scale-75
            transition-all duration-500 ease-out
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        <div className="relative flex h-full flex-col items-center justify-between gap-12 pl-12 md:flex-row sm:p-16">

          {/* Left content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-5xl">
              Let’s make things happen
            </h2>

            <p className="mt-6 text-lg text-neutral-600">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <button className="mt-8 rounded-xl bg-neutral-900 px-8 py-4 text-xl text-white transition hover:bg-neutral-800">
              Get your free proposal
            </button>
          </div>

          {/* Right illustration */}
          <div
            className="
              transition-all duration-500 ease-out
              group-hover:-translate-y-4
              group-hover:scale-105 sm:pt-4
            "
          >
            <Image
              src="/icon/icon-home-contact.svg"
              alt="Creative illustration"
              width={500}
              height={450}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

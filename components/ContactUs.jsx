import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="mx-4 md:mx-24 my-24 border rounded-3xl p-10 ">
      <form className="flex w-full flex-col items-center justify-around gap-10 md:flex-row border border-amber-800">
        
        {/* Left side (form area placeholder) */}
        <div className="w-3/4 border">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Fill out the form and we’ll get back to you.
          </p>
        </div>

        {/* Right side image */}
        <div className="w-1/4 border pl-16">
          <Image
            src="/icon/icon-home-contact-2.svg"
            alt="Contact illustration"
            width={400}
            height={400}
            className="max-w-full"
          />
        </div>

      </form>
    </section>
  );
}

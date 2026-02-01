import ServiceCard from "./SeviceCard";

// Main Section
export default function Services() {
  const servicesData = [
    {
      titleLine1: "Search Engine",
      titleLine2: "Optimization",
      bgColor: "bg-[#F3F3F3]",
      textColor: "text-black",
      iconBg: "bg-black",
      arrowColor: "#B9FF66",
      image: "/img/img-1.png",
    },
    {
      titleLine1: "Pay-per-click",
      titleLine2: "advertising",
      bgColor: "bg-[#B9FF66]",
      textColor: "text-black",
      iconBg: "bg-black",
      arrowColor: "#B9FF66",
      image: "/img/img-2.png",
    },
    {
      titleLine1: "Social Media",
      titleLine2: "Marketing",
      bgColor: "bg-[#191A23]",
      textColor: "text-white",
      iconBg: "bg-white",
      arrowColor: "#191A23",
      image: "/img/img-3.png",
    },
    {
      titleLine1: "Email",
      titleLine2: "Marketing",
      bgColor: "bg-[#F3F3F3]",
      textColor: "text-black",
      iconBg: "bg-black",
      arrowColor: "#B9FF66",
      image: "/img/img-4.png",
    },
    {
      titleLine1: "Search Engine",
      titleLine2: "Optimization",
      bgColor: "bg-[#F3F3F3]",
      textColor: "text-black",
      iconBg: "bg-black",
      arrowColor: "#B9FF66",
      image: "/img/img-5.png",
    },
    {
      titleLine1: "Search Engine",
      titleLine2: "Optimization",
      bgColor: "bg-black",
      textColor: "text-white",
      iconBg: "bg-white",
      arrowColor: "#B9FF66",
      image: "/img/img-6.png",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

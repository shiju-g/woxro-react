import React from "react";
import ServicesCard from "./components/ServicesCard";

const collections = [
  {
    id: 1,
    img: "https://woxro.com/public/assets/png/services/webdesigning.png",
    title: "Web Designing",
    description:
      "We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.",
    color: "#e7f0f7",
  },
  {
    id: 2,
    img: "https://woxro.com/public/assets/png/services/webapplication.png",
    title: "Web Application",
    description:
      "We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.",
    color: "#f6f5f3",
  },
  {
    id: 3,
    img: "https://woxro.com/public/assets/png/services/mobileappdevelopment.png",
    title: "Mobile App Development",
    description:
      "We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.",
    color: "#f6f5f3",
  },
  {
    id: 4,
    img: "https://woxro.com/public/assets/png/services/ecommercedevelopment.png",
    title: "Ecommerce Development",
    description:
      "For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.",
    color: "#fcf0e4",
  },
  {
    id: 5,
    img: "https://woxro.com/public/assets/png/services/digitalmarketing.png",
    title: "Digital Marketing",
    description:
      "We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.",
    color: "#f5f6f8",
  },
  {
    id: 6,
    img: "https://woxro.com/public/assets/png/services/graphic.png",
    title: "Graphic Designing",
    description:
      "We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. ",
    color: "#effbfb",
  },
];

const Services = () => {
  return (
    <div className="bg-white pt-10 pb-20 px-8">
      <h5
        className="uppercase text-center font-semibold text-gray-600 text-sm"
        style={{ letterSpacing: "5px" }}
      >
        Services we deliver
      </h5>
      <h3 className="text-center font-bold lg:text-3xl text-2xl mt-8 lg:w-6/12 md:w-9/12 w-11/12 mx-auto leading-snug">
        Preparing for your success, we provide truly prominent IT solutions.
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
        {collections &&
          collections.map((item, index) => (
            <ServicesCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;

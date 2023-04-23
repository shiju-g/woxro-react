import React from "react";

const Banner = () => {
  return (
    <div
      className="sm:h-[500px] h-96 relative border-t"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1668523272101-bff0196536c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full bg-[#00000066] z-20">
        <div className="text-white">
          <h1 className="leading-relaxed font-extrabold text-center xl:text-7xl sm:text-5xl text-3xl">
            Kerala's Leading Web <br /> Design Company
          </h1>
          <p className="text-center sm:mt-20 mt-10 sm:text-xl text-sm sm:w-8/12 w-11/12 mx-auto">
            Global Web Designing Company That Provides Full-cycle Software
            Development Services, E-commerce & Mobile App Development Services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

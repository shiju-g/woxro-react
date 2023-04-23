import React from "react";
import { IoIosCall } from "react-icons/io";
import { BsChatFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      className="relative md:h-64 h-96"
      style={{
        backgroundImage:
          "url(https://woxro.com/public/assets/png/woxroglobe.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute md:p-auto sm:p-10 p-5  top-0 left-0 h-full w-full text-white flex flex-wrap justify-between items-center">
        <div>
          <h1 className=" md:text-4xl text-3xl font-bold leading-relaxed">
            We offer all kinds of IT services that{" "}
            <br className="md:block hidden" /> ensure your success
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <button className="border border-white p-4 rounded flex items-center hover:text-black hover:bg-white font-medium text-sm">
            <IoIosCall className="w-5 h-5 mr-2" /> Contact Us
          </button>
          <button className="border border-white p-4 rounded flex items-center hover:text-black hover:bg-white font-medium text-sm">
            <BsChatFill className="w-5 h-5 mr-2" /> Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

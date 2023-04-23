import React from "react";

import { AiFillPhone } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const NewsHeader = () => {
  return (
    <>
      <div className="text-white  hidden py-2 lg:flex justify-between items-center">
        <p className="text-sm">
          <span className="font-bold">Now Hiring : </span>
          Looking for a job in Full Stack Development?
        </p>
        <div className="flex items-center">
          <p className="flex items-center font-bold text-sm">
            <AiFillPhone className="mr-2" />
            +91 487 2080 212
          </p>
          <p className="flex items-center font-bold text-sm">
            <MdLocationPin className="mx-1" />
            Leshore Business Park, Thrissur
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsHeader;

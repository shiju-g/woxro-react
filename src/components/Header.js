import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white p-5  border-white flex items-center justify-between">
        <img
          className="h-12"
          src="https://woxro.com/public/assets/png/woxrologo.png"
          alt="header"
        />
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          className="h-8 w-8 cursor-pointer lg:hidden block"
        />
      </div>
      {/* navigation */}
      <div className="text-white lg:flex hidden justify-evenly  py-3 cursor-pointer bg-gray-900">
        {data && data.map((item, index) => <p key={item.id}>{item.text}</p>)}
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;

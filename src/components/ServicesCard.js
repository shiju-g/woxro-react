import React from "react";

const ServicesCard = ({ img, title, description, color }) => {
  return (
    <div
      className="px-5 py-8 rounded-md cursor-pointer hover:scale-95 duration-300"
      style={{ backgroundColor: `${color}` }}
    >
      <img className="mb-4" src={img} />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServicesCard;

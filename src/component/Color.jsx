import React, { useState } from "react";
const Color = ({ btncolor, setColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const myspan = {
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: `${btncolor}`,
  };
  const handeler1 = () => {
    setIsHovered(true);
  };
  const handeler2 = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    // console.log(btncolor);
    setColor(btncolor);
  };
  const hov = isHovered ? { border: `2px solid ${btncolor}` } : {};

  return (
    <span
      style={{ ...myspan, ...hov }}
      onMouseEnter={handeler1}
      onMouseLeave={handeler2}
      onClick={handleClick}
    ></span>
  );
};

export default Color;

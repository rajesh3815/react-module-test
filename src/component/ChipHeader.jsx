import React from "react";

const ChipHeader = ({ heading,color }) => {
  let header = logo(heading);
  function logo(header) {
    let ans = header.charAt(0);
    for (let i = 0; i < header.length; i++) {
      if (header.charAt(i) == " ") {
        if (header.charAt(i + 1) == " ") continue;
        ans += header.charAt(i + 1);
        break;
      }
    }
    return ans;
  }
  //   console.log(header);
  return (
    <div
      style={{
        border: "1px solid black",
        height: "5rem",
        width: "20vw",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        gap: "1.5rem",
        padding: "1rem",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          backgroundColor: `${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "25px",
          color: "white",
        }}
      >
        {header}
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
      {heading}
      </div>
    </div>
  );
};

export default ChipHeader;

import React, { useEffect, useContext,useState,useRef } from "react";
import { Notescontext } from "../context/Mycontext";
const ChipHeader = ({ heading, color }) => {
  let header = logo(heading);
  const { setGroupHeader,setTogle,setColor,togle } = useContext(Notescontext);
  const [isActive, setisActive] = useState(false);
  const chipRef=useRef(null)
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
  const clickHandeler = () => {
    // console.log("hello");
    
    setTogle(true)
    setGroupHeader(heading)
    setColor(color)
  };
  useEffect(()=>{
    // console.log(chipRef.current);
    document.addEventListener('click',(e)=>{
      if(chipRef.current.contains(e.target)){
        setisActive(true)
      }else{
        setisActive(false)
      }
    })
  },[])
  return (
    <div
      onClick={clickHandeler}
      style={{
        backgroundColor:`${isActive?"#2F2F2F2B":""}`,
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
      ref={chipRef}
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

import React from "react";
import { useMediaPredicate } from "react-media-hook";
const NotesChip = ({ chipData }) => {
  const myMedia=useMediaPredicate("((max-width: 480px)")
  // console.log(chipData);
  return (
    <div
      style={{
        height: "8rem",
        width:  myMedia?"90vw":"65rem",
        marginTop: "1rem",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px #00000040",
        padding:"10px",
        overflow:"auto"
      }}
    >
      <p>{chipData.message}</p>
    </div>
  );
};

export default NotesChip;

import React from "react";

const NotesChip = ({ chipData }) => {
  // console.log(chipData);
  return (
    <div
      style={{
        height: "8rem",
        width: "65rem",
        marginTop: "1rem",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px #00000040",
        padding:"10px"
      }}
    >
      <p>{chipData.message}</p>
    </div>
  );
};

export default NotesChip;

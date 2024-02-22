import React,{useEffect} from "react";
import { useMediaPredicate } from "react-media-hook";
import DeleteElement from "../DeleteElement";
const NotesChip = ({ chipData }) => {
  // console.log(id);
  const myMedia = useMediaPredicate("((max-width: 480px)");
  // useEffect(() => {
  //   const mainDiv = document.getElementById("main_div");
  //   if (mainDiv) {
  //     console.log(mainDiv.clientHeight === mainDiv.scrollHeight);
  //   }
  // }, [chipData])
  return (
    <div
      style={{
        height: "8rem",
        width: myMedia ? "90vw" : "65rem",
        marginTop: "1rem",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px #00000040",
        padding: "10px",
        overflow: "auto",
        fontSize: "18px",
        fontFamily: "sans-serif",
        letterSpacing: "1.5px",
        position: "relative",
        wordWrap:"break-word"
      }}
    >
      <p style={{display:"inline"}}>{chipData.message}</p>
      <span
        style={{
          position: "absolute",
          top: "0px",
          right: "10px",
          padding: "10px",
        }}
      >
        <DeleteElement id={chipData.id} />
      </span>
      <span
        style={{
          float: "right",
          fontSize: "14px",
          marginBottom: "0",
          position: "absolute",
          bottom: "0px",
          right: "10px",
        }}
      >
        {chipData.time}
      </span>
    </div>
  );
};

export default NotesChip;

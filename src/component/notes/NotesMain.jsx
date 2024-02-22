import React, { useEffect, useState, useContext, useRef } from "react";
import { Notescontext } from "../../context/Mycontext";
import "./NotesMain.css";
import NotesChip from "./NotesChip";
import arrowdisabled from "../../assets/arrowoff.svg";
import arrowenabled from "../../assets/arrowon.svg";
import NoteHeader from "./NoteHeader";

const NotesMain = () => {
  const textref = useRef(null);

  const { groupHeader, color,notesdata, setNotesdata } = useContext(Notescontext);

  // const [notesdata, setNotesdata] = useState([]);
  const [textinput, setTextinput] = useState("");
  const [isActive, setisActive] = useState(false);

  //clickhandeler
  const clickHandeler = () => {
    if (textinput == "") return;
    setNotesdata((prev) => [
      ...prev,
      { 
        id:Date.now(),
        message: textinput,
        time: `${new Date().toLocaleString("en-us", {
          month: "short",
          year: "numeric",
          day: "numeric",
        })}  .  ${new Date().toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`,
      },
      
    ]);
    setTextinput("");
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (textref.current.contains(e.target)) {
        // console.log(e.target);
        setisActive(true);
      } else {
        setisActive(false);
      }
    });
  }, []);

  useEffect(() => {
    setNotesdata([]);
    let data = JSON.parse(localStorage.getItem(groupHeader));
    if (data && data.length >= 1) {
      setNotesdata(data);
      // console.log(groupHeader);
    }
  }, [groupHeader]);

  useEffect(() => {
    if (notesdata && notesdata.length >= 1)
      localStorage.setItem(groupHeader, JSON.stringify(notesdata));
    else
    localStorage.setItem(groupHeader,"[]")
  }, [notesdata]);

  return (
    <div className="notes-main">
      <div className="head-bar">
        <NoteHeader heading={groupHeader} color={color} />
      </div>
      <div>
        <div className="inputdata">
          {notesdata.map((element, index) => (
            <div key={index}>
              <NotesChip chipData={element} />
            </div>
          ))}
        </div>
        <div className="inputs">
          <textarea
            placeholder="Enter your text here"
            className="txt"
            name=""
            id=""
            cols="140"
            rows="8"
            value={textinput}
            onChange={(e) => setTextinput(e.target.value)}
            ref={textref}
          ></textarea>
          <button className="notes-btns" onClick={clickHandeler}>
            {<img src={isActive ? arrowenabled : arrowdisabled} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesMain;

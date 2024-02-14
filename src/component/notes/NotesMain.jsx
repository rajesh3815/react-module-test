import React, { useEffect, useState, useContext } from "react";
import { Notescontext } from "../../context/Mycontext";
import "./NotesMain.css";
const NotesMain = () => {
  const { groupHeader } = useContext(Notescontext);
  const [notesdata, setNotesdata] = useState([]);
  const [textinput, setTextinput] = useState("");
  const clickHandeler = () => {
    // setNotesdata([])
    setNotesdata((prev) => [
      {
        messsage: textinput,
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
      ...prev,
    ]);
  };

  useEffect(() => {
    setNotesdata([])
    let data = JSON.parse(localStorage.getItem(groupHeader));
    if (data && data.length > 1) {
      setNotesdata(data);
      console.log(groupHeader);
    }
  }, [groupHeader]);

  useEffect(() => {
    if (notesdata && notesdata.length > 1)
      localStorage.setItem(groupHeader, JSON.stringify(notesdata));
  }, [notesdata]);

  return (
    <div>
      <div className="inputdata">
        {notesdata.map((element, index) => (
          <div key={index}>
            <p>{element.messsage}</p>
            <br /> <p>{element.time}</p>
          </div>
        ))}
      </div>
      <div className="inputs">
        <textarea
          className="txt"
          name=""
          id=""
          cols="155"
          rows="10"
          value={textinput}
          onChange={(e) => setTextinput(e.target.value)}
        ></textarea>
        <button onClick={clickHandeler}>send</button>
      </div>
    </div>
  );
};

export default NotesMain;

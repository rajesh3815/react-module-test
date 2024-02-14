import React, { useEffect, useState, useContext } from "react";
import { Notescontext } from "../../context/Mycontext";
const NotesMain = () => {
  const { groupHeader } = useContext(Notescontext);
  const [notesdata, setNotesdata] = useState([]);
  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem(notesdata));
    // setNotesdata(data);
    console.log(groupHeader);
  }, []);
  return <div></div>;
};

export default NotesMain;

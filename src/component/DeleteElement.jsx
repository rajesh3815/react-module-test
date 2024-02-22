import React, { useContext, useEffect } from "react";
import deleteBtn from "../assets/delete-button.svg";
import { Notescontext } from "../context/Mycontext";
import "./DeleteElement.css";
const DeleteElement = ({ id }) => {
  console.log("hello");
  const { groupHeader, notesdata, setNotesdata } = useContext(Notescontext);
  const handeler = () => {
    setNotesdata((prev) => prev.filter((el) => el.id !== id));
  };
  useEffect(() => {
    setNotesdata([]);
    let data = JSON.parse(localStorage.getItem(groupHeader));
    data && setNotesdata(data);
  }, [groupHeader]);

  useEffect(() => {
    if (notesdata) localStorage.setItem(groupHeader, JSON.stringify(notesdata));
  }, []);

  return <img src={deleteBtn} alt="" className="imgs" onClick={handeler} />;
};

export default DeleteElement;

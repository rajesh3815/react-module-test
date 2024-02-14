import React,{useContext} from "react";
import NotesFrontpage from "./NotesFrontpage";
import { Notescontext } from "../../context/Mycontext";
import './Notes.css'
const Notes = () => {
  const{togle}=useContext(Notescontext)
  return (
    <div className="main">
      <NotesFrontpage />
    </div>
  );
};

export default Notes;

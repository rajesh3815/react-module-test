import React, { useContext } from "react";
import NotesFrontpage from "./NotesFrontpage";
import { Notescontext } from "../../context/Mycontext";
import "./Notes.css";
import NotesMain from "./NotesMain";
const Notes = () => {
  const { togle, screenTogle } = useContext(Notescontext);

  return (
    <div className="main" style={{ display: screenTogle ? "block" :"",width: screenTogle?"100vw":"77vw" }}>
      {togle ? <NotesMain /> : <NotesFrontpage />}
    </div>
  );
};

export default Notes;

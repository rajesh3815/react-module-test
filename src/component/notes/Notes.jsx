import React, { useContext } from "react";
import NotesFrontpage from "./NotesFrontpage";
import { Notescontext } from "../../context/Mycontext";
import "./Notes.css";
import NotesMain from "./NotesMain";
const Notes = () => {
  const { togle } = useContext(Notescontext);
  return (
    <div className="main">
      {togle ? <NotesMain /> : <NotesFrontpage />}
    </div>
  );
};

export default Notes;

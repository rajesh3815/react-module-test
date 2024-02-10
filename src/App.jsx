import { useState } from "react";
import "./App.css";
import Popup from "./component/Popup";
import Sidebar from "./component/Sidebar";
import UserNotes from "./component/UserNotes";

function App() {
  return (
    <>
      <div style={{
        display:"flex",
        
      }}>
        <Sidebar />
        <UserNotes />
      </div>
    </>
  );
}

export default App;

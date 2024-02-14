import { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Notes from "./component/notes/Notes";
import ContextProvider from "./context/Mycontext";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <ContextProvider>
          <Sidebar />
          <Notes />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;

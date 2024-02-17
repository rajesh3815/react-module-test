import { useState,useEffect } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Notes from "./component/notes/Notes";
import ContextProvider from "./context/Mycontext";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
 
  // useEffect(() => {
  //    window.addEventListener('resize',()=>{
  //     setWidth(window.innerWidth)
  //    })
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [])
  //  console.log(width)
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

import { createContext, useState } from "react";



export const Notescontext = createContext("");

const ContextProvider = ({ children }) => {
  const [togle, setTogle] = useState(false);
  const [groupHeader, setGroupHeader] = useState("");
  const [color, setColor] = useState();
  const [screenTogle,setscreenTogle]=useState(false)
  return (
    <Notescontext.Provider
      value={{ togle, setTogle, groupHeader, setGroupHeader,color,setColor,screenTogle,setscreenTogle }}
    >
      {children}
    </Notescontext.Provider>
  );
};
export default ContextProvider;

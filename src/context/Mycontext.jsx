import { createContext, useState } from "react";



export const Notescontext = createContext("");

const ContextProvider = ({ children }) => {
  const [togle, setTogle] = useState(false);
  const [groupHeader, setGroupHeader] = useState("");
  return (
    <Notescontext.Provider
      value={{ togle, setTogle, groupHeader, setGroupHeader }}
    >
      {children}
    </Notescontext.Provider>
  );
};
export default ContextProvider;

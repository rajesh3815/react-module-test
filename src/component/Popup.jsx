import React, { useEffect, useRef, useState } from "react";
import Styles from "./Popup.module.css";
import Color from "./Color";
const Popup = ({ isActive, setisActive }) => {
  const popref = useRef();
  const colorArray = [
    "#43E6FC",
    "#B38BFA",
    "#FF79F2",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const [borderColor, setborderColor] = useState();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!popref.current.contains(e.target)) {
        setisActive(false);
        setborderColor("white")
      }
    });
  }, []);
  return (
    <>
      <div
        className={Styles.Popup}
        style={{ display: `${isActive ? "block" : "none"}` }}
      >
        {/* popup code */}
        <div
          className={Styles.pops}
          ref={popref}
          style={{ border: `3px solid ${borderColor}` }}
        >
          <h3 className={Styles.headers}>Create New group</h3>
          <div className={Styles.groupName}>
            <h3>Group Name</h3>
            <input type="text" placeholder="Enter group name" />
          </div>
          <div className={Styles.colors}>
            <h3>Choose colour</h3>
            <div className={Styles.spans}>
              {colorArray.map((el, index) => (
                <Color
                  key={index}
                  btncolor={el}
                  setColor={setborderColor}
                />
              ))}
            </div>
          </div>

          <button className={Styles.btn}>Create</button>
        </div>
      </div>
    </>
  );
};

export default Popup;

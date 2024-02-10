import React, { useEffect, useRef, useState } from "react";
import Style from "./Sidebar.module.css";
import Popup from "./Popup";
const Sidebar = () => {
  const [isActive, setisActive] = useState(false);
  const handeler = () => {
    setisActive(true);
  };
  return (
    <>
      <div className={Style.sidebar}>
        <div className={Style.groups}>
          <h2 className={Style.sideHeader}>Pocket Notes</h2>
        </div>
        <div className={Style.btndiv}>
          <button className={Style.sideBtn} onClick={handeler}>
            +
          </button>
        </div>
      </div>
      <Popup isActive={isActive} setisActive={setisActive} />
    </>
  );
};

export default Sidebar;

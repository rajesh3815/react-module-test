import React, { useEffect, useRef, useState } from "react";
import Style from "./Sidebar.module.css";
import Popup from "./Popup";
import ChipHeader from './ChipHeader'
const Sidebar = () => {
  const [isActive, setisActive] = useState(false);
  const [groupData, setGroupData] = useState([]);
  const handeler = () => {
    setisActive(true);
  };
  // localStorage.clear()
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("headers"));
    if (arr && arr.length > 0) {
      setGroupData(arr);
    }
  }, []);
  useEffect(() => {
    if (groupData && groupData.length > 0)
      localStorage.setItem("headers", JSON.stringify(groupData));
  }, [groupData]);
 
  
  return (
    <>
      <div className={Style.sidebar}>
        <div className={Style.innersidebar}>
          <div className={Style.groups}>
            <h2 className={Style.sideHeader}>Pocket Notes</h2>
          </div>
          <div className={Style.headerChip}>
              
                {
                  groupData.map((el,index)=>(<ChipHeader key={index} heading={el?.name} color={el?.color}/>))
                }
               
              
          </div>
        </div>
        <div className={Style.btndiv}>
          <button className={Style.sideBtn} onClick={handeler}>
            +
          </button>
        </div>
      </div>
      <Popup
        isActive={isActive}
        setisActive={setisActive}
        setGroupData={setGroupData}
        groupData={groupData}
      />
    </>
  );
};

export default Sidebar;

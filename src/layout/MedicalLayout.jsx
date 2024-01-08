import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MedicalLayout = ({ children }) => {
  return (
    
      <div className="flex bg-new w-full h-full">
        <div className="h-full">
          <SideBar />
        </div>

        <div className="m-5 flex flex-col bg-white rounded-2xl ">
          <div>
            <NavBar />
          </div>

          <div className="p-10">{children}</div>
        </div>
      </div>
    
  );
};

export default MedicalLayout;

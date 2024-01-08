import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MedicalLayout = ({ children }) => {
  return (
    <div className="flex bg-new w-full h-full">
      <div className="h-full">
        <SideBar />
      </div>

      <div className=" md:m-5   w-full flex flex-col bg-white  rounded-3xl ">
        <div>
          <NavBar />
        </div>

        <div className="p-8  h-full">{children}</div>
      </div>
    </div>
  );
};

export default MedicalLayout;

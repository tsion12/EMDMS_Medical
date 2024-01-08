import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import MolsLogoText from "../assets/svg/MOLSLogoText.svg";
import HMLogo from "../assets/svg/HMLOGO.svg";
import BIQU from "../assets/svg/BIQU.svg";
const SideBar = () => {
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/medical") {
      setActivePage("Medical");
    } else if (location.pathname === "/status") {
      setActivePage("Status");
    }
  }, [location]);
  return (
    <>
      <div className=" w-[250px] h-screen bg-new  px-4  fixed flex flex-col mt-10 space-y-10  md:relative z-20">
        <div className="">
          <img src={BIQU} alt="Company Logo" className=" px-8 py-4" />
        </div>
        <div className=" mx-auto flex flex-col space-y-4 text-white">
          <Link
            to="/"
            className={`${
              activePage === "Dashboard"
                ? "bg-white text-new  hover:bg-Primary/20 "
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-8 items-center justify-start px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out`}>
            <BiSolidDashboard className="text-2xl" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Dashboard
            </p>
          </Link>
          <Link
            to="/medical"
            className={`${
              activePage === "Medical"
                ? "bg-white text-new  hover:bg-Primary/20 "
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-8 items-center justify-start px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out`}>
            <BsPersonAdd className="text-2xl" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Examinations
            </p>
          </Link>
          <Link
            to="/status"
            className={`${
              activePage === "Status"
                ? "bg-white text-new  hover:bg-Primary/20 "
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-8 items-center justify-start px-4 py-2 cursor-pointer transition-all rounded-lg duration-300 ease-in-out`}>
            <MdOutlineNoteAlt className="text-2xl" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Status
            </p>
          </Link>
        </div>

        <div className="py-3  bg-white rounded-xl absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-[85%] items-center justify-center transition-all duration-500 ease-in-out">
          <>
            <p className="text-N60 text-sm">Powered by</p>
            <div className="flex space-x-2   p-2    ">
              {" "}
              <img
                src={MolsLogoText}
                alt="Mols Logo"
                className=" w-20 transition-all duration-500 ease-in-out"
              />
              <img
                src={HMLogo}
                alt="Mols Logo"
                className=" w-20 transition-all duration-500 ease-in-out"
              />
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SideBar;

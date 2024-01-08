import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Ethio from "../assets/svg/Ethio.svg";
import Avatar from "../assets/svg/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BsPersonAdd, BsPersonBadgeFill } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const location = useLocation();
  const dropdownRef = useRef();
  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/medical") {
      setActivePage("Medical");
    } else if (location.pathname === "/status") {
      setActivePage("Status");
    }
  }, [location]);

  const handleClickOutsideDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <header className="bg-[#F0FEFF] w-full px-10 flex justify-between rounded-t-xl items-center relative  h-20 ">
      {" "}
      {/* <img
          src={Ethio}
          alt="Company Logo"
          className="h-full w-40 overflow-hidden  object-cover  absolute"
        /> */}
      <div className="text-new font-bold">
        <h1 className="hidden lg:block text-xl xl:text-2xl ">
          Medical Examination Portal
        </h1>
      </div>
      <div className="top-0  flex items-center p-1 justify-end text-sm space-x-4 ">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-third sr-only ">
            Search
          </label>
          <div class="relative">
            <div className=" md:w-[400px]">
              <input
                type="search"
                id="default-search"
                class="block w-full py-2  ps-10 text-sm text-third placeholder:text-xs placeholder:text-new   rounded-lg bg-white "
                placeholder="Search"
                required
              />
            </div>
            <div class="absolute inset-y-0 right-2 flex items-center ps-3 pointer-events-none">
              <AiOutlineSearch className="text-new" />
            </div>
          </div>
        </form>{" "}
        <div className="hidden relative md:flex items-center">
          <button onClick={toggleDropdown} className="rounded-full bg-primary ">
            <img
              src={Avatar}
              alt="A"
              className="h-10 w-10 bg-[#DFA9DD] rounded-full"
            />
          </button>
        </div>
        <div className="hidden md:flex items-center ">
          <span className="text-[#54657E]">Amanuel Belay</span>
          <FaCaretDown className="text-new" />
        </div>
        <div
          className={`${
            menuOpen
              ? "translte-x-0 visible opacity-100"
              : "translate-x-full invisible opacity-0"
          } flex flex-col items-start bg-white gap-4 absolute w-40 text-xs right-0 top-full  transition-all duration-500 ease-in-out z-30`}>
          <Link
            to="/"
            className={`${
              activePage === "Dashboard"
                ? "bg-white text-new   "
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
                ? "bg-white text-new   "
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
                ? "bg-white text-new   "
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-8 items-center justify-start px-4 py-2 cursor-pointer transition-all rounded-lg duration-300 ease-in-out`}>
            <MdOutlineNoteAlt className="text-2xl" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Status
            </p>
          </Link>

          <hr className="w-full border" />

          <div
            // onClick={() => logOut()}
            className={`${
              activePage === "Profile"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-emdmsPrimary text-N60 hover:text-white"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <FaSignOutAlt className="text-xl" />

            <p className="w-4/5 overflow-hidden text-xs font-semibold whitespace-nowrap">
              Sign Out
            </p>
          </div>
        </div>
      </div>{" "}
      {isDropdownOpen && (
        <div className="absolute z-20 w-48 mt-40 bg-gray-50 text-xs rounded-md shadow-lg right-2">
          {/* Dropdown content */}
          <div class="px-4 py-3">
            <span class="block text-md font-bold text-gray-700">
              Tsion Mengistu
            </span>
          </div>
          <hr />
          <ul class="py-2" aria-labelledby="user-menu-button text-xs">
            <li>
              <div
                // onClick={() => logOut()}
                className={`${
                  activePage === "Profile"
                    ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                    : "hover:bg-emdmsPrimary text-N60 hover:text-white"
                } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
                <FaSignOutAlt className="text-xl" />

                <p className="w-4/5 overflow-hidden text-xs font-semibold whitespace-nowrap">
                  Sign Out
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}{" "}
      <div className=" md:hidden">
        {menuOpen ? (
          <IoClose
            onClick={() => {
              setMenuOpen(false);
            }}
            className="text-2xl transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 text-N60 hover:text-N10"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => {
              setMenuOpen(true);
            }}
            className="text-2xl transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 text-N60 hover:text-N10"
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;

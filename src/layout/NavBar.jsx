import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

import Ethio from "../assets/svg/Ethio.svg";
import Avatar from "../assets/svg/avatar.svg";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutsideDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <header className="bg-[#F0FEFF] w-full px-10 flex  justify-between rounded-t-xl items-center relative  h-20 ">
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
            <div className=" w-[400px]">
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
        <div className="relative flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            className="rounded-full bg-primary ">
            <img
              src={Avatar}
              alt="A"
              className="h-10 w-10 bg-[#DFA9DD] rounded-full"
            />
          </button>

          {showDropdown && (
            <ul
              ref={dropdownRef}
              className="absolute top-20 w-1/2 bg-[#DFA9DD] text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
        <div className=" flex items-center ">
          <span className="text-[#54657E]">Amanuel Belay</span>
          <FaCaretDown className="text-new" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;

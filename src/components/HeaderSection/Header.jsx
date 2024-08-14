import React, { useState } from "react";
import { useAppContext } from "../../useContextHook/useContextApi";
import { useTheme } from "../../useContextHook/useTheme";
import SpinnerLoader from "../../utils/SpinnerLoader";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import Desktop from "../../images/desktop.png";
import Mobile from "../../images/mobile.png";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const { loading, mobileMenu, setMobileMenu } = useAppContext();
  const { isDarkMode, toggleTheme } = useTheme();

  const mobileToggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      className={`sticky top-20 z-10 flex flex-row items-center justify-between h-20 shadow-lg px-4 md:px-5 
        ${isDarkMode ? "bg-gray-900" : "bg-white"} text-${
        isDarkMode ? "white" : "bg-gray-700"
      }`}
    >
      {loading && <SpinnerLoader />}
      <div className=" flex h-5 items-center">
        <div
          className={`flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-9 rounded-full hover:bg-${
            isDarkMode ? "bg-gray-700" : "gray-300"
          }`}
          onClick={mobileToggleMenu}
        >
          {mobileMenu ? (
            <CgClose className=" text-lg" />
          ) : (
            <SlMenu className="text-lg" />
          )}
        </div>
        <Link to="/" className="flex items-center h-20">
          <img
            src={Desktop}
            alt="youtube_desktop_logo"
            className={`hidden md:block h-full object-contain ${
              isDarkMode ? "invert" : ""
            }`}
          />

          <img
            src={Mobile}
            alt="youtube_mobile_logo"
            className={`md:hidden h-14 object-contain ${
              isDarkMode ? "invert" : ""
            }`}
          />
        </Link>
      </div>
      <div className=" flex items-center group relative">
        <div
          className={` flex h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within: pl-0: ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className=" w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className=" text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className={`pl-5 pr-5 text-sm bg-transparent outline-none md:pl-0 w-32 sm:w-44 md:w-64 lg:w-[500px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

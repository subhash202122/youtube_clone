import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src="data:image/jpeg;base64,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" />
        </div>
      </div>
    </div>
  );
};

export default Header;

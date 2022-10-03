import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Navigation = ({ megaMenuHandler, modalHandler }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="shadow-md">
      <div className="w-11/12 m-auto gap-5 flex justify-between items-center py-5">
        <div
          className="lg:hidden rounded-sm w-7 h-6 flex justify-center items-center cursor-pointer gap-5"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <div className="flex items-center gap-5">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <p onMouseEnter={megaMenuHandler} className="cursor-pointer">
            Categories
          </p>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute top-4 left-5"></i>
            <input
              type="text"
              className="bg-gray-100 w-full sm:w-96 py-3 pl-10 rounded-full border border-gray-900 focus:border-gray-900 outline-0"
              placeholder="Search for anything"
            />
          </div>
        </div>
        <div className="lg:flex gap-2 lg:gap-5 hidden items-center">
          <Link to="/" className="hover:color1-text text-xl transition-all">
            Home
          </Link>
          <Link
            to="/courses"
            className="hover:color1-text text-xl transition-all"
          >
            Course
          </Link>
          <Link
            to="/blogs"
            className="hover:color1-text text-xl transition-all"
          >
            Blog
          </Link>
          <p
            className="hover:color1-text text-lg transition-all border-2 border-black py-2 px-5 cursor-pointer"
            onClick={() => modalHandler("login")}
          >
            Log in
          </p>
          <p
            className="hover:text-white text-lg transition-all border-2 border-black py-2 px-5 bg-black text-white cursor-pointer"
            onClick={() => modalHandler("signup")}
          >
            Sign up
          </p>
        </div>
      </div>
      {menu && (
        <div className="border transition-all">
          <ul className="space-y-5 py-5 w-11/12 m-auto border-t block lg:hidden">
            <li className="hover:text-red-600 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/courses">Course</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/blogs">Blog</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <p onClick={() => modalHandler("login")}>Log in</p>
            </li>
            <li className="hover:text-red-600 transition-all">
              <p onClick={() => modalHandler("signup")}> Sign up</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;

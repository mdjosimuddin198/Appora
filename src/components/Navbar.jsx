import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { BiCross } from "react-icons/bi";
import logo from "../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 font-medium ${
      isActive
        ? "bg-linear-to-l from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent   rounded"
        : "text-gray-700 hover:text-[#632EE3]"
    }`;

  return (
    <div className="relative ">
      {/* Navbar */}
      <div className="navbar flex items-center justify-between bg-base-100 px-4 md:px-6 shadow-sm">
        {/* Left */}
        <div className="">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary"
          >
            <img className="h-12 w-12" src={logo} alt="" />
            Appora
          </Link>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden md:flex  gap-4 p-4">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/apps" className={linkStyle}>
            Apps
          </NavLink>

          <NavLink to="/installation" className={linkStyle}>
            Installation
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mdjosimuddin198/"
            target="_blank"
            className="mt-2 btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90  rounded-md transition"
          >
            <FaGithub size={16} /> Contribute
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost md:hidden"
          >
            {open ? <RxCross2 size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`absolute top-full left-0 w-full bg-base-100 z-40 shadow-md transition-all duration-300 overflow-hidden md:hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-3">
          <li>
            <a className="text-primary font-semibold">Home</a>
          </li>
          <li>
            <a>Apps</a>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

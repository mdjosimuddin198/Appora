import React from "react";
import errorImg from "../assets/error-404.png";
import Navbar from "./Navbar";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col space-y-1  justify-center">
        <img src={errorImg} alt="" />
        <h2 className="text-3xl font-bold">Oops, page not found!</h2>
        <p className="text-[#627382]">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className=" btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90  rounded-md transition"
        >
          Go Back !
        </Link>
      </div>
    </>
  );
};

export default NotFound;

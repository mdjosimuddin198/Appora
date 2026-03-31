"use client";
import React from "react";
import heroImg from "../../assets/hero.png";
import StatsSection from "./StatsSection";
import Apps from "../../apps/Apps";

const Hero = () => {
  return (
    <>
      <section className="bg-base-200 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            We Build <br />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            At App Store , we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. Our goal is to turn your
            ideas into experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="play"
                className="w-5 h-5"
              />
              Google Play
            </button>

            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="appstore"
                className="w-5 h-5"
              />
              App Store
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 flex justify-center relative">
          <img src={heroImg} alt="hero" className=" drop-shadow-xl" />
        </div>
        <StatsSection />
      </section>
      <Apps />
    </>
  );
};

export default Hero;

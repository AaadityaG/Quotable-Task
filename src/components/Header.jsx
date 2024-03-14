import React, {useState} from "react";

import HomeIcon from './../assets/Home.png'
import Profile from './../assets/profile.png'
import LikeFade from './../assets/LikeFade.png'
import Bars from './../assets/bars.png'

import User from "./Mobile/User";
import TrendingSection from "./Mobile/TrendingSection";

const Header = () => {

  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isTrendsOpen, setisTrendsOpen] = useState(false);

  const leftSidebar = () => {
    setisProfileOpen(!isProfileOpen);
  };

  const rightSidebar = () => {
    setisTrendsOpen(!isTrendsOpen);
  };

  return (
    <div className=" w-full grid grid-cols-7 border-b border-b-[#323232]">
      <div className="lg:col-span-2 md:col-span-2 col-span-auto flex items-center justify-center">
        <h1 className="text-center p-3 font-Robo font-medium text-[22px] lg:inline md:inline hidden">
          Quotverse
        </h1>
      </div>

      <div className="lg:col-span-3 md:col-span-3 col-span-7 border-r border-l border-[#323232] flex items-center justify-center">
        <div className="flex items-center justify-center lg:gap-48 gap-10 stext-center p-4 ">
          <img src={Profile} alt="trends" className="lg:hidden md:hidden w-[24px] h-[24px] rounded-full cursor-pointer" onClick={leftSidebar}/>
          <img src={HomeIcon} alt="home" />
          <img src={LikeFade} alt="home" />
          {/* <img src={Bars} alt="trends" className="lg:hidden md:hidden inline"/> */}
          <img src={Bars} alt="trends" className="lg:hidden md:hidden inline" onClick={rightSidebar}/>

        </div>
        {isProfileOpen && <User />}
        {isTrendsOpen && <TrendingSection />}
      </div>

      <div className="lg:col-span-2 md:col-span-2 lg:col-span-auto lg:flex md:flex md:justify-end md:items-center lg:justify-end lg:items-center hidden ">
        <div className="flex justify-end items-center text-center p-4">
          <img src={Bars} alt="trends" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

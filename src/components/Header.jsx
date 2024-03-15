import React, {useState} from "react";

import HomeIcon from './../assets/Home.png'
import HomeEmpty from './../assets/homeEmpty.png'
import LikeFill from './../assets/likeFill.png'
import Profile from './../assets/profile.png'
import LikeFade from './../assets/LikeFade.png'
import Bars from './../assets/bars.png'

import Main from "./Main";
import User from "./Mobile/User";
import TrendingSection from "./Mobile/TrendingSection";

const Header = () => {

  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [isTrendsOpen, setisTrendsOpen] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isLikeActive, setIsLikeActive] = useState(false);

  const leftSidebar = () => {
    setisProfileOpen(!isProfileOpen);
  };

  const rightSidebar = () => {
    setisTrendsOpen(!isTrendsOpen);
  };

  const handleLikeActive = () => {
    setIsHomeActive(false);
    setIsLikeActive(true);
  };
  
  const handleHomeActive = () => {
    setIsHomeActive(true);
    setIsLikeActive(false);
  };

  return (
    <>
    <div className=" w-full grid grid-cols-7 border-b border-b-[#323232]">
      <div className="lg:col-span-2 md:col-span-2 col-span-auto flex items-center justify-center">
        <h1 className="text-center p-3 font-Robo font-medium text-[22px] lg:inline md:inline hidden">
          Quotverse
        </h1>
      </div>

      <div className="lg:col-span-3 md:col-span-3 col-span-7 border-r border-l border-[#323232] flex items-center justify-center">
        <div className="flex items-center justify-center lg:gap-48 gap-10 stext-center p-4 ">
          <img src={Profile} alt="trends" className="lg:hidden md:hidden w-[24px] h-[24px] rounded-full cursor-pointer" onClick={leftSidebar}/>
          <img src={isHomeActive ? HomeIcon : HomeEmpty} alt="home" onClick={handleHomeActive} className="cursor-pointer"/>
          <img src={isLikeActive ? LikeFill : LikeFade} alt="liked" onClick={handleLikeActive} className="cursor-pointer"/>
          {/* <img src={Bars} alt="trends" className="lg:hidden md:hidden inline"/> */}
          <img src={Bars} alt="trends" className="lg:hidden md:hidden inline cursor-pointer" onClick={rightSidebar}/>

        </div>
        {isProfileOpen && <User />}
        {isTrendsOpen && <TrendingSection />}
      </div>

      <div className="lg:col-span-2 md:col-span-2 lg:col-span-auto lg:flex md:flex md:justify-end md:items-center lg:justify-end lg:items-center hidden ">
        <div className="flex justify-end items-center text-center p-4">
          <img src={Bars} alt="trends" className="p-4" />
        </div>
      </div>
    </div>
    <Main homeActive={isHomeActive}/>

    </>

  );
};

export default Header;

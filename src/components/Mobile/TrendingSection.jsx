import React, {useState} from "react";
import Trends from "../Trends";
import Settings from '../../assets/settings.png'
import { CircleX } from 'lucide-react';

const TrendingSection = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsProfileOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#000000a8] backdrop-blur-lg w-[70%] transition-transform duration-300 p-10 flex flex-col gap-8 transform cursor-pointer ${
        isProfileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      onClick={handleClickOutside}
    >
      <CircleX onClick={handleClickOutside} className="text-[gray]"/>
      <div className="flex justify-between items-center">
        <h2 className="text-[15px] font-bold">Trending Topics</h2>
        <img src={Settings} alt="" className="w-[19px] h-[19px]" />
      </div>

      <div className="text-[14px] text-[#3897F0]">show all quotes</div>

      <Trends />
      <Trends head="EDUCATION" tag="education" number="93" />
      <Trends head="SCIENCE" tag="science" number="85" />
      <Trends head="GAMES" tag="games" number="71" />
      <Trends head="DESIGN" tag="design" number="69" />
    </div>
  );
};

export default TrendingSection;

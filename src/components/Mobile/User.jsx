import React, { useState } from 'react';

import Profile from "../../assets/profile.png";

import { CircleX } from 'lucide-react';


function User() {
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsProfileOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#000000a8] cursor-pointer backdrop-blur-lg w-[70%] transition-transform duration-300 transform ${
        isProfileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}

      onClick={handleClickOutside}
      
    >
      {/* <UserProfile /> */}
      <div className="p-[48px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <img
            src={Profile}
            alt="Profile"
            className="w-[64px] h-[64px] rounded-[50%]"
          />
          {/* <h4 className="lg:hidden md:hidden inline text-[gray]" ><CircleX className="lg:hidden md:hidden inline text-[gray]" /></h4> */}
          <CircleX className="lg:hidden md:hidden inline text-[gray]"  onClick={handleClickOutside}/>
        </div>
        <div>
          <h2 className="text-[20px] font-bold">Jhon Doe</h2>
          <p className="text-[12px] font-500">jhondoe</p>
        </div>

        <p className="text-[12px] font-500">
          UI Developer | Let's redesign the world
        </p>

        <div className="text-[#616161] text-[13px]">2957 likes •</div>
      </div>
    </div>
  );
}

export default User;

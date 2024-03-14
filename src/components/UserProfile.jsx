import React from "react";

import Profile from "./../assets/profile.png";

import { CircleX } from 'lucide-react';


const UserProfile = () => {
  return (
    <>
      <div className="p-[48px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <img
            src={Profile}
            alt="Profile"
            className="w-[64px] h-[64px] rounded-[50%]"
          />
          <h4 className="lg:hidden md:hidden inline text-[gray]"><CircleX /></h4>
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
    </>
  );
};

export default UserProfile;

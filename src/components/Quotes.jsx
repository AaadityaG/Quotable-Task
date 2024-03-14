import React from "react";

import Like from './../assets/Like.png'
import Comment from './../assets/Comment.png'
import Send from './../assets/Send.png'
import Profile from './../assets/profile.png'

import LikeBtn from "./LikeBtn/LikeBtn";

const Quotes = ({Name="John Doe", Quote = "Health is Wealth", tag=""}) => {
  return (
    <div>
      <div className="flex p-[16px] pl-[12px] gap-[12px] border-r border-b border-l border-[#323232]">
        <img
          src={Profile}
          alt="quote profile"
          className="w-[46px] h-[46px] rounded-full"
        />
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[14px] font-500">{Name}</h3>
            <p className="text-[12px] font-400">
              {Quote}
            </p>
          </div>
          <div className="flex gap-[12px]">
            {/* <img src={Like} alt="like" className="w-[24px] h-[24px]" /> */}
            <LikeBtn className="w-10" />
            <img src={Comment} alt="comment" className="w-[24px] h-[24px]" />
            <img src={Send} alt="share" className="w-[24px] h-[24px]" />
          </div>
          <p className="text-[#616161] text-[13px]">{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

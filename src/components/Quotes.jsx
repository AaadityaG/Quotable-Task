import React, { useState } from "react";

import Like from "./../assets/Like.png";
import LikeRed from "./../assets/LikeRed.png";
import Comment from "./../assets/Comment.png";
import Send from "./../assets/Send.png";
import Profile from "./../assets/profile.png";
import Back from "./../assets/goBack.png";


const Quotes = ({
  Name = "John Doe",
  Quote = "Health is Wealth",
  tag = "",
  onClick, 
  Close = false
}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setLiked(!liked);
  };
  
  return (
    <div onClick={onClick}>
      <div className="flex flex-col p-[16px] pl-[12px] gap-[12px] border-r border-b border-l border-[#323232]">
        {Close ? (
          <div className="m-2 flex gap-3">
            <img src={Back} alt="" />
            <p className="text-[16px] font-500">Comments</p>
          </div>
        ) : null}

        <div className="flex gap-[12px] ">
          <img
            src={Profile}
            alt="quote profile"
            className="w-[46px] h-[46px] rounded-full"
          />
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[14px] font-500">{Name}</h3>
              <p className="text-[12px] font-400">{Quote}</p>
            </div>
            <div className="flex items-center">
              {liked ? (
                <img
                  src={LikeRed}
                  alt="liked"
                  className="w-[24px] h-[24px]"
                  onClick={(event) => handleLikeClick(event)}
                />
              ) : (
                <img
                  src={Like}
                  alt="like"
                  className="w-[24px] h-[24px]"
                  onClick={(event) => handleLikeClick(event)}
                />
              )}
              <img src={Comment} alt="comment" className="w-[24px] h-[24px]" />
              <img src={Send} alt="share" className="w-[24px] h-[24px]" />
            </div>
            <p className="text-[#616161] text-[13px] ">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

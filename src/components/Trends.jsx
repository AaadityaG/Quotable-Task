import React from "react";

const Trends = ({head = "AGE", tag = "age", number = "123"}) => {
  return (
    <div>
      <div className="text-[14px] text-[#616161] flex gap-[2px] flex-col">
        <p className="text-[14px]">{head}</p>
        <p className="text-[white]">#{tag}</p>
        <p>{number} quotes</p>
      </div>
    </div>
  );
};

export default Trends;

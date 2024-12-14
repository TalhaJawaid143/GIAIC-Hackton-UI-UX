import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DressStyleSection = () => {
  return (
    <div className="border-none">
      <div className="text-black font-bold text-xl py-0.5">Dress Style</div>
      <div className="pt-4 pb-0 flex flex-col text-black/60 space-y-0.5">
        <div className="flex items-center justify-between py-2">
          Casual <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center justify-between py-2">
          Formal <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center justify-between py-2">
          Party <MdKeyboardArrowRight />
        </div>
        <div className="flex items-center justify-between py-2">
          Gym <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default DressStyleSection;

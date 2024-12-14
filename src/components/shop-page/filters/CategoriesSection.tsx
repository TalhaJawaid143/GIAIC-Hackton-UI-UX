import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      <div className="flex items-center justify-between py-2">
        T-shirts 
      </div>
      <div className="flex items-center justify-between py-2">
        Shorts 
      </div>
      <div className="flex items-center justify-between py-2">
        Shirts 
      </div>
      <div className="flex items-center justify-between py-2">
        Hoodie 
      </div>
      <div className="flex items-center justify-between py-2">
        Jeans 
      </div>
    </div>
  );
};

export default CategoriesSection;

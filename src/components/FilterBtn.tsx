import React from "react";

const FilterBtn = () => {
  const categoryArray: string[] = [
    "All",
    "SKINCARE",
    "HAIR",
    "BATH & BODY",
    "FRAGRANCE",
    "GIFT",
  ];

  return (
    
    <div className="pb-2 w-[85%] whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
    {categoryArray.map((category, index) => {
      return (
        <button 
          key={index} 
          className="mb-2 py-2 px-6 rounded-full m-1 border-2 border-zinc-600 text-white/55 hover:bg-black hover:text-zinc-200 transition-colors duration-200 ease-in-out"
        >
          {category}
        </button>
      );
    })}
  </div>
  
  
  );
};

export default FilterBtn;

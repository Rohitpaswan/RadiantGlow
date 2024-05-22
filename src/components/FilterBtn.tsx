import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import React, { useEffect } from "react";

const FilterBtn = ({handleFilterClick  } :{handleFilterClick :any}) => {

  const {filterProducts , getFilterdata} = useSupabase();

  



  const categoryArray: string[] = [
    "ALL",
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
        <button  onClick={() => handleFilterClick(category)}
         
          key={index} 
          className="mb-2 py-2 px-6 rounded-full m-1 border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100  transition-colors duration-200 ease-in-out"
          >
          {category}
        </button>
      );
    })}
  </div>
  
  
  );
};

export default FilterBtn;

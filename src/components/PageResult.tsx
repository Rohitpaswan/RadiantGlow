import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import DropdownMenu from "./DropdownMenu";
import FilterBtn from "./FilterBtn";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";

interface PageResultProp {
  initialProducts: any;
}

const PageResult: React.FC<PageResultProp> = ({ initialProducts }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filterProducts, setFilterProducts] = useState(initialProducts);
  const { getSelectedData, getAllData } = useSupabase();
  //get value from btn filter
  const handleFilterClick = (value: string) => {
    setFilterValue(value);
    console.log("Filter value:", filterValue); // Or any other logic you need to implement
  };

  useEffect(() => {
    const fetchData = async () => {
      if (filterValue === "ALL") {
        const data = await getAllData();
        setFilterProducts(data);
      } else {
        const filteredData = await getSelectedData(filterValue);
        setFilterProducts(filteredData);
      }
    };

    fetchData();
  }, [filterValue, getAllData, getSelectedData]);

  console.log(filterProducts);
  return (
    <div className="w-[85%] mx-auto  ">
      <div className="mt-10">
        <div className="font-bold text-xl uppercase mb-4 text-white ">
          Product Catalog
        </div>

        <div className="hidden md:block mb-4 text-zinc-300">
          <h1 className="font-semi-bold text-xl">
            Result {filterProducts.length}
          </h1>
          <p>
            Price and other details may vary based on product size and colour.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row item-center justify-between gap-6">
          <div className="w-full lg:order-2 lg:w-[45%]">
            <DropdownMenu />
          </div>
          <div className="w-full lg:order-1 ">
            <FilterBtn handleFilterClick={handleFilterClick} />
          </div>
        </div>
        <div className="mt-8 w-full flex justify-center">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-y-5">
            {filterProducts?.map((item: any) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageResult;

"use client";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PageResult from "@/components/PageResult";
import { BeatLoader } from "react-spinners";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const { query } = useParams();
  const { filterProducts, getFilterdata } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getFilterdata(query.toString());
      setIsLoading(false);
    };

    fetchData();
  }, [query, getFilterdata]);

  return (
    <div className="">
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
          <BeatLoader
            color={"#717171"}
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) :  (
        <div>
          { filterProducts.length === 0 ? (
            <div className="text-center mt-4">No products found with name {query}</div>
          ) : (
            <PageResult initialProducts={filterProducts} />
          )}
           <Footer/>
        </div>
      )}

     
    </div>
  );
};

export default SearchPage;

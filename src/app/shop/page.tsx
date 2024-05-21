"use client"
import Footer from "@/components/Footer";
import PageResult from "@/components/PageResult";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const AllProduct = () => {
  const { allProducts, getAllData } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getAllData();
      setIsLoading(false);
    };

    fetchData();
  }, [getAllData]);
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
      ) : (<>
        <PageResult filterProducts={allProducts} />
        <Footer />
        </>
      )}
     
    </div>
  );
};

export default AllProduct;

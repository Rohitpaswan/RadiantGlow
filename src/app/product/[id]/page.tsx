"use client";
import ProductCard from "@/components/ProductCard";
import SingleProduct from "@/components/SingleProduct";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { BeatLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getSingleProduct(id.toString());
      setIsLoading(false);
    };
  
    fetchData();
  }, [getSingleProduct, id]);

  console.log(singleProduct);

  return (
    <div className="h-full w-full flex items-center justify-center">
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
      ) : (
        {singleProduct} && <SingleProduct singleProduct={singleProduct} />
        
      )}
    </div>
  );
};

export default ProductDetail;

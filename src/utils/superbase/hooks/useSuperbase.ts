import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../product";

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);
  const [singleProduct, setSingleProduct] = useState<any>(null);

  /** fetching data from superbase */
  const fetchData = useCallback(async () => {
    let {data, error} = await supabase.from('product').select("*").limit(6);

    if (data) {
      console.log(data);
      setProducts(data);
    } 
   
    else {
      console.log(error);
    }
  }, []);


  
  /** fetching data from superbase based on search query */
  const getFilterdata = useCallback(async (query: string) => {
    let {data, error} = await supabase.from('product').select("*").or(`name.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`); // cloth

    if (data) {
      console.log(data);
      setFilterProducts(data);
    } 
   
    else {
      console.log(error);
    }
  }, []);


  //fetch single product data from superbase 


  const getSingleProduct = useCallback(async (id:string) => {
 
      const { data, error } = await supabase
        .from("product")
        .select("*") // Replace with actual column names you need
        .eq("id", id);

      if (data) {
        setSingleProduct(data);
      }
   else{
    console.log(error);
    
   }
     
  }, []);
  




  return { products,fetchData, filterProducts, getFilterdata,getSingleProduct,singleProduct};
};

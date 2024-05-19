import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../product";

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);

  /** fetching data from superbase */
  const fetchData = async () => {
    let { data, error } = await supabase.from("product").select("*");
    if (data) setProducts(data);
    else console.log(error);
  };

  
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


  return { products, filterProducts, getFilterdata };
};

/* eslint-disable @next/next/no-img-element */
import { addToCart } from "@/redux/cartSlice";
import { useAppDispatch } from "@/utils/superbase/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { GiBeachBag } from "react-icons/gi";
import img1 from "../../public/img/gift.jpg"

const ProductCard = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
    // Function to format the product name to break after 4 words if needed
    const formatProductName = (name: string) => {
      const words = name.split(' ');
      if (words.length > 4) {
        return (
          <>
            {words.slice(0, 3).join(' ')}<br />{words.slice(4).join(' ')}
          </>
        );
      }
      return name;
    };
  return (
    <>
      <div className="w-60  md:w-80 flex items-center justify-center">
        <div className="w-full  bg-white rounded-lg  lg:w-[full] shadow-md lg:hover:scale-105 lg:hover:shadow-xl duration-500 " >
          
            <Image
              src={item.imageURL}
              width={288}
              height={320}
              alt="Product image"
              className="h-80  w-full object-cover cursor-pointer object-center"
              onClick={() =>{router.push(`/product/${item.id}`)}}
            />
          
          <div className="px-4 py-3 w-full">
            {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
            <p className="text-lg inline font-bold text-black truncate  capitalize"  style={{ maxWidth: '100%' }}>
            {formatProductName(item.name)}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Rs.{item.price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>

              <div className="ml-auto">
                
                  <div onClick={() => {
                    dispatch(addToCart(item));
                    router.push("/cart");}}>
                    <GiBeachBag className="text-2xl cursor-pointer" />
                  </div>
                
              </div>
            </div>
            <span className="text-lg font-semibold text-slate-500 cursor-auto my-3">
              Rating {item.rating}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

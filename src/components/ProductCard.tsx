/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { GiBeachBag } from "react-icons/gi";

const ProductCard = ({ item }: { item: any }) => {
  return (
    <>
      <div className="">
        <div className="bg-white rounded-lg  lg:w-[88%] shadow-md lg:hover:scale-105 lg:hover:shadow-xl duration-500">
          <Link href={""}>
            <img
              src={item.imageURL}
              alt="Product image"
              className="h-80  w-full object-cover"
            />
          </Link>
          <div className="px-4 py-3 w-72">
            {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
            <p className="text-lg font-bold text-black truncate block capitalize">
              {item.name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Rs.{item.price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>

              <div className="ml-auto">
                <Link href="#xxd">
                  <div>
                    <GiBeachBag className="text-2xl" />
                  </div>
                </Link>
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

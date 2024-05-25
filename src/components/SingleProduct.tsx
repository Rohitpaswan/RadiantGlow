import React from "react";
import Footer from "./Footer";
import { useAppDispatch } from "@/utils/superbase/hooks/redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/cartSlice";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (!singleProduct || singleProduct.length === 0) return null;

  return (
    <div className="w-full">
      <div className="w-[90%]  text-white">
        <div className="bg-transparent py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                  <Image
                    src={singleProduct[0].imageURL}
                    width={130}
                    height={150}
                    alt="product-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full py-3 px-2  rounded-full m-1 border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100  transition-colors duration-200 ease-in-out"
                      onClick={() => {
                        dispatch(addToCart(singleProduct[0]));
                        router.push("/cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-1/2 px-2">
                    <button className="w-full p-2 md:py-3 rounded-full m-1 bg-slate-300 border-black text-textColor hover:bg-black hover:text-zinc-200 transition-colors duration-200 ease-in-out">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-3xl font-bold uppercase text-zinc-300 mb-2">
                  {singleProduct[0].name}
                </h2>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-300">Price: </span>
                    <span className="text-zinc-400">
                      <FaIndianRupeeSign className="inline-block" />
                      {singleProduct[0].price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-300">
                      Availability:{" "}
                    </span>
                    <span className="text-zinc-400">
                      {singleProduct[0].availability}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-gray-300">Rating:</span>
                  <span className="text-zinc-400">
                    {" "}
                    {singleProduct[0].rating}
                  </span>
                </div>
                <div className="mt-10">
                  <span className="font-bold text-gray-300 md:text-xl">
                    Product Description:
                  </span>
                  <p className="text-gray-500 text-sm md:text-xl mt-2">
                    {singleProduct[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;

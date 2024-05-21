import React from "react";
import Footer from "./Footer";

const SingleProduct = ({singleProduct} : {singleProduct :any}) => {
  if (!singleProduct || singleProduct.length === 0) return null;

  

  return (
    <div className="w-full">
    <div className="w-[90%] border-2 text-black">
      <div className="bg-transparent py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={singleProduct[0].imageURL}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full py-2 px-2 rounded-full m-1 border-2 border-black text-textColor hover:bg-black hover:text-zinc-200 transition-colors duration-200 ease-in-out">
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
              <h2 className="text-3xl font-bold uppercase text-gray-800 mb-2">
                {singleProduct[0].name}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price: </span>
                  <span className="text-gray-600">Rs. {singleProduct[0].price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Availability:</span>
                  <span className="text-gray-600">{singleProduct[0].availability}</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">Rating:</span>
                <span className="text-gray-600">*****</span>
              </div>
              <div className="mt-10">
                <span className="font-bold text-gray-700">Product Description:</span>
                <p className="text-gray-600 text-sm mt-2">{singleProduct[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleProduct;

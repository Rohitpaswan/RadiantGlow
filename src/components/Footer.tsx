import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerColor h-[16vw] flex  items-center justify-center mt-[6vw]">
      <div className="grid grid-cols-12 w-[85%] h-full  ">
        {/* part-1 */}
        <div className="col-span-6   pt-12 flex flex-col items-start ">
          <div className="uppercase text-3xl text-bold mb-2">
            Sign up for our updates
          </div>
          <p className="text-semi-bold mb-8">
            Get 10% discount for first product
          </p>
          <input
            type="text"
            className="w-[80%] mb-6 bg-transparent border-b border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your e-mail"
          />

          <button className="px-4 py-2  w-[70%] bg-black hover:bg-slate-700 text-zinc-300 transition-colors duration-200 ease-in-out rounded-full hover:shadow-lg hover:divide-black">
            Sign up
          </button>
        </div>

        {/* part-2 */}
        <div className="col-span-2 bg-red-100">
          <div className="uppercase w-full flex flex-col items-center text-bold ">shop</div>
          <p className="block text-center">Product</p>
          <p className="block text-center">Our Blog</p>
        </div>

        {/* part-3 */}
        <div className="col-span-2 bg-yellow-100">
          <div className="uppercase">About</div>
          <span>Order</span>
          <span>Shipping</span>
          <span>FAQs</span>
        </div>

        {/* part-4 */}
        <div className="col-span-2 bg-zinc-700">
          <div className="uppercase">Contact</div>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

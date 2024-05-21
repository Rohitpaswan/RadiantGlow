import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerColor mt-[6vw]  w-full">
    <div className=  " md:w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-12 w-[75%] h-full  ">
        {/* part-1 */}
        <div className="col-span-12 md:col-span-6   pt-12 flex flex-col items-start ">
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
        <div className="col-span-4 md:col-span-2 pt-12">
          <div className="uppercase w-full flex flex-col items-center text-bold text-xl">shop</div>
          <p className="block text-center">Product</p>
          <p className="block text-center">Our Blog</p>
        </div>

        {/* part-3 */}
        <div className="col-span-4 md:col-span-2 pt-12">
          <div className="uppercase w-full flex flex-col items-center text-bold text-xl">About</div>
          <p  className="block text-center">Order</p>
          <p  className="block text-center">Shipping</p>
          <p  className="block text-center">FAQs</p>
        </div>

        {/* part-4 */}
        <div className="col-span-4 md:col-span-2 pt-12">
          <div className="uppercase w-full flex flex-col items-center text-xl text-bold">Contact</div>
          <p  className="block text-center">Instagram</p>
          <p  className="block text-center">Facebook</p>
          <p  className="block text-center">Twitter</p>
        </div>
      </div>

    </div>
    
    <footer className="mt-5 text-center w-full md:w-[75%] p-3 px-10 flex flex-col md:flex-row justify-between items-center bg-footerColor text-textColor">
      <p>&copy; 2024 RadiantGlow. All rights reserved</p>
      <p>Site by Rohit Paswan</p>
    </footer>
    </div>
  );
};

export default Footer;

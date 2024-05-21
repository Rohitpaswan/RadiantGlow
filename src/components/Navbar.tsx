"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/utils/superbase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState<string>(""); // Ensure query is typed as a string
  const router = useRouter();

  const cart = useAppSelector(getCart);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
};

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
        console.log('hello');
        
        // Reset the input value or perform other actions as needed
        router.push(`/search/${query}`);
        setQuery('');
    }
};

  return (
    <div className="flex items-center justify-center p-3 shadow-md text-white h-20 ">
      <nav className="w-[80%] flex items-center justify-between">
        <IoMenu
          className="md:hidden"
          onClick={() => setToggle((pre) => !pre)}
        />
        <div
          className={clsx(
            "fixed  w-full  h-dvh md:hidden border-2-solid  bg-black/50 blackdrop-blur-sm top-0 right-0 -translate-x-full  transition-all",
            toggle && "translate-x-0 "
          )}
        >
          <section className="x text-white w-1/2 h-dvh p-8 gap-8 z-50   flex flex-col  justify-start">
            <IoIosCloseCircle
              className="text-4xl "
              onClick={() => setToggle((pre) => !pre)}
            />
            <div className="font-bold text-2xl"> HI, USER </div>
            <div className="font-bold hover:border-b border-transparent hover:border-black">
              SHOPPING
            </div>
            <div className="font-bold hover:border-b border-transparent hover:border-black">
              ABOUT
            </div>
            <div className="font-bold hover:border-b border-transparent hover:border-black">
              CONTACT
            </div>
          </section>
        </div>

        <div className="catalog flex items-center justify-between gap-4">
          <div className="text-2xl mr-2"> LogoImg </div>
          <div className="hidden md:block item text-md font-bold text-uppercase">Shop </div>
          <div className="hidden md:block item text-md font-bold text-uppercase"> About </div>
          <div className="hidden md:block item text-md font-bold text-uppercase"> Contact </div>
        </div>

        <div className="catalog flex items-center justify-between gap-6 w-[70%]">
          {/* <div className="  text-md font-bold text-uppercase">Seach</div> */}
          <div className="w-full ">
            <input
              type="text"
              value={query}
              className="search w-full border-dark border-1 border-black px-3 py-2 rounded-full text-textColor"
              onChange={ handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="search.."
              
            />
          </div>
          <div className="hidden md:block text-md font-bold text-uppercase">
            My account
          </div>
          <div className="text-xl relative flex items-center">
      <span className="absolute left-6 top-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cart.length}</span>
      <FaShoppingCart />
    </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

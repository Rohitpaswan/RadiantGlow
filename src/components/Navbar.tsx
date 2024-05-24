"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/utils/superbase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import logoImg from "../../public/img/logo.jpeg";
import Link from "next/link";

import UserSiginBtn from "./UserSiginBtn";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState<string>(""); // Ensure query is typed as a string

  const router = useRouter();

  const cart = useAppSelector(getCart);
  let totalQuantity = 0;
  cart.forEach((product: any) => (totalQuantity += product.quantity));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("hello");

      // Reset the input value or perform other actions as needed
      router.push(`/search/${query}`);
      setQuery("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center p-3 shadow-md  text-white h-20  ">
        <nav className="w-[85%] flex items-center justify-between">
          <IoMenu
            className="lg:hidden text-3xl  rounded-full mr-1 "
            onClick={() => setToggle((pre) => !pre)}
          />

          {/* Side bar for moblie and mid-screen device*/}
          <div
            className={clsx(
              "fixed  w-full  h-dvh lg:hidden border-2-solid  bg-black/95 blackdrop-blur-sm z-10 top-0 right-0 -translate-x-full  transition-all",
              toggle && "translate-x-0 "
            )}
          >
            <section className="x text-white w-[60%] h-dvh p-8 pl-12 gap-8 z-50   flex flex-col  justify-start ">
              <IoIosCloseCircle
                className="text-4xl "
                onClick={() => setToggle((pre) => !pre)}
              />

              <UserSiginBtn />
              <Link href="/shop">
                <div className="font-bold text-md hover:border-b border-transparent hover:border-black hover:cursor-pointer">
                  SHOPPING
                </div>
              </Link>
              <div className="font-bold text-md hover:border-b border-transparent hover:border-black hover:cursor-pointer">
                ABOUT
              </div>
              <div className="font-bold text-md hover:border-b border-transparent hover:border-black hover:cursor-pointer">
                CONTACT
              </div>
              <Link href="/cart" className="">
                
              <div className="text-md relative flex items-center gap-2">
                <span>Cart </span>
                <span className="absolute left-16 top-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalQuantity}
                </span>
                <FaShoppingCart />
              </div>
            </Link>
            </section>
          </div>


          <div className="catalog flex items-center justify-between gap-4">
            <Link href="/">
              <div className="text-2xl mr-2 ">
                <Image
                  width={80}
                  height={80}
                  src={logoImg}
                  alt="logo"
                  className="p-2 cursor-pointer"
                />
              </div>
            </Link>
            <Link href="/shop">
              <div className="hidden lg:block item text-md font-bold text-uppercase  cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-zinc-100">
                Shop
              </div>
            </Link>

            <div className="hidden lg:block item text-md font-bold text-uppercase hover:cursor-pointer  border-b-2 border-transparent hover:border-b-2 hover:border-zinc-100">
              About
            </div>
            <div className="hidden lg:block item text-md font-bold text-uppercase hover:cursor-pointer  border-b-2 border-transparent hover:border-b-2 hover:border-zinc-100">
              Contact
            </div>
          </div>

          <div className="catalog flex items-center justify-between gap-6 w-[70%] hover:cursor-pointer">
            <div className="  w-full ">
              <input
                type="text"
                value={query}
                className="search w-full border-dark border-1 border-black px-3 py-1 lg:py-2 rounded-full text-textColor placeholder-black/90 placeholder-opacity-50 placeholder-font-semibold focus:placeholder-zinc-600"
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="search.."
              />
            </div>
            <div className="hidden lg:block ">
              <UserSiginBtn />
            </div>
            <Link href="/cart" className="hidden md:block">
              <div className="text-xl relative flex items-center">
                <span className="absolute left-6 top-0 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalQuantity}
                </span>
                <FaShoppingCart />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

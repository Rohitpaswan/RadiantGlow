"use client";
import ProductCard from "@/components/ProductCard";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import React, { useEffect } from "react";
import style from "@/style/style.module.css";
import Footer from "@/components/Footer";
export default function Home() {
  const { products, fetchData } = useSupabase();
  useEffect(() => {
    const getData = async () => {
      await fetchData();
    };

    getData();
  }, []);
  console.log(products);

  return (
    <div className="w-full  bg-white">
      <div className="w-full lg:w-[85%] m-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                RADIANTGLOW
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-5 mt-11 text-sm leading-7 text-semi-bold">
                Created by celebrity hairstylist Jen Atkin, Quai is the haircare
                brand that's all about celebrating who you are through your
                hairstyle. Pronounced 'way', RadiantGlow means yes, in that
                casual, Parisian way. It's all about using the best products
                that work for you and will make you feel your best, with
                kind-to-hair, sulphate and paraben-free formulas, for smooth and
                shiny tresses.
              </p>
              <div className="flex justify-center">
                <button className="mb-2 py-2 px-6 rounded-full m-1 border-2 border-black text-textColor hover:bg-black hover:text-zinc-200 transition-colors duration-200 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>

        {/* Image slide */}
        <section
          className={`${style.features} w-[85%] m-auto flex flex-col justify-center items-center`}
        >
          <div>
            <h1 className="text-3xl font-bold  ">Our Features</h1>
            <p>You can checkout our new product at biir price</p>
          </div>
          <div className="w-[85%] p-4 flex whitespace-nowrap overflow-x-scroll gap-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {products?.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard item={product} />{" "}
                </div>
              );
            })}
          </div>
        </section>

        {/* Catgoeries */}
        <section className="categoeries w-[85%] m-auto mb-10">
          <h1 className="text-3xl font-bold uppercase  text-center">
            Categoeries
          </h1>
          <div
            className={`${style.update} flex items-center justify-end gap-1 pr-6 w-full`}
          >
            {/* Left Side */}
            <div className="w-[30%] text-zinc-400 hover:text-textColor">
              <img src="https://picsum.photos/id/237/200/300" alt="" />
            </div>
            {/* Right side */}
            <div className="w-[50%]">
              <div className={style.elem}>
               
                <h4>skincare</h4>
                <img src="./images/update/pic1.jpg" alt="" srcset="" />
              </div>
              <div className={style.elem}>
                <img src="./images/img/img (3).jpg" alt="" srcset="" />
                <h4>hair</h4>
              </div>

              <div className={style.elem}>
                <img
                  src="./images/page2/mahdi-chaghari-pDcugCm-ZQs-unsplash.jpg"
                  alt=""
                />
                <h4>body and bath</h4>
              </div>

              <div className={style.elem}>
                <img src="./images/img/img (5).jpg" alt="" />
                <h4>Fragences</h4>
              </div>
              <div className={style.elem}>
                <img src="./images/img/img (5).jpg" alt="" />
                <h4>gifts</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="about mt-5 ">
        <div className="bg-gray-100 p-4 w-[88%] m-auto">
      <div className="container mx-auto  p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
            <p className="mb-4">
              It is targeted at millennials with modern ideals, for whom luxury is about being real and having access to the best in the business.
            </p>
            <button className="bg-white text-black font-semibold py-2 px-4 border border-black rounded-full w-max">
              READ MORE
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://via.placeholder.com/300x450" alt="Person" className="w-full md:w-1/2 object-cover" />
            
            </div>
          </div>
          <img src="https://via.placeholder.com/450x300" alt="Products" className="w-full md:w-1/2 object-cover" />
        </div>
      </div>
    </div>
        </section>

      
      </div>
      <Footer/>
    </div>
  );
}

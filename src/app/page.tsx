"use client";
import ProductCard from "@/components/ProductCard";
import { useSupabase } from "@/utils/superbase/hooks/useSuperbase";
import React, { useEffect } from "react";
import style from "@/style/style.module.css";
import Footer from "@/components/Footer";

// import Images
import Image from "next/image";
import heroImg from "../../public/img/img1.jpg";
import skinImg from "../../public/img/skin.jpg";
import bodyImg from "../../public/img/body.jpg";
import hairImg from "../../public/img/hair.jpg";
import giftImg from "../../public/img/gift.jpg";
import frangenceImg from "../../public/img/frag.jpg";
import abtImg from "../../public/img/ab1.jpg";
import abtImg2 from "../../public/img/ab2.jpg";
import Link from "next/link";

/** swiper js */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';





export default function Home() {
  const { products, fetchData } = useSupabase();
  useEffect(() => {
    const getData = async () => {
      await fetchData();
    };

    getData();
  }, [fetchData]);
  console.log(products);

  return (
    <div className="w-full  bg-black">
      <div className="w-full lg:w-[85%] m-auto">
        <section className="text-gray-600 body-font mb-6">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-300">
                RADIANTGLOW
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-5 mt-11 text-sm leading-7 text-semi-bold text-zinc-400">
                Created by celebrity hairstylist Jen Atkin, Quai is the haircare
                brand that&apos;s all about celebrating who you are through your
                hairstyle. Pronounced &apos;way&apos;, RadiantGlow means yes, in
                that casual, Parisian way. It&apos;s all about using the best
                products that work for you and will make you feel your best,
                with kind-to-hair, sulphate and paraben-free formulas, for
                smooth and shiny tresses.
              </p>
              <div className="flex justify-center">
                <Link href="/shop">
                
                  <button className="mb-2 py-2 px-6 rounded-full m-1 border-2 border-zinc-700 text-zinc-400 hover:bg-black hover:text-zinc-100 hover:border-zinc-100  transition-colors duration-200 ease-in-out">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
              <Image
                src={heroImg}
                alt="hero-section"
                width={250}
                height={150}
                className="m-auto"
              />
            </div>
          </div>
        </section>

        <section className="categoeries w-[85%] m-auto mb-10 mt-10  ">
          <h1 className="text-3xl py-0  font-bold uppercase  text-center text-zinc-300 mb-12">
            Categoeries
            <hr  className="border-b-2 w-[80%] md:w-[20%] mx-auto  "/ >
          </h1>
         
          <div
            className={`${style.update} flex items-center justify-end gap-1 pr-6 w-full my-12 mb-14`}
          >
          

         
            <div className="w-full md:w-[50%]">
              <div className={style.elem}>
                <h4 >skincare</h4>
                <Image src={skinImg} alt="skin" className="hidden md:block" />
              </div>
              <div className={style.elem}>
                <Image src={hairImg} alt="skin" className="hidden md:block" />
                <h4>hair</h4>
              </div>

              <div className={style.elem}>
                <Image src={bodyImg} alt="skin" className="hidden md:block" />
                <h4>body and bath</h4>
              </div>

              <div className={style.elem}>
                <Image
                  src={frangenceImg}
                  alt="skin"
                  className="hidden md:block"
                />
                <h4>Fragences</h4>
              </div>
              <div className={style.elem}>
                <Image src={giftImg} alt="skin" className="hidden md:block" />
                <h4>gifts</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Image slide */}
        <section className={`${style.features} w-[85%] mt-10 m-auto flex flex-col justify-center items-center`}>
        <h1 className="text-3xl font-bold text-zinc-300 border-b-2 bottom-zinc-200 text-center ">Our Features</h1>

          <div className="w-full mt-10">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          740: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {products?.map((product ,index ) => {
              return (
                <div key={product.id}>
                  <SwiperSlide key={index}>
                    <ProductCard item={product} />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          </div>
        </section>

        {/* Catgoeries */}

        <section className="about mt-10 pt-2 ">
          <div className="bg-gray-100 p-4 w-[88%] m-auto">
            <div className="container mx-auto  p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
                  <p className="mb-4">
                    It is targeted at millennials with modern ideals, for whom
                    luxury is about being real and having access to the best in
                    the business.
                  </p>
                  <button className="bg-white text-black font-semibold py-2 px-4 border border-black rounded-full w-max">
                    READ MORE
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Image
                      src={abtImg}
                      alt="about"
                      className="-full md:w-1/2 object-cover"
                    />
                  </div>
                </div>
                <Image
                  src={abtImg2}
                  alt="about"
                  className="-full md:w-1/2 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

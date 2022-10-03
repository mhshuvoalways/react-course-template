import React from "react";
import IntroImg from "../../assets/images/intro.webp";

const Intro = () => {
  return (
    <div className="relative z-0">
      <div className="flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-7/12 color1-bg text-white z-10 h-full md:h-screen">
          <div className="w-10/12 m-auto py-20">
            <div className="w-full md:w-10/12">
              <p className="font-bold text-5xl xl:text-7xl">
                Selling online is vital to business growth.
              </p>
              <p className="font-semibold text-2xl mt-5">
                2025 Grow Your e-Commerce Conference
              </p>
              <p className="font-semibold text-xl mt-5 sm:mt-10">
                September 16-18, 2025 Paragon One Plaza and Sky Garden
              </p>
              <p className="font-bold text-xl mt-5 lg:mt-20 color3-bg py-2 text-center rounded-full text-black cursor-pointer">
                SIGN UP NOW
              </p>
            </div>
          </div>
        </div>
        <img
          src={IntroImg}
          alt=""
          className="md:w-9/12 md:absolute md:h-screen top-0 right-0 w-full"
        />
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import Story1 from "../../assets/images/story1.webp";
import Story2 from "../../assets/images/story2.webp";

const PopularStory = () => {
  return (
    <div className="color1-bg text-white">
      <div className="w-10/12 m-auto py-20">
        <p className="font-bold text-5xl xl:text-7xl">BLOG & NEWS PORTAL</p>
        <div className="w-full md:w-6/12 mt-20">
          <p className="font-bold text-3xl xl:text-5xl">
            Blockchain Blog & Crypto News Portal
          </p>
        </div>
        <div className="flex gap-10 mt-5 flex-wrap lg:flex-nowrap">
          <div className="flex gap-3 w-full lg:w-7/12 flex-wrap md:flex-nowrap">
            <img src={Story1} alt="" className="w-full md:w-6/12" />
            <img src={Story2} alt="" className="w-full md:w-6/12" />
          </div>
          <div className="text-black w-full lg:w-5/12 space-y-2">
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
            <div className="color3-bg px-5 py-3">
              <p className="text-xl">WHAT WE DO</p>
              <p className="text-base">
                Our effective and holistic approach to fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStory;

import React from "react";
import SingleCourseImg from "../../assets/images/singlecourseintro.jpg";
import Wedding from "../../assets/images/wedding.jpg";

const Intro = () => {
  return (
    <div className="color1-bg text-white">
      <div className="w-10/12 m-auto py-28 flex flex-wrap md:flex-nowrap gap-10 items-center">
        <img src={SingleCourseImg} alt="" className="w-full md:w-5/12 rounded-lg" />
        <div>
          <p className="text-3xl sm:text-5xl font-bold">
            Fundamentals of DSLR ​Photography
          </p>
          <div className="flex gap-5 items-center mt-5 md:mt-20">
            <img src={Wedding} alt="" className="w-24 h-24 rounded-full" />
            <p className="text-2xl font-semibold">Photo Essentials x Justin Bridges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

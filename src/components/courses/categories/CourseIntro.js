import React from "react";
import StarIcon from "../../../assets/images/staricon.svg";
import Courseintro from "../../../assets/images/courseintro.jpg";
import Heart from "../../../assets/images/heart.svg";
import Instgram from "../../../assets/images/instagram.svg";
import Facebook from "../../../assets/images/facebook.svg";
import Youtube from "../../../assets/images/youtube.svg";

const CourseIntro = () => {
  return (
    <div className="py-20 color1-bg">
      <div className="w-10/12 m-auto">
        <div className="w-6/12 m-auto relative">
          <p className="text-3xl font-bold pt-2  text-white">lernerra</p>
          <img src={StarIcon} alt="" className="absolute top-1 -left-5" />
        </div>
        <div className="mt-10 flex gap-5 justify-between flex-wrap">
          <div className="w-full lg:w-6/12 relative">
            <img src={Courseintro} alt="" className="rounded-md" />
            <img src={Heart} alt="" className="absolute top-10 -right-8" />
          </div>
          <div className="w-full lg:w-5/12 m-auto">
            <p className="text-3xl lg:text-6xl text-white text-center lg:text-left">
              Let's make learning fun!
            </p>
            <div className="flex gap-2 md:gap-5 flex-wrap mt-8 justify-center lg:justify-start">
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  DEVELOPMENT
                </p>
              </div>
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  MARKETING&DESIGN
                </p>
              </div>
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  BUSINESS
                </p>
              </div>
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  ART&MUSIC
                </p>
              </div>
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  PRODUCTIVITY
                </p>
              </div>
              <div>
                <p className="bg-white text-xs rounded-full cursor-pointer w-40 py-3 text-center text-black">
                  HEALTH&FITNESS
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-10 mt-10">
              <img src={Instgram} alt="" className="cursor-pointer" />
              <img src={Youtube} alt="" className="cursor-pointer" />
              <img src={Facebook} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIntro;

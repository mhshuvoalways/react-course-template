import React from "react";
import Course from "../../../assets/images/course.jpg";

const UseFullLink = () => {
  return (
    <div className="color4-bg text-white">
      <div className="w-10/12 m-auto py-20">
        <p className="text-6xl font-bold text-center">Useful Links</p>
        <div className="flex gap-5 flex-wrap mt-10 justify-center">
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg1 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">
                UPCOMING EVENTS FOR OCTOBER
              </p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg2 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">SHORT COURSES</p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg3 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">BROWN BAGS</p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg4 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">FITNESS WORKSHOPS</p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg5 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">TEAM CELEBRATIONS</p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-10 items-center bg-white p-7 rounded-lg w-full lg:w-5/12">
            <img src={Course} alt="" className="usefulllinkimg6 w-20 h-20 md:w-32 md:h-32" />
            <div className="space-y-8 text-center lg:text-start">
              <p className="text-normal md:text-xl text-black font-bold">
                OTHER OFFICE ACTIVITIES
              </p>
              <p className="color-readmore-text font-bold text-normal md:text-xl cursor-pointer">
                READ MORE {">"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseFullLink;

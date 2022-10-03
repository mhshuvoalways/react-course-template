import React from "react";
import ReachoutImg from "../../assets/images/reachout.webp";

const Reachout = () => {
  return (
    <div className="color1-bg text-white flex flex-wrap md:flex-nowrap md:gap-10 justify-center">
      <div className="md:w-5/12 w-10/12 m-auto py-20">
        <div className="w-full md:w-9/12 space-y-10 md:space-y-20">
          <p className="font-bold text-4xl md:text-6xl">Reach Out</p>
          <p className="font-semibold text-3xl">
            Conference Secretariat 163 Woodlands Place Algies Bay, Rodney 0920
          </p>
          <div className="font-semibold text-xl md:text-3xl">
            <p>123-456-7890</p>
            <p>hello@reallygreatsite.com</p>
            <p>@reallygreatsite</p>
          </div>
          <p className="w-full md:w-72 pt-3 pb-2 font-bold text-base md:text-xl mt-5 px-5 lg:mt-24 color3-bg text-center rounded-full text-black cursor-pointer">
            RESERVE YOUR SEAT
          </p>
        </div>
      </div>
      <img src={ReachoutImg} alt="" className="w-96 md:w-5/12" />
    </div>
  );
};

export default Reachout;

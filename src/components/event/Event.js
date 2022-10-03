import React from "react";
import EventImg from "../../assets/images/event.jpg";

const Event = () => {
  return (
    <div className="color2-bg text-white">
      <div className="w-10/12 m-auto py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
          <p className="font-bold text-5xl xl:text-7xl w-11/12 md:w-7/12">
            The most awaited e-commerce event is back!
          </p>
          <p className="text-2xl w-11/12 md:w-5/12">
            Every year, thousands of marketing, sales, and web development
            professionals gather in and around Venston Bay to discuss the future
            of e-commerce.
          </p>
        </div>
        <img src={EventImg} alt="" className="mt-10 md:mt-20"/>
      </div>
    </div>
  );
};

export default Event;

import React from "react";
import SponsorImg from "../../assets/images/sponsor.jpg";

const Intro = () => {
  return (
    <div className="relative z-0  color2-bg text-white">
      <div className="flex flex-wrap justify-center md:justify-end">
        <img
          src={SponsorImg}
          alt=""
          className="md:w-9/12 md:absolute md:h-screen top-0 -left-48 w-full md:p-0 p-5"
        />
        <div className="w-full md:w-7/12 z-10 color2-bg h-full md:h-screen">
          <div className="w-10/12 m-auto py-20">
            <div className="w-full md:w-10/12 space-y-5 md:space-y-32">
              <p className="font-bold text-5xl xl:text-7xl">Our Sponsors</p>
              <p className="font-normal text-3xl">
                Sandrine Logistics Murrayfield School of Marketing Schuester
                Digital Media Group Blue Samurai Productions Berao Solutions,
                Inc. Golden Ore Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

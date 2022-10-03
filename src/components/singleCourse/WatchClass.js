import React from "react";
import WatchmoreImg from "../../assets/images/watchmore.jpg";

const Intro = () => {
  return (
    <div className="color3-bg text-black">
      <div className="w-10/12 m-auto py-20 flex flex-wrap lg:flex-nowrap gap-10">
        <div className="space-y-10">
          <p className="text-5xl font-bold">
            Watch this class and ​thousands more
          </p>
          <div className="flex flex-wrap sm:flex-nowrap justify-between gap-5 text-3xl opacity-80">
            <div>
              <p className="border-2 w-28 border-black mb-10"></p>
              <p>Get unlimited ​access to every ​class</p>
            </div>
            <div>
              <p className="border-2 w-28 border-black mb-10"></p>
              <p>Taught by ​industry leaders ​& working ​professionals</p>
            </div>
            <div>
              <p className="border-2 w-28 border-black mb-10"></p>
              <p>
                Topics include ​illustration, design, ​photography, and ​more
              </p>
            </div>
          </div>
        </div>
        <img
          src={WatchmoreImg}
          alt=""
          className="rounded-lg md:w-6/12 m-auto lg:w-4/12 w-full"
        />
      </div>
    </div>
  );
};

export default Intro;

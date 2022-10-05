import React from "react";

const Footer = () => {
  return (
    <div className="color1-bg text-white">
      <div className="w-10/12 m-auto py-20 flex justify-between gap-10 flex-wrap">
        <div>
          <p className="sm:text-3xl text-xl font-semibold mb-5">ACADEMY</p>
          <ul className="sm:text-2xl text-lg space-y-2">
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Success Stories</li>
            <li className="cursor-pointer">Get the app</li>
            <li className="cursor-pointer">Community Forum</li>
            <li className="cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div>
          <p className="sm:text-3xl text-xl font-semibold mb-5">BUSINESS</p>
          <ul className="sm:text-2xl text-lg space-y-2">
            <li className="cursor-pointer">For business</li>
            <li className="cursor-pointer">Affiliates</li>
            <li className="cursor-pointer">Media Kit</li>
            <li className="cursor-pointer">Get the app</li>
            <li className="cursor-pointer">Partnership</li>
          </ul>
        </div>
        <div>
          <p className="sm:text-3xl text-xl font-semibold mb-5">CONTENT</p>
          <ul className="sm:text-2xl text-lg space-y-2">
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="w-72">
          <p className="sm:text-3xl text-lg font-semibold mb-5">
            Sign up for the latest  ​news:
          </p>
          <p className="text-xl sm:text-2xl">
            Get monthly community ​updates, learning + career ​tips, and much
            more!
          </p>
          <p className="w-full md:w-72 pt-3 pb-2 font-bold text-base md:text-xl px-5 mt-5 color3-bg text-center rounded-full text-black cursor-pointer">
            SU​BSCRIBE
          </p>
        </div>
      </div>
      <div className="pb-5 text-center">
        <a
          href="https://mlhnshuvo.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          All right reserved MH Shuvo
        </a>
      </div>
    </div>
  );
};

export default Footer;

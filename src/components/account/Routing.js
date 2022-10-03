import React from "react";
import User from "../../assets/images/user.jpg";

const Routing = ({ handler }) => {
  return (
    <div className="border">
      <div className="p-10 w-52 m-auto">
        <img src={User} alt="" className="rounded-full" />
        <p className="text-xl text-center">John Jena</p>
      </div>
      <div className="mt-5">
        <div
          className="flex items-center gap-2 border px-5 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handler("password")}
        >
          <i class="fa-solid fa-key"></i>
          <p>PR​OFILE SETTING</p>
        </div>
        <div
          className="flex items-center gap-2 border px-5 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handler("course")}
        >
          <i class="fa-solid fa-key"></i>
          <p>MY COURSES</p>
        </div>
        <div
          className="flex items-center gap-2 border px-5 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handler("billing")}
        >
          <i class="fa-solid fa-key"></i>
          <p>BILLING</p>
        </div>
        <div
          className="flex items-center gap-2 border px-5 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handler("payment")}
        >
          <i class="fa-solid fa-key"></i>
          <p>PEYMENT METHOD</p>
        </div>
      </div>
    </div>
  );
};

export default Routing;

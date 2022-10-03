import React from "react";
import IntroImg from "../../../assets/images/employee.webp";

const Employee = () => {
  return (
    <div className="py-20 color5-bg text-center">
      <div className="w-10/12 m-auto flex gap-10 items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-4/12">
          <p className="text-3xl lg:text-5xl font-bold opacity-70">
            What kind of employee are you?
          </p>
          <p className="font-bold text-xl mt-5 color3-bg py-2 rounded-full text-black cursor-pointer w-full lg:w-9/12">
            SIGN UP NOW
          </p>
        </div>
        <img src={IntroImg} alt="" className="w-full lg:w-4/12 employeeimg" />
        <div className="space-y-5 lg:space-y-10 w-full lg:w-4/12">
          <p className="text-2xl font-semibold">TAKE THIS QUIZ TO FIND OUT!</p>
          <p className="text-2xl">
            Are you the social butterfly or the inspiring motivator? Get to know
            yourself and your co-workers by answering just a few questions.
          </p>
          <p className="text-2xl">
            Click here to take this fun workplace personality quiz now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employee;

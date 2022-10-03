import React from "react";
import WatchmoreImg from "../../assets/images/teacher.jpg";

const MeetTeacher = () => {
  return (
    <div className="w-10/12 m-auto py-12 flex flex-wrap md:flex-nowrap gap-5 justify-center">
      <div className="w-full md:w-6/12 text-center">
        <p className="text-5xl mb-5">Meet Your Teacher</p>
        <img src={WatchmoreImg} alt="" className="w-7/12 md:w-6/12 m-auto" />
        <div className="space-y-10 mt-5">
          <div className="space-y-3">
            <p className="text-2xl font-bold">{"<KEITH SHANNONS>"}</p>
            <p className="text-2xl">Software Engineer </p>
          </div>
          <p className="bg-black px-4 py-2 w-full sm:w-5/12 text-white m-auto">
            Email me
          </p>
          <div className="space-x-10">
            <i className="fa-brands cursor-pointer text-4xl fa-instagram"></i>
            <i className="fa-brands cursor-pointer text-4xl fa-twitter"></i>
            <i className="fa-brands cursor-pointer text-4xl fa-facebook"></i>
            <i className="fa-brands cursor-pointer text-4xl fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 text-center md:m-auto mt-10">
        <div className="md:space-y-10 space-y-4">
          <p className="text-3xl md:text-6xl font-semibold">{"</About Me>"}</p>
          <p className="text-xl">
            I am a diligent senior software engineer with 10 years of experience
            in business applications. I am eager to join a tech company that
            builds out-of-the-box solutions for regional clients. I am skilled
            in developing plans, managing projects, and user documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTeacher;

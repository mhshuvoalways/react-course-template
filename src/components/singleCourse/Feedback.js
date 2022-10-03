import React from "react";
import ReactStars from "react-rating-stars-component";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const Feedback = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-10/12 m-auto py-20">
        <p className="text-3xl sm:text-5xl font-bold text-left">Students feedback</p>
        <div className="mt-10 text-yellow-600 flex flex-wrap items-center lg:flex-nowrap sm:justify-between">
          <div className="w-96">
            <p className="font-bold rating-size">4.7</p>
            <ReactStars
              {...{
                size: 40,
                value: 4.5,
                count: 5,
                activeColor: "#ca8a04",
                a11y: true,
                isHalf: true,
                edit: false,
              }}
            />
            <p className="font-bold text-3xl">Course Rating</p>
          </div>
          <div className="w-full lg:mt-0 mt-10">
            <div className="flex items-center justify-between gap-5">
              <div className="w-4/12 sm:w-7/12">
                <ProgressBar
                  percent={75}
                  filledBackground="#808080"
                  className="RSPBprogressBar"
                />
              </div>
              <div className="flex items-center justify-between gap-3 md:review-star review-star-2">
                <ReactStars
                  {...{
                    size: 30,
                    value: 4.5,
                    count: 5,
                    activeColor: "#ca8a04",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="text-2xl text-blue-700">67%</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="w-4/12 sm:w-7/12">
                <ProgressBar
                  percent={50}
                  filledBackground="#808080"
                  className="RSPBprogressBar"
                />
              </div>
              <div className="flex items-center justify-between gap-3 md:review-star review-star-2">
                <ReactStars
                  {...{
                    size: 30,
                    value: 4,
                    count: 5,
                    activeColor: "#ca8a04",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="text-2xl text-blue-700">37%</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="w-4/12 sm:w-7/12">
                <ProgressBar
                  percent={20}
                  filledBackground="#808080"
                  className="RSPBprogressBar"
                />
              </div>
              <div className="flex items-center justify-between gap-3 md:review-star review-star-2">
                <ReactStars
                  {...{
                    size: 30,
                    value: 3,
                    count: 5,
                    activeColor: "#ca8a04",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="text-2xl text-blue-700">27%</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="w-4/12 sm:w-7/12">
                <ProgressBar
                  percent={15}
                  filledBackground="#808080"
                  className="RSPBprogressBar"
                />
              </div>
              <div className="flex items-center justify-between gap-3 md:review-star review-star-2">
                <ReactStars
                  {...{
                    size: 30,
                    value: 2,
                    count: 5,
                    activeColor: "#ca8a04",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="text-2xl text-blue-700">17%</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="w-4/12 sm:w-7/12">
                <ProgressBar
                  percent={10}
                  filledBackground="#808080"
                  className="RSPBprogressBar"
                />
              </div>
              <div className="flex items-center justify-between gap-3 md:review-star review-star-2">
                <ReactStars
                  {...{
                    size: 30,
                    value: 1,
                    count: 5,
                    activeColor: "#ca8a04",
                    a11y: true,
                    isHalf: true,
                    edit: false,
                  }}
                />
                <p className="text-2xl text-blue-700">7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

import React from "react";
import Blog1 from "../../assets/images/blog1.jpg";
import Blog2 from "../../assets/images/blog2.jpg";

const AllBlogs = () => {
  return (
    <div className="w-10/12 m-auto py-20">
      <p className="text-5xl text-center md:text-left">Our Blogs</p>
      <div className="flex gap-3 justify-center md:justify-between flex-wrap mt-5">
        <div className="border p-5 w-72">
          <img src={Blog1} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
        <div className="border p-5 w-72">
          <img src={Blog2} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
        <div className="border p-5 w-72">
          <img src={Blog1} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
        <div className="border p-5 w-72">
          <img src={Blog2} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
        <div className="border p-5 w-72">
          <img src={Blog1} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
        <div className="border p-5 w-72">
          <img src={Blog2} alt="" className="w-96" />
          <p className="text-xl font-semibold mt-3">
            The World on a Shoestring Budget
          </p>
          <p className="text-base mt-3">
            Feature your best travel posts so prospective media partners have an
            idea of the kind of work you produce.
          </p>
          <p className="text-xl color-readmore text-white py-3 px-5 mt-5 cursor-pointer w-full md:w-9/12 text-center">
            READ MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

import React from "react";

const Pagination = () => {
  return (
    <div className="w-10/12 m-auto py-10 mb-10">
      <div className="text-3xl gap-5 flex items-center justify-center flex-wrap">
        <p className="cursor-pointer">1</p>
        <p className="cursor-pointer">2</p>
        <p className="cursor-pointer">3</p>
        <p className="cursor-pointer">4</p>
        <p className="cursor-pointer">…</p>
        <p className="cursor-pointer">15</p>
        <p className="cursor-pointer">Next</p>
        <p className="cursor-pointer">»</p>
      </div>
    </div>
  );
};

export default Pagination;

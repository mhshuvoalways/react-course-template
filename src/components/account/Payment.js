import React from "react";

const Payment = ({ addCardHandler }) => {
  return (
    <div className="w-full md:w-9/12 m-auto p-10 space-y-10">
      <p
        className="w-full lg:w-8/12 m-auto pt-3 pb-2 font-bold text-xs md:text-xl px-5 mt-5 color3-bg text-center rounded-full text-black cursor-pointer"
        onClick={addCardHandler}
      >
        + ADD NEW CARD
      </p>
    </div>
  );
};

export default Payment;

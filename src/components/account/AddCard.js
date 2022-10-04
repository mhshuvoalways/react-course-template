import React from "react";
import Visa from "../../assets/images/visa.svg";
import Master from "../../assets/images/master.svg";
import Apple from "../../assets/images/apple.svg";

const AddCard = ({ modalHandler }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <p className="text-2xl">ADD NEW CARD</p>
        <i className="fas fa-times cursor-pointer" onClick={modalHandler} />
      </div>
      <div>
        <div className="flex items-center justify-end gap-5">
          <img src={Visa} alt="" className="" />
          <img src={Master} alt="" className="" />
          <img src={Apple} alt="" className="" />
        </div>
        <div>
          <div className="mt-5">
            <label className="text-xl">Card Number:</label>
          </div>
          <input
            type="number"
            className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm mt-1"
            placeholder="Card number"
          />
        </div>
        <div className="mt-5 flex gap-5 flex-wrap sm:flex-nowrap">
          <div className="sm:w-6/12 w-full">
            <label className="text-xl">Card Expiration Date:</label>
            <input
              type="date"
              className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm mt-1"
              placeholder="Card number"
            />
          </div>
          <div className="sm:w-6/12 w-full">
            <label className="text-xl">CVC:</label>
            <input
              type="text"
              className="appearance text-gray-600 focus:ring focus:outline-0 rounded border p-2 w-full shadow-sm mt-1"
              placeholder="CVC"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-10 flex-wrap sm:flex-nowrap">
        <p
          className="font-bold text-xl w-full bg-white px-5 py-2 text-center rounded-full text-black cursor-pointer"
          onClick={modalHandler}
        >
          CANCEL
        </p>
        <p
          className="font-bold text-xl w-full color3-bg px-5 py-2 text-center rounded-full text-black cursor-pointer"
          onClick={modalHandler}
        >
          ADD CARD
        </p>
      </div>
    </div>
  );
};

export default AddCard;

import React from "react";

const Modal = ({ children, modal, bgColor }) => {
  return (
    <div className="flex items-center">
      <div
        className={`${modal} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 p-5 m-auto`}
      >
        <div
          className={
            bgColor
              ? `${bgColor} rounded-md border text-white`
              : "bg-green-100 rounded-md border"
          }
        >
          {children}
        </div>
      </div>
      <div className="left-0 top-0 bottom-0 right-0 fixed bg-black opacity-90"></div>
    </div>
  );
};

export default Modal;

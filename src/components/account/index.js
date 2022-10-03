import React, { useState } from "react";
import Routing from "./Routing";
import Password from "./Password";
import Course from "./Course";
import Billing from "./Billing";
import Payment from "./Payment";
import AddCard from "./AddCard";
import Modal from "../modal/Modal";

const Index = () => {
  const [accout, setAccout] = useState("password");
  const [modal, setModal] = useState(false);

  const handler = (value) => {
    setAccout(value);
  };

  const addCardHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="flex justify-center w-10/12 m-auto bg-white shadow flex-wrap md:flex-nowrap">
        <Routing handler={handler} />
        {accout === "password" && <Password />}
        {accout === "course" && <Course />}
        {accout === "billing" && <Billing />}
        {accout === "payment" && <Payment addCardHandler={addCardHandler} />}
        {modal && (
          <Modal modal="lg:w-6/12 md:w-10/12 w-full" bgColor="color1-bg">
            <AddCard modalHandler={addCardHandler} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Index;

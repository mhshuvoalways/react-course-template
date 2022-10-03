import React, { useState } from "react";
import Navigation from "./Navigation";
import MegaMenu from "./MegaMenu";
import Modal from "../modal/Modal";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const Index = () => {
  const [megaMenu, setMegaMenu] = useState(false);
  const [modal, setModal] = useState("");

  const modalHandler = (value) => {
    setModal(value);
  };

  const megaMenuHandler = () => {
    setMegaMenu(!megaMenu);
  };

  return (
    <div>
      <Navigation
        megaMenuHandler={megaMenuHandler}
        modalHandler={modalHandler}
      />
      {megaMenu && <MegaMenu />}
      {modal === "login" && (
        <Modal modal="lg:w-8/12 md:w-11/12">
          <Login modalHandler={modalHandler} />
        </Modal>
      )}
      {modal === "signup" && (
        <Modal modal="lg:w-8/12 md:w-11/12">
          <SignUp modalHandler={modalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Index;

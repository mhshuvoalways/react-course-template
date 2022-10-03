import React from "react";
import Header from "../components/header";
import Intro from "../components/Intro/Intro";
import Event from "../components/event/Event";
import Reachout from "../components/Reachout/Reachout";
import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Event />
      <Reachout />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;

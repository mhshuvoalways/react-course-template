import React from "react";
import Header from "../components/header";
import PopularStory from "../components/popularStory/PopularStory";
import AllBlogs from "../components/allBlogs";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularStory />
      <AllBlogs />
      <Footer />
    </div>
  );
};

export default Home;

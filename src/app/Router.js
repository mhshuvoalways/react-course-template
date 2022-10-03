import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Course from "../pages/Course";
import SingleCourse from "../pages/SingleCourse";
import Blog from "../pages/Blog";
import Account from "../pages/Account";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Course />} />
        <Route path="courses/:id" element={<SingleCourse />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

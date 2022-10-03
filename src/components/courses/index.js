import React from "react";
import Categories from "./categories";
import UseFullLink from "./usefullLink/UseFullLink";
import Employee from "./employee/Employee";

const index = () => {
  return (
    <div>
      <Categories />
      <UseFullLink />
      <Employee />
    </div>
  );
};

export default index;

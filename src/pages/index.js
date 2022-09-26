import React from "react";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Bestsellers from "../components/Bestsellers/Bestsellers";

const Main = () => {
  return (
    <>
      <Features />
      <Categories />
      <Bestsellers />
    </>
  );
};

export default React.memo(Main);

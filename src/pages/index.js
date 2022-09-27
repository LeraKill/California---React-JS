import React from "react";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import Limited from "../components/Limited/Limited";

const Main = () => {
  return (
    <>
      <Features />
      <Categories />
      <Bestsellers />
      <Limited />
    </>
  );
};

export default React.memo(Main);

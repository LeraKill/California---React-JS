import React from "react";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import Limited from "../components/Limited/Limited";
import Ideas from "../components/Ideas/Ideas";

const Main = () => {
  return (
    <>
      <Features />
      <Categories />
      <Bestsellers />
      <Limited />
      <Ideas />
    </>
  );
};

export default React.memo(Main);

import React from "react";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import Limited from "../components/Limited/Limited";
import Ideas from "../components/Ideas/Ideas";
import Search from "../components/Search/Search";
import Subscribe from "../components/Subscribe/Subscribe";

const MainPage = () => {
  return (
    <>
      <Features />
      <Categories />
      <Bestsellers />
      <Limited />
      <Ideas />
      <Search />
      <Subscribe />
    </>
  );
};

export default React.memo(MainPage);

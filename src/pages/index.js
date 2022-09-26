import React from "react";
import Features from "../components/Features/Features";
import Categories from "../components/Categories/Categories";

const Main = () => {
  return (
    <>
      <Features />
      <Categories />
    </>
  );
};

export default React.memo(Main);

import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import { useProducts } from "./useProducts";
import ProductRow from "../Any/ProductRow/ProductRow";

const Products = () => {
  const { productsArr } = useProducts();
  return (
    <section className="page__products products">
      <div className=" products__container __container">
        <BlockHeader
          title="All items of California"
          text="Always the best deals."
        />
        <ProductRow productArr={productsArr} />
      </div>
    </section>
  );
};

export default Products;

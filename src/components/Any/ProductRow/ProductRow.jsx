import React from "react";
import "./style.scss";
import ProductItem from "./ProductItem/ProductItem";

const ProductRow = ({ productArr }) => {
  return (
    <div className="product-row__body">
      {productArr &&
        productArr.map((item, index) => (
          <ProductItem
            key={`${item.title}_${index}`}
            title={item.title}
            text={item.text}
            price={item.price}
            img={item.img}
          />
        ))}
    </div>
  );
};

export default ProductRow;

import React from "react";
import "./style.scss";

const BestsellerItem = ({ title, text, price, img }) => {
  return (
    <div className="bestsellers__item item-bestsellers">
      <a href="/" className="item-bestsellers__link">
        <div className="item-bestsellers__img _ibg">
          <img src={img} alt={title} />
        </div>
        <div className="item-bestsellers__info">
          <h3 className="item-bestsellers__title">{title}</h3>
          <p className="item-bestsellers__text">{text}</p>
          <p className="item-bestsellers__price">{price}</p>
        </div>
      </a>
    </div>
  );
};

export default BestsellerItem;

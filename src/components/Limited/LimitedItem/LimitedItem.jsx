import React from "react";
import "./style.scss";

const LimitedItem = ({ subtitle, title, button, img }) => {
  return (
    <div className="limited__item item-limited">
      <div className="item-limited__info">
        <p className="item-limited__subtitle">{subtitle}</p>
        <h4 className="item-limited__title">{title}</h4>
        <a href="/" className="item-limited__link">
          {button}
        </a>
      </div>
      <div className="item-limited__img _ibg">
        <img src={img} alt="Watches" />
      </div>
    </div>
  );
};

export default LimitedItem;

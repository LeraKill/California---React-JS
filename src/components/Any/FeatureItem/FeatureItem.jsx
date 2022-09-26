import React from "react";
import "./style.scss";

//title, text = "", button = ""

const FeatureItem = ({ title, text = "", button = "", img }) => {
  return (
    <div className="feature__body">
      <div className="feature__img _ibg">
        <img src={img} alt="feature background" />
      </div>
      <div className="feature__content">
        <h3 className="feature__title">{title}</h3>
        {text && <p className="feature__text">{text}</p>}
        {button && (
          <a href="/" className="feature__link">
            {button}
          </a>
        )}
      </div>
    </div>
  );
};

export default FeatureItem;

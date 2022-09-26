import React from "react";
import "./style.scss";

const BlockHeader = ({ title, text }) => {
  return (
    <div className="header__block block-header">
      <h3 className="block-header__title">{title}</h3>
      <p className="block-header__text">{text}</p>
    </div>
  );
};

export default BlockHeader;

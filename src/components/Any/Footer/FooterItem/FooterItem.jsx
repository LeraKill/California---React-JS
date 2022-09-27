import React from "react";
import "./style.scss";

const FooterItem = ({ title, list }) => {
  return (
    <div className="top-footer__item top-footer-item">
      <a href="/" className="top-footer-item__title">
        {title}
      </a>
      <ul className="top-footer-item__list">
        {list &&
          list.map((item, index) => (
            <li key={index} className="top-footer-item__item">
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterItem;

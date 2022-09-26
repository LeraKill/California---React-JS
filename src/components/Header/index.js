import React from "react";
import "./style.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container __container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/">
              <img src="logo.svg" alt="california" />
            </a>
          </div>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

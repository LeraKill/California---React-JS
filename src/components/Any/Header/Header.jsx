import React from "react";
import "./style.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Logo from "../../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container __container">
        <div className="header__logo">
          <a href="/">
            <img src={Logo} alt="california" />
          </a>
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;

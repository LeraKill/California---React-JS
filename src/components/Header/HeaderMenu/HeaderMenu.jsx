import React from "react";
import "./style.scss";
import { useHeaderMenu } from "./useHeaderMenu";

const HeaderMenu = () => {
  const { menuArr, openMenu, closeMenu, handleOpenMenu } = useHeaderMenu();

  return (
    <>
      <nav className="header__menu menu">
        <div
          className={`menu__burger ${openMenu ? "_active" : ""}`}
          onClick={handleOpenMenu}
        >
          <span />
        </div>
        <div className={`menu__body ${openMenu ? "_active" : ""}`}>
          <ul className="menu__list">
            {menuArr &&
              menuArr.map((item, index) => (
                <li key={index} className="menu__item">
                  <a href={item.href} onClick={closeMenu}>
                    {item.title}
                  </a>
                </li>
              ))}
            <div className="header__actions">
              <a href="/">
                <span className="icon icon-search" />
              </a>
              <a href="/">
                {" "}
                <span className="icon icon-cart" />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;

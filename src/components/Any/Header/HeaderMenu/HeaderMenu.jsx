import React from "react";
import "./style.scss";
import { useHeaderMenu } from "./useHeaderMenu";
import { NavLink, Link } from "react-router-dom";

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
                <li key={`${item.title}_${index}`} className="menu__item">
                  <NavLink to={item.href} onClick={closeMenu}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
          </ul>
          <div className="menu__actions">
            <Link to="/">
              <span className="icon icon-search" />
            </Link>
            <Link to="/">
              <span className="icon icon-cart" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;

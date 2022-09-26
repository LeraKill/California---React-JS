import React, { useState } from "react";
import "../style.scss";
import { menuArr } from "../useHeader";

const HeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <nav className="header__menu menu">
        <ul className="menu__list">
          {menuArr &&
            menuArr.map((item, index) => (
              <li key={index} className="menu__item">
                <a href={item.href} onClick={closeMenu}>
                  {item.title}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <div className="menu__burger">
        <span />
      </div>
    </>
  );
};

export default HeaderMenu;

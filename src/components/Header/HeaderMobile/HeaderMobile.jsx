import React, { useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const HeaderMobile = () => {
  const [isOpenBurger, setOpenBurger] = useState(false);

  const handleOpenBurger = () => {
    setOpenBurger((prevstate) => !prevstate);
    document.body.classList.toggle("__lock");
  };

  console.log(isOpenBurger);

  return (
    <>
      <HeaderMenu />
      <div className="header__burger">
        <span />
      </div>
    </>
  );
};

export default HeaderMobile;

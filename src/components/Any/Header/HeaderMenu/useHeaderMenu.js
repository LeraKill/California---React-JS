import { useState } from "react";

export const useHeaderMenu = () => {
  const menuArr = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "All products",
      href: "/cards",
    },
    {
      title: "Solutions",
      href: "/",
    },
    {
      title: "Support",
      href: "/",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return {
    openMenu,
    closeMenu,
    handleOpenMenu,
    menuArr,
  };
};

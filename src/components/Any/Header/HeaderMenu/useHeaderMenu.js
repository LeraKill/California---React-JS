import { useState } from "react";

export const useHeaderMenu = () => {
  const menuArr = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "All products",
      href: "/products",
    },
    {
      title: "Solutions",
      href: "/solutions",
    },
    {
      title: "Support",
      href: "/support",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    document.body.classList.toggle("__lock");
    setOpenMenu((prevState) => !prevState);
  };

  return {
    openMenu,
    closeMenu,
    handleOpenMenu,
    menuArr,
  };
};

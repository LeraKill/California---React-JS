import { useState } from "react";

export const useSearch = () => {
  const searchItemsArr = [
    "iPhone",
    "Charger",
    "Gift",
    "Google Pixel 3",
    "Keyboard",
    "13 Pro Max",
    "iPhone 12",
    "Laptop",
    "Mobile",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const [activeItems, setActiveItems] = useState([]);

  const getActiveItems = (newActiveItem) => {
    setActiveItems((activeItems) =>
      activeItems.includes(newActiveItem)
        ? activeItems.filter((item) => item !== newActiveItem)
        : [newActiveItem, ...activeItems]
    );
  };

  return {
    searchTerm,
    getSearchTerm,
    searchItemsArr,
    activeItems,
    getActiveItems,
  };
};

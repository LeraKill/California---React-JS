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

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return {
    searchTerm,
    getSearchTerm,
    searchItemsArr,
    activeItem,
    onSelectItem,
  };
};

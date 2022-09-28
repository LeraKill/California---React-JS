import React from "react";
import "./style.scss";
import { useSearch } from "./useSearch";

const Search = () => {
  const {
    searchItemsArr,
    searchTerm,
    getSearchTerm,
    activeItem,
    onSelectItem,
  } = useSearch();

  return (
    <section className="page__search search">
      <div className="search__container __container">
        <div className="search__block-header block-header ">
          <h3 className="block-header__title">Looking for anything else?</h3>
        </div>
        <div className="search__body">
          <input
            className="search__input"
            type="text"
            placeholder="Search keyword"
            onChange={getSearchTerm}
          />
          <ul className="search__items">
            {searchItemsArr &&
              searchItemsArr
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, index) => (
                  <li
                    key={`${val}_${index}`}
                    onClick={() => onSelectItem(index)}
                    className={`search__item ${
                      activeItem === index ? "search__item-chosen" : ""
                    }`}
                  >
                    {val}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Search;

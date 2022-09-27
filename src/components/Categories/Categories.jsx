import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import LaptopImg from "../../assets/images/categories/laptop.png";
import TabletImg from "../../assets/images/categories/tablet.png";
import PhoneImg from "../../assets/images/categories/phone.png";
import WatchesImg from "../../assets/images/categories/watches.png";

const Categories = () => {
  return (
    <section className="page__categories categories">
      <div className="categories__container __container">
        <BlockHeader
          title="Shop our latest offers and categories"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="categories__body">
          <div className="categories__left-part">
            <div className="categories__item categories__item-laptop">
              <a
                href="/"
                className="categories__item__link categories__item-laptop-link"
              >
                <div className="categories__item__img categories__item-laptop__img _ibg">
                  <img src={LaptopImg} alt="Laptop" />
                </div>
                <div className="categories__item__info categories__item-laptop__info">
                  <p className="categories__item-text categories__item-laptop__text">
                    Laptops
                  </p>
                  <h3 className="categories__item-title categories__item-laptop__title">
                    True Laptop Solution
                  </h3>
                </div>
              </a>
            </div>

            <div className="categories__item categories__item-watches">
              <a
                href="/"
                className="categories__item__link categories__item-watches-link"
              >
                <div className="categories__item__img categories__item-watches__img _ibg">
                  <img src={WatchesImg} alt="Watches" />
                </div>
                <div className="categories__item__info categories__item-watches__info">
                  <p className="categories__item-text categories__item-watches__text">
                    Watch
                  </p>
                  <h3 className="categories__item-title categories__item-watches__title">
                    Not just stylisht
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div className="categories__right-part">
            <div className="categories__item categories__item-phones">
              <a
                href="/"
                className="categories__item__link categories__item-phones-link"
              >
                <div className="categories__item__img categories__item-phones__img _ibg">
                  <img src={PhoneImg} alt="Phone" />
                </div>
                <div className="categories__item__info categories__item-phones__info">
                  <p className="categories__item-text categories__item-phones__text">
                    Phones
                  </p>
                  <h3 className="categories__item-title categories__item-phones__title">
                    Your day to day life
                  </h3>
                </div>
              </a>
            </div>

            <div className="categories__item categories__item-tablet">
              <a
                href="/"
                className="categories__item__link categories__item-tablet-link"
              >
                <div className="categories__item__img categories__item-tablet__img _ibg">
                  <img src={TabletImg} alt="Tablet" />
                </div>
                <div className="categories__item__info categories__item-tablet__info">
                  <p className="categories__item-text categories__item-tablet__text">
                    Tablet
                  </p>
                  <h3 className="categories__item-title categories__item-tablet__title">
                    Empower your work
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

import React from "react";
import "./style.scss";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
  const allProductsArr = [
    { text: "Phones", href: "/" },
    { text: "Watch", href: "/" },
    { text: "Tablet", href: "/" },
    { text: "Laptops", href: "/" },
  ];
  const companyArr = [
    { text: "About", href: "/about" },
    { text: "Support", href: "/" },
  ];
  const supportArr = [
    { text: "Style Guide", href: "/" },
    { text: "Licensing", href: "/" },
    { text: "Change Log", href: "/" },
    { text: "Contact", href: "/" },
  ];

  const socialArr = [
    { text: "Instagram", href: "/" },
    { text: "Facebook", href: "/" },
    { text: "LinkedIn", href: "/" },
    { text: "Youtube", href: "/" },
  ];
  return (
    <footer className="footer">
      <div className="footer__container __container">
        <div className="footer__content">
          <div className="footer__top top-footer">
            <div className="top-footer__logo">
              <div className="top-footer__img _ibg">
                <img src="logo.svg" alt="California" />
              </div>
              <p className="top-footer__text">
                Sign up for texts to be notified about our best offers on the
                perfect gifts.
              </p>
            </div>
            <div className="top-footer__menu">
              <FooterItem title="All products" list={allProductsArr} />
              <FooterItem title="Company" list={companyArr} />
              <FooterItem title="Support" list={supportArr} />
              <FooterItem title="Follow us" list={socialArr} />
            </div>
          </div>
          <div className="footer__bottom bottom-footer">
            <div className="bottom-footer__item">
              <span className="bottom-footer__key">Made By:</span>
              <a href="/" className="bottom-footer__value">
                Azwedo
                <span className="icon-arrow" />
              </a>
            </div>
            <div className="bottom-footer__item">
              <span className="bottom-footer__key">Powered by:</span>
              <a href="/" className="bottom-footer__value">
                Webflow
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

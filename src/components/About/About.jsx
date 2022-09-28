import React from "react";
import "./style.scss";
import FeatureItem from "../Any/FeatureItem/FeatureItem";
import AboutImg from "../../assets/images/about/about.png";
import AboutMap from "./AboutMap/AboutMap";

const About = () => {
  return (
    <section className="page__about about">
      <div className="about__container __container">
        <FeatureItem
          title="We offer the best products at the best prices"
          img={AboutImg}
        />
        <div className="about__content">
          <div className="about__info">
            <h3 className="about__title">About us</h3>
            <div className="about__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="about__contacts">
            <div className="about__address">
              6 Cedar Rd. Moreno Valley, CA 92553
            </div>
            <div className="about__email">
              <a href="mailto:info@californiastore.com">
                info@californiastore.com
              </a>
            </div>
          </div>
        </div>
        <AboutMap />
      </div>
    </section>
  );
};

export default About;

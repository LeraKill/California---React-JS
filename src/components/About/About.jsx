import React from "react";
import "./style.scss";
import FeatureItem from "../Any/FeatureItem/FeatureItem";
import AboutImg from "../../assets/images/about/about.png";

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
        <div className="about__map">
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992475.578733176!2d-117.844589498679!3d34.055559732843804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca79ab6906791%3A0x4f1d4890ceec6a18!2zQ2VkYXIgQ3QsIE1vcmVubyBWYWxsZXksIENBIDkyNTU1LCDQodCo0JA!5e0!3m2!1sru!2sge!4v1664374687264!5m2!1sru!2sge"
            }
            width={"100%"}
            height={311}
            style={{ border: 0 }}
            allowFullScreen={""}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./style.scss";
import FeatureItem from "../Any/FeatureItem/FeatureItem";
import FeatureImgOne from "../../assets/images/feature-one.png";

const Features = () => {
  return (
    <section class="page__features features">
      <div className="features__container __container">
        <FeatureItem
          title="The new phones are here take a look."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis."
          button="Explore"
          img={FeatureImgOne}
        ></FeatureItem>
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import "./style.scss";
import FeaturesSwiper from "./FeaturesSwiper/FeaturesSwiper";

const Features = () => {
  return (
    <section class="page__features features">
      <div className="features__container __container">
        <FeaturesSwiper />
      </div>
    </section>
  );
};

export default Features;

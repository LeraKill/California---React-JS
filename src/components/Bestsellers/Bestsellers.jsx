import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import { useBestsellers } from "./useBestsellers";
import BestsellerItem from "./BestsellerItem/BestsellerItem";

const Bestsellers = () => {
  const { bestsellersArr } = useBestsellers();
  return (
    <section className="page__bestsellers bestsellers">
      <div className="bestsellers__container __container">
        <BlockHeader
          title="Save on our most selled items."
          text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
        />
        <div className="bestsellers__body">
          {bestsellersArr &&
            bestsellersArr.map((item) => (
              <BestsellerItem
                title={item.title}
                text={item.text}
                price={item.price}
                img={item.img}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;

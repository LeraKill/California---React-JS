import React from "react";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import { useBestsellers } from "./useBestsellers";
import ProductRow from "../Any/ProductRow/ProductRow";

const Bestsellers = () => {
  const { bestsellersArr } = useBestsellers();
  return (
    <section className="page__bestsellers bestsellers">
      <div className="bestsellers__container __container">
        <BlockHeader
          title="Save on our most selled items."
          text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
        />
        <ProductRow productArr={bestsellersArr} />
      </div>
    </section>
  );
};

export default Bestsellers;

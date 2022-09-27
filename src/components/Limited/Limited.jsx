import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";

const Limited = () => {
  return (
    <section className="page__limited limited">
      <div className="limited__container __container">
        <BlockHeader
          title="See the best around here"
          text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
        />
      </div>
    </section>
  );
};

export default Limited;

import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import LimitedItem from "./LimitedItem/LimitedItem";
import { useLimited } from "./useLimited";

const Limited = () => {
  const { limitedArr } = useLimited();
  return (
    <section className="page__limited limited">
      <div className="limited__container __container">
        <BlockHeader
          title="See the best around here"
          text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
        />
        <div className="limited__body">
          {limitedArr &&
            limitedArr.map((item, index) => (
              <LimitedItem
                key={index}
                subtitle={item.subtitle}
                title={item.title}
                button={item.button}
                img={item.img}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Limited;

import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import IdeasImg from "../../assets/images/ideas/ideas.png";

const Ideas = () => {
  return (
    <section className="page__ideas ideas">
      <div className="ideas__container __container">
        <BlockHeader
          title="Ideas have a place here"
          text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
        />
        <div className="ideas__body">
          <div className="ideas__img _ibg">
            <img src={IdeasImg} alt="Ideas"></img>
          </div>
          <div className="ideas__content">
            <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
            <p>Road Design Handbook For The International Road... </p>
            <p>The Best Kept Secrets About Creative People</p>
            <p> We Make It Easy To Find The Great Design Talent, Easier...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;

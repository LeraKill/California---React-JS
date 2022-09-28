import React from "react";
import "./style.scss";
import BlockHeader from "../Any/BlockHeader/BlockHeader";
import SubscribeImg from "../../assets/images/subscribe/phones.png";

const Subscribe = () => {
  return (
    <section className="page__subscribe subscribe">
      <div className="subscribe__container">
        <BlockHeader
          title="Never miss a thing"
          text="Sign up for texts to be notified about our best offers on the perfect gifts."
        />
        <div className="subscribe__content">
          <div className="subscribe__img _ibg">
            <img src={SubscribeImg} alt="Never miss a thing" />
          </div>
          <form className="subscribe__form" method="post">
            <input type="text" name="email" placeholder="Your email" />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(123);
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

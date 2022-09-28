import React from "react";
import "../style.scss";

const AboutMap = () => {
  return (
    <div className="about__map">
      <iframe
        title={"map"}
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
  );
};

export default AboutMap;

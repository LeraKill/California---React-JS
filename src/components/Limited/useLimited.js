import WatchesImg from "../../assets/images/limited/watches.png";
import PhonesImg from "../../assets/images/limited/phones.png";
import LaptopImg from "../../assets/images/limited/laptop.png";

export const useLimited = () => {
  const limitedArr = [
    {
      subtitle: "Smart light bulb pack",
      title: "Latest and gratest",
      button: "Explore",
      img: WatchesImg,
    },
    {
      subtitle: "Smart light bulb pack",
      title: "Best selling",
      button: "Explore",
      img: PhonesImg,
    },
    {
      subtitle: "Smart light bulb pack",
      title: "Every product",
      button: "Explore",
      img: LaptopImg,
    },
  ];

  return { limitedArr };
};

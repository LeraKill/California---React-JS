import FeatureImgOne from "../../../assets/images/features/feature-one.png";
import FeatureImgTwo from "../../../assets/images/features/feature-two.png";
import FeatureImgThree from "../../../assets/images/features/feature-three.png";

export const useFeatureSwiper = () => {
  const featureSwiperArr = [
    {
      title: "The new phones are here take a look.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.",
      button: "Explore",
      img: FeatureImgOne,
    },
    {
      title: "We offer the best products at the best prices",
      text: "",
      button: "Explore",
      img: FeatureImgTwo,
    },
    {
      title: "Neque porro quisquam est qui dolorem ipsum",
      text: "",
      button: "Explore",
      img: FeatureImgThree,
    },
  ];

  return { featureSwiperArr };
};

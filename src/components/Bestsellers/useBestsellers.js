import MacbookImg from "../../assets/images/bestsellers/macbook.png";
import WatchesImg from "../../assets/images/bestsellers/watches.png";
import Macbook2Img from "../../assets/images/bestsellers/macbook2.png";
import IpadImg from "../../assets/images/bestsellers/ipad.png";

export const useBestsellers = () => {
  const bestsellersArr = [
    {
      title: "MacBook Pro 13",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      price: "$ 1,200.00 USD",
      img: MacbookImg,
    },
    {
      title: "Smart Galaxy Watch 3",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      price: "$ 199.00 USD",
      img: WatchesImg,
    },
    {
      title: "MacBook Air M1",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      price: "$ 1,009.00 USD",
      img: Macbook2Img,
    },
    {
      title: "iPad",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      price: "$ 610.00 USD",
      img: IpadImg,
    },
  ];

  return {
    bestsellersArr,
  };
};

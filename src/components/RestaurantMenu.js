import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
  const {itemCard} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        <li>{}</li>
        <li>Jalebi</li>
        <li>Kachori</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

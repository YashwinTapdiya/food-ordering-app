import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  console.log(
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  );
  const { itemCard } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="text-center">
      <h1 className="my-6 text-2xl font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
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

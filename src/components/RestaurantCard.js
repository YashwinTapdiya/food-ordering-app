import { CON_URL } from "../utils/constants";
const RestaurantCart = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-log"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCart;

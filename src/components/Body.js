import RestaurantCart from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super Powerful variable

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  //Noraml JS Varialbe

  //takes a call back function and dependency array as arguments
  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.8542626&lng=77.8880002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
    
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(listOfRestaurants.length === 0){
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating>4.2
            );
            setlistOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => {
          return (
            <RestaurantCart key={resturant?.info?.id} resData={resturant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCart from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  //Local State Variable - Super Powerful variable

  const [listofRest1, setlistofRest1] = useState([]);
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
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);
    setlistofRest1(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listofRest1.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistofRest1(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRest1.map((resturant) => {
          return <RestaurantCart key={resturant?.info?.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;

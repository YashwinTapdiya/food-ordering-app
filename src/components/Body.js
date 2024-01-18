import RestaurantCart, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCart);

  //console.log(listOfRestaurants);
  //takes a call back function and dependency array as arguments
  useEffect(() => {
    //console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="p-4 m-4 search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              data-testid="searchInput"
              placeholder="Search a restaurant you want..."
              className="px-4 py-2 border-0 border-transparent shadow-md font-medium bg-gray-100 rounded-md focus:border-0 focus:outline-0 w-[300px] placeholder:font-medium focus:border-b-2 focus:border-green-500"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-4 py-2 m-4 bg-green-100 rounded-lg shadow-md hover:bg-green-300 duration-[.3s] font-medium"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurant);
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center p-4 m-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 shadow-md hover:bg-gray-200 duration-[.3s] rounded-lg font-medium"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <label>User Name: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((resturant) => {
          return (
            <Link
              key={resturant?.info?.id}
              to={"/restaurants/" + resturant?.info?.id}
            >
              {resturant.info.aggregatedDiscountInfoV3.discountTag ===
              undefined ? (
                <RestaurantCart resData={resturant} />
              ) : (
                <RestaurantCardDiscount resData={resturant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCart from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCart resData={resList[0]} />
          <RestaurantCart resData={resList[1]} />
          <RestaurantCart resData={resList[2]} />
          <RestaurantCart resData={resList[3]} />
          <RestaurantCart resData={resList[4]} />
          <RestaurantCart resData={resList[5]} />
          <RestaurantCart resData={resList[6]} />
          <RestaurantCart resData={resList[7]} />
          <RestaurantCart resData={resList[8]} />
          <RestaurantCart resData={resList[9]} />
          <RestaurantCart resData={resList[10]} />
          <RestaurantCart resData={resList[11]} />
          <RestaurantCart resData={resList[12]} />
          <RestaurantCart resData={resList[13]} />
          <RestaurantCart resData={resList[14]} /> */}
        {resList.map((resturant) => {
          return <RestaurantCart key={resturant.data.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;

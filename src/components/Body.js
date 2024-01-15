import RestaurantCart from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable - Super Powerful variable

  const [listofRest1,setlistofRest1] = useState(resList);
  //Noraml JS Varialbe
  let listofRest = [
    {
      data: {
        id: "121603",
        name: "Kannur Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        avgRating: 4.5
      }
    },
    {
      data: {
        id: "424",
        name: "Sonu Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        avgRating: 4
      }
    },
    {
      data: {
        id: "434",
        name: "Monu Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        avgRating: 3.4
      }
    }
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered=listofRest1.filter((res)=> res.data.avgRating> 4.2 );
            setlistofRest1(filtered)
          }}

        >
          Top Rated Restaurants
        </button>
      </div>
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
        {listofRest1.map((resturant) => {
          return <RestaurantCart key={resturant.data.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;

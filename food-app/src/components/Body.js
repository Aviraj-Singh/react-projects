import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resObj);

  const clickHandler = () => {
    const filteredRestaurants = resObj.filter((res) => res.card.card.info.avgRating > 4.2);
    setRestaurants(filteredRestaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

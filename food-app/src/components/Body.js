import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMessage from "./OfflineMessage";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  const clickHandler = () => {
    const filteredRestaurants = restaurants.filter((res) => res.info.avgRating > 4.2);
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9629354&lng=77.7122996&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const listOfRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(listOfRestaurants);
    setFilteredRestaurants(listOfRestaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
    <OfflineMessage/>
  )};

  return restaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="search-btn"
            onClick={() => {
              const filteredRestaurants = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          if (restaurant?.info) {
            return (
              <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id} className="restaurant-link">
                <RestaurantCard
                  resData={restaurant.info}
                />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Body;

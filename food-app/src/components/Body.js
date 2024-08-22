import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  const clickHandler = () => {
    const filteredRestaurants = restaurants.filter((res) => res.info.avgRating > 4.2);
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9629354&lng=77.7122996&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const listOfRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(listOfRestaurants);
    setFilteredRestaurants(listOfRestaurants);
  }

  return restaurants.length===0 ? (<Shimmer/>):(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="search-btn"
          onClick={()=>{
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
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
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

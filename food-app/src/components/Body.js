import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMessage from "./OfflineMessage";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex items-center">
        <div className="p-5">
          <input type="text" className="m-2.5 h-7.5 border-slate-200 border-2 rounded-lg p-2 hover:border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="h-7.5 cursor-pointer bg-slate-50 border-2 rounded-lg p-2 hover:bg-slate-800 hover:text-white"
            onClick={() => {
              const filteredRestaurants = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
        </div>
        <button className="m-2.5 cursor-pointer h-7.5 bg-slate-800 text-white border-2 rounded-lg p-2 hover:bg-slate-200 hover:text-black" onClick={clickHandler}>Top Rated Restaurants</button>
      </div>
      {restaurants.length === 0 ? (<Shimmer />) : 
      (<div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          if (restaurant?.info) {
            return (
              <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id} className="no-underline">
                {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant.info}/> : <RestaurantCard resData={restaurant.info}/>}
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>)}
    </div>
  );
};

export default Body;

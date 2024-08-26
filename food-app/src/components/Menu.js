import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <div className="menu-header">
                <h1>{name}</h1>
                <strong>{avgRating} | {totalRatingsString} | {costForTwoMessage}</strong> <br />
                <em>{cuisines.join(', ')}</em> <br />
                <strong>Delivery Time: {sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</strong>
            </div>
            <div className="menu-card-container">
                {itemCards.map((item) => { 
                    const price = item?.card?.info?.defaultPrice 
                    ? item?.card?.info?.defaultPrice / 100 
                    : item?.card?.info?.finalPrice 
                    ? item?.card?.info?.finalPrice / 100 
                    : item?.card?.info?.price / 100;
                    return <div className="menu-cards" key={item?.card?.info?.id}>
                    <h3>{item?.card?.info?.name}</h3>
                    <p>{item?.card?.info?.category}</p>
                    <strong>Price For Two - Rs. {price}</strong>
                    </div> })}
            </div>
        </div>
    )
};

export default Menu;
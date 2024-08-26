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
        <div className="w-[95%">
            <div className="mt-5 mb-5 mx-auto text-center w-64 border border-black rounded-md shadow-lg rounded-lg p-1.5 m-5 bg-white/40 backdrop-blur-md p-5">
                <p className="font-bold text-xl">{name}</p> <br/>
                <p className="italic text-sm">{avgRating} | {totalRatingsString} | {costForTwoMessage}</p> <br />
                <p className="font-bold italic">{cuisines.join(', ')}</p> <br />
                <strong>Delivery Time: {sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</strong>
            </div>
            <div className="flex flex-wrap justify-center">
                {itemCards.map((item) => { 
                    const price = item?.card?.info?.defaultPrice 
                    ? item?.card?.info?.defaultPrice / 100 
                    : item?.card?.info?.finalPrice 
                    ? item?.card?.info?.finalPrice / 100 
                    : item?.card?.info?.price / 100;
                    return <div className="border border-black m-1.5 w-64 p-5 text-center bg-white/40 backdrop-blur-md rounded-lg" key={item?.card?.info?.id}>
                    <p className="text-lg font-bold">{item?.card?.info?.name}</p>
                    <p className="text-sm">{item?.card?.info?.category}</p>
                    <p className="text-sm italic font-semibold">Price For Two - Rs. {price}</p>
                    </div> })}
            </div>
        </div>
    )
};

export default Menu;
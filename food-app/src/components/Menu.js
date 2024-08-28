import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const Menu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return (
        <div className="w-[95%]">
            <p className="font-bold text-white text-3xl text-center mt-5">{name}</p> <br />
            <p className="font-bold italic text-white text-center mb-5">{cuisines.join(', ')} - {costForTwoMessage}</p>
            <div className="flex flex-col flex-wrap items-center">{categories.map((category, index) => (
                <RestaurantCategories
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    isOpen={index === showIndex ? true : false} 
                    setIsOpen={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}/>
            ))}</div>
        </div>
    )
};

export default Menu;
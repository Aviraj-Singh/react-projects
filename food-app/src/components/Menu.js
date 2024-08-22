import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log(jsonData.data)
        setResInfo(jsonData.data)
    };

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
                {itemCards.map((item) => { return <div className="menu-cards" key={item?.card?.info?.id}>
                    <h3>{item?.card?.info?.name}</h3>
                    <p>{item?.card?.info?.category}</p>
                    <strong>Rs. {item?.card?.info?.price/100}</strong>
                    </div> })}
            </div>
        </div>
    )
};

export default Menu;
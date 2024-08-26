import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        setResInfo(jsonData.data);
        console.log("data is: ", jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    };

    return resInfo;
}

export default useRestaurantMenu;
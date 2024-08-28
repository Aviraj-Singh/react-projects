import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategories = ({ data, isOpen, setIsOpen }) => {
    const clickHandler = () => {
        setIsOpen();
    }
    return <div>
        <div className="w-[800px] bg-white/40 backdrop-blur-md shadow-lg p-1 rounded-md cursor-pointer my-0.5">
            <div onClick={() => clickHandler()} className="flex justify-between mb-2">
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <ItemsList itemCards={data?.itemCards} />}
        </div>
    </div>
}

export default RestaurantCategories;
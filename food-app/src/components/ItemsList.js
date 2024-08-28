import { CDN_URL } from "../utils/constants";
const ItemsList = ({ itemCards }) => {
    return (
        <div className="flex flex-col flex-wrap items-center justify-center">
            {itemCards.map((item) => {
                const price = item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.finalPrice
                        ? item?.card?.info?.finalPrice / 100
                        : item?.card?.info?.price / 100;
                return <div className="border border-black m-0.5 w-full p-1 bg-white/40 backdrop-blur-md rounded-lg" key={item?.card?.info?.id}>
                    <div className="flex gap-3 justify-between">
                        <div className="w-9/12">
                            <p className="text-lg font-bold">{item?.card?.info?.name} {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? "🔴" : "🟢"}</p>
                            <p className="text-sm">{item?.card?.info?.category}</p>
                            <p className="text-sm italic font-semibold">Price For Two - ₹ {price}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                            <button className="bg-black text-white rounded-sm shadow-lg text-sm font-bold p-1">Add +</button>
                            </div>
                            <img className="w-full rounded-md" src={CDN_URL + item?.card?.info?.imageId} />
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemsList;
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const data = props.resData;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = data;
  return (
    <div className="cursor-pointer w-[200px] rounded-lg p-1.5 m-2.5 bg-white/40 backdrop-blur-md text-black h-[380px] flex flex-col gap-1.5 overflow-hidden hover:border border-white/30 backdrop-blur-md shadow-lg">
      <img
        className="w-full h-[100px] mb-0.5 mx-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="card-image"
      />
      <p className="m-1.5 p-0 font-bold">{name}</p>
      <p className="m-1.5 p-0 text-sm font-semibold">{cuisines.join(", ")}</p>
      <p className="m-1.5 p-0 font-bold">{avgRating}</p>
      <p className="m-1.5 p-0 text-sm italic">{costForTwo}</p>
      <em className="m-1.5 p-0 text-sm font-bold italic">{sla?.deliveryTime} mins</em>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
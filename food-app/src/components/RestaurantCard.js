import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const data = props.resData;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = data;
  return (
    <div className="res-card">
      <img
        className="card-image"
        src={CDN_URL + cloudinaryImageId}
        alt="card-image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <em>{sla?.deliveryTime} mins</em>
    </div>
  );
};

export default RestaurantCard;
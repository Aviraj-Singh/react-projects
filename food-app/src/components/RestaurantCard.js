import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
  const data = props.resData.card.card.info;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = data;
  const deliveryTime = data.sla.deliveryTime;
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
      <em>{deliveryTime} mins</em>
    </div>
  );
};

export default RestaurantCard;
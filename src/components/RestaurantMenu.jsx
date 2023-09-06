import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";
import RESTAURANT_LIST from "../utils/mockData";

console.log(RESTAURANT_LIST);
function RestaurantMenu() {
  const params = useParams();
  const { restaurantID } = params;
  const restaurantData = RESTAURANT_LIST.find((res) => res.data.id === restaurantID);
  const { name, address, cloudinaryImageId, cuisines } = restaurantData.data;

  return (
    <div>
      <h1>{name}</h1>
      <p>{address}</p>
      <img
        style={{ width: "100px" }}
        src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`}
        alt={name}
      />
      <p>{cuisines.join(",")}</p>
    </div>
  );
}

export default RestaurantMenu;

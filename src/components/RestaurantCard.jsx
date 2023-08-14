import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

function RestaurantCard({ data }) {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
  } = data;
  return (
    <div className="restaurant__card">
      <img src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>
        <span>
          Rating:
          {" "}
          {avgRating}
        </span>
      </p>
    </div>
  );
}

export default RestaurantCard;

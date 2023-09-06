import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

function RestaurantCard({ data }) {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    id,
  } = data;

  const dispatch = useDispatch();
  const addToCart = () => {
    // DISPATCH ACTION
    dispatch(addItem(name));
  };

  return (
    // <Link to={`menu/${id}`}>
    <div className="restaurant__card">
      <img
        src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>
        <span>
          Rating:
          {avgRating}
        </span>
      </p>
      <button type="button" onClick={() => addToCart(name)}> Add + </button>
    </div>
    // </Link>
  );
}

export default RestaurantCard;

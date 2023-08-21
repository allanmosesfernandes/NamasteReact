import React, { useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function RestuarantList() {
  const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);
  return (
    <>
      <Search />
      <div className="restaurant__list">
        {restaurantList.map((item) => (
          <RestaurantCard key={item.data.id} data={item.data} />
        ))}
      </div>
    </>
  );
}

export default RestuarantList;

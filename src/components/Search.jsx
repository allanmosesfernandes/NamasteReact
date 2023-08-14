import React from "react";

function Search() {
  return (
    <div>
      <button
        type="button"
        className="search"
        onClick={() => {
          console.log("Search button clicked");
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
}

export default Search;

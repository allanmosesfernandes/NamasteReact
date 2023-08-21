import React from "react";
import RestuarantList from "./RestuarantList";
import Search from "./Search";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <main style={{ marginTop: "2rem", padding: "0 1rem" }}>
      <Search />
      <RestuarantList />
    </main>
  );
}

export default Body;

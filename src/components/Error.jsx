import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const errorMessage = error?.data || "Page not found, Oooopsss";
  return <h2>{errorMessage}</h2>;
}

export default Error;

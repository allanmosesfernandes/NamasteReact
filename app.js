import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is child div"),
    React.createElement("h2", {}, "this is sibling of the lavdeeeee div"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

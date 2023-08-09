const parent = React.createElement(
  "div",
  { class: "parent" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is child div"),
    React.createElement("h2", {}, "this is sibling of the child div"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

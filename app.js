import React from "react";
import ReactDOM from "react-dom/client";

// this is JSX code
const heading = (
  <h1>
    Hello World
    <span>from React</span>
  </h1>
);

/* Functional Component */
const Title = () => <h3>this is from the title component</h3>;

const Heading = () => {
  return (
    <div className="container">
      <Title />
      <h1>Hello World from functional comp</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

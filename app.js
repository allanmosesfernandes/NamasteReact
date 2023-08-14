import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header />
      <Body />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

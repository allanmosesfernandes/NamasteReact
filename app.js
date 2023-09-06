import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header />
      <Outlet />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

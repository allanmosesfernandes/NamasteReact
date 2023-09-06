import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
      </>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "menu/:restaurantID",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

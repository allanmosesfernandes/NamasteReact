import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MOCK_TEST_DATA from "../../utils/mockTest";
import RestaurantCard from "../RestaurantCard";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

describe("RestaurantCard Component", () => {
  // test if component renders
  test("Should render the restaurant card component", () => {
    render(
      <Provider store={appStore}>
        <RestaurantCard key={MOCK_TEST_DATA.data.id} data={MOCK_TEST_DATA.data} />
      </Provider>,
    );
    const restaurantName = screen.getByText("Domino's Pizza");
    // Assertion
    expect(restaurantName).toBeInTheDocument();
  });
});

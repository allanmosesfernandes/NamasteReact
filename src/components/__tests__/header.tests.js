/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </Router>,
    );
  });
  test("Should render the header component", () => {
    const logo = screen.getByAltText("logo");

    // Assertion
    expect(logo).toBeInTheDocument();
  });
  // Checking for Login Button
  test("Should render the login button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    // Assertion
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    // Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});

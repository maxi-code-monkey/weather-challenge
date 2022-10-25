import React from "react";
import { render } from "@testing-library/react";
import CustomAppBar, { APP_BAR_TEST_ID } from "./index";

describe("<AppBar />", () => {

  it("Renders correctly", () => {
    const { getByText, getByTestId } = render(<CustomAppBar />);
    const component = getByTestId(APP_BAR_TEST_ID);
    const typography = getByText(/Flow Weather Challenge/);
    
    expect(typography).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
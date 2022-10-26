import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomSwitch, { SWITCH_TEST_ID } from "./index";

const mockedHandleChange = jest.fn();

describe("<CustomSwitch />", () => {

  it("Renders correctly", () => {
    const { getByTestId, getByText } = render(<CustomSwitch handleChange={mockedHandleChange} />);
    const component = getByTestId(SWITCH_TEST_ID);
    const typography = getByText(/Location/);
    
    expect(typography).toBeInTheDocument();
    expect(component).toBeInTheDocument();
  });

  it('Reacts to user interaction', () => {
    const { getByTestId } = render(<CustomSwitch handleChange={mockedHandleChange} />);
    const comp = getByTestId(SWITCH_TEST_ID);
    fireEvent.click(comp);

    expect(mockedHandleChange).toHaveBeenCalled();
    expect(mockedHandleChange).toHaveBeenCalledTimes(1);
  });
});
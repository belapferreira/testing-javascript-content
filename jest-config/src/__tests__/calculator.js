import React from "react";
import { render, fireEvent } from "calculator-test-utils";
import Calculator from "../calculator";

test("the clear button switches from AC to C when there is an entry", () => {
  const { getByText } = render(<Calculator />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const clearButton = getByText("AC");

  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText(/3/));
  expect(clearButton).toHaveTextContent("C");

  fireEvent.click(clearButton);
  expect(clearButton).toHaveTextContent("AC");
})

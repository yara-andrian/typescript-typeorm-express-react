import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Example from "../Something";

test("shows success message after confirm button is clicked", () => {
  const { getByText } = render(<Example />);

  expect(getByText(/Full name:/i)).toBeInTheDocument();

  fireEvent.click(getByText("Showing full name"));

  expect(getByText("First Name: Bear")).toBeInTheDocument();
});

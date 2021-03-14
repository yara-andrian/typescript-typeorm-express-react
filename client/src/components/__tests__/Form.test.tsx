import { Field } from "../Field";
import { fireEvent, render, screen } from "@testing-library/react";

test("render correctly", () => {
  render(<Field id="x" label="hi" value="hi" editor="textbox" />);
  const input = screen.getByLabelText("hi-input");
  expect(input.value).toBe("");
});

test("It should allow a $ to be in the input when the value is changed", () => {
  render(<Field id="x" label="hi" value="hi" editor="textbox" />);
  const input = screen.getByLabelText("hi-input");
  fireEvent.change(input, { target: { value: "$23.0" } });
  expect(input.value).toBe("$23.0");
});

import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import SearchBar from "./SearchBar";

let handleChange;
let input;
beforeEach(() => {
  handleChange = jest.fn();
  render(<SearchBar handleChange={handleChange} />);
  input = screen.getByRole("textbox");
});

it("text should be empty by default", () => {
  expect(input.value).toBe("");
});

it("should call handleChange 3 times, when text changes 3 times", () => {
  fireEvent.change(input, {
    target: {
      value: "Paris",
    },
  });

  fireEvent.change(input, {
    target: {
      value: "",
    },
  });

  fireEvent.change(input, {
    target: {
      value: "Tunis",
    },
  });

  expect(handleChange).toBeCalledTimes(3);
  expect(handleChange.mock.calls[0][0]).toBe("Paris");
  expect(handleChange.mock.calls[1][0]).toBe("");
  expect(handleChange.mock.calls[2][0]).toBe("Tunis");
});

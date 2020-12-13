import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

it("renders searchbar", () => {
  const handler = jest.fn();
  render(<SearchBar handleChange={handler} />);
  const searchBarInput = screen.getByRole("textbox");
  expect(searchBarInput).toBeInTheDocument();
  expect(searchBarInput.value).toBe("");

  fireEvent.change(searchBarInput, {
    target: {
      value: "Paris",
    },
  });
  expect(searchBarInput).toHaveValue("Paris");

  expect(handler).toBeCalledTimes(1);
  expect(handler).toBeCalledWith("Paris");
});

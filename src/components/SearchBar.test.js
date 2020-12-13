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

  fireEvent.change(searchBarInput, {
    target: {
      value: "",
    },
  });
  expect(searchBarInput).toHaveValue("");

  expect(handler).toBeCalledTimes(2);
  expect(handler.mock.calls[0][0]).toBe("Paris");
  expect(handler.mock.calls[1][0]).toBe("");
});

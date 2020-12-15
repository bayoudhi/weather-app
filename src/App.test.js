import { render, screen } from "@testing-library/react";
import * as React from "react";
import App from "./App";

it("renders searchbar", () => {
  render(<App />);
  const searchBarInput = screen.getByRole("textbox");
  expect(searchBarInput).toBeInTheDocument();
});

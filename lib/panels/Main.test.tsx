import { fireEvent, render, screen } from "@testing-library/react";
import { Main } from "./Main";
import "@testing-library/jest-dom";

describe(Main, () => {
  render(<Main />);

  const search = screen.getByTestId("search") as HTMLInputElement;
  expect(screen.queryByTestId("not-found")).toBeNull();

  it("Search not found", () => {
    fireEvent.change(search, { target: { value: "_" } });
    screen.getByTestId("not-found");
  });

  it("Search found", () => {
    fireEvent.change(search, { target: { value: "Фото" } });
    expect(screen.queryByTestId("not-found")).toBeNull();
  });
});

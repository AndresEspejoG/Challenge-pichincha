// unit test for field search

import { render, screen } from "@testing-library/react";
import Search from "@/components/search/Search";

describe("Search", () => {
  test("should render a search field", () => {
    render(<Search />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});

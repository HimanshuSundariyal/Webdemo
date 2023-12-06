import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("Header", () => {
  it("Header should be render propery", () => {
    const { container } = render(<Header />);
    expect(container.getElementsByClassName("header").length).toBe(1);
  });

  it("Header should have logout button", () => {
    render(<Header />);
    const logOutButton = screen.getByText(`Logout`);
    expect(logOutButton).toBeInTheDocument();
  });
});

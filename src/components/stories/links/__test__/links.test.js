import { render, screen } from "@testing-library/react";
import Links from "../index";

describe("Links", () => {
  it("Link should be render propery", () => {
    const { container } = render(<Links label="Test" />);
    expect(container.getElementsByClassName("nav-link").length).toBe(1);
  });

  it("Link should render with lable pass", () => {
    render(<Links label="Test label" />);
    const link = screen.getByText(/Test label/i);
    expect(link).toBeInTheDocument();
  });
});

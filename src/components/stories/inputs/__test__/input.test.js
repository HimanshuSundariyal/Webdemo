import { render, screen } from "@testing-library/react";
import TextBox from "../textbox/index";

describe("TextBox", () => {
  it("TextBox should be render propery", () => {
    render(<TextBox label="Test label" />);
    const input = screen.getByText(/Test label/i);
    expect(input).toBeInTheDocument();
  });

});

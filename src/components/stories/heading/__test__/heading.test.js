import { render, screen } from "@testing-library/react";
import Heading from "../index";

describe("Heading", () => {
  it("Heading should be render propery", () => {
    render(<Heading headingType="1">Heading H1</Heading>);
    const heading = screen.getByText(`Heading H1`);
    expect(heading).toBeInTheDocument();
  });

  it('Heading correctly renders according to headingType', () => {
    const { getByRole } = render(<Heading headingType="2" />)
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

});

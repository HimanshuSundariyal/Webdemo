import { render, screen } from "@testing-library/react";
import Button from "../index";


describe("Button", () => {
    it("Button should be render propery", () => {
        render(<Button buttonText="Test Button" />);
        const button = screen.getByText(/Test Button/i);
        expect(button).toBeInTheDocument();
      });

      it("Button should be render childrens properly", () => {
        render(<Button>Test Button</Button>);
        const button = screen.getByText(/Test Button/i);
        expect(button).toBeInTheDocument();
      });  

      it("Button should be render according to props button type", () => {
        const { container } = render(<Button buttonType="primary" />)
        expect(container.getElementsByClassName('btn-primary').length).toBe(1);
      });  
    
});

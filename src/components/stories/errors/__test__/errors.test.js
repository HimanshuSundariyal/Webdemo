import { render, screen } from "@testing-library/react";
import Error from "../index";


describe("Errors", () => {
    it("Error should be render propery", () => {
        const { container } = render(<Error />)
        expect(container.getElementsByClassName('error').length).toBe(1);
      });

      it("Error should render  error message", () => {
        render(<Error errorMessage="Test Error Message"/>);
        const error = screen.getByText(/Test Error Message/i);
        expect(error).toBeInTheDocument();
      }); 
      
      
      it("Error should render according  error type", () => {
        const { container } = render(<Error errorType="warning" />)
        expect(container.getElementsByClassName('warning').length).toBe(1);
      }); 
    
});

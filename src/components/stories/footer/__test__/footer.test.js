import { render, screen } from "@testing-library/react";
import Footer from "../index";


describe("Footer", () => {
    it("Footer should be render propery", () => {
        const { container } = render(<Footer />)
        expect(container.getElementsByClassName('footer').length).toBe(1);
      });

      it("Footer should render  with copyright text", () => {
        render(<Footer/>);
        const d = new Date();
        const year = d.getFullYear();
        const copyrighttext = screen.getByText(`Copyright ${year}`);
        expect(copyrighttext).toBeInTheDocument();
      }); 
});

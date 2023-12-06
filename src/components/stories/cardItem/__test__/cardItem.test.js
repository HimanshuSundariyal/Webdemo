import { render, screen } from "@testing-library/react";
import CardItem from "../index";


describe("CardItem", () => {
    it("CardItem should be render propery", () => {
        const { container } = render(<CardItem />)
        expect(container.getElementsByClassName('card').length).toBe(1);
      });
    
});

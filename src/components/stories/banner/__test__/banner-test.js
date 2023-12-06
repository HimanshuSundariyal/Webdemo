import { render } from "@testing-library/react";
import Banner from "../index";


describe("Banner", () => {
  it("Banner render properly with banner image", () => {
    const { container } = render(<Banner/>)
    expect(container.getElementsByClassName('banner_image').length).toBe(1);
  });
});

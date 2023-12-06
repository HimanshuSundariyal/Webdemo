import { validateLogin } from "../index";

describe("Utils function", () => {
  it("Should return false if user name and password are not correct", () => {
    const validate = validateLogin("test", "test");
    expect(validate).toBe(false);
  });

  it("Should return true if user name and password are not correct", () => {
    const validate = validateLogin("demo", "demo");
    expect(validate).toBe(true);
  });
});

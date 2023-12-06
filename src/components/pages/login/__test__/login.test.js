import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../index";
import { BrowserRouter } from "react-router-dom";

export const MockLoginForm = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe("Login Form", () => {
  it("Should have username password filed in loginform", () => {
    render(<MockLoginForm />);
    const userNameFiled = screen.getByLabelText(/username/i);
    const passwordFiled = screen.getByLabelText(/password/i);
    expect(userNameFiled).toBeInTheDocument();
    expect(passwordFiled).toBeInTheDocument();
  });

  it("Should give mandatory fileds error if username and password filed is empty", () => {
    render(<MockLoginForm />);
    const userNameFiled = screen.getByLabelText(/username/i);
    const passwordFiled = screen.getByLabelText(/password/i);
    const submitFiled = screen.getByText(/log In/i);

    userEvent.type(userNameFiled, "");
    userEvent.type(passwordFiled, "");
    userEvent.click(submitFiled);
    expect(
      screen.getByText(`UserName and Password is mandatory`)
    ).toBeInTheDocument();
  });

  it("Should give  error if username and password not match", () => {
    render(<MockLoginForm />);
    const userNameFiled = screen.getByLabelText(/username/i);
    const passwordFiled = screen.getByLabelText(/password/i);
    const submitFiled = screen.getByText(/log In/i);

    userEvent.type(userNameFiled, "test");
    userEvent.type(passwordFiled, "test");
    userEvent.click(submitFiled);
    expect(
      screen.getByText(`Username or password do not match`)
    ).toBeInTheDocument();
  });
});

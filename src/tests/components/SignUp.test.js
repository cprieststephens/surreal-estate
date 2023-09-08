import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SignUp from "../../components/SignIn";

describe("SignUp", () => {
  const validProps = {
    setUserID: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SignUp setUserID={validProps.setUserID} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an email input", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={validProps.setUserID} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Enter email");

    expect(emailInput).toBeInTheDocument();
  });

  it("renders a password input", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={validProps.setUserID} />
      </MemoryRouter>
    );
    const passwordInput = screen.getByPlaceholderText("Enter password");

    expect(passwordInput).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={validProps.setUserID} />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
  });
});

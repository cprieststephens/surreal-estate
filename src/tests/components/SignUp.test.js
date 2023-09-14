import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SignUp from "../../components/SignIn";

describe("SignUp", () => {
  const setUserID = jest.fn();

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SignUp setUserID={setUserID} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an email input", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={setUserID} />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("renders a password input", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={setUserID} />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(
      <MemoryRouter>
        <SignUp setUserID={setUserID} />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

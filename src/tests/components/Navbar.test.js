import React from "react";
import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  const validProps = {
    setUserID: jest.fn(),
    userID: "11111",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar setUserID={validProps.setUserID} userID={validProps.userID} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct logo", () => {
    render(
      <MemoryRouter>
        <Navbar setUserID={validProps.setUserID} userID={validProps.userID} />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("Surreal Estate logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(
      <MemoryRouter>
        <Navbar setUserID={validProps.setUserID} userID={validProps.userID} />
      </MemoryRouter>
    );
    const surrealEstate = screen.getByText(/surreal estate/i);

    expect(surrealEstate).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(
      <MemoryRouter>
        <Navbar setUserID={validProps.setUserID} userID={validProps.userID} />
      </MemoryRouter>
    );
    const signOutButton = screen.getByRole("button");

    expect(signOutButton).toBeInTheDocument();
  });
});

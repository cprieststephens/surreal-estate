import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SideBar from "../../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a search input", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/flat/i)).toBeInTheDocument();
  });

  it("renders a search button", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders the correct text", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(screen.getByText(/filter by city/i)).toBeInTheDocument();
    expect(screen.getByText(/sort by price/i)).toBeInTheDocument();
  });
});

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
    const searchInput = screen.getByPlaceholderText(/flat/i);

    expect(searchInput).toBeInTheDocument();
  });

  it("renders a search button", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const searchButton = screen.getByRole("button");

    expect(searchButton).toBeInTheDocument();
  });

  it("renders the correct text", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );
    const filterText = screen.getByText(/filter by city/i);
    const sortText = screen.getByText(/sort by price/i);

    expect(filterText).toBeInTheDocument();
    expect(sortText).toBeInTheDocument();
  });
});

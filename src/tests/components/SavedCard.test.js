import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SavedCard from "../../components/SavedCard";

describe("SavedCard", () => {
  const validProps = {
    id: "1111",
    propertyListing: {
      id: "2222",
      title: "stub-title",
      type: "stub-type",
      bedrooms: "stub-bedrooms",
      bathrooms: "stub-bathrooms",
      price: "stub-price",
      city: "stub-city",
      email: "stub-email",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SavedCard
          id={validProps.id}
          propertyListing={validProps.propertyListing}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct values", () => {
    render(
      <MemoryRouter>
        <SavedCard
          id={validProps.id}
          propertyListing={validProps.propertyListing}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("stub-title")).toBeInTheDocument();
    expect(screen.getByText("stub-type")).toBeInTheDocument();
    expect(screen.getByText("stub-bedrooms")).toBeInTheDocument();
    expect(screen.getByText("stub-bathrooms")).toBeInTheDocument();
    expect(screen.getByText("stub-price")).toBeInTheDocument();
    expect(screen.getByText("stub-city")).toBeInTheDocument();
  });

  it("renders email link text", () => {
    render(
      <MemoryRouter>
        <SavedCard
          id={validProps.id}
          propertyListing={validProps.propertyListing}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it("renders a remove button", () => {
    render(
      <MemoryRouter>
        <SavedCard
          id={validProps.id}
          propertyListing={validProps.propertyListing}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

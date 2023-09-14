import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "stub-title",
    type: "stub-type",
    bedrooms: "stub-bedrooms",
    bathrooms: "stub-bathrooms",
    price: "stub-price",
    city: "stub-city",
    email: "stub-email",
    _id: "111",
    userID: "222",
    onSaveProperty: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PropertyCard
          title={validProps.title}
          type={validProps.type}
          bedrooms={validProps.bedrooms}
          bathrooms={validProps.bathrooms}
          price={validProps.price}
          city={validProps.city}
          email={validProps.email}
          _id={validProps._id}
          userID={validProps.userID}
          onSaveProperty={validProps.onSaveProperty}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct value for props", () => {
    render(
      <MemoryRouter>
        <PropertyCard
          title={validProps.title}
          type={validProps.type}
          bedrooms={validProps.bedrooms}
          bathrooms={validProps.bathrooms}
          price={validProps.price}
          city={validProps.city}
          email={validProps.email}
          _id={validProps._id}
          userID={validProps.userID}
          onSaveProperty={validProps.onSaveProperty}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("stub-title")).toBeInTheDocument();
    expect(screen.getByText("stub-type")).toBeInTheDocument();
    expect(screen.getByText("stub-city")).toBeInTheDocument();
    expect(screen.getByText("stub-bedrooms")).toBeInTheDocument();
    expect(screen.getByText("stub-bathrooms")).toBeInTheDocument();
    expect(screen.getByText("stub-price")).toBeInTheDocument();
  });

  it("renders email link text", () => {
    render(
      <MemoryRouter>
        <PropertyCard
          title={validProps.title}
          type={validProps.type}
          bedrooms={validProps.bedrooms}
          bathrooms={validProps.bathrooms}
          price={validProps.price}
          city={validProps.city}
          email={validProps.email}
          _id={validProps._id}
          userID={validProps.userID}
          onSaveProperty={validProps.onSaveProperty}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it("renders a save button", () => {
    render(
      <MemoryRouter>
        <PropertyCard
          title={validProps.title}
          type={validProps.type}
          bedrooms={validProps.bedrooms}
          bathrooms={validProps.bathrooms}
          price={validProps.price}
          city={validProps.city}
          email={validProps.email}
          _id={validProps._id}
          userID={validProps.userID}
          onSaveProperty={validProps.onSaveProperty}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

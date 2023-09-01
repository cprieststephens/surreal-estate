import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Stub title",
    type: "Stub type",
    bedrooms: 4,
    bathrooms: 2,
    price: 400000,
    city: "Stub city",
    email: "Stub email",
    _id: "111",
    userID: "222",
    onSaveProperty: jest.fn(),
  };

  it("renders the correct value for props", () => {
    const { getByText } = render(
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

    expect(getByText("Stub title")).toBeInTheDocument();
    expect(getByText("Stub type")).toBeInTheDocument();
    expect(getByText("Stub city")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("400000")).toBeInTheDocument();
  });

  it("renders email link text", () => {
    const { getByText } = render(
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

    expect(getByText("Email")).toBeInTheDocument();
  });

  it("renders a save button", () => {
    const { getByRole } = render(
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

    expect(getByRole("button")).toBeInTheDocument();
  });
});

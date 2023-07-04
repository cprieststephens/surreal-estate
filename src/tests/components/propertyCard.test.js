import React from "react";
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
  };

  it("renders correct value for props", () => {
    const { getByText, getByRole } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    const typeAndCityText = getByText(
      (_, element) => element.textContent === "Stub type - Stub city"
    );

    expect(getByText("Stub title")).toBeInTheDocument();
    expect(typeAndCityText).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("400000")).toBeInTheDocument();
    expect(getByRole("link")).toHaveAttribute("href", "mailto:Stub email");
  });
});

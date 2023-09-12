import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct inputs", () => {
    render(<AddProperty />);
    const title = screen.getByLabelText(/title/i);
    const type = screen.getByLabelText(/type/i);
    const bedrooms = screen.getByLabelText(/bedrooms/i);
    const bathrooms = screen.getByLabelText(/bathrooms/i);
    const price = screen.getByLabelText(/price/i);
    const city = screen.getByLabelText(/city/i);
    const email = screen.getByLabelText(/email/i);

    expect(title).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(bedrooms).toBeInTheDocument();
    expect(bathrooms).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    render(<AddProperty />);
    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Properties from "../../components/Properties";

describe("Properties", () => {
  it("renders correctly", async () => {
    const mockData = {
      properties: [
        {
          id: "1111",
          title: "stub-title",
          type: "stub-type",
          bedrooms: "stub-bedrooms",
          bathrooms: "stub-bathrooms",
          price: "stub-price",
          city: "stub-city",
          email: "stub-email",
          __v: "stub-value",
        },
      ],
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockData);
    const { asFragment } = render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

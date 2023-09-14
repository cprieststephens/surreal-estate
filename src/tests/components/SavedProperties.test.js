import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import SavedProperties from "../../components/SavedProperties";

describe("SavedProperties", () => {
  it("renders correctly", async () => {
    const mockData = {
      properties: [
        {
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
        },
      ],
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockData);
    const { asFragment } = render(<SavedProperties />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

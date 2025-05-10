import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AllCountriesTable from "../AllContries/AllCountriesTable";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("axios");

const mockCountries = [
  {
    cca2: "LK",
    name: {
      common: "Sri Lanka",
      official: "Democratic Socialist Republic of Sri Lanka",
    },
    flags: {
      png: "https://flagcdn.com/w320/lk.png",
    },
    region: "Asia",
    population: 21919000,
    area: 65610,
  },
];

const mockStore = configureStore([]);
const store = mockStore({});

describe("AllCountriesTable", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockCountries });
  });

  test("renders country table with data", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AllCountriesTable region="" sort="A-Z" />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText("Sri Lanka")).toBeInTheDocument()
    );

    expect(
      screen.getByText("Democratic Socialist Republic of Sri Lanka")
    ).toBeInTheDocument();
  });
});

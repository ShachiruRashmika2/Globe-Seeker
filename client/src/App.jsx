import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

import Layout from "./Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, teal } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#00e676",
      dark: "#00a152",
      light: "#33eb91",
    },
    secondary: {
      main: "##ffc400",
      dark: "#b28900",
      light: "#ffcf33",
    },
  },
  typography: {
    fontFamily: "cabin",
  },
});

//importing Pages
import Home from "./pages/Home";
import Country from "./pages/Country";
import AllContries from "./pages/AllContries";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/country" element={<Country />} />
              <Route path="/countries" element={<AllContries />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

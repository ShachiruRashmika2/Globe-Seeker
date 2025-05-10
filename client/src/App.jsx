import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";

import { useSelector } from "react-redux";

import Layout from "./Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, teal } from "@mui/material/colors";

//importing Pages
import Home from "./pages/Home";
import Country from "./pages/Country";
import AllContries from "./pages/AllContries";
import WorldMap from "./components/Map/worldMap";

function App() {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#00e676",
        dark: "#00a152",
        light: "#33eb91",
      },
      secondary: {
        main: "#ffc400",
        dark: "#b28900",
        light: "#ffcf33",
      },
      background: {
        default: darkMode ? "#3b3b3b" : "#ffffff",
        paper: darkMode ? "#333333" : "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "cabin",
    },
  });

  useEffect(() => {
    console.log("darkMode changed to:", darkMode);
    document.body.style.backgroundColor = darkMode ? "#3b3b3b" : "#ffffff";
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/country" element={<Country />} />
            <Route path="/countries" element={<AllContries />} />
          </Route>
          <Route path="/sep/map" element={<WorldMap />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

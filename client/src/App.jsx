import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

import Layout from "./Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, teal } from "@mui/material/colors";

//importing Pages
import Home from "./pages/Home";
import Country from "./pages/Country";
import AllContries from "./pages/AllContries";
import WorldMap from "./components/Map/worldMap";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMode", darkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
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
      background: {
        default: darkMode ? "##3b3b3b" : "#ffffff",
        paper: darkMode ? "#333333" : "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "cabin",
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#3b3b3b" : "#ffffff";
  }, [darkMode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout mode={toggleDarkMode} />}>
              <Route index element={<Home />} />
              <Route path="/country" element={<Country />} />
              <Route path="/countries" element={<AllContries />} />
            </Route>
            <Route path="/sep/map" element={<WorldMap />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

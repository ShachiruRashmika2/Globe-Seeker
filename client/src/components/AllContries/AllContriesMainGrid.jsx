import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import AllCountriesTable from "./AllCountriesTable";
const AllContriesMainGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: "2%",
        mx: "2%",
        p: "2%",

        width: "100%",

        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {/********************************Grid 1********************************************** */}
      <Grid
        size={{ xs: 12, md: 1 }}
        sx={{
          px: 2,
          py: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "red",
          gap: 2,

          height: { xs: "66vh", sm: "70vh", md: "60vh", lg: "70vh" },
          borderRadius: 10,
        }}
      ></Grid>
      <Grid
        size={{ xs: 12, md: 11 }}
        sx={{
          display: "flex",
          p: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",

          overflowY: "scroll",

          height: { xs: "66vh", sm: "70vh", md: "60vh", lg: "70vh" },
        }}
      >
        <AllCountriesTable />
      </Grid>
    </Grid>
  );
};

export default AllContriesMainGrid;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { setSelectedCountry } from "../../Features/Country/CountrySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const mainCellStyle = {
  fontSize: 20,
  fontWeight: "800",
  colour: "text.secondary",
};
const subCellStyle = {
  fontSize: 16,
  fontWeight: "300",
  colour: "text.secondary",
};

export default function AllCountriesTable({ region, sort }) {
  const [countries, setCountries] = useState([]);
  const [searchQuerry, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectCountry = (country) => {
    console.log(country);
    dispatch(setSelectedCountry(country));
    navigate("/country");
  };

  const filteredCountries = countries.filter(
    (c) => !region || c.region === region
  );

  const sortedCountries = filteredCountries.sort((a, b) => {
    switch (sort) {
      case "A-Z":
        return a.name.common.localeCompare(b.name.common);
      case "Population":
        return b.population - a.population;
      case "Area":
        return b.area - a.area;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        console.log(region);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <TableContainer component={Paper} className="glassy2">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="glassy2" sx={{ fontSize: 20, mb: 2 }}>
          <TableRow>
            <TableCell colSpan={3} align="center">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    m: 1,
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 10,
                    width: 40,

                    transition: "width 0.3s ease",
                    "&:hover": {
                      width: 300,
                    },
                    "&:hover .searchInput": {
                      display: "block",
                    },
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchTwoToneIcon sx={{ color: "primary.main" }} />
                  </IconButton>
                  <InputBase
                    className="searchInput"
                    sx={{
                      ml: 1,
                      flex: 1,
                      display: "none",
                      transition: "all 0.3s ease",
                    }}
                    placeholder="Search Countries..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Paper>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={mainCellStyle} align="center">
              No
            </TableCell>
            <TableCell sx={mainCellStyle} align="center">
              Country
            </TableCell>
            <TableCell
              sx={[
                mainCellStyle,
                {
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "table-cell",
                  },
                },
              ]}
              align="center"
            >
              Full Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ mt: 2 }}>
          {filteredCountries
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchQuerry.toLowerCase())
            )
            .map((country, index) => (
              <TableRow
                className="glassy3"
                key={country.cca2}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  "&:focus": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={subCellStyle}
                  align="center"
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    paddingY: 0.5,
                    paddingX: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 2,

                    alignItems: "center",
                    height: 80,
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 60,
                      borderRadius: 5,
                      bgcolor: "white",
                      boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.2)",
                      p: 0.5,
                      boxSizing: "border-box",
                      overflow: "hidden",
                    }}
                    onClick={() => handleSelectCountry(country.cca2)}
                  >
                    <Box
                      component={"img"}
                      src={country.flags.png}
                      alt="Country Flag"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                  <Box
                    sx={[
                      subCellStyle,
                      {
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "flex",
                        width: "50%",
                      },
                    ]}
                  >
                    {country.name.common}
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={[
                    subCellStyle,
                    {
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "table-cell",
                      },
                    },
                  ]}
                >
                  {country.name.official}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

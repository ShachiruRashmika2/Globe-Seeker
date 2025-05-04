import React from "react";
import { Typography, Card, CardContent, Grid, Box, Stack } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import TranslateIcon from "@mui/icons-material/Translate";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import CarLeft from "../../assets/Images/CarLeft.png";
import CarRight from "../../assets/Images/CarRight.png";
import MapComponent from "./CountryMap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CountryMainGrid = () => {
  const selectedCountry = useSelector((state) => state.country.selectedCountry);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${selectedCountry}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      data-aos="fade-up"
    >
      <Grid
        container
        spacing={2}
        sx={{
          my: "2%",
          mx: "2%",
          p: "2%",
          borderRadius: { xs: "5px", sm: "10px", md: "20px", width: "100%" },

          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/********************************Grid 1********************************************** */}
        <Grid
          className="glassy2"
          size={{ xs: 12, md: 4 }}
          order={{ xs: 2, md: 1 }}
          sx={{
            px: 2,
            py: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,

            height: { xs: "66vh", sm: "70vh", md: "60vh", lg: "70vh" },
            borderRadius: "5% 20% 5% 20%",
          }}
        >
          <Box
            className="glassy2"
            sx={{
              width: "100%",
              height: "40%",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "row",
              boxSizing: "border-box",

              py: 2,

              borderRadius: "5% 30% 5% 5%",
            }}
          >
            <Box
              sx={{
                width: "40%",

                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                p: 2,
              }}
            >
              <Box
                component={"img"}
                src={country?.coatOfArms.png}
                alt="Logo"
                sx={{ width: 100 }}
              />
            </Box>
            <Box
              sx={{
                width: "40%",

                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "text.secondary",
                  textAlign: "left",
                }}
              >
                {country?.name?.official}
              </Typography>
            </Box>
          </Box>
          <Box
            className="glassy2"
            sx={{
              width: "100%",
              height: "50%",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              py: 1,
              boxSizing: "border-box",
              borderRadius: "5% 5% 5% 30%",
            }}
          >
            <Box
              sx={{
                width: "100%",

                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                flexDirection: "column",
                gap: 1,
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "text.secondary",
                  textAlign: "left",
                }}
              >
                Driving Side
              </Typography>
              <Box
                component={"img"}
                src={country?.car?.side === "left" ? CarRight : CarLeft}
                alt="Car"
                sx={{ width: { lg: 180, md: 150, sm: 180, xs: 180 } }}
              />
            </Box>
          </Box>
        </Grid>
        {/********************************Middlle Grid********************************************** */}
        <Grid
          size={{ xs: 12, md: 4 }}
          order={{ xs: 1, md: 2 }}
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            height: { xs: "66vh", sm: "70vh", md: "60vh", lg: "70vh" },
            gap: 2,
            alignSelf: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "40%",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              boxSizing: "border-box",
              display: "flex",
            }}
          >
            <Box
              className="glassy2"
              component={"img"}
              src={country?.flags?.png}
              alt="flag"
              sx={{
                width: { lg: 300, md: 250, sm: 300, xs: 300 },
                boxSizing: "border-box",
                borderRadius: "5%",
                p: 1,
              }}
            />
          </Box>
          <Box
            className="glassy2"
            sx={{
              width: "100%",
              height: "60%",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",

              borderRadius: "20% 20% 5% 5%",
            }}
          >
            <Stack
              direction={"column"}
              spacing={2}
              sx={{
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 22, md: 28, lg: 34 },
                  fontWeight: 900,
                  color: "text.secondary",
                }}
              >
                {country?.name?.common}
              </Typography>
              <Box
                className="glassy2"
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: 2,
                  p: 0.25,
                  px: 1,
                  gap: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "20%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 20, md: 14, lg: 18 },
                      fontWeight: 400,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    Capital
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 18, md: 18, lg: 24 },
                      fontWeight: 300,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    {country?.capital}
                  </Typography>
                </Box>
              </Box>

              <Box
                className="glassy2"
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: 2,
                  p: 0.25,
                  px: 1,
                  gap: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "20%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 20, md: 14, lg: 18 },
                      fontWeight: 400,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    Region
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 18, md: 18, lg: 24 },
                      fontWeight: 300,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    {country?.region}
                  </Typography>
                </Box>
              </Box>

              <Box
                className="glassy2"
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: 2,
                  p: 0.25,
                  px: 1,
                  gap: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "20%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 20, md: 14, lg: 18 },
                      fontWeight: 400,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    Sub Region
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",

                    height: "100%",
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 18, md: 18, lg: 24 },
                      fontWeight: 300,
                      color: "text.secondary",
                      textAlign: "left",
                    }}
                  >
                    {country?.subregion}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
        {/****************************Grid 3************************************ */}
        <Grid
          className="glassy2"
          size={{ xs: 12, md: 4 }}
          order={{ xs: 3, md: 3 }}
          sx={{
            px: 5,
            py: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: "yellow",
            borderRadius: "20% 5% 20% 5%",
            height: { xs: "66vh", sm: "70vh", md: "60vh", lg: "70vh" },
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              width: "90%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 22, md: 28, lg: 34 },
                fontWeight: 900,
                color: "text.secondary",
              }}
            >
              Stats
            </Typography>
            <Box
              className="glassy2"
              sx={{
                display: "flex",
                width: "100%",
                height: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                borderRadius: 2,
                p: 1,
                px: 1,
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="glassy3"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    p: 0.5,

                    boxSizing: "border-box",
                    borderRadius: "50%",
                  }}
                >
                  <FullscreenIcon sx={{ color: "text.secondary" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: 10, lg: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Area
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  height: "100%",
                  width: "80%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  {country?.area} km<sup>2</sup>
                </Typography>
              </Box>
            </Box>

            {/****************1********************** */}

            <Box
              className="glassy2"
              sx={{
                display: "flex",
                width: "100%",
                height: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                borderRadius: 2,
                p: 1,
                px: 1,
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="glassy3"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    p: 0.5,

                    boxSizing: "border-box",
                    borderRadius: "50%",
                  }}
                >
                  <GroupsIcon sx={{ color: "text.secondary" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: 10, lg: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Population
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  height: "100%",
                  width: "80%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  {country?.population} <sup>people</sup>
                </Typography>
              </Box>
            </Box>

            {/***************************2*********************************/}

            <Box
              className="glassy2"
              sx={{
                display: "flex",
                width: "100%",
                height: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                borderRadius: 2,
                p: 1,
                px: 1,
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="glassy3"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    p: 0.5,

                    boxSizing: "border-box",
                    borderRadius: "50%",
                  }}
                >
                  <TranslateIcon sx={{ color: "text.secondary" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: 10, lg: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Language
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  gap: 1,

                  height: "100%",
                  width: "80%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                    p: 1,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                  }}
                >
                  {Object.values(country?.languages || {}).slice(0, 1)[0]}
                </Typography>
                {Object.values(country?.languages || {}).slice(1, 2)[0] ? (
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                      fontWeight: 300,
                      color: "text.secondary",
                      textAlign: "left",
                      p: 1,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                    }}
                  >
                    {Object.values(country?.languages || {}).slice(1, 2)[0]}
                  </Typography>
                ) : null}
              </Box>
            </Box>

            {/*3*/}

            <Box
              className="glassy2"
              sx={{
                display: "flex",
                width: "100%",
                height: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                borderRadius: 2,
                p: 1,
                px: 1,
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="glassy3"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    p: 0.5,

                    boxSizing: "border-box",
                    borderRadius: "50%",
                  }}
                >
                  <AttachMoneyIcon sx={{ color: "text.secondary" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: 10, lg: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Currancy
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  gap: 1,

                  height: "100%",
                  width: "80%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                    p: 1,
                    borderRadius: 2,
                  }}
                >
                  {country?.currencies &&
                    country?.currencies[Object.keys(country.currencies)[0]]
                      .name}
                </Typography>
              </Box>
            </Box>

            {/**************************************4************************************** */}

            <Box
              className="glassy2"
              sx={{
                display: "flex",
                width: "100%",
                height: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                borderRadius: 2,
                p: 1,
                px: 1,
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="glassy3"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    p: 0.5,

                    boxSizing: "border-box",
                    borderRadius: "50%",
                  }}
                >
                  <PublicOffIcon sx={{ color: "text.secondary" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 16, md: 10, lg: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Independancy
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  gap: 1,

                  height: "100%",
                  width: "80%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 14, lg: 20 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                    p: 1,
                    borderRadius: 2,
                    bgcolor: country?.independent
                      ? "warning.main"
                      : "error.main",
                  }}
                >
                  {country?.independent ? "Independent" : "Dependent"}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <MapComponent osmLink={country?.maps.openStreetMaps} />
    </Box>
  );
};

export default CountryMainGrid;

import React from "react";
import { Typography, Card, CardContent, Grid, Box, Stack } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import TranslateIcon from "@mui/icons-material/Translate";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicOffIcon from "@mui/icons-material/PublicOff";
const CountryMainGrid = () => {
  return (
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
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          px: 5,
          py: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "yellow",

          height: { xs: "66vh", sm: "55vh", md: "50vh", lg: "70vh" },
          borderRadius: "5% 20% 5% 20%",
        }}
      >
        a
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          height: { xs: "66vh", sm: "55vh", md: "50vh", lg: "70vh" },
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
            display: "flex",
            bgcolor: "green",
          }}
        >
          <Typography variant="h5">dasd</Typography>
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
                fontSize: { xs: 16, sm: 22, md: 34 },
                fontWeight: 900,
                color: "text.secondary",
              }}
            >
              Sri Lanka
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
                    fontSize: { xs: 14, sm: 20, md: 18 },
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
                    fontSize: { xs: 12, sm: 18, md: 24 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  Sri Jayawardenepura Kotte
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
                    fontSize: { xs: 14, sm: 20, md: 18 },
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
                    fontSize: { xs: 12, sm: 18, md: 24 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  Asia
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
                    fontSize: { xs: 14, sm: 20, md: 15 },
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
                    fontSize: { xs: 12, sm: 18, md: 24 },
                    fontWeight: 300,
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  Southern Asia
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Grid>

      <Grid
        className="glassy2"
        size={{ xs: 12, md: 4 }}
        sx={{
          px: 5,
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "yellow",
          borderRadius: "20% 5% 20% 5%",
          height: { xs: "66vh", sm: "55vh", md: "50vh", lg: "70vh" },
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
              fontSize: { xs: 16, sm: 22, md: 34 },
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
              }}
            >
              <Box
                className="glassy3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  p: 1,
                  boxSizing: "border-box",
                  borderRadius: "50%",
                }}
              >
                <FullscreenIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 20, md: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Area
                </Typography>
              </Box>
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
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                }}
              >
                65,610 KM
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
              }}
            >
              <Box
                className="glassy3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  p: 1,
                  boxSizing: "border-box",
                  borderRadius: "50%",
                }}
              >
                <GroupsIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 20, md: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Population
                </Typography>
              </Box>
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
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                }}
              >
                21M
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
              }}
            >
              <Box
                className="glassy3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  p: 1,
                  boxSizing: "border-box",
                  borderRadius: "50%",
                }}
              >
                <TranslateIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 20, md: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Lang
                </Typography>
              </Box>
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
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                  p: 1,
                  borderRadius: 2,
                  bgcolor: "primary.main",
                }}
              >
                Sinhala
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                  p: 1,
                  borderRadius: 2,
                  bgcolor: "primary.main",
                }}
              >
                Tamil
              </Typography>
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
              }}
            >
              <Box
                className="glassy3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  p: 1,
                  boxSizing: "border-box",
                  borderRadius: "50%",
                }}
              >
                <AttachMoneyIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 20, md: 12 },
                    fontWeight: 400,
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  Currancy
                </Typography>
              </Box>
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
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                Sri Lankan Rupee
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
              }}
            >
              <Box
                className="glassy3"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  p: 1,
                  boxSizing: "border-box",
                  borderRadius: "50%",
                }}
              >
                <PublicOffIcon sx={{ color: "text.secondary" }} />
              </Box>
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
                  fontSize: { xs: 12, sm: 18, md: 20 },
                  fontWeight: 300,
                  color: "text.secondary",
                  textAlign: "left",
                  p: 1,
                  borderRadius: 2,
                  bgcolor: "warning.main",
                }}
              >
                Independent
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CountryMainGrid;

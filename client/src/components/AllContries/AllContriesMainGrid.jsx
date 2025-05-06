import { Box, Grid, Stack, Typography } from "@mui/material";
import AllCountriesTable from "./AllCountriesTable";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState } from "react";

const AllContriesMainGrid = () => {
  const [selectedRegion, setselectedRegion] = useState("");
  const [selectedSort, setselectedSort] = useState("");
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
      data-aos="fade-up"
    >
      {/********************************Grid 1********************************************** */}
      <Grid
        className="glassy2"
        size={{ xs: 12, md: 1 }}
        order={{ xs: 1, md: 1 }}
        sx={{
          px: 0.5,
          py: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "red",
          gap: 2,

          height: { xs: "10vh", sm: "10vh", md: "60vh", lg: "70vh" },
          borderRadius: 10,
        }}
      >
        <Stack
          direction={{ xs: "row", sm: "row", md: "column", lg: "column" }}
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
              fontSize: { xs: 16, sm: 18, md: 22, lg: 24 },
              fontWeight: 900,
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Filter <br />
            By
          </Typography>

          {/*********************1*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedRegion === "Asia" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedRegion("Asia");
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 10, md: 12, lg: 14 },
                fontWeight: 900,
                color: "text.secondary",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Asia
            </Typography>
          </Box>
          {/*********************2*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedRegion === "Europe" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedRegion("Europe");
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 10, md: 12, lg: 14 },
                fontWeight: 900,
                color: "text.secondary",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Europe
            </Typography>
          </Box>
          {/*********************3*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedRegion === "Africa" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedRegion("Africa");
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 10, md: 12, lg: 14 },
                fontWeight: 900,
                color: "text.secondary",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Africa
            </Typography>
          </Box>
          {/*********************4*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedRegion === "Americas" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedRegion("Americas");
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 10, md: 12, lg: 14 },
                fontWeight: 900,
                color: "text.secondary",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              America
            </Typography>
          </Box>
          {/*********************5*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedRegion === "Oceania" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedRegion("Oceania");
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 10, md: 12, lg: 14 },
                fontWeight: 900,
                color: "text.secondary",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Australia
            </Typography>
          </Box>
        </Stack>
      </Grid>

      {/********************************Grid 2********************************************** */}
      <Grid
        size={{ xs: 12, md: 10 }}
        order={{ xs: 3, md: 2 }}
        sx={{
          display: "flex",
          p: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",

          overflowY: "scroll",

          height: { xs: "50vh", sm: "50vh", md: "60vh", lg: "70vh" },
        }}
      >
        <AllCountriesTable region={selectedRegion} sort={selectedSort} />
      </Grid>

      <Grid
        className="glassy2"
        size={{ xs: 12, md: 1 }}
        order={{ xs: 2, md: 3 }}
        sx={{
          px: 0.5,
          py: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "red",
          gap: 2,

          height: { xs: "10vh", sm: "10vh", md: "60vh", lg: "70vh" },
          borderRadius: 10,
        }}
      >
        <Stack
          direction={{ xs: "row", sm: "row", md: "column", lg: "column" }}
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
              fontSize: { xs: 16, sm: 18, md: 22, lg: 24 },
              fontWeight: 900,
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Sort
            <br />
            By
          </Typography>

          {/*********************1*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor: selectedSort === "A-Z" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedSort("A-Z");
            }}
          >
            <SortByAlphaIcon sx={{ color: "text.secondary" }} />
          </Box>
          {/*********************2*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedSort === "Population" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedSort("Population");
            }}
          >
            <GroupsIcon sx={{ color: "text.secondary" }} />
          </Box>
          {/*********************3*************************** */}

          <Box
            className="glassy3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 50, sm: 50, md: 55, lg: 60 },
              height: { xs: 50, sm: 50, md: 55, lg: 60 },

              p: 0.5,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
              "&:active": {
                bgcolor: "primary.main",
                boxShadow: "none",
              },
              "&:focus": { bgcolor: "primary.light" },

              boxSizing: "border-box",
              borderRadius: "50%",
              bgcolor:
                selectedSort === "Area" ? "primary.light" : "transparent",
            }}
            onClick={() => {
              setselectedSort("Area");
            }}
          >
            <FullscreenIcon sx={{ color: "text.secondary" }} />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AllContriesMainGrid;

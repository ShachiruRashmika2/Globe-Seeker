import { Box, Button, Grid, Typography } from "@mui/material";
import CloudGlobe from "./MyGlobe";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";

import LandScaps from "../../assets/Images/LandMarks2.png";

const MainGrid_1 = () => {
  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 2,
        my: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
        width: "100%",
        backgroundImage: `url(${LandScaps})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      data-aos="fade-up"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            animation: "bounce 2s ease-in",
          }}
        >
          <CloudGlobe size={{ xs: 400 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "perspective(36em) rotateX(45deg)",
            position: "relative",
            top: { xs: -100, sm: -130, md: -150, lg: -175 },

            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              top: "60%",
            }}
          >
            <Button
              variant="contained"
              className="glassy"
              onClick={handleScrollClick}
              endIcon={<TravelExploreRoundedIcon />}
              sx={{
                fontSize: { xs: 24, sm: 24, md: 24, lg: 25 },
                px: { xs: 2, sm: 3, md: 4, lg: 5 },
                py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
                borderRadius: "50px",
                width: { xs: 200, sm: 200, md: 300, lg: 300 },
                color: "text.primary",
              }}
            >
              Let's Seek
            </Button>
          </Box>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 100, sm: 120, md: 150, lg: 200 },
              textAlign: "center",
              lineHeight: 0.8,
              color: "primary.main",

              maskImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.69) 0%, rgba(189, 184, 184, 0.06) 86%, rgba(189, 184, 184, 0.001) 92%, rgba(255, 247, 247, 0.0) 100%)",
            }}
          >
            Globe
            <br />
            Seeker
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainGrid_1;

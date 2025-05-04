import { Grid, Typography, Box } from "@mui/material";

import Bottom from "../assets/Images/Bottom.png";
import Logo from "../assets/Images/GlobeseekerLogo1.png";

const BottomBar = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        mt: "5%",
        mx: 0,
        p: 0,
        backgroundImage: `url(${Bottom})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
        height: "100vh",
        alignSelf: "center",
        overflow: "hidden",
        filter: "drop-shadow(0px 8px 24px rgba(149, 157, 165, 0.5))",
      }}
    >
      <Grid
        item
        size={12}
        sx={{
          px: 5,
          py: 0,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          position: "absolute",
          zIndex: 2,
          bottom: 0,
        }}
      >
        <Box
          component={"img"}
          src={Logo}
          alt="Logo"
          sx={{
            width: 400,
            height: "auto",
            filter:
              "drop-shadow(rgba(50, 50, 93, 0.25) 0px 50px 100px -20px),drop-shadow( rgba(0, 0, 0, 0.3) 0px 30px 60px -30px)",
          }}
        />
      </Grid>
      <Grid
        item
        size={12}
        sx={{
          px: 5,
          py: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          px: { xs: 2, sm: 8, md: 10, lg: 20 },
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: 10, sm: 10, md: 13, lg: 13 } }}
        >
          © 2025 <strong>Shachiru Rashmika</strong> AF Assignment 2 | All Rights
          Reserved
        </Typography>
        <Box>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ height: { xs: 15, md: 20 }, mx: 1 }}
          />
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ height: { xs: 15, md: 20 }, mx: 1 }}
          />
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ height: { xs: 15, md: 20 }, mx: 1 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BottomBar;

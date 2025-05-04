import { Box } from "@mui/material";

import MainGrid_1 from "../components/home/MainGrid_1";
import MainGrid_2 from "../components/home/MainGrid_2";
import MainGrid_3 from "../components/home/MainGrid_3";
import MainGrid_4 from "../components/home/MainGrid_4";
import useAOS from "../utils/AOS";
import CloudGlobe from "../components/home/MyGlobe";

const Home = () => {
  useAOS();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <MainGrid_1 />
      <MainGrid_2 />
      <MainGrid_3 />
      <MainGrid_4 />
    </Box>
  );
};

export default Home;

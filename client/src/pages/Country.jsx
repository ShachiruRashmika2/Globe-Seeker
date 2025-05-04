import { Box } from "@mui/material";
import CountryMainGrid from "../components/Country/CountryMainGrid";
import useAOS from "../utils/AOS";
import StandardImageList from "../components/Country/ContryImages";
import MapComponent from "../components/Country/CountryMap";

const Country = () => {
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
      <CountryMainGrid />
      <MapComponent osmLink="https://www.openstreetmap.org/relation/536807" />
    </Box>
  );
};

export default Country;

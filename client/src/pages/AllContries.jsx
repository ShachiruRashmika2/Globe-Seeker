import { Box } from "@mui/material";
import useAOS from "../utils/AOS";
import AllContriesMainGrid from "../components/AllContries/AllContriesMainGrid";

const AllContries = () => {
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
      <AllContriesMainGrid />
    </Box>
  );
};

export default AllContries;

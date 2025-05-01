import { Box } from "@mui/material";

import MainGrid_1 from "../components/home/MainGrid_1";
import useAOS from "../utils/AOS";


const Home = () => {
    useAOS();
    return (

       <Box>
              <MainGrid_1 />
              <MainGrid_1 />
       </Box>
    );
};

export default Home;
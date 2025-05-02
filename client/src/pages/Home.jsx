import { Box } from "@mui/material";

import MainGrid_1 from "../components/home/MainGrid_1";
import MainGrid_2 from "../components/home/MainGrid_2";
import useAOS from "../utils/AOS";


const Home = () => {
    useAOS();
    return (

       <Box>
              <MainGrid_1 />
                <MainGrid_2 />
             
       </Box>
    );
};

export default Home;
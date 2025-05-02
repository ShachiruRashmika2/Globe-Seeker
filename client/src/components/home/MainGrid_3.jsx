import {
    Grid,
    Typography,
    Box,
    Button,
    IconButton,
    Stack,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
} from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import Map from "../../assets/Images/vecteezy_national-map-world_37135749.png";
import Plane from "../../assets/Images/vecteezy_top-view-of-a-airplane-isolated-on-a-transparent-background_53133372.png";

const MainGrid_3 = () => {
    return (
        <Grid
            container
           
            spacing={1}
            sx={{ my: "5%",mt:{lg:21}, mx: "2%", px: 0,  borderRadius: { xs: "5px", sm: "10px", md: "20px" ,position:'relative',overflow:'visible',
             display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',   

    backdropFilter: 'blur(5.1px)',
    WebkitBackdropFilter: 'blur(5.1px)',

            } }}
            data-aos="fade-up"
        >
           <Box
        sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundImage: `url(${Map})`,
            backgroundSize: "80%",

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: -1,

   
            maskImage: "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.71) 0%, rgba(174, 230, 203, 0) 100%)",
        
           
         
        }}
    />
           
            <Grid
                
                spacing={3}
                sx={{ px: 5, py: 4, display: "flex",justifyContent:'space-around', alignItems: "center", flexDirection: "row",width:'100%' ,position:'relative',zIndex:2}}
            >
            <Box >  <Typography
                    sx={{ fontSize: { xs: 14, sm: 20, md: 45 }, fontWeight: "400", color: "text.secondary", textAlign: "left", mt: 2,mb:0, lineHeight: 1.2 }}
                >
                    Seek Countries
                   
                </Typography></Box>
                <Box >
                <Button
                variant="contained"
                color="secondary"
               
                    sx={{ fontSize: { xs: 14, sm: 20, md: 45 }, fontWeight: "800", textAlign: "center", mt: 2,mb:0, lineHeight: 1.2 }}
                >
                     On Map
                     <Box sx={{ml:1}}><TravelExploreRoundedIcon sx={{ fontSize: { xs: 14, sm: 20, md: 35 } }} /></Box>
                   
                </Button>

                </Box>
              
                
            </Grid>
            <Grid
                size={12}
                sx={{ px: 5, py: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,position:'relative',height:400}}
            >


                
              <Box>
                <Box
                 component="img"
                 src={Plane}
                 alt="Land"
                 sx={{
                   position: 'absolute',
                   bottom: {xs:"16%",sm:"-5%",md:0,lg:'-13%'},
                   left: {xs:0,sm:0,md:"18%",lg:"28%"},
                   width: 'auto',
                   height: {lg:'180%',md:'150%',sm:'150%',xs:'120%'},
                   objectFit: 'contain',
                   
                   filter: "drop-shadow(31px 23px 7px rgba(0, 0, 0, 0.3))",
                   animation: 'shadowOpposite 2s ease-in-out infinite ,moveForward 2s ease-in-out infinite',
                 
                 }}
               />
                </Box> 
            
    
            </Grid>
          
        </Grid>
    );
};

export default MainGrid_3;
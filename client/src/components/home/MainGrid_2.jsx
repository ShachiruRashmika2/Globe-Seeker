import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Land  from "../../assets/Images/Flagged.png";
import LandScaps from "../../assets/Images/Landspapes.png";




const MainGrid_2 = () => {
    return (
        <Grid  container spacing={2}   sx={{ my: '5%',mx:'2%' ,px:'2%' ,borderRadius:{xs:'5px',sm:'10px',md:'20px'}}}  data-aos="zoom-in">
        <Grid size={12} sx={{ px: 5, py:0,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

         
       
<Box >
<Typography
    variant="h2"
    sx={{
      fontStyle: "italic", 
      fontWeight: 600,
      lineHeight: 1.6,
      color: "text.secondary", 
      maxWidth: "100%", 
      mx: "auto", 
    }}
  >
   "Discover the World  Explore Every Country!"
  </Typography>



</Box>
<Button
                variant="contained"
                color="secondary"
               
                    sx={{ fontSize: { xs: 14, sm: 20, md: 45 }, fontWeight: "800", textAlign: "center", mt: 2,mb:0, lineHeight: 1.2 }}
                >
                     Explore The LIst
                    
                </Button>



       </Grid>
       <Grid size={12} sx={{ px: 5, py:0,display:'flex',height:500,  backgroundImage: `url(${LandScaps})`,
    backgroundSize: 'contain',        
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat', }}>

         



       </Grid>
      






       
       </Grid>
    );
};

export default MainGrid_2;
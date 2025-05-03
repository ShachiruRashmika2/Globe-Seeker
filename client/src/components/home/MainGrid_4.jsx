import { Box, Button, Grid, Typography } from "@mui/material";
import LandScaps from '../../assets/Images/ChatGPT Image May 3, 2025, 11_29_27 PM.png';
import flags from '../../assets/Images/vecteezy_all-countries-flag_30632501.jpg';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';

const MainGrid_4 = () => {
    return (
     <Grid container spacing={2}  sx={{ my: '5%', mx: '2%', p:0, borderRadius: { xs: '5px', sm: '10px', md: '0px 80px'} ,width: '100%'  ,position:'relative',height:300,boxShadow:' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px' }} > 
    
     
 <Box sx={{position:'absolute',width:'100%',height:'100%',top:0,left:0,backgroundImage:`url(${flags})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',filter:'blur(5px)',zIndex:1,borderRadius: { xs: '5px', sm: '10px', md: '0px 80px'},
    maskImage: "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.71) 0%, rgba(174, 230, 203, 0) 100%)",

}}/>

 
      <Grid item size={6} sx={{ px: 5, py: 0, display: 'flex', gap: {xs:2,lg:10},justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row',zIndex:2}}>
      <Typography
      sx={{
        fontSize: { xs: 14, sm: 20, md: 25,lg:35 },
        fontWeight: "400",
        color: "text.secondary",
        textAlign: "left",
        fontStyle: "italic",
        mt: 2,
        mb: 0,
        lineHeight: 1.2,
      }}
    >
 "Every flag tells a story <br/>discover the world,<br/> one symbol at a time."
    </Typography>

    <Button
      variant="contained"
      color="secondary"
      sx={{
        fontSize: { xs: 14, sm: 20, md: 30,lg:45 },
        fontWeight: "800",
        textAlign: "center",
        mt: 2,
        mb: 0,
        lineHeight: 1.2,
       
      }}
    >
      On Map
      <Box sx={{ ml: 1 }}>
        <FlagRoundedIcon sx={{ fontSize: { xs: 14, sm: 20, md: 35 } }} />
      </Box>
    </Button>
  </Grid>

 
    
      
      <Grid item  size={6} sx={{ px: 5, py: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',position:'relative',overflow:'visible',zIndex:2}}>
      <Box 
    component={'img'} 
    src={LandScaps} 
    alt="LandScaps" 
    sx={{ 
      width: { xs: 200, sm: 300, md:'100%', lg: '80%' }, 
      height: 'auto',
      position: 'absolute',
        filter: 'drop-shadow(0px 30px 60px rgba(50, 50, 93, 0.25)) drop-shadow(0px 18px 36px rgba(0, 0, 0, 0.3))',
      bottom: {md:-50,lg:-100}
    }}
  />
      </Grid>
      
      
      
      </Grid>    
    );
};

export default MainGrid_4;
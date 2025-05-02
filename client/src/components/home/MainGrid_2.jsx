import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Land  from "../../assets/Images/Flagged.png";
import LandScaps from "../../assets/Images/Landspapes.png";




const MainGrid_2 = () => {
    return (
        <Grid  container spacing={2}   sx={{ my: '5%',mx:'2%' ,px:'2%' ,borderRadius:{xs:'5px',sm:'10px',md:'20px'},height:{xs:100,sm:200,md:280,lg:300},  backgroundImage: `url(${LandScaps})`,
        backgroundSize: 'cover',         // Optional but recommended
        backgroundPosition: 'center',    // Optional
        backgroundRepeat: 'no-repeat', }}  data-aos="zoom-in">
        <Grid size={4} sx={{ px: 5, py:0,display:'flex'}}>

          <Box sx={{bottom:'10%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',overflow:'visible',backgroundColor:'#00bcd4',width:"100%",height:{xs:'40%',sm:'50%',md:'60%',lg:'80%'},borderRadius:{xs:'5px',sm:'10px',md:'20px'},position:'relative'}}>
        

<Box sx={{  position: 'absolute',  
         bottom:'0%',
          zIndex:3, 
          width: { xs: 30,sm:80, md: 150 },
            height: { xs: 30,sm:80, md: 150 },
            display:{xs:'none',sm:'flex',md:'flex'}
            ,justifyContent:'center'
         
          }}>
     

        </Box>

        <IconButton
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              width: { xs: 20, sm: 50, md: 80 },
              height: { xs: 20, sm: 50, md: 80 },
              
              position: 'absolute',
              left: '-5%',
              bottom: '-5%',
              boxShadow: '0px 4px 20px rgba(17, 12, 46, 0.2)',
              transition: 'all 0.3s ease-in-out',
              border:'2px solid white',
              zIndex:4,

            
              
              '&:hover': {backgroundColor:'primary.main', color:'white',animation:'bounce 1s ease-in-out forwards'},
            }}
            size="large"
          >
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
          </Box>




       </Grid>
       <Grid size={4} sx={{ px: 0,py:5 ,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
       
        <Typography sx={{ fontSize: { xs: 10, sm:12,md: 25 }, fontWeight: '800',color:'text.secondary', textAlign: 'left', my: 3 }}>
           Your travel companion that carries<br/>
        all the information 

        </Typography>
       <Box sx={{justifyContent:'center',alignItems:'center',display:'flex', transform:{md:'translateY(-20%)'},position:'relative'}}>
        
        
        
        </Box>

      
     

       </Grid>






       <Grid size={4} sx={{ p: 0,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column' }}>
        <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width:'100%',height:'100%',overflow:'visible',position  :'relative'}}
        
        >
  <Box
  component="img"
  src={Land}
  alt="Land"
  sx={{
    position: 'absolute',
    bottom: {xs:56,sm:-20,md:-40,lg:-80},
    width: 'auto',
    height: {lg:'190%',md:'150%',sm:'150%',xs:'100%'},
    objectFit: 'contain',
    zIndex: 3,
    filter: "drop-shadow(31px 23px 7px rgba(0, 0, 0, 0.3))",
  
  }}
/>

        
      
       
        </Box>

        
        </Grid>
       </Grid>
    );
};

export default MainGrid_2;
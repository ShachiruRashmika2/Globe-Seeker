import { Box, Button, Grid, Typography } from "@mui/material";
import CloudGlobe from "./MyGlobe";
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';

const MainGrid_1 = () => {
    return (
      <Grid container spacing={2} sx={{ px: 2, my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',position:'relative' }}>
         <Box sx={{position:'relative',zIndex:2,animation:'bounce 2s ease-in'}}><CloudGlobe /></Box> 
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'perspective(36em) rotateX(45deg)',
              position: 'relative',
              top: { xs: 0, sm: 0, md: 0, lg: -175 },
              flexDirection: 'column',
             
              
            }}
          ><Box sx={{ 
            position: 'absolute',
            zIndex: 2,
            top:"60%",}}>
<Button
                variant="contained"
                className="glassy"
                endIcon={<TravelExploreRoundedIcon  />}
                sx={{
                    fontSize: { xs: 12, sm: 15, md: 20, lg: 25 },
                    px: { xs: 2, sm: 3, md: 4, lg: 5 },
                    py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
                    borderRadius: '50px',
                    width: { xs: 100, sm: 150, md: 200, lg: 300 },
                    color: 'secondary.main',
                    
                    
               
                    '&:hover': {
                    backgroundColor: 'white',
                   
                  
                   
                    },
                }}>Let's Seek</Button>
          </Box>
            
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: 20, sm: 25, md: 30, lg: 200 },
                textAlign: 'center',
                lineHeight: 0.8,
            color:'primary.main',    
            
                maskImage:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.69) 0%, rgba(189, 184, 184, 0.06) 86%, rgba(189, 184, 184, 0.001) 92%, rgba(255, 247, 247, 0.0) 100%)',
              }}
            >
              Globe
              <br />
              Seeker
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
};

export default MainGrid_1;
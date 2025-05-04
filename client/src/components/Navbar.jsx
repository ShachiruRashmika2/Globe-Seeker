import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GlobeSeekerLogo from '../assets/Images/GlobeseekerLogo1.png';
import { Link as RouterLink } from 'react-router-dom';
const pages = [{name:'Home',path:'/'},{name:'Countries',path:'/country'}, {name:'Flags',path:'/flags'}, {name:'Map',path:'/sep/map'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
    
      position="static"
      elevation={0}
      sx={{
        height: {
          xs: 50,
          sm: 60,
          md: 70,
          lg: 80,
        },
        background: 'transparent',
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Toolbar
          disableGutters
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              flexGrow: 0,
            }}
          >
              <Box component={'img'} alt='logo' src={GlobeSeekerLogo} sx={{width:'200px'}}/>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
           
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none'} }}
              PaperProps={{
                sx: {
                  background:' rgba(255, 196, 0, 0.248)',

backdropFilter: 'blur(5.1px)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
               <Typography
  component={RouterLink}
  to={page.path}
  sx={{
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      
      color: 'inherit',
    },
  }}
>
  {page.name}
</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none',justifyContent:'center',alignItems:'center' }, mr: 1 }}>
          <img alt='logo' src={GlobeSeekerLogo} style={{width:'200px'}}/>
          </Box>

          <Box
            sx={{
              flexGrow: 3,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button

                variant="text"
                component={RouterLink} to={page.path}
                color="primary"
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  display: 'block',
                  fontSize: { md: 18 },
                  fontWeight: '600',
                  color: 'text.primary',
                  textTransform: 'none',
                  textAlign: 'center',
                  p: 2,
                  borderRadius: 24,
                  width: 150,
                  '&:hover': { backgroundColor: 'primary.main' },
                }}
              >
                {page.name}
              
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {xs:'none',sm:'flex'}, justifyContent: 'flex-end' }}>
          <IconButton aria-label="Mode" size="large">
              <DarkModeIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="search" size="large">
              <SearchTwoToneIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="profile" size="large">
              <Person2RoundedIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
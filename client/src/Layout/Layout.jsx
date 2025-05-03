import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
const Layout = () => {
    return (
        <Box >
            <Navbar />
                <Outlet />
           
        </Box>
    );
};

export default Layout;
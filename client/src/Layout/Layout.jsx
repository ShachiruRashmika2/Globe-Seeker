import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import BottomBar from "../components/BottomBar";
const Layout = ({ mode }) => {
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
      <Navbar mode={mode} />
      <Outlet />
      <BottomBar />
    </Box>
  );
};

export default Layout;

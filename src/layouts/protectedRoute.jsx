/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Box, Drawer } from "@mui/material";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Drawer
          variant="permanent"
          sx={{
            width: 250,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 250,
              boxSizing: "border-box",
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 6 }}>
          {token ? <Outlet /> : <Navigate to="/" />}
        </Box>
      </Box>
    </>
  );
};

export default ProtectedRoute;

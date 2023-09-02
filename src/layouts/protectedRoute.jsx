/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Box, Drawer } from "@mui/material";

const ProtectedRoute = () => {
  const { auth } = useAuth();

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
          {auth?.idusuario ? <Outlet /> : <Navigate to="/" />}
        </Box>
      </Box>
    </>
  );
};

export default ProtectedRoute;

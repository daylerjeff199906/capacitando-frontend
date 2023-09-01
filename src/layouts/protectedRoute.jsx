/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Box, Drawer } from "@mui/material";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return "Cargando...";
  }

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
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt:6 }}>
          {auth?.idusuario ? <Outlet /> : <Navigate to="/" />}
        </Box>
      </Box>
      {/* <Navbar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={10}>
        
        </Grid>
      </Grid> */}
    </>
  );
};

export default ProtectedRoute;

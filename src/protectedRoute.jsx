/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Grid } from "@mui/material";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return "Cargando...";
  }
  return (
    <>
      <Navbar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          {auth.usersData ? <Outlet /> : <Navigate to="/" />}
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedRoute;

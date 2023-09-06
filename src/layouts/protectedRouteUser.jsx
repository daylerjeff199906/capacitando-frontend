/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import useAuth from "../hooks/useAuth";

const ProtectedRouteUser = () => {
  const { auth } = useAuth();
  return (
    <>
      <NavBar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={12}>
          {auth.rol ? <Outlet /> : <Navigate to="/" />}
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedRouteUser;

/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";

const ProtectedRouteUser = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={12}>
          {token ? <Outlet /> : <Navigate to="/" />}
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedRouteUser;

/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Grid } from "@mui/material";

const ProtectedRouteUser = () => {
  const { auth } = useAuth();

  // if (loading) {
  //   return "Cargando...";
  // }

  return (
    <>
      <Grid container spacing={4} sx={{ paddingTop: 8 }}>
        <Grid item xs={12}>
          {auth?.idusuario ? <Outlet /> : <Navigate to="/" />}
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedRouteUser;

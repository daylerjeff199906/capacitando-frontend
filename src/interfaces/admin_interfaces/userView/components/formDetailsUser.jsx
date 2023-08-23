import { Box, Grid, Typography } from "@mui/material";

const FormDetailsUser = () => {
  return (
    <>
      <Box color={"#000000"}>
        <Grid container spacing={2} >
          <Grid item xs={6}>
            <Typography>Código</Typography>
            <Typography>N° de DNI</Typography>
            <Typography>Tipo de usuario</Typography>
            <Typography>Nombre</Typography>
            <Typography>Apellido</Typography>
            <Typography>Correo</Typography>
            <Typography>Contraseña:</Typography>
            <Typography>Fecha de nacimiento</Typography>
            <Typography>Estado</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>:0001</Typography>
            <Typography>:12345678</Typography>
            <Typography>:Administrador</Typography>
            <Typography>:Carlos</Typography>
            <Typography>:Alvarez</Typography>
            <Typography>:asdasd@hotmail.com</Typography>
            <Typography>:123456</Typography>
            <Typography>:01/01/2000</Typography>
            <Typography>:Activo</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FormDetailsUser;

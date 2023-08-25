import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const FormDetailsUser = () => {
  return (
    <>
      <Box color={"#000000"}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography>Nombre(s) y apellidos</Typography>
              <Typography>N° de DNI</Typography>
              <Typography>Correo</Typography>
              <Typography>Telefono</Typography>
              <Typography>Dirección</Typography>
              <Typography>Carrera</Typography>
              <Typography>Tipo de usuario</Typography>
              <Typography>Perfil</Typography>
              <Typography>Estado</Typography>
              <Typography>Cursos asignados</Typography>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={1}>
              <Typography>:Administrador</Typography>
              <Typography>:Carlos</Typography>
              <Typography>:Alvarez</Typography>
              <Typography>:asdasd@hotmail.com</Typography>
              <Typography>:123456</Typography>
              <Typography>:01/01/2000</Typography>
              <Typography>:Lorem</Typography>
              <Typography>:Activo</Typography>
              <Typography>:Activo</Typography>
              <Typography>: Curso 1</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{paddingTop:2}}>
          <Grid item xs={12}> 
            <Stack spacing={1} direction={"row"} justifyContent={"center"}>
              <Button variant="contained" color="success">
                Editar
              </Button>
              <Button variant="contained" color="error">
                Eliminar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FormDetailsUser;

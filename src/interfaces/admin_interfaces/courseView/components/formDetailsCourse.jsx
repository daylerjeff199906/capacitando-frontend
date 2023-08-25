import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const FormDetailsCourse = () => {
  return (
    <>
      <Box color={"#000000"}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Typography>Nombre de curso</Typography>
              <Typography>Descripción corta</Typography>
              <Typography>url de video</Typography>
              <Typography>Estado</Typography>
              <Typography>Cantidad de sesiones</Typography>
              <Typography>Cantidad de clases</Typography>
              <Typography>Docente(s) asignado(s)</Typography>
              <Typography>Alumnos(s) asignados(s)</Typography>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={1}>
              <Typography>:0001</Typography>
              <Typography>:12345678</Typography>
              <Typography>:Administrador</Typography>
              <Typography>:Carlos</Typography>
              <Typography>:20</Typography>
              <Typography>:Carlos</Typography>
              <Typography>:Carlos</Typography>
              <Typography>:Alvarez</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          <Grid item xs={12}>
            <Stack spacing={1} direction={"row"} justifyContent={"center"}>
              <Button variant="contained" color="success">
                Editar
              </Button>
              <Button variant="contained" color="error">
                Eliminar
              </Button>
              <Button variant="contained" color="info">
                Asignar contenido
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FormDetailsCourse;

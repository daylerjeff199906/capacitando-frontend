import { Box, Divider, Typography } from "@mui/material";

const SideBarStudent = () => {
  return (
    <>
      <Box bgcolor={"#FFFFFF"} borderRadius={4} padding={3}>
        <Typography
          variant="h5"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Detalles del curso
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="h6"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          fontWeight={900}
          gutterBottom
        >
          Nombre del curso
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          Descripción del curso
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          fontWeight={900}
          gutterBottom
        >
          Doncente(s):
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          * Doncente 1
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="h6"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Contenido
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          Introducción
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          Sesion 1
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          Sesion 2
        </Typography>
      </Box>
    </>
  );
};
export default SideBarStudent;

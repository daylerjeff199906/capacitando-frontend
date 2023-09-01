import * as React from "react";
import { Typography, TextField, Box, Button } from "@mui/material";

const FormAddSection = () => {
  const [nombre_sesion, setNombreSesion] = React.useState("");
  const [descripcion_sesion, setDescripcionSesion] = React.useState("");

  return (
    <>
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Título de sesión
      </Typography>
      <TextField
        size="small"
        placeholder="Ingrese el título de sesión ..."
        fullWidth
        value={nombre_sesion}
        onChange={(e) => setNombreSesion(e.target.value)}
      />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Descripción de sesión
      </Typography>
      <TextField
        size="small"
        placeholder="Opcional ..."
        fullWidth
        multiline
        value={descripcion_sesion}
        onChange={(e) => setDescripcionSesion(e.target.value)}
        rows={4}
      />
      <Box marginTop={2}>
        <Button variant="contained" component="label">
          Guardar
        </Button>
      </Box>
    </>
  );
};
export default FormAddSection;

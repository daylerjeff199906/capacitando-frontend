import * as React from "react";
import { Typography, TextField, Box, Button } from "@mui/material";

import useContent from "../../../../hooks/useContent";

const FormAddSection = () => {
  const [nombre_sesion, setNombreSesion] = React.useState("");
  const [descripcion, setDescripcionSesion] = React.useState("");

  const { saveSesion } = useContent();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sesion = {

      nombre_sesion,
      descripcion,
    };
    saveSesion(sesion);
  };

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
        value={descripcion}
        onChange={(e) => setDescripcionSesion(e.target.value)}
        rows={4}
      />
      <Box marginTop={2}>
        <Button variant="contained" component="label" onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </>
  );
};
export default FormAddSection;

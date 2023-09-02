/* eslint-disable react/prop-types */
import * as React from "react";
import { Typography, TextField, Box, Button, Snackbar } from "@mui/material";

import useContent from "../../../../hooks/useContent";
import { useParams } from "react-router-dom";

const FormAddSection = () => {
  const [idcurso, setIdCurso] = React.useState("");
  const [nombre_sesion, setNombreSesion] = React.useState("");
  const [descripcion, setDescripcionSesion] = React.useState("");

  const [messageContent, setMessageContent] = React.useState("");

  const { saveSesion, message, getSesions, sesionId, clearSesionId } =
    useContent();
  const id = useParams();
  React.useEffect(() => {
    setIdCurso(id.id);
  }, [id]);

  React.useEffect(() => {
    if (sesionId?.idsesion) {
      setNombreSesion(sesionId.nombre_sesion);
      setDescripcionSesion(sesionId.descripcion);
    }
  }, [sesionId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre_sesion].includes("")) {
      setMessageContent("Todos los campos son obligatorios");
      return;
    }

    if (sesionId?.idsesion) {
      saveSesion({
        idsesion: sesionId.idsesion,
        nombre_sesion,
        descripcion,
      });
    } else {
      saveSesion({
        idcurso,
        nombre_sesion,
        descripcion,
      });
    }

    setMessageContent(message);
    getSesions(idcurso);
    clearTextField();
  };

  const clearTextField = () => {
    setNombreSesion("");
    setDescripcionSesion("");
    clearSesionId();
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
      <Box marginTop={2} display={"flex"} justifyContent={"right"}>
        <Button variant="contained" component="label" onClick={handleSubmit}>
          Guardar
        </Button>
        <Button
          variant="contained"
          component="label"
          onClick={clearTextField}
          color="error"
          sx={{ marginLeft: 1 }}
        >
          Cancelar
        </Button>
      </Box>
      {/* <Snackbar
        open={messageContent ? true : false}
        message={messageContent}
        autoHideDuration={3000}
        onClose={() => setMessageContent("")}
      /> */}
    </>
  );
};
export default FormAddSection;

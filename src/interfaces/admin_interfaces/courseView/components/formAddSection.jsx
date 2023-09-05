/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";

import { useParams } from "react-router-dom";
import useSesion from "../../../../hooks/useSesion";

const FormAddSection = () => {
  const [idcurso, setIdCurso] = React.useState("");
  const [nombre_sesion, setNombreSesion] = React.useState("");
  const [descripcion, setDescripcionSesion] = React.useState("");
  const [msgError, setMsgError] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const { saveSesion, getSesions, sesionId, clearSesionId, message } =
    useSesion();
  const id = useParams();

  React.useEffect(() => {
    setIdCurso(id.id);
  }, [id]);

  React.useEffect(() => {
    if (idcurso) {
      getSesions(idcurso);
    }
  }, [idcurso]);

  React.useEffect(() => {
    message &&
      setTimeout(() => {
        setMsg("");
      }, 3000);
  }, [message]);

  React.useEffect(() => {
    if (sesionId?.idsesion) {
      setNombreSesion(sesionId.nombre_sesion);
      setDescripcionSesion(sesionId.descripcion);
    }
  }, [sesionId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre_sesion].includes("")) {
      setMsgError("Todos los campos son obligatorios");
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
    // setMessageContent(message);
    getSesions(idcurso);
    clearTextField();
  };

  const clearTextField = () => {
    setNombreSesion("");
    setDescripcionSesion("");
    clearSesionId();
    setMsgError("");
  };

  return (
    <>
      <Typography variant="h6" paddingY={2}>
        {sesionId?.idsesion ? "Editar sesión" : "Añadir sesión"}
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Alert
        severity="error"
        sx={{ display: msgError ? "flex" : "none", marginBottom: 2 }}
        open={msgError ? true : false}
        autoHideDuration={3000}
      >
        {msgError}
      </Alert>

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
        placeholder="Descripción de la sesión"
        fullWidth
        multiline
        value={descripcion}
        onChange={(e) => setDescripcionSesion(e.target.value)}
        rows={4}
      />
      <Box marginTop={2} display={"flex"} justifyContent={"right"}>
        <Button variant="contained" component="label" onClick={handleSubmit}>
          {sesionId?.idsesion ? "Editar" : "Añadir"}
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
      <Snackbar
        open={msg ? true : false}
        message={message}
        autoHideDuration={3000}
        onClose={() => setMsg("")}
      />
    </>
  );
};
export default FormAddSection;

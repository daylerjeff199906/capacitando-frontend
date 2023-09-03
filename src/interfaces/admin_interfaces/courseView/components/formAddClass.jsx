/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material";

import useClass from "../../../../hooks/useClass";
import useSesion from "../../../../hooks/useSesion";

const FormAddClass = () => {
  // const [idcontenido, setIdcontenido] = React.useState("");
  const [detailSesion, setDetailSesion] = React.useState({});

  const [titulo, setTitulo] = React.useState("");
  const [url_video, setUrlVideo] = React.useState("");

  const { getDetailsSesion } = useSesion();
  const { saveClass, idSesion, clearIdSesion, clearClases } = useClass();

  React.useEffect(() => {
    const fetchData = async () => {
      const sesionData = await getDetailsSesion(idSesion);
      setDetailSesion(sesionData);
    };
    fetchData();
  }, [idSesion, getDetailsSesion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, url_video].includes("")) {
      // setMessageContent("Todos los campos son obligatorios");
      return;
    }

    saveClass({
      idsesion: idSesion,
      titulo,
      url_video,
      minutos_video: 2,
    });
    // setMessageContent(message);
    setTitulo("");
    setUrlVideo("");
  };

  const clearTextField = () => {
    setTitulo("");
    setUrlVideo("");
    clearIdSesion();
  };

  const handlecancel = () => {
    clearTextField();
    clearClases();
  };

  React.useEffect(() => {
    return () => {
      clearTextField();
      clearClases();
    };
  }, []);

  return (
    <>
      {detailSesion === undefined ? (
        <Alert severity="warning">
          <AlertTitle>Seleccionar sesión</AlertTitle>
          <Typography variant="body2" fontFamily={"Poppins"}>
            Selecciona en añadir contenido en la lista de sesiones
          </Typography>
        </Alert>
      ) : (
        <Box>
          <Typography variant="h6" paddingTop={1} fontFamily={"Poppins"}>
            Sesión: {detailSesion.nombre_sesion}
          </Typography>
          <Typography
            variant="body1"
            marginBottom={1}
            color={"GrayText"}
            fontFamily={"poppins"}
          >
            Añadir clase
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
        </Box>
      )}

      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Título de la clase
      </Typography>
      <TextField
        size="small"
        placeholder="Ingrese el título de clase ..."
        fullWidth
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        disabled={idSesion === "" || detailSesion === undefined ? true : false}
      />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Url del video
      </Typography>
      <TextField
        size="small"
        placeholder="Ingresar url del video ..."
        fullWidth
        value={url_video}
        onChange={(e) => setUrlVideo(e.target.value)}
        disabled={idSesion === "" || detailSesion === undefined ? true : false}
      />
      <Box marginTop={2} display={"flex"} justifyContent="right">
        <Button
          variant="contained"
          component="label"
          onClick={handleSubmit}
          disabled={
            idSesion === "" || detailSesion === undefined ? true : false
          }
        >
          Añadir clase
        </Button>
        <Button
          variant="contained"
          component="label"
          onClick={handlecancel}
          color="error"
          sx={{ marginLeft: 2 }}
          disabled={
            idSesion === "" || detailSesion === undefined ? true : false
          }
        >
          Cancelar
        </Button>
      </Box>
    </>
  );
};
export default FormAddClass;

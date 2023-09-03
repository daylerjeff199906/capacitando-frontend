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
  const [idcontenido, setIdcontenido] = React.useState("");
  const [detailSesion, setDetailSesion] = React.useState({});

  const [titulo, setTitulo] = React.useState("");
  const [url_video, setUrlVideo] = React.useState("");

  const { getDetailsSesion } = useSesion();
  const {
    saveClass,
    idSesion,
    clearIdSesion,
    clearClases,
    claseId,
    clearClaseId,
  } = useClass();

  React.useEffect(() => {
    const fetchData = async () => {
      const sesionData = await getDetailsSesion(idSesion);
      setDetailSesion(sesionData);
    };
    fetchData();
  }, [idSesion, getDetailsSesion]);

  React.useEffect(() => {
    setIdcontenido(claseId?.idcontenido);
  }, [claseId]);

  React.useEffect(() => {
    if (claseId?.idcontenido) {
      setTitulo(claseId.titulo);
      setUrlVideo(claseId.url_video);
    }
  }, [claseId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, url_video].includes("")) {
      // setMessageContent("Todos los campos son obligatorios");
      return;
    }

    if (claseId?.idcontenido) {
      saveClass({
        idcontenido: claseId.idcontenido,
        idsesion: idSesion,
        titulo,
        url_video,
        minutos_video: 2,
      });
    } else {
      saveClass({
        idsesion: idSesion,
        titulo,
        url_video,
        minutos_video: 2,
      });
    }

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
    clearClaseId();
  };

  React.useEffect(() => {
    return () => {
      clearTextField();
      clearClases();
      clearClaseId();
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
            {idcontenido !== "" ? "Editar clase" : "Añadir clase"}
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
          {idcontenido !== "" ? "Editar" : "Añadir"}
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

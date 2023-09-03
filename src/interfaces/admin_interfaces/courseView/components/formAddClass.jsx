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
  Chip,
  Tooltip,
} from "@mui/material";

import useClass from "../../../../hooks/useClass";
import useSesion from "../../../../hooks/useSesion";
import { Delete } from "@mui/icons-material";

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
    return () => {
      clearTextField();
      clearClases();
      clearClaseId();
      setIdcontenido("");
    };
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const sesionData = await getDetailsSesion(idSesion);
      setDetailSesion(sesionData);
    };
    fetchData();
  }, [idSesion, getDetailsSesion]);

  React.useEffect(() => {
    if (claseId?.idcontenido) {
      setIdcontenido(claseId?.idcontenido);
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
    // clearIdSesion();
    clearClaseId();
    setIdcontenido("");
  };

  const handlecancel = () => {
    clearTextField();
    clearClaseId();
    clearClases();
    clearIdSesion();
  };

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
            {claseId.idcontenido !== "" ? "Editar clase" : "Añadir clase"}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
        </Box>
      )}

      <Box display={"flex"} justifyContent={"space-between"} pt={1}>
        <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
          Título de la clase
        </Typography>
        {idcontenido !== "" ? (
          <Tooltip title="Limpiar campos">
            <Chip
              label="Limpiar"
              color="success"
              size="small"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              icon={<Delete />}
              onClick={clearTextField}
            />
          </Tooltip>
        ) : null}
      </Box>
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
          {claseId.idcontenido !== "" ? "Editar" : "Añadir"}
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

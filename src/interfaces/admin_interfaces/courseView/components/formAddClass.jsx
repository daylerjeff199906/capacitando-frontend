import * as React from "react";
import { Typography, TextField, Box, Button, Divider } from "@mui/material";

import useClass from "../../../../hooks/useClass";
import useSesion from "../../../../hooks/useSesion";

const FormAddClass = () => {
  const [idcontenido, setIdcontenido] = React.useState("");
  const [detailSesion, setDetailSesion] = React.useState({});

  const [titulo, setTitulo] = React.useState("");
  const [url_video, setUrlVideo] = React.useState("");

  const { getDetailsSesion } = useSesion();
  const { saveClass, idSesion } = useClass();

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
      idcontenido,
      titulo,
      url_video,
    });
    // setMessageContent(message);
    clearTextField();
  };

  const clearTextField = () => {
    setTitulo("");
    setUrlVideo("");
  };

  return (
    <>
      {detailSesion === undefined ? (
        <Typography variant="h6" paddingY={1} fontFamily={"Poppins"}>
          Selecciona una sesión
        </Typography>
      ) : (
        <Typography variant="h6" paddingY={1} fontFamily={"Poppins"}>
          Sesión: {detailSesion.nombre_sesion}
        </Typography>
      )}
      <Typography variant="body1" marginBottom={1} >Añadir clase</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Título de la clase
      </Typography>
      <TextField
        size="small"
        placeholder="Ingrese el título de clase ..."
        fullWidth
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
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
      />
      <Box marginTop={2} display={"flex"} justifyContent="right">
        <Button variant="contained" component="label" onClick={handleSubmit}>
          Añadir clase
        </Button>
        <Button
          variant="contained"
          component="label"
          onClick={clearTextField}
          color="error"
          sx={{ marginLeft: 2 }}
        >
          Cancelar
        </Button>
      </Box>
    </>
  );
};
export default FormAddClass;

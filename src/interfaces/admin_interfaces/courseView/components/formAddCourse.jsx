/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  MenuItem,
  Alert,
  Box,
  Divider,
  Button,
  Stack,
  TextField,
  Typography,
  Select,
  Snackbar,
} from "@mui/material";
import { Link } from "react-router-dom";

import useCategory from "../../../../hooks/useCategory";
import useCourse from "../../../../hooks/useCourse";

  // import InputImage from "./InputImage";

const FormAddCourse = () => {
  const [idcurso, setId] = useState(null);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");

  const idRol = localStorage.getItem("rol");
  // const [selectedFile, setSelectedFile] = useState(null);

  const { getCategory, categorys } = useCategory();
  const { saveCourses, courseId, clearCourseId, message } = useCourse();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url_video_intro, setUrl_video_intro] = useState("");
  const [idcategoria, setIdcategoria] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (courseId?.idcurso) {
      console.log(courseId.idcurso);
      setTitulo(courseId.titulo);
      setDescripcion(courseId.descripcion);
      setUrl_video_intro(courseId.url_video_intro);
      setIdcategoria(courseId.idcategoria);
      setId(courseId.idcurso);
    }
  }, [courseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, descripcion, url_video_intro, idcategoria].includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError(null);

    if (courseId?.idcurso) {
      saveCourses({
        idcurso,
        titulo,
        descripcion,
        url_video_intro,
        idcategoria,
      });
    } else {
      saveCourses({
        titulo,
        descripcion,
        url_video_intro,
        idcategoria,
      });
    }
    clearTextFields();
  };

  useEffect(() => {
    if (message) {
      setMsg(message);
    }
  }, [message]);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };
  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };
  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   setSelectedFile(event.dataTransfer.files[0]);
  // };

  const clearTextFields = () => {
    setTitulo("");
    setDescripcion("");
    setUrl_video_intro("");
    setIdcategoria("");
    setId(null);
    clearCourseId();
  };

  useEffect(() => {
    return () => {
      clearTextFields();
    };
  }, []);

  useEffect(() => {
    const selectedCategory = categorys.find(
      (category) => category.idcategoria === idcurso
    );
    if (selectedCategory) {
      setIdcategoria(selectedCategory.categoria);
    }
  }, [idcurso, categorys]);

  return (
    <>
      <Typography variant="h6" paddingY={1}>
        {idcurso ? "Editar curso" : "Agregar curso"}
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}
      <fieldset
        style={{
          border: "0",
        }}
        disabled={idRol === "1" ? false : true}
      >
        <Stack spacing={1} component={"form"}>
          <Typography variant="body1">Título</Typography>
          <TextField
            size="small"
            placeholder="Ingrese el título del curso ..."
            fullWidth
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <Typography variant="body1">Categoría</Typography>
          <Select
            fullWidth
            value={idcategoria}
            onChange={(e) => setIdcategoria(e.target.value)}
            size="small"
          >
            {categorys.map((category) => (
              <MenuItem key={category.idcategoria} value={category.idcategoria}>
                {category.categoria}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="body1">Descripción corta</Typography>
          <TextField
            size="small"
            placeholder="Esta sección aparecerá junto a la imagen de portada, redacte una breve descripción del curso resaltando lo más importante..."
            fullWidth
            multiline
            rows={4}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <Typography variant="body1">Url de video de presentación</Typography>
          <TextField
            size="small"
            placeholder="Ingrese el título del curso ..."
            fullWidth
            value={url_video_intro}
            onChange={(e) => setUrl_video_intro(e.target.value)}
          />
          {/* <Typography variant="body1">Subir imagen de portada</Typography>
          <InputImage /> */}
          {/* <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="fileInput"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput">
          <Button
            variant="contained"
            component="span"
            size="small"
            color="success"
          >
            Subir imagen
          </Button>
        </label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            border: "1px dashed #ccc",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          Arrastra y suelta la imagen aquí
        </div> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleSubmit}>
                {idcurso ? "Guardar cambios" : "Agregar curso"}
              </Button>
              <Link to="/dashboard/courses" style={{ textDecoration: "none" }}>
                <Button variant="contained" color={"error"}>
                  Cancelar
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </fieldset>
      <Snackbar
        open={msg ? true : false}
        autoHideDuration={3000}
        onClose={() => setMsg("")}
        message={msg}
      />
    </>
  );
};
export default FormAddCourse;

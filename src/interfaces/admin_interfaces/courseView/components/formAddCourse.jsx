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
} from "@mui/material";
import { Link } from "react-router-dom";

import useCategory from "../../../../hooks/useCategory";
import useCourse from "../../../../hooks/useCourse";

const FormAddCourse = () => {
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const { categorys } = useCategory();
  const { saveCourses, courseId, clearCourseId } = useCourse();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url_video_intro, setUrl_video_intro] = useState("");
  const [idcategoria, setIdcategoria] = useState("");

  useEffect(() => {
    if (courseId?.titulo) {
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
    saveCourses({
      id,
      titulo,
      descripcion,
      url_video_intro,
      idcategoria,
    });

    clearTextFields();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

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
      (category) => category.idcategoria === id
    );
    if (selectedCategory) {
      setIdcategoria(selectedCategory.categoria);
    }
  }, [id, categorys]);

  return (
    <>
      <Typography variant="h6" paddingY={1}>
        {id ? "Editar curso" : "Agregar curso"}
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}
      <Stack spacing={1}>
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
        <Typography variant="body1">Subir imagen de portada</Typography>
        <input
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
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSubmit}>
              {id ? "Guardar cambios" : "Agregar curso"}
            </Button>
            <Link to="/dashboard/courses" style={{ textDecoration: "none" }}>
              <Button variant="contained" color={"error"}>
                Cancelar
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export default FormAddCourse;

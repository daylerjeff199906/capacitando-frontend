import { useState } from "react";
import {
  Autocomplete,
  Alert,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Add } from "@mui/icons-material";

import useUsers from "../../../../hooks/useUsers";
import useCategory from "../../../../hooks/useCategory";
import useCourse from "../../../../hooks/useCourse";

const FormAddCourse = () => {
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const { users } = useUsers();
  const { categorys } = useCategory();
  const { saveCourses } = useCourse();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url_video_intro, setUrl_video_intro] = useState("");
  const [idcategoria, setIdcategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, descripcion, url_video_intro, idcategoria].includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError(null);

    saveCourses({
      titulo,
      idcategoria,
      descripcion,
      url_video_intro,
    });
    clearTextFields();
  };

  const clearTextFields = () => {
    setTitulo("");
    setDescripcion("");
    setUrl_video_intro("");
    setIdcategoria("");
  };

  const [selectedFile, setSelectedFile] = useState(null);

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

  const filteredDocentes = users.filter((user) => user.rol === 2);
  const filteredAlumnos = users.filter((user) => user.rol === 3);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={6}>
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
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categorys}
              getOptionLabel={(category) => `${category.categoria} `}
              onChange={(e, value) => setIdcategoria(value.idcategoria)}
              sx={{ flex: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Selecciona una categoría"
                  fullWidth
                />
              )}
            />
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
            <Typography variant="body1">
              Url de video de presentación
            </Typography>
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
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1} sx={{ marginBottom: 6 }}>
            <Typography variant="body1">Asignar doncente(s) a curso</Typography>
            <Grid item xs={6} style={{ paddingLeft: 0, paddingTop: 0 }}>
              <Box display="flex" alignItems="center">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={filteredDocentes}
                  getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
                  sx={{ flex: 2 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      placeholder="Buscar docente..."
                      sx={{ width: "500px" }}
                      fullWidth
                    />
                  )}
                />
                <Chip
                  icon={<Add />}
                  label="Añadir docente"
                  variant="outlined"
                  onClick={() => console.log("Añadir docente")}
                  color="success"
                  size="large"
                  sx={{ borderRadius: 4, ml: 2 }}
                />
              </Box>
            </Grid>

            <TableContainer sx={{ maxWidth: "100%", maxHeight: 200 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Docente</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Docente 1</TableCell>
                    <TableCell>
                      <Tooltip title="Quitar docente">
                        <HighlightOffRoundedIcon color="error" />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1">Asignar Alumnos(s) a curso</Typography>
            <Grid item xs={6} style={{ paddingLeft: 0, paddingTop: 0 }}>
              <Box display="flex" alignItems="center">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={filteredAlumnos}
                  getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
                  sx={{ flex: 2 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      placeholder="Buscar Alumno..."
                      sx={{ width: "500px" }}
                      fullWidth
                    />
                  )}
                />
                <Chip
                  icon={<Add />}
                  label="Añadir Alumno"
                  variant="outlined"
                  onClick={() => console.log("Añadir Alumno")}
                  color="success"
                  size="large"
                  sx={{ borderRadius: 4, ml: 2 }}
                />
              </Box>
            </Grid>

            <TableContainer sx={{ maxWidth: "100%", maxHeight: 200 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Alumno</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Alumno 1</TableCell>
                    <TableCell>
                      <Tooltip title="Quitar Alumno">
                        <HighlightOffRoundedIcon color="error" />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleSubmit}>
                Guardar
              </Button>
              <Link to="/dashboard/courses" style={{ textDecoration: "none" }}>
                <Button variant="contained" color={"error"}>
                  Cancelar
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default FormAddCourse;

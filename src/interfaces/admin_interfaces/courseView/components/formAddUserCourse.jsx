import { useState } from "react";
import {
  Autocomplete,
  Box,
  //   Button,
  Chip,
  IconButton,
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
  Snackbar,
  Alert,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Add } from "@mui/icons-material";

import useUsers from "../../../../hooks/useUsers";
import useCourse from "../../../../hooks/useCourse";

const headerTeacher = [
  { id: "id", label: "#" },
  { id: "nombre", label: "Docente" },
  { id: "actions", label: "Acciones" },
];

const headerStudent = [
  { id: "id", label: "#" },
  { id: "nombre", label: "Alumno" },
  { id: "actions", label: "Acciones" },
];

const FormAddUserCourse = () => {
  const [msgError, setMsgError] = useState("");
  const [msg, setMsg] = useState("");

  const { users } = useUsers();
  const { courses, getDetailCourse, addUserCourse, deleteUserCourse } =
    useCourse();

  const [selectedDocentes, setSelectedDocentes] = useState([]);
  const [selectedAlumnos, setSelectedAlumnos] = useState([]);

  const [idcurso, setIdCurso] = useState(null);
  const [idusuario, setIdUsuario] = useState(null);

  const handleCourseSelection = (course) => {
    if (course) {
      getDetailCourse(course).then((data) => {
        console.log(data);
        setSelectedDocentes(data.docentes);
        setSelectedAlumnos(data.estudiantes);
        setIdCurso(data.idcurso);
      });
    }
  };
  const filteredDocentes = users.filter((user) => user.rol === 2);
  const filteredAlumnos = users.filter((user) => user.rol === 3);

  const handleAddUSer = () => {
    if (!idcurso || !idusuario) {
      setMsgError("Debe seleccionar un curso y un usuario");
      return;
    }
    addUserCourse({ idcurso, idusuario });
  };

  const handleDeleteUser = (idselected) => {
    setIdUsuario(idselected);
    deleteUserCourse({ idcurso, idusuario });
  };

  return (
    <>
      <Stack spacing={1} sx={{ marginBottom: 6 }}>
        <Typography variant="body1">Seleccionar curso</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={courses}
          getOptionLabel={(course) => `${course.titulo} `}
          onChange={(event, value) => handleCourseSelection(value.idcurso)}
          sx={{ flex: 2 }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              placeholder="Buscar curso..."
              fullWidth
            />
          )}
        />

        <Typography variant="body1">Asignar doncente(s) a curso</Typography>
        <Box display="flex" alignItems="center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={filteredDocentes}
            getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
            onChange={(e, value) => setIdUsuario(value.idusuario)}
            sx={{ flex: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder="Buscar docente..."
                fullWidth
              />
            )}
          />
          <Chip
            icon={<Add />}
            label="Añadir docente"
            variant="outlined"
            onClick={handleAddUSer}
            color="success"
            size="large"
            sx={{ borderRadius: 4, ml: 2 }}
          />
        </Box>

        <TableContainer
          sx={{ maxWidth: "100%", maxHeight: 150, minHeight: 150 }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerTeacher.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedDocentes.map((docente, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{docente.docente}</TableCell>
                  <TableCell>
                    <Tooltip title="Quitar docente">
                      <IconButton
                        onClick={() => handleDeleteUser(docente.id_docentes)}
                      >
                        <HighlightOffRoundedIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="body1">Asignar Alumnos(s) a curso</Typography>

        <Box display="flex" alignItems="center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={filteredAlumnos}
            getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
            onChange={(e, value) => setIdUsuario(value.idusuario)}
            sx={{ flex: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder="Buscar Alumno..."
                fullWidth
              />
            )}
          />
          <Chip
            icon={<Add />}
            label="Añadir Alumno"
            variant="outlined"
            onClick={handleAddUSer}
            color="success"
            size="large"
            sx={{ borderRadius: 4, ml: 2 }}
          />
        </Box>

        <TableContainer
          sx={{ maxWidth: "100%", maxHeight: 150, minHeight: 150 }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headerStudent.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedAlumnos.map((estudiante, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{estudiante.estudiante}</TableCell>
                  <TableCell>
                    <Tooltip title="Quitar alumno">
                      <HighlightOffRoundedIcon color="error" />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Snackbar
        open={msgError}
        autoHideDuration={4000}
        onClose={() => setMsgError("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {msgError}
        </Alert>
      </Snackbar>
      <Snackbar
        open={msg}
        autoHideDuration={4000}
        onClose={() => setMsg("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};
export default FormAddUserCourse;

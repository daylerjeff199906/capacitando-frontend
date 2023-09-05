/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect } from "react";

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

  const { users, getUsers } = useUsers();
  const {
    getCourses,
    courses,
    getDetailCourse,
    addUserCourse,
    deleteUserCourse,
  } = useCourse();

  const [selectedDocentes, setSelectedDocentes] = useState([]);
  const [selectedAlumnos, setSelectedAlumnos] = useState([]);

  const [courseValue, setCourseValue] = useState(null);
  const [studentValue, setStudentValue] = useState(null);
  const [teacherValue, setTeacherValue] = useState(null);

  const [idcurso, setIdCurso] = useState(null);
  const [idusuario, setIdUsuario] = useState(null);

  useEffect(() => {
    getCourses();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setCourseValue(null);
    setStudentValue(null);
    setTeacherValue(null);
    setSelectedDocentes([]);
    setSelectedAlumnos([]);
    setIdCurso(null);
    setIdUsuario(null);
  }, [courses]);

  useEffect(() => {
    setStudentValue(null);
    setTeacherValue(null);
    setSelectedDocentes([]);
    setSelectedAlumnos([]);
    setIdCurso(null);
    setIdUsuario(null);
  }, [courseValue]);

  const filteredDocentes = users.filter((user) => user.rol === 2);
  const filteredAlumnos = users.filter((user) => user.rol === 3);
  const filteredCourses = courses.filter((course) => course.estado === 1);

  useEffect(() => {
    if (courseValue) {
      getDetailCourse(courseValue.idcurso).then((data) => {
        setSelectedDocentes(data.docentes);
        setSelectedAlumnos(data.estudiantes);
        setIdCurso(data.idcurso);
      });
    }
  }, [courseValue, courses]);

  useEffect(() => {
    if (studentValue) {
      setIdUsuario(studentValue.idusuario);
      setTeacherValue(null);
    }
  }, [studentValue]);

  useEffect(() => {
    if (teacherValue) {
      setIdUsuario(teacherValue.idusuario);
      setStudentValue(null);
    }
  }, [teacherValue]);

  console.log("valor seleccionado:", courseValue);
  console.log("valor seleccionado:", studentValue);
  console.log("valor seleccionado:", teacherValue);

  const handleAddUSer = () => {
    if (!courseValue || !idusuario) {
      setMsgError("Debe seleccionar un curso y un usuario");
      return;
    }
    console.log(idcurso, idusuario);
    addUserCourse({ idcurso, idusuario });
    setStudentValue(null);
    setTeacherValue(null);
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
          options={filteredCourses ? filteredCourses : []}
          getOptionLabel={(course) => `${course.titulo} `}
          value={courseValue}
          onChange={(event, value) => setCourseValue(value)}
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
            options={filteredDocentes ? filteredDocentes : []}
            getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
            getOptionDisabled={(user) => user.estado !== 0}
            value={teacherValue}
            onChange={(event, value) => setTeacherValue(value)}
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
            options={filteredAlumnos ? filteredAlumnos : []}
            getOptionLabel={(user) => `${user.apellido} ${user.nombre}`}
            getOptionDisabled={(user) => user.estado !== 1}
            value={studentValue}
            onChange={(event, value) => setStudentValue(value)}
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

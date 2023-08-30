// import { useState } from "react";
import {
  Autocomplete,
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
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Add } from "@mui/icons-material";

import useUsers from "../../../../hooks/useUsers";
import useCategory from "../../../../hooks/useCategory";
import useCourse from "../../../../hooks/useCourse";

const FormAddUserCourse = () => {
  const { users } = useUsers();
  const { categorys } = useCategory();
  const { saveCourses } = useCourse();

  const filteredDocentes = users.filter((user) => user.rol === 2);
  const filteredAlumnos = users.filter((user) => user.rol === 3);
  return (
    <>
      <Stack spacing={1} sx={{ marginBottom: 6 }}>
        <Typography variant="body1">Asignar doncente(s) a curso</Typography>

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
    </>
  );
};
export default FormAddUserCourse;

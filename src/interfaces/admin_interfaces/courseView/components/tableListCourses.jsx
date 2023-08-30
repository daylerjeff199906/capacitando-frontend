/* eslint-disable no-unused-vars */
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
} from "@mui/material";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import CoursesArray from "../../../../infraestructures/data/coursesArray";

import useCourse from "../../../../hooks/useCourse";

const columns = [
  { id: "name", label: "Nombre" },
  { id: "units", label: "Unidades", minWidth: 100 },
  { id: "hours", label: "Horas", minWidth: 100 },
  { id: "status", label: "Estado", minWidth: 100 },
  { id: "action", label: "Acción", minWidth: 100, align: "center" },
];

const TableListCourses = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { courses } = useCourse();

  const getEstadoLabel = (estadoId) => {
    if (estadoId === 1) {
      return "Activo";
    } else if (estadoId === 2) {
      return "Inactivo";
    }
    return "";
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((course, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="left">{course.titulo}</TableCell>
                  <TableCell align="left">{course.total_clases}</TableCell>
                  <TableCell align="left">{course.hora_duracion}</TableCell>
                  <TableCell align="left">
                    {getEstadoLabel(course.estado)}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Chip
                      icon={<EditNoteRoundedIcon />}
                      label="Editar"
                      // component={Link}
                      to={`/dashboard/users/add`}
                      // onClick={() => editUsers(user)}
                      color="primary"
                      size="small"
                      sx={{ marginLeft: 1 }}
                    />
                    <Chip
                      icon={<DeleteRoundedIcon />}
                      label="Eliminar"
                      size="small"
                      // onClick={() => handleDeleteAction(row.id)} // Implement the handleDeleteAction function
                      color="error"
                      sx={{ marginLeft: 1 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={courses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableListCourses;

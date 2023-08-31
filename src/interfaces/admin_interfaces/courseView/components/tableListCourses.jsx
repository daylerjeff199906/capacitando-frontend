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
  Tooltip,
} from "@mui/material";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import useCourse from "../../../../hooks/useCourse";
import { Link } from "react-router-dom";

const columns = [
  { id: "name", label: "Nombre" },
  { id: "category", label: "Categoría" },
  { id: "units", label: "Unidades", minWidth: 50 },
  { id: "hours", label: "Horas", minWidth: 50 },
  { id: "status", label: "Estado" },
  { id: "action", label: "Acción", align: "center" },
];

const TableListCourses = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { courses, editCourse, editStateCourse } = useCourse();

  const getEstadoLabel = (estadoId) => {
    if (estadoId === 1) {
      return "Activo";
    } else if (estadoId === 0) {
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
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
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
                  <TableCell align="left">{course.categoria}</TableCell>
                  <TableCell align="left">{course.total_clases}</TableCell>
                  <TableCell align="left">{course.hora_duracion}</TableCell>
                  <TableCell align="left">
                    <Tooltip title="Cambiar estado">
                      <Chip
                        label={getEstadoLabel(course.estado)}
                        color={course.estado === 1 ? "success" : "error"}
                        size="small"
                        variant="outlined"
                        onClick={() => editStateCourse(course)}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Chip
                      icon={<EditNoteRoundedIcon />}
                      label="Editar"
                      component={Link}
                      to={`/dashboard/courses/add`}
                      onClick={() => editCourse(course)}
                      color="success"
                      size="small"
                      sx={{ marginLeft: 1 }}
                    />
                    {/* <Chip
                      icon={<DeleteRoundedIcon />}
                      label="Eliminar"
                      size="small"
                      // onClick={() => handleDeleteAction(row.id)} // Implement the handleDeleteAction function
                      color="error"
                      sx={{ marginLeft: 1 }}
                    /> */}
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

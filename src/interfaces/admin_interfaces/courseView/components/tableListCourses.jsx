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
import ModalDetailCourse from "./modalDetailCourse";
import { PostAddRounded, RemoveRedEyeOutlined } from "@mui/icons-material";

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
  const [courseSelected, setCourseSelected] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { courses, editCourse, editStateCourse, getDetailCourse } = useCourse();

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

  const handleCourseSelected = (id) => {
    getDetailCourse(id).then((data) => {
      setCourseSelected(data);
    });
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
                    <Tooltip title="Agregar contenido">
                      <Chip
                        icon={<PostAddRounded />}
                        label="Agregar"
                        color="info"
                        size="small"
                        sx={{ marginRight: 1 }}
                        component={Link}
                        to={`/dashboard/courses/${course.idcurso}`}
                        // onClick={() => editCourse(course)}
                      />
                    </Tooltip>
                    <Chip
                      icon={<EditNoteRoundedIcon />}
                      label="Editar"
                      component={Link}
                      to={`/dashboard/courses/add`}
                      onClick={() => editCourse(course)}
                      color="success"
                      size="small"
                      sx={{ marginRight: 1 }}
                    />
                    <Chip
                      icon={<RemoveRedEyeOutlined />}
                      label="Ver"
                      color="warning"
                      size="small"
                      onClick={() => {
                        handleCourseSelected(course.idcurso);
                        handleOpenModal();
                      }}
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
      <ModalDetailCourse
        modalOpen={isModalOpen}
        course={courseSelected}
        onClose={handleCloseModal}
      />
    </Paper>
  );
};

export default TableListCourses;

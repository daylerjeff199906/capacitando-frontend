/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import { PostAddRounded, RemoveRedEyeOutlined } from "@mui/icons-material";

import useCourse from "../../../hooks/useCourse";

import ModalDetailCourse from "../courseView/components/modalDetailCourse";
import { useEffect } from "react";

const columns = [
  { id: "name", label: "Curso" },
  { id: "category", label: "Categoría" },
  { id: "status", label: "Estado" },
  { id: "action", label: "Acción", align: "center" },
];

const TableListCourses = () => {
  const [courseSelected, setCourseSelected] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const rol = localStorage.getItem("rol");
  const userRol = parseInt(rol);

  const { getCourses, courses, editCourse, editStateCourse, getDetailCourse } =
    useCourse();

  React.useEffect(() => {
    getCourses();
    console.log(courses);
  }, []);

  const getEstadoLabel = (estadoId) => {
    if (estadoId === 1) {
      return "Activo";
    } else if (estadoId === 0) {
      return "Inactivo";
    }
    return "";
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
      <TableContainer>
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
              .slice(0, 5)
              .map((course, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="left">{course.titulo}</TableCell>
                  <TableCell align="left">{course.categoria}</TableCell>
                  <TableCell align="left">
                    {userRol === 1 ? (
                      <>
                        <Tooltip title="Cambiar estado">
                          <Chip
                            label={getEstadoLabel(course.estado)}
                            color={course.estado === 1 ? "success" : "error"}
                            size="small"
                            variant="outlined"
                            onClick={() => editStateCourse(course)}
                          />
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          color={course.estado === 1 ? "green" : "error"}
                          fontFamily={"poppins"}
                        >
                          {getEstadoLabel(course.estado)}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {userRol === 2 ? (
                      <>
                        <Tooltip title="Agregar contenido">
                          <Chip
                            icon={<PostAddRounded />}
                            label="Agregar"
                            color="info"
                            size="small"
                            sx={{ marginRight: 1 }}
                            component={Link}
                            to={`/dashboard/courses/${course.idcurso}`}
                          />
                        </Tooltip>
                      </>
                    ) : null}
                    {userRol === 1 ? (
                      <>
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
                      </>
                    ) : null}
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
      <ModalDetailCourse
        modalOpen={isModalOpen}
        course={courseSelected}
        onClose={handleCloseModal}
      />
    </Paper>
  );
};

export default TableListCourses;

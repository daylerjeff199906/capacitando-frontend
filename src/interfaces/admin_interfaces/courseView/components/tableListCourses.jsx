import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import CoursesArray from "../../../../infraestructures/data/coursesArray";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "name", label: "Nombre", minWidth: 170 },
  { id: "units", label: "Unidades", minWidth: 100 },
  { id: "hours", label: "Horas", minWidth: 100 },
  { id: "status", label: "Estado", minWidth: 100 },
  { id: "action", label: "Acción", minWidth: 100, align: "center" },
];

const TableListCourses = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            {CoursesArray.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === "action") {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Chip
                            icon={<EditNoteRoundedIcon />}
                            label="Agregar"
                            // onClick={() => handleEditAction(row.id)} // Implement the handleEditAction function
                            color="primary"
                          />
                          <Chip
                            icon={<AddCircleRoundedIcon />}
                            label="Editar"
                            // onClick={() => handleAddAction(row.id)} // Implement the handleAddAction function
                            color="success"
                            sx={{ marginLeft: 1 }}
                          />
                          <Chip
                            icon={<DeleteRoundedIcon />}
                            label="Eliminar"
                            // onClick={() => handleDeleteAction(row.id)} // Implement the handleDeleteAction function
                            color="error"
                            sx={{ marginLeft: 1 }}
                          />
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={CoursesArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableListCourses;

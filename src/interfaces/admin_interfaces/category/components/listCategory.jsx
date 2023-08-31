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

import useCategory from "../../../../hooks/useCategory";
import { DeleteOutlineOutlined } from "@mui/icons-material";

const columns = [
  { id: "name", label: "Nombre" },
  { id: "status", label: "Estado" },
  { id: "action", label: "Acción", align: "center" },
];

const TableListCategorys = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { categorys, editCategory, editStateCategory } = useCategory();

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
      <TableContainer sx={{ maxHeight: 300, minHeight: 300 }}>
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
            {categorys
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((category, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="left">{category.categoria}</TableCell>
                  <TableCell align="left">
                    <Tooltip title={"Cambiar de estado"}>
                      <Chip
                        label={getEstadoLabel(category.estado)}
                        color={
                          getEstadoLabel(category.estado) === "Activo"
                            ? "success"
                            : "error"
                        }
                        size="small"
                        variant="outlined"
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
                      to={`/dashboard/users/add`}
                      onClick={() => editCategory(category)}
                      color="primary"
                      size="small"
                      sx={{ marginLeft: 1 }}
                    />
                    <Chip
                      icon={<DeleteOutlineOutlined />}
                      label="Eliminar"
                      onClick={() => editStateCategory(category)}
                      color="error"
                      size="small"
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
        count={categorys.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableListCategorys;

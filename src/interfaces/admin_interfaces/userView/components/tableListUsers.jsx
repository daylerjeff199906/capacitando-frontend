import { useState } from "react";
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

import useUsers from "../../../../hooks/useUsers";
import ModalViewUser from "./modalViewUser";
import { Link } from "react-router-dom";

const columns = [
  { id: "code", label: "Usuario" },
  {
    id: "names",
    label: "Nombres y apellidos",
    align: "center",
  },
  {
    id: "email",
    label: "Correo",
    align: "center",
  },
  {
    id: "rol",
    label: "Rol",
    align: "center",
  },
  {
    id: "Estado",
    label: "Estado",
    align: "center",
  },
  {
    id: "actions",
    label: "Acciones",
    align: "center",
  },
];

const TableListUsers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Define the rowsPerPage state

  const { users, editUsers, editStateUser } = useUsers();
  console.log("este: ", users);

  const getRolLabel = (rolId) => {
    if (rolId === 2) {
      return "Docente";
    } else if (rolId === 3) {
      return "Alumno";
    }
    return "";
  };

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
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 300, minHeight: 300 }}>
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
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">{user.usuario}</TableCell>
                    <TableCell align="left">
                      {user.apellido} {user.nombre}
                    </TableCell>
                    <TableCell align="left">{user.correo}</TableCell>
                    <TableCell align="right">{getRolLabel(user.rol)}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Cambiar estado">
                        <Chip
                          label={getEstadoLabel(user.estado)}
                          color={user.estado === 1 ? "success" : "error"}
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            editStateUser(user);
                          }}
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <ModalViewUser user={user} />
                      <Chip
                        icon={<EditNoteRoundedIcon />}
                        label="Editar"
                        component={Link}
                        to={`/dashboard/users/add`}
                        onClick={() => editUsers(user)}
                        color="primary"
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
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default TableListUsers;

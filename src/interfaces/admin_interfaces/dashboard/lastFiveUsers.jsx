/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
  Snackbar,
} from "@mui/material";

import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import useUsers from "../../../hooks/useUsers";
import ModalViewUser from "../userView/components/modalViewUser";
import { Link } from "react-router-dom";

const columns = [
  {
    id: "names",
    label: "Nombres y apellidos",
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

const LastFiveUsers = () => {
  const [msg, setMessage] = useState("");

  const { getUsers, users, editUsers, editStateUser, message } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

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

  useEffect(() => {
    if (message) {
      setMessage(message);
    }
  }, [message]);

  return (
    <>
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
              {users.length > 0 &&
                users
                  .slice(0, 5)
                  .map((user, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">
                        {user.apellido} {user.nombre}
                      </TableCell>
                      <TableCell align="right">
                        {getRolLabel(user.rol)}
                      </TableCell>
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
                          disabled={user.estado === 0}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={msg !== ""}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        message={msg}
        key={"top" + "center"}
      />
    </>
  );
};

export default LastFiveUsers;

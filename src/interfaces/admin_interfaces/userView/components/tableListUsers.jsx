import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import useUsers from "../../../../hooks/useUsers";

const columns = [
  { id: "code", label: "Usuario", minWidth: 100 },
  {
    id: "population",
    label: "Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "size",
    label: "SurName",
    minWidth: 170,
    align: "right",
  },
  {
    id: "density",
    label: "Rol",
    minWidth: 170,
    align: "right",
  },
];

const TableListUsers = () => {
  // const { isAdminAuthenticated } = useContext(AuthContext);
  const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [users, setUsers] = useState([]);

  const { users } = useUsers();
  console.log("este: ", users);

  const getRolLabel = (rolId) => {
    if (rolId === 2) {
      return "Docente";
    } else if (rolId === 3) {
      return "Alumno";
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
              {users.usersData.map((user, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="left">{user.usuario}</TableCell>
                  <TableCell align="right">{user.nombre}</TableCell>
                  <TableCell align="right">{user.apellido}</TableCell>
                  <TableCell align="right">{getRolLabel(user.rol)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.usersData.length}
          rowsPerPage={9}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
export default TableListUsers;

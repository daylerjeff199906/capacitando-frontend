/* eslint-disable react-hooks/exhaustive-deps */
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import useClass from "../../../../hooks/useClass";
import { useEffect } from "react";
import { EditOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const TableListClass = () => {
  const { idSesion, getClases, clases, editClass, clearClaseId } = useClass();

  useEffect(() => {
    if (idSesion !== "") {
      getClases(idSesion);
      clearClaseId();
    }
  }, [idSesion]);

  return (
    <>
      <Typography variant="h6" fontFamily={"Poppins"}>
        Lista de clases
      </Typography>
      {clases.length > 0 ? (
        <Typography variant="body1" fontFamily={"Poppins"}>
          {clases.length} Clases
        </Typography>
      ) : (
        <Typography variant="body1" fontFamily={"Poppins"}>
          No hay clases
        </Typography>
      )}
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700} fontFamily={"poppins"}>
                  #
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={700} fontFamily={"poppins"}>
                  Título de clase
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={700} fontFamily={"poppins"}>
                  Acciones
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clases.length > 0 ? (
              clases.map((clase, index) => (
                <TableRow key={clase.idcontenido}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{clase.titulo}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} spacing={1}>
                      <Tooltip title="Editar sesión">
                        <IconButton
                          color="success"
                          onClick={() => editClass(clase)}
                        >
                          <EditOutlined />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar sesión">
                        <IconButton
                          color="error"
                          // onClick={() => deleteSesion(section)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No hay clases</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableListClass;

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import useClass from "../../../../hooks/useClass";
import { useEffect } from "react";

const TableListClass = () => {
  const { idSesion, getClases, clases } = useClass();

  useEffect(() => {
    if (idSesion !== "") {
      getClases(idSesion);
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
              <TableCell>#</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clases.length > 0 ? (
              clases.map((clase, index) => (
                <TableRow key={clase.idcontenido}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{clase.titulo}</TableCell>
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

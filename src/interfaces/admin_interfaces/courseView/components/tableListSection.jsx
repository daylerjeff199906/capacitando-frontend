/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Tooltip,
  Stack,
  IconButton,
} from "@mui/material";
import { AddCircleOutline, EditOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

import useSesion from "../../../../hooks/useSesion";
import useClass from "../../../../hooks/useClass";

const TableListSection = () => {
  const { getIdCurso, getSesions, sesions, editSesion, deleteSesion } =
    useSesion();
  const { getIdSesion } = useClass();

  const id = useParams();
  getIdCurso(id.id);

  React.useEffect(() => {
    getSesions(id.id);
  }, []);

  return (
    <>
      <Typography variant="h6" fontFamily={"Poppins"}>
        Lista de sesiones
      </Typography>

      {sesions.length > 0 ? (
        <Typography variant="body1" fontFamily={"Poppins"}>
          {sesions.length} Sesiones
        </Typography>
      ) : (
        <Typography variant="body1" fontFamily={"Poppins"}>
          No hay sesiones
        </Typography>
      )}
      <TableContainer sx={{ maxHeight: 280, minHeight: 280 }}>
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
                  Nombres
                </Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={700} fontFamily={"poppins"}>
                  Sesiones
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sesions.length > 0 ? (
              sesions.map((section, index) => (
                <TableRow key={index} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell width={"100%"}>{section.nombre_sesion}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} spacing={1}>
                      <Tooltip title="Añadir contenido">
                        <IconButton
                          color="primary"
                          onClick={() => getIdSesion(section.idsesion)}
                        >
                          <AddCircleOutline />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar sesión">
                        <IconButton
                          color="success"
                          onClick={() => editSesion(section)}
                        >
                          <EditOutlined />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar sesión">
                        <IconButton
                          color="error"
                          onClick={() => deleteSesion(section)}
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
                <TableCell colSpan={3}>No hay sesiones</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableListSection;

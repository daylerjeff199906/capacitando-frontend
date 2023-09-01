/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

const TableListSection = ({ listSections }) => {
  const [sections, setSections] = React.useState([]);
  React.useEffect(() => {
    setSections(listSections);
    console.log(listSections);
  }, [listSections]);
  // console.log(sections);

  return (
    <>
      <Typography variant="h6" fontFamily={"Poppins"}>
        Lista de sesiones
      </Typography>

      {sections.length > 0 ? (
        <Typography variant="body1" fontFamily={"Poppins"}>
          {sections.length} Sesiones
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
            {sections.length > 0 ? (
              sections.map((section, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{section.nombre_sesion}</TableCell>
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

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
  }, [listSections]);
  console.log(sections);
  return (
    <>
      <Typography variant="h6" fontFamily={"Poppins"}>
        Lista de sesiones
      </Typography>
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
            {/* {sections?.map((section, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{section?.nombre_sesion}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableListSection;

/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

const SideBarStudent = ({ detailCourse, contenidoSelect }) => {
  const handleContenidoSelect = (idSesion, id) => {
    contenidoSelect(idSesion, id);
  };

  return (
    <>
      <Box bgcolor={"#FFFFFF"} borderRadius={4} paddingTop={8}>
        <Box paddingX={3} paddingTop={3}>
          <Typography
            variant="h6"
            component="h6"
            fontFamily={"Poppins"}
            fontWeight={900}
            gutterBottom
          >
            Contenido del curso
          </Typography>
        </Box>
        <Divider />
        <Box paddingX={3}>
          <Typography
            variant="h6"
            component="h6"
            align="justify"
            fontFamily={"Poppins"}
            gutterBottom
            paddingY={1}
          >
            Introducción
          </Typography>
        </Box>
        {detailCourse?.sesiones?.map((sesion) => (
          <Accordion key={sesion.idsesion}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                fontFamily={"Poppins"}
              >
                {sesion.nombre_sesion}
              </Typography>
            </AccordionSummary>
            {sesion?.contenido?.map((contenido) => (
              <AccordionDetails
                key={contenido.idcontenido}
                onClick={() =>
                  handleContenidoSelect(sesion.idsesion, contenido.idcontenido)
                }
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#F5F5F5",
                  },
                }}
              >
                <Typography fontWeight={700} fontFamily={"Poppins"}>
                  {contenido.titulo}
                </Typography>
                <Typography fontWeight={500}>
                  {contenido.minutos}
                </Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </>
  );
};
export default SideBarStudent;

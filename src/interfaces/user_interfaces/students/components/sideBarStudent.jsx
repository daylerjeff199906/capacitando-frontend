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

const SideBarStudent = ({ detailCourse }) => {
  return (
    <>
      <Box bgcolor={"#FFFFFF"} borderRadius={4} paddingTop={8}>
        <Box padding={3}>
          <Typography
            variant="h6"
            component="h6"
            fontFamily={"Poppins"}
            fontWeight={900}
            gutterBottom
          >
            Contenido del curso
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            fontFamily={"Poppins"}
            gutterBottom
          >
            {detailCourse?.descripcion}
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            align="justify"
            fontFamily={"Poppins"}
            fontWeight={900}
            gutterBottom
          >
            Doncente(s):
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            fontFamily={"Poppins"}
            gutterBottom
          >
            {detailCourse.docentes &&
              detailCourse?.docentes?.map((docente) => (
                <Typography
                  key={docente.id_docentes}
                  variant="body1"
                  component="h6"
                  fontFamily={"Poppins"}
                  gutterBottom
                >
                  {docente.docente}
                </Typography>
              ))}
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box paddingX={3}>
          <Typography
            variant="h6"
            component="h4"
            fontWeight={700}
            fontFamily={"Poppins"}
            gutterBottom
          >
            Contenido
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            align="justify"
            fontFamily={"Poppins"}
            gutterBottom
            paddingBottom={1}
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
              <Typography>{sesion.nombre_sesion}</Typography>
            </AccordionSummary>
            {sesion?.contenido?.map((contenido) => (
              <AccordionDetails key={contenido.idcontenido}>
                <Typography>{contenido.titulo}</Typography>
                <Typography>{contenido.url_video}</Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </>
  );
};
export default SideBarStudent;

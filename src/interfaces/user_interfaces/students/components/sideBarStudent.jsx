import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";

import useCourse from "../../../../hooks/useCourse";
import { useParams } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";

const SideBarStudent = () => {
  const [detailCourse, setDetailCourse] = React.useState({});
  const { getDetailCourse } = useCourse();
  const idCourse = useParams();
  const id = idCourse.id;

  // getDetailCourse(id).then((data) => {
  //   setDetailCourse(data);
  // });
  React.useEffect(() => {
    getDetailCourse(id).then((data) => {
      setDetailCourse(data);
    });
  }, [getDetailCourse, id]);
  console.log(detailCourse);

  return (
    <>
      <Box bgcolor={"#FFFFFF"} borderRadius={4} padding={3}>
        <Typography
          variant="h5"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Detalles del curso
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="h6"
          component="h6"
          fontFamily={"Poppins"}
          fontWeight={900}
          gutterBottom
        >
          {detailCourse.titulo}
        </Typography>
        <Typography
          variant="body1"
          component="h6"
          fontFamily={"Poppins"}
          gutterBottom
        >
          {detailCourse.descripcion}
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
            detailCourse.docentes.map((docente) => (
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
        <Divider sx={{ marginY: 2 }} />
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
        >
          Introducción
        </Typography>
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
        <Typography
          variant="body1"
          component="h6"
          align="justify"
          fontFamily={"Poppins"}
          gutterBottom
        >
          Sesion 2
        </Typography>
      </Box>
    </>
  );
};
export default SideBarStudent;

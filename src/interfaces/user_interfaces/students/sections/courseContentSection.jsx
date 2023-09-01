/* eslint-disable react/prop-types */

import { Box, Typography, Divider } from "@mui/material";
import CustomBreadcrumb from "../../../../components/BreadcrumbCustom";

const routesArray = [
  { name: "Mis cursos", path: "/home/miscursos" },
  { name: "Detalles de curso" },
];

const CourseContentSection = ({
  detailCourse,
  sectionSelected,
  contentSelected,
}) => {
  const findSesion = detailCourse?.sesiones?.find(
    (sesion) => sesion?.idsesion === sectionSelected
  );
  const findContenido = findSesion?.contenido?.find(
    (contenido) => contenido?.idcontenido === contentSelected
  );
  console.log(findContenido);

  return (
    <>
      <Box bgcolor={"#FFFFFF"} borderRadius={4} padding={3}>
        <Typography
          variant="h4"
          component="h4"
          fontWeight={900}
          fontFamily={"Poppins"}
          gutterBottom
        >
          {detailCourse?.titulo}
        </Typography>
        <CustomBreadcrumb routesArray={routesArray} />
        <Divider sx={{ marginY: 2 }} />
        <Box paddingX={8} paddingY={2}>
          <iframe
            width="100%"
            height="420"
            src={
              findContenido?.url_video !== undefined
                ? findContenido?.url_video + "?autoplay=1&mute=1"
                : "https://www.youtube.com/embed/1y_kfWUCFDQ?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Typography
          variant="h5"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Tema:{" "}
          {findContenido?.titulo !== undefined
            ? findContenido?.titulo
            : " Introducción"}
        </Typography>
      </Box>
    </>
  );
};
export default CourseContentSection;

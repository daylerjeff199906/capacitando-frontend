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
      <Box bgcolor={"#FFFFFF"} borderRadius={4} paddingX={3}>
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
        <Box paddingY={2}>
          <iframe
            width="100%"
            height="500"
            src={
              findContenido?.url_video !== null
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

        <Box paddingY={2}>
          <Typography
            variant="h6"
            component="h6"
            align="justify"
            fontFamily={"Poppins"}
            fontWeight={900}
            gutterBottom
          >
            Detalles del curso
          </Typography>
          <Typography
            variant="body1"
            component="h6"
            align="justify"
            fontFamily={"Poppins"}
            fontWeight={900}
            gutterBottom
          >
            Descripción:
          </Typography>
          <Typography variant="body1" component="h6" gutterBottom>
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
      </Box>
    </>
  );
};
export default CourseContentSection;

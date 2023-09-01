/* eslint-disable react/prop-types */
import { Box, Typography, Divider } from "@mui/material";
import CustomBreadcrumb from "../../../../components/BreadcrumbCustom";

const routesArray = [
  { name: "Mis cursos", path: "/home/miscursos" },
  { name: "Detalles de curso" },
];

const CourseContentSection = ({ detailCourse }) => {
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
            src={detailCourse?.url_video_intro}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Typography
          variant="h4"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Recursos
        </Typography>
      </Box>
    </>
  );
};
export default CourseContentSection;

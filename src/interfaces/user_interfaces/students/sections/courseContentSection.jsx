import { Box, Typography, Divider } from "@mui/material";
import CustomBreadcrumb from "../../../../components/BreadcrumbCustom";

const CourseContentSection = () => {
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
          Contenido del curso
        </Typography>
        <CustomBreadcrumb />
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="h4"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Título de la clase
        </Typography>
        <Box paddingX={8} paddingY={2}>
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/YpAQ_bYM6NE"
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

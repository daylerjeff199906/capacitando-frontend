import { Box, Grid, Typography } from "@mui/material";
import ListCourseSection from "./listCourseSection";
import DetailsCourseSection from "./detailsCourseSection";

const indexCourse = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" fontWeight={800} paddingY={4}>
          Gestionar cursos
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" fontWeight={800} paddingY={3}>
              Lista de cursos
            </Typography>
            <ListCourseSection />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" fontWeight={800} paddingY={3}>
              Detalles de Curos
            </Typography>
            <DetailsCourseSection />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default indexCourse;

import { Box, Grid, Typography } from "@mui/material";
import ListCourseSection from "./listCourseSection";

const indexCourse = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Gestionar cursos
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Lista de cursos
            </Typography>
            <ListCourseSection />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default indexCourse;

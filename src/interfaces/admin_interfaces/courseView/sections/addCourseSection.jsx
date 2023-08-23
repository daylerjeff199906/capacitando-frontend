import { Box, Grid, Typography } from "@mui/material";
import FormAddCourse from "../components/formAddCourse";
const AddCourseSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4}>
          Gestionar Cursos
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Añadir datos de curso
            </Typography>
            <FormAddCourse />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Detalles de curso
            </Typography>
            {/* <DetailsUserSection /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCourseSection;

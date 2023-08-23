import { Box, Divider, Grid, Typography } from "@mui/material";
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
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={1}>
              Añadir datos de curso
            </Typography>
            <Divider sx={{marginBottom:2}}/>
            <FormAddCourse />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCourseSection;

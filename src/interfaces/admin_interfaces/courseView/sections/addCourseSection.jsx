import { Box, Divider, Grid, Typography } from "@mui/material";
import FormAddCourse from "../components/formAddCourse";
import FormAddUserCourse from "../components/formAddUserCourse";
const AddCourseSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Gestionar cursos
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={1}>
              Añadir datos de curso
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <FormAddCourse />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={1}>
              Asignar usuario(s) a curso
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <FormAddUserCourse />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddCourseSection;

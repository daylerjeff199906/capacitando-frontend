import { Box, Divider, Grid, Typography } from "@mui/material";
import FormAddSection from "../components/formAddSection";
import TableListSection from "../components/tableListSection";
import FormAddClass from "../components/formAddClass";
import TableListClass from "../components/tableListClass";
const AddContentSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Gestionar Contenido de Cursos
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ paddingRight: 4 }}>
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormAddSection />
              </Grid>
              <Grid item xs={12} md={6}>
                <TableListSection />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={2}>
              Añadir contenido
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormAddClass />
              </Grid>
              <Grid item xs={12} md={6}>
                <TableListClass />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AddContentSection;

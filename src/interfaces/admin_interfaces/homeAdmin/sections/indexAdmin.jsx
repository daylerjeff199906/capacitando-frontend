import { Box, Grid, Typography } from "@mui/material";
const IndexAdmin = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Dashboard
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={4}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Total de docentes
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Total de alumnos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Total de Cursos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default IndexAdmin;

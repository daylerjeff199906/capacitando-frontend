import { Box, Grid, Typography } from "@mui/material";
import FormAddUser from "../components/formAddUser";
const AddUserSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4}>
          Gestionar usuarios
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={3}>
              Añadir datos de usuario
            </Typography>
            <FormAddUser />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUserSection;

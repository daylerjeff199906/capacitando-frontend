import { Box, Grid, Typography } from "@mui/material";
import FormAddUser from "../components/formAddUser";
const AddUserSection = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Gestionar usuarios
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingRight: 4 }}>
        <Grid item xs={12}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <FormAddUser />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUserSection;

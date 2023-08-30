import { Box, Grid, Typography } from "@mui/material";
import ListUserSection from "./listUserSection";

const IndexUser = () => {
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
            <Typography variant="h6" f paddingY={3}>
              Lista de usuarios
            </Typography>
            <ListUserSection />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default IndexUser;

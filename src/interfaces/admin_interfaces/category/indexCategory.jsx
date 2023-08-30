import { Box, Divider, Grid, Typography } from "@mui/material";
import FormAddCategory from "./components/formAddCategory";
import TableListCategorys from "./components/listCategory";

const IndexCategory = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          paddingY={4}
          fontFamily={"Poppins"}
          gutterBottom
        >
          Gestionar Categorias
        </Typography>
        <Grid container spacing={2} sx={{ paddingRight: 4 }}>
          <Grid item xs={6}>
            <FormAddCategory />
          </Grid>
          <Grid item xs={6}>
            <Box padding={2} backgroundColor="#ffffff" borderRadius={4}>
              <Typography
                variant="h6"
                paddingY={2}
                fontFamily={"poppins"}
                fontWeight={600}
              >
                Lista de categorias
              </Typography>
              <Divider />
              <TableListCategorys />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default IndexCategory;

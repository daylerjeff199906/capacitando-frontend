import {
  Box,
  Button,
  Divider,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const FormAddCategory = () => {
  return (
    <>
      <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
        <Typography
          variant="h6"
          f
          paddingY={2}
          fontFamily={"poppins"}
          fontWeight={600}
        >
          Añadir categoria
        </Typography>
        <Divider />
        <FormGroup>
          <Stack spacing={2} sx={{ paddingTop: 2 }}>
            <Typography variant="subtitle1" fontFamily={"poppins"}>
              Nombre de la categoría
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Escribe el nombre de la categoría"
            />
            <Box display={"flex"} justifyContent={"center"}>
              <Button variant="contained" color="primary">
                Añadir
              </Button>
              <Button variant="contained" color="error" sx={{ marginLeft: 2 }}>
                Cancelar
              </Button>
            </Box>
          </Stack>
        </FormGroup>
      </Box>
    </>
  );
};
export default FormAddCategory;

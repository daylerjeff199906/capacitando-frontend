import { Typography, TextField, Box, Button } from "@mui/material";

const FormAddSection = () => {
  return (
    <>
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Título de sesión
      </Typography>
      <TextField
        size="small"
        placeholder="Ingrese el título de sesión ..."
        fullWidth
      />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Descripción de sesión
      </Typography>
      <TextField
        size="small"
        placeholder="Opcional ..."
        fullWidth
        multiline
        rows={4}
      />
      <Box marginTop={2}>
        <Button variant="contained" component="label">
          Guardar
        </Button>
      </Box>
    </>
  );
};
export default FormAddSection;

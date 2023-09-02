import { Typography, TextField, Box, Button } from "@mui/material";
const FormAddClass = () => {
  return (
    <>
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Título de la clase
      </Typography>
      <TextField
        size="small"
        placeholder="Ingrese el título de clase ..."
        fullWidth
      />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Url del video
      </Typography>
      <TextField
        size="small"
        placeholder="Ingresar url del video ..."
        fullWidth
      />
      <Box marginTop={2}>
        <Button variant="contained" component="label">
          Guardar
        </Button>
      </Box>
    </>
  );
};
export default FormAddClass;

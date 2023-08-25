import { Typography, TextField } from "@mui/material";
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
        Descripción de sesión
      </Typography>
      <TextField
        size="small"
        placeholder="Opcional ..."
        fullWidth
        multiline
        rows={4}
      />
      <Typography variant="body1" paddingY={1} fontFamily={"Poppins"}>
        Url del video
      </Typography>
      <TextField
        size="small"
        placeholder="Ingresar url del video ..."
        fullWidth
      />
    </>
  );
};
export default FormAddClass;

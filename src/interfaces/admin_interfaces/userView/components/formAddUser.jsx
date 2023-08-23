import * as React from "react";
import {
  Box,
  Button,
  Select,
  TextField,
  FormControl,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const typeUsers = [
  { id: 0, label: "Seleccionar tipo de usuario", value: 0 },
  { id: 1, label: "Docente", value: 1 },
  { id: 2, label: "Alumno", value: 2 },
];

const FormAddUser = () => {
  const [userType, setUserType] = React.useState(0);
  const [isProfileEnabled, setIsProfileEnabled] = React.useState(false);

  const handleChange = (event) => {
    setUserType(event.target.value);
    setIsProfileEnabled(event.target.value === 1);
  };
  return (
    <>
      <Box>
        <Typography variant="subtitle2" fontWeight={600} color={"red"}>
          Importante
        </Typography>
        <Box marginBottom={2}>
          <Typography variant="subtitle2">
            <li>
              Asegúrese de COMPLETAR LOS CAMPOS REQUERIDOS para agregar un nuevo
              registro.
            </li>
          </Typography>
          <Typography variant="subtitle2">
            <li>
              Al momento de REGISTRAR UN DOCENTE asegurese de de adjuntar una
              imagen y completar su INFORMACIÓN ACADEMICA.
            </li>
          </Typography>
        </Box>
        <Box
          bgcolor={"#C085FF"}
          color={"white"}
          padding={0.5}
          paddingX={2}
          marginY={3}
          borderRadius={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Datos personales
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Nombre(s)
            </Typography>
            <TextField size="small" placeholder="Ingrese nombre" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Apellido(s)
            </Typography>
            <TextField size="small" placeholder="Apellido" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              DNI
            </Typography>
            <TextField size="small" placeholder="Ingrese DNI" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Correo
            </Typography>
            <TextField size="small" placeholder="Correo" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Telefono
            </Typography>
            <TextField size="small" placeholder="Telefono" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Dirección
            </Typography>
            <TextField size="small" placeholder="Dirección" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color={"gray"}>
              Tipo de usuario
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                value={userType}
                onChange={handleChange}
              >
                {typeUsers.map((type) => (
                  <MenuItem key={type.id} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Carrera
            </Typography>
            <TextField
              size="small"
              placeholder="Ingrese la carrera que estudia"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Perfil (Solo para usuarios que son docentes)
            </Typography>
            <TextField
              size="small"
              placeholder="Escribe una descripción breve sobre su perfil profesional"
              multiline
              rows={2}
              fullWidth
              disabled={!isProfileEnabled}
            />
          </Grid>
        </Grid>
        {/* Datos para usuario  */}
        <Box
          bgcolor={"#C085FF"}
          color={"white"}
          padding={0.5}
          paddingX={2}
          marginY={3}
          borderRadius={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Cuenta de acceso al sistema
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Usuario
            </Typography>
            <TextField size="small" placeholder="Contraseña" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Contraseña
            </Typography>
            <TextField size="small" placeholder="Contraseña" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Confirmar Contraseña
            </Typography>
            <TextField
              size="small"
              placeholder="Confirmar contraseña"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box paddingY={4} justifyContent={"center"} display={"flex"}>
              <Button variant="contained">Guardar</Button>
              <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{ marginLeft: 2 }}
                  color="error"
                >
                  Cancelar
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FormAddUser;

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

  const [userName, setUserName] = React.useState("");
  const [userLastName, setUserLastName] = React.useState("");
  const [userDni, setUserDni] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");
  const [userCareer, setUserCareer] = React.useState("");
  const [userProfile, setUserProfile] = React.useState("");
  const [userProfileName, setUserProfileName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");

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
            <TextField
              id="userName"
              size="small"
              placeholder="Ingrese nombre"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Apellido(s)
            </Typography>
            <TextField
              id="userLastName"
              size="small"
              placeholder="Apellido"
              fullWidth
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              DNI
            </Typography>
            <TextField
              id="userDni"
              size="small"
              placeholder="Ingrese DNI"
              fullWidth
              value={userDni}
              onChange={(e) => setUserDni(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Correo
            </Typography>
            <TextField
              id="userEmail"
              size="small"
              placeholder="Correo"
              fullWidth
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Telefono
            </Typography>
            <TextField
              id="userPhone"
              size="small"
              placeholder="Telefono"
              fullWidth
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" color="gray">
              Dirección
            </Typography>
            <TextField
              id="userAddress"
              size="small"
              placeholder="Dirección"
              fullWidth
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
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
              id="userCareer"
              size="small"
              placeholder="Ingrese la carrera que estudia"
              fullWidth
              value={userCareer}
              onChange={(e) => setUserCareer(e.target.value)}
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
              value={userProfile}
              onChange={(e) => setUserProfile(e.target.value)}
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
            <TextField
              id="user"
              size="small"
              placeholder="Contraseña"
              fullWidth
              value={userProfileName}
              onChange={(e) => setUserProfileName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              id="userPassword"
              variant="subtitle1"
              sx={{ color: "gray" }}
            >
              Contraseña
            </Typography>
            <TextField
              id="userPassword"
              size="small"
              placeholder="Contraseña"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Confirmar Contraseña
            </Typography>
            <TextField
              id="userConfirmPassword"
              size="small"
              placeholder="Confirmar contraseña"
              fullWidth
              value={userConfirmPassword}
              onChange={(e) => setUserConfirmPassword(e.target.value)}
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

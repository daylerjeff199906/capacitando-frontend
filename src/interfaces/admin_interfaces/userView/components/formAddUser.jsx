import * as React from "react";
import {
  Alert,
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
import useUsers from "../../../../hooks/useUsers";

const typeUsers = [
  { id: 0, label: "Seleccionar tipo de usuario", value: 0 },
  { id: 1, label: "Docente", value: 2 },
  { id: 2, label: "Alumno", value: 3 },
];

const FormAddUser = () => {
  const [id, setId] = React.useState("");
  const [userType, setUserType] = React.useState(0);
  const [isProfileEnabled, setIsProfileEnabled] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { saveUsers, usuarioId, clearUsers } = useUsers();

  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [carrera, setCarrera] = React.useState("");
  const [perfil, setPerfil] = React.useState("");
  const [rol, setRol] = React.useState("");

  // console.log("password:", usuarioId?.password);
  React.useEffect(() => {
    if (usuarioId?.nombre) {
      setNombre(usuarioId.nombre);
      setId(usuarioId.idusuario);
      setUsuario(usuarioId.usuario);
      // setPassword(usuarioId.password);
      // setUserConfirmPassword(usuarioId.password);
    }
    if (usuarioId?.apellido) {
      setApellido(usuarioId.apellido);
    }
    if (usuarioId?.dni) {
      setDni(usuarioId.dni);
    }
    if (usuarioId?.telefono) {
      setTelefono(usuarioId.telefono);
    }
    if (usuarioId?.correo) {
      setCorreo(usuarioId.correo);
    }
    if (usuarioId?.direccion) {
      setDireccion(usuarioId.direccion);
    }
    if (usuarioId?.carrera) {
      setCarrera(usuarioId.carrera);
    }
    if (usuarioId?.perfil) {
      setPerfil(usuarioId.perfil);
    }
    if (usuarioId?.rol) {
      setRol(usuarioId.rol);
      setUserType(usuarioId.rol);
      setIsProfileEnabled(usuarioId.rol === 2);
    }
  }, [usuarioId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      if (
        [
          nombre,
          apellido,
          dni,
          telefono,
          correo,
          direccion,
          carrera,
          usuario,
          rol,
        ].includes("")
      ) {
        setError("Todos los campos son obligatorios");
        return;
      }
    } else {
      if (
        [
          nombre,
          apellido,
          dni,
          telefono,
          correo,
          direccion,
          carrera,
          usuario,
          password,
          userConfirmPassword,
          rol,
        ].includes("")
      ) {
        setError("Todos los campos son obligatorios");
        return;
      }
    }
    if (password !== userConfirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (rol === 0) {
      setError("Seleccione un tipo de usuario");
      return;
    }
    if (dni.length !== 8) {
      setError("El DNI debe tener 8 dígitos");
      return;
    }
    if (telefono.length !== 9) {
      setError("El número de teléfono debe tener 9 dígitos");
      return;
    }

    setError(null);

    if (id) {
      saveUsers({
        id,
        nombre,
        apellido,
        dni,
        telefono,
        correo,
        direccion,
        carrera,
        usuario,
        rol,
      });
    } else {
      saveUsers({
        nombre,
        apellido,
        dni,
        telefono,
        correo,
        direccion,
        carrera,
        usuario,
        password,
        rol,
      });
    }

    setUsuario("");
    setPassword("");
    setUserConfirmPassword("");
    setNombre("");
    setApellido("");
    setDni("");
    setTelefono("");
    setCorreo("");
    setDireccion("");
    setCarrera("");
    setPerfil("");
    setRol("");
    setId("");
    setUserType(0);
    setIsProfileEnabled(false);
  };

  const handleChange = (event) => {
    setUserType(event.target.value);
    setIsProfileEnabled(event.target.value === 2);
    if (event.target.value !== 0) {
      setRol(event.target.value);
    } else if (event.target.value === 0) {
      setRol("");
    }
  };

  const handleCancel = () => {
    setId("");
    setUsuario("");
    setPassword("");
    setUserConfirmPassword("");
    setNombre("");
    setApellido("");
    setDni("");
    setTelefono("");
    setCorreo("");
    setDireccion("");
    setCarrera("");
    setPerfil("");
    setRol("");
  };

  React.useEffect(() => {
    return () => {
      clearUsers();
    };
  }, [clearUsers]);

  return (
    <>
      <Typography variant="h6" paddingY={3}>
        {id ? "Actualizar datos de usuario" : "Añadir datos de Usuario"}
      </Typography>
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
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
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
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              inputProps={{
                maxLength: 8,
                minLength: 8,
                pattern: "[0-9]{8}",
                title: "El DNI debe tener 8 dígitos",
              }}
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
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="email"
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              inputProps={{
                maxLength: 9,
                minLength: 9,
                pattern: "[0-9]{9}",
                title: "El número de teléfono debe tener 9 dígitos",
              }}
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
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
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
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
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
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
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
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type="password"
              disabled={id ? true : false}
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
              type="password"
              disabled={id ? true : false}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box paddingY={4} justifyContent={"center"} display={"flex"}>
              <Button variant="contained" onClick={handleSubmit}>
                {id ? "Guardar cambios" : "Agregar"}
              </Button>
              <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{ marginLeft: 2 }}
                  color="error"
                  onClick={handleCancel}
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

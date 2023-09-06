/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import userAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const LoginIndex = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if ([username, password].includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError(null);

    try {
      const { data } = await userAxios.post("/users/login", {
        usuario: username,
        password: password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.usuario);
      localStorage.setItem("rol", data.rol);

      setAuth(data);
      if (data.rol !== 3) {
        navigate("/dashboard");
      } else if (data.rol === 3) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("../../public/images/svg/background-login.svg")',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{ minWidth: 275, padding: 4, backgroundColor: "#ffffff" }}
          borderRadius={4}
          boxShadow={6}
        >
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            fontWeight={700}
            gutterBottom
          >
            Capacitando
          </Typography>
          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <TextField
              id="username"
              label="Username"
              variant="standard"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ marginY: 4, borderRadius: 4 }}
              color="secondary"
              fullWidth
              type="submit"
            >
              Iniciar sesión
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginIndex;

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

const LoginIndex = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError(null);

    try {
      const { data } = await userAxios.post("/login", {
        usuario: username,
        password: password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("rol", JSON.stringify(data.rol));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
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
            Capacitandome
          </Typography>
          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}
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
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginIndex;

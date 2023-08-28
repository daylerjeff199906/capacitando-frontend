import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "../index.css";

const LoginIndex = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

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
        {/* <Box alignContent={"center"} justifyContent={"center"} height="100vh"> */}

        <Box
          sx={{ minWidth: 275, padding: 4, backgroundColor: "#ffffff" }}
          borderRadius={4}
          boxShadow={6}
        >
          <Box
            width={"100%"}
            alignContent={"center"}
            justifyContent={"center"}
            display={"flex"}
            marginBottom={2}
          >
            <Box
              component={"img"}
              src="/images/logos/iiap.png"
              width={52}
              height={52}
            />
          </Box>
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            fontWeight={700}
            gutterBottom
          >
            Capacitando
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Inicia sesión con tu usuario y contraseña
          </Typography>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={username}
            fullWidth
            margin="normal"
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
          >
            Iniciar sesión
          </Button>
        </Box>
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default LoginIndex;

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "../index.css";

const LoginIndex = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        alignItems: "center", // Centrar verticalmente
        justifyContent: "center", // Centrar horizontalmente
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
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            fullWidth
            margin="normal"
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

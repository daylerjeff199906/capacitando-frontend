import { Typography, Paper, Container } from "@mui/material";

const DashboardIndex = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <Container>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5">Dashboard</Typography>
              {/* Contenido específico de Dashboard */}
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
};

export default DashboardIndex;

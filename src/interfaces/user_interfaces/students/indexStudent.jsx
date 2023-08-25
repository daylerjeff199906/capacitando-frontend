import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CardCourse from "../../../components/CardCourse";
import { Link } from "react-router-dom";
import courses from "../../../infraestructures/data/coursesArray";

const indexStudent = () => {
  return (
    <>
      <Box bgcolor="#FFFFFF" paddingTop={8}>
        <Container maxWidth={"lg"}>
          <Grid container spacing={4} sx={{ paddingY: 4 }}>
            <Grid item xs={6}>
              <Typography
                variant="h3"
                component="h4"
                fontWeight={700}
                fontFamily={"Poppins"}
                gutterBottom
              >
                Bienvenido, Nombre de ususario
              </Typography>
              <Typography
                variant="body1"
                component="h6"
                align="justify"
                gutterBottom
              >
                Bienvenido a la plataforma Capacitando, aquí encontrarás
                recursos que te ayudarán en tu adaptación, así como tu
                desarrollo efectivo y consolidación de tu proyecto profesional.
                Mira el siguiente video , el cual te explicará que contenidos
                verás durante este semestre.
              </Typography>
              <Box sx={{ paddingY: 4 }}>
                <Link to="/home/miscursos">
                  <Button variant="contained" color="primary">
                    Ir a mis cursos
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VTJImsnuO6A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ paddingY: 4 }}>
            <Grid item xs={12}>
              <Box display={"flex"}>
                <Typography
                  variant="h4"
                  component="h4"
                  fontWeight={700}
                  fontFamily={"Poppins"}
                  marginRight={"auto"}
                  gutterBottom
                >
                  Cursos más recientes
                </Typography>
                <Link to="/home/miscursos" style={{ textDecoration: "none" }}>
                  <Button variant="outline" color="primary">
                    Ver todos los cursos
                  </Button>
                </Link>
              </Box>
            </Grid>
            {courses.slice(0,4).map((course) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                <CardCourse
                  name={course.name}
                  description={course.description}
                  image={course.image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default indexStudent;

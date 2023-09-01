import { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CardCourse from "../../../components/CardCourse";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "../../../components/NavBar";

import useUsers from "../../../hooks/useUsers";
import useCourse from "../../../hooks/useCourse";

const IndexStudent = () => {
  const { getProfile, detailUser } = useUsers();
  const { courses } = useCourse();

  const [perfilUser, setPerfilUser] = useState({});

  useEffect(() => {
    getProfile().then((data) => {
      detailUser(data.idusuario).then((data) => {
        setPerfilUser(data);
      });
    });
  }, [getProfile, detailUser]);

  return (
    <>
     <Navbar />
      <Box bgcolor="#FFFFFF" paddingTop={8} paddingBottom={8}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={4} sx={{ paddingY: 4 }}>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h3"
                component="h4"
                fontWeight={700}
                fontFamily={"Poppins"}
                gutterBottom
              >
                Bienvenido, {perfilUser.nombre}
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
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    Ir a mis cursos
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <iframe
                width={"100%"}
                height="315"
                src="https://www.youtube.com/embed/VTJImsnuO6A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ paddingY: 2 }}>
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
                  <Button
                    variant="outline"
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    Ver todos los cursos
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ paddingY: 2 }}>
            {courses.slice(0, 4).map((course) => (
              <Grid
                item
                direction={"row"}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={course.id}
              >
                <CardCourse
                  name={course.titulo}
                  description={course.descripcion}
                  image="https://img.freepik.com/foto-gratis/mujer-vista-lateral-que-usa-tableta_23-2149557251.jpg?w=996&t=st=1693521065~exp=1693521665~hmac=9cf874f285d6af14794df820ee870ac2e257a0958ca3ddda7d04bc4b01c59744"
                  time={course.hora_duracion + " horas"}
                  units={course.total_clases + " clases"}
                  url={`/home/miscursos/${course.idcurso}`}
                  category={course.categoria}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default IndexStudent;

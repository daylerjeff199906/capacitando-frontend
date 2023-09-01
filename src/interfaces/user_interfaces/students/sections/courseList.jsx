import { Box, Container, Typography, Grid } from "@mui/material";
import CardCourse from "../../../../components/CardCourse";
import CustomBreadcrumb from "../../../../components/BreadcrumbCustom";

import useCourse from "../../../../hooks/useCourse";

const routesArray = [{ name: "Mis cursos", path: "/home/miscursos" }];

const CourseList = () => {
  const { courses } = useCourse();
  console.log(courses);

  return (
    <Box bgcolor="#FFFFFF">
      <Container maxWidth={"xl"}>
        <Typography
          variant="h4"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
          paddingTop={4}
        >
          Mis cursos asignados
        </Typography>
        <Box sx={{ paddingY: 2 }}>
          <CustomBreadcrumb routesArray={routesArray} />
        </Box>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
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
  );
};

export default CourseList;

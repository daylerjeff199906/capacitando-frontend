import { Box, Container, Typography, Grid } from "@mui/material";
import CardCourse from "../../../../components/CardCourse";
import CoursesArray from "../../../../infraestructures/data/coursesArray";
const CourseList = () => {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h4"
          component="h4"
          fontWeight={700}
          fontFamily={"Poppins"}
          gutterBottom
          paddingY={4}
        >
          Mis cursos asignados
        </Typography>
        <Grid container spacing={2}>
          {CoursesArray.map((course) => (
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
  );
};

export default CourseList;

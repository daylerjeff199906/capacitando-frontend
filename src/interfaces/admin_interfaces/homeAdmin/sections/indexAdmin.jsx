import { Box, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import useCourse from "../../../../hooks/useCourse";
import useUsers from "../../../../hooks/useUsers";
import LastFiveCourses from "../../dashboard/lastFiveCourses";
import LastFiveUsers from "../../dashboard/lastFiveUsers";

const IndexAdmin = () => {
  const { courses } = useCourse();
  const { users } = useUsers();

  const activeCourses = courses.filter((course) => course.estado === 1);
  const activeTeachers = users.filter((user) => user.rol === 2 && user.estado === 1); 
  const activeStudents = users.filter((user) => user.rol === 3 && user.estado === 1);

  const cardData = [
    {
      name: "Total de docentes",
      icon: <AccountCircleIcon sx={{ fontSize: "5rem" }} />,
      style: {
        background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
      },
      number: activeTeachers.length,
    },
    {
      name: "Total de alumnos",
      icon: <SchoolRoundedIcon sx={{ fontSize: "5rem" }} />,
      style: {
        background: "linear-gradient(45deg, #8BC34A 30%, #4CAF50 90%)",
      },
      number: activeStudents.length,
    },
    {
      name: "Total de Cursos",
      icon: <MenuBookRoundedIcon sx={{ fontSize: "5rem" }} />,
      style: {
        background: "linear-gradient(45deg, #64B5F6 30%, #1976D2 90%)",
      },
      number: activeCourses.length,
    },
  ];

  return (
    <>
      <Box>
        <Typography variant="h4" paddingY={4} fontFamily={"Poppins"}>
          Dashboard
        </Typography>
      </Box>

      <Grid container spacing={2} mb={4} sx={{ paddingRight: 4 }}>
        {cardData.map((data, index) => (
          <Grid item xs={4} key={index}>
            <Box
              padding={3}
              borderRadius={4}
              sx={{
                ...data.style,
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              {data.icon}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
                flexGrow={1}
                paddingRight={2}
              >
                <Typography variant="h6" marginBottom={1}>
                  {data.name}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="light">
                  {data.number}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
          <Typography align="center" mb={3} variant="h1" fontSize={25}>Últimos 5 cursos añadidos</Typography>
          <LastFiveCourses />
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <Typography align="center" mb={3} variant="h1" fontSize={25}>Últimos 5 usuarios añadidos</Typography>
          <LastFiveUsers />
        </Grid>
      </Grid>
    </>
  );
};
export default IndexAdmin;

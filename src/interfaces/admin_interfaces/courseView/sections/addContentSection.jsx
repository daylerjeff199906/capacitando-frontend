import * as React from "react";
import { useParams } from "react-router-dom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FormAddSection from "../components/formAddSection";
import TableListSection from "../components/tableListSection";
import FormAddClass from "../components/formAddClass";
import TableListClass from "../components/tableListClass";

import useCourse from "../../../../hooks/useCourse";
const AddContentSection = () => {
  const [detailCourse, setDetailCourse] = React.useState({});

  const { getDetailCourse } = useCourse();
  const idCourse = useParams();
  const idcurso = idCourse.id;

  React.useEffect(() => {
    const fetchData = async () => {
      const courseData = await getDetailCourse(idcurso);
      setDetailCourse(courseData);
    };
    fetchData();
  }, [idcurso, getDetailCourse]);

  return (
    <>
      <Box paddingY={6}>
        <Typography
          variant="h4"
          component={"h6"}
          fontFamily={"Poppins"}
          fontWeight={700}
        >
          {detailCourse.titulo}
        </Typography>
        <Typography variant="h6" component={"h6"} fontFamily={"Poppins"}>
          Gestionar Contenido de Cursos
        </Typography>
        {/* {detailCourse?.sesiones?.length > 0 ? (
          <Typography variant="body1" component={"p"} fontFamily={"Poppins"}>
            {detailCourse?.sesiones?.length} Sesiones
          </Typography>
        ) : (
          <Typography variant="body1" component={"p"} fontFamily={"Poppins"}>
            No hay sesiones
          </Typography>
        )} */}
      </Box>
      <Grid container spacing={4} sx={{ paddingRight: 4 }}>
        <Grid item xs={12} md={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={2}>
              Añadir Sesión
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormAddSection />
              </Grid>
              <Grid item xs={12}>
                <TableListSection />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
            <Typography variant="h6" paddingY={2}>
              Añadir contenido
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormAddClass />
              </Grid>
              <Grid item xs={12}>
                <TableListClass />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AddContentSection;

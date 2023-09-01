import { Box, Container, Grid } from "@mui/material";
import SideBarStudent from "../components/sideBarStudent";
import CourseContentSection from "./courseContentSection";

const CourseDetails = () => {
  return (
    <>
      <Box padding={4}>
        <Container maxWidth={"2xl"}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <SideBarStudent />
            </Grid>
            <Grid item xs={9}>
              <CourseContentSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default CourseDetails;

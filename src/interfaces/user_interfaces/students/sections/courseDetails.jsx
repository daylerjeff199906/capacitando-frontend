import { Box, Container, Drawer } from "@mui/material";
import SideBarStudent from "../components/sideBarStudent";
import CourseContentSection from "./courseContentSection";

const CourseDetails = () => {
  return (
    <>
      <Box
        display={"flex"}
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container maxWidth={"xl"}>
          <Box component={"main"} flexGrow={4} padding={3}>
            <CourseContentSection />
          </Box>
        </Container>
        <Drawer
          variant="permanent"
          open={false}
          sx={{
            width: 500,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 500,
              boxSizing: "border-box",
            },
          }}
          anchor="right"
        >
          <Box sx={{ overflow: "auto" }}>
            <SideBarStudent />
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
export default CourseDetails;

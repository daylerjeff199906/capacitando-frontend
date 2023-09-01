import { Box, Container, Drawer } from "@mui/material";
import SideBarStudent from "../components/sideBarStudent";
import CourseContentSection from "./courseContentSection";
import Navbar from "../../../../components/NavBar";

const CourseDetails = () => {
  return (
    <>
    <Navbar 
    widthNavBAr={300}
    />
      <Box display={"flex"}>
        <Container maxWidth={"xl"}>
          <Box
            component={"main"}
            flexGrow={4}
            padding={3}
            // sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <CourseContentSection />
          </Box>
        </Container>
        <Drawer
          variant="permanent"
          sx={{
            width: 300,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 300,
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

import * as React from "react";
import { Box, Container, Drawer } from "@mui/material";
import SideBarStudent from "../components/sideBarStudent";
import CourseContentSection from "./courseContentSection";
import { useParams } from "react-router-dom";

import useCourse from "../../../../hooks/useCourse";

const CourseDetails = () => {
  const [detailCourse, setDetailCourse] = React.useState({});
  const { getDetailCourse } = useCourse();
  const idCourse = useParams();
  const id = idCourse.id;

  React.useEffect(() => {
    getDetailCourse(id).then((data) => {
      setDetailCourse(data);
    });
  }, [getDetailCourse, id]);
  console.log(detailCourse);

  return (
    <>
      <Box
        display={"flex"}
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container maxWidth={"xl"}>
          <Box component={"main"} flexGrow={4} padding={3}>
            <CourseContentSection detailCourse={detailCourse} />
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
            <SideBarStudent detailCourse={detailCourse} />
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
export default CourseDetails;

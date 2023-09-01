import * as React from "react";
import { Box, Container, Drawer } from "@mui/material";
import SideBarStudent from "../components/sideBarStudent";
import CourseContentSection from "./courseContentSection";
import { useParams } from "react-router-dom";

import useCourse from "../../../../hooks/useCourse";

const CourseDetails = () => {
  const [detailCourse, setDetailCourse] = React.useState({});
  const [sectionSelected, setSectionSelected] = React.useState(null);
  const [selectedContentId, setSelectedContentId] = React.useState(null);

  const { getDetailCourse } = useCourse();
  const idCourse = useParams();
  const id = idCourse.id;

  React.useEffect(() => {
    getDetailCourse(id).then((data) => {
      setDetailCourse(data);
    });
  }, [getDetailCourse, id]);
  console.log(detailCourse);

  const handleSelectContent = (sesionId, contenidoId) => {
    setSectionSelected(sesionId);
    setSelectedContentId(contenidoId);
  };

  return (
    <>
      <Box
        display={"flex"}
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container maxWidth={"xl"}>
          <Box component={"main"} flexGrow={4} padding={3}>
            <CourseContentSection
              detailCourse={detailCourse}
              contentSelected={selectedContentId}
              sectionSelected={sectionSelected}
            />
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
            <SideBarStudent
              detailCourse={detailCourse}
              contenidoSelect={handleSelectContent}
            />
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
export default CourseDetails;

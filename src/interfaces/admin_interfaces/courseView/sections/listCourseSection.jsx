import { Box, Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import TableListCourses from "../components/tableListCourses";

const ListCourseSection = () => {
  const idRol = localStorage.getItem("rol");

  return (
    <>
      <Box display="flex" paddingBottom={2}>
        {/* <TextField size="small" placeholder="Buscar usuario..." fullWidth /> */}
        {idRol === "1" ? (
          <Tooltip title="Agregar nuevo curso">
            <Link
              to="/dashboard/courses/add"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" sx={{ marginLeft: 2 }}>
                Agregar
              </Button>
            </Link>
          </Tooltip>
        ) : null}
      </Box>
      <TableListCourses />
    </>
  );
};
export default ListCourseSection;

import { Box, Button, TextField, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import TableListCourses from "../components/tableListCourses";

const ListCourseSection = () => {
  return (
    <>
      <Box display="flex" paddingBottom={2}>
        <TextField size="small" placeholder="Buscar usuario..." fullWidth />
        <Tooltip title="Agregar nuevo curso">
          <Link to="/dashboard/courses/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ marginLeft: 2 }}>
              Agregar
            </Button>
          </Link>
        </Tooltip>
      </Box>
      <TableListCourses />
    </>
  );
};
export default ListCourseSection;

import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import TableListCourses from "../components/tableListCourses";

const ListCourseSection = () => {
  return (
    <>
      <Box display="flex" paddingBottom={2}>
        <TextField size="small" placeholder="Buscar usuario..." fullWidth />
        <Link to="/dashboard/courses/add" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ marginLeft: 2 }}>
            Agregar
          </Button>
        </Link>
      </Box>
      <TableListCourses />
    </>
  );
};
export default ListCourseSection;

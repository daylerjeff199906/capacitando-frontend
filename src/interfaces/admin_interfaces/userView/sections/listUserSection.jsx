import { Box, Button, TextField } from "@mui/material";
import TableListUsers from "../components/tableListUsers";
import { Link } from "react-router-dom";

const ListUserSection = () => {
  return (
    <>
      <Box display="flex" paddingBottom={2}>
        <TextField size="small" placeholder="Buscar usuario..." fullWidth />
        <Link to="/dashboard/users/add" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ marginLeft: 2 }}>
            Agregar
          </Button>
        </Link>
      </Box>
      <TableListUsers />
    </>
  );
};
export default ListUserSection;

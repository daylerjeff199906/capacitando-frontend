import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const Sidebar = () => {
  return (
    <Paper sx={{ height: "100vh", position: "fixed", paddingRight: "24px" }}>
      <Box>
        <MenuList>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </MenuItem>
          </Link>
          <MenuItem>
            <Typography fontWeight={700} color={"gray"}>
              Cursos
            </Typography>
          </MenuItem>
          <Link
            to="/dashboard/courses"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de cursos" />
            </MenuItem>
          </Link>
          <Link
            to="/dashboard/category"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <LibraryAddIcon />
              </ListItemIcon>
              <ListItemText primary="Añadir categoria" />
            </MenuItem>
          </Link>
          <Link
            to="/dashboard/courses/add"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <PlaylistAddIcon />
              </ListItemIcon>
              <ListItemText primary="Añadir curso" />
            </MenuItem>
          </Link>
          <Link
            to="/dashboard/courses/1"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <PostAddOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Añadir contendio" />
            </MenuItem>
          </Link>
          <MenuItem>
            <Typography fontWeight={700} color={"gray"}>
              Usuarios
            </Typography>
          </MenuItem>
          <Link
            to="/dashboard/users"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Lista de usuarios" />
            </MenuItem>
          </Link>
          <Link
            to="/dashboard/users/add"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Agregar usuario" />
            </MenuItem>
          </Link>
        </MenuList>
      </Box>
    </Paper>
  );
};

export default Sidebar;

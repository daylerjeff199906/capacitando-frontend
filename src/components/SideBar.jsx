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
import CategoryIcon from "@mui/icons-material/Category";

const rolUser = localStorage.getItem("rol");

const Sidebar = () => {
  return (
    <>
      <Paper sx={{ height: "100vh", backgroundColor: "#263238" }}>
        <Box paddingTop={10}>
          <MenuList style={{ color: "white" }}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <DashboardIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </MenuItem>
            </Link>
            {/* Opcion de lista de cursos */}
            <MenuItem>
              <Typography fontWeight={700}>Cursos</Typography>
            </MenuItem>
            <Link
              to="/dashboard/courses"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <FormatListBulletedIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary="Lista de cursos" />
              </MenuItem>
            </Link>

            {rolUser === "1" ? (
              <>
                {/* Opcion de lista de categorias */}
                <Link
                  to="/dashboard/category"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <CategoryIcon htmlColor="white" />
                    </ListItemIcon>
                    <ListItemText primary="Categorias" />
                  </MenuItem>
                </Link>
                {/* Opcion de añadir curso */}
                <Link
                  to="/dashboard/courses/add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <PlaylistAddIcon htmlColor="white" />
                    </ListItemIcon>
                    <ListItemText primary="Añadir curso" />
                  </MenuItem>
                </Link>
              </>
            ) : (
              <></>
            )}

            <MenuItem>
              <Typography fontWeight={700} color={"white"}>
                Usuarios
              </Typography>
            </MenuItem>
            <Link
              to="/dashboard/users"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <FormatListBulletedIcon htmlColor="white" />
                </ListItemIcon>
                <ListItemText primary="Lista de usuarios" />
              </MenuItem>
            </Link>

            {rolUser === "1" ? (
              <>
                <Link
                  to="/dashboard/users/add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAddIcon htmlColor="white" />
                    </ListItemIcon>
                    <ListItemText primary="Agregar usuario" />
                  </MenuItem>
                </Link>
              </>
            ) : (
              <></>
            )}
          </MenuList>
        </Box>
      </Paper>
    </>
  );
};

export default Sidebar;

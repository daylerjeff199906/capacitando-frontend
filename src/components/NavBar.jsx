import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import ProfileModal from "../pages/Profile";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { logout } = useAuth();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token) {
      setAuth(true);
      setUser(storedUser);
    }
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openProfileModal = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ marginRight: "auto" }}
          >
            Capacitando
          </Typography>

          {auth && (
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ marginRight: "auto" }}
              >
                Hola, {user}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={openProfileModal}>Profile</MenuItem>
                <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Navbar;

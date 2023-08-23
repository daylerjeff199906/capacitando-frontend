// Navbar.js
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" fontWeight={700}>Capacitando</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

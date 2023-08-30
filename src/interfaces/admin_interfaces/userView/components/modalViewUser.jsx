/* eslint-disable react/prop-types */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Chip from "@mui/material/Chip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

export default function ModalViewUser({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userFields = [
    { label: "DNI", value: user.dni },
    { label: "Nombre", value: user.nombre },
    { label: "Apellido", value: user.apellido },
    { label: "Correo", value: user.correo },
    { label: "Dirección", value: user.direccion },
    { label: "Teléfono", value: user.telefono },
    { label: "Rol", value: user.rol },
    { label: "Estado", value: user.estado },
    { label: "Nombre de usuario", value: user.usuario },
    { label: "Carrera", value: user.carrera },
  ];

  return (
    <div>
      <Chip
        icon={<RemoveRedEyeIcon />}
        label="Ver"
        size="small"
        onClick={handleOpen}
        color="success"
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          borderRadius: 24,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              fontWeight={700}
              fontFamily={"poppins"}
              component="h2"
            >
              Detalles de usuario
            </Typography>
            <Divider />
            <Grid container spacing={2} sx={{ paddingRight: 4 }}>
              <Grid item xs={6}>
                <Stack spacing={2} sx={{ paddingTop: 2 }}>
                  {userFields.map((field) => (
                    <Typography
                      key={field.label}
                      variant="body1"
                      fontWeight={700}
                      fontFamily={"poppins"}
                    >
                      {field.label}:
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={2} sx={{ paddingTop: 2 }}>
                  {userFields.map((field) => (
                    <Typography
                      key={field.label}
                      variant="body1"
                      fontWeight={400}
                      fontFamily={"poppins"}
                    >
                      {field.value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

/* eslint-disable react/prop-types */
import * as React from "react";
import { Divider, Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

import useUsers from "../hooks/useUsers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "24px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ProfileModal({ openModal, setOpenModal }) {
  // const [idUser, setIdUser] = React.useState("");
  const { getProfile, detailUser } = useUsers();

  const [perfilUser, setPerfilUser] = React.useState({});

  React.useEffect(() => {
    getProfile().then((data) => {
      detailUser(data.idusuario).then((data) => {
        setPerfilUser(data);
      });
    });
  }, [getProfile, detailUser]);

  const details = [
    {
      label: "Nombre completo",
      value: perfilUser.nombre + " " + perfilUser.apellido,
    },
    { label: "Carrera", value: perfilUser.carrera },
    { label: "Correo", value: perfilUser.correo },
    { label: "Dirección", value: perfilUser.direccion },
    { label: "Teléfono", value: perfilUser.telefono },
    {
      label: "Rol",
      value:
        perfilUser.rol === 1
          ? "Admin"
          : perfilUser.rol === 2
          ? "Docente"
          : "Alumno",
    },
    { label: "Nombre de usuario", value: perfilUser.usuario },
  ];

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography
            variant="h5"
            fontFamily={"poppins"}
            fontWeight={700}
            id="parent-modal-title"
            mb={1}
          >
            Perfil de usuario
          </Typography>
          <Divider />
          <Box>
            {details.map((detail, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <Typography
                  variant="body1"
                  fontFamily={"poppins"}
                  fontWeight={700}
                >
                  {detail.label}:
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={"poppins"}
                  fontWeight={400}
                >
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

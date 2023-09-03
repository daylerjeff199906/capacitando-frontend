/* eslint-disable react/prop-types */

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Stack, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 256,
  minHeight: 256,
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

export default function ModalDetailCourse({ modalOpen, onClose, course }) {
  const userFields = [
    { label: "Categoria", value: course?.categoria },
    { label: "Descripción", value: course?.descripcion },
    { label: "Horas de duración", value: course?.hora_duracion },
    { label: "Total de clases", value: course?.total_clases },
  ];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={onClose}
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
        <Fade in={modalOpen}>
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                fontWeight={700}
                fontFamily={"poppins"}
                component="h2"
              >
                Curso: {course?.titulo}
              </Typography>
              <IconButton onClick={onClose} size="small">
                <CloseIcon />
              </IconButton>
            </div>
            <Divider />
            <Grid container spacing={2} sx={{ paddingRight: 4 }}>
              <Grid item xs={5}>
                <Stack spacing={1} sx={{ paddingTop: 2 }}>
                  {userFields.map((field) => (
                    <Box key={field.label}>
                      <Typography
                        variant="body1"
                        fontWeight={700}
                        fontFamily={"poppins"}
                      >
                        {field.label} :
                      </Typography>
                      <Typography variant="body1" fontFamily={"poppins"}>
                        {field.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  fontFamily={"poppins"}
                >
                  Docentes asignados
                </Typography>
                {course?.docentes?.length > 0 && (
                  <Stack sx={{ paddingBottom: 1 }}>
                    {course?.docentes.map((docente) => (
                      <Typography
                        key={docente.id_docentes}
                        variant="body1"
                        fontFamily={"poppins"}
                      >
                        {docente.docente}
                      </Typography>
                    ))}
                  </Stack>
                )}
                <Typography
                  variant="body1"
                  fontWeight={700}
                  fontFamily={"poppins"}
                >
                  Alumnos asignados
                </Typography>
                {course?.estudiantes?.length > 0 && (
                  <Stack>
                    {course?.estudiantes.map((estudiante) => (
                      <Typography
                        key={estudiante.id_estudiante}
                        variant="body1"
                        fontFamily={"poppins"}
                      >
                        {estudiante.estudiante}
                      </Typography>
                    ))}
                  </Stack>
                )}
              </Grid>
              <Grid item xs={7}>
                <Box sx={{
                  overflowY: "scroll",
                  height: "50%",
                }}
                >
                  <Stack spacing={2} sx={{ paddingTop: 2 }}>
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      fontFamily={"poppins"}
                    >
                      Sesiones
                    </Typography>
                    {course?.sesiones?.length > 0 &&
                      course?.sesiones.map((sesion) => (
                        <Stack
                          key={sesion.idsesion}
                          spacing={1}
                          sx={{
                            paddingTop: 2,
                            border: "1px solid #ccc",
                            borderRadius: 4,
                            padding: 2,
                          }}
                        >
                          <Typography
                            variant="body1"
                            fontWeight={700}
                            fontFamily={"poppins"}
                          >
                            {sesion.nombre_sesion}
                          </Typography>
                          {/* Otros detalles de la sesión aquí */}
                        </Stack>
                      ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

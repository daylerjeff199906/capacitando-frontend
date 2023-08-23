import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FormAddCourse = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  return (
    <>
      <Box>
        <Stack spacing={1}>
          <Typography variant="body1">Título</Typography>
          <TextField
            size="small"
            placeholder="Ingrese el título del curso ..."
            fullWidth
          />
          <Typography variant="body1">Descripción corta</Typography>
          <TextField
            size="small"
            placeholder="Esta sección aparecerá junto a la imagen de portada, redacte una breve descripción del curso resaltando lo más importante..."
            fullWidth
            multiline
            rows={4}
          />
          <Typography variant="body1">Url de video de presentación</Typography>
          <TextField
            size="small"
            placeholder="Ingrese el título del curso ..."
            fullWidth
          />
             <Typography variant="body1">Subir imagen de portada</Typography>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="fileInput"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Button variant="contained" component="span" size="small" color="success">
              Subir imagen
            </Button>
          </label>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
              border: "1px dashed #ccc",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            Arrastra y suelta la imagen aquí
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Guardar</Button>
              <Link to="/dashboard/courses" style={{ textDecoration: "none" }}>
                <Button variant="contained">Cancelar</Button>
              </Link>
            </Stack>
          </Box>

        </Stack>
      </Box>
    </>
  );
};
export default FormAddCourse;

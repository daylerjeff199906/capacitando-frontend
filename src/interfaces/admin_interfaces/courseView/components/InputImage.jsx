import { useState } from "react";
import { Button, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Realiza las operaciones necesarias con el archivo seleccionado, por ejemplo, cargarlo o mostrar una vista previa.
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // Puedes personalizar el estilo de la zona de arrastrar y soltar aquí.
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Realiza las operaciones necesarias con el archivo soltado, por ejemplo, cargarlo o mostrar una vista previa.
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="fileInput"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
        <Button
          variant="contained"
          component="span"
          size="small"
          color="success"
          startIcon={<CloudUploadIcon />}
        >
          Subir imagen
        </Button>
      </label>
      <Paper
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{
          border: "1px dashed #ccc",
          padding: "20px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Vista previa"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        ) : (
          <Typography>Arrastra y suelta la imagen aquí</Typography>
        )}
      </Paper>
    </div>
  );
};

export default UploadImage;

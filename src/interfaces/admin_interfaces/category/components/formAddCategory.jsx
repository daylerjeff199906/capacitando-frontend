/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useCategory from "../../../../hooks/useCategory";

const FormAddCategory = () => {
  const [idcategoria, setId] = useState("");
  const { saveCategory, categoryId, clearCategoryId } = useCategory();

  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    if (categoryId?.categoria) {
      setCategoria(categoryId.categoria);
      setId(categoryId.idcategoria);
    }
  }, [categoryId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([categoria].includes("")) {
      return;
    }

    saveCategory({
      idcategoria,
      categoria,
    });

    clearTextFields();
  };

  const clearTextFields = () => {
    setCategoria("");
    setId("");
    clearCategoryId();
  };

  useEffect(() => {
    return () => {
      clearTextFields();
    };
  }, []);

  return (
    <>
      <Box padding={3} backgroundColor="#ffffff" borderRadius={4}>
        <Typography
          variant="h6"
          f
          paddingY={2}
          fontFamily={"poppins"}
          fontWeight={600}
        >
          {idcategoria ? "Editar categoría" : "Añadir categoría"}
        </Typography>
        <Divider />
        <FormGroup>
          <Stack spacing={2} sx={{ paddingTop: 2 }}>
            <Typography variant="subtitle1" fontFamily={"poppins"}>
              Nombre de la categoría
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Escribe el nombre de la categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {idcategoria ? "Guardar cambios" : "Guardar"}
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginLeft: 2 }}
                onClick={clearTextFields}
              >
                Cancelar
              </Button>
            </Box>
          </Stack>
        </FormGroup>
      </Box>
    </>
  );
};
export default FormAddCategory;

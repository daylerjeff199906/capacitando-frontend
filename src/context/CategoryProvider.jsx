/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [categoryId, setCategoryId] = useState({});
  const [message, setMessage] = useState("");

  const getCategory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.get("/categories/list", config);
      setCategorys(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    message &&
      setTimeout(() => {
        setMessage("");
      }, 3000);
  }, [message]);

  const saveCategory = async (category) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      if (category.idcategoria) {
        const { data } = await userAxios.patch(
          `/categories/update/${category.idcategoria}`,
          category,
          config
        );
        setCategorys(data);
        getCategory();
        setMessage("Categoria actualizada correctamente");
      } else {
        const { data } = await userAxios.post(
          "/categories/create",
          category,
          config
        );
        setCategorys([...categorys, data]);
        getCategory();
        setMessage("Categoria guardada correctamente");
      }
    } catch (error) {
      console.log(error);
      setMessage("Error al guardar la categoria");
    }
  };

  const editCategory = (category) => {
    setCategoryId(category);
  };

  const editStateCategory = async (category) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.put(
        `/categories/status/${category.idcategoria}`,
        category,
        config
      );
      setCategorys(data);
      getCategory();
      setMessage("Estado eliminado correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  const clearCategoryId = () => {
    setCategoryId({});
  };

  return (
    <CategoryContext.Provider
      value={{
        getCategory,
        categorys,
        categoryId,
        saveCategory,
        editCategory,
        editStateCategory,
        clearCategoryId,
        message,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };

export default CategoryContext;

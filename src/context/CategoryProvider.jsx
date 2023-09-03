/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import userAxios from "../config/axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [categoryId, setCategoryId] = useState({});

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
      console.log(data);
      setCategorys(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveCategory = async (category) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      if (category.id) {
        const { data } = await userAxios.patch(
          `/categories/update/${category.id}`,
          category,
          config
        );
        setCategorys(data);
        getCategory();
      } else {
        const { data } = await userAxios.post(
          "/categories/create",
          category,
          config
        );
        setCategorys([...categorys, data]);
        getCategory();
      }
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };

export default CategoryContext;

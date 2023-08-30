/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [categoryId, setCategoryId] = useState({});

  useEffect(() => {
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
    getCategory();
  }, []);

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
        console.log(data);
        setCategorys((prevCategorys) =>
          prevCategorys.map((category) =>
            category.id === data.id ? data : category
          )
        );
      } else {
        const { data } = await userAxios.post(
          "/categories/create",
          category,
          config
        );
        console.log(data);
        setCategorys((prevCategorys) => [...prevCategorys, data]);
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
      setCategorys((prevCategorys) =>
        prevCategorys.map((category) =>
          category.id === data.id ? data : category
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categorys,
        categoryId,
        saveCategory,
        editCategory,
        editStateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };

export default CategoryContext;

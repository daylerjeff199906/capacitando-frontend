/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);

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

  return (
    <CategoryContext.Provider value={{ categorys }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };

export default CategoryContext;

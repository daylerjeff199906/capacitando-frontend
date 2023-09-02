/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import userAxios from "../config/axios";

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [idSesion, setIdSesion] = useState("");
  const [clases, setClases] = useState([]);

  const getIdSesion = (id) => {
    setIdSesion(id);
    console.log(idSesion);
  };

  const getClases = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.get(`/contents/list/${id}`, config);
      setClases(data);
    } catch (error) {
      setClases([]);
      console.log(error);
    }
  };

  return (
    <ClassContext.Provider
      value={{
        getIdSesion,
        idSesion,
        getClases,
        clases,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export { ClassProvider };
export default ClassContext;

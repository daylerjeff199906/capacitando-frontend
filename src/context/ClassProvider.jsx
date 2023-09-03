/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import userAxios from "../config/axios";

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [idSesion, setIdSesion] = useState("");
  const [clases, setClases] = useState([]);
  const [claseId, setClaseId] = useState({});

  const getIdSesion = (id) => {
    setIdSesion(id);
    console.log(idSesion);
  };

  const clearIdSesion = () => {
    setIdSesion("");
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

  const saveClass = async (clase) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (clase.idclase) {
      try {
        const { data } = await userAxios.patch(
          `/contents/update/${clase.idclase}`,
          clase,
          config
        );
        setClases([...clases, data]);
        getClases(idSesion);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/contents/create",
          clase,
          config
        );
        setClases([...clases, data]);

        getClases(idSesion);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editClass = (clase) => {
    setClaseId(clase);
    console.log(claseId);
  };

  const clearClaseId = () => {
    setClaseId({});
  };

  const clearClases = () => {
    setClases([]);
  };

  return (
    <ClassContext.Provider
      value={{
        getIdSesion,
        idSesion,
        clearIdSesion,
        getClases,
        clases,
        saveClass,
        editClass,
        claseId,
        clearClaseId,
        clearClases,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export { ClassProvider };
export default ClassContext;

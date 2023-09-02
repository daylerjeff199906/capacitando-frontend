/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import userAxios from "../config/axios";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [idCurso, setIdCurso] = useState("");
  const [message, setMessage] = useState("");
  const [sesions, setSesions] = useState([]);
  const [sesionId, setSesionId] = useState({});

  const getIdCurso = (id) => {
    setIdCurso(id);
    console.log(idCurso);
  };

  const getSesions = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await userAxios.get(`/sessions/list/${id}`, config);
      setSesions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveSesion = async (sesion) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (sesion.idsesion) {
      try {
        const { data } = await userAxios.patch(
          `/sessions/update/${sesion.idsesion}`,
          sesion,
          config
        );
        setMessage(data);
        getSesions(idCurso);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/sessions/create",
          sesion,
          config
        );
        setSesions([...sesions, data]);
        setMessage(data.message);
        getSesions(idCurso);
      } catch (error) {
        setMessage(error.response.data.message);
        console.log(error);
      }
    }
  };

  const editSesion = (sesion) => {
    setSesionId(sesion);
  };

  const editStateSesion = async (sesion) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.put(
        `/sessions/status/${sesion.idsesion}`,
        sesion,
        config
      );
      setMessage(data);
      getSesions(idCurso);
    } catch (error) {
      console.log(error);
    }
  };

  const clearSesionId = () => {
    setSesionId({});
  };

  return (
    <ContentContext.Provider
      value={{
        getIdCurso,
        saveSesion,
        message,
        getSesions,
        sesions,
        sesionId,
        clearSesionId,
        editSesion,
        editStateSesion,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentProvider };
export default ContentContext;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import userAxios from "../config/axios";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [message, setMessage] = useState("");
//   const [sesions, setSesions] = useState([]);

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
      return data;
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
    if (sesion.id) {
      try {
        const { data } = await userAxios.put(
          `/sessions/update/${sesion.id}`,
          sesion,
          config
        );
        setMessage(data);
        // setSesions((prevState) =>
        //   prevState.map((sesion) => (sesion.id === data.id ? data : sesion))
        // );
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
        setMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ContentContext.Provider
      value={{
        saveSesion,
        message,
        getSesions,
        // sesions,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentProvider };
export default ContentContext;

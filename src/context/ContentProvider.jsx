/* eslint-disable react/prop-types */
import { createContext } from "react";
import userAxios from "../config/axios";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
//   const [sesions, setSesions] = useState([]);

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
        console.log(data);
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
        console.log(data);
        // setSesions((prevState) => [...prevState, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ContentContext.Provider
      value={{
        saveSesion,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentProvider };
export default ContentContext;

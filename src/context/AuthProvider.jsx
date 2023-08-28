/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import userAxios from "../config/axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuth(null);
        return;
      }
      console.log(token);
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await userAxios.get("/admin/list", config);
        console.log(data);
      } catch (error) {
        console.log(error.error.data.msg);
      }
    };

    authUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

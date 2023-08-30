/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usuarioId, setUsuarioId] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("mi token 2 : ", token);
        if (!token) return;

        const config = {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await userAxios.get("/users/admin/list", config);
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const saveUsers = async (user) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (user.id) {
      try {
        const { data } = await userAxios.patch(
          `/users/update/${user.id}`,
          user,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/users/admin/create",
          user,
          config
        );
        setUsers([...users, data]);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("usuario:", user);
    return;
  };

  const editUsers = (user) => {
    setUsuarioId(user);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        usuarioId,
        saveUsers,
        editUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

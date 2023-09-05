/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import userAxios from "../config/axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usuarioId, setUsuarioId] = useState({});
  const [message, setMessage] = useState("");

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
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

  useEffect(() => {
    message &&
      setTimeout(() => {
        setMessage("");
      }, 3000);
  }, [message]);

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
        // setUsers(data);
        setMessage(data.message);

        getUsers();
      } catch (error) {
        setMessage("Error al actualizar el usuario");
      }
    } else {
      try {
        const { data } = await userAxios.post(
          "/users/admin/create",
          user,
          config
        );
        setMessage(data.message);

        getUsers();
      } catch (error) {
        setMessage("Error al crear el usuario");
      }
    }
    return;
  };

  const editUsers = (user) => {
    setUsuarioId(user);
  };

  const editStateUser = async (user) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.put(
        `/users/status/${user.idusuario}`,
        user,
        config
      );
      setMessage(data.message);
      getUsers();
      // setUsers(newUsers);
    } catch (error) {
      setMessage("Error al cambiar el estado del usuario");
    }
  };

  const clearUsers = () => {
    setUsuarioId({});
  };

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await userAxios.get("/users/profile", config);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const detailUser = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await userAxios.get(`/users/detail/${id}`, config);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUsers,
        users,
        clearUsers,
        usuarioId,
        getProfile,
        detailUser,
        saveUsers,
        editUsers,
        editStateUser,
        message,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

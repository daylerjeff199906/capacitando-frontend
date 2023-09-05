/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import userAxios from "../config/axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usuarioId, setUsuarioId] = useState({});

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
        setUsers(data);
        getUsers();
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
        getUsers();
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

  const editStateUser = async (user) => {
    console.log("user: ", user);
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
      setUsers(data);
      getUsers();
      // setUsers(newUsers);
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

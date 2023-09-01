import { useContext } from "react";
import UserContext from "../context/UserProvider";

const useUsers = () => {
  return useContext(UserContext);
};

export default useUsers;

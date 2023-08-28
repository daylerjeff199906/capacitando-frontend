import axios from "axios";

const userAxios = axios.create({
  baseURL: "http://localhost:9000/api/users",
});
export default userAxios;

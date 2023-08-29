import axios from "axios";

const userAxios = axios.create({
  baseURL: "http://localhost:9000/api/",
});
export default userAxios;

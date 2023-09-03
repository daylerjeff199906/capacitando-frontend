import { useContext } from "react";
import SesionContext from "../context/SesionProvider";

const useSesion = () => {
  return useContext(SesionContext);
};

export default useSesion;

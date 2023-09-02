import { useContext } from "react";
import SesionContext from "../context/SesionProvider";

const useClass = () => {
  return useContext(SesionContext);
};

export default useClass;

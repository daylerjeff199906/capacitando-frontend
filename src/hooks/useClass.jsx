import { useContext } from "react";
import ClassContext from "../context/ClassProvider";

const useClass = () => {
  return useContext(ClassContext);
};

export default useClass;

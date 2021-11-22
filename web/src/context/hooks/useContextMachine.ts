import { useContext } from "react";
import { ContextMachine } from "../ContextMachine";

const useContextMachine = ()=>{
  const values = useContext(ContextMachine);
  return values;
};

export default useContextMachine;
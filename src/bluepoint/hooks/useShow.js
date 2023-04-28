import { useState } from "react";

export const useShow = () => {
  const [parrafo1, setParrafo1] = useState(false);
  const [parrafo2, setParrafo2] = useState(true);
  

  const pasar = () => {
    setParrafo1(true);
    setParrafo2(false);
  };


  return [parrafo1, parrafo2, pasar];
};
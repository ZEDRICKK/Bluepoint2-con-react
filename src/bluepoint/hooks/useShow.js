import { useCallback, useState } from "react";

export const useShow = () => {
  const [parrafo1, setParrafo1] = useState(false);
  const [parrafo2, setParrafo2] = useState(true);
  

  const pasar = useCallback(() => {
    setParrafo1(true);
    setParrafo2(false);
  }, []);

  const salir = useCallback(() => {
    setParrafo1(false);
    setParrafo2(true);
  }, []);

  return [parrafo1, parrafo2, pasar, salir];
};
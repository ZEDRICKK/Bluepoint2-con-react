import { useState, useEffect } from "react";

export const useSlider = (initialIndex, maxIndex, interval = 3000) => {
  const [index, setIndex] = useState(initialIndex);

  const next = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(maxIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(intervalId);
  }, [index]);

  return [index, next, prev];
};
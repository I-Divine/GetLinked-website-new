import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const useIsShown = () => {
  const [isShown, setIsShown] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setIsShown(true);
    }
  }, [inView]);

  return { isShown, ref };
};
